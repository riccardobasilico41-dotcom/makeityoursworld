import type { Destinazione } from '@/lib/types'

// Contenuto riutilizzato dal viaggio "Messico Beach Life" (src/content/viaggi/13-messico-beach-life.md).
// Dove un dato non è nel diario originale, il campo resta vuoto o con una nota
// esplicita "da confermare/da completare" — nessun fatto inventato.

export const destinazioniMessico: Destinazione[] = [
  {
    slug: 'cancun',
    paeseSlug: 'messico',
    ordine: 1,
    nome: 'Cancún',
    tipologia: ['mare', 'nightlife', 'cultura'],
    giorniConsigliati: '1-2 giorni, meglio se spezzati tra andata e ritorno',
    visitataPersonalmente: true,
    introduzione:
      'Il punto d\'arrivo e di partenza di quasi ogni viaggio nello Yucatán: aeroporto internazionale, terminal ADO comodo per i bus e spiagge cittadine raggiungibili senza auto.',
    percheAndarci:
      'All\'inizio serve per smaltire il fuso e sistemare le prime cose (SIM, contanti); alla fine, per un pomeriggio di spiaggia libera prima del rientro.',
    cosaVedere: ['Playa Marlin', 'Playa Gaviota', 'Parque las Palapas', 'Mercado 28'],
    cosaFare: [
      'Giornata di spiaggia raggiungendo Playa Marlin o Playa Gaviota con il bus locale R1 (gratuite, niente lettini a pagamento come nella zona Hotelera)',
      'Isla Mujeres in autonomia: traghetto da Puerto Juárez o Playa Tortugas (circa 540 MXN a/r), poi si gira l\'isola con un golf cart a noleggio (1.300-1.500 MXN per 4 persone). In alternativa la giornata organizzata in catamarano, più cara ma con le soste di snorkeling comprese',
      'Isla Contoy e Isla Mujeres in un tour organizzato di un\'intera giornata: Contoy è una riserva naturale con ingressi limitati a 200 persone al giorno; indicativamente 80-100€ a persona',
      'Aperitivo e street food serale a Parque las Palapas',
      'Spiaggia libera davanti al Coco Bongo e, in alta stagione, il Coco Bongo Beach Party nel pomeriggio',
    ],
    doveDormire:
      'Ho dormito all\'Hostel Selina Cancún Downtown, a circa 200 metri dal terminal ADO: pulito, con colazione inclusa a bordo piscina.',
    doveMangiare:
      'Per spendere poco: bancarelle e street food a Parque las Palapas (il mio punto fisso delle prime sere), oppure El Socio Naiz o Taqueria Coapenitos per un pasto messicano semplice a prezzi bassi. Fascia media: a la Parrilla, turistico ma piacevole e con conto separato (occhio al servizio aggiunto in automatico, di solito oltre le 10 persone al tavolo), o Señor Frog, più adatto a pranzo per i suoi giochi alcolici. Per una cena più curata: Naviós Mexican Fusion Seafood, sull\'acqua nella zona Hotelera con vista sui coccodrilli (prezzo medio-alto), o Chambao, il più caro della lista (60€+ a persona) ma con un pescato molto buono.',
    usciteSerali:
      'Il grande classico è il Coco Bongo, discoteca-spettacolo nella zona Hotelera: meglio prendere i biglietti in prevendita, soprattutto nei weekend di alta stagione. Le alternative più economiche sono Mandala (ingresso indicativo intorno ai 20€) e Monkey Business, che unisce cena e serata (all\'ingresso spesso chiedono il badge dell\'hotel o del tour).',
    comeArrivare: 'Aeroporto internazionale di Cancún, il principale hub della zona; bus ADO o Uber per il centro.',
    comeSpostarsi: 'Bus locali (linea R1 rossa) per le spiagge, taxi/Uber per il resto della città.',
    periodoMigliore: 'non l\'ho annotato per questa tappa; vale l\'indicazione generale per la zona, cioè la stagione secca, da novembre ad aprile.',
    costi: 'Città cara: rispetto al resto dell\'itinerario i prezzi sono vicini a quelli europei.',
    erroriDaEvitare: [
      'Non cambiare o prelevare abbastanza contanti nei primi due giorni: dopo si è costretti a fermarsi di continuo',
      'Aspettarsi il mare da cartolina della Riviera Maya: le spiagge cittadine sono buone ma diverse da Tulum o Holbox',
    ],
    miaEsperienza:
      'Cancún per me è stata soprattutto una base pratica: il primo assaggio di Messico con lo street food di Parque las Palapas e l\'ultima giornata libera in spiaggia prima del volo di rientro. Non è la tappa che ricordo di più, ma all\'inizio e alla fine dell\'itinerario funziona bene.',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Spiaggia bianca e onde turchesi con gli hotel della zona hotelera di Cancún sullo sfondo',
    immagine: '/images/messico/cancun.jpg',
  },
  {
    slug: 'valladolid',
    paeseSlug: 'messico',
    ordine: 2,
    nome: 'Valladolid',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '1 notte, anche solo di passaggio verso Mérida',
    visitataPersonalmente: true,
    introduzione:
      'Cittadina coloniale tranquilla al centro dello Yucatán, base comoda per Río Lagartos, Ek Balam e i primi cenote del viaggio.',
    percheAndarci:
      'Spezza il ritmo fra costa ed entroterra. Il centro storico è piacevole da girare a piedi la sera ed è il punto di partenza per una delle combinazioni migliori dell\'itinerario: Ek Balam più il cenote Xcanché.',
    cosaVedere: ['Centro storico coloniale', 'Sito archeologico di Ek Balam'],
    cosaFare: ['Passeggiata serale in centro', 'Bagno al cenote Xcanché'],
    doveDormire: 'Ho dormito all\'Hotel Waye, a pochi passi dalla piazza principale.',
    doveMangiare:
      'I nomi dei ristoranti non me li sono segnati. Il centro storico intorno alla piazza principale è pieno di cantinas e loncherías yucateche a prezzi bassi, tutte a piedi dall\'hotel: si può improvvisare senza prenotare.',
    comeArrivare: 'Via van/auto da Cancún (circa 2-2h30), spesso con tappa a Río Lagartos lungo il tragitto.',
    comeSpostarsi: 'Il centro storico è piccolo e si gira bene a piedi.',
    periodoMigliore: 'per questa tappa non l\'ho annotato; vale la stagione secca consigliata per tutto lo Yucatán, da novembre ad aprile.',
    costi: 'Non mi sono segnato le spese di Valladolid; come il resto dell\'entroterra, è una tappa economica.',
    erroriDaEvitare: [
      'Sottovalutare Ek Balam perché è meno famoso di Chichén Itzá: è molto meno affollato e, col cenote Xcanché lì accanto, è un abbinamento ideale',
    ],
    miaEsperienza:
      'Valladolid è stata una sosta breve ma piacevole: una città molto tranquilla, dove la sera ho fatto una passeggiata dopo una giornata piena fra Río Lagartos, Ek Balam e il cenote Xcanché.',
    esperienzeSlugs: ['rio-lagartos', 'ek-balam-cenote-xcanche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Portici e facciata gialla in stile coloniale nel centro di Valladolid, Yucatán',
    immagine: '/images/messico/valladolid.jpg',
  },
  {
    slug: 'merida',
    paeseSlug: 'messico',
    ordine: 3,
    nome: 'Mérida',
    tipologia: ['cultura', 'nightlife', 'natura'],
    giorniConsigliati: '2 giorni, comoda anche come pausa a metà viaggio',
    visitataPersonalmente: true,
    introduzione:
      'Il capoluogo dello Yucatán: centro storico coloniale, buona vita notturna e, a mezz\'ora di strada, una gita fra mare e curiosità (Playa Progreso e il «pig beach»).',
    percheAndarci:
      'Cultura, shopping locale e una giornata lontano dai siti archeologici del resto del viaggio. Con la lavanderia dell\'hotel è anche il posto giusto per rimettere in ordine i bagagli.',
    cosaVedere: ['Centro storico coloniale', 'Mercado municipal', 'Playa Progreso e il museo del meteorite'],
    cosaFare: [
      'Giornata a Playa Progreso',
      'Bagno coi maialini al «pig beach» (Playa de los Cerditos), poco battuto rispetto al resto del programma',
      'Shopping al mercado municipal',
      'Serata tra La Negrita e la Mezcalería',
    ],
    doveDormire: 'Ho dormito all\'Ontico Urban Design Hotel, nel centro storico.',
    doveMangiare:
      'Abbiamo cenato alla Mezcalería, un locale molto grande e informale dove non serve prenotare. Per pranzo il centro storico e il mercado municipal hanno moltissimi posti economici di cucina yucateca (cochinita pibil, panuchos, sopa de lima).',
    usciteSerali:
      'Drink alla Negrita prima di cena (chiude presto, verso le 22: per goderla con calma meglio prenotare per tempo). Oltre alla Negrita e alla Mezcalería, la strada dei bar e dei locali serali è il Paseo de Montejo.',
    comeArrivare: 'Via van/auto da Valladolid (circa 1h30-2h), passando per Chichén Itzá e Izamal.',
    comeSpostarsi: 'Il centro storico a piedi; per Playa Progreso serve un trasferimento in auto o van (circa 30-40 minuti).',
    periodoMigliore: 'non l\'ho annotato per Mérida; vale la stagione secca consigliata per lo Yucatán, da novembre ad aprile.',
    costi: 'Le spese di Mérida non me le sono segnate; come il resto dell\'entroterra, costa poco.',
    erroriDaEvitare: [
      'La Negrita chiude presto (verso le 22): prenotare per tempo se la si vuole vivere prima di spostarsi altrove',
    ],
    miaEsperienza:
      'Mérida è stata la pausa giusta a metà viaggio: una giornata senza transfer fra Playa Progreso e il pig beach e una vera serata fuori nel centro storico.',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'I portici del Palacio Municipal sulla piazza principale del centro storico di Mérida, Yucatán',
    immagine: '/images/messico/merida.jpg',
  },
  {
    slug: 'campeche',
    paeseSlug: 'messico',
    ordine: 4,
    nome: 'Campeche',
    tipologia: ['cultura'],
    giorniConsigliati: '1 notte, comoda tappa di passaggio',
    visitataPersonalmente: true,
    introduzione:
      'Città coloniale fortificata sul Golfo del Messico, patrimonio UNESCO, molto meno turistica delle altre tappe dell\'itinerario.',
    percheAndarci:
      'Centro storico ben tenuto e tranquillo, buona base prima del transfer più lungo di tutto il viaggio verso Mahahual.',
    cosaVedere: ['Piazza della Cattedrale', 'Puerta del Mar e il lungomare', 'Centro storico fortificato'],
    cosaFare: ['Passeggiata a piedi dalla Cattedrale al lungomare, attraverso la Puerta del Mar'],
    doveDormire: 'Ho dormito all\'Hotel Francis Drake, nel centro storico.',
    doveMangiare:
      'I ristoranti non me li sono segnati. Nel centro storico fortificato ci sono diversi locali sulle vie principali vicino alla Cattedrale, comodi per una cena veloce prima del lungo transfer del giorno dopo verso Mahahual.',
    comeArrivare: 'Via van/auto da Mérida, con tappe a Uxmal, Becal e Pomuch lungo il tragitto.',
    comeSpostarsi: 'Il centro storico è piccolo e si gira a piedi.',
    periodoMigliore: 'non l\'ho annotato per Campeche; vale la stagione secca consigliata per lo Yucatán, da novembre ad aprile.',
    costi: 'Non mi sono segnato le spese di Campeche; l\'entroterra in generale è molto economico.',
    erroriDaEvitare: [
      'Il giorno dopo, verso Mahahual, il transfer è molto lungo e si cambia fuso orario: conviene partire il prima possibile al mattino',
    ],
    miaEsperienza:
      'Una tappa breve ma piacevole. La Piazza della Cattedrale è molto curata, coi tipici lustrascarpe, e la passeggiata fino al lungomare attraverso la Puerta del Mar è stata un bel modo per sgranchirmi dopo ore di van.',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Una porta delle antiche mura del centro storico di Campeche con una casa coloniale colorata sullo sfondo',
    immagine: '/images/messico/campeche.jpg',
  },
  {
    slug: 'mahahual',
    paeseSlug: 'messico',
    ordine: 5,
    nome: 'Mahahual',
    tipologia: ['mare', 'natura'],
    giorniConsigliati: '1-2 notti',
    visitataPersonalmente: true,
    introduzione:
      'Cittadina sul Mar dei Caraibi, molto più tranquilla di Tulum o di Playa del Carmen. È la base per lo snorkeling con le tartarughe e per il secondo Temazcal del viaggio.',
    percheAndarci: 'Mare tranquillo e punto di appoggio comodo per la gita in barca a Bacalar.',
    cosaVedere: ['Lungomare di Mahahual'],
    cosaFare: ['Snorkeling con le tartarughe', 'Temazcal serale nella selva'],
    doveDormire: 'Il nome della struttura non me lo sono segnato; sul lungomare c\'è scelta in tutte le fasce di prezzo.',
    doveMangiare: 'Non mi sono annotato dove abbiamo mangiato a Mahahual.',
    comeArrivare: 'Da Campeche, con il transfer più lungo di tutto l\'itinerario e un cambio di fuso orario.',
    comeSpostarsi: 'Per gli spostamenti a Mahahual non ho appunti.',
    periodoMigliore: 'non l\'ho annotato per Mahahual; vale la stagione secca consigliata per la zona, da novembre ad aprile.',
    costi: 'Le spese di Mahahual non me le sono segnate.',
    erroriDaEvitare: [
      'Il giorno dell\'arrivo ha ritmi serrati: se si sgarra sugli orari delle tappe precedenti (in particolare Balam Ku) salta il resto della giornata',
    ],
    miaEsperienza:
      'Sono arrivato a Mahahual in serata, dopo il transfer più lungo del viaggio. Il giorno dopo è stato fra i più pieni dell\'itinerario, fra Bacalar, lo snorkeling con le tartarughe e il Temazcal: il dettaglio è nella pagina del viaggio.',
    esperienzeSlugs: ['snorkeling-tartarughe-mahahual', 'temazcal'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Spiaggia di Mahahual con palme, tavolini e barche sul Mar dei Caraibi',
    immagine: '/images/messico/mahahual.jpg',
  },
  {
    slug: 'bacalar',
    paeseSlug: 'messico',
    ordine: 6,
    nome: 'Bacalar',
    tipologia: ['natura'],
    giorniConsigliati: 'mezza giornata se in tour da Mahahual, 1-2 notti per goderla con calma',
    visitataPersonalmente: true,
    introduzione:
      'La «laguna dai sette colori», una delle distese d\'acqua più belle dello Yucatán. Si visita in giornata da Mahahual o come tappa a sé, dormendo sul posto.',
    percheAndarci: 'Per l\'acqua che cambia colore secondo la profondità, i tour in barca e il kayak.',
    cosaVedere: ['Laguna di Bacalar'],
    cosaFare: ['Tour in barca di 2 ore sulla laguna', 'Kayak (nel mio caso era incluso dopo il tour in barca)'],
    doveDormire: 'Non ho dormito a Bacalar (l\'ho vista in giornata da Mahahual), quindi non ho una struttura da consigliare; chi vuole fermarsi una notte trova alloggi sulla laguna in tutte le fasce di prezzo.',
    doveMangiare: 'In giornata non mi sono segnato dove abbiamo mangiato.',
    comeArrivare: 'In tour organizzato da Mahahual, oppure in autonomia con van o auto.',
    comeSpostarsi: 'Noi eravamo in tour organizzato da Mahahual; sulla laguna ci si muove in barca o in kayak.',
    periodoMigliore: 'non l\'ho annotato per Bacalar; vale la stagione secca consigliata per la zona, da novembre ad aprile.',
    costi: 'Il prezzo del tour non me lo sono segnato.',
    erroriDaEvitare: [
      'In tour da Mahahual il tempo è poco: chi può, valuti una notte sul posto per goderla con calma',
    ],
    miaEsperienza:
      'L\'ho vista solo in giornata, con un tour in barca di 2 ore e un\'ora di kayak. Bellissima, ma il tempo stretto si è sentito: è una delle tappe che in un prossimo giro farei con più calma.',
    esperienzeSlugs: ['tour-barca-bacalar'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Acque turchesi e trasparenti della laguna di Bacalar con un pontile di legno tra la vegetazione',
    immagine: '/images/messico/bacalar.jpg',
  },
  {
    slug: 'tulum',
    paeseSlug: 'messico',
    ordine: 7,
    nome: 'Tulum',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Rovine maya su una scogliera a picco sul Caribe, alcune delle spiagge più belle della Riviera Maya e una vita notturna che si fa sentire.',
    percheAndarci: 'Cultura (il sito archeologico), mare (Playa Paraíso) e serate nella stessa tappa: altrove è difficile trovarli insieme.',
    cosaVedere: ['Sito archeologico di Tulum, sulla scogliera', 'Caleta Tankah', 'Playa Paraíso', 'Cenote vicino a Dos Ojos, nel sistema Sac Actun'],
    cosaFare: [
      'Sito archeologico di Tulum in mattinata, prima del caldo peggiore: è l\'unico sito maya del Messico affacciato sul mare',
      'Giornata a Caleta Tankah (300 MXN a persona, niente carte; nessun rimborso, nemmeno se si esce dopo pochi minuti)',
      'Pranzo e pomeriggio a Playa Paraíso, in uno dei beach club più consigliati della zona (lettini a pagamento)',
      'Bagno in un cenote della zona di Dos Ojos/Sac Actun: è in grotta, con le stalattiti, diverso dai cenote a cielo aperto dello Yucatán',
      'Per chi ha più tempo: Xcacel (100 MXN; vietati cibo, alcolici e casse audio; aperta 10-16, chiusa il lunedì; da aprile a ottobre si può vedere la schiusa delle tartarughe), oppure Gran Cenote o Cenote Calavera',
    ],
    doveDormire: 'Il nome della struttura di Tulum non me lo sono segnato.',
    doveMangiare:
      'Sabor de Mar per il pesce, El Takazo Jr per tacos a poco prezzo, Bonita (Tulum Burger Bar) per cambiare dal messicano. Per una cena più ricercata, TuTulum: cucina messicana rivisitata (circa 40€ a persona), con qualche piatto a base di insetti per i più curiosi.',
    usciteSerali:
      'Lo Straw Hat è il locale più frequentato la sera; d\'inverno in zona può capitare qualche festival. Per la musica dal vivo c\'è anche Vagalume.',
    comeArrivare: 'In van o in auto da Mahahual (circa 2-3 ore).',
    comeSpostarsi: 'Su come ci siamo mossi a Tulum non ho appunti.',
    periodoMigliore: 'non l\'ho annotato per Tulum; vale la stagione secca consigliata per la zona, da novembre ad aprile.',
    costi: 'Le spese di Tulum non me le sono segnate; è una delle tappe più care, con prezzi quasi europei.',
    erroriDaEvitare: [
      'A Caleta Tankah non si viene rimborsati in nessun caso, nemmeno dopo pochi minuti: meglio pensarci prima di pagare l\'ingresso',
    ],
    miaEsperienza:
      'A Caleta Tankah all\'inizio il mare non era invitante, poi è uscito il sole e la giornata è cambiata, cenote compreso. Il sito archeologico sulla scogliera e Playa Paraíso restano fra i ricordi più forti del viaggio.',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Gruppo in muta ed equipaggiamento da snorkeling in un cenote in grotta vicino a Dos Ojos, Tulum',
    immagine: '/images/messico/cenote-dos-ojos-gruppo.jpg',
  },
  {
    slug: 'playa-del-carmen',
    paeseSlug: 'messico',
    ordine: 8,
    nome: 'Playa del Carmen',
    tipologia: ['nightlife', 'mare'],
    giorniConsigliati: '1 serata nel mio itinerario, ma si può restare 1-2 giorni pieni',
    visitataPersonalmente: true,
    introduzione: 'La città più mondana della Riviera Maya e il punto di partenza classico per l\'escursione a Cozumel.',
    percheAndarci: 'Vita notturna e, per chi ha un giorno in più, la seconda barriera corallina più grande al mondo a Cozumel.',
    cosaVedere: ['5ta Avenida'],
    cosaFare: [
      'Escursione a Cozumel in catamarano condiviso (circa 1.670 MXN a persona, con traghetto a/r, 4 ore di navigazione con soste di snorkeling a Palancar/El Cielo/El Cielito, open bar e pranzo a buffet a Playa Mia) oppure in barca privata (circa 700 MXN a persona, più il traghetto, circa 580 MXN a/r, con snack e 2 birre a persona). In questo viaggio non l\'abbiamo fatta, ma con più tempo la consiglio.',
      'Giornata alle spiagge pubbliche: Mamitas Beach, Playacar Beach, Parque Fundadores',
      'Shopping sulla 5ta Avenida',
      'Serata al Clandestino',
    ],
    doveDormire: 'In questo viaggio a Playa del Carmen ho passato solo una serata, senza dormirci: non ho una struttura da consigliare.',
    doveMangiare:
      'Las Camelias sulla 5ta Avenida per un pasto sostanzioso, Zitla come alternativa. Per un\'occasione speciale Mezcla (circa 50€ a persona): caro ma molto buono.',
    usciteSerali:
      'Il Coco Bongo (la stessa catena di Cancún) è la scelta più nota; sulla 5ta Avenida sono molto frequentati anche Clandestino e Santino.',
    comeArrivare: 'In van o in auto da Tulum (circa 1 ora).',
    comeSpostarsi: 'Su come muoversi in città non ho appunti: l\'ho vista solo per una serata.',
    periodoMigliore: 'non l\'ho annotato; vale la stagione secca consigliata per la Riviera Maya, da novembre ad aprile.',
    costi: 'Per una sola serata non mi sono segnato le spese; come Tulum, ha prezzi quasi europei.',
    erroriDaEvitare: [],
    miaEsperienza:
      'L\'ho vista solo di sera, con una tappa al Clandestino: troppo poco per farmi un\'idea della città, che meriterebbe più tempo (magari con l\'escursione a Cozumel, che nel mio viaggio non abbiamo fatto).',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'La spiaggia e il lungomare di Playa del Carmen visti dal mare, con barche e palme',
    immagine: '/images/messico/playa-del-carmen.jpg',
  },
  {
    slug: 'holbox',
    paeseSlug: 'messico',
    ordine: 9,
    nome: 'Holbox',
    tipologia: ['mare', 'natura', 'nightlife'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Isola senza auto sul Golfo del Messico, raggiungibile solo in traghetto: squalo balena, bioluminescenza e un ritmo molto più lento del resto del viaggio.',
    percheAndarci: 'È il momento più alto dell\'itinerario, per lo squalo balena e per l\'atmosfera dell\'isola.',
    cosaVedere: ['Punta Mosquito', 'Il centro dell\'isola, senza auto'],
    cosaFare: [
      'Escursione con lo squalo balena (vedi la scheda esperienza dedicata)',
      'Bioluminescenza a Punta Mosquito: in autonomia con un «carrito» (taxi locale/golf cart) fino al punto; a piedi (sconsigliato: circa un\'ora di cammino per direzione, quasi tutta al buio); in kayak con guida (500 MXN a persona per gruppi sopra le 8 persone, 400 MXN sotto le 8) o con un tour organizzato in barca. Si vede meglio da aprile a novembre e dipende da fasi lunari e meteo: conviene chiedere sul posto il giorno stesso.',
      'Tour delle 3 Islas (Isla Pájaros, cenote di Yalahau, Isla Pasión o Punta Mosquito): giro condiviso in barca di circa 3 ore, 750-900 MXN a persona secondo l\'operatore (alcuni includono il transfer dall\'hotel per circa 1.100 MXN); l\'ingresso al cenote Yalahau si paga a parte, circa 200 MXN. Si vedono fenicotteri, delfini e diverse specie di uccelli.',
      'Cabo Catoche (nel mio viaggio non l\'abbiamo fatta, ma è fra le escursioni più proposte sull\'isola): la punta più a nord dello Yucatán, dove si incontrano Golfo del Messico e Mar dei Caraibi. Tour condiviso in barca dalla mattina al tardo pomeriggio, con snorkeling su una barriera corallina bassa (circa 2 metri: tartarughe, polpi, aragoste e a volte squali nutrice, innocui), pesca e ceviche fresco preparato sul momento. Indicativamente 80-100$ a persona; conviene confrontare più operatori prima di prenotare.',
      'Passeggiata a cavallo sulla spiaggia: 850 MXN a persona per un\'ora e mezza',
      'Beach club con minimum spending (di solito scalato dal conto finale): Carolinda, Zomay, Barbarossa, Amaite Beach Club',
      'Se piove: corso di cucina alla Puerta Rosa (abbastanza caro, ma una buona alternativa) o lezione di yoga',
    ],
    doveDormire: 'Il nome della struttura di Holbox non me lo sono segnato.',
    doveMangiare:
      'Per spendere poco: Taco Queto per tacos economici e buoni, El Crustaceo Kascarudo per pesce e frutti di mare senza fronzoli. Fascia media: Mandarina, Posada Mawimbi, Viva Zapata, Chiringuito Raíces. Per un\'occasione: Casa Alebrije o Tacos de Humo (qui capita spesso un tequila di benvenuto offerto dalla casa).',
    usciteSerali:
      'Al tramonto il Café del Mar è il posto giusto per un drink con vista. La sera: Hot Corner per pachangueo e musica dal vivo, La Combi fra musica live e DJ set, Bikini Bottom per un DJ set in spiaggia, Tribe Hostel per musica live, Chobys se si vuole vedere ancora il tramonto più tardi.',
    comeArrivare: 'Traghetto da Chiquilà (25-30 minuti), raggiungibile via van/auto da Cancún.',
    comeSpostarsi: 'Isola senza auto: a piedi o con i "carritos" (taxi locali/golf cart).',
    periodoMigliore: 'La bioluminescenza si vede meglio da aprile a novembre, e dipende da fasi lunari e meteo.',
    costi: 'Il conto complessivo di Holbox non me lo sono segnato; i prezzi delle singole escursioni sono nelle voci qui sopra e nelle schede esperienza.',
    erroriDaEvitare: [
      'Partire per la bioluminescenza serale senza molto repellente: a Punta Mosquito le zanzare non danno tregua',
      'Andare a piedi a vedere la bioluminescenza: è quasi un\'ora di cammino al buio per direzione, meglio un carrito, un kayak o un tour in barca',
      'Il tour delle 3 Islas è carino ma un po\' ridondante se si sono già viste cose simili altrove nel viaggio',
    ],
    miaEsperienza:
      'Holbox è stata la chiusura giusta del viaggio. Se dovessi consigliare una sola attività di tutto l\'itinerario, sarebbe l\'escursione con lo squalo balena, che ho fatto proprio qui.',
    esperienzeSlugs: ['squalo-balena-holbox', 'bioluminescenza-holbox', 'tour-3-islas-holbox', 'cabo-catoche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Spiaggia bianca e acqua bassa turchese dell\'isola di Holbox',
    immagine: '/images/messico/holbox-barche.jpg',
  },
]
