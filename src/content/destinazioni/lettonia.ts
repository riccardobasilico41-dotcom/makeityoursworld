import type { Destinazione } from '@/lib/types'

// Seconda tappa dell'itinerario "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts), viaggio fatto da Rick. Stesso trattamento
// delle destinazioni lituane ed estoni: visitataPersonalmente true ovunque,
// miaEsperienza resta assente finché non arriva un ricordo dell'autore. Jūrmala è trattata come destinazione a sé (non ripiegata nel
// cosaFare di Riga), sullo stesso criterio usato per Trakai in
// src/content/destinazioni/lituania.ts: un luogo fisicamente separato con un
// proprio cosaVedere denso, non solo una riga nel cosaFare della capitale.

export const destinazioniLettonia: Destinazione[] = [
  {
    slug: 'riga',
    paeseSlug: 'lettonia',
    ordine: 1,
    nome: 'Riga',
    tipologia: ['città', 'architettura', 'gastronomia'],
    giorniConsigliati: '3 giorni, compresa la gita a Jūrmala',
    visitataPersonalmente: true,
    introduzione:
      'È la capitale della Lettonia e la più grande delle tre capitali baltiche. Il centro storico medievale, patrimonio UNESCO dal 1997, si affaccia sul fiume Daugava con le guglie delle chiese anseatiche e la Casa delle Teste Nere. Appena fuori dalle mura, il quartiere costruito tra Otto e Novecento ha una delle densità di architettura Art Nouveau più alte al mondo. Poco più in là il Mercato Centrale, ricavato da cinque ex hangar per dirigibili, è ancora il più grande bazar coperto d\'Europa.',
    percheAndarci:
      'In uno spazio piccolo ci sono un centro medievale vero, un intero quartiere Art Nouveau da guardare con il naso all\'insù e un mercato che è un monumento industriale dove si fa ancora la spesa ogni giorno. Da qui parte poi la gita più classica della costa lettone, la spiaggia di Jūrmala.',
    cosaVedere: [
      'La Piazza del Duomo (Doma laukums) con la Cattedrale di Riga (Rīgas Doms), la chiesa più grande del Baltico, e il suo storico organo',
      'La Chiesa di San Pietro, con la piattaforma panoramica sulla guglia a 72 metri: è la vista più alta sulla Città Vecchia e sul fiume Daugava',
      'La Casa delle Teste Nere (Melngalvju nams), la facciata rinascimentale più fotografata della piazza del municipio, ricostruita dopo la distruzione della guerra',
      'I Tre Fratelli (Trīs brāļi), tre case medievali e barocche in fila su via Mazā Pils, tra gli edifici in pietra più antichi della città',
      'Il quartiere Art Nouveau, lungo Alberta iela, Elizabetes iela e Strēlnieku iela: centinaia di facciate decorate con maschere, volti scolpiti e motivi floreali, molte dell\'architetto Mihails Eizenšteins, padre del regista Sergej Ėjzenštejn',
      'Il Mercato Centrale (Centrāltirgus): cinque padiglioni ricavati da hangar per dirigibili tedeschi della Prima guerra mondiale, aperto nel 1930, quando era il più grande e moderno d\'Europa. Fa parte del sito UNESCO insieme alla Città Vecchia',
    ],
    cosaFare: [
      'Salire sulla torre della Chiesa di San Pietro per il panorama sulla Città Vecchia e sul Daugava',
      'Camminare lungo Alberta iela con il naso all\'insù, cercando le facciate più elaborate del quartiere Art Nouveau',
      'Girare tra i banchi del Mercato Centrale, nei padiglioni di pesce, carne, latticini e verdura, fermandosi ad assaggiare le specialità locali',
      'Passare una serata tra bar e ristoranti della Città Vecchia, con una sosta al Bar Skyline o su un altro rooftop per la vista sui tetti',
    ],
    doveDormire:
      'Nella Città Vecchia (Vecrīga) si ha tutto a piedi, vita notturna compresa. Il quartiere Art Nouveau, appena fuori dalle mura verso nord, è più tranquillo e altrettanto centrale, e lì si può dormire dentro un palazzo liberty.',
    doveMangiare:
      'Il piatto invernale più identitario è il pelēkie zirņi ar speķi, piselli grigi con pancetta. Il rupjmaize, il pane di segale nero, sta alla base di molta cucina lettone, compreso il rupjmaizes kārtojums, un dolce a strati con panna e frutti di bosco. Per assaggiare i prodotti locali, dal formaggio affumicato al pesce del Baltico, i banchi del Mercato Centrale sono il modo più economico e genuino.',
    comeArrivare:
      'L\'Aeroporto Internazionale di Riga (RIX), il principale scalo del Baltico, è a circa 10 km dal centro: bus o tram in 20-30 minuti, oppure taxi o Bolt in pochi minuti. Da alcuni aeroporti italiani ci sono voli diretti low cost, stagionali o tutto l\'anno; altrimenti si fa scalo in un hub europeo. Da Vilnius si arriva in bus in circa 4 ore, con più compagnie (tra cui Lux Express) e molte corse al giorno.',
    comeSpostarsi:
      'Il centro storico si gira tutto a piedi. Tram, filobus e bus della rete Rīgas satiksme coprono il resto della città, con biglietti a tempo economici. Per Jūrmala c\'è il treno regionale dalla stazione centrale, circa 30 minuti, con partenze almeno ogni mezz\'ora.',
    periodoMigliore:
      'maggio-settembre, per il clima mite e, in piena estate, la possibilità di unire la città a un bagno a Jūrmala. Giugno-agosto è la stagione più affollata. L\'inverno (novembre-marzo) è freddo e spesso ventoso, ma la Città Vecchia regge bene e a dicembre c\'è il mercatino di Natale in Piazza del Duomo.',
    costi: 'città economica per gli standard dell\'Europa occidentale: ingresso alla torre di San Pietro 9€, cena normale 10-16€ a testa, treno per Jūrmala circa 2€ a tratta.',
    erroriDaEvitare: [
      'Fermarsi alla Città Vecchia: il quartiere Art Nouveau appena fuori dalle mura è una parte centrale dell\'architettura di Riga quanto il centro medievale',
      'Andare al Mercato Centrale nel weekend dopo pranzo: i banchi migliori si svuotano presto, e il mattino, con i venditori locali, è il momento più autentico',
      'Programmare Jūrmala senza guardare il meteo: è una gita al mare e ha senso soprattutto da giugno ad agosto',
      'Pensare che il russo non serva: lo parla ancora la consistente minoranza russofona della città, e in certe situazioni quotidiane fuori dal centro turistico è più utile dell\'inglese',
    ],
    luoghi: [
      {
        nome: "Cattedrale di Riga e Piazza del Duomo",
        testo: "Considerata la più grande chiesa medievale dei Paesi baltici, fondata nel 1211, con l'organo Walcker inaugurato nel 1884: 6.718 canne. La piazza è circondata da caffè.",
        come: "A piedi dalla Città Vecchia.",
        quando: "Mattina.",
        tempo: "1 ora",
        url: "https://doms.lv",
        consiglio: "Programma dei concerti d'organo sul sito ufficiale."
      },
      {
        nome: "Chiesa di San Pietro",
        testo: "Chiesa gotica la cui guglia ha una piattaforma panoramica a 72 metri, la vista più alta sulla Città Vecchia e sulla Daugava. Si sale con l'ascensore.",
        come: "A piedi, vicino alla Piazza del Municipio.",
        quando: "Giorno sereno.",
        tempo: "45 minuti",
        consiglio: "Meglio salire al mattino, quando la luce è chiara."
      },
      {
        nome: "Casa delle Teste Nere",
        testo: "Dal Quattrocento sede della confraternita delle Teste Nere, gilda di mercanti celibi e armatori, con la facciata decorata nel primo Seicento. Bombardata nel 1941 e demolita dai sovietici nel 1948, è stata ricostruita tra il 1996 e il 2000.",
        come: "Sulla Piazza del Municipio.",
        quando: "Mattina, per le foto.",
        tempo: "30 minuti",
        url: "https://www.melngalvjunams.lv",
        consiglio: "La piazza del municipio è il punto più bello per le foto."
      },
      {
        nome: "I Tre Fratelli",
        testo: "Tre case in fila ai numeri 17, 19 e 21 di via Mazā Pils, il più antico complesso di case d'abitazione di Riga: la prima, con il frontone a gradoni, è del tardo Quattrocento, la seconda del 1646, la terza barocca del tardo Seicento.",
        come: "A piedi dalla Città Vecchia.",
        quando: "Giorno.",
        tempo: "15 minuti",
        costo: "ingresso libero",
        consiglio: "Dentro c'è il Museo dell'Architettura."
      },
      {
        nome: "Quartiere Art Nouveau",
        testo: "Alberta iela e le vie intorno, con facciate decorate da maschere, volti e motivi floreali, molte progettate dall'architetto Mikhail Eisenstein. Circa un terzo degli edifici del centro di Riga è Art Nouveau.",
        come: "A piedi o in tram dal centro (15 minuti).",
        quando: "Mattina, con luce piena sulle facciate.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Alzare lo sguardo: i dettagli sono sopra il primo piano."
      },
      {
        nome: "Mercato Centrale",
        testo: "Cinque padiglioni ricavati dagli hangar dei dirigibili tedeschi della Prima guerra mondiale, aperti nel 1930. È considerato il più grande mercato d'Europa.",
        come: "A piedi dalla stazione ferroviaria.",
        quando: "Mattina.",
        tempo: "1-2 ore",
        consiglio: "Assaggiare il pesce affumicato nel padiglione del pesce."
      },
      {
        nome: "Monumento alla Libertà e Museo dell'Occupazione",
        testo: "Il monumento, inaugurato nel 1935, è il simbolo dell'indipendenza lettone; la guardia d'onore, tolta dai sovietici, è tornata nel 1992 e non monta con freddo o caldo estremi. Il Museo dell'Occupazione, in Latviešu strēlnieku laukums nella Città Vecchia, racconta la storia sovietica e nazista.",
        come: "A piedi dalla Città Vecchia (10 minuti).",
        quando: "Mattina.",
        tempo: "1,5 ore",
        url: "https://okupacijasmuzejs.lv",
        consiglio: "Il Museo dell'Occupazione apre tutti i giorni 10-18; biglietti sul sito ufficiale."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Duomo e San Pietro",
          "Casa delle Teste Nere",
          "Pranzo al Mercato Centrale",
          "Pomeriggio: Art Nouveau",
          "Sera: Città Vecchia"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Museo dell'Occupazione",
          "Monumento alla Libertà",
          "Gita a Jūrmala (vedi scheda)"
        ]
      }
    ],
    zone: [
      {
        nome: "Città Vecchia (Vecrīga)",
        perChi: "Chi vuole stare a due passi dalle attrazioni",
        testo: "Vicino a tutto, ma rumoroso la sera; molti bar."
      },
      {
        nome: "Centro Art Nouveau",
        perChi: "Chi cerca atmosfera e ristoranti",
        testo: "Tranquillo, con edifici belli; a 10 minuti dalla Città Vecchia."
      },
      {
        nome: "Āgenskalns",
        perChi: "Chi preferisce un quartiere locale",
        testo: "Oltre il fiume, più economico; collegato con il tram."
      }
    ],
    sapori: [
      {
        nome: "Rupjmaize",
        testo: "Pane di segale scuro e dolce, base della cucina lettone."
      },
      {
        nome: "Pelēkie zirņi ar speķi",
        testo: "Piselli grigi con pancetta, piatto tradizionale."
      },
      {
        nome: "Rīgas Melnais balzams",
        testo: "Liquore di erbe nero, da provare nei bar della Città Vecchia."
      },
      {
        nome: "Pesce affumicato",
        testo: "Ottimo al Mercato Centrale: salmone, anguilla, sprat."
      }
    ],
    attenzioni: [
      "Locali notturni: ad alcuni turisti sono stati fatti pagare prezzi altissimi o addebiti falsi sulla carta. Guardare il pagamento con carta davanti a sé e diffidare se chiedono di reinserire il PIN.",
      "Taxi: prenotare con una compagnia nota o prenderlo a un posteggio, solo auto registrate con targa gialla; concordare prima il prezzo indicativo.",
      "Borseggiatori in Città Vecchia, al Mercato Centrale e alle stazioni di treni e autobus.",
      "D'inverno marciapiedi ghiacciati: scarpe adatte."
    ],
    esperienzeSlugs: ['riga-art-nouveau-passeggiata', 'riga-mercato-centrale-tour'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Lo skyline della Città Vecchia di Riga visto dalla Daugava, con le guglie di San Pietro e della Cattedrale sopra il lungofiume',
    immagine: '/images/lettonia/riga.jpg',
  },
  {
    slug: 'jurmala',
    paeseSlug: 'lettonia',
    ordine: 2,
    nome: 'Jūrmala',
    tipologia: ['mare', 'architettura', 'relax'],
    giorniConsigliati: 'mezza giornata, come gita da Riga',
    visitataPersonalmente: true,
    introduzione:
      'La città balneare storica della Lettonia: circa 32 km di sabbia bianca finissima sul Golfo di Riga, a 20 km e mezz\'ora di treno dalla capitale. Dagli anni degli zar fino all\'epoca sovietica, quando ci andava in villeggiatura l\'élite dell\'URSS, a Jūrmala sono sorte centinaia di ville di legno Art Nouveau e Art Déco. Molte oggi sono restaurate e fanno da case private, hotel o piccoli musei.',
    percheAndarci:
      'È la spiaggia più facile da raggiungere partendo da una capitale di questo itinerario. Dietro la sabbia, poi, le vie residenziali piene di ville di legno decorate sono un museo diffuso di architettura balneare con più di un secolo di storia lettone.',
    cosaVedere: [
      'La spiaggia di sabbia bianca, continua per circa 32 km, tra le più larghe e pulite del Baltico',
      'Jomas iela, la via pedonale di Majori, il centro della cittadina, con negozi, caffè e gelaterie',
      'Le ville di legno Art Nouveau e Art Déco nelle vie residenziali di Majori e Dzintari, molte con intagli fatti a mano e verande vetrate',
      'La Dzintari Concert Hall, la sala da concerti all\'aperto tra i pini, sede storica di festival ed eventi estivi',
    ],
    cosaFare: [
      'Camminare a lungo sulla spiaggia, dalla stazione di Majori verso Dzintari o Bulduri',
      'Girare tra le vie residenziali dietro Jomas iela e guardare da fuori le ville di legno decorate',
      'Fermarsi in uno dei caffè o ristoranti sul lungomare, aperti tutto l\'anno e più animati in estate',
    ],
    doveDormire: 'In questo itinerario Jūrmala si visita in mezza giornata da Riga, senza dormirci. Chi vuole restare qualche giorno al mare può aggiungerla come estensione.',
    doveMangiare: 'Lungo Jomas iela ristoranti e caffè fanno cucina lettone e internazionale; in estate diversi chioschi sulla spiaggia servono pesce alla griglia e gelato.',
    comeArrivare: 'Da Riga con il treno regionale dalla stazione centrale (Rīga Centrālā stacija) fino a Majori: circa 30 minuti, con partenze almeno ogni mezz\'ora.',
    comeSpostarsi: 'Il centro di Majori e la spiaggia si girano a piedi. Per Dzintari o le zone più lontane si può riprendere lo stesso treno regionale, che ferma in più punti lungo la costa.',
    periodoMigliore: 'giugno-agosto per fare il bagno. Nelle mezze stagioni la passeggiata sulla spiaggia e tra le ville di legno resta piacevole, con meno gente.',
    costi: 'gita economica: treno circa 2€ a tratta, spiaggia gratuita, pasto in un caffè del lungomare 8-15€.',
    erroriDaEvitare: [
      'Andarci fuori stagione aspettandosi la vita balneare dell\'estate: da ottobre a maggio la spiaggia è quasi deserta e molti locali chiudono',
      'Restare solo in spiaggia senza girare per le vie residenziali: sono le ville di legno decorate a rendere Jūrmala diversa da "un\'altra spiaggia"',
      'Sottovalutare l\'acqua bassa e fresca del Golfo di Riga, molto diversa da un bagno nel Mediterraneo',
    ],
    luoghi: [
      {
        nome: "Spiaggia di Jūrmala",
        testo: "Una spiaggia di sabbia bianca di quarzo lunga circa 33 km, sulla costa del Golfo di Riga.",
        come: "Treno da Riga a Majori, sulla linea Riga-Tukums.",
        quando: "Estate, quando fa caldo; d'inverno è deserta e suggestiva.",
        tempo: "mezza giornata",
        costo: "ingresso libero",
        consiglio: "Il treno è più comodo dell'auto: chi non è residente paga un pedaggio per entrare a Jūrmala con il veicolo."
      },
      {
        nome: "Jomas iela",
        testo: "La via pedonale di Majori, il centro della cittadina, con negozi, caffè e gelaterie. D'estate è molto animata.",
        come: "A piedi dalla stazione di Majori (5 minuti).",
        quando: "Pomeriggio e sera d'estate.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Scegliere un caffè nelle strade laterali per prezzi migliori."
      },
      {
        nome: "Ville di legno Art Nouveau",
        testo: "Nelle vie residenziali di Majori e Dzintari, ville di legno con intagli e verande vetrate, esempi di architettura in legno dell'inizio Novecento.",
        come: "A piedi, dietro Jomas iela.",
        quando: "Giorno, con buona luce.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Si guarda da fuori: sono residenze private."
      },
      {
        nome: "Sala da concerti Dzintari",
        testo: "La sala all'aperto tra i pini, sede storica di festival e concerti estivi, con la musica classica e pop.",
        come: "Treno fino a Dzintari.",
        quando: "Estate, la sera.",
        tempo: "2 ore",
        url: "https://www.dzintarukoncertzale.lv",
        consiglio: "Controllare il programma per i concerti in cartellone."
      }
    ],
    sapori: [
      {
        nome: "Pesce alla griglia",
        testo: "Salmone e spratto serviti nei chioschi sulla spiaggia."
      },
      {
        nome: "Gelato",
        testo: "Chioschi sul lungomare, in estate, anche a basso costo."
      }
    ],
    attenzioni: [
      "Per entrare a Jūrmala in auto i non residenti pagano un pedaggio: la gita in treno è più semplice.",
      "La spiaggia ha il vento: portare una felpa anche d'estate.",
      "Nei weekend estivi i ristoranti sono pieni: prenotare."
    ],
    esperienzeSlugs: ['jurmala-spiaggia-ville-liberty'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Una villa di legno con verande vetrate e decorazioni intagliate tra gli alberi di Jūrmala',
    immagine: '/images/lettonia/jurmala.jpg',
  },
]
