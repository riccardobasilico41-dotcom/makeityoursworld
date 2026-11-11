import type { Destinazione } from '@/lib/types'

// Città-stato: le "destinazioni" qui sotto sono aree e quartieri, non città.
// Non sono stati inventati nomi di hotel o ristoranti; i centri hawker e i
// siti pubblici citati sono luoghi, non esercizi commerciali.

export const destinazioniSingapore: Destinazione[] = [
  {
    slug: 'marina-bay',
    paeseSlug: 'singapore',
    ordine: 1,
    nome: 'Marina Bay e i Gardens',
    tipologia: ['architettura', 'città', 'panorami'],
    giorniConsigliati: '1 giorno, con la sera dedicata ai Gardens',
    visitataPersonalmente: true,
    introduzione:
      'La baia costruita su terra strappata al mare, dove sta tutto quello che rende Singapore riconoscibile: l\'hotel con la nave sul tetto, i Supertree alti cinquanta metri, le serre climatizzate e il museo a forma di fiore di loto. È la città come vuole essere vista, e funziona.',
    percheAndarci:
      'Perché è uno degli esperimenti urbanistici più riusciti degli ultimi trent\'anni: un\'intera baia progettata da zero che rischiava di diventare un centro commerciale a cielo aperto. Invece regge, soprattutto dopo il tramonto.',
    cosaVedere: [
      'I Supertree Grove di Gardens by the Bay, con lo spettacolo di luci serale gratuito',
      'Le serre Flower Dome e Cloud Forest, con la grande cascata coperta',
      'Il Marina Bay Sands e la sua piattaforma panoramica sul tetto',
      'Il ponte Helix e il Merlion, la statua simbolo della città',
      'L\'ArtScience Museum, a forma di loto, sulla punta della baia',
      'Il lungobaia illuminato, che si percorre a piedi tutto attorno',
    ],
    cosaFare: [
      'Spettacolo di luci ai Supertree dopo il tramonto (vedi la scheda esperienza dedicata)',
      "Camminata completa attorno alla baia, meglio all'ora blu",
      'Salita a un rooftop bar invece della piattaforma panoramica: si paga un cocktail e si ha la stessa vista',
      'Serate al Marina Barrage, la diga con il prato sul tetto dove i singaporiani fanno volare gli aquiloni',
    ],
    doveDormire:
      'La zona è la più cara della città. Chi ci dorme lo fa per la vista; chi vuole spendere meno sta a Chinatown, Bugis o Geylang e arriva qui in metropolitana in dieci minuti, che è la scelta ragionevole.',
    doveMangiare:
      "È la parte della città dove si mangia peggio in rapporto al prezzo: i ristoranti attorno alla baia sono pensati per chi non si sposta. Il consiglio è mangiare in un centro hawker di Chinatown o di Bugis e venire qui dopo cena.",
    comeArrivare: "Da Changi si prende la metro verde fino a Expo e lì la linea blu (Downtown) fino a Bayfront o Promenade: circa 40 minuti e 2-3 SGD (circa 2 €) pagando con la carta contactless al tornello, dalle 5:30 alle 23:30 circa. Taxi e Grab impiegano 20-30 minuti e costano circa 25-45 SGD (16-30 €), più il supplemento aeroportuale fino a 8 SGD e il 50% in più dopo mezzanotte. In città le fermate Bayfront, Marina Bay, Promenade ed Esplanade servono tutta la baia.",
    comeSpostarsi:
      'Tutto a piedi, ma con un\'avvertenza: il caldo è serio e l\'ombra è poca. I passaggi sotterranei climatizzati che collegano i centri commerciali sono la vera rete pedonale della città e vale la pena usarli.',
    periodoMigliore:
      'tutto l\'anno, meglio di sera: ci sono le luci, e di giorno l\'umidità sulla baia è pesante e l\'asfalto rimanda il calore.',
    costi: "La baia, i Supertree, gli spettacoli di luci Garden Rhapsody e Spectra e il giro a piedi sono gratuiti. Le due serre costano 46 SGD per i non residenti (circa 30 €), la OCBC Skyway 14 SGD (circa 9 €), la piattaforma del Marina Bay Sands circa 35-39 SGD (23-26 €), la National Gallery 20 SGD (circa 13 €). Budget giornaliero a Singapore: circa 70-90 € con ostello e centri hawker, 150-220 € con un albergo di fascia media in centro, oltre 350 € dormendo sulla baia.",
    erroriDaEvitare: [
      'Pagare la piattaforma panoramica del Marina Bay Sands: costa quanto un cocktail al bar dello stesso edificio, che ha la stessa vista e ci si siede',
      'Andare ai Gardens a metà giornata, quando fa caldissimo e le luci non ci sono',
      'Saltare le serre pensando che siano un giardino botanico qualsiasi: la Cloud Forest, con la grande cascata coperta, è la cosa più sorprendente della zona',
      'Cenare attorno alla baia: si paga il doppio per mangiare peggio che in qualsiasi centro hawker',
    ],
    miaEsperienza:
      'Mi aspettavo un posto artificiale, e invece Marina Bay funziona. Vale la pena capire perché: la baia è chiusa da una diga che ha trasformato l\'acqua di mare in un bacino d\'acqua dolce e risolto metà del problema idrico del paese. Sapendolo, i Supertree smettono di essere alberi finti e diventano quello che sono: torri di raccolta dell\'acqua piovana e di ventilazione per le serre, con i pannelli solari in cima. Lo spettacolo di luci serale è gratuito e dura una quindicina di minuti. Ci siamo sdraiati sul prato sotto le torri insieme a centinaia di persone: è la cosa più bella della città e non costa niente. La Cloud Forest, con la cascata di trenta metri dentro una cupola di vetro climatizzata, è l\'altra sorpresa. La regola di tutta la zona: non pagare per la vista dall\'alto e ordinare un cocktail al bar dello stesso grattacielo.',
    luoghi: [
      {
        nome: "Supertree Grove di Gardens by the Bay",
        testo: "Diciotto strutture a forma di albero alte tra 25 e 50 metri, coperte di piante e dotate di pannelli solari. Servono davvero: fanno da prese d'aria e da sfiato per il raffreddamento delle serre e raccolgono l'acqua piovana. La sera si illuminano e c'è uno spettacolo di luci gratuito.",
        come: "MRT fino a Bayfront, poi un passaggio coperto che porta ai giardini. Il bosco dei Supertree si gira da soli e senza biglietto; la passerella sospesa (OCBC Skyway) si paga a parte.",
        quando: "Dopo il tramonto per lo spettacolo di luci Garden Rhapsody, ogni sera alle 19:45 e alle 20:45, circa quindici minuti; nei periodi di festa si aggiungono repliche (calendario sul sito ufficiale).",
        tempo: "1 ora e mezza",
        costo: "giardini e spettacolo gratuiti; OCBC Skyway 14 SGD per i non residenti, circa 9 € (2026)",
        url: "https://www.gardensbythebay.com.sg/",
        consiglio: "Stendersi sul prato sotto le torri, come fanno i singaporiani, e guardare lo spettacolo da sdraiati.",
        orari: "giardini all'aperto tutti i giorni dalle 5 alle 2 di notte; OCBC Skyway 9-21",
        lat: 1.28195,
        lng: 103.86391
      },
      {
        nome: "Cloud Forest e Flower Dome",
        testo: "Due serre climatizzate. Nella Cloud Forest una montagna di 42 metri coperta di felci, orchidee e bromelie ha una cascata coperta di 35 metri: si sale in ascensore e si scende a piedi lungo una passerella che gira intorno alla montagna. Il Flower Dome ricrea un clima mediterraneo fresco e secco, con un uliveto e i baobab.",
        come: "Dentro Gardens by the Bay, a pochi minuti a piedi dai Supertree. Biglietto d'ingresso per ogni serra, percorso a senso unico.",
        quando: "Aperte tutti i giorni, 9-21. Al mattino c'è meno gente; con la pioggia sono il rifugio ideale.",
        tempo: "1 ora per serra",
        url: "https://www.gardensbythebay.com.sg/",
        consiglio: "Se se ne sceglie una sola, la Cloud Forest: è la più sorprendente della zona.",
        costo: "biglietto per le due serre 46 SGD per i non residenti, circa 30 € (sito ufficiale, 2026)",
        orari: "tutti i giorni 9-21; ogni serra chiude a turno qualche giorno per manutenzione, date sul sito ufficiale",
        lat: 1.28396,
        lng: 103.8658
      },
      {
        nome: "Marina Bay Sands e il bar sul tetto",
        testo: "L'hotel con la nave di 340 metri sopra tre torri è il simbolo della città. La piattaforma panoramica sul tetto ha una vista a trecentosessanta gradi sulla baia e sul porto.",
        come: "MRT fino a Bayfront, il centro commerciale collega direttamente le torri. Per salire c'è la piattaforma a pagamento o il bar sul tetto, dove si ordina da bere.",
        quando: "Al tramonto, con la città che si accende.",
        tempo: "1 ora",
        consiglio: "Meglio un cocktail al bar sul tetto dello stesso edificio che il biglietto della piattaforma: la vista è la stessa e ci si siede.",
        costo: "piattaforma panoramica circa 35 SGD di giorno e 39 SGD dalle 17, circa 23-26 € (2026)",
        orari: "piattaforma tutti i giorni 10-22, ultimo ingresso 21:30; chiusure anticipate per eventi indicate sul sito",
        url: "https://www.marinabaysands.com/attractions/sands-skypark.html",
        lat: 1.2834,
        lng: 103.8607
      },
      {
        nome: "Helix Bridge, Merlion e lungobaia",
        testo: "Il ponte pedonale a doppia elica, ispirato al DNA (con le lettere delle quattro basi sulla struttura), collega Marina Centre a Marina South ed è il modo migliore per attraversare la baia. Il Merlion, mezzo leone e mezzo pesce, è la statua simbolo della città ed è piccolo, ma lo sfondo è quello giusto.",
        come: "A piedi dal Marina Bay Sands o da Esplanade. Il giro completo della baia si fa tutto a piedi sul lungobaia.",
        quando: "All'ora blu, quando le luci si accendono ma c'è ancora un po' di cielo.",
        tempo: "1 ora e mezza per il giro completo",
        costo: "gratuito",
        consiglio: "Fare il giro in senso orario partendo dal Merlion, così si arriva ai Gardens a luci già accese.",
        orari: "sempre accessibili",
        lat: 1.28766,
        lng: 103.86046
      },
      {
        nome: "ArtScience Museum",
        testo: "Il museo a forma di fiore di loto sulla punta della baia ospita mostre temporanee su arte, scienza e tecnologia, spesso immersive. Il programma cambia, quindi conviene controllare cosa c'è.",
        come: "A piedi dal Marina Bay Sands, di fronte alla baia.",
        quando: "Nelle ore calde del giorno, perché è al chiuso e climatizzato.",
        tempo: "1 ora e mezza",
        consiglio: "Guardare il programma prima di decidere: si paga per le mostre, non per l'edificio.",
        url: "https://www.marinabaysands.com/museum.html",
        lat: 1.28628,
        lng: 103.85929
      },
      {
        nome: "Marina Barrage",
        testo: "La diga che ha chiuso la baia e trasformato Marina Bay e il bacino di Kallang in un serbatoio d'acqua dolce. Sul tetto verde c'è un prato dove i singaporiani vanno a fare volare gli aquiloni.",
        come: "In autobus o taxi da Marina Bay o dai Gardens by the Bay. È una tappa tranquilla, lontana dai flussi.",
        quando: "Al tramonto, con la skyline di fronte.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Portare un aquilone, o semplicemente un telo e qualcosa da bere.",
        lat: 1.2805,
        lng: 103.871
      },
      {
        nome: "Spectra, lo spettacolo sull'acqua del Marina Bay Sands",
        testo: "Un quarto d'ora di getti d'acqua, laser e proiezioni con la musica, davanti al Marina Bay Sands. È l'altro spettacolo serale gratuito della baia, diverso da quello dei Supertree: qui il palcoscenico è l'acqua.",
        come: "Si guarda dalla Event Plaza, la gradinata sul lungobaia davanti ai negozi del Marina Bay Sands; non si prenota.",
        quando: "Si incastra con il Garden Rhapsody: Supertree alle 19:45 e poi Spectra alle 21.",
        tempo: "15 minuti",
        costo: "gratuito",
        orari: "tutti i giorni alle 20 e alle 21, più una replica alle 22 il venerdì e il sabato",
        url: "https://www.marinabaysands.com/attractions/spectra.html",
        consiglio: "Arrivare dieci minuti prima per sedersi sui gradini più bassi, vicino all'acqua.",
        lat: 1.284,
        lng: 103.8588
      },
      {
        nome: "National Gallery Singapore",
        testo: "Il museo d'arte moderna occupa due palazzi coloniali uniti da una copertura di vetro: la vecchia Corte Suprema e il municipio dove nel 1945 i giapponesi firmarono la resa. Raccoglie la più grande collezione pubblica di arte moderna di Singapore e del Sud-est asiatico.",
        come: "MRT fino a City Hall, poi cinque minuti a piedi attraverso il Padang. Si visita da soli; ci sono visite guidate gratuite in inglese.",
        quando: "Nelle ore calde, tra le 12 e le 16.",
        tempo: "2-3 ore",
        costo: "ingresso generale 20 SGD per i non residenti, circa 13 € (sito ufficiale, 2026)",
        orari: "tutti i giorni 10-19, ultimo ingresso 18:30",
        url: "https://www.nationalgallery.sg/",
        consiglio: "La galleria del Sud-est asiatico è chiusa per lavori fino alla fine del 2027: chi viene soprattutto per quella controlli prima cosa è esposto.",
        lat: 1.2904,
        lng: 103.8515
      },
      {
        nome: "Asian Civilisations Museum",
        testo: "Sul fiume, in un palazzo coloniale dell'Ottocento, racconta i commerci e le religioni dell'Asia attraverso ceramiche, tessuti e statue. Il pezzo forte è il carico del relitto di Belitung, una nave araba del IX secolo affondata con migliaia di ciotole cinesi.",
        come: "MRT fino a Raffles Place, poi si attraversa il Cavenagh Bridge a piedi.",
        quando: "Il venerdì sera, quando resta aperto fino alle 21 ed è quasi vuoto.",
        tempo: "1 ora e mezza-2 ore",
        orari: "tutti i giorni 10-19, il venerdì fino alle 21",
        url: "https://www.acm.nhb.gov.sg/",
        consiglio: "Cominciare dalla sala del relitto al piano terra: spiega da sola perché Singapore è nata dove è nata.",
        lat: 1.28749,
        lng: 103.85138
      },
      {
        nome: "Esplanade - Theatres on the Bay",
        testo: "Il teatro con le due cupole a scaglie, che a Singapore chiamano «il durian» per la somiglianza con il frutto. Le punte sono frangisole. Sul lungobaia c'è un palco all'aperto con concerti gratuiti, e dalla terrazza sul tetto si vede tutta la baia.",
        come: "MRT fino a Esplanade, o a piedi dal Merlion attraverso il ponte di Esplanade.",
        quando: "La sera, quando c'è musica all'Outdoor Theatre (programma sul sito).",
        tempo: "45 minuti",
        costo: "edificio e terrazza ad accesso libero; spettacoli in sala a pagamento",
        url: "https://www.esplanade.com/",
        lat: 1.28977,
        lng: 103.85549
      },
      {
        nome: "Singapore Flyer",
        testo: "La ruota panoramica alta 165 metri, aperta nel 2008: un giro dura circa mezz'ora, in cabine climatizzate da una ventina di persone. Dall'alto si vedono la baia, i Gardens e le navi in rada nello stretto.",
        come: "MRT fino a Promenade, poi qualche minuto a piedi.",
        quando: "Al tramonto, oppure in una giornata limpida dopo la pioggia.",
        tempo: "1 ora con l'attesa",
        orari: "tutti i giorni 10-22",
        url: "https://www.singaporeflyer.com/",
        consiglio: "È un'alternativa alla piattaforma del Marina Bay Sands, non un'aggiunta: basta una delle due.",
        lat: 1.2893,
        lng: 103.8631
      },
      {
        nome: "Lau Pa Sat",
        testo: "Un mercato vittoriano in ghisa del 1894, ottagonale, in mezzo ai grattacieli del quartiere finanziario, oggi centro hawker. La sera la strada accanto, Boon Tat Street, chiude al traffico e si riempie di griglie di satay.",
        come: "MRT fino a Downtown o Raffles Place, cinque minuti a piedi. Si ordina ai banchi e si paga subito.",
        quando: "La sera, per i satay all'aperto; a pranzo è pieno di impiegati.",
        tempo: "1 ora",
        costo: "un piatto in genere 5-8 SGD, circa 3-5 € (2026)",
        consiglio: "È il centro hawker più vicino alla baia: il posto giusto per cenare prima degli spettacoli.",
        lat: 1.28069,
        lng: 103.85039
      },
      {
        nome: "Singapore River, Boat Quay e Clarke Quay",
        testo: "Il fiume dove è cominciato il porto: le shophouse dei mercanti di Boat Quay, i magazzini di Clarke Quay trasformati in bar e il Cavenagh Bridge del 1869. È il tratto che collega Marina Bay al centro storico.",
        come: "A piedi dal Merlion lungo la riva, oppure in bumboat, le barche fluviali che fanno il giro della baia.",
        quando: "La sera, quando i locali si accendono e fa più fresco.",
        tempo: "1-2 ore",
        costo: "passeggiata gratuita; crociera in bumboat a pagamento",
        consiglio: "Bere a Boat Quay costa molto: meglio una birra in un centro hawker e poi la passeggiata.",
        lat: 1.28642,
        lng: 103.84918
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina presto: giro di Helix Bridge, Merlion e lungobaia",
          "Tarda mattina: Cloud Forest e Flower Dome, al fresco",
          "Pranzo in un centro hawker fuori dalla zona, a Chinatown o a Bugis",
          "Pomeriggio: ArtScience Museum o riposo in albergo, nelle ore di caldo",
          "Tramonto: cocktail al bar sul tetto del Marina Bay Sands",
          "Sera: Supertree Grove con lo spettacolo di luci, sdraiati sul prato"
        ]
      },
      {
        titolo: "Mezza giornata",
        tappe: [
          "Pomeriggio inoltrato: lungobaia e Helix Bridge",
          "Tramonto al Marina Barrage",
          "Sera: spettacolo di luci ai Supertree"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come il programma di un giorno, con la Cloud Forest al mattino e i Supertree la sera",
          "Giorno 2: National Gallery all'apertura e Asian Civilisations Museum",
          "Pranzo a Lau Pa Sat",
          "Pomeriggio: lungofiume di Boat Quay e Clarke Quay, poi Esplanade",
          "Tramonto al Marina Barrage o sul Singapore Flyer",
          "Sera: Spectra alle 21 davanti al Marina Bay Sands"
        ]
      }
    ],
    zone: [
      {
        nome: "Marina Bay",
        perChi: "chi vuole la vista e non guarda al prezzo",
        testo: "Alberghi di alta gamma attorno alla baia. La vista è eccezionale, ma i prezzi sono i più alti della città e i ristoranti sono pensati per chi non si sposta.",
        fascia: "300-650 €"
      },
      {
        nome: "Chinatown e Tanjong Pagar",
        perChi: "chi vuole risparmiare restando in centro",
        testo: "Si raggiunge la baia in pochi minuti di metropolitana. Vicinissimi a centri hawker, bar e ristoranti, e molto più economici.",
        fascia: "120-220 €"
      },
      {
        nome: "Bugis e Kampong Glam",
        perChi: "chi cerca vita serale e buon rapporto qualità-prezzo",
        testo: "Quartiere vivace, con molte opzioni di alloggio e il collegamento diretto con la baia. Un po' rumoroso nei fine settimana.",
        fascia: "110-200 €"
      },
      {
        nome: "Clarke Quay e Robertson Quay",
        perChi: "chi vuole stare sul fiume e andare alla baia a piedi",
        testo: "Alberghi lungo il Singapore River, a venti minuti di passeggiata dal Merlion. Robertson Quay è più tranquilla, Clarke Quay è la zona dei locali e la sera è rumorosa.",
        fascia: "150-280 €"
      }
    ],
    sapori: [
      {
        nome: "Satay",
        testo: "Spiedini di carne marinata cotti alla brace e serviti con salsa di arachidi. Si trovano in quasi tutti i centri hawker della città."
      },
      {
        nome: "Chilli crab",
        testo: "Granchio in salsa densa di peperoncino e uovo, da mangiare con le mani e con il pane fritto per intingere. È il piatto simbolo della città e si trova nei ristoranti di pesce, non nei centri hawker più economici."
      },
      {
        nome: "Kaya toast con uova e caffè",
        testo: "La colazione tradizionale: pane tostato con marmellata di cocco e uova poco cotte da mescolare con salsa di soia. Si trova nei caffè storici, anche vicino alla baia."
      },
      {
        nome: "Chicken rice",
        testo: "Pollo bollito con riso cotto nel brodo e salsa di zenzero. Il piatto nazionale non ufficiale; migliore nei centri hawker che nei locali attorno alla baia."
      }
    ],
    attenzioni: [
      "Il caldo è serio tra le undici e le tre. Meglio muoversi la mattina e la sera, e usare i passaggi coperti e climatizzati tra i centri commerciali.",
      "Le regole sono severe e vengono applicate: multe per chi getta rifiuti, fuma fuori dalle aree consentite o attraversa fuori dalle strisce. Le sigarette elettroniche sono vietate.",
      "Il Merlion e i punti più fotografati sono affollati: tenere il portafoglio in tasca davanti, anche se i furti sono rari.",
      "Chi cena attorno alla baia paga molto di più per un piatto mediocre: con pochi minuti di metropolitana si mangia meglio e spendendo molto meno."
    ],
    gite: [
      {
        nome: "Sentosa",
        distanza: "20 minuti in MRT e monorotaia",
        come: "MRT fino a HarbourFront, poi la monorotaia Sentosa Express da VivoCity, oppure a piedi sulla Sentosa Boardwalk.",
        testo: "L'isola dei divertimenti di Singapore, con spiagge artificiali, Universal Studios e il punto più a sud dell'Asia continentale raggiungibile a piedi, al ponte di Palawan Beach. Ha una scheda propria sul sito."
      },
      {
        nome: "Pulau Ubin",
        distanza: "circa 1 ora e mezza tra MRT, autobus e barca",
        come: "MRT fino a Tanah Merah, autobus 2 fino al Changi Point Ferry Terminal, poi un bumboat di 10 minuti che parte quando è pieno.",
        testo: "L'ultimo villaggio di campagna rimasto a Singapore: case di legno, strade sterrate e mangrovie. Si gira in bicicletta, noleggiata al molo, fino alla zona umida di Chek Jawa."
      },
      {
        nome: "Bintan",
        distanza: "circa 1 ora di traghetto",
        come: "Traghetto dal Tanah Merah Ferry Terminal; è Indonesia, quindi servono passaporto e le regole d'ingresso indonesiane.",
        testo: "Un'isola indonesiana con resort e spiagge, che molti abitanti di Singapore usano per il fine settimana. Ha senso solo con una notte, non in giornata stretta."
      }
    ],
    faq: [
      {
        domanda: "Quanto tempo serve per Marina Bay e i Gardens by the Bay?",
        risposta: "Una giornata intera basta, a patto di tenere la sera per i Supertree. Chi aggiunge i musei del Civic District e il lungofiume ne usa due."
      },
      {
        domanda: "I Gardens by the Bay sono gratuiti?",
        risposta: "Sì per i giardini all'aperto, il bosco dei Supertree e lo spettacolo di luci. Si pagano le due serre (46 SGD per i non residenti) e la passerella OCBC Skyway (14 SGD)."
      },
      {
        domanda: "A che ora sono gli spettacoli di luci a Marina Bay?",
        risposta: "Il Garden Rhapsody ai Supertree va alle 19:45 e alle 20:45. Spectra, sull'acqua davanti al Marina Bay Sands, va alle 20 e alle 21, più le 22 il venerdì e il sabato: si vedono tutti e due nella stessa sera."
      },
      {
        domanda: "Conviene salire sulla piattaforma del Marina Bay Sands?",
        risposta: "Costa circa 35-39 SGD. Il bar sul tetto dello stesso edificio dà la stessa vista al prezzo di un cocktail, e ci si siede."
      },
      {
        domanda: "Dove dormire per visitare Marina Bay senza spendere troppo?",
        risposta: "A Chinatown, Tanjong Pagar o Bugis, a pochi minuti di metro: una doppia costa circa la metà che sulla baia."
      },
      {
        domanda: "Si può vedere Marina Bay durante uno scalo a Changi?",
        risposta: "Con almeno sei-sette ore sì: la metro arriva a Bayfront in circa 40 minuti. Va compilata prima la SG Arrival Card, obbligatoria per entrare a Singapore."
      }
    ],
    esperienzeSlugs: ['gardens-by-the-bay'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Le tre torri del Marina Bay Sands affacciate sull\'acqua della baia, Singapore',
    immagine: '/images/singapore/marina-bay.jpg',
  },
  {
    slug: 'quartieri-etnici',
    paeseSlug: 'singapore',
    ordine: 2,
    nome: 'Chinatown, Little India e Kampong Glam',
    tipologia: ['cultura', 'gastronomia', 'città'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'I tre quartieri storici delle comunità che hanno fatto Singapore, ognuno con il proprio tempio o moschea, la propria cucina e il proprio ritmo. Qui la città smette di sembrare un progetto.',
    percheAndarci:
      'Perché sono la parte che resta quando si toglie lo skyline: shophouse a due piani, botteghe, templi in funzione, e i centri hawker dove si mangia per tre euro una cucina che altrove sarebbe da ristorante.',
    cosaVedere: [
      'Il Buddha Tooth Relic Temple e il Sri Mariamman, il tempio indù più antico della città, entrambi a Chinatown',
      'Il Maxwell Food Centre e il Chinatown Complex, i due centri hawker storici',
      'Il tempio Sri Veeramakaliamman e le vie di tessuti e spezie di Little India',
      'La Tekka Centre, il mercato coperto di Little India',
      'La moschea Sultan a Kampong Glam e le case colorate di Haji Lane',
      'Il quartiere di Tiong Bahru, con l\'architettura razionalista degli anni Trenta e il suo mercato',
    ],
    cosaFare: [
      'Pranzo o cena in un centro hawker, il modo giusto di mangiare in questa città (vedi la scheda esperienza dedicata)',
      'Camminare i tre quartieri in sequenza, che sono a poche fermate di metropolitana uno dall\'altro',
      'Colazione con kaya toast e uovo alla coque, che è il rito mattutino locale',
      'Una sera a Haji Lane, tra murales e locali piccoli, che è la zona meno istituzionale della città',
    ],
    doveDormire:
      'Chinatown e Bugis sono le zone migliori per rapporto qualità-prezzo: centrali, servite dalla metropolitana e molto più economiche di Marina Bay. Little India ha i prezzi più bassi in assoluto.',
    doveMangiare:
      'Qui si mangia, e si mangia in un centro hawker. Il pollo di Hainan con il riso cotto nel brodo è il piatto nazionale; poi il laksa di Katong con il latte di cocco, il char kway teow, il chilli crab (che costa molto di più e si mangia altrove, sul mare), il roti prata e il teh tarik a Little India, il nasi padang a Kampong Glam. La regola: la coda più lunga indica il banco migliore, e ci si mette in fila.',
    comeArrivare: "Da Changi si prende la metro verde fino a Expo e lì la linea blu Downtown, che ferma a Bugis, Little India, Chinatown e Telok Ayer: circa 45-50 minuti e 2-3 SGD (circa 2 €) pagando con la carta contactless al tornello. Taxi e Grab costano circa 25-45 SGD (16-30 €), più il supplemento aeroportuale. Chinatown ha anche la fermata Maxwell, Kampong Glam si raggiunge da Bugis, Tiong Bahru ha la sua fermata sulla linea verde: tra un quartiere e l'altro bastano due o tre fermate.",
    comeSpostarsi: 'A piedi dentro ogni quartiere, in MRT tra l\'uno e l\'altro. Sono tutti nel raggio di tre chilometri.',
    periodoMigliore:
      'tutto l\'anno. I momenti speciali sono il Capodanno cinese a Chinatown, il Deepavali a Little India e l\'Hari Raya a Kampong Glam, quando i rispettivi quartieri si illuminano. Nel Capodanno cinese, però, molti banchi hawker a gestione familiare chiudono per giorni.',
    costi: "I quartieri si girano a piedi e templi, moschea e centri hawker non hanno biglietto: un piatto costa in genere 4-8 SGD (circa 3-5 €). Si pagano solo i musei, come il Malay Heritage Centre, 10 SGD per i turisti (circa 7 €). Budget giornaliero a Singapore: circa 70-90 € con ostello e centri hawker, 150-220 € con un albergo di fascia media in centro, oltre 350 € in un hotel di lusso.",
    erroriDaEvitare: [
      'Mangiare nei ristoranti con aria condizionata e menu illustrato quando a cinquanta metri c\'è un centro hawker: si paga il triplo per un piatto peggiore',
      'Andare a Chinatown solo per la via dei souvenir, che è la parte meno interessante del quartiere',
      'Dimenticare le regole nei templi: spalle e ginocchia coperte, scarpe fuori dove indicato',
      'Girare a mezzogiorno: tra le undici e le tre il caldo è pesante, ed è anche l\'ora di punta ai centri hawker',
    ],
    miaEsperienza:
      'Questa è la Singapore che fa cambiare idea a chi la crede solo una città di grattacieli e regole. I centri hawker sono l\'invenzione civile più riuscita del paese: negli anni Settanta il governo tolse i venditori ambulanti dalla strada per ragioni igieniche. Invece di eliminarli li mise tutti sotto tettoie con acqua corrente e licenze, e oggi si mangia una cucina straordinaria per tre euro, seduti a tavoli condivisi, in un posto che chiunque può permettersi. Per orientarsi il sistema è banale e funziona: abbiamo sempre guardato quale banco aveva la coda e ci siamo messi in fila. Camminando tra Chinatown, Little India e Kampong Glam nello stesso pomeriggio, mi ha colpito quanto poco si somiglino: cambiano gli odori, la musica, la lingua che si sente per strada, e sono a due fermate di metropolitana di distanza. Il dettaglio locale da conoscere: sui tavoli si trovano pacchetti di fazzoletti appoggiati da soli. È il "chope", il modo di prenotare il posto, e non si sposta.',
    luoghi: [
      {
        nome: "Buddha Tooth Relic Temple",
        testo: "Tempio buddista a Chinatown, inaugurato nel 2007 per custodire una reliquia attribuita al Buddha, in uno stile che unisce l'architettura della dinastia Tang al mandala buddista. Dentro è sontuoso, con dorature ovunque; la reliquia è in uno stupa al quarto piano.",
        come: "MRT fino a Chinatown. Si entra a spalle e ginocchia coperte. Alcune sale sono riservate.",
        quando: "Al mattino, quando il tempio è più tranquillo.",
        tempo: "45 minuti",
        consiglio: "Salire al tetto, dove c'è una grande ruota di preghiera in stile tibetano e la pagoda dei Diecimila Buddha.",
        url: "https://www.buddhatoothrelictemple.org.sg/",
        lat: 1.28151,
        lng: 103.84419,
        costo: "gratuito",
        orari: "tutti i giorni 9-17",
      },
      {
        nome: "Sri Mariamman Temple",
        testo: "Il tempio indù più antico della città, fondato nel 1827 e dedicato alla dea Mariamman. La torre d'ingresso, del 1925, ha sei livelli di figure scolpite e dipinte a colori vivaci.",
        come: "A pochi passi dalla fermata di Chinatown. Scarpe fuori dove indicato.",
        quando: "Al mattino, o durante le feste indù quando il tempio è pieno di fedeli.",
        tempo: "30 minuti",
        consiglio: "Controllare in anticipo se c'è una cerimonia: il tempio cambia volto.",
        url: "https://heb.org.sg/smt/",
        lat: 1.28261,
        lng: 103.84528,
        costo: "gratuito",
        orari: "tutti i giorni 7-12 e di nuovo la sera; chiuso nelle ore centrali",
      },
      {
        nome: "Maxwell Food Centre e Chinatown Complex",
        testo: "Due dei centri hawker più frequentati del quartiere, con decine di banchi sotto una tettoia. È il modo più rapido di capire come si mangia a Singapore.",
        come: "A piedi da Chinatown o dalla fermata di Maxwell. Si sceglie il banco, si ordina, si cerca un tavolo condiviso e poi si ritira il piatto.",
        quando: "Pranzo e cena sono le ore di punta, con code. A metà mattina o nel tardo pomeriggio si mangia con più calma.",
        tempo: "1 ora",
        consiglio: "Mettersi in fila dove la fila è più lunga: è il metodo più affidabile.",
        lat: 1.28033,
        lng: 103.84475,
        costo: "un piatto in genere 4-8 SGD, circa 3-5 € (2026)",
      },
      {
        nome: "Sri Veeramakaliamman Temple e le vie di Little India",
        testo: "Il tempio dedicato alla dea Kali, in una via di negozi di sari, ghirlande di fiori, spezie e oro. Little India è il quartiere con più colori e profumi della città.",
        come: "MRT fino a Little India. A piedi tra Serangoon Road, Campbell Lane e le vie laterali. Scarpe fuori nel tempio.",
        quando: "Il tardo pomeriggio e la sera, quando le botteghe sono aperte e il quartiere è più vivo. Durante il Deepavali è illuminato a festa.",
        tempo: "2 ore",
        consiglio: "Cercare il Tekka Centre, il mercato coperto con il centro hawker al piano terra, per un pasto indiano economico.",
        url: "https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/little-india/sri-veeramakaliamman-temple/",
        lat: 1.30795,
        lng: 103.8524,
        costo: "gratuito",
        orari: "tutti i giorni 5:30-21",
      },
      {
        nome: "Sultan Mosque e Haji Lane",
        testo: "La grande moschea dalle cupole dorate è il centro di Kampong Glam, il quartiere malese-arabo. Le vie attorno, Arab Street e Haji Lane, hanno tessuti, profumi, caffè e murales.",
        come: "MRT fino a Bugis, poi pochi minuti a piedi. La moschea si visita negli orari per i visitatori, mai durante la preghiera del venerdì; serve un abbigliamento coperto e all'ingresso prestano delle tuniche.",
        quando: "Al mattino per la moschea; il tardo pomeriggio per le vie.",
        tempo: "1 ora e mezza",
        consiglio: "Controllare gli orari di preghiera prima di salire, perché la visita si chiude durante la preghiera.",
        url: "https://sultanmosque.sg/visitors-info",
        lat: 1.30222,
        lng: 103.859,
        costo: "gratuito",
        orari: "visite da sabato a giovedì 10-12 e 14-16; il venerdì chiusa ai visitatori",
      },
      {
        nome: "Tiong Bahru",
        testo: "Il quartiere popolare più vecchio della città, costruito dal Singapore Improvement Trust tra la fine degli anni Venti e gli anni Trenta, con palazzi Art Déco dalle linee arrotondate, caffè indipendenti e il mercato con il centro hawker.",
        come: "MRT fino a Tiong Bahru e a piedi. Il quartiere è piccolo e si gira in un'ora.",
        quando: "Al mattino, per il mercato e la colazione.",
        tempo: "1 ora",
        consiglio: "Mangiare al centro hawker del mercato al piano superiore, dove i banchi sono molto frequentati dai residenti.",
        lat: 1.28479,
        lng: 103.83255,
      },
      {
        nome: "Thian Hock Keng Temple",
        testo: "Il più importante tempio hokkien della città, dedicato a Mazu, la dea protettrice dei naviganti: i primi immigrati cinesi venivano qui a ringraziare per la traversata. Fu ricostruito tra il 1839 e il 1842 senza usare chiodi, con travi intagliate a draghi e fenici, ed è monumento nazionale dal 1973.",
        come: "MRT fino a Telok Ayer, poi due minuti a piedi su Telok Ayer Street, che un tempo correva lungo la riva del mare. Si entra liberamente, a spalle coperte.",
        quando: "Al mattino, quando arrivano i fedeli con gli incensi.",
        tempo: "30 minuti",
        costo: "gratuito",
        orari: "tutti i giorni 7:30-17:30",
        consiglio: "Proseguire su Telok Ayer Street: nello stesso tratto ci sono la moschea Al-Abrar e il Nagore Dargah, costruiti dai musulmani arrivati dall'India del Sud.",
        lat: 1.281,
        lng: 103.8475,
      },
      {
        nome: "Chinatown Heritage Centre",
        testo: "Tre shophouse di Pagoda Street ricostruite com'erano a metà Novecento, con le stanze minuscole in cui dormivano intere famiglie e i lavoratori arrivati dalla Cina. Spiega il quartiere meglio di qualsiasi passeggiata.",
        come: "Uscita A della fermata Chinatown, in Pagoda Street. Percorso libero su più piani.",
        quando: "Nelle ore calde, prima di girare il quartiere.",
        tempo: "1 ora-1 ora e mezza",
        orari: "tutti i giorni 10-20, ultimo ingresso 19:15; chiusure per manutenzione indicate sul sito",
        consiglio: "Vederlo prima del Buddha Tooth Relic Temple e delle vie dei souvenir: dopo si guardano le facciate con altri occhi.",
        url: "https://www.chinatownheritagecentre.com.sg/",
        lat: 1.2835,
        lng: 103.84433,
      },
      {
        nome: "Ann Siang Hill e Club Street",
        testo: "Una piccola collina dietro Chinatown con shophouse restaurate, sedi di vecchie associazioni di clan e una scalinata che sale a un giardino. La sera Club Street e Ann Siang Road diventano una delle zone di bar e ristoranti più vive del centro.",
        come: "A piedi dalla fermata Maxwell o Telok Ayer, cinque minuti in salita.",
        quando: "Al tramonto, per un aperitivo prima di cena.",
        tempo: "45 minuti",
        costo: "passeggiata gratuita",
        orari: "sempre accessibili",
        lat: 1.28079,
        lng: 103.84644,
      },
      {
        nome: "Tekka Centre",
        testo: "Il mercato coperto di Little India: al piano terra un centro hawker con cucina indiana del Nord e del Sud, malese e cinese, accanto ai banchi di carne, pesce e verdura; al piano superiore sarti e negozi di sari. È il posto più vero del quartiere per mangiare.",
        come: "Accanto alla fermata Little India. Si ordina ai banchi e si paga subito.",
        quando: "Al mattino per il mercato, a pranzo per il biryani.",
        tempo: "1 ora",
        costo: "un piatto in genere 4-8 SGD, circa 3-5 € (2026)",
        consiglio: "I banchi di pesce e carne si vedono al mattino presto: a metà giornata il mercato è già quasi vuoto.",
        lat: 1.30619,
        lng: 103.85061,
      },
      {
        nome: "Indian Heritage Centre",
        testo: "Il museo della comunità indiana di Singapore, in un edificio moderno con la facciata di vetro che la sera si illumina come una lanterna. Racconta due secoli di migrazioni dal subcontinente con gioielli, tessuti e una porta di casa del Chettinad scolpita nel legno.",
        come: "A pochi passi dalla fermata Little India, in Campbell Lane.",
        quando: "Nelle ore calde del pomeriggio.",
        tempo: "1 ora e mezza",
        orari: "da martedì a domenica 10-18, ultimo ingresso 17:30; chiuso il lunedì",
        url: "https://www.indianheritage.gov.sg/",
        lat: 1.30562,
        lng: 103.85232,
      },
      {
        nome: "Sri Srinivasa Perumal Temple",
        testo: "Uno dei templi indù più antichi della città, dedicato a Vishnu, con una grande torre d'ingresso coperta di statue colorate. Da qui parte ogni anno la processione del Thaipusam, quando i devoti portano i kavadi fino al tempio di Tank Road.",
        come: "In fondo a Serangoon Road, a pochi minuti dalla fermata Farrer Park. Scarpe fuori.",
        quando: "Al mattino presto o la sera, durante le funzioni.",
        tempo: "30 minuti",
        costo: "gratuito",
        orari: "al mattino presto e la sera; chiuso nelle ore centrali della giornata",
        url: "https://heb.org.sg/sspt/",
        lat: 1.31349,
        lng: 103.85602,
      },
      {
        nome: "Sakya Muni Buddha Gaya Temple",
        testo: "Il «tempio delle mille luci», fondato da un monaco thailandese, custodisce un Buddha seduto alto una quindicina di metri, circondato da lampadine. Di fronte, sull'altro lato della strada, c'è il Leong San See, un tempio cinese più antico e raccolto.",
        come: "Su Race Course Road, a cinque minuti a piedi dalla fermata Farrer Park.",
        quando: "Insieme al tempio di Perumal, che è a due passi.",
        tempo: "30 minuti",
        costo: "gratuito",
        lat: 1.31482,
        lng: 103.8569,
      },
      {
        nome: "Malay Heritage Centre",
        testo: "Il museo della cultura malese occupa l'Istana Kampong Gelam, il palazzo del sultano costruito attorno al 1840 accanto alla Sultan Mosque. Ha riaperto nell'aprile 2026 dopo un lungo restauro, con gallerie rinnovate sulla storia del quartiere e del mondo malese.",
        come: "MRT fino a Bugis, dieci minuti a piedi: è in Sultan Gate, dietro la moschea.",
        quando: "Al mattino, prima o dopo la visita della moschea.",
        tempo: "1 ora e mezza",
        costo: "10 SGD per i turisti, circa 7 € (2026)",
        orari: "gallerie da martedì a domenica 10-18, ultimo ingresso 17:30; giardino 8-21; chiuso il lunedì",
        url: "https://www.malayheritage.gov.sg/",
        lat: 1.30287,
        lng: 103.85983,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Buddha Tooth Relic Temple e Sri Mariamman a Chinatown",
          "Pranzo al Maxwell Food Centre",
          "Primo pomeriggio: pausa climatizzata o Tiong Bahru",
          "Tardo pomeriggio: Little India, con il tempio e le vie dei fiori",
          "Sera: cena indiana al Tekka Centre o nelle vie attorno"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Chinatown, Maxwell Food Centre, Tiong Bahru e Little India alla sera",
          "Giorno 2: mattina alla Sultan Mosque, Arab Street e Haji Lane; pranzo a Bugis; pomeriggio libero",
          "Sera: cena in un altro centro hawker a scelta"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Chinatown Heritage Centre all'apertura, Buddha Tooth Relic Temple e Sri Mariamman",
          "Pranzo al Maxwell Food Centre, poi Thian Hock Keng su Telok Ayer Street",
          "Sera: aperitivo tra Ann Siang Hill e Club Street",
          "Giorno 2: Tekka Centre al mattino, Indian Heritage Centre nelle ore calde",
          "Tardo pomeriggio: Sri Veeramakaliamman, Sri Srinivasa Perumal e il tempio delle mille luci; cena su foglia di banana",
          "Giorno 3: Sultan Mosque e Malay Heritage Centre al mattino, Haji Lane e Arab Street",
          "Pomeriggio: Tiong Bahru o una gita a Katong per la cucina peranakan"
        ]
      },
    ],
    zone: [
      {
        nome: "Chinatown e Tanjong Pagar",
        perChi: "chi vuole stare vicino ai centri hawker e al centro",
        testo: "Ostelli e alberghi di fascia media, molti bar e ristoranti. Un po' di vita notturna, ma la sera è ancora gestibile.",
        fascia: "120-220 €",
      },
      {
        nome: "Little India e Farrer Park",
        perChi: "chi vuole risparmiare e mangiare indiano",
        testo: "Alloggi tra i più economici della città, con ottimo cibo vicino. Le vie sono animate e il rumore non manca.",
        fascia: "80-150 €",
      },
      {
        nome: "Kampong Glam e Bugis",
        perChi: "chi vuole locali e comodità",
        testo: "Molta scelta di alberghi e ostelli, collegamento diretto con la baia. Il fine settimana la zona è affollata.",
        fascia: "110-200 €",
      },
    ],
    sapori: [
      {
        nome: "Chicken rice",
        testo: "Pollo bollito con riso al brodo di pollo e salsa di zenzero e peperoncino. Si mangia in qualsiasi centro hawker; Maxwell Food Centre è famoso per questo."
      },
      {
        nome: "Laksa",
        testo: "Noodles di riso in brodo di cocco speziato con gamberi e vongole. Si trova nei banchi della cucina peranakan e malese, anche a Kampong Glam."
      },
      {
        nome: "Roti prata",
        testo: "Frittella indiana piatta, croccante fuori e morbida dentro, da intingere nel curry. Si trova a Little India e nei ristoranti di cucina indiana del Sud."
      },
      {
        nome: "Biryani e banana leaf",
        testo: "A Little India il pranzo tradizionale su una foglia di banana, con riso, curry vegetali e carne. Si mangia con la mano destra."
      }
    ],
    attenzioni: [
      "Spalle e ginocchia coperte nei templi e nella moschea, scarpe fuori dove indicato. Alcune sale sono vietate ai non fedeli.",
      "I banchi più famosi hanno code molto lunghe a pranzo: andare presto o fuori orario. Molti chiudono quando finiscono gli ingredienti.",
      "Non buttare rifiuti per strada e non fumare fuori dalle aree consentite: le multe ci sono e sono alte.",
      "Durante il Capodanno cinese molti banchi a gestione familiare chiudono per giorni: se si viaggia in quel periodo, controllare in anticipo."
    ],
    gite: [
      {
        nome: "Katong e Joo Chiat",
        distanza: "circa 30 minuti in MRT",
        come: "Linea Thomson-East Coast fino a Marine Parade o Katong Park, oppure autobus da Bugis.",
        testo: "Il quartiere della comunità peranakan, nata dai mercanti cinesi sposati con donne malesi: shophouse color pastello con le piastrelle decorate su Koon Seng Road, botteghe di dolci kueh e il laksa di Katong, con i noodles tagliati corti da mangiare con il cucchiaio.",
      },
      {
        nome: "Geylang Serai",
        distanza: "15 minuti in MRT da Bugis",
        come: "Linea verde fino a Paya Lebar, poi cinque minuti a piedi.",
        testo: "Il cuore della comunità malese, con il Geylang Serai Market e il suo centro hawker di cucina malese al piano superiore. Nel mese di Ramadan le strade attorno si riempiono del grande bazar serale.",
      },
      {
        nome: "Haw Par Villa",
        distanza: "circa 30 minuti in MRT",
        come: "Linea Circle fino alla fermata Haw Par Villa, davanti all'ingresso.",
        testo: "Un parco di statue in cemento costruito negli anni Trenta dai fratelli del Tiger Balm, con scene della mitologia cinese e i Dieci Tribunali dell'Inferno. Kitsch e inquietante insieme, è uno dei posti più strani della città.",
      }
    ],
    faq: [
      {
        domanda: "Quanto tempo serve per Chinatown, Little India e Kampong Glam?",
        risposta: "Un giorno basta per vederli in sequenza, la mattina a Chinatown e il pomeriggio tra Little India e Kampong Glam. Con due o tre giorni si aggiungono i musei, Tiong Bahru e un centro hawker diverso ogni sera.",
      },
      {
        domanda: "Si paga per entrare nei templi e nella Sultan Mosque?",
        risposta: "No, l'ingresso è libero ovunque. Servono spalle e ginocchia coperte; nei templi indù e nella moschea si tolgono le scarpe, e la Sultan Mosque il venerdì è chiusa ai visitatori.",
      },
      {
        domanda: "Quanto costa mangiare in un centro hawker?",
        risposta: "Un piatto costa in genere 4-8 SGD, circa 3-5 €. Si ordina e si paga al banco; molti accettano la carta, ma conviene avere qualche dollaro in contanti.",
      },
      {
        domanda: "In quale quartiere conviene dormire?",
        risposta: "Chinatown e Bugis per comodità e collegamenti, Little India per spendere meno. Una doppia costa circa 80-150 € a Little India e 110-220 € a Chinatown o Bugis.",
      },
      {
        domanda: "Quando ci sono le feste dei quartieri?",
        risposta: "Il Capodanno cinese cade tra fine gennaio e febbraio, il Deepavali tra ottobre e novembre, l'Hari Raya Puasa alla fine del Ramadan, che si sposta ogni anno. Nelle settimane prima i quartieri si illuminano; nei giorni del Capodanno molti banchi familiari chiudono.",
      },
      {
        domanda: "Che cosa significa il pacchetto di fazzoletti sul tavolo?",
        risposta: "È il «chope»: il posto è tenuto da qualcuno che sta facendo la fila a un banco. Non si sposta, si cerca un altro tavolo.",
      }
    ],
    esperienzeSlugs: ['hawker-centre'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Trengganu Street a Chinatown, con le shophouse e le lanterne rosse, Singapore',
    immagine: '/images/singapore/quartieri-etnici.jpg',
  },
  {
    slug: 'natura-singapore',
    paeseSlug: 'singapore',
    ordine: 3,
    nome: 'La Singapore verde',
    tipologia: ['natura', 'parchi', 'fauna selvatica'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'La parte che quasi nessuno mette in programma: un giardino botanico patrimonio UNESCO, una riserva di foresta primaria in mezzo all\'isola, sentieri sopraelevati tra le chiome e un\'isola senza auto dove si gira in bicicletta tra le case di legno.',
    percheAndarci:
      'Perché smonta l\'idea che Singapore sia solo cemento: quasi la metà del territorio è coperta da verde, il piano urbanistico si chiama proprio "città dentro un giardino", e a venti minuti di metropolitana dal centro finanziario ci sono scimmie e varani.',
    cosaVedere: [
      'I Singapore Botanic Gardens, patrimonio UNESCO, con il National Orchid Garden',
      'La Bukit Timah Nature Reserve, foresta pluviale primaria attorno alla collina più alta dell\'isola',
      'Il MacRitchie Reservoir con il TreeTop Walk, la passerella sospesa sopra la foresta',
      'L\'isola di Pulau Ubin, dieci minuti di barca, senza auto, con le ultime case di legno del kampong',
      'Il Southern Ridges, il percorso di ponti pedonali tra le colline del sud, con l\'Henderson Waves',
    ],
    cosaFare: [
      'Camminare il sentiero di MacRitchie fino al TreeTop Walk, circa 10 km ad anello',
      'Giornata in bicicletta a Pulau Ubin, con la laguna di Chek Jawa',
      'Botanic Gardens all\'apertura, quando è pieno di gente del posto che corre e fa tai chi',
      'Southern Ridges al tramonto, camminando sull\'Henderson Waves',
    ],
    doveDormire: 'Nessuna di queste zone è una base sensata: si dorme in centro e ci si arriva in metropolitana o con una corsa breve.',
    doveMangiare:
      'Nessuna offerta dentro le riserve, a parte qualche chiosco: si porta acqua in quantità, perché il caldo umido sui sentieri è serio. A Pulau Ubin ci sono un paio di ristoranti di pesce nel villaggio del molo, semplici e giusti così.',
    comeArrivare: "Da Changi la metropolitana porta in centro in 40-50 minuti per 2-3 SGD (circa 2 €) con la carta contactless; da lì: fermata Botanic Gardens (linee Circle e Downtown) o Napier per i Botanic Gardens, Caldecott o un autobus fino all'ingresso per MacRitchie, Beauty World per Bukit Timah, Kranji e poi l'autobus 925 (925M la domenica e nei festivi) per Sungei Buloh. Per Pulau Ubin si va con la metro a Tanah Merah e con l'autobus 2 fino a Changi Point, dove si prende un bumboat che parte quando ha dodici passeggeri a bordo.",
    comeSpostarsi: 'A piedi nelle riserve, in bicicletta a Pulau Ubin (si noleggia al molo).',
    periodoMigliore:
      'tutto l\'anno, al mattino presto. Dopo le dieci il caldo e l\'umidità rendono i sentieri molto più pesanti di quanto la distanza lasci pensare.',
    costi: "Quasi tutto è gratuito: Botanic Gardens, MacRitchie con il TreeTop Walk, Bukit Timah, Sungei Buloh, i parchi e le Southern Ridges. Si pagano il National Orchid Garden (15 SGD per i turisti, circa 10 €), il bumboat per Pulau Ubin (4 SGD a tratta, circa 3 €) e la bici a noleggio, lo Zoo (49 SGD, circa 32 €) e il Night Safari (58 SGD, circa 38 €). Budget giornaliero a Singapore: circa 70-90 € con ostello e centri hawker, 150-220 € con un albergo di fascia media, oltre 350 € in un hotel di lusso.",
    erroriDaEvitare: [
      'Sottovalutare il clima: dieci chilometri a MacRitchie con questa umidità valgono il doppio, e lungo il percorso l\'acqua non si compra',
      'Avvicinarsi ai macachi o mangiare davanti a loro: a MacRitchie e Bukit Timah sono abituati agli esseri umani e strappano le borse',
      'Arrivare al TreeTop Walk troppo tardi: la passerella ha orari di chiusura e si percorre in una sola direzione',
      'Considerare Pulau Ubin una gita opzionale: è il posto dove si vede come era Singapore prima del 1965, e non esiste più altrove',
    ],
    miaEsperienza:
      'È la parte di Singapore che ribalta l\'idea che ci si fa prima di arrivare. A venti minuti di metropolitana dalla baia dei grattacieli c\'è una foresta pluviale vera, con i macachi sui sentieri e i varani che attraversano davanti, e il TreeTop Walk di MacRitchie è una passerella sospesa sopra le chiome che nessuno associa a questa città. I Botanic Gardens al mattino presto sono la scena più bella e meno turistica di tutte: gente del posto che corre, gruppi di anziani che fanno tai chi sotto gli alberi, famiglie sui prati. Un parco usato, più che visitato. Il posto che vale più di tutti però è Pulau Ubin: dieci minuti su una barca di legno che parte solo quando ha dodici passeggeri, e si sbarca in un\'isola senza auto, con le case di legno su palafitte, i sentieri sterrati e le biciclette a noleggio. È come era Singapore prima del 1965, ed è rimasta solo lì. Vale come contrappeso a tutto il resto, e costa quanto il traghetto.',
    luoghi: [
      {
        nome: "Singapore Botanic Gardens",
        testo: "Giardino botanico di epoca coloniale, patrimonio UNESCO dal 2015. Prati, laghi, un tratto di foresta pluviale e il National Orchid Garden, con oltre mille specie e duemila ibridi di orchidee: è l'unica parte a pagamento.",
        come: "MRT fino a Botanic Gardens (linea Downtown), con ingresso direttamente dalla stazione. Si visita da soli.",
        quando: "I giardini aprono dalle 5 a mezzanotte. All'alba o al mattino presto i residenti corrono e fanno tai chi sotto gli alberi.",
        tempo: "2 ore",
        costo: "ingresso ai giardini gratuito; il National Orchid Garden ha un biglietto a parte",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Arrivare prima delle otto: dopo il caldo diventa pesante e il giardino perde il meglio.",
        lat: 1.3151,
        lng: 103.8162,
        orari: "giardini tutti i giorni 5-24; National Orchid Garden 8:30-19, ultimo ingresso 18",
      },
      {
        nome: "MacRitchie Reservoir e TreeTop Walk",
        testo: "Un bacino circondato da foresta pluviale con sentieri e una passerella sospesa di 250 metri, alta 25 metri nel punto più alto, che attraversa la volta degli alberi. Macachi, varani e scoiattoli sui sentieri.",
        come: "In autobus o taxi fino all'ingresso del parco. La passerella si raggiunge solo a piedi, con diversi chilometri di sentiero nella foresta: i percorsi del parco vanno da 3 a 11 km.",
        quando: "Al mattino presto, per il fresco e per essere in tempo: il TreeTop Walk è chiuso il lunedì (salvo festivi), ha orari di apertura diurni e si percorre in un solo senso. Orari sul sito NParks.",
        tempo: "3-4 ore",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Portare molta acqua: lungo il sentiero non ci sono negozi.",
        lat: 1.34361,
        lng: 103.83111,
        orari: "parco tutti i giorni 7-19; TreeTop Walk da martedì a venerdì 9-17, sabato, domenica e festivi 8:30-17, ultimo ingresso 16:45, chiuso il lunedì salvo festivi",
      },
      {
        nome: "Bukit Timah Nature Reserve",
        testo: "Foresta pluviale primaria attorno alla collina più alta dell'isola, circa 165 metri. È una delle aree più estese di foresta primaria rimaste a Singapore, con macachi e uccelli.",
        come: "In MRT e autobus o in taxi. Sentieri segnati di varie lunghezze, con scale e pendenze.",
        quando: "Al mattino presto.",
        tempo: "2-3 ore",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Tenere le borse chiuse e il cibo nascosto: i macachi strappano tutto.",
        lat: 1.35408,
        lng: 103.77944,
        orari: "tutti i giorni 7-19",
      },
      {
        nome: "Pulau Ubin",
        testo: "Isola a una decina di minuti di barca, dove restano poche decine di abitanti nelle case di legno del vecchio kampong. Non ci sono mezzi pubblici: si noleggia una bici e si gira tra mangrovie, vecchie cave di granito allagate e sentieri.",
        come: "Bumboat dal terminal di Changi Point Ferry. La traversata dura circa 10 minuti e la barca parte quando ha dodici passeggeri: 4 SGD a persona a tratta, oppure 48 SGD per la barca intera (tariffe in vigore dal 2020). Biciclette a noleggio sull'isola.",
        quando: "Al mattino. L'ultima barca di ritorno è la sera: controllare l'orario all'arrivo.",
        tempo: "mezza giornata",
        consiglio: "Noleggiare una bici e andare verso Chek Jawa, la zona umida con la passerella sul mare.",
        url: "https://pulau-ubin.nparks.gov.sg/",
        lat: 1.40944,
        lng: 103.96,
        costo: "bumboat 4 SGD a tratta, circa 3 €; bici a noleggio a parte (2026)",
      },
      {
        nome: "Southern Ridges e Henderson Waves",
        testo: "Un percorso tra parchi collegati da passerelle sospese. Henderson Waves è il ponte pedonale più alto di Singapore, 36 metri sopra la strada, con nervature curve di legno che la sera si illuminano.",
        come: "MRT fino a Labrador Park o Harbourfront. Il percorso si fa a tratti e si può interrompere in vari punti.",
        quando: "Al mattino o al tramonto. A mezzogiorno è senza ombra.",
        tempo: "2-3 ore",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Fare il tratto Henderson Waves - Forest Walk, il più suggestivo, e finire al Mount Faber.",
        lat: 1.27605,
        lng: 103.81541,
      },
      {
        nome: "National Orchid Garden",
        testo: "Il cuore dei Botanic Gardens: un giardino in collina con oltre mille specie e duemila ibridi di orchidee, compresi quelli dedicati ai capi di stato in visita. Una serra fresca, la Cool House, ospita le orchidee delle foreste d'alta quota.",
        come: "Dentro i Botanic Gardens, a un quarto d'ora a piedi dalla fermata Botanic Gardens o da Napier. Biglietto alla cassa all'ingresso.",
        quando: "All'apertura delle 8:30, prima del caldo.",
        tempo: "1 ora",
        costo: "15 SGD per i turisti, circa 10 € (2026)",
        orari: "tutti i giorni 8:30-19, ultimo ingresso 18",
        consiglio: "Entrare dal lato di Tanglin, fermata Napier, e attraversare il giardino a piedi passando dallo Swan Lake.",
        url: "https://sbg.nparks.gov.sg/",
        lat: 1.31274,
        lng: 103.81361,
      },
      {
        nome: "Chek Jawa Wetlands",
        testo: "All'estremità orientale di Pulau Ubin, una zona umida dove si toccano sei ecosistemi: spiaggia, laguna, mangrovie, foresta costiera, prati marini e piana di marea. Una passerella di circa un chilometro corre sopra le mangrovie e sul mare, e una torre di osservazione guarda sopra le chiome.",
        come: "In bici dal molo di Pulau Ubin, 3-4 km di strade con qualche salita; le bici si lasciano all'ingresso.",
        quando: "Con la bassa marea, quando affiorano stelle marine e granchi: le maree sono pubblicate sul sito NParks.",
        tempo: "1 ora e mezza",
        costo: "gratuito",
        consiglio: "Partire presto da Changi Point: la passerella è esposta e a mezzogiorno non c'è ombra.",
        url: "https://pulau-ubin.nparks.gov.sg/",
        lat: 1.40869,
        lng: 103.99077,
      },
      {
        nome: "Sungei Buloh Wetland Reserve",
        testo: "La riserva di mangrovie sulla costa nord, di fronte alla Malesia: passerelle tra le radici, torri di osservazione e sentieri dove si incontrano varani, lontre e coccodrilli marini. Da agosto ad aprile arrivano gli uccelli migratori.",
        come: "MRT fino a Kranji, poi autobus 925 (925M la domenica e nei festivi). Percorsi segnati a piedi; alcuni tratti si allagano con l'alta marea.",
        quando: "Al mattino presto o nel tardo pomeriggio, quando gli animali sono più attivi.",
        tempo: "2-3 ore",
        costo: "gratuito",
        orari: "tutti i giorni 7-19, ultimo ingresso 18:30",
        consiglio: "Restare sulle passerelle e lontano dal bordo dell'acqua: i coccodrilli ci sono davvero.",
        url: "https://www.nparks.gov.sg/visit/parks/sungei-buloh-wetland-reserve",
        lat: 1.44494,
        lng: 103.72429,
      },
      {
        nome: "Singapore Zoo",
        testo: "Uno zoo aperto, con fossati e vegetazione al posto delle gabbie, in riva al bacino di Upper Seletar: gli oranghi si muovono liberi sugli alberi sopra i visitatori. Fa parte del Mandai Wildlife Reserve, con il Night Safari, il Bird Paradise e il River Wonders.",
        come: "MRT fino a Khatib, poi la navetta Mandai Khatib; oppure Grab. Biglietti online.",
        quando: "All'apertura delle 8:30, quando gli animali sono attivi e fa ancora fresco.",
        tempo: "mezza giornata",
        costo: "49 SGD per i turisti adulti, circa 32 € (2026)",
        orari: "tutti i giorni 8:30-18, ultimo ingresso 17",
        consiglio: "Abbinarlo al Night Safari, che è accanto: zoo nel pomeriggio, cena a Mandai e safari dopo il tramonto.",
        url: "https://www.mandai.com/en/singapore-zoo/",
        lat: 1.40371,
        lng: 103.79404,
      },
      {
        nome: "Night Safari",
        testo: "Il primo zoo notturno del mondo, aperto nel 1994: si gira dopo il tramonto, in tram o a piedi lungo sentieri appena illuminati, tra leopardi, tapiri, pangolini e cervi. Gli animali sono notturni e la sera sono svegli.",
        come: "Accanto allo Zoo, a Mandai: MRT fino a Khatib e navetta, oppure Grab.",
        quando: "All'apertura, per evitare le code al tram, e in un giorno feriale.",
        tempo: "2-3 ore",
        costo: "58 SGD per i turisti adulti da domenica a giovedì, circa 38 €; di più nei giorni di punta (2026)",
        orari: "tutti i giorni 19:15-24, ultimo ingresso 23:15",
        consiglio: "Niente flash: è vietato e spaventa gli animali.",
        url: "https://www.mandai.com/en/night-safari/",
        lat: 1.40135,
        lng: 103.789,
      },
      {
        nome: "Fort Canning Park",
        testo: "La collina sopra il centro, dove sorgeva il palazzo degli antichi re malesi e poi la casa di Raffles. Tra i viali ci sono la porta del forte britannico, un giardino delle spezie con oltre 180 varietà e nove giardini storici; dentro la collina c'è il Battlebox, il bunker del comando britannico del 1942.",
        come: "MRT fino a Fort Canning, Dhoby Ghaut o Clarke Quay; si sale a piedi da più lati.",
        quando: "Al mattino o al tramonto; gli alberi danno un po' d'ombra.",
        tempo: "1-2 ore",
        costo: "gratuito",
        orari: "sempre aperto",
        url: "https://www.nparks.gov.sg/visit/parks/park-detail/fort-canning-park",
        lat: 1.29402,
        lng: 103.84601,
      },
      {
        nome: "East Coast Park",
        testo: "Tredici chilometri di parco sul mare lungo la costa est, con piste ciclabili, spiagge e barbecue sotto gli alberi. È il posto dove i singaporiani passano il fine settimana, con le navi in rada davanti.",
        come: "MRT fino a Bedok, poi autobus o Grab fino al parco; bici e pattini a noleggio nei negozi del parco.",
        quando: "Al tramonto, quando la brezza rinfresca, o la domenica mattina.",
        tempo: "2-3 ore",
        costo: "gratuito; bici a noleggio a pagamento",
        orari: "sempre aperto",
        consiglio: "Finire con la cena all'East Coast Lagoon Food Village, il centro hawker in riva al mare.",
        url: "https://www.nparks.gov.sg/visit/parks/park-detail/east-coast-park",
        lat: 1.30497,
        lng: 103.92708,
      },
      {
        nome: "Labrador Nature Reserve",
        testo: "Un tratto di foresta costiera sul porto, dove c'era un forte britannico: tra gli alberi restano bunker e postazioni d'artiglieria della seconda guerra mondiale. Una passerella sopraelevata, il Keppel Coastal Trail, corre lungo il mare con vista sulle navi e su Sentosa.",
        come: "MRT fino a Labrador Park, poi cinque minuti a piedi; da qui parte anche il percorso delle Southern Ridges.",
        quando: "Al mattino o nel tardo pomeriggio.",
        tempo: "1-2 ore",
        costo: "gratuito",
        orari: "parco sempre aperto; riserva naturale 7-19",
        consiglio: "La passerella di Berlayar Creek è chiusa per lavori fino al 31 marzo 2027; il Keppel Coastal Trail resta aperto.",
        url: "https://www.nparks.gov.sg/visit/parks/park-detail/labrador-nature-reserve",
        lat: 1.26615,
        lng: 103.80274,
      },
      {
        nome: "Coney Island",
        testo: "Un'isola a nord-est, collegata da due ponti, lasciata quasi selvatica: sentieri sterrati, casuarine, mangrovie e cinque spiagge tranquille. Si gira a piedi o in bici in un paio d'ore, ed è uno dei pochi posti di Singapore senza costruzioni.",
        come: "MRT fino a Punggol Coast, poi a piedi o in bici fino all'ingresso ovest, vicino a Punggol Point. Sull'isola non ci sono parcheggi.",
        quando: "Al mattino presto, prima del caldo.",
        tempo: "2 ore",
        costo: "gratuito",
        orari: "tutti i giorni 7-19",
        url: "https://www.nparks.gov.sg/visit/parks/park-detail/coney-island-park",
        lat: 1.40942,
        lng: 103.92147,
      },
      {
        nome: "Rail Corridor",
        testo: "Il vecchio tracciato della ferrovia malese che attraversava l'isola da nord a sud, dismesso nel 2011 e trasformato in un sentiero verde di circa 24 km. Il tratto più bello è attorno alla vecchia stazione di Bukit Timah, del 1932, con il ponte di ferro sopra Bukit Timah Road.",
        come: "Si entra da molti punti; per la stazione di Bukit Timah le fermate più vicine sono King Albert Park e Beauty World.",
        quando: "Al mattino: il sentiero non è illuminato e va lasciato prima del buio.",
        tempo: "2-3 ore per un tratto",
        costo: "gratuito",
        consiglio: "Da marzo 2026 è chiuso per lavori il tratto sud tra Henderson Road e Spooner Road: meglio la parte centrale.",
        url: "https://railcorridor.nparks.gov.sg/",
        lat: 1.33427,
        lng: 103.78113,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Alba: Botanic Gardens, con colazione in uno dei caffè del parco",
          "Metà mattina: MRT e autobus per MacRitchie, TreeTop Walk",
          "Pranzo in un centro hawker di Toa Payoh o Bishan",
          "Pomeriggio: riposo al fresco",
          "Tramonto: Henderson Waves e Southern Ridges"
        ]
      },
      {
        titolo: "Giornata alternativa: Pulau Ubin",
        tappe: [
          "Mattina presto: bumboat da Changi Point",
          "Giro in bici fino a Chek Jawa",
          "Pranzo in uno dei locali del villaggio vicino al molo",
          "Rientro nel pomeriggio, prima del caldo massimo"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Botanic Gardens all'alba e National Orchid Garden all'apertura",
          "Tarda mattina: MacRitchie e TreeTop Walk (non di lunedì)",
          "Sera: Night Safari a Mandai",
          "Giorno 2: Pulau Ubin in bici fino a Chek Jawa, con la bassa marea se possibile",
          "Tardo pomeriggio: East Coast Park e cena all'East Coast Lagoon Food Village"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1 e 2: come il programma di due giorni",
          "Giorno 3: Sungei Buloh all'apertura delle 7, per gli animali e gli uccelli",
          "Pranzo in un centro hawker in centro e pausa nelle ore calde",
          "Tardo pomeriggio: Labrador Nature Reserve e Southern Ridges fino a Henderson Waves al tramonto"
        ]
      },
    ],
    zone: [
      {
        nome: "Orchard e Newton",
        perChi: "chi vuole stare vicino ai Botanic Gardens",
        testo: "Alberghi e centri commerciali, a pochi minuti dai giardini in MRT. Comoda e cara.",
        fascia: "130-330 €",
      },
      {
        nome: "Dintorni di Bishan o Toa Payoh",
        perChi: "chi vuole vivere come i residenti",
        testo: "Quartieri residenziali con ottimi centri hawker e prezzi bassi; pochi alberghi, ma ci sono appartamenti."
      },
      {
        nome: "Chinatown e Bugis",
        perChi: "chi vuole una base centrale e spendere meno",
        testo: "La linea Downtown porta ai Botanic Gardens in un quarto d'ora e la linea verde verso Tanah Merah, per Changi Point e Pulau Ubin. La sera i centri hawker sono sotto casa.",
        fascia: "110-220 €",
      },
    ],
    sapori: [
      {
        nome: "Nasi lemak",
        testo: "Riso al cocco con acciughe fritte, uovo, cetriolo e sambal. Una colazione nei centri hawker."
      },
      {
        nome: "Carrot cake",
        testo: "Non è il dolce: è una frittata di daikon e riso, saltata in padella nella versione bianca o nera. Si mangia nei centri hawker."
      },
      {
        nome: "Kopi e teh",
        testo: "Caffè e tè con latte condensato, ordinati in un codice proprio (kopi-o, kopi-c, teh-peng). Si ordina a banco."
      },
      {
        nome: "Ice kachang",
        testo: "Ghiaccio tritato con fagioli dolci, gelatine, mais e sciroppo colorato. Il dessert delle giornate calde."
      }
    ],
    attenzioni: [
      "Il clima è l'ostacolo principale: dopo le dieci il caldo e l'umidità rendono i sentieri molto più pesanti di quanto la distanza faccia pensare. Acqua e partenza all'alba.",
      "I macachi di MacRitchie e Bukit Timah strappano borse e cibo. Non mostrare cibo, non guardarli negli occhi, non dargli niente.",
      "Non uscire dai sentieri segnati e non prendere nulla dalla riserva: ci sono multe per chi lo fa.",
      "Per Pulau Ubin portare contanti: nell'isola le carte non sempre funzionano."
    ],
    gite: [
      {
        nome: "St John's e Kusu",
        distanza: "un breve tratto di traghetto",
        come: "Traghetto dal Marina South Pier, fermata MRT Marina South Pier.",
        testo: "Due delle Southern Islands: St John's, con spiagge, sentieri e un laboratorio marino, e Kusu, l'isola della tartaruga, con un tempio cinese e un santuario malese meta di pellegrinaggio in autunno.",
      },
      {
        nome: "Kranji Countryside",
        distanza: "circa un'ora tra MRT e autobus",
        come: "MRT fino a Kranji, poi autobus o Grab tra le fattorie.",
        testo: "L'ultima campagna di Singapore, al confine con la Malesia: orti, allevamenti di capre e di rane, vivai e le Kranji Marshes, una palude d'acqua dolce con una torre per il birdwatching. Si abbina facilmente a Sungei Buloh.",
      },
      {
        nome: "Jurong Lake Gardens",
        distanza: "circa 40 minuti in MRT",
        come: "Linea verde fino a Lakeside o Chinese Garden.",
        testo: "Il parco nazionale dell'ovest, attorno al Jurong Lake, con prati, paludi d'acqua dolce e un grande parco giochi d'acqua per bambini. È frequentato soprattutto dai residenti e il fine settimana fa da giardino ai quartieri dell'ovest.",
      }
    ],
    faq: [
      {
        domanda: "Si paga per visitare i parchi di Singapore?",
        risposta: "Quasi mai: Botanic Gardens, MacRitchie, Bukit Timah, Sungei Buloh e i parchi costieri sono gratuiti. Si pagano il National Orchid Garden (15 SGD), lo Zoo, il Night Safari e la barca per Pulau Ubin.",
      },
      {
        domanda: "Quando è aperto il TreeTop Walk?",
        risposta: "Da martedì a venerdì 9-17, il fine settimana e i festivi 8:30-17, con ultimo ingresso alle 16:45; il lunedì è chiuso, salvo festivi. Si raggiunge solo a piedi e il giro completo richiede 2-3 ore.",
      },
      {
        domanda: "Come si arriva a Pulau Ubin?",
        risposta: "MRT fino a Tanah Merah, autobus 2 fino al Changi Point Ferry Terminal e bumboat di una decina di minuti, 4 SGD a tratta. La barca parte quando ha dodici passeggeri; sull'isola si noleggia la bici.",
      },
      {
        domanda: "Vale la pena il Night Safari?",
        risposta: "È il più originale dei parchi di Mandai, con animali notturni visti quando sono svegli. Costa 58 SGD per un adulto nei giorni normali e si abbina bene allo Zoo nello stesso pomeriggio.",
      },
      {
        domanda: "Ci sono pericoli sui sentieri?",
        risposta: "Soprattutto il caldo e i macachi, che strappano borse e cibo. A Sungei Buloh ci sono coccodrilli marini: si resta sulle passerelle, lontano dall'acqua.",
      },
      {
        domanda: "Qual è il momento migliore della giornata?",
        risposta: "L'alba e il primo mattino: i Botanic Gardens aprono alle 5 e le riserve alle 7. Dopo le dieci l'umidità rende ogni chilometro molto più faticoso.",
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Un sentiero tra piante tropicali e palme nei Singapore Botanic Gardens',
    immagine: '/images/singapore/natura-singapore.jpg',
  },
  {
    slug: 'sentosa',
    paeseSlug: 'singapore',
    ordine: 4,
    nome: 'Sentosa e il sud',
    tipologia: ['mare', 'famiglia', 'parchi'],
    giorniConsigliati: 'mezza giornata o un giorno intero con i parchi',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola a sud, collegata da un ponte, una monorotaia e una funivia: spiagge artificiali, parchi a tema, acquario e il punto più meridionale dell\'Asia continentale, una passerella pedonale su un isolotto, con tanto di cartello.',
    percheAndarci:
      'Per i parchi, se si viaggia con bambini, e per la funivia sopra il porto, che è il modo migliore di vedere quanto sia grande il traffico marittimo che passa da qui: Singapore è uno dei porti più trafficati del pianeta e da lassù si contano le navi in rada a decine.',
    cosaVedere: [
      'Universal Studios Singapore e il Singapore Oceanarium a Resorts World',
      'Le spiagge di Siloso, Palawan e Tanjong, artificiali ma attrezzate',
      'La funivia Mount Faber-Sentosa, sopra il porto',
      'Il Fort Siloso, l\'unica fortificazione costiera britannica conservata, con la storia della caduta di Singapore nel 1942',
      'Il punto più meridionale dell\'Asia continentale, sull\'isolotto collegato da un ponte sospeso a Palawan Beach',
    ],
    cosaFare: [
      'Funivia da Mount Faber, che è il modo giusto di arrivare',
      'Giornata ai parchi, se ci sono bambini o se piove',
      'Camminare il Southern Ridges fino a Mount Faber e poi scendere a Sentosa in funivia',
      'Fort Siloso, che è gratuito e racconta la parte di storia che l\'isola di solito non mostra',
    ],
    doveDormire: 'Gli hotel di Sentosa sono cari e isolati dal resto della città: ha senso solo per chi passa più giorni nei parchi con dei bambini.',
    doveMangiare:
      'L\'offerta sull\'isola è tutta a prezzi da parco a tema. Il consiglio è mangiare prima o dopo, a VivoCity, il centro commerciale da cui parte la monorotaia, che ha un food court normale al piano alto.',
    comeArrivare: "Si scende alla fermata MRT HarbourFront (linee viola e Circle) e da VivoCity si sceglie: la monorotaia Sentosa Express dal livello 3, 4 SGD (circa 3 €) per entrare, dalle 7 a mezzanotte; il Sentosa Boardwalk a piedi dal livello 1, gratuito, con un tratto deviato su un passaggio coperto per i lavori del lungomare; oppure la funivia dalla HarbourFront Tower 2 o da Mount Faber. Da Changi a HarbourFront si impiega circa un'ora in metro; taxi e Grab ci mettono 25-30 minuti.",
    comeSpostarsi: 'Navette interne gratuite, monorotaia e molte camminate: l\'isola è lunga e i punti d\'interesse sono distanti tra loro.',
    periodoMigliore: 'tutto l\'anno. Nei fine settimana e nelle vacanze scolastiche l\'isola è molto affollata di residenti.',
    costi: "Entrare a piedi è gratuito, la Sentosa Express costa 4 SGD (circa 3 €) e la funivia 35 SGD con le due linee (circa 23 €). Fort Siloso, le spiagge, il ponte del punto più a sud e la Sensoryscape sono gratuiti; Wings of Time parte da 22 SGD (circa 15 €), il Singapore Oceanarium da 55 SGD per gli adulti (circa 36 €), Universal Studios ha prezzi da parco internazionale che cambiano secondo la data. Budget giornaliero a Singapore: circa 70-90 € con ostello e centri hawker, 150-220 € con un albergo di fascia media, oltre 350 € con un resort sull'isola e i parchi.",
    erroriDaEvitare: [
      'Aspettarsi spiagge: sono artificiali, con sabbia importata, e davanti c\'è la rada delle petroliere. Vanno prese per quello che sono',
      'Pagare la monorotaia all\'andata: il ponte pedonale è gratuito, coperto e ci si mette dieci minuti',
      'Programmare una giornata intera se non si vanno a fare i parchi: mezza giornata basta e avanza',
      'Andarci nel fine settimana, quando metà Singapore è lì',
    ],
    miaEsperienza:
      'Sentosa è la tappa su cui vale la pena essere onesti: è un\'isola di intrattenimento, con spiagge artificiali di sabbia importata che guardano una rada piena di petroliere in attesa. Chi ci va cercando il mare torna indietro perplesso. Con dei bambini, o in una giornata di pioggia, i parchi e l\'acquario sono ottimi e giustificano tutto. Per tutti gli altri, le due cose che rendono il viaggio sono altre: la funivia da Mount Faber, che passa sopra il porto e permette di vedere quante navi ci sono in rada (Singapore è uno dei porti più trafficati del mondo e dall\'alto si capisce cosa significhi), e il Fort Siloso, gratuito, con i cannoni puntati verso il mare e la storia di come la città cadde in mano giapponese nel 1942, da terra, mentre l\'artiglieria guardava dalla parte sbagliata. Per quelle due cose la mezza giornata vale.',
    luoghi: [
      {
        nome: "Fort Siloso",
        testo: "Una batteria costiera britannica oggi trasformata in museo militare, con cannoni d'epoca e gallerie. Racconta la caduta della città nel febbraio 1942, quando i cannoni costruiti per difendere dal mare furono girati verso l'interno contro i giapponesi arrivati da terra. Le Surrender Chambers ricostruiscono la resa.",
        come: "Dentro Sentosa, sulla punta occidentale. Si arriva con il bus interno o a piedi da Siloso Beach. Percorso a piedi con scale e tunnel.",
        quando: "Al mattino, prima del caldo.",
        tempo: "1 ora e mezza",
        costo: "gratuito",
        url: "https://www.sentosa.com.sg/",
        consiglio: "Salire sulle piattaforme dei cannoni: la vista su rada e petroliere spiega il traffico del porto.",
        lat: 1.25877,
        lng: 103.8088,
        orari: "forte e Surrender Chambers tutti i giorni 9-18, mostre dalle 10, ultimo ingresso 17:30; ascensore della Fort Siloso Skywalk 9-22",
      },
      {
        nome: "Funivia Mount Faber - Sentosa",
        testo: "Cabine sospese che attraversano il porto da Mount Faber all'isola, con vista sulle navi in rada. Singapore è uno dei porti più trafficati al mondo e da qui si vede.",
        come: "MRT fino a HarbourFront, poi si sale a Mount Faber o si prende la funivia dalla stazione di HarbourFront, accanto a VivoCity. Biglietto a pagamento.",
        quando: "Al tramonto.",
        tempo: "1 ora",
        consiglio: "Prenderla in un senso solo e tornare a piedi o in monorotaia.",
        url: "https://www.mountfaberleisure.com/",
        lat: 1.2555,
        lng: 103.8177,
        costo: "Mount Faber Line più Sentosa Line 35 SGD, circa 23 €; solo Mount Faber Line 33 SGD, circa 22 €; solo Sentosa Line 15 SGD, circa 10 € (2026)",
        orari: "tutti i giorni 8:45-22, ultimo imbarco 21:30",
      },
      {
        nome: "Siloso, Palawan e Tanjong Beach",
        testo: "Spiagge create con sabbia importata, con bar, giochi e una vista sulla rada dove aspettano le petroliere. Palawan è la più adatta ai bambini; Tanjong la più tranquilla.",
        come: "Con il bus o la monorotaia interna da Sentosa Station.",
        quando: "Al mattino e nei giorni feriali. Nei fine settimana sono piene di residenti.",
        tempo: "2 ore",
        consiglio: "Non aspettarsi il mare: venire per il relax di una giornata di pioggia o con bambini.",
        lat: 1.25437,
        lng: 103.81333,
        costo: "gratuito",
      },
      {
        nome: "Universal Studios e Singapore Oceanarium",
        testo: "Il parco a tema e il Singapore Oceanarium, l'acquario che nel 2025 ha preso il posto del S.E.A. Aquarium, entrambi a Resorts World Sentosa. Prezzi da parco internazionale.",
        come: "Si raggiunge con la monorotaia da VivoCity, fermata Resorts World. Biglietti online.",
        quando: "Nei giorni feriali; i fine settimana sono molto affollati.",
        tempo: "giornata intera per il parco, 2 ore per l'acquario",
        url: "https://www.sentosa.com.sg/",
        consiglio: "Prenotare online per saltare la coda alla cassa.",
        lat: 1.2542,
        lng: 103.82267,
        costo: "Singapore Oceanarium da 55 SGD per gli adulti, circa 36 €; Universal Studios a prezzo variabile secondo la data (2026)",
        orari: "Universal Studios in genere dalle 10 alla sera, con chiusura che cambia secondo il giorno; Oceanarium tutti i giorni 10-20, con orari ridotti in alcune date (calendario sul sito)",
      },
      {
        nome: "Punto più a sud dell'Asia continentale",
        testo: "Un isolotto su Palawan Beach, collegato da un ponte sospeso, che si presenta come il punto più meridionale dell'Asia continentale. Un tratto simbolico, con vista sul mare.",
        come: "A piedi da Palawan Beach, con un ponte di pochi minuti.",
        quando: "Al tramonto.",
        tempo: "20 minuti",
        costo: "gratuito",
        consiglio: "Prima di farne una tappa, ricordare che è un monumento turistico più che un luogo naturale.",
        url: "https://www.sentosa.com.sg/en/things-to-do/attractions/southernmost-point-of-continental-asia/",
        lat: 1.24796,
        lng: 103.82143,
        orari: "ponte tutti i giorni 9-18:30, ultimo ingresso 18; la sera, 19-22, un percorso luminoso a pagamento",
      },
      {
        nome: "Sentosa Boardwalk",
        testo: "La passerella pedonale coperta che collega VivoCity all'isola sopra il canale, con tapis roulant in alcuni tratti. Fino al 2030 una parte è chiusa per i lavori del nuovo lungomare di Resorts World e si passa su un collegamento coperto provvisorio.",
        come: "Dalla fermata HarbourFront si va alla hall F di VivoCity, al livello 1, e si segue la passerella.",
        quando: "All'andata, al mattino; la sera è illuminata.",
        tempo: "10-15 minuti",
        costo: "gratuito",
        url: "https://www.sentosa.com.sg/en/getting-to-sentosa/",
        lat: 1.26096,
        lng: 103.82352,
      },
      {
        nome: "Sentosa Express",
        testo: "La monorotaia che porta da VivoCity all'isola in pochi minuti, con fermate a Resorts World, Imbiah e Beach. È il modo più comodo di arrivare con i bambini o con il caldo.",
        come: "Stazione al livello 3 di VivoCity, hall L; si paga al tornello con la carta.",
        quando: "Al ritorno, quando si è stanchi; all'andata il Boardwalk è gratuito.",
        tempo: "5 minuti",
        costo: "4 SGD per entrare sull'isola, circa 3 € (2026)",
        orari: "tutti i giorni dalle 7 a mezzanotte",
        url: "https://www.sentosa.com.sg/en/getting-to-sentosa/",
        lat: 1.25165,
        lng: 103.81853,
      },
      {
        nome: "Wings of Time",
        testo: "Lo spettacolo serale sul mare di Siloso Beach: getti d'acqua, laser, fuochi d'artificio e musica, su un palcoscenico costruito nell'acqua. Dura una ventina di minuti e da dicembre 2025 il finale ha fuochi più grandi.",
        come: "Sulla spiaggia di Siloso, a pochi passi dalla fermata Beach della monorotaia. Biglietti online o alle casse della funivia.",
        quando: "Due spettacoli ogni sera, alle 19:40 e alle 20:40.",
        tempo: "20 minuti",
        costo: "da 22 SGD, circa 15 € (2026)",
        orari: "tutti i giorni alle 19:40 e alle 20:40",
        url: "https://www.sentosa.com.sg/en/things-to-do/attractions/wings-of-time/",
        lat: 1.25078,
        lng: 103.81674,
      },
      {
        nome: "Skyline Luge",
        testo: "Carrelli a gravità senza motore che scendono su piste asfaltate nella foresta, dalla collina di Imbiah fino a Siloso Beach; si risale con la seggiovia Skyride, che ha la vista sul porto. Diverte i bambini quanto gli adulti.",
        come: "Partenza da Imbiah, vicino alla stazione della funivia, o dalla base a Siloso Beach. Biglietti a pacchetti di più discese.",
        quando: "Al tramonto, per la vista dalla seggiovia.",
        tempo: "1 ora",
        url: "https://www.skylineluge.com/",
        lat: 1.25505,
        lng: 103.81734,
      },
      {
        nome: "Sentosa Sensoryscape",
        testo: "Un percorso pedonale tra giardini che attraversa l'isola da Resorts World alle spiagge, con piante e installazioni pensate per i cinque sensi e luci la sera. Ha reso pedonale il collegamento tra la zona dei parchi e il mare.",
        come: "A piedi dalla fermata Resorts World della monorotaia o dalla stazione Sensoryscape della funivia.",
        quando: "La sera, quando si accendono le luci.",
        tempo: "30 minuti",
        costo: "gratuito",
        lat: 1.25321,
        lng: 103.81882,
      },
      {
        nome: "Mount Faber Park",
        testo: "La collina sopra il porto, partenza della funivia e capolinea delle Southern Ridges. Dalla cima si vedono Sentosa, le navi in rada e lo skyline; il Marang Trail, un sentiero di 700 metri con scale, sale in un quarto d'ora dalla zona di HarbourFront.",
        come: "Dalla fermata HarbourFront si cerca l'imbocco del Marang Trail, oppure si sale in funivia.",
        quando: "Al tramonto.",
        tempo: "1 ora",
        costo: "gratuito",
        orari: "sempre aperto",
        consiglio: "Un tratto del sentiero tra Henderson Waves e la stazione della funivia è chiuso per manutenzione: seguire le deviazioni segnalate.",
        url: "https://www.nparks.gov.sg/visit/parks/park-detail/mount-faber-park",
        lat: 1.27182,
        lng: 103.81753,
      },
    ],
    programmi: [
      {
        titolo: "Mezza giornata",
        tappe: [
          "Mattina: ponte pedonale da VivoCity, Fort Siloso",
          "Siloso Beach per una pausa",
          "Rientro con la funivia da Sentosa al Mount Faber, al tramonto"
        ]
      },
      {
        titolo: "1 giorno con i parchi",
        tappe: [
          "Apertura: Universal Studios, le attrazioni più richieste per prime",
          "Pranzo a Resorts World o nei centri hawker di VivoCity",
          "Pomeriggio: Singapore Oceanarium",
          "Tramonto: spiaggia di Palawan e punto più a sud"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Universal Studios dall'apertura, le attrazioni più richieste per prime",
          "Sera: Wings of Time a Siloso Beach",
          "Giorno 2: a piedi sul Marang Trail fino a Mount Faber, funivia per Sentosa",
          "Mattina: Fort Siloso, poi Skyline Luge",
          "Pomeriggio: Singapore Oceanarium o spiaggia di Tanjong",
          "Tramonto: Palawan e il punto più a sud, rientro a piedi sul Boardwalk"
        ]
      },
    ],
    zone: [
      {
        nome: "Dentro Sentosa",
        perChi: "famiglie che vogliono stare nei parchi",
        testo: "Resort di fascia alta, comodi per i parchi ma lontani dalla vita cittadina e dai centri hawker.",
        fascia: "200-400 €",
      },
      {
        nome: "HarbourFront e VivoCity",
        perChi: "chi vuole stare vicino senza pagare i prezzi dell'isola",
        testo: "Alberghi di fascia media davanti al centro commerciale, con collegamento diretto a Sentosa a piedi o in monorotaia."
      },
      {
        nome: "Chinatown e Tanjong Pagar",
        perChi: "chi viene a Sentosa solo per un giorno",
        testo: "Da Outram Park la linea viola arriva a HarbourFront in una fermata, e la sera si torna a cena nei centri hawker del quartiere.",
        fascia: "120-220 €",
      },
    ],
    sapori: [
      {
        nome: "Hawker centre di VivoCity",
        testo: "Il punto più comodo per mangiare prima o dopo l'isola, con le specialità locali a prezzi molto più bassi di quelli di Sentosa."
      },
      {
        nome: "Pesce alla griglia (BBQ stingray)",
        testo: "Razza cucinata alla brace con sambal, un piatto da centro hawker. Non è a Sentosa: si trova nei centri sulla terraferma."
      },
      {
        nome: "Cendol",
        testo: "Dessert di ghiaccio tritato, latte di cocco, sciroppo di palma e gelatine verdi. Si trova nei centri hawker."
      },
      {
        nome: "Satay",
        testo: "Spiedini alla brace con salsa di arachidi, anche nei chioschi dell'isola ma a prezzi più alti."
      }
    ],
    attenzioni: [
      "Si entra a piedi gratis dal Sentosa Boardwalk, che parte da VivoCity: per l'andata la monorotaia non serve.",
      "Pagare l'ingresso di un parco senza aver controllato le offerte online costa molto di più dello stesso biglietto acquistato in anticipo.",
      "I fine settimana e le vacanze scolastiche l'isola è affollata di residenti: se possibile, venire in un giorno feriale.",
      "In spiaggia l'acqua davanti alla rada non è il motivo per venire: i bar servono più del mare."
    ],
    gite: [
      {
        nome: "Southern Ridges e Henderson Waves",
        distanza: "a piedi da Mount Faber",
        come: "Da Mount Faber si cammina verso ovest sul percorso segnato, passando per Henderson Waves fino a Kent Ridge.",
        testo: "Una decina di chilometri di parchi collegati da ponti e passerelle nella foresta; il tratto più bello è il ponte ondulato di Henderson Waves. Ha una scheda nella Singapore verde.",
      },
      {
        nome: "Haw Par Villa",
        distanza: "pochi minuti di linea Circle da HarbourFront",
        come: "Linea Circle fino alla fermata Haw Par Villa, davanti all'ingresso.",
        testo: "Un parco di statue in cemento costruito negli anni Trenta dai fratelli del Tiger Balm, con scene della mitologia cinese e i Dieci Tribunali dell'Inferno. Uno dei posti più strani della città.",
      },
      {
        nome: "St John's e Kusu",
        distanza: "un breve tratto di traghetto",
        come: "Traghetto dal Marina South Pier, fermata MRT Marina South Pier.",
        testo: "Due delle Southern Islands, più tranquille di Sentosa: St John's con spiagge e sentieri, Kusu con un tempio cinese e un santuario malese meta di pellegrinaggio in autunno.",
      }
    ],
    faq: [
      {
        domanda: "Si paga per entrare a Sentosa?",
        risposta: "A piedi sul Boardwalk no. La monorotaia Sentosa Express costa 4 SGD per entrare; in auto o in taxi si paga un pedaggio che cambia secondo l'ora.",
      },
      {
        domanda: "Quanto costa la funivia?",
        risposta: "35 SGD per un adulto con le due linee, Mount Faber e Sentosa; 33 SGD solo la Mount Faber Line e 15 SGD solo la Sentosa Line. Funziona tutti i giorni dalle 8:45 alle 22.",
      },
      {
        domanda: "Il Fort Siloso è gratuito?",
        risposta: "Sì, forte, tunnel e Surrender Chambers non hanno biglietto. È aperto tutti i giorni dalle 9 alle 18 e l'ascensore della Skywalk funziona fino alle 22.",
      },
      {
        domanda: "Le spiagge di Sentosa valgono il viaggio?",
        risposta: "Sono artificiali e guardano la rada delle petroliere: vanno bene per una pausa o con i bambini, non per il mare. Tanjong è la più tranquilla, Palawan la più adatta alle famiglie.",
      },
      {
        domanda: "Basta mezza giornata o serve un giorno intero?",
        risposta: "Senza parchi basta mezza giornata: funivia, Fort Siloso, una spiaggia e il punto più a sud. Con Universal Studios serve un giorno intero, e mezzo in più per l'Oceanarium.",
      },
      {
        domanda: "A che ora è Wings of Time?",
        risposta: "Ogni sera alle 19:40 e alle 20:40 a Siloso Beach, per una ventina di minuti; i biglietti partono da 22 SGD.",
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Una cabina della funivia di Sentosa sopra la foresta dell\'isola, con il porto sullo sfondo',
    immagine: '/images/singapore/sentosa.jpg',
  },
]
