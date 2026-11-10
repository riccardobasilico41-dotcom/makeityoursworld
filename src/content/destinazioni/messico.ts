import type { Destinazione } from '@/lib/types'

// Contenuto riutilizzato dal viaggio "Messico Beach Life" (src/content/viaggi/13-messico-beach-life.md).
// Dove un dato non è nel diario originale, il campo resta vuoto o con una nota
// esplicita "da confermare/da completare" — nessun fatto inventato.
// Uxmal e la Ruta Puuc, Palenque e Calakmul (ordine 30-32) sono state aggiunte per
// "Yucatán completo" (src/content/viaggi/95-messico-yucatan-completo.md): Palenque e
// Calakmul visitate da Rick nel giro completo (confermato l'11/11/2026); dati INAH/CONANP verificati il 5/11/2026.

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
    comeArrivare: "L'aeroporto internazionale di Cancún (CUN) è il principale scalo della zona. I bus ADO partono dai terminal per il terminal del centro in circa 30-40 minuti (circa 130-140 MXN, biglietti al banco ADO degli arrivi o su ado.com.mx) e proseguono per Playa del Carmen e Tulum. Il taxi ufficiale si paga al banco dentro il terminal: circa 550-700 MXN per il centro, di più per la zona hotelera. Uber in aeroporto non è garantito. La stazione Cancún Aeropuerto del Tren Maya non è nel terminal: serve una navetta. Nella sala arrivi molti «addetti ai trasporti» vendono multiproprietà: si tira dritto fino all'uscita.",
    comeSpostarsi: 'Bus locali (linea R1 rossa) per le spiagge, taxi/Uber per il resto della città.',
    periodoMigliore: 'non l\'ho annotato per questa tappa; vale l\'indicazione generale per la zona, cioè la stagione secca, da novembre ad aprile.',
    costi: "Città cara: rispetto al resto dell'itinerario i prezzi sono vicini a quelli europei. Budget basso circa 50-70 € al giorno a persona (ostello o hotel semplice in centro, street food a Parque las Palapas, bus R1); medio 120-180 € (hotel in centro o semplice in zona hotelera, Isla Mujeres in traghetto, cene al ristorante); alto da 300 € in su (resort in zona hotelera, catamarano, Coco Bongo). Museo Maya 210 MXN, El Rey 145 MXN, traghetto per Isla Mujeres circa 540 MXN andata e ritorno.",
    erroriDaEvitare: [
      'Non cambiare o prelevare abbastanza contanti nei primi due giorni: dopo si è costretti a fermarsi di continuo',
      'Aspettarsi il mare da cartolina della Riviera Maya: le spiagge cittadine sono buone ma diverse da Tulum o Holbox',
    ],
    miaEsperienza:
      'Cancún per me è stata soprattutto una base pratica: il primo assaggio di Messico con lo street food di Parque las Palapas e l\'ultima giornata libera in spiaggia prima del volo di rientro. Non è la tappa che ricordo di più, ma all\'inizio e alla fine dell\'itinerario funziona bene.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Isla Mujeres",
        testo: "Isola a una breve traversata di traghetto, con spiagge, snorkeling e un villaggio tranquillo, comoda per una gita in giornata.",
        come: "Traghetto da Puerto Juárez o Playa Tortugas; sull'isola si gira in golf cart a noleggio.",
        quando: "Mattina, per avere tempo.",
        tempo: "Giornata",
        costo: "Traghetto circa 540 MXN andata e ritorno, circa 27 €; golf cart 1.300-1.500 MXN al giorno per 4 persone, circa 65-75 € (dal viaggio, 2026)",
        lat: 21.23333,
        lng: -86.73333,
        url: "https://www.ultramarferry.com/",
        consiglio: "In alternativa si prende la giornata organizzata in catamarano, più cara ma con soste di snorkeling comprese.",
      },
      {
        nome: "Playa Delfines e il Mirador",
        testo: "La spiaggia pubblica più ampia della zona hotelera, verso il km 18, senza alberghi alle spalle: sabbia bianca, mare aperto e onde. Sopra c'è il belvedere con la scritta «Cancún», il punto più fotografato della città.",
        come: "Bus R1 o R2 lungo il Boulevard Kukulcán fino alla fermata di Playa Delfines; si scende a piedi dal belvedere.",
        quando: "Mattina, prima del caldo e dei gruppi.",
        tempo: "2-3 ore",
        costo: "Ingresso libero",
        lat: 21.06196,
        lng: -86.77858,
        consiglio: "Guardare la bandiera dei bagnini prima del bagno: qui il mare è aperto e le correnti sono più forti che sul lato della baia.",
      },
      {
        nome: "Playa Marlin e Playa Gaviota",
        testo: "Spiagge pubbliche gratuite nel centro della zona hotelera, senza lettini a pagamento. Sono fra i pochi accessi liberi al mare di questa parte della città; il mare è più mosso che a Isla Mujeres, quindi prima del bagno conviene guardare la bandiera dei bagnini.",
        come: "Bus locale dal centro.",
        quando: "Mattina.",
        tempo: "Mezza giornata",
        costo: "Ingresso libero",
        lat: 21.10387,
        lng: -86.76283,
      },
      {
        nome: "Museo Maya de Cancún e San Miguelito",
        testo: "Il museo dell'INAH nella zona hotelera, con sculture, ceramiche e oggetti trovati nei siti maya del Quintana Roo. Il biglietto comprende la zona archeologica di San Miguelito, un piccolo insediamento maya nel bosco dietro il museo.",
        come: "Bus R1 o R2 fino al km 16,5 del Boulevard Kukulcán; biglietti in cassa o online dalla scheda INAH.",
        quando: "Nelle ore più calde o in una giornata di pioggia.",
        tempo: "1,5-2 ore",
        costo: "210 MXN per gli stranieri, circa 10,5 €, San Miguelito compreso (INAH, 2026)",
        orari: "Da martedì a domenica 9-17, ultimo ingresso 16:30; lunedì chiuso (INAH, 2026)",
        lat: 21.07403,
        lng: -86.77727,
        url: "https://lugares.inah.gob.mx/en/node/4284",
      },
      {
        nome: "Parque las Palapas e Mercado 28",
        testo: "Piazza del centro con bancarelle di street food e musica serale, e il mercato con artigianato e ristorantini.",
        come: "A piedi, in centro.",
        quando: "Sera.",
        tempo: "2-3 ore",
        lat: 21.16121,
        lng: -86.8276,
        consiglio: "Il primo assaggio di Messico con lo street food.",
      },
      {
        nome: "MUSA, il museo subacqueo",
        testo: "Centinaia di sculture di cemento posate sul fondale tra Cancún e Isla Mujeres, pensate per alleggerire la pressione dei sub sulle barriere naturali e diventate a loro volta una scogliera colonizzata da coralli e pesci. Le gallerie sono a Punta Nizuc, Manchones e Punta Sam; a Punta Nizuc si vedono anche in snorkeling.",
        come: "Solo con uscite organizzate, in snorkeling, immersione o barca con il fondo di vetro, prenotabili sul sito ufficiale.",
        quando: "Mattina, quando il mare è più calmo e l'acqua più limpida.",
        tempo: "2-3 ore",
        costo: "Snorkeling a Punta Nizuc 58 $, circa 50 €; immersioni da 115 $, circa 100 € (sito ufficiale, 2026)",
        lat: 21.0763,
        lng: -86.8463,
        url: "https://musamexico.org/",
      },
      {
        nome: "Zona archeologica El Rey",
        testo: "I resti di uno dei porti maya della rotta commerciale lungo la costa caraibica: una strada centrale, due piccole piazze ed edifici dove restano tracce di pittura murale con divinità. Si gira in fretta, tra le iguane che prendono il sole sulle pietre.",
        come: "Al km 18 del Boulevard Kukulcán, sul lato della laguna, con il bus R1 o R2.",
        quando: "Mattina presto o tardo pomeriggio: l'ombra è poca.",
        tempo: "45 minuti",
        costo: "145 MXN per gli stranieri, circa 7 € (INAH, 2026)",
        orari: "Tutti i giorni 8-17, ultimo ingresso 16:30 (INAH, 2026)",
        lat: 21.06083,
        lng: -86.78111,
        url: "https://lugares.inah.gob.mx/en/node/4404",
      },
      {
        nome: "Playa Langosta e Playa Tortugas",
        testo: "Le spiagge sul lato della baia di Mujeres, nella parte nord della zona hotelera: acqua bassa e calma, adatta a chi nuota poco o viaggia con bambini. Da Playa Tortugas partono anche i traghetti per Isla Mujeres.",
        come: "Bus R1 o R2 fino alle fermate di Playa Langosta o Playa Tortugas, nel primo tratto del Boulevard Kukulcán.",
        quando: "Mattina o al tramonto.",
        tempo: "Mezza giornata",
        costo: "Ingresso libero",
        lat: 21.1451,
        lng: -86.78256,
      },
      {
        nome: "Coco Bongo",
        testo: "Locale con spettacolo molto noto, nella zona hotelera: acrobati, musica dal vivo e numeri ispirati ai film, fino a notte fonda. Il prezzo cambia molto in base alla posizione (in piedi, al bancone o al tavolo), quindi conviene capire cosa include il biglietto prima di comprarlo.",
        come: "Biglietti da rivenditori.",
        quando: "Sera.",
        tempo: "Serata",
        costo: "Con open bar indicativamente da 90 $ in su, circa 78 €, secondo la serata (dal viaggio, 2026)",
        lat: 21.1329,
        lng: -86.74721,
        consiglio: "Per gli ingressi provate a sentire Martin di Mexico Grand Tours: ha un po' di tutto.",
      },
      {
        nome: "Laguna Nichupté",
        testo: "La grande laguna alle spalle della zona hotelera, bordata di mangrovie, dove vivono coccodrilli e uccelli acquatici. Dai ristoranti sul lato della laguna si guarda il tramonto, che qui scende dietro l'acqua.",
        come: "Giri in barca o in kayak dalle darsene del Boulevard Kukulcán, oppure una cena in uno dei locali sull'acqua.",
        quando: "Al tramonto.",
        tempo: "1-2 ore",
        lat: 21.09583,
        lng: -86.79194,
        consiglio: "Niente bagno nella laguna: ci sono i coccodrilli.",
      },
      {
        nome: "Isla Blanca",
        testo: "Una lingua di sabbia a nord di Cancún, tra il mare e la laguna Chacmuchuch, quasi senza costruzioni. Spiagge lunghe e libere, acqua bassa sul lato della laguna e vento costante, che ne fa il posto del kitesurf.",
        come: "In auto o taxi dal centro, verso Costa Mujeres; l'ultimo tratto è sterrato.",
        quando: "Una giornata senza vento per la spiaggia, con il vento per il kite.",
        tempo: "Mezza giornata",
        lat: 21.41028,
        lng: -86.81083,
        consiglio: "Portare acqua e qualcosa da mangiare: i servizi sono pochi.",
      },
      {
        nome: "Malecón Tajamar",
        testo: "Una passeggiata pedonale e ciclabile lungo le mangrovie della laguna, tra il centro e la zona hotelera, frequentata la sera da chi corre e dalle famiglie del posto. È il modo più tranquillo per vedere la laguna senza prendere una barca.",
        come: "A piedi, in bici o in taxi dal centro.",
        quando: "Tardo pomeriggio.",
        tempo: "1 ora",
        costo: "Ingresso libero",
        lat: 21.14716,
        lng: -86.81341,
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Mattina: Isla Mujeres in traghetto",
        "Pomeriggio: golf cart e snorkeling",
        "Sera: Parque las Palapas",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: Isla Mujeres",
        "Giorno 2: Playa Marlin, Mercado 28 e, se si vuole, Coco Bongo",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra",
        "Giorno 3: Museo Maya de Cancún e San Miguelito, poi la zona archeologica El Rey",
        "Pomeriggio a Playa Delfines",
        "Tramonto sulla laguna Nichupté",
      ] },
    ],
    zone: [
      {
        nome: "Centro (Downtown)",
        perChi: "budget e vita locale",
        testo: "Hotel economici, mercati e ristoranti, ma lontano dal mare.",
        fascia: "40-100 €",
      },
      {
        nome: "Zona Hotelera",
        perChi: "mare e resort",
        testo: "Spiagge e resort, ma prezzi alti e traffico turistico.",
        fascia: "150-350 €",
      },
      {
        nome: "Isla Mujeres",
        perChi: "chi vuole mare calmo e sere tranquille",
        testo: "Hotel e piccole strutture in paese, con le spiagge del nord a piedi. Per tornare a Cancún si dipende dagli orari dei traghetti.",
      },
    ],
      "sapori": [
        {
          "nome": "Tacos al pastor",
          "testo": "Maiale marinato con ananas, nelle taquerías del centro."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Maiale cotto nel pibil, specialità dello Yucatán."
        },
        {
          "nome": "Ceviche e aguachile",
          "testo": "Pesce crudo marinato nel lime, sul mare."
        },
        {
          "nome": "Marquesitas",
          "testo": "Cialde ripiene di formaggio Edam e Nutella, di strada."
        }
      ],
      "attenzioni": [
        "In zona hotelera i prezzi di cibo e bevande sono molto alti: mangiare in centro.",
        "Taxi senza tassametro: concordare il prezzo prima di salire.",
        "Offerte di time share o tour a prezzi troppo bassi: non seguire chi ferma per strada."
      ],
    // GUIDA-END
    gite: [
      {
        nome: "Isla Contoy",
        distanza: "circa 40 km a nord, in barca",
        come: "Solo con tour autorizzati di una giornata, spesso abbinati a Isla Mujeres; indicativamente 80-100 € a persona (dal viaggio).",
        testo: "Riserva naturale per gli uccelli marini, con spiagge deserte e snorkeling sulla barriera. Gli ingressi sono limitati a 200 persone al giorno: si prenota con anticipo.",
      },
      {
        nome: "Puerto Morelos",
        distanza: "circa 36 km, 30-40 minuti",
        come: "Bus ADO o colectivo verso Playa del Carmen; per i cenote dell'interno serve l'auto.",
        testo: "Paese di pescatori con il vecchio faro inclinato, la barriera corallina protetta davanti alla spiaggia e, verso l'interno, la Ruta de los Cenotes.",
      },
      {
        nome: "Playa del Carmen",
        distanza: "circa 70 km, 1 ora in bus",
        come: "Bus ADO dal terminal del centro o dall'aeroporto, corse frequenti.",
        testo: "La Quinta Avenida pedonale, le spiagge e i traghetti per Cozumel, che ha la seconda barriera corallina più grande al mondo.",
      },
      {
        nome: "Chichén Itzá",
        distanza: "circa 200 km, 2,5-3 ore",
        come: "Auto, bus ADO o Tren Maya fino alla stazione Chichén Itzá.",
        testo: "La grande città maya di El Castillo. Conviene entrare all'apertura delle 8, prima dei pullman da Cancún; la scheda INAH indica 105 + 548 MXN per gli stranieri e apertura 8-16, ultimo ingresso alle 15 (novembre 2026).",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Cancún?",
        risposta: "Uno o due giorni bastano per Isla Mujeres e una giornata di spiaggia; con un terzo giorno si aggiungono il Museo Maya, El Rey e la laguna. Conviene spezzarli tra l'inizio e la fine del viaggio.",
      },
      {
        domanda: "Meglio dormire in centro o nella zona hotelera?",
        risposta: "Il centro costa meno, è vicino al terminal ADO e ai locali dove mangiano i messicani, ma è lontano dal mare. La zona hotelera ha le spiagge davanti all'hotel, con prezzi molto più alti; i bus R1 e R2 collegano le due zone.",
      },
      {
        domanda: "Come si arriva dall'aeroporto al centro?",
        risposta: "Con il bus ADO, circa 30-40 minuti e 130-140 MXN, biglietti al banco negli arrivi. Il taxi ufficiale si paga al banco nel terminal, circa 550-700 MXN per il centro e di più per la zona hotelera.",
      },
      {
        domanda: "Le spiagge della zona hotelera sono libere?",
        risposta: "Sì, si arriva al mare dagli accessi pubblici: Playa Gaviota Azul, Playa Marlin, Playa Delfines, Playa Langosta e Playa Tortugas. Lettini e ombrelloni si pagano solo nei beach club.",
      },
      {
        domanda: "Come si va a Isla Mujeres?",
        risposta: "Con il traghetto da Puerto Juárez o da Playa Tortugas, circa 540 MXN andata e ritorno. Sull'isola si gira in golf cart a noleggio, oppure si prende una giornata organizzata in catamarano.",
      },
      {
        domanda: "Che cos'è il Visitax?",
        risposta: "È la tassa per i turisti del Quintana Roo, lo stato di Cancún: 20,99 dollari a persona, da pagare solo online (Viaggiare Sicuri, maggio 2026).",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
    comeSpostarsi: 'Il centro storico è piccolo e si gira bene a piedi.',
    periodoMigliore: 'per questa tappa non l\'ho annotato; vale la stagione secca consigliata per tutto lo Yucatán, da novembre ad aprile.',
    erroriDaEvitare: [
      'Sottovalutare Ek Balam perché è meno famoso di Chichén Itzá: è molto meno affollato e, col cenote Xcanché lì accanto, è un abbinamento ideale',
    ],
    miaEsperienza:
      'Valladolid è stata una sosta breve ma piacevole: una città molto tranquilla, dove la sera ho fatto una passeggiata dopo una giornata piena fra Río Lagartos, Ek Balam e il cenote Xcanché.',
      "sapori": [
        {
          "nome": "Cochinita pibil e poc chuc",
          "testo": "Maiale marinato e cotto lentamente, e maiale alla griglia con arance acide: due classici yucatechi, ovunque in città."
        },
        {
          "nome": "Longaniza di Valladolid",
          "testo": "Salsiccia speziata affumicata, specialità cittadina."
        },
        {
          "nome": "Sopa de lima",
          "testo": "Zuppa di pollo e lime, piatto yucateco."
        },
        {
          "nome": "Panuchos e salbutes",
          "testo": "Tortillas fritte ripiene di fagioli o pollo."
        }
      ],
      "attenzioni": [
        "Chichén Itzá: andare all'apertura, e non seguire i procacciatori all'ingresso.",
        "Non salire sulle piramidi dove è vietato: le multe sono reali.",
        "Cenote: seguire le regole su crema solare e doccia prima del bagno."
      ],
    comeArrivare: "Via van/auto da Cancún (circa 2-2h30), spesso con tappa a Río Lagartos lungo il tragitto. In auto si prende l'autostrada a pedaggio Cancún-Mérida, uscendo a Valladolid; i bus ADO partono dal terminal del centro di Cancún e arrivano al terminal di Valladolid, a pochi isolati dalla piazza principale. Il Tren Maya ha una stazione fuori città: da lì al centro serve un taxi. Chichén Itzá è a circa 40 km, tre quarti d'ora di strada; Mérida a circa un'ora e mezza-due ore, passando per Chichén Itzá e Izamal.",
    costi: "Non mi sono segnato le spese di Valladolid; come il resto dell'entroterra, è una tappa economica. Budget basso circa 35-50 € al giorno a persona (hotel semplice in centro, loncherías, colectivos per i cenote); medio 80-130 € (hotel boutique, ristoranti, Ek Balam o Chichén Itzá con guida); alto da 220 € (hacienda fuori città, auto con autista). Ek Balam 691 MXN per gli stranieri più 100 MXN di parcheggio (scheda INAH); Chichén Itzá 105 MXN INAH più 548 MXN di quota statale secondo la scheda INAH (novembre 2026), mentre la stampa locale riporta 697 MXN con il biglietto unico.",
    luoghi: [
      {
        "nome": "Chichén Itzá",
        "testo": "Una delle meraviglie del mondo moderne, sito maya patrimonio UNESCO con il Castillo, il campo del gioco di palla e il cenote sacro.",
        "come": "Da Valladolid in auto o taxi, oppure tour con guida.",
        "quando": "Mattina, all'apertura, prima dei pullman e del caldo.",
        "tempo": "3-4 ore",
        "costo": "697 MXN per gli stranieri, con biglietto unico federale e statale in un'unica cassa dal 27 marzo 2026; la domenica gratis solo per messicani e residenti. La scheda INAH indica invece 105 + 548 MXN (novembre 2026).",
        "orari": "Tutti i giorni 8-16, ultimo ingresso alle 15 (scheda INAH).",
        "lat": 20.68289,
        "lng": -88.56861,
        "url": "https://lugares.inah.gob.mx/es/node/4335",
        "consiglio": "Per Chichén Itzá consiglio una guida: Alejandro parla spagnolo e inglese, è nato a 20 minuti dal sito ed è preparatissimo."
      },
      {
        "nome": "Ek Balam",
        "testo": "Sito maya più piccolo e molto meno affollato, con una grande acropoli e decorazioni in stucco conservate molto bene, come la «bocca del mostro» all'ingresso della tomba. Se oggi si possa salire in cima dipende dalle regole del momento: chiederlo in biglietteria.",
        "come": "Da Valladolid in taxi o auto, circa mezz'ora.",
        "quando": "Mattina.",
        "tempo": "2 ore",
        "costo": "210 MXN INAH più 481 MXN di quota statale per gli stranieri, cioè 691 MXN, circa 35 €, più 100 MXN di parcheggio dell'ejido (scheda INAH, 2026).",
        "lat": 20.89111,
        "lng": -88.13639,
        "url": "https://www.inah.gob.mx/",
        "consiglio": "Spesso sottovalutato: abbinarlo al cenote Xcanché lì accanto."
      },
      {
        "nome": "Cenote Xcanché",
        "testo": "Cenote a cielo aperto vicino a Ek Balam. Si scende per una scala nella roccia fino all'acqua, circondata da radici e piante pendenti.",
        "come": "Taxi o bici da Ek Balam.",
        "quando": "Mattina o primo pomeriggio.",
        "tempo": "1-2 ore",
        "costo": "Ingresso a parte rispetto a Ek Balam (dal viaggio)",
        "lat": 20.88828,
        "lng": -88.12041
      },
      {
        "nome": "Río Lagartos e Las Coloradas",
        "testo": "Riserva con fenicotteri e laghi rosa, a nord di Valladolid.",
        "come": "Tour o auto, lungo la strada per la costa, circa un'ora e mezza.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "lat": 21.5975,
        "lng": -88.15778,
        "consiglio": "Spesso tappa lungo il percorso da Cancún."
      },
      {
        "nome": "Convento de San Bernardino de Siena",
        "testo": "Il convento francescano del Cinquecento nel barrio di Sisal, con la chiesa fortificata e un grande cortile verde costruito sopra un cenote. La sera, sulla facciata, si proietta uno spettacolo di luci sulla storia della città.",
        "come": "A piedi dal centro lungo la Calzada de los Frailes, circa 15 minuti.",
        "quando": "Pomeriggio per la visita, sera per lo spettacolo sulla facciata.",
        "tempo": "1 ora",
        "lat": 20.68579,
        "lng": -88.20993
      },
      {
        "nome": "Calzada de los Frailes",
        "testo": "La strada coloniale in diagonale che collega il centro al convento di Sisal, con case colorate ben restaurate, negozi e caffè. È la via più fotografata di Valladolid.",
        "come": "A piedi.",
        "quando": "Mattina presto o al tramonto, con la luce radente.",
        "tempo": "45 minuti",
        "costo": "Ingresso libero",
        "lat": 20.68813,
        "lng": -88.20717
      },
      {
        "nome": "Parque Francisco Cantón e San Servacio",
        "testo": "La piazza principale, con le panchine a confidente, i venditori di marquesitas e la chiesa di San Servacio dalla facciata bianca, ricostruita nel Settecento. La sera è il centro della vita cittadina.",
        "come": "A piedi.",
        "quando": "Sera.",
        "tempo": "1 ora",
        "costo": "Ingresso libero",
        "lat": 20.6902,
        "lng": -88.20166
      },
      {
        "nome": "Cenote Zací",
        "testo": "Un cenote semiaperto in pieno centro, a pochi isolati dalla piazza, con una volta di roccia e stalattiti sopra l'acqua. Comodo per un bagno senza uscire dalla città.",
        "come": "A piedi dal centro.",
        "quando": "Mattina, prima dei gruppi.",
        "tempo": "1 ora",
        "lat": 20.69167,
        "lng": -88.19736
      },
      {
        "nome": "Casa de los Venados",
        "testo": "Una casa coloniale privata con una grande collezione di arte popolare messicana, visitabile con una guida. Racconta l'artigianato del paese meglio di molti musei.",
        "come": "A piedi, a un isolato dalla piazza.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "lat": 20.68928,
        "lng": -88.20088
      },
      {
        "nome": "Museo San Roque",
        "testo": "Un piccolo museo nella vecchia chiesa di San Roque, con oggetti maya e coloniali e la storia della Guerra delle Caste, cominciata proprio intorno a Valladolid.",
        "come": "A piedi dal centro.",
        "quando": "Qualsiasi ora del giorno.",
        "tempo": "30 minuti",
        "lat": 20.68978,
        "lng": -88.1994
      },
      {
        "nome": "Cenote Suytun",
        "testo": "Il cenote in grotta con la passerella di pietra al centro e il fascio di luce che entra dal foro della volta, molto fotografato. Si arriva fino alla piattaforma circondata dall'acqua.",
        "come": "In auto o taxi, circa 10 minuti a est sulla strada per Cancún.",
        "quando": "Mezzogiorno, quando la luce entra dritta.",
        "tempo": "1 ora",
        "lat": 20.69899,
        "lng": -88.12457
      },
      {
        "nome": "Cenote Oxman",
        "testo": "Un cenote profondo nella vecchia hacienda San Lorenzo Oxman, con la corda per lanciarsi in acqua e la piscina dell'hacienda.",
        "come": "Taxi o bici, circa 10 minuti a sud-ovest del centro.",
        "quando": "Primo pomeriggio.",
        "tempo": "2 ore",
        "lat": 20.66756,
        "lng": -88.23006
      },
      {
        "nome": "Cenotes Xkeken e Samulá",
        "testo": "Due cenote in grotta uno accanto all'altro a Dzitnup, con un biglietto combinato: Xkeken ha stalattiti e radici che scendono fino all'acqua, Samulá un foro nella volta da cui scendono le radici di un albero.",
        "come": "Taxi o bici, circa 10 minuti a ovest del centro.",
        "quando": "Mattina.",
        "tempo": "1,5 ore",
        "lat": 20.66077,
        "lng": -88.24261
      },
      {
        "nome": "Cenote Ik Kil",
        "testo": "Il grande cenote aperto vicino a Chichén Itzá, con le liane che pendono fino all'acqua e una scalinata scavata nella roccia. Si abbina alla visita del sito.",
        "come": "Lungo la strada per Mérida, a pochi chilometri da Chichén Itzá.",
        "quando": "Dopo Chichén Itzá, prima di pranzo.",
        "tempo": "1 ora",
        "lat": 20.6609,
        "lng": -88.5505
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Ek Balam e cenote Xcanché",
          "Pranzo in piazza",
          "Pomeriggio: centro storico, Calzada de los Frailes e San Bernardino",
          "Sera: passeggiata e spettacolo di luci sulla facciata del convento"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Ek Balam, Xcanché, centro",
          "Giorno 2: Chichén Itzá all'apertura, poi Ik Kil o Río Lagartos"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: cenote intorno alla città (Suytun, Xkeken e Samulá, Oxman), Casa de los Venados e Cenote Zací"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico",
        "perChi": "a piedi da tutto",
        "testo": "Piazza principale, cantinas e loncherías vicine, hotel a pochi passi.",
        "fascia": "55-110 €"
      },
      {
        "nome": "Barrio di Sisal e Calzada de los Frailes",
        "perChi": "atmosfera e calma",
        "testo": "Il quartiere del convento, con piccoli hotel in case coloniali e caffè, a 10-15 minuti a piedi dalla piazza."
      },
      {
        "nome": "Fuori dal centro",
        "perChi": "chi ha l'auto",
        "testo": "Haciendas e cenote, ma serve un mezzo."
      }
    ],
    gite: [
      {
        "nome": "Izamal",
        "distanza": "circa 1,5 ore in auto",
        "come": "Auto, o bus con cambio; spesso tappa fra Chichén Itzá e Mérida.",
        "testo": "La città gialla con il convento francescano costruito sopra una piramide maya e la piramide di Kinich Kakmó in mezzo alle case (ingresso gratuito, tutti i giorni 8-17, scheda INAH)."
      },
      {
        "nome": "Cobá",
        "distanza": "circa 1 ora in auto",
        "come": "Auto o colectivo verso Tulum.",
        "testo": "Il sito maya fra due lagune, con lunghi sacbé da percorrere in bici e la piramide di Nohoch Mul (210 MXN per gli stranieri, tutti i giorni 8-17, ultimo ingresso alle 16, scheda INAH)."
      },
      {
        "nome": "Las Coloradas",
        "distanza": "circa 1,5-2 ore a nord",
        "come": "Auto o tour, insieme a Río Lagartos.",
        "testo": "Le vasche rosa delle saline sulla costa, che si guardano dalla strada senza entrare nell'acqua."
      }
    ],
    faq: [
      {
        "domanda": "Valladolid è una buona base per Chichén Itzá?",
        "risposta": "Sì: è a circa 40 km, tre quarti d'ora di strada, e dormendo qui si arriva al sito all'apertura delle 8, prima dei pullman da Cancún."
      },
      {
        "domanda": "Quanti giorni servono a Valladolid?",
        "risposta": "Una notte basta di passaggio; con due si fanno Ek Balam e Chichén Itzá, con tre si aggiungono i cenote intorno alla città."
      },
      {
        "domanda": "Quanto costa entrare a Chichén Itzá?",
        "risposta": "Per gli stranieri la scheda INAH indica 105 MXN più 548 MXN di quota statale (novembre 2026), la stampa locale 697 MXN con il biglietto unico: conviene controllare prima di partire. Il sito apre alle 8 e l'ultimo ingresso è alle 15."
      },
      {
        "domanda": "Quali cenote vedere intorno a Valladolid?",
        "risposta": "Zací in centro; Suytun, Xkeken e Samulá e Oxman a pochi minuti; Xcanché vicino a Ek Balam e Ik Kil vicino a Chichén Itzá. Prima del bagno si fa la doccia e niente crema solare."
      },
      {
        "domanda": "Si può salire sulla piramide di Ek Balam?",
        "risposta": "Dipende dalle regole del momento: va chiesto in biglietteria. A Chichén Itzá invece non si sale, e le multe sono reali."
      },
      {
        "domanda": "Come si arriva da Cancún?",
        "risposta": "In auto sull'autostrada a pedaggio, circa 2-2 ore e mezza, in bus ADO o con il Tren Maya, la cui stazione è fuori città."
      }
    ],
    esperienzeSlugs: ['rio-lagartos', 'ek-balam-cenote-xcanche'],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
    comeArrivare: "Via van/auto da Valladolid (circa 1h30-2h), passando per Chichén Itzá e Izamal. L'aeroporto internazionale di Mérida (MID) è a sud della città, a una ventina di minuti di taxi dal centro. Da Cancún si arriva con i bus ADO di prima classe (circa 4-5 ore, orari su ado.com.mx) o con il Tren Maya, che ferma alla stazione Teya-Mérida, fuori città: da lì al centro serve un taxi. In auto da Cancún si percorre l'autostrada a pedaggio passando per Valladolid.",
    comeSpostarsi: 'Il centro storico a piedi; per Playa Progreso serve un trasferimento in auto o van (circa 30-40 minuti).',
    periodoMigliore: 'non l\'ho annotato per Mérida; vale la stagione secca consigliata per lo Yucatán, da novembre ad aprile.',
    costi: "Le spese di Mérida non me le sono segnate; come il resto dell'entroterra, costa poco. Budget basso circa 35-50 € al giorno a persona (ostello o hotel semplice, mercato e cucina di strada); medio 80-130 € (hotel boutique in centro, ristoranti, una gita a Progreso o Uxmal); alto da 220 € in su (casa coloniale di lusso o hacienda, auto con autista). Musei INAH 210 MXN per gli stranieri, Palazzo del Governo gratuito.",
    erroriDaEvitare: [
      'La Negrita chiude presto (verso le 22): prenotare per tempo se la si vuole vivere prima di spostarsi altrove',
    ],
    miaEsperienza:
      'Mérida è stata la pausa giusta a metà viaggio: una giornata senza transfer fra Playa Progreso e il pig beach e una vera serata fuori nel centro storico.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Plaza Grande e centro storico",
        testo: "La piazza centrale con la cattedrale del XVI secolo, il Palazzo del Governo con murales e le case coloniali dei dintorni.",
        come: "A piedi dal centro.",
        quando: "Mattina e sera, quando c'è musica.",
        tempo: "Mezza giornata",
        costo: "Libero",
        lat: 20.96707,
        lng: -89.62374,
      },
      {
        nome: "Cattedrale di San Ildefonso",
        testo: "La cattedrale costruita nella seconda metà del Cinquecento sul lato est della Plaza Grande, con le pietre dei templi di T'hó, la città maya su cui nacque Mérida. È tra le cattedrali più antiche del continente americano; dentro è sobria, quasi spoglia.",
        come: "Dalla Plaza Grande; si entra fuori dagli orari delle funzioni, con spalle e ginocchia coperte.",
        quando: "Mattina.",
        tempo: "20-30 minuti",
        lat: 20.96712,
        lng: -89.62259,
      },
      {
        nome: "Palazzo del Governo",
        testo: "La sede del governo dello Yucatán, sul lato nord della piazza, con i grandi murales di Fernando Castro Pacheco sulla storia della regione: il mondo maya, la conquista, le haciendas dell'henequén.",
        come: "Si entra dalla piazza; i murales sono lungo lo scalone e nelle sale del piano superiore.",
        quando: "Mattina, prima del caldo.",
        tempo: "30-45 minuti",
        costo: "Ingresso libero (dal viaggio)",
        lat: 20.96783,
        lng: -89.62336,
      },
      {
        nome: "Casa de Montejo",
        testo: "Il palazzo dei conquistatori Montejo, sul lato sud della piazza, con la facciata plateresca del Cinquecento dove due soldati spagnoli calpestano le teste dei vinti. Dentro c'è un piccolo museo con gli ambienti di una casa nobile.",
        come: "Sul lato sud della Plaza Grande.",
        quando: "Mattina; la facciata anche la sera, illuminata.",
        tempo: "30 minuti",
        lat: 20.96618,
        lng: -89.62403,
      },
      {
        nome: "Paseo de Montejo e Palacio Cantón",
        testo: "Il viale di palazzi dell'epoca d'oro dell'henequén, quando la fibra dell'agave fece ricchi i proprietari delle haciendas. Il più elegante, il Palacio Cantón, ospita il Museo Regionale di Antropologia dell'INAH.",
        come: "A piedi dal centro o in taxi; al museo si entra da Calle 43.",
        quando: "Il museo la mattina, il viale nel tardo pomeriggio.",
        tempo: "2-3 ore",
        costo: "Museo 210 MXN per gli stranieri, circa 10,5 € (INAH, 2026)",
        orari: "Museo da martedì a domenica 8-17, ultimo ingresso 16:30; lunedì chiuso (INAH, 2026)",
        lat: 20.97819,
        lng: -89.61951,
        url: "https://lugares.inah.gob.mx/en/node/4258",
        consiglio: "La domenica mattina il viale è chiuso alle auto e si riempie di biciclette.",
      },
      {
        nome: "Mercado municipal",
        testo: "Il mercato coperto con frutta, spezie, artigianato e prodotti yucatechi.",
        come: "A piedi dal centro.",
        quando: "Mattina.",
        tempo: "1-2 ore",
        lat: 20.96369,
        lng: -89.62076,
        consiglio: "Attenzione a chi si offre di accompagnare ai negozi.",
      },
      {
        nome: "Gran Museo del Mundo Maya",
        testo: "Il grande museo moderno nel nord della città, aperto nel 2012, che racconta la cultura maya dello Yucatán dalle origini a oggi con reperti archeologici, ricostruzioni e sale multimediali.",
        come: "In taxi o in auto dal centro, verso la periferia nord.",
        quando: "Nelle ore più calde, al fresco delle sale.",
        tempo: "2-3 ore",
        lat: 21.03465,
        lng: -89.62831,
        url: "https://www.granmuseodelmundomaya.com/",
      },
      {
        nome: "Parque de Santa Lucía",
        testo: "La piazzetta porticata a pochi isolati a nord della Plaza Grande, con ristoranti sotto le arcate e tavolini all'aperto. Il giovedì sera c'è la serenata yucateca, con musica trova e balli tradizionali.",
        come: "A piedi dalla Plaza Grande, lungo Calle 60.",
        quando: "La sera, soprattutto il giovedì.",
        tempo: "1-2 ore",
        costo: "Libero",
        lat: 20.97107,
        lng: -89.62254,
      },
      {
        nome: "MACAY, museo d'arte contemporanea",
        testo: "Il museo Fernando García Ponce nell'antico Ateneo Peninsular, accanto alla cattedrale, con opere di artisti dello Yucatán e mostre temporanee. Il cortile è una pausa all'ombra a un passo dalla piazza.",
        come: "Sul lato est della Plaza Grande, accanto alla cattedrale.",
        quando: "Nelle ore calde.",
        tempo: "1 ora",
        lat: 20.96664,
        lng: -89.62303,
        url: "https://www.macay.org/",
      },
      {
        nome: "Serata fra La Negrita e la Mezcalería",
        testo: "Locali con musica dal vivo e mezcal nel centro storico.",
        come: "A piedi dal centro.",
        quando: "Sera.",
        tempo: "Serata",
      },
      {
        nome: "Playa Progreso",
        testo: "La spiaggia di Progreso, sul Golfo del Messico, il porto di Mérida, con un lungo molo che entra nel mare e beach club sulla sabbia.",
        come: "Bus o auto da Mérida.",
        quando: "Giornata.",
        tempo: "Giornata",
        costo: "Lettini gratis nei beach club con una consumazione (dal viaggio)",
        lat: 21.28278,
        lng: -89.66361,
        consiglio: "Una pausa a metà viaggio senza transfer lunghi.",
      },
      {
        nome: "Izamal",
        testo: "La città gialla, a est di Mérida: il grande convento francescano è costruito sopra una piramide maya, e in paese ne restano altre, come la Kinich Kak Moo. Le facciate sono quasi tutte dipinte dello stesso giallo.",
        come: "In auto da Mérida o lungo la strada da Chichén Itzá; il Tren Maya ha una stazione a Izamal.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "2-3 ore",
        lat: 20.93139,
        lng: -89.01778,
        consiglio: "Il paese è caro: meglio non perdere troppo tempo e soldi tra i souvenir.",
      },
      {
        nome: "Celestún",
        testo: "Paese di pescatori sul Golfo, al bordo della Riserva della Biosfera Ría Celestún: una laguna di mangrovie dove si esce in barca per vedere fenicotteri e uccelli acquatici.",
        come: "In auto o tour da Mérida, in giornata; le barche partono dal paese.",
        quando: "Mattina, quando c'è meno gente.",
        tempo: "Giornata",
        lat: 20.85917,
        lng: -90.4,
        consiglio: "Il numero di fenicotteri cambia molto durante l'anno: chiedi al molo prima di pagare la barca, e chiedi al barcaiolo di restare a distanza dagli uccelli.",
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Mattina: Plaza Grande e mercato",
        "Pomeriggio: Paseo de Montejo",
        "Sera: La Negrita e Mezcalería",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: centro e mercato",
        "Giorno 2: Playa Progreso",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra",
        "Giorno 3: Uxmal all'apertura delle 8, circa 1 ora e un quarto d'auto",
        "Primo pomeriggio: Palacio Cantón e Paseo de Montejo",
        "Sera: Parque de Santa Lucía",
      ] },
    ],
    zone: [
      {
        nome: "Centro storico",
        perChi: "a piedi da tutto",
        testo: "Hotel boutique in case coloniali, vicino ai ristoranti e alla piazza.",
        fascia: "50-150 €",
      },
      {
        nome: "Paseo de Montejo",
        perChi: "eleganza",
        testo: "Viale di palazzi storici, più tranquillo.",
        fascia: "100-250 €",
      },
      {
        nome: "Santa Lucía e Santa Ana",
        perChi: "chi vuole un quartiere tranquillo a piedi dal centro",
        testo: "I barrios a nord della piazza, con case coloniali restaurate, piccoli hotel e ristoranti, a 10-15 minuti a piedi dalla Plaza Grande.",
        fascia: "60-180 €",
      },
    ],
      "sapori": [
        {
          "nome": "Sopa de lima",
          "testo": "Zuppa di pollo e lime."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Maiale marinato nel pibil."
        },
        {
          "nome": "Papadzules",
          "testo": "Tortillas ripiene di uovo con salsa di semi di zucca."
        },
        {
          "nome": "Salbutes e panuchos",
          "testo": "Tortillas fritte ripiene."
        }
      ],
      "attenzioni": [
        "Il caldo e l'umidità sono forti: bere molto e visitare la mattina.",
        "Taxi non ufficiali: usare Uber o taxi concordati.",
        "Il centro di sera è sicuro nelle vie principali; fuori da lì chiedere consiglio."
      ],
    // GUIDA-END
    gite: [
      {
        nome: "Uxmal",
        distanza: "circa 1 ora e un quarto in auto",
        come: "Auto lungo la Federale 261 o tour organizzato; con la Ruta Puuc diventa una giornata intera.",
        testo: "La grande città puuc, con la Piramide dell'Indovino e il Quadrilatero delle Monache. 566 MXN per gli stranieri, aperta tutti i giorni 8-16, ultimo ingresso alle 15 (scheda INAH, novembre 2026).",
      },
      {
        nome: "Dzibilchaltún",
        distanza: "circa 12 km a nord, 20-30 minuti",
        come: "Auto o taxi lungo la strada per Progreso, poi l'uscita per Chablekal.",
        testo: "Sito maya con il Tempio delle Sette Bambole, il museo del Popolo Maya e il cenote Xlacah, dove si fa il bagno. Agli equinozi il sole attraversa la porta del tempio. 105 MXN, tutti i giorni 8-16 (INAH, 2026).",
      },
      {
        nome: "Cenote di Cuzamá e Homún",
        distanza: "circa 45-50 km, 1 ora",
        come: "In auto o con tour; nei paesi si gira tra i cenote con guide locali, in moto-taxi o sui vecchi carretti dell'hacienda.",
        testo: "Due paesi dell'anello dei cenote, con decine di pozzi d'acqua dolce aperti al bagno, alcuni in grotta. Ogni cenote ha il suo ingresso, da pagare in contanti.",
      },
      {
        nome: "Chichén Itzá",
        distanza: "circa 2 ore in auto",
        come: "Auto, bus ADO o Tren Maya; si può abbinare a Izamal.",
        testo: "La città maya di El Castillo, da vedere all'apertura delle 8. La scheda INAH indica 105 + 548 MXN per gli stranieri e apertura 8-16, ultimo ingresso alle 15 (novembre 2026).",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Mérida?",
        risposta: "Due giorni per il centro, i musei e una giornata a Progreso. Con tre o quattro giorni Mérida diventa la base per Uxmal, Celestún e i cenote.",
      },
      {
        domanda: "Meglio dormire in centro o sul Paseo de Montejo?",
        risposta: "Il centro storico è il più comodo: si va a piedi a piazza, mercato e locali. Il Paseo de Montejo e i barrios di Santa Lucía e Santa Ana sono più tranquilli, con hotel in case coloniali.",
      },
      {
        domanda: "Si può visitare Uxmal in giornata da Mérida?",
        risposta: "Sì, è a circa un'ora e un quarto d'auto. Si entra all'apertura delle 8 per il caldo; il biglietto per gli stranieri è di 566 MXN (INAH, novembre 2026).",
      },
      {
        domanda: "Serve l'auto a Mérida?",
        risposta: "In città no: il centro si gira a piedi e per il resto ci sono taxi e app. Per Uxmal, Celestún e i cenote l'auto o un tour rendono tutto più semplice.",
      },
      {
        domanda: "Qual è il periodo migliore?",
        risposta: "Da novembre ad aprile, nella stagione secca. Da maggio il caldo umido diventa forte; da giugno a novembre è la stagione degli uragani nell'Atlantico.",
      },
      {
        domanda: "Che cos'è l'Hanal Pixán?",
        risposta: "È la festa dei morti dello Yucatán, tra fine ottobre e inizio novembre: altari nelle case e nelle piazze, cibo tradizionale e celebrazioni a Mérida e nei paesi.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
      "luoghi": [
        {
          "nome": "Piazza della Cattedrale",
          "testo": "La piazza centrale del centro storico, molto curata, con la cattedrale e i lustrascarpe tipici. Le facciate color pastello delle case intorno sono la Campeche delle foto; di sera la piazza si riempie di famiglie e venditori di dolci.",
          "come": "A piedi.",
          "quando": "Mattina e sera.",
          "tempo": "1 ora"
        },
        {
          "nome": "Puerta del Mar e lungomare",
          "testo": "La porta del mare delle antiche mura, da cui si arriva al lungomare. La passeggiata dalla cattedrale è un bel modo per sgranchirsi dopo ore di van.",
          "come": "A piedi dalla piazza.",
          "quando": "Pomeriggio e sera.",
          "tempo": "1-2 ore"
        },
        {
          "nome": "Mura e baluardi",
          "testo": "Campeche è una città fortificata, patrimonio UNESCO dal 1999, con mura e baluardi costruiti fra Seicento e Settecento contro gli attacchi dei pirati. Alcuni baluardi ospitano piccoli musei e giardini; una parte delle mura si percorre a piedi.",
          "come": "A piedi lungo le mura.",
          "quando": "Mattina.",
          "tempo": "2 ore",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Fuerte de San Miguel",
          "testo": "Forte sulla collina a sud-ovest del centro, con fossato e cannoni rivolti al Golfo. Dentro c'è il museo archeologico con le maschere di giada di Calakmul; dagli spalti si vede il tramonto sul mare.",
          "come": "Taxi dal centro.",
          "quando": "Da martedì a domenica 8-17, chiuso il lunedì (scheda INAH); tardo pomeriggio per il tramonto.",
          "costo": "145 MXN per gli stranieri (scheda INAH, 2026).",
          "tempo": "1-2 ore",
          "url": "https://lugares.inah.gob.mx/en/node/4261"
        },
        {
          "nome": "Edzná",
          "testo": "Sito maya nell'entroterra con l'Edificio dei Cinque Piani, una piramide a terrazze su una grande piazza. È poco visitato rispetto ai siti dello Yucatán.",
          "come": "Auto, taxi o tour da Campeche.",
          "quando": "Aperto ogni giorno 8-17, ultimo ingresso alle 16.30 (scheda INAH). Mattina presto, prima del caldo.",
          "tempo": "Mezza giornata",
          "url": "https://lugares.inah.gob.mx/en/node/5755",
          "consiglio": "Portare acqua e cappello: l'ombra è poca.",
          "costo": "210 MXN per gli stranieri (tariffe INAH 2026); il museo del sito è compreso."
        }
      ],
      "programmi": [
        {
          "titolo": "Mezza giornata",
          "tappe": [
            "Piazza della Cattedrale",
            "Puerta del Mar e lungomare",
            "Cena nel centro storico"
          ]
        },
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: mura e baluardi",
            "Pomeriggio: passeggiata e cena"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro storico fortificato",
          "perChi": "a piedi da tutto",
          "testo": "Hotel in case coloniali, vicinissimi alla cattedrale e al lungomare."
        }
      ],
      "sapori": [
        {
          "nome": "Pan de cazón",
          "testo": "Tortillas a strati con cazón (un piccolo squalo) sfilacciato, fagioli neri e salsa di pomodoro. È il piatto simbolo della città: si trova nei ristoranti del centro e nelle loncherías."
        },
        {
          "nome": "Camarones al coco",
          "testo": "Gamberi fritti in una crosta di cocco grattugiato, spesso con una salsa dolce di frutta. Si ordinano nei ristoranti di pesce del lungomare."
        },
        {
          "nome": "Coctel campechano",
          "testo": "Bicchiere freddo di frutti di mare misti, come gamberi, polpo e ostriche, con salsa di pomodoro, lime e avocado. In Messico «campechano» vuol dire proprio «misto»."
        },
        {
          "nome": "Panuchos e codzitos",
          "testo": "Tortillas fritte ripiene di fagioli e piccoli tacos arrotolati con salsa di pomodoro: gli antojitos della penisola, nei mercati e nelle cene di strada."
        }
      ],
      "attenzioni": [
        "Il giorno dopo il trasferimento verso Mahahual è molto lungo e si cambia fuso: partire presto.",
        "Di sera il centro è tranquillo, ma evitare le strade deserte fuori mura.",
        "Prezzi bassi: non pagare di più per tour improvvisati.",
        "Molti musei INAH, compresi quelli nei forti, chiudono il lunedì: controllare prima di organizzare la giornata.",
        "Da aprile a ottobre il caldo umido è forte: girare la mattina presto e al tramonto, e bere molto."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
      "luoghi": [
        {
          "nome": "Lungomare di Mahahual",
          "testo": "Il lungomare del villaggio sul Caribe, con ristoranti, beach club e il molo delle navi da crociera, a sud della Riviera Maya.",
          "come": "Da Campeche con il transfer più lungo dell'itinerario e cambio di fuso orario.",
          "quando": "Pomeriggio e sera.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Snorkeling con le tartarughe",
          "testo": "Uscita in barca sulla barriera vicino alla costa, dove si possono incontrare le tartarughe. Qui la barriera è vicina alla riva e meno frequentata che nella Riviera Maya.",
          "come": "Tour dal lungomare con operatore.",
          "quando": "Mattina.",
          "tempo": "2-3 ore"
        },
        {
          "nome": "Temazcal nella selva",
          "testo": "Rito del bagno di vapore di tradizione indigena, con una guida.",
          "come": "Prenotazione con una struttura della zona.",
          "quando": "Sera.",
          "tempo": "2-3 ore"
        },
        {
          "nome": "Banco Chinchorro",
          "testo": "Riserva della biosfera al largo di Mahahual, un atollo corallino di circa 800 km² con almeno nove relitti. È una gita molto legata al meteo: con vento forte le uscite si annullano.",
          "come": "Solo con operatori autorizzati da Mahahual o Xcalak, in barca veloce.",
          "quando": "Mattina, con mare calmo; meglio nei mesi secchi.",
          "tempo": "Giornata intera",
          "consiglio": "Chiedere quante ore di navigazione ci sono e cosa include il prezzo (tassa del parco, pranzo, attrezzatura)."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: snorkeling con le tartarughe",
            "Pomeriggio: lungomare",
            "Sera: temazcal"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: arrivo da Campeche, lungomare",
            "Giorno 2: Bacalar in giornata, snorkeling e temazcal"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Sul lungomare",
          "perChi": "a piedi da tutto",
          "testo": "Hotel in tutte le fasce di prezzo, rumorosi nei giorni delle crociere."
        },
        {
          "nome": "Fuori dal centro",
          "perChi": "calma",
          "testo": "Cabañas più isolate, lontano dalle navi."
        }
      ],
      "sapori": [
        {
          "nome": "Pesce fritto intero e ceviche",
          "testo": "Il pesce del giorno fritto intero, con riso, insalata e tortillas, nei ristoranti del lungomare. A mezzogiorno si prende il ceviche di pesce o di gamberi."
        },
        {
          "nome": "Pez león",
          "testo": "Il pesce scorpione è una specie invasiva dei Caraibi e qui lo si cucina volentieri: in ceviche, fritto o nei tacos. Ordinarlo aiuta anche la barriera."
        },
        {
          "nome": "Tacos di pesce",
          "testo": "Pesce in pastella o alla piastra in tortilla di mais, con cavolo, salsa e lime. Nelle bancarelle del paese costano molto meno che sul fronte mare."
        },
        {
          "nome": "Agua fresca",
          "testo": "Acque di frutta in grandi bicchieri: jamaica, horchata, limone con chaya. Vanno bene con il caldo del Caribe, al posto delle bibite gassate."
        }
      ],
      "attenzioni": [
        "Il giorno dell'arrivo ha ritmi serrati: se si sgarra sugli orari delle tappe precedenti (in particolare Balam Ku) salta il resto della giornata.",
        "Nei giorni di crociera il lungomare è affollato e i prezzi salgono.",
        "Sole forte: crema adatta alla barriera e acqua.",
        "Bancomat pochi e a volte senza contanti: arrivare con abbastanza pesos.",
        "Fra primavera ed estate può arrivare il sargasso: chiedere sul posto quali spiagge sono pulite."
      ],
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
    comeSpostarsi: 'Noi eravamo in tour organizzato da Mahahual; sulla laguna ci si muove in barca o in kayak.',
    periodoMigliore: 'non l\'ho annotato per Bacalar; vale la stagione secca consigliata per la zona, da novembre ad aprile.',
    erroriDaEvitare: [
      'In tour da Mahahual il tempo è poco: chi può, valuti una notte sul posto per goderla con calma',
    ],
    miaEsperienza:
      'L\'ho vista solo in giornata, con un tour in barca di 2 ore e un\'ora di kayak. Bellissima, ma il tempo stretto si è sentito: è una delle tappe che in un prossimo giro farei con più calma.',
      "sapori": [
        {
          "nome": "Pesce fresco",
          "testo": "Alla piastra sul lungolago."
        },
        {
          "nome": "Tacos e quesadillas",
          "testo": "Di strada, in centro."
        },
        {
          "nome": "Ceviche",
          "testo": "Con lime e coriandolo."
        },
        {
          "nome": "Agua de Jamaica",
          "testo": "Bevanda di ibisco, tipica messicana."
        }
      ],
      "attenzioni": [
        "In tour il tempo è poco: considerare una notte.",
        "Proteggere la laguna: crema solare biodegradabile obbligatoria in molti punti.",
        "Non camminare sugli stromatoliti: sono organismi fragili."
      ],
    comeArrivare: "In tour organizzato da Mahahual, oppure in autonomia con van o auto. Da Cancún sono circa 4-5 ore in auto lungo la Federale 307, passando per Tulum; ci sono anche i bus ADO, che fermano in paese, e il Tren Maya con la stazione di Bacalar, fuori dal centro. L'aeroporto più vicino è quello di Chetumal, a circa 40 km, raggiungibile in taxi. Da Xpujil e Calakmul servono circa 2 ore di strada. Entrando in Quintana Roo da Campeche si sposta l'orologio un'ora avanti.",
    costi: "Il prezzo del tour non me lo sono segnato. Il tour in barca di un paio d'ore si concorda al molo o in agenzia e si paga in contanti; il Fuerte de San Felipe ha un biglietto di pochi euro; molti pontili sulla laguna sono di hotel o club privati, con ingresso a pagamento (dal viaggio). Budget indicativo a persona al giorno: basso 40-60 € (camera in paese, cucina semplice), medio 100-160 € (hotel sulla laguna, tour in barca, kayak), alto da 250 € (hotel di design sull'acqua, uscite private).",
    luoghi: [
      {
        "nome": "Laguna di Bacalar",
        "testo": "La laguna dei sette colori, lunga decine di chilometri e stretta, con acqua dalle sfumature di azzurro e turchese su fondale bianco. Ospita il più esteso sistema di stromatoliti d'acqua dolce al mondo: formazioni rocciose create da microrganismi, vecchie di migliaia di anni.",
        "come": "Da Mahahual in tour organizzato oppure in autonomia con van o auto.",
        "quando": "Mattina, con luce piena.",
        "tempo": "Mezza giornata o più",
        "lat": 18.75,
        "lng": -88.315,
        "consiglio": "Il tempo in giornata è stretto: chi può, valuti una notte sul posto per goderla con calma."
      },
      {
        "nome": "Tour in barca e kayak",
        "testo": "Giro di 2 ore in barca sulla laguna e, nel mio caso, un'ora di kayak inclusa dopo il tour.",
        "come": "Tour prenotato dall'hotel o dal lungolago, il giorno prima.",
        "quando": "Mattina.",
        "tempo": "3 ore",
        "costo": "Prezzo da concordare al molo o in agenzia, in contanti (dal viaggio)."
      },
      {
        "nome": "Canal de los Piratas e Isla de los Pájaros",
        "testo": "Il canale stretto da cui un tempo passavano i pirati verso Chetumal, con l'acqua più chiara della laguna e un fondo di sabbia bianca dove si scende dalla barca. Lì vicino c'è l'isolotto degli uccelli, che si guarda solo da lontano.",
        "come": "Solo in barca, di solito come tappa del tour.",
        "quando": "Mattina, con il sole alto per i colori.",
        "tempo": "1 ora",
        "lat": 18.66993,
        "lng": -88.37578,
        "consiglio": "Solo creme solari biodegradabili, e niente camminate sugli stromatoliti, protetti."
      },
      {
        "nome": "Cenote Azul",
        "testo": "Un cenote profondo e rotondo sulla riva della laguna, a sud del paese, con il ristorante sul bordo e l'acqua blu scurissima.",
        "come": "In taxi dal centro, pochi minuti.",
        "quando": "Mattina.",
        "tempo": "1-2 ore",
        "lat": 18.64701,
        "lng": -88.41298
      },
      {
        "nome": "Cenote Negro",
        "testo": "Una voragine profonda dentro la laguna, che dall'alto appare come una macchia scura in mezzo al turchese. È uno dei punti che si vedono meglio con il tour in barca.",
        "come": "In barca o in kayak dal lungolago.",
        "quando": "Mattina.",
        "tempo": "30 minuti",
        "lat": 18.66693,
        "lng": -88.39428
      },
      {
        "nome": "Cocalitos e le stromatoliti",
        "testo": "Una riva a sud del paese dove le stromatoliti si vedono nell'acqua bassa, vicino alla spiaggia, con altalene e pontili. È il posto più comodo per capire che cosa sono senza andare in barca.",
        "come": "In taxi o in bici dal centro, lungo il Boulevard Costero.",
        "quando": "Mattina presto.",
        "tempo": "2 ore",
        "lat": 18.65179,
        "lng": -88.40917,
        "consiglio": "Non toccare e non salire sulle stromatoliti."
      },
      {
        "nome": "Balneario Ejidal",
        "testo": "La spiaggia comunitaria del paese, con pontili, palapas e accesso all'acqua bassa e chiara. È uno dei pochi accessi alla laguna fuori dai pontili degli hotel.",
        "come": "A piedi o in bici dal centro.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "2-3 ore"
      },
      {
        "nome": "Los Rápidos",
        "testo": "A sud della laguna l'acqua si stringe in un canale con corrente, dove ci si lascia trasportare galleggiando fra le stromatoliti. Ci sono ristoranti sull'acqua e noleggio di kayak.",
        "come": "In auto o taxi, circa 30 minuti a sud del paese.",
        "quando": "Mattina nei giorni feriali.",
        "tempo": "Mezza giornata",
        "lat": 18.59081,
        "lng": -88.43398
      },
      {
        "nome": "Fuerte San Felipe",
        "testo": "Forte costruito dagli spagnoli per difendere Bacalar dai pirati, sulla riva della laguna, con un piccolo museo della pirateria. Dalle mura si vede la laguna dall'alto.",
        "come": "A piedi dal centro.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "costo": "Biglietto di pochi euro (dal viaggio)",
        "orari": "Giorni di chiusura da controllare sul posto.",
        "lat": 18.67694,
        "lng": -88.39528
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Tour in barca di 2 ore: Canal de los Piratas, Cenote Negro, stromatoliti",
          "Kayak",
          "Pranzo sul lago",
          "Cenote Azul"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: tour in barca e Fuerte San Felipe",
          "Giorno 2: Cocalitos al mattino, Los Rápidos nel pomeriggio, poi partenza"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: rovine maya di Chacchoben o Kohunlich, tramonto al Balneario Ejidal"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lungolago di Bacalar",
        "perChi": "vista sulla laguna",
        "testo": "Hotel e cabañas direttamente sull'acqua, più cari, spesso con pontile e kayak.",
        "fascia": "110-230 €"
      },
      {
        "nome": "Centro del paese",
        "perChi": "budget",
        "testo": "Più economico, a pochi minuti dalla laguna.",
        "fascia": "45-90 €"
      },
      {
        "nome": "Verso sud, Cocalitos e Los Rápidos",
        "perChi": "chi ha l'auto",
        "testo": "Ecohotel e piccoli alloggi isolati sulla riva, molto tranquilli; per cenare in paese serve un mezzo."
      }
    ],
    gite: [
      {
        "nome": "Chacchoben",
        "distanza": "circa 40 km a nord, 45 minuti",
        "come": "Auto o tour.",
        "testo": "Sito maya nella foresta con piramidi restaurate e pochi visitatori nei giorni senza navi da crociera a Mahahual."
      },
      {
        "nome": "Kohunlich",
        "distanza": "circa 1 ora a ovest",
        "come": "Auto lungo la Federale 186 verso Escárcega.",
        "testo": "Il Tempio dei Mascheroni, con grandi volti in stucco, in un sito immerso nella foresta di palme. Biglietto INAH, ultimo ingresso alle 16 ora locale (dal viaggio)."
      },
      {
        "nome": "Chetumal e Oxtankah",
        "distanza": "circa 40 km, 40 minuti",
        "come": "Auto, bus o colectivo.",
        "testo": "Il Museo de la Cultura Maya e il lungomare della capitale del Quintana Roo, e poco a nord il sito di Oxtankah (145 MXN per gli stranieri, tutti i giorni 9-17, scheda INAH)."
      },
      {
        "nome": "Mahahual",
        "distanza": "circa 1,5 ore",
        "come": "Auto o van.",
        "testo": "Il paese sul mare della Costa Maya, con il malecón, lo snorkeling sulla barriera e Banco Chinchorro al largo."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Bacalar?",
        "risposta": "Mezza giornata basta per il tour in barca, ma per goderla servono una o due notti: la laguna è più bella al mattino presto e al tramonto."
      },
      {
        "domanda": "Ci si può fare il bagno nella laguna?",
        "risposta": "Sì, dai balnearios pubblici come il Balneario Ejidal, da Cocalitos o dai pontili degli hotel; molti pontili sono privati, con ingresso a pagamento."
      },
      {
        "domanda": "Che cosa sono le stromatoliti?",
        "risposta": "Formazioni rocciose create da microrganismi, vecchie di migliaia di anni: a Bacalar c'è il sistema d'acqua dolce più esteso al mondo. Non si toccano e non si calpestano."
      },
      {
        "domanda": "Che crema solare si può usare?",
        "risposta": "Solo creme biodegradabili, e meglio ancora maglia e cappello: le creme normali danneggiano le stromatoliti e l'acqua."
      },
      {
        "domanda": "Come si arriva a Bacalar?",
        "risposta": "In auto o bus ADO da Cancún, circa 4-5 ore, con il Tren Maya, o in volo su Chetumal, a circa 40 km."
      },
      {
        "domanda": "Bacalar si può vedere in giornata?",
        "risposta": "Sì, con un tour da Mahahual, ma il tempo si sente stretto: con una notte si aggiungono Cocalitos, Los Rápidos e il tramonto."
      }
    ],
    esperienzeSlugs: ['tour-barca-bacalar'],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
    comeArrivare: "In van o in auto da Mahahual (circa 2-3 ore). Dall'aeroporto di Cancún (CUN), a circa 120 km, ci vogliono un paio d'ore in auto o con i bus ADO diretti al terminal di Tulum. Più vicino c'è l'aeroporto internazionale di Tulum (TQO), aperto a fine 2023 a circa 25 km dal paese, con voli soprattutto nazionali e dal Nord America. Tulum è anche una stazione del Tren Maya, sulla linea che scende verso Bacalar.",
    comeSpostarsi: 'Su come ci siamo mossi a Tulum non ho appunti.',
    periodoMigliore: 'non l\'ho annotato per Tulum; vale la stagione secca consigliata per la zona, da novembre ad aprile.',
    costi: "Le spese di Tulum non me le sono segnate; è una delle tappe più care, con prezzi quasi europei. Indicativamente, a persona al giorno: 50-70 € con ostello, tacos e bici; 120-180 € con hotel in paese, un beach club e un paio di ingressi; oltre 300 € con hotel sulla spiaggia e cene nei ristoranti della zona hotelera.",
    erroriDaEvitare: [
      'A Caleta Tankah non si viene rimborsati in nessun caso, nemmeno dopo pochi minuti: meglio pensarci prima di pagare l\'ingresso',
    ],
    miaEsperienza:
      'A Caleta Tankah all\'inizio il mare non era invitante, poi è uscito il sole e la giornata è cambiata, cenote compreso. Il sito archeologico sulla scogliera e Playa Paraíso restano fra i ricordi più forti del viaggio.',
      "luoghi": [
      {
        nome: "Sito archeologico di Tulum",
        testo: "Città maya sulla scogliera sopra il Caribe, uno dei pochi siti maya affacciati sul mare. Il Castillo e il Tempio del Dio del Vento sono i punti chiave; le mura che chiudono la città su tre lati spiegano il nome Tulum, «muro» in maya (anticamente si chiamava Zamá, «alba»).",
        come: "Da Tulum paese in taxi o bici fino al Parque del Jaguar, l'area protetta dentro cui si trova il sito; come arrivare all'ingresso va chiesto sul posto. La spiaggetta sotto il sito a volte è chiusa (sargasso o nidificazione delle tartarughe).",
        quando: "Mattina, prima del caldo e dei pullman.",
        tempo: "2 ore",
        costo: "265 MXN per gli stranieri, circa 13 € (165 MXN della zona archeologica più 100 MXN del Parque del Jaguar, 2026)",
        orari: "Tutti i giorni 8-17, ultimo ingresso alle 15:30.",
        lat: 20.21472,
        lng: -87.42889,
        url: "https://www.inah.gob.mx/",
        consiglio: "Bagno nella caletta sotto la scogliera dopo la visita, se l'accesso è aperto.",
      },
      {
        nome: "Cenote Dos Ojos",
        testo: "Due cenote collegati in una grotta con stalattiti, nel sistema Sac Actun: diverso dai cenote a cielo aperto dello Yucatán.",
        come: "In auto o taxi da Tulum, verso nord.",
        quando: "Mattina.",
        tempo: "2 ore",
        lat: 20.32472,
        lng: -87.39194,
        consiglio: "A Tulum sconsiglio i cenote più turistici e propongo Dos Ojos. Accanto ce n'è un altro bellissimo di cui ho dimenticato il nome.",
      },
      {
        nome: "Caleta Tankah",
        testo: "Una cala con acqua turchese e un cenote, a ingresso a pagamento: solo contanti e nessun rimborso.",
        come: "Taxi da Tulum.",
        quando: "Giornata.",
        tempo: "Mezza giornata",
        costo: "300 MXN a persona, circa 15 €; solo contanti, nessun rimborso",
        lat: 20.23168,
        lng: -87.4181,
        consiglio: "All'inizio il mare non era invitante, poi è uscito il sole e la giornata è cambiata.",
      },
      {
        nome: "Playa Paraíso",
        testo: "Spiaggia con beach club, tra le più consigliate della zona, con lettini a pagamento.",
        come: "Taxi da Tulum.",
        quando: "Pomeriggio.",
        tempo: "Mezza giornata",
        costo: "spiaggia libera; lettini e ombrelloni dei beach club a pagamento",
        lat: 20.20404,
        lng: -87.43127,
        consiglio: "Arrivare presto per trovare spazio sulla sabbia davanti alle palme.",
      },
      {
        nome: "Xcacel",
        testo: "Spiaggia protetta, senza hotel, dove le tartarughe depongono le uova fra primavera ed estate. Le regole sono severe: niente cibo, alcolici né casse audio.",
        come: "Taxi o auto da Tulum.",
        quando: "Mattina.",
        tempo: "2-3 ore",
        costo: "100 MXN, circa 5 €",
        orari: "10-16, chiuso il lunedì.",
        consiglio: "Da aprile a ottobre si può assistere alla schiusa delle tartarughe: rispettare le zone recintate dei nidi.",
      },
      {
        nome: "Gran Cenote",
        testo: "Il cenote più noto intorno a Tulum: una vasca d'acqua limpidissima tra grotte basse e passerelle di legno, dove nuotano piccole tartarughe. È adatto a chi fa snorkeling per la prima volta, ma nelle ore centrali è molto frequentato.",
        come: "Circa 5 km dal paese sulla strada per Cobá: in bici, taxi o auto. Doccia obbligatoria prima di entrare e niente creme solari normali.",
        quando: "All'apertura, prima che arrivino i tour.",
        tempo: "1,5-2 ore",
        lat: 20.24656,
        lng: -87.4641,
      },
      {
        nome: "Cenote Calavera",
        testo: "Un cenote piccolo, con tre aperture nel soffitto della grotta che ricordano un teschio: ci si tuffa da uno dei buchi o si scende con la scaletta. Spartano e meno curato degli altri, è il più divertente per chi cerca il salto.",
        come: "Poco fuori dal paese sulla strada per Cobá, raggiungibile anche in bici.",
        quando: "Mattina o primo pomeriggio, quando la luce entra dai buchi.",
        tempo: "1 ora",
        lat: 20.22918,
        lng: -87.45727,
      },
      {
        nome: "Cenote Zacil-Ha",
        testo: "Cenote a cielo aperto con una piccola piscina accanto, amache e una zipline sull'acqua. È meno spettacolare di Dos Ojos ma più rilassato, e funziona bene per un pomeriggio senza programmi.",
        come: "Sulla strada per Cobá, circa 7 km da Tulum; in auto, taxi o bici.",
        quando: "Pomeriggio.",
        tempo: "1-2 ore",
        lat: 20.27441,
        lng: -87.48831,
      },
      {
        nome: "Laguna di Kaan Luum",
        testo: "Una laguna dall'acqua turchese con un cenote profondo al centro, che dall'alto si vede come un cerchio blu scuro. Si fa il bagno nella parte bassa, dal pontile, in un ambiente quasi sempre tranquillo.",
        come: "Circa 20 minuti d'auto a sud di Tulum, lungo la Federale 307 verso Felipe Carrillo Puerto.",
        quando: "Mattina, con il sole alto per vedere i colori.",
        tempo: "2 ore",
        lat: 20.16259,
        lng: -87.55401,
      },
      {
        nome: "Parque del Jaguar",
        testo: "Il parco nazionale che dal 2023 racchiude il sito archeologico e un tratto di costa con spiagge pubbliche, piste ciclabili e servizi. L'ingresso al parco si paga a parte rispetto alle rovine ed è compreso nei 265 MXN chiesti agli stranieri.",
        come: "In bici o taxi dal paese; c'è un parcheggio interno e un trenino fino alla zona archeologica.",
        quando: "Mattina, insieme alle rovine.",
        tempo: "Mezza giornata con il sito",
        costo: "100 MXN per gli stranieri, circa 5 € (2026)",
        lat: 20.18752,
        lng: -87.44357,
      },
    ],
      "programmi": [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: sito archeologico di Tulum all'apertura e Parque del Jaguar",
          "Pranzo e bagno a Playa Paraíso",
          "Pomeriggio: Gran Cenote o Cenote Calavera",
          "Sera: cena in paese",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Cenote Dos Ojos la mattina",
          "Pomeriggio a Caleta Tankah o a Xcacel (chiusa il lunedì)",
          "Sera allo Straw Hat o a Vagalume",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: gita a Cobá, con la salita al Nohoch Mul",
          "Ritorno passando da Cenote Zacil-Ha o dalla laguna di Kaan Luum",
        ],
      },
    ],
      "zone": [
      {
        nome: "Tulum paese",
        perChi: "servizi e prezzi",
        testo: "Alberghi in centro, ristoranti, vicino alle fermate dei bus.",
        fascia: "60-150 €",
      },
      {
        nome: "Zona hotelera sulla spiaggia",
        perChi: "mare",
        testo: "Hotel e beach club, più cari.",
        fascia: "250-600 €",
      },
      {
        nome: "Aldea Zamá e La Veleta",
        perChi: "chi vuole tranquillità a metà strada tra paese e mare",
        testo: "Zone residenziali nuove tra il centro e la spiaggia, con condomini, piccoli hotel e appartamenti; servono bici o taxi per spostarsi.",
        fascia: "90-180 €",
      },
    ],
      "sapori": [
        {
          "nome": "Cochinita pibil",
          "testo": "Maiale marinato, specialità yucateca."
        },
        {
          "nome": "Tacos al pastor",
          "testo": "Al pastor e di pesce, di strada."
        },
        {
          "nome": "Ceviche",
          "testo": "Con lime e coriandolo, nei beach club."
        },
        {
          "nome": "Agua de Jamaica",
          "testo": "Ibisco, per il caldo."
        }
      ],
      "attenzioni": [
        "Sito archeologico: portare acqua e crema, il caldo è forte; vietato salire sulle strutture.",
        "Cenote: seguire le regole su crema e doccia; i più turistici sono affollati.",
        "Caleta Tankah: niente carte e nessun rimborso, nemmeno se si esce dopo pochi minuti."
      ],
    gite: [
      {
        nome: "Cobá",
        distanza: "45 km, circa 45 minuti in auto",
        come: "In auto o con i bus ADO e colectivos dal paese; molti noleggiano la bici all'ingresso per girare il sito.",
        testo: "Città maya nella foresta, con lunghe strade bianche (sacbé) e la piramide di Nohoch Mul. Vicino ci sono alcuni cenote poco battuti.",
      },
      {
        nome: "Muyil e Sian Ka'an",
        distanza: "25 km, circa 25 minuti in auto",
        come: "In auto o con un tour; dal sito di Muyil partono le barche sui canali della riserva.",
        testo: "Il piccolo sito maya di Muyil è la porta d'ingresso alla riserva della biosfera di Sian Ka'an, patrimonio UNESCO: lagune, mangrovie e canali antichi in cui ci si lascia trasportare dalla corrente.",
      },
      {
        nome: "Akumal",
        distanza: "25 km, circa 25 minuti in auto",
        come: "In auto, colectivo o taxi lungo la Federale 307 verso nord.",
        testo: "Una baia dove si fa snorkeling sopra le praterie di alghe frequentate dalle tartarughe verdi. Le zone di nuoto sono regolamentate e spesso si entra con una guida locale.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Tulum?",
        risposta: "Due giorni bastano per sito archeologico, una spiaggia e due cenote. Con tre si aggiunge Cobá o Sian Ka'an.",
      },
      {
        domanda: "Meglio dormire in paese o sulla spiaggia?",
        risposta: "In paese si spende molto meno e si mangia meglio, ma per il mare servono bici o taxi. La zona hotelera è sul mare ma ha prezzi alti e cene care.",
      },
      {
        domanda: "Tulum o Playa del Carmen come base?",
        risposta: "Tulum è più comoda per rovine, cenote e spiagge tranquille; Playa del Carmen ha più vita urbana e i traghetti per Cozumel. Molti dormono in tutte e due.",
      },
      {
        domanda: "Serve prenotare il sito archeologico?",
        risposta: "No, il biglietto si compra all'ingresso del Parque del Jaguar. Conviene arrivare alle 8, perché l'ultimo ingresso è alle 15:30 e a metà mattina arrivano i pullman.",
      },
      {
        domanda: "C'è il sargasso a Tulum?",
        risposta: "Tra primavera ed estate le alghe possono arrivare in quantità sulle spiagge della Riviera Maya. In quei mesi conviene controllare le segnalazioni giornaliere e tenersi i cenote come alternativa.",
      },
      {
        domanda: "Come ci si muove a Tulum?",
        risposta: "In bici, su piste ciclabili che collegano paese, rovine e spiaggia, oppure in taxi, concordando il prezzo prima di salire. Per Cobá e Akumal ci sono colectivos e bus ADO.",
      },
    ],
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
    comeSpostarsi: 'Su come muoversi in città non ho appunti: l\'ho vista solo per una serata.',
    periodoMigliore: 'non l\'ho annotato; vale la stagione secca consigliata per la Riviera Maya, da novembre ad aprile.',
    erroriDaEvitare: [],
    miaEsperienza:
      'L\'ho vista solo di sera, con una tappa al Clandestino: troppo poco per farmi un\'idea della città, che meriterebbe più tempo (magari con l\'escursione a Cozumel, che nel mio viaggio non abbiamo fatto).',
      "sapori": [
        {
          "nome": "Tacos al pastor e di pesce",
          "testo": "Di strada."
        },
        {
          "nome": "Ceviche",
          "testo": "Con lime, nei ristoranti sul mare."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Maiale yucateco."
        },
        {
          "nome": "Aguachile",
          "testo": "Gamberi crudi in salsa piccante di lime."
        }
      ],
      "attenzioni": [
        "Sulla 5ta Avenida i prezzi sono turistici: spostarsi di una o due vie per mangiare meglio.",
        "Procacciatori che vendono tour: non fermarsi.",
        "Il traghetto per Cozumel ha orari fissi: controllare l'ultimo rientro."
      ],
    comeArrivare: "In van o in auto da Tulum (circa 1 ora). Dall'aeroporto di Cancún, a circa 70 km, i bus ADO partono dai terminal e arrivano in centro in circa un'ora; i biglietti si comprano al banco ADO negli arrivi o su ado.com.mx. Da Tulum il bus impiega circa 45 minuti. Il terminal ADO principale è all'incrocio fra la Quinta Avenida e la Calle Juárez, a due passi dal mare e dal molo dei traghetti per Cozumel. Il Tren Maya ha una stazione alla periferia della città: da lì al centro serve un taxi.",
    costi: "Per una sola serata non mi sono segnato le spese; come Tulum, ha prezzi quasi europei. Indicativamente, a persona al giorno: 50-70 € con ostello, tacos e colectivos; 120-180 € con hotel in centro, un cenote e un beach club; da 300 € con resort a Playacar o parchi come Xcaret. Cozumel in catamarano condiviso circa 1.670 MXN a persona con traghetto; barca privata circa 700 MXN a persona più il traghetto, circa 580 MXN andata e ritorno.",
    luoghi: [
      {
        "nome": "5ta Avenida",
        "testo": "La via pedonale principale, parallela al mare, con negozi, ristoranti e bar per diversi chilometri. Verso nord, oltre la Calle 38, diventa più tranquilla e alberata.",
        "come": "A piedi dal centro.",
        "quando": "Pomeriggio e sera.",
        "tempo": "2 ore",
        "costo": "Ingresso libero",
        "lat": 20.63472,
        "lng": -87.06666
      },
      {
        "nome": "Mamitas Beach, Playacar e Parque Fundadores",
        "testo": "Le spiagge pubbliche del centro, con beach club e tratti gratuiti. Mamitas è la più animata, Playacar la più tranquilla, davanti ai resort.",
        "come": "A piedi dal centro.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "costo": "Spiaggia libera; nei beach club lettini con consumazione minima",
        "lat": 20.63109,
        "lng": -87.0652
      },
      {
        "nome": "Cozumel in catamarano o in barca privata",
        "testo": "Escursione di una giornata a Cozumel con snorkeling nelle barriere di Palancar, El Cielo ed El Cielito. In questo viaggio non l'abbiamo fatta, ma con più tempo la consiglio.",
        "come": "Catamarano condiviso con traghetto, pranzo e open bar, oppure barca privata con il traghetto a parte: confrontare i prezzi di più operatori.",
        "quando": "Mattina.",
        "tempo": "Giornata",
        "costo": "Catamarano circa 1.670 MXN a persona, circa 85 €, con traghetto andata e ritorno; barca privata circa 700 MXN a persona più il traghetto, circa 580 MXN andata e ritorno (dal viaggio).",
        "lat": 20.43,
        "lng": -87.02
      },
      {
        "nome": "Parque Fundadores e Portal Maya",
        "testo": "La piazza sul mare dove comincia la Quinta Avenida, con la grande scultura in bronzo del Portal Maya e la piccola chiesa della Virgen del Carmen. Nel pomeriggio ci sono spesso i voladores, che si lanciano legati da un palo altissimo.",
        "come": "A piedi, all'altezza della Calle 1.",
        "quando": "Tardo pomeriggio.",
        "tempo": "30 minuti",
        "costo": "Ingresso libero",
        "lat": 20.62204,
        "lng": -87.07497
      },
      {
        "nome": "Punta Esmeralda",
        "testo": "La spiaggia pubblica a nord della città frequentata dalle famiglie locali, con una pozza di acqua dolce dove sfocia un piccolo cenote. Niente resort alle spalle e mare spesso più calmo.",
        "come": "Taxi o a piedi lungo la spiaggia dal centro, circa 30 minuti.",
        "quando": "Mattina nei giorni feriali.",
        "tempo": "Mezza giornata",
        "costo": "Ingresso libero",
        "lat": 20.64822,
        "lng": -87.05054
      },
      {
        "nome": "Xaman Ha (Playacar)",
        "testo": "Piccole strutture maya fra i giardini dei resort di Playacar: Xaman Ha era il porto da cui si partiva per il santuario di Ixchel a Cozumel. Non è un grande sito, ma si vede passeggiando verso la spiaggia.",
        "come": "A piedi o in bici da Parque Fundadores, dentro Playacar.",
        "quando": "Mattina.",
        "tempo": "30 minuti",
        "costo": "Ingresso gratuito (scheda INAH, 2026).",
        "orari": "Tutti i giorni 8-17 (scheda INAH).",
        "lat": 20.60728,
        "lng": -87.09289,
        "url": "https://lugares.inah.gob.mx/es/node/4354"
      },
      {
        "nome": "Calle 12 e la vita notturna",
        "testo": "La strada dei locali, fra la Quinta Avenida e il mare, con bar, discoteche e beach club aperti fino a tardi. È rumorosa e affollata nel fine settimana.",
        "come": "A piedi dal centro.",
        "quando": "Sera e notte.",
        "tempo": "Serata",
        "lat": 20.66842,
        "lng": -87.08293,
        "consiglio": "Contare il resto e tenere d'occhio il bicchiere; usare taxi del sito per tornare."
      },
      {
        "nome": "Clandestino",
        "testo": "Locale serale in centro.",
        "come": "A piedi dalla 5ta.",
        "quando": "Sera.",
        "tempo": "Serata",
        "lat": 20.63746,
        "lng": -87.06578,
        "consiglio": "L'ho vista solo di sera, con una tappa al Clandestino."
      },
      {
        "nome": "Cenote Chaak Tun",
        "testo": "Un cenote in grotta alla periferia ovest della città, con due sale illuminate da fasci di luce che entrano dall'alto. È il cenote più vicino al centro.",
        "come": "Taxi dal centro, circa 15 minuti; visita con guida.",
        "quando": "Mezzogiorno, quando i raggi di luce entrano dritti.",
        "tempo": "1,5 ore",
        "lat": 20.65233,
        "lng": -87.12539
      },
      {
        "nome": "Cenote Cristalino e Cenote Azul",
        "testo": "Cenote aperti uno accanto all'altro lungo la Federale 307, verso Tulum, con acqua trasparente, pesci e piattaforme per i tuffi. Sono il bagno più facile fuori città.",
        "come": "Colectivo per Tulum dalla Calle 2, con fermata a richiesta sulla strada, o auto, circa 20-25 minuti.",
        "quando": "Mattina presto, prima dei gruppi.",
        "tempo": "2-3 ore",
        "lat": 20.49041,
        "lng": -87.25028,
        "consiglio": "Doccia prima del bagno e niente crema solare, come in tutti i cenote."
      },
      {
        "nome": "Parco Xcaret",
        "testo": "Il parco tematico più grande della Riviera Maya, con fiumi sotterranei da percorrere a nuoto, animali, una zona archeologica maya e lo spettacolo serale sulla storia del Messico. Costoso, ma pensato per una giornata intera.",
        "come": "Navette dal centro o taxi, circa 10 minuti a sud.",
        "quando": "Giornata intera, fino allo spettacolo della sera.",
        "tempo": "Giornata",
        "orari": "Tutti i giorni 8.30-22 (sito ufficiale).",
        "lat": 20.57806,
        "lng": -87.11917,
        "url": "https://www.xcaret.com/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: spiaggia pubblica, Mamitas o Punta Esmeralda",
          "Pranzo sulla 5ta Avenida",
          "Pomeriggio: Parque Fundadores e Portal Maya, shopping",
          "Sera: Calle 12 o il Clandestino"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: spiagge e 5ta Avenida",
          "Giorno 2: Cozumel in catamarano"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Cenote Chaak Tun al mattino, Cenote Cristalino e Azul, pomeriggio ad Akumal per le tartarughe"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro (5ta Avenida)",
        "perChi": "vita serale",
        "testo": "Tutto a piedi, ma rumoroso e caro; meglio una via laterale lontano dalla Calle 12.",
        "fascia": "45-100 €"
      },
      {
        "nome": "Playacar",
        "perChi": "resort",
        "testo": "Zona recintata di resort, più tranquilla, vicino al traghetto."
      },
      {
        "nome": "Zona nord, verso Punta Esmeralda",
        "perChi": "più calma",
        "testo": "Oltre la Calle 38, condomini e piccoli hotel più tranquilli, a 15-20 minuti a piedi dal centro."
      }
    ],
    gite: [
      {
        "nome": "Tulum",
        "distanza": "circa 63 km, 45 minuti in bus",
        "come": "Bus ADO o colectivo dalla Calle 2.",
        "testo": "Le rovine maya sulla scogliera e le spiagge del Parque del Jaguar. Si entra all'apertura delle 8; ingressi nella scheda di Tulum."
      },
      {
        "nome": "Akumal",
        "distanza": "circa 37 km, 30 minuti",
        "come": "Colectivo verso Tulum, poi a piedi dalla strada alla baia.",
        "testo": "La baia dove si nuota con le tartarughe marine che brucano le alghe, con regole e accesso controllati dalla comunità."
      },
      {
        "nome": "Puerto Morelos",
        "distanza": "circa 35 km, 30 minuti",
        "come": "Bus ADO o colectivo verso Cancún.",
        "testo": "Paese di pescatori con il faro inclinato e la barriera corallina protetta davanti alla spiaggia; verso l'interno, la Ruta de los Cenotes."
      }
    ],
    faq: [
      {
        "domanda": "Meglio Playa del Carmen o Tulum come base?",
        "risposta": "Playa è più comoda per trasporti, ristoranti e traghetti per Cozumel, ma è una città affollata; Tulum ha spiagge più belle e un'atmosfera più rilassata, con prezzi ancora più alti."
      },
      {
        "domanda": "Quanti giorni servono a Playa del Carmen?",
        "risposta": "Uno o due giorni bastano per spiagge, Quinta Avenida e Cozumel; con tre si aggiungono cenote e Akumal."
      },
      {
        "domanda": "Come si va a Cozumel?",
        "risposta": "Con il traghetto dal molo del centro, circa 580 MXN andata e ritorno, oppure con un catamarano condiviso che include traghetto, snorkeling e pranzo (circa 1.670 MXN a persona, dal viaggio)."
      },
      {
        "domanda": "Le spiagge di Playa del Carmen sono libere?",
        "risposta": "Sì, la spiaggia in Messico è pubblica: si paga solo lettino e ombrellone nei beach club. Punta Esmeralda e Playacar sono i tratti più tranquilli."
      },
      {
        "domanda": "C'è il sargasso?",
        "risposta": "Può arrivare in estate e lasciare spiagge piene di alghe brune. Conviene controllare i bollettini locali prima di scegliere dove passare la giornata."
      },
      {
        "domanda": "Che cos'è il Visitax?",
        "risposta": "È la tassa per i turisti del Quintana Roo: 20,99 dollari a persona, da pagare solo online (Viaggiare Sicuri, maggio 2026)."
      }
    ],
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
    comeSpostarsi: 'Isola senza auto: a piedi o con i "carritos" (taxi locali/golf cart).',
    periodoMigliore: 'La bioluminescenza si vede meglio da aprile a novembre, e dipende da fasi lunari e meteo.',
    erroriDaEvitare: [
      'Partire per la bioluminescenza serale senza molto repellente: a Punta Mosquito le zanzare non danno tregua',
      'Andare a piedi a vedere la bioluminescenza: è quasi un\'ora di cammino al buio per direzione, meglio un carrito, un kayak o un tour in barca',
      'Il tour delle 3 Islas è carino ma un po\' ridondante se si sono già viste cose simili altrove nel viaggio',
    ],
    miaEsperienza:
      'Holbox è stata la chiusura giusta del viaggio. Se dovessi consigliare una sola attività di tutto l\'itinerario, sarebbe l\'escursione con lo squalo balena, che ho fatto proprio qui.',
      "sapori": [
        {
          "nome": "Pizza di Holbox",
          "testo": "Con aragosta, tipica dell'isola."
        },
        {
          "nome": "Ceviche",
          "testo": "Fresco di pesce."
        },
        {
          "nome": "Tacos di pesce",
          "testo": "Di strada."
        },
        {
          "nome": "Aragosta e frutti di mare",
          "testo": "Alla griglia, in stagione."
        }
      ],
      "attenzioni": [
        "Squalo balena: stagionale; non è garantito e dipende dall'operatore.",
        "Bioluminescenza: dipende da fasi lunari e meteo, chiedere sul posto il giorno stesso.",
        "Sulla spiaggia a Holbox ci sono sargassi in certi mesi: non è un difetto dell'isola ma va messo in conto."
      ],
    comeArrivare: "Traghetto da Chiquilà (25-30 minuti), raggiungibile via van/auto da Cancún. Da Cancún a Chiquilá ci vogliono circa 2 ore e mezza di strada; chi va in auto la lascia nei parcheggi custoditi a pagamento di Chiquilá, perché sull'isola le auto dei turisti non entrano. Il traghetto costa circa 330 MXN a tratta (circa 16 €), con corse frequenti dal mattino alla sera (dal viaggio, 2026). Al molo di Holbox aspettano i golf cart taxi: il prezzo si concorda prima di salire. Sull'isola c'è un solo bancomat: arrivare con abbastanza contanti.",
    costi: "Il conto complessivo di Holbox non me lo sono segnato; i prezzi delle singole escursioni sono nelle voci qui sopra e nelle schede esperienza. Indicativamente: squalo balena 3.000-4.000 MXN a persona più il braccialetto del parco, 3 Islas 750-900 MXN, kayak per la bioluminescenza 400-500 MXN, cavallo 850 MXN per un'ora e mezza, traghetto 330 MXN a tratta (dal viaggio, 2026). Budget a persona al giorno: basso 50-70 € (ostello in paese, cucina di strada), medio 120-180 € (hotel in paese e un'escursione), alto da 300 € (hotel sulla spiaggia e squalo balena).",
    luoghi: [
      {
        "nome": "Squalo balena",
        "testo": "Escursione in barca per nuotare con lo squalo balena, ammesso a gruppi piccoli. Esiste una scheda esperienza dedicata. Se dovessi consigliare una sola attività di tutto l'itinerario, sarebbe questa.",
        "come": "Tour dal porto di Holbox, con guida; partenza verso le 7-8 e rientro nel primo pomeriggio.",
        "quando": "La stagione va più o meno da metà maggio a metà settembre, con i mesi migliori a luglio e agosto; le uscite si fanno con permessi della CONANP.",
        "tempo": "Mezza giornata",
        "costo": "Tour condiviso indicativamente 3.000-4.000 MXN a persona, circa 150-200 €, più l'eventuale braccialetto del parco (dal viaggio, 2026).",
        "consiglio": "Crema solare biodegradabile, maglia a maniche lunghe e acqua; il giubbotto di salvataggio in acqua è obbligatorio."
      },
      {
        "nome": "Bioluminescenza a Punta Mosquito",
        "testo": "Il plancton luminescente illumina l'acqua di notte. Ci si va in autonomia con un «carrito» fino al punto, in kayak con guida o con un tour in barca.",
        "come": "Chiedere sul posto il giorno stesso: dipende da fasi lunari e meteo.",
        "quando": "Sera, meglio nelle notti senza luna; si vede meglio da aprile a novembre.",
        "tempo": "2 ore",
        "costo": "Kayak con guida 500 MXN a persona per gruppi sopra le 8 persone, 400 MXN sotto le 8 (dal viaggio).",
        "lat": 21.54307,
        "lng": -87.35312,
        "consiglio": "A piedi è sconsigliato: circa un'ora di cammino per direzione, quasi tutta al buio."
      },
      {
        "nome": "Tour delle 3 Islas",
        "testo": "Giro condiviso in barca di circa 3 ore, con fenicotteri, delfini e uccelli: Isla Pájaros, cenote di Yalahau, Isla Pasión o Punta Mosquito.",
        "come": "Prezzi diversi secondo l'operatore, alcuni con il transfer dall'hotel. Il cenote Yalahau si paga a parte.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "costo": "750-900 MXN a persona, circa 38-45 € (circa 1.100 MXN con transfer); cenote Yalahau circa 200 MXN (dal viaggio).",
        "lat": 21.45715,
        "lng": -87.40564
      },
      {
        "nome": "Cabo Catoche",
        "testo": "Escursione in barca verso la punta nord-orientale della penisola dello Yucatán, fra Golfo del Messico e Caraibi, di solito con soste per lo snorkeling. Nel viaggio non l'abbiamo fatta.",
        "come": "Tour condiviso in barca; confrontare più operatori e cosa include il prezzo.",
        "quando": "Giornata.",
        "tempo": "Giornata",
        "costo": "Indicativamente 80-100 dollari a persona (dal viaggio).",
        "lat": 21.6058,
        "lng": -87.1033
      },
      {
        "nome": "Punta Cocos",
        "testo": "L'estremo ovest dell'isola, dove si va al tramonto, con il sole che scende sul Golfo. Di notte è un altro punto per la bioluminescenza, più vicino al paese di Punta Mosquito.",
        "come": "In bici o golf cart dal centro, circa 15 minuti, o a piedi lungo la spiaggia.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "costo": "Ingresso libero",
        "lat": 21.50984,
        "lng": -87.39468
      },
      {
        "nome": "Punta Mosquito di giorno",
        "testo": "Il banco di sabbia a est del paese, dove con la bassa marea si cammina nell'acqua bassa fra stormi di uccelli e, in stagione, i fenicotteri. È la parte più selvaggia dell'isola raggiungibile a piedi.",
        "come": "A piedi lungo la spiaggia verso est, circa 30-40 minuti dal centro, o in golf cart fino all'inizio del banco.",
        "quando": "Mattina o tardo pomeriggio, con la bassa marea.",
        "tempo": "2 ore",
        "costo": "Ingresso libero",
        "lat": 21.54307,
        "lng": -87.35312,
        "consiglio": "Repellente e scarpe da acqua."
      },
      {
        "nome": "Centro del paese e murales",
        "testo": "Le strade di sabbia senza auto intorno alla piazza, con casette colorate, murales, ristoranti e golf cart. La sera la piazza è il punto d'incontro dell'isola.",
        "come": "A piedi.",
        "quando": "Sera.",
        "tempo": "1-2 ore",
        "costo": "Ingresso libero",
        "lat": 21.52167,
        "lng": -87.37667
      },
      {
        "nome": "Spiaggia principale e beach club",
        "testo": "La spiaggia davanti al paese, con acqua bassa e calma e i beach club che chiedono un minimum spending, di solito scalato dal conto finale: Carolinda, Zomay, Barbarossa, Amaite Beach Club.",
        "come": "A piedi dal centro.",
        "quando": "Pomeriggio.",
        "tempo": "Mezza giornata",
        "costo": "Spiaggia libera; nei beach club consumazione minima"
      },
      {
        "nome": "Passeggiata a cavallo sulla spiaggia",
        "testo": "Un'ora e mezza a cavallo lungo la spiaggia, un modo tranquillo per vedere i tratti fuori dal paese.",
        "come": "Si prenota in paese.",
        "quando": "Tardo pomeriggio.",
        "tempo": "1,5 ore",
        "costo": "850 MXN a persona, circa 43 € (dal viaggio)."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: tour delle 3 Islas",
          "Pomeriggio: spiaggia",
          "Tramonto a Punta Cocos",
          "Sera: bioluminescenza"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: squalo balena (stagione)",
          "Giorno 2: 3 Islas e Punta Mosquito"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Cabo Catoche o passeggiata a cavallo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro del paese",
        "perChi": "a piedi da tutto",
        "testo": "Ristoranti, negozi e hotel vicini alla piazza, strade di sabbia senza auto. In bassa stagione i prezzi scendono molto.",
        "fascia": "50-170 €"
      },
      {
        "nome": "Spiaggia fuori dal paese",
        "perChi": "calma",
        "testo": "Hotel sul mare, più isolati.",
        "fascia": "150-400 €"
      },
      {
        "nome": "Verso Punta Cocos",
        "perChi": "tramonti e silenzio",
        "testo": "Pochi alloggi sul lato ovest, tranquilli; per il centro serve il golf cart o la bici."
      }
    ],
    gite: [
      {
        "nome": "El Cuyo",
        "distanza": "indicativamente 2 ore in auto da Chiquilá",
        "come": "Traghetto per Chiquilá, poi auto.",
        "testo": "Paese di pescatori sulla costa dello Yucatán, con spiagge lunghe e quasi vuote e un'atmosfera da Holbox di vent'anni fa."
      },
      {
        "nome": "Río Lagartos e Las Coloradas",
        "distanza": "indicativamente 3 ore in auto da Chiquilá",
        "come": "Auto o tour; meglio come tappa lungo il viaggio verso Valladolid.",
        "testo": "Riserva della biosfera con fenicotteri e mangrovie in barca, e i laghi rosa delle saline di Las Coloradas."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Holbox?",
        "risposta": "Due o tre giorni: uno per le 3 Islas e Punta Mosquito, uno per lo squalo balena in stagione o Cabo Catoche, più le sere per la bioluminescenza."
      },
      {
        "domanda": "Quando si nuota con lo squalo balena?",
        "risposta": "Più o meno da metà maggio a metà settembre, con i mesi migliori a luglio e agosto; le uscite si fanno con permessi della CONANP."
      },
      {
        "domanda": "Come si arriva a Holbox?",
        "risposta": "In van, bus o auto da Cancún fino a Chiquilá, circa 2 ore e mezza, poi traghetto di 25-30 minuti, circa 330 MXN a tratta."
      },
      {
        "domanda": "A Holbox ci sono bancomat?",
        "risposta": "Uno solo su tutta l'isola, spesso con code o vuoto: conviene arrivare con abbastanza contanti in pesos."
      },
      {
        "domanda": "Ci si muove in auto sull'isola?",
        "risposta": "No, le auto dei turisti restano a Chiquilá. Sull'isola si cammina, si va in bici o si usano i golf cart taxi, con il prezzo concordato prima."
      },
      {
        "domanda": "Quando si vede la bioluminescenza?",
        "risposta": "Si vede meglio da aprile a novembre, nelle notti senza luna; dipende da fasi lunari e meteo, quindi conviene chiedere sul posto il giorno stesso."
      }
    ],
    esperienzeSlugs: ['squalo-balena-holbox', 'bioluminescenza-holbox', 'tour-3-islas-holbox', 'cabo-catoche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: "Una barca ancorata nell'acqua bassa e cristallina di Holbox, con la riva bianca e le palme all'orizzonte",
    immagine: '/images/messico/holbox-barca-acqua-bassa-riccardo.jpg',
  },
  {
    slug: 'uxmal-ruta-puuc',
    paeseSlug: 'messico',
    ordine: 30,
    nome: 'Uxmal e la Ruta Puuc',
    tipologia: ['archeologia', 'cultura'],
    giorniConsigliati: '1-2 giorni, dormendo vicino a Uxmal o a Santa Elena',
    visitataPersonalmente: true,
    introduzione:
      'La grande città maya dello stile puuc, a sud di Mérida, e la strada di campagna che collega i siti minori dello stesso stile: Kabah, Sayil e Labná.',
    percheAndarci:
      'Per vedere un\'architettura maya diversa da Chichén Itzá: facciate lisce in basso e coperte in alto da mosaici di pietra e maschere di Chaac, il dio della pioggia. I siti della Ruta Puuc sono tranquilli e spesso quasi vuoti.',
    cosaVedere: [
      'La Piramide dell\'Indovino e il Quadrilatero delle Monache a Uxmal',
      'Il Codz Poop di Kabah, con la facciata di maschere',
      'Il Gran Palazzo di Sayil, su terrazze sovrapposte',
      'L\'arco di Labná',
    ],
    cosaFare: [
      'Entrare a Uxmal all\'apertura, alle 8',
      'Percorrere la Ruta Puuc in auto, fermandosi nei siti minori',
      'Pranzare con la carne cotta sottoterra, il pib',
    ],
    doveDormire:
      'Vicino a Uxmal ci sono pochi alloggi; Santa Elena è il paese più vicino. Dormire qui permette di entrare nei siti all\'apertura senza la strada da Mérida.',
    doveMangiare:
      'Dopo Uxmal ho pranzato al Po\' Pol Chac, con la carne cotta sottoterra.',
    comeArrivare: 'Da Mérida sulla Federale 261 verso Santa Elena, in auto o con un tour.',
    comeSpostarsi: 'Per la Ruta Puuc serve un\'auto o un tour: i siti sono lungo una strada di campagna.',
    periodoMigliore: 'da novembre ad aprile, la stagione secca; da aprile il caldo nei siti senza ombra è forte.',
    costi: 'Uxmal 105 MXN di ingresso INAH più 461 MXN di quota statale CULTUR per gli stranieri; Kabah 155 MXN; Labná e Sayil 145 MXN ciascuno (schede INAH, novembre 2026).',
    erroriDaEvitare: [
      'Arrivare a Uxmal nel pomeriggio: chiude alle 16, con ultimo ingresso alle 15',
      'Portare cibo all\'ingresso dei siti: non è permesso',
    ],
    miaEsperienza:
      'Uxmal l\'ho visitato con una guida, lungo la strada tra Mérida e Campeche, e poi ho pranzato al Po\' Pol Chac, con la carne cotta sottoterra. La Ruta Puuc non l\'ho fatta.',
      "luoghi": [
        {
          "nome": "Uxmal",
          "testo": "La città più grande dello stile puuc, patrimonio UNESCO. La Piramide dell'Indovino ha una pianta ovale insolita; il Quadrilatero delle Monache è un cortile chiuso da quattro palazzi con facciate di mosaici di pietra.",
          "come": "Da Mérida sulla Federale 261 verso Santa Elena. Biglietto INAH più quota statale CULTUR.",
          "quando": "Aperto ogni giorno dalle 8 alle 16, ultimo ingresso alle 15 (scheda INAH).",
          "tempo": "2-3 ore",
          "costo": "105 MXN INAH più 461 MXN CULTUR per gli stranieri; i residenti nello Yucatán non pagano la quota statale (scheda INAH, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5797",
          "consiglio": "Con una guida si capiscono meglio i simboli delle facciate."
        },
        {
          "nome": "Kabah",
          "testo": "Il Codz Poop ha la facciata coperta da centinaia di maschere di Chaac, uno degli esempi più raffinati dell'arte maya secondo l'INAH. Nel sito c'è anche un arco isolato.",
          "come": "In auto, a sud di Uxmal sulla Ruta Puuc.",
          "quando": "Aperto ogni giorno dalle 8 alle 17, ultimo ingresso alle 16 (scheda INAH).",
          "tempo": "1 ora",
          "costo": "155 MXN per gli stranieri (scheda INAH, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5504"
        },
        {
          "nome": "Sayil",
          "testo": "Un sito della regione puuc con il Gran Palazzo, o Palazzo Nord, costruito su due terrazze che danno l'impressione di tre piani, con facciate aggiunte in fasi successive.",
          "come": "In auto lungo la Ruta Puuc, tra Kabah e Labná.",
          "quando": "Aperto ogni giorno dalle 8 alle 17, ultimo ingresso alle 16 (scheda INAH).",
          "tempo": "45 minuti",
          "costo": "145 MXN per gli stranieri (scheda INAH, novembre 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/4458"
        },
        {
          "nome": "Labná",
          "testo": "Famoso per il suo arco, molto decorato, che collegava due cortili. Abitato dal 200 a.C., ebbe il suo apogeo tra l'800 e il 1000 d.C. (scheda INAH). Il sito è tranquillo.",
          "come": "In auto, in fondo alla Ruta Puuc.",
          "quando": "Aperto ogni giorno dalle 8 alle 17, ultimo ingresso alle 16 (scheda INAH).",
          "tempo": "1 ora",
          "costo": "145 MXN per gli stranieri (scheda INAH, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/4427"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Uxmal all'apertura",
            "Pranzo con il pib",
            "Pomeriggio: Kabah"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Uxmal e notte nei dintorni",
            "Giorno 2: Kabah, Sayil e Labná, poi verso Campeche"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Dintorni di Uxmal",
          "perChi": "chi vuole entrare all'apertura",
          "testo": "Pochi alloggi vicino al sito, da prenotare."
        },
        {
          "nome": "Santa Elena",
          "perChi": "chi spende meno",
          "testo": "Il paese più vicino, con alloggi semplici."
        }
      ],
      "sapori": [
        {
          "nome": "Pib e cochinita",
          "testo": "Carne marinata nell'achiote e cotta sottoterra, il metodo maya del pib."
        },
        {
          "nome": "Sopa de lima",
          "testo": "Zuppa di pollo e lime, il classico yucateco."
        }
      ],
      "attenzioni": [
        "Uxmal chiude prima degli altri siti: ultimo ingresso alle 15.",
        "Niente cibo all'ingresso, niente animali, quota extra per le videocamere professionali.",
        "Lungo la Ruta Puuc ci sono pochi servizi: acqua e benzina prima di partire."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo', 'messico-beach-life'],
    imageAlt: "Il trono del giaguaro a due teste davanti al Palazzo del Governatore di Uxmal",
    immagine: '/images/messico/uxmal-ruta-puuc-riccardo.webp',
  },
  {
    slug: 'palenque',
    paeseSlug: 'messico',
    ordine: 31,
    nome: 'Palenque',
    tipologia: ['archeologia', 'natura', 'cultura'],
    giorniConsigliati: '2 notti, con un giorno pieno per il sito',
    visitataPersonalmente: true,
    introduzione:
      'Una città maya classica sulle prime colline del Chiapas, dentro un parco nazionale coperto di foresta, con il Tempio delle Iscrizioni e la tomba del re Pakal.',
    percheAndarci:
      'È uno dei siti maya più belli per l\'insieme di architettura e natura: templi tra gli alberi, ruscelli e scimmie urlatrici. Ha anche una stazione del Tren Maya.',
    cosaVedere: [
      'Il Tempio delle Iscrizioni e il Palazzo con la torre',
      'Il Gruppo delle Croci',
      'Il museo di sito',
    ],
    cosaFare: [
      'Entrare all\'apertura, alle 8, quando la foresta è fresca',
      'Seguire i sentieri tra i gruppi di templi più lontani',
      'Valutare le cascate di Misol-Ha e Agua Azul solo se gli avvisi ufficiali sulla Federale 199 lo permettono',
    ],
    doveDormire:
      'Il paese per spendere meno; la strada che sale al sito per dormire nella vegetazione, più vicino all\'ingresso.',
    doveMangiare:
      'Cucina semplice in paese. Nel sito non si entra con il cibo.',
    comeSpostarsi: 'Dal paese al sito, a circa 7 km dentro il parco nazionale, taxi o colectivo.',
    periodoMigliore: 'da novembre ad aprile, la stagione più asciutta; nel resto dell\'anno piove spesso e fa molto caldo umido.',
    erroriDaEvitare: [
      'Andare alle cascate in auto propria sulla Federale 199 senza controllare gli avvisi: il Foreign Office sconsiglia i viaggi non essenziali su quel tratto',
      'Arrivare a metà giornata: caldo forte e folla',
      'Cercare il museo di sito il lunedì: è aperto dal martedì alla domenica (scheda INAH)',
    ],
      "sapori": [
        {
          "nome": "Caffè e cioccolato del Chiapas",
          "testo": "Il Chiapas è una regione di caffè e cacao."
        },
        {
          "nome": "Tamales chiapanechi",
          "testo": "Tamales avvolti nella foglia di banano, nei mercati."
        }
      ],
      "attenzioni": [
        "In Chiapas Viaggiare Sicuri segnala rapine a stranieri e raccomanda di restare sulle strade statali.",
        "Il Foreign Office sconsiglia la fascia di 40 km dal confine con il Guatemala: Yaxchilán e Bonampak sono in quella zona.",
        "Repellente forte: nel parco ci sono molte zanzare."
      ],
    comeArrivare: "Tren Maya (stazione di Palenque) o bus ADO; in auto dalla Federale 186, deviando al km 114 verso Palenque (scheda INAH). Da Campeche servono circa 5-6 ore di auto, da Xpujil e Calakmul altre 5-6; Palenque è nel fuso del Centro, come Campeche, un'ora indietro rispetto al Quintana Roo. L'aeroporto con più voli è quello di Villahermosa, da cui si arriva con la stessa Federale 186. Dal paese al sito, a circa 7 km dentro il parco nazionale, si va in taxi o con i colectivos che passano lungo la strada di El Panchán. Orari e biglietti del Tren Maya vanno controllati sul sito ufficiale qualche giorno prima.",
    costi: "210 MXN di ingresso INAH per gli stranieri, più 215 MXN di quota del parco nazionale (CONANP) (scheda INAH, novembre 2026). Budget indicativo a persona al giorno: basso 35-50 € (camera in paese, comedores, colectivo per il sito); medio 70-110 € (cabaña nella foresta lungo la strada del sito, guida al sito); alto da 180 € (hotel nella vegetazione, tour privato per Yaxchilán e Bonampak). Yaxchilán: ingresso INAH gratuito ma lancia circa 1.200 MXN; Bonampak 210 MXN più quote della comunità (scheda INAH).",
    luoghi: [
      {
        "nome": "Zona archeologica di Palenque",
        "testo": "Il Tempio delle Iscrizioni custodiva la tomba di Pakal, re di Palenque nel VII secolo; il Palazzo ha una torre, rara nell'architettura maya. Intorno, il Gruppo delle Croci e templi minori tra la foresta.",
        "come": "Biglietti al centro visitatori (CATVI) o online. Si paga l'ingresso INAH e la quota del parco nazionale.",
        "quando": "Meglio all'apertura, quando la foresta è fresca.",
        "tempo": "3-4 ore",
        "costo": "210 MXN INAH più 215 MXN CONANP per gli stranieri, circa 21 € in tutto (scheda INAH, novembre 2026).",
        "orari": "Tutti i giorni 8-17, ultimo ingresso alle 16 (scheda INAH).",
        "lat": 17.4836,
        "lng": -92.0468,
        "url": "https://lugares.inah.gob.mx/en/node/4853",
        "consiglio": "Niente cibo all'ingresso: si mangia prima o dopo."
      },
      {
        "nome": "Templo de las Inscripciones",
        "testo": "La piramide a gradoni che custodiva la tomba di Pakal, scoperta nel 1952 sotto il pavimento del tempio, con il celebre coperchio scolpito del sarcofago. Prende il nome dai lunghi testi geroglifici del tempio in cima.",
        "come": "Dentro la zona archeologica, a destra appena entrati; la salita e la tomba sono chiuse al pubblico.",
        "quando": "Mattina presto, con la luce sulla facciata.",
        "tempo": "30 minuti",
        "lat": 17.4836,
        "lng": -92.0468
      },
      {
        "nome": "El Palacio",
        "testo": "Il complesso di cortili, gallerie e stanze su una grande piattaforma, con la torre a quattro piani, unica nel mondo maya, forse usata per osservare il cielo. Nei cortili ci sono rilievi di prigionieri e iscrizioni.",
        "come": "Dentro la zona archeologica, di fronte al Tempio delle Iscrizioni.",
        "quando": "Mattina.",
        "tempo": "45 minuti",
        "lat": 17.48415,
        "lng": -92.04616
      },
      {
        "nome": "Grupo de las Cruces",
        "testo": "Tre templi su una piazza alzata, il Tempio della Croce, della Croce Fogliata e del Sole, costruiti dal figlio di Pakal, con pannelli scolpiti all'interno. Dalla cima del Tempio della Croce si vede tutto il sito con la pianura sullo sfondo.",
        "come": "A piedi oltre il Palazzo, attraversando il ruscello Otolum.",
        "quando": "Tarda mattinata.",
        "tempo": "45 minuti",
        "lat": 17.48292,
        "lng": -92.04523
      },
      {
        "nome": "Templo del Conde e Gruppo Nord",
        "testo": "Il tempio dove nell'Ottocento visse per un periodo l'esploratore Jean-Frédéric Waldeck, che si faceva chiamare conte, e accanto il Gruppo Nord con il gioco della palla. È la parte meno affollata del centro del sito.",
        "come": "A piedi dentro la zona archeologica, verso nord.",
        "quando": "Mattina.",
        "tempo": "30 minuti",
        "lat": 17.48556,
        "lng": -92.04563
      },
      {
        "nome": "Sentiero delle cascate e Baño de la Reina",
        "testo": "Dal Gruppo Nord il percorso scende nella foresta lungo il ruscello Otolum, fra piccole cascate, vasche naturali e gruppi di edifici ancora coperti dalla vegetazione. È il tratto dove si sentono le scimmie urlatrici e si capisce quanto del sito sia ancora da scavare.",
        "come": "Fa parte della visita e scende verso il museo di sito: si esce dalla parte bassa senza tornare indietro.",
        "quando": "A fine visita, scendendo verso il museo.",
        "tempo": "45 minuti",
        "consiglio": "Nelle vasche non si fa il bagno; scarpe chiuse, perché le scale sono scivolose."
      },
      {
        "nome": "Museo di sito Alberto Ruz Lhuillier",
        "testo": "Il museo del sito, con i rilievi e gli oggetti trovati negli scavi, intitolato all'archeologo che nel 1952 scoprì la tomba di Pakal. C'è la riproduzione della tomba e del coperchio del sarcofago.",
        "come": "Lungo la strada del sito. L'ingresso è compreso nel biglietto della zona archeologica.",
        "quando": "Dopo la visita, scendendo dal sentiero delle cascate.",
        "tempo": "1 ora",
        "orari": "Dal martedì alla domenica, dalle 8.30 alle 17 (scheda INAH).",
        "url": "https://lugares.inah.gob.mx/en/node/4293"
      },
      {
        "nome": "Misol-Ha e Agua Azul",
        "testo": "Due cascate famose a sud di Palenque, sulla strada per Ocosingo, la Federale 199: Misol-Ha è un salto unico in una grande pozza, Agua Azul una serie di vasche d'acqua azzurra, che nella stagione delle piogge perde il colore, a circa 60 km più una deviazione.",
        "come": "Solo con un tour organizzato dal paese, e solo se gli avvisi ufficiali lo permettono al momento.",
        "lat": 17.2557,
        "lng": -92.11595,
        "consiglio": "Il Foreign Office britannico sconsiglia i viaggi non essenziali sulla 199 tra Rancho Nuevo e il bivio di Chancalá, appena fuori Palenque, per blocchi illegali, proteste e rischio di sequestro. Le quote d'ingresso sono gestite dalle comunità: non verificate."
      },
      {
        "nome": "Cascate di Roberto Barrios",
        "testo": "Una serie di vasche e piccole cascate di acqua turchese su gradini di travertino, vicino al villaggio di Roberto Barrios, meno conosciute di Agua Azul. Le gestisce la comunità locale.",
        "come": "Con un tour o un taxi dal paese; prima di partire controllare gli avvisi aggiornati sulla zona.",
        "quando": "Stagione secca, quando l'acqua è più limpida.",
        "tempo": "Mezza giornata",
        "lat": 17.33012,
        "lng": -91.91792
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: il sito all'apertura, Tempio delle Iscrizioni, Palazzo e Gruppo delle Croci",
          "Sentiero delle cascate fino al museo di sito",
          "Pomeriggio: riposo nella foresta di El Panchán"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: sito e museo",
          "Giorno 2: Roberto Barrios o, se gli avvisi lo permettono, Misol-Ha e Agua Azul con un tour"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Yaxchilán e Bonampak in giornata con un tour, partendo all'alba"
        ]
      }
    ],
    zone: [
      {
        "nome": "Paese di Palenque",
        "perChi": "budget e trasporti",
        "testo": "Più economico, vicino a bus e servizi.",
        "fascia": "30-70 €"
      },
      {
        "nome": "Strada del sito (El Panchán)",
        "perChi": "chi vuole la foresta",
        "testo": "Alloggi nella vegetazione, più vicini all'ingresso del parco, con le scimmie urlatrici al mattino.",
        "fascia": "60-120 €"
      },
      {
        "nome": "La Cañada",
        "perChi": "compromesso",
        "testo": "Il quartiere verde all'ingresso ovest del paese, con hotel fra gli alberi e ristoranti, a pochi minuti dal centro e sulla strada per il sito."
      }
    ],
    gite: [
      {
        "nome": "Yaxchilán e Bonampak",
        "distanza": "circa 3 ore di strada verso il fiume Usumacinta",
        "come": "Tour di una giornata dal paese, con partenza all'alba; a Yaxchilán si arriva solo in lancia da Frontera Corozal.",
        "testo": "Yaxchilán, sul fiume al confine con il Guatemala, ha architravi scolpiti nella foresta (ingresso gratuito, lancia circa 1.200 MXN); Bonampak i murales maya meglio conservati (210 MXN per gli stranieri più 40 MXN della comunità e 250 MXN di trasporto interno). Entrambi aperti 8-16.30, ultimo ingresso alle 16 (schede INAH). Prima di partire controllare gli avvisi aggiornati: la zona è vicina al confine."
      },
      {
        "nome": "Misol-Ha e Agua Azul",
        "distanza": "circa 20 km e 60 km a sud",
        "come": "Solo con un tour organizzato e solo se gli avvisi ufficiali lo permettono.",
        "testo": "Le cascate più famose del Chiapas, sulla Federale 199. Il Foreign Office britannico sconsiglia i viaggi non essenziali sulla 199 tra Rancho Nuevo e il bivio di Chancalá, appena fuori Palenque, per blocchi illegali, proteste e rischio di sequestro. Le quote d'ingresso sono gestite dalle comunità: non verificate."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Palenque?",
        "risposta": "Due notti, con un giorno pieno per il sito e il museo; con un terzo giorno si aggiungono Yaxchilán e Bonampak o le cascate."
      },
      {
        "domanda": "A che ora conviene entrare al sito?",
        "risposta": "All'apertura delle 8, quando la foresta è fresca e i gruppi non sono ancora arrivati; l'ultimo ingresso è alle 16 (scheda INAH)."
      },
      {
        "domanda": "Quanto costa entrare a Palenque?",
        "risposta": "Per gli stranieri 210 MXN di ingresso INAH più 215 MXN di quota del parco nazionale, con il museo di sito compreso (scheda INAH, novembre 2026)."
      },
      {
        "domanda": "Si può andare a Misol-Ha e Agua Azul?",
        "risposta": "Sono sulla Federale 199, dove il Foreign Office britannico sconsiglia i viaggi non essenziali tra Rancho Nuevo e il bivio di Chancalá: si decide solo dopo aver letto gli avvisi aggiornati, e solo con un tour."
      },
      {
        "domanda": "Yaxchilán e Bonampak si fanno in giornata?",
        "risposta": "Sì, con un tour che parte all'alba e rientra la sera; a Yaxchilán si arriva in lancia sul fiume Usumacinta."
      },
      {
        "domanda": "Meglio dormire in paese o vicino al sito?",
        "risposta": "Il paese costa meno ed è vicino a bus e Tren Maya; la strada del sito, verso El Panchán, è nella foresta e più vicina all'ingresso."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo'],
    imageAlt: "Il Tempio delle Iscrizioni di Palenque tra gli alberi della foresta del Chiapas",
    immagine: '/images/messico/palenque.webp',
    miaEsperienza: 'Ci sono stato durante il giro completo dello Yucatán: da Campeche sono sceso fino a Palenque e ho dedicato un giorno intero al sito, nella foresta, prima di ripartire verso Xpujil.',
  },
  {
    slug: 'calakmul',
    paeseSlug: 'messico',
    ordine: 32,
    nome: 'Calakmul',
    tipologia: ['archeologia', 'natura'],
    giorniConsigliati: '2 notti a Xpujil o lungo la strada della riserva, con un giorno pieno per il sito',
    visitataPersonalmente: true,
    introduzione:
      'Una delle grandi capitali del mondo maya classico, rivale di Tikal, sepolta nella foresta della Riserva della Biosfera di Calakmul, nel sud del Campeche. È patrimonio UNESCO sia per la cultura sia per la natura.',
    percheAndarci:
      'Per vedere una città maya immensa quasi senza folla, e la foresta dall\'alto delle piramidi. Lungo i sentieri capita di incontrare scimmie e uccelli della foresta.',
    cosaVedere: [
      'Le grandi strutture della città, con la vista sulla foresta',
      'Le stele della piazza centrale',
      'I siti di stile Río Bec intorno a Xpujil, come Becán e Xpuhil',
    ],
    cosaFare: [
      'Partire all\'alba da Xpujil per avere tempo nel sito',
      'Camminare sui sentieri segnati, guardando la fauna',
      'Fermarsi a Balam Ku lungo la Federale 186',
    ],
    doveDormire:
      'Il paese di Xpujil, sulla Federale 186, oppure gli alloggi ecologici lungo la strada della riserva. Sono pochi: conviene prenotare.',
    doveMangiare:
      'Pochi posti, semplici, a Xpujil. Per la giornata nella riserva meglio portarsi cibo e acqua.',
    comeArrivare: 'Dalla Federale 186 (Escárcega-Chetumal): al bivio del chilometro 95 si entra nella strada della riserva, e il sito è al chilometro 60 (scheda INAH). Il Tren Maya ha stazioni a Xpujil e Calakmul, ma non risulta un trasporto pubblico fino alle rovine.',
    comeSpostarsi: 'In auto o con un tour da Xpujil.',
    periodoMigliore: 'da novembre ad aprile, la stagione secca; con le piogge la foresta è più umida e piena di zanzare.',
    costi: '210 MXN di ingresso INAH per gli stranieri, più 215 MXN di quota della riserva (CONANP) (scheda INAH, novembre 2026). Portare contanti.',
    erroriDaEvitare: [
      'Partire tardi: l\'ultimo ingresso è alle 16 e la strada nella riserva è lunga e stretta',
      'Uscire dai sentieri segnati',
      'Entrare nella riserva senza benzina, acqua e contanti',
      'Guidare la sera sulla Federale 186',
    ],
      "luoghi": [
        {
          "nome": "Zona archeologica di Calakmul",
          "testo": "La capitale della dinastia Kaan, che contese a Tikal il dominio delle pianure maya. Le strutture più alte superano la cima degli alberi: da lassù si vede solo foresta fino all'orizzonte.",
          "come": "Dal bivio del km 95 della Federale 186, 60 km di strada nella riserva. Si paga l'ingresso INAH e la quota CONANP della riserva.",
          "quando": "Aperto ogni giorno dalle 8 alle 17, ultimo ingresso alle 16 (scheda INAH). Partire all'alba.",
          "tempo": "Giornata",
          "costo": "210 MXN INAH più 215 MXN CONANP per gli stranieri (scheda INAH, novembre 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5551",
          "consiglio": "Scarpe chiuse, repellente, acqua e cibo per tutta la giornata."
        },
        {
          "nome": "Becán e Xpuhil",
          "testo": "Due siti di stile Río Bec vicino al paese di Xpujil, con torri decorative e, a Becán, un fossato intorno alla città.",
          "come": "In auto dalla Federale 186, a pochi minuti dal paese.",
          "tempo": "1-2 ore",
          "consiglio": "Buoni per il pomeriggio del giorno di arrivo."
        },
        {
          "nome": "Balam Ku",
          "testo": "Un sito piccolo lungo la Federale 186, sulla strada tra Escárcega e Xpujil.",
          "come": "In auto, come sosta lungo la strada.",
          "tempo": "1 ora"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Alba: partenza da Xpujil",
            "Mattina e primo pomeriggio: Calakmul",
            "Rientro a Xpujil prima del buio"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Balam Ku lungo la strada, Becán o Xpuhil nel pomeriggio",
            "Giorno 2: Calakmul"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Xpujil",
          "perChi": "servizi e trasporti",
          "testo": "Il paese sulla Federale 186, con alloggi semplici e qualche posto per mangiare."
        },
        {
          "nome": "Strada della riserva",
          "perChi": "chi vuole la foresta",
          "testo": "Alloggi ecologici più vicini al sito, pochi e da prenotare."
        }
      ],
      "sapori": [
        {
          "nome": "Cucina campechana",
          "testo": "Pan de cazón e pesce del Golfo si trovano a Campeche; nella zona di Calakmul la cucina è semplice, casalinga."
        }
      ],
      "attenzioni": [
        "Restare sui sentieri segnati.",
        "Niente fumo nel sito e quota extra per le videocamere professionali.",
        "Viaggiare Sicuri segnala la chikungunya in Campeche: repellente forte."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo'],
    imageAlt: "La Struttura I di Calakmul che spunta dalla foresta della riserva, vista dalla cima della Struttura II",
    immagine: '/images/messico/calakmul.webp',
    miaEsperienza: 'Ci sono arrivato da Xpujil durante il giro completo dello Yucatán: una giornata intera nella Riserva della Biosfera, lungo la strada della riserva fino alle piramidi nella foresta.',
  },
]
