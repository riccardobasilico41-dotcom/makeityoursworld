import type { Destinazione } from '@/lib/types'

// Le sette zone della Jungfrau Region trattate in "Svizzera in van"
// (src/content/viaggi/52-svizzera-alpi-van.md), viaggio fatto da Rick: tutte hanno
// visitataPersonalmente: true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore (vedi il commento del tipo
// Destinazione in src/lib/types.ts). Nessun nome di hotel, ristorante o
// operatore è stato inventato. Prezzi, orari stagionali di passi e funivie
// e regole di campeggio in van cambiano ogni stagione e da un cantone
// all'altro: vanno riverificati prima di partire.

export const destinazioniSvizzera: Destinazione[] = [
  {
    slug: 'interlaken',
    paeseSlug: 'svizzera',
    ordine: 1,
    nome: 'Interlaken e i laghi di Thun e Brienz',
    tipologia: ['laghi', 'base logistica', 'montagna'],
    giorniConsigliati: '1-2 giorni come base, tutto il resto del giro vi ruota intorno',
    visitataPersonalmente: true,
    introduzione:
      'Interlaken significa «fra i laghi»: sta su una lingua di terra fra il Lago di Thun a ovest e il Lago di Brienz a est, tutti e due di un turchese lattiginoso per i sedimenti glaciali in sospensione. È lo snodo logistico della regione, con diversi campeggi nel giro di pochi chilometri.',
    percheAndarci:
      'È la base più pratica per un van in tutta la Jungfrau Region: c\'è la stazione principale, ci sono supermercati e noleggi di attrezzatura outdoor, e ogni altra zona di questa guida si raggiunge in giornata senza cambiare alloggio ogni notte.',
    cosaVedere: [
      'Il Lago di Thun e il Lago di Brienz, turchesi e lattiginosi per i sedimenti glaciali',
      'Il centro di Interlaken, con l\'Höheweg, il lungo viale con vista sulla Jungfrau in fondo',
      'Il castello di Oberhofen, sul Lago di Thun, con il parco botanico affacciato sull\'acqua',
      'Il villaggio di Iseltwald, sul Lago di Brienz, con l\'imbarcadero diventato famoso grazie ad alcune produzioni internazionali',
    ],
    cosaFare: [
      'Un giro in battello storico su uno dei due laghi, con imbarcazioni a vapore ancora in servizio',
      'Passeggiata sull\'Höheweg al tramonto, quando la Jungfrau si accende di rosa',
      'Fare la spesa grossa da Coop o Migros in centro prima di salire nelle valli, dove i prezzi aumentano',
    ],
    doveDormire:
      'Sulle rive dei due laghi, a pochi minuti dal centro, ci sono diversi campeggi attrezzati per van: è la zona della guida con più posti legali per dormire.',
    doveMangiare:
      'Rösti, fondue e raclette con i formaggi d\'alpeggio locali sono la base della cucina della regione. Un pasto semplice in un ristorante di fascia media di rado costa meno di 25-30 CHF a persona.',
    comeArrivare: "Uscita autostradale diretta da Berna (circa un'ora) o dal Vallese via Grimsel-Furka. Senza auto si atterra di solito a Zurigo: dalla stazione sotto il terminal il treno FFS arriva a Interlaken Ost in circa 2 ore, con cambio a Berna e partenze ogni mezz'ora; il biglietto pieno in seconda classe costa circa 75-80 CHF (circa 80-86 €), molto meno con i Supersaver dell'app FFS. Da Ginevra servono circa 3 ore. Interlaken ha due stazioni: West per il centro e il Lago di Thun, Ost per il Lago di Brienz e i treni verso Lauterbrunnen e Grindelwald.",
    comeSpostarsi: 'A piedi nel centro; il van serve per raggiungere le altre zone, tutte entro 20-30 minuti di guida.',
    periodoMigliore: 'da giugno a settembre, con luglio-agosto più caldo e affollato.',
    costi: "Campeggi 35-50 CHF/notte; giro in battello da circa 20-30 CHF a tratta singola. Budget giornaliero a persona: basso 100-140 € (campeggio od ostello, spesa da Coop o Migros, una salita in funicolare), medio 220-320 € (hotel di fascia media in doppia, un ristorante, una funivia), alto da 450 € in su.",
    erroriDaEvitare: [
      'Arrivare senza aver prenotato, o almeno individuato, un campeggio per la prima notte',
      'Fare la spesa nei minimarket delle valli, molto più cari, invece che nei supermercati di Interlaken',
      'Sottovalutare quanto tempo prendano le altre zone: Interlaken è la base, non la meta principale del viaggio',
    ],
    miaEsperienza:
      "Interlaken è stata la base di partenza del giro in van con gli amici nelle Alpi Bernesi: da qui siamo saliti verso Lauterbrunnen, Grindelwald e la Jungfrau, prima dei passi verso Zermatt.",
    luoghi: [
      {
        nome: "Harder Kulm",
        testo: "Il belvedere sopra Interlaken, a 1.322 metri, con vista sui due laghi e, in giornata limpida, su Eiger, Mönch e Jungfrau. In cima ci sono una piattaforma panoramica e un ristorante in un edificio a forma di castello.",
        come: "Funicolare dalla stazione Harder Bahn, vicino a Interlaken Ost: circa 10 minuti di salita.",
        quando: "Tardo pomeriggio per la luce sui laghi. Funziona solo in stagione: date sul sito ufficiale.",
        tempo: "2 ore",
        costo: "Biglietti da 22 CHF (circa 24 €) sul sito ufficiale, tariffa più bassa della stagione 2026.",
        orari: "Stagionale, ferma in inverno; in stagione corse ogni giorno, anche serali per il tramonto.",
        lat: 46.69968,
        lng: 7.85614,
        url: "https://www.jungfrau.ch/en-gb/harder-kulm/",
        consiglio: "Controllare le webcam prima di salire: con nuvole basse il panorama sparisce."
      },
      {
        nome: "Höheweg e Höhematte",
        testo: "Il viale principale di Interlaken corre lungo la Höhematte, un grande prato rimasto libero da costruzioni dove atterrano i parapendii. Da qui la Jungfrau si vede in fondo, fra gli alberghi della Belle Époque. È il posto per una passeggiata serale senza spendere nulla.",
        come: "A piedi, 10 minuti da Interlaken Ost o da Interlaken West.",
        quando: "Al tramonto, quando la Jungfrau prende luce.",
        tempo: "1 ora",
        costo: "Gratuito.",
        orari: "Sempre accessibile.",
        lat: 46.68773,
        lng: 7.86085
      },
      {
        nome: "Lago di Brienz e cascate del Giessbach",
        testo: "Il lago più verde e meno turistico, con le cascate del Giessbach che cadono a gradoni per 14 salti accanto a un albergo storico. Si arriva con il battello.",
        come: "Battello da Interlaken Ost o da Brienz fino al molo, poi la funicolare storica del Giessbach.",
        quando: "Mattina, in primavera quando le cascate sono piene.",
        tempo: "mezza giornata",
        lat: 46.73355,
        lng: 8.02382,
        url: "https://www.giessbach.ch/en/",
        consiglio: "Il tragitto a piedi nel bosco dal molo alle cascate è breve e piacevole."
      },
      {
        nome: "Lago di Thun",
        testo: "Il lago a ovest di Interlaken, con il castello di Thun, villaggi sulle rive e il battello a vapore storico. Il borgo di Spiez ha un castello sul lago.",
        come: "Battello o treno da Interlaken West; il battello è molto più lento del treno.",
        quando: "Estate.",
        tempo: "mezza giornata",
        costo: "Battello circa 20-30 CHF (circa 21-32 €) a tratta; compreso nello Swiss Travel Pass.",
        lat: 46.70559,
        lng: 7.69144,
        url: "https://www.bls.ch/en",
        consiglio: "Salire sul battello verso Thun e tornare in treno, per vedere il lago e risparmiare tempo."
      },
      {
        nome: "Iseltwald",
        testo: "Un piccolo villaggio sul lago di Brienz, sul promontorio con un ex castello, oggi centro di riabilitazione. È famoso per il pontile dove è stata girata una scena della serie coreana «Crash Landing on You».",
        come: "In auto o con il bus da Interlaken Ost.",
        quando: "Mattina presto, prima dei gruppi.",
        tempo: "1-2 ore",
        costo: "Pontile a pagamento, 5 CHF, con tornello (introdotto nel 2023).",
        orari: "Pontile accessibile tutto il giorno.",
        lat: 46.71046,
        lng: 7.96346,
        consiglio: "Il molo si vede meglio all'alba."
      },
      {
        nome: "Schynige Platte",
        testo: "Un balcone a 1.967 metri raggiunto da una cremagliera storica, con le carrozze di legno. In cima ci sono un giardino botanico alpino, una piattaforma sospesa e la vista su Eiger, Mönch e Jungfrau da una parte e sul Lago di Thun dall'altra. Da qui parte la traversata a piedi verso il First.",
        come: "Treno a cremagliera da Wilderswil, a 5 minuti di treno da Interlaken Ost.",
        quando: "Mattina con cielo sereno; il giardino è al meglio a luglio.",
        tempo: "mezza giornata",
        costo: "68 CHF (circa 73 €) andata e ritorno.",
        orari: "Da metà giugno a fine ottobre.",
        lat: 46.65226,
        lng: 7.91117,
        url: "https://www.jungfrau.ch/en-gb/schynige-platte/"
      },
      {
        nome: "Thun e il suo castello",
        testo: "La cittadina all'estremità del lago ha un centro medievale con i marciapiedi rialzati della Obere Hauptgasse e l'Aare che scorre veloce sotto i ponti coperti. In alto c'è il castello con quattro torri, uno dei complessi fortificati più antichi d'Europa, oggi museo con vista sulla città e sulle Alpi.",
        come: "Treno da Interlaken West, circa 30 minuti, oppure battello sul lago.",
        quando: "Il sabato mattina c'è il mercato in centro.",
        tempo: "mezza giornata",
        orari: "Castello chiuso da novembre a gennaio.",
        lat: 46.75992,
        lng: 7.62972,
        url: "https://schlossthun.ch/en/"
      },
      {
        nome: "Castello di Oberhofen",
        testo: "Un castello con la torretta che entra nell'acqua del Lago di Thun, circondato da un parco con alberi secolari affacciato sul lago. Dentro ci sono stanze arredate dal Medioevo all'Ottocento. È la fermata più fotogenica del giro in battello.",
        come: "Battello da Interlaken West o da Thun, oppure bus da Thun.",
        quando: "Estate, nel tardo pomeriggio per la luce sul lago.",
        tempo: "1-2 ore",
        lat: 46.72968,
        lng: 7.66857,
        url: "https://www.schlossoberhofen.ch/"
      },
      {
        nome: "Spiez e il castello",
        testo: "Il castello di Spiez sta su un promontorio sopra una baia con il porticciolo e i vigneti in pendenza. Si visitano le sale e la torre, poi si scende al lago a piedi fra le vigne.",
        come: "Treno da Interlaken West, circa 20 minuti, o battello.",
        quando: "Da maggio a ottobre, quando il castello è aperto.",
        tempo: "2 ore",
        orari: "Dal 1° maggio al 31 ottobre: lunedì 14-17, da martedì a domenica 10-17; luglio e agosto tutti i giorni fino alle 18. Chiuso dal 1° novembre 2026 al 30 aprile 2027.",
        lat: 46.68938,
        lng: 7.68747,
        url: "https://www.schloss-spiez.ch/en/"
      },
      {
        nome: "Grotte di San Beato (St. Beatus-Höhlen)",
        testo: "Grotte carsiche con stalattiti, laghetti e cascate interne, percorribili su un sentiero illuminato di circa un chilometro. All'ingresso c'è un piccolo museo delle grotte. Dentro la temperatura resta fra 8 e 10 gradi in ogni stagione.",
        come: "Bus 21 da Interlaken verso Thun, fermata Beatushöhlen, oppure battello sul Lago di Thun.",
        quando: "Nei giorni di pioggia, quando le cime sono coperte.",
        tempo: "1 ora e mezza",
        costo: "Adulti 20 CHF (circa 21 €), bambini 6-16 anni 12 CHF.",
        orari: "Aperte tutto l'anno.",
        lat: 46.68467,
        lng: 7.78231,
        url: "https://www.beatushoehlen.swiss/en/",
        consiglio: "Serve una giacca anche in agosto."
      },
      {
        nome: "Brienz e la ferrovia del Rothorn",
        testo: "Brienz è il paese degli intagliatori del legno, con le case di legno scuro sul lungolago. Dalla stazione parte la cremagliera a vapore del Brienzer Rothorn, che sale a 2.244 metri con vista sul lago e sulle Alpi Bernesi.",
        come: "Treno o battello da Interlaken Ost fino a Brienz; la cremagliera parte di fronte alla stazione.",
        quando: "Da giugno, quando i treni arrivano in vetta.",
        tempo: "mezza giornata",
        orari: "Stagione 2027 dall'8 maggio fino alla stazione intermedia di Planalp; dal 5 giugno otto corse al giorno fino in vetta. Ferma in inverno.",
        lat: 46.75508,
        lng: 8.03889,
        url: "https://brienz-rothorn-bahn.ch/en/"
      },
      {
        nome: "Museo all'aperto del Ballenberg",
        testo: "Più di cento case rurali smontate in tutta la Svizzera e ricostruite in un grande parco nel bosco, con animali da fattoria, orti e artigiani al lavoro. Racconta in una giornata come si viveva in ogni cantone.",
        come: "Treno per Brienz, poi bus fino a uno dei due ingressi.",
        quando: "Da aprile a ottobre; con i bambini è la gita più adatta.",
        tempo: "una giornata",
        orari: "Chiuso in inverno; riapre tutti i giorni dal 15 aprile 2027.",
        lat: 46.7487,
        lng: 8.0804,
        url: "https://www.ballenberg.ch/en/",
        consiglio: "Il parco è grande: scegliere in anticipo le zone da vedere."
      },
      {
        nome: "Unterseen, la città vecchia",
        testo: "Al di là dell'Aare, a cinque minuti dal centro, Unterseen conserva la piazza dello Stadthaus, la chiesa con il campanile medievale e case di legno del Seicento. È la parte più tranquilla e antica di Interlaken.",
        come: "A piedi da Interlaken West attraversando il ponte sull'Aare.",
        quando: "Mattina o sera, per un giro breve.",
        tempo: "45 minuti",
        costo: "Gratuito.",
        orari: "Sempre accessibile.",
        lat: 46.68692,
        lng: 7.8494
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Harder Kulm in mattinata",
          "Battello sul Lago di Brienz fino al Giessbach",
          "Sosta a Iseltwald al ritorno",
          "Tramonto sulla Höhematte e cena a Interlaken"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Harder Kulm, Lago di Brienz, Giessbach e Iseltwald",
          "Giorno 2: Lago di Thun in battello con soste a Oberhofen e Spiez, rientro in treno; sera a Unterseen"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Harder Kulm, Höheweg e Unterseen",
          "Giorno 2: Schynige Platte al mattino, pomeriggio sul Lago di Brienz con Giessbach e Iseltwald",
          "Giorno 3: Lago di Thun con il castello di Thun e Oberhofen, oppure Brienz con il Rothorn o il Ballenberg; se piove, grotte di San Beato"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        testo: "Treni verso tutte le valli. Prezzi alti e centro molto turistico, ma comodo se non si ha l'auto.",
        perChi: "chi vuole una base comoda",
        fascia: "150-300 €"
      },
      {
        nome: "Brienz e Iseltwald",
        testo: "Sul lago di Brienz, con meno folla; le mete delle valli vanno raggiunte in auto o in treno.",
        perChi: "chi cerca silenzio",
        fascia: "130-260 €"
      },
      {
        nome: "Thun e Spiez",
        testo: "Sul Lago di Thun, con centro storico, ristoranti e collegamenti ferroviari diretti con Berna e Interlaken. Le valli della Jungfrau restano a 45-60 minuti.",
        perChi: "chi vuole una città vera e prezzi un po' più bassi",
        fascia: "120-240 €"
      },
      {
        nome: "Campeggi sui due laghi",
        testo: "Fra Unterseen, Bönigen e le rive dei laghi ci sono diversi campeggi a pochi minuti dal centro, la soluzione più economica della zona. In bassa stagione i campeggi TCS hanno offerte da circa 25 CHF a notte per due persone.",
        perChi: "chi viaggia in van o in tenda",
        fascia: "piazzola 35-50 CHF (circa 37-53 €)"
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patate grattugiate e fritte, spesso con uovo o formaggio, la base della cucina svizzera tedesca."
      },
      {
        nome: "Fondue al formaggio",
        testo: "Gruyère ed Emmental fusi, da mangiare con pane in pentole comuni."
      },
      {
        nome: "Cioccolato svizzero",
        testo: "Dai negozi della città e dai supermercati Coop e Migros, il più economico."
      }
    ],
    attenzioni: [
      "I prezzi sono molto alti: pranzare nei supermercati Coop e Migros riduce la spesa.",
      "Il biglietto dei battelli è compreso nello Swiss Travel Pass: controllare prima di pagare.",
      "Per spostarsi in auto serve la vignetta autostradale, da acquistare alla frontiera o online."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Interlaken?",
        risposta: "Due giorni bastano per i due laghi e l'Harder Kulm. Con tre o quattro giorni Interlaken diventa la base per Lauterbrunnen, Grindelwald e il Jungfraujoch."
      },
      {
        domanda: "Meglio dormire a Interlaken, Grindelwald o Lauterbrunnen?",
        risposta: "Interlaken è la più comoda senza auto, con treni verso tutte le valli e più scelta di alloggi. Grindelwald e Lauterbrunnen sono più belle la sera ma costano di più e allungano i trasferimenti verso i laghi."
      },
      {
        domanda: "Conviene il Jungfrau Travel Pass?",
        risposta: "Parte da 165 CHF (circa 177 €) per 3 giorni, battelli compresi. Conviene a chi sale su almeno due o tre impianti, ad esempio First, Schynige Platte e Harder Kulm; per il Jungfraujoch dà solo uno sconto."
      },
      {
        domanda: "Bisogna prenotare il Jungfraujoch?",
        risposta: "Non è obbligatorio fuori dai giorni di punta estivi, ma online si paga meno. La prenotazione del posto costa 10 CHF e garantisce la fascia oraria."
      },
      {
        domanda: "Cosa si può fare a Interlaken in inverno?",
        risposta: "Molto resta chiuso fino alla primavera: castello di Spiez, Ballenberg e ferrovia del Rothorn. Le grotte di San Beato sono aperte tutto l'anno e i treni per le valli della Jungfrau viaggiano anche d'inverno."
      },
      {
        domanda: "Si paga per il pontile di Iseltwald?",
        risposta: "Sì, dal 2023 c'è un tornello con ingresso a 5 CHF."
      }
    ],
    gite: [
      {
        nome: "Berna",
        distanza: "circa 1 ora in treno",
        come: "Treno diretto o con un cambio da Interlaken Ost o West, più corse all'ora.",
        testo: "La capitale ha un centro medievale patrimonio UNESCO con sei chilometri di portici, la Zytglogge e la fossa degli orsi sull'Aare. Si gira tutta a piedi in una giornata."
      },
      {
        nome: "Lucerna",
        distanza: "circa 2 ore in treno",
        come: "Treno panoramico Luzern-Interlaken Express da Interlaken Ost, attraverso il Brünigpass.",
        testo: "Il ponte della Cappella in legno, il lungolago e il Leone morente. Il viaggio in treno, fra laghi e il passo del Brünig, vale da solo la gita."
      },
      {
        nome: "Gola dell'Aare (Aareschlucht)",
        distanza: "circa 35 minuti in treno",
        come: "Treno diretto da Interlaken Ost a Meiringen, poi a piedi o con il trenino fino all'ingresso.",
        testo: "Una gola di 1,4 km fra pareti di roccia alte fino a 200 metri, percorsa su passerelle sopra il fiume. Si abbina a Meiringen, il paese delle meringhe e di Sherlock Holmes."
      },
      {
        nome: "Oeschinensee (Kandersteg)",
        distanza: "circa 1 ora in treno",
        come: "Treno per Kandersteg con cambio a Spiez, poi cabinovia e 20 minuti a piedi.",
        testo: "Un lago turchese chiuso da pareti di roccia verticali, fra i più belli delle Alpi Bernesi. D'estate si cammina sul sentiero alto che gira intorno al lago."
      }
    ],
    esperienzeSlugs: ['giro-battello-laghi-thun-brienz'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Interlaken vista dall\'alto, con il fiume Aare color smeraldo che attraversa la cittadina tra le montagne, nella piana tra i laghi di Thun e Brienz',
    immagine: '/images/svizzera/interlaken.jpg',
  },
  {
    slug: 'lauterbrunnen',
    paeseSlug: 'svizzera',
    ordine: 2,
    nome: 'Lauterbrunnen e la valle delle cascate',
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: '1 giorno pieno',
    visitataPersonalmente: true,
    introduzione:
      'Una gola glaciale a pareti verticali, con settantadue cascate censite nei suoi dodici chilometri. La più famosa è la Staubbach, 300 metri di salto quasi in centro al paese: ha ispirato Goethe e, secondo la tradizione locale, la valle di Rivendell nel «Signore degli Anelli».',
    percheAndarci:
      'È la valle più scenografica della regione e il punto di partenza per Mürren, Wengen e Gimmelwald, villaggi senza auto raggiungibili solo in funivia o cremagliera. E ci sono le Trümmelbachfälle, un fenomeno geologico che non ha uguali altrove.',
    cosaVedere: [
      'La cascata Staubbach, che precipita per 300 metri quasi nel centro del paese',
      'Le Trümmelbachfälle, dieci cascate glaciali che si vedono da gallerie e ascensori scavati nella montagna (vedi la scheda esperienza dedicata)',
      'I villaggi senza auto di Wengen e Gimmelwald, raggiungibili solo in funivia o cremagliera',
    ],
    cosaFare: [
      'Percorrere il fondovalle a piedi o in bici fra le cascate, su un tracciato quasi pianeggiante',
      'Salire in funivia o cremagliera verso Mürren o Wengen per la vista dall\'alto sulla gola',
      'Visitare le Trümmelbachfälle, aperte da inizio aprile a inizio novembre',
    ],
    doveDormire:
      'Campeggi attrezzati sul fondovalle. **In questa valle il campeggio libero è vietato**, con multe fino a 200 CHF, e il divieto viene fatto rispettare.',
    doveMangiare: 'Ristoranti di fondovalle con cucina svizzero-tedesca di montagna; prezzi nella media alta della regione.',
    comeArrivare: "Da Interlaken, 20 minuti d'auto o di treno. Il treno BOB parte da Interlaken Ost più volte all'ora e arriva in circa 20 minuti; dalla stazione di Lauterbrunnen partono la cremagliera per Wengen e la funivia per Grütschalp e Mürren, mentre il bus postale risale la valle fino a Stechelberg fermando alle cascate del Trümmelbach. Da Zurigo aeroporto servono circa 2 ore e mezza con cambi a Berna e Interlaken.",
    comeSpostarsi: 'Il fondovalle a piedi o in bici; per Mürren, Wengen e Gimmelwald servono funivia o cremagliera, perché l\'auto non arriva.',
    periodoMigliore: 'da giugno a settembre, con le cascate più abbondanti a inizio estate per lo scioglimento della neve.',
    costi: "Trümmelbachfälle 18 CHF ingresso adulti, 8 CHF bambini 6-15 anni. Budget giornaliero a persona: basso 100-140 € (campeggio, spesa al supermercato, cascate e sentieri gratuiti), medio 220-320 € (hotel in doppia, ristorante, una funivia), alto da 450 € in su con Schilthorn o Jungfraujoch.",
    erroriDaEvitare: [
      'Montare tavolino e sedie fuori dal van in un parcheggio non autorizzato: la polizia locale controlla proprio questo, anche dove dormire nel mezzo è tollerato',
      'Arrivare alle Trümmelbachfälle senza sapere che sono chiuse da inizio novembre a inizio aprile',
      'Non prevedere le scarpe da pioggia: le gallerie delle cascate sono umide e scivolose',
    ],
    miaEsperienza:
      "La valle di Lauterbrunnen è stata una delle tappe del nostro giro in van con gli amici, subito dopo Interlaken.",
    luoghi: [
      {
        nome: "Cascata dello Staubbach",
        testo: "Una cascata di circa 297 metri che cade da una parete a picco sul paese, spesso dispersa in nebbia dal vento.",
        come: "A piedi dalla stazione di Lauterbrunnen, pochi minuti; si guarda dal paese.",
        quando: "Mattina, con il sole che entra nella valle. Primavera per il flusso massimo.",
        tempo: "45 minuti",
        costo: "Gratuito.",
        orari: "Visibile dal paese a ogni ora.",
        lat: 46.58978,
        lng: 7.90543,
        consiglio: "Portare una giacca impermeabile: il vento porta gli spruzzi."
      },
      {
        nome: "Cascate del Trümmelbach",
        testo: "Dieci cascate glaciali che scorrono dentro la montagna, visibili da passerelle e gallerie con un ascensore in galleria. Aperto dalla primavera all'autunno; vietato a bambini sotto i 4 anni e ai cani.",
        come: "Con il bus postale da Lauterbrunnen verso Stechelberg, oppure a piedi lungo la valle.",
        quando: "Aperte all'incirca da inizio aprile a inizio novembre, dalle 9 alle 17 (luglio e agosto 8.30-18).",
        tempo: "1-1 ora e mezza",
        costo: "Adulti 18 CHF (circa 19 €), bambini 6-15 anni 8 CHF; nessuna tariffa di gruppo.",
        orari: "Da inizio aprile a inizio novembre, tutti i giorni 9-17; luglio e agosto 8.30-18. Chiuse in inverno.",
        lat: 46.57001,
        lng: 7.91321,
        url: "https://www.truemmelbachfaelle.ch/",
        consiglio: "Indossare scarpe con suola aderente: le passerelle sono bagnate."
      },
      {
        nome: "Wengen",
        testo: "Un villaggio senza auto su una terrazza alta, raggiungibile con la cremagliera. Dà accesso alla Kleine Scheidegg e alla linea per Jungfraujoch.",
        come: "Treno a cremagliera da Lauterbrunnen.",
        quando: "Tutto l'anno.",
        tempo: "2 ore",
        orari: "Treni da Lauterbrunnen tutto l'anno, circa 11 minuti di viaggio.",
        lat: 46.60544,
        lng: 7.92172,
        consiglio: "Partire da qui per la camminata verso Männlichen, con la vista sul gruppo dell'Eiger."
      },
      {
        nome: "La valle a piedi fino a Stechelberg",
        testo: "Il sentiero piano di fondovalle che segue il torrente da Lauterbrunnen verso Stechelberg, tra prati e pareti di roccia da cui scendono decine di cascate. Si passa vicino al Trümmelbach e alla partenza della funivia per Mürren. È la camminata più facile della regione e mostra perché la valle è famosa.",
        come: "Si parte a piedi dal paese; per tornare c'è il bus postale lungo la strada della valle.",
        quando: "Da maggio a ottobre; dopo giorni di pioggia le cascate sono più piene.",
        tempo: "2-3 ore a piedi",
        costo: "Gratuito.",
        orari: "Sentiero sempre accessibile.",
        lat: 46.54502,
        lng: 7.9022,
        consiglio: "Andare a piedi e tornare in bus: il sentiero è in leggera salita verso Stechelberg."
      },
      {
        nome: "Cascata del Mürrenbach",
        testo: "Una delle cascate più alte della Svizzera, circa 417 metri in più salti, che scende dalla terrazza di Mürren verso Stechelberg. Dal fondovalle si vede intera; la via ferrata Mürren-Gimmelwald la attraversa con un ponte sospeso.",
        come: "Dal sentiero di fondovalle vicino a Stechelberg, a piedi o con il bus postale fino alla Schilthornbahn.",
        quando: "Da maggio a luglio, con lo scioglimento della neve.",
        tempo: "30 minuti di sosta",
        costo: "Gratuito.",
        orari: "Sempre visibile.",
        lat: 46.55542,
        lng: 7.89666
      },
      {
        nome: "Grütschalp e il sentiero per Mürren",
        testo: "Una funivia sale da Lauterbrunnen a Grütschalp, da dove un trenino corre in piano fino a Mürren. Il sentiero accanto ai binari è una delle camminate più panoramiche della valle: per tutto il percorso si hanno davanti Eiger, Mönch e Jungfrau.",
        come: "Funivia dalla stazione di Lauterbrunnen, di fronte ai binari BOB; poi a piedi o in treno fino a Mürren.",
        quando: "Da giugno a ottobre, di mattina.",
        tempo: "1 ora e mezza a piedi",
        lat: 46.59656,
        lng: 7.89071,
        consiglio: "Salire in funivia e camminare verso Mürren, poi scendere via Gimmelwald e Stechelberg per fare un anello."
      },
      {
        nome: "Isenfluh e Sulwald",
        testo: "Un minuscolo villaggio su una terrazza sopra l'ingresso della valle, con una piccola funivia che sale a Sulwald. Da lassù si scende in monopattino o si cammina verso la Lobhornhütte, con molta meno gente che a Mürren.",
        come: "Strada stretta da Lauterbrunnen o bus postale, poi la funivia Isenfluh-Sulwald.",
        quando: "Estate e inizio autunno.",
        tempo: "mezza giornata",
        orari: "Funivia in servizio tutto l'anno salvo la revisione (2-6 novembre 2026); monopattini fino al 1° novembre 2026.",
        lat: 46.62011,
        lng: 7.89617,
        url: "https://isenfluh.ch/"
      },
      {
        nome: "Obersteinberg e la valle alta",
        testo: "Oltre Stechelberg la valle diventa riserva naturale, senza strade, chiusa dai ghiacciai del Breithorn e del Tschingelhorn. Il sentiero sale fino a una vecchia locanda di montagna, a Obersteinberg, con vista sulle cascate che scendono dai ghiacciai.",
        come: "A piedi da Stechelberg, capolinea del bus postale.",
        quando: "Da giugno a settembre.",
        tempo: "una giornata, circa 5-6 ore andata e ritorno",
        costo: "Gratuito.",
        lat: 46.51854,
        lng: 7.88542,
        consiglio: "Per escursionisti allenati: il dislivello supera gli 800 metri."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Staubbach al mattino",
          "Valle a piedi fino al Trümmelbach",
          "Cascata del Mürrenbach e bus per tornare",
          "Pomeriggio a Wengen in cremagliera"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Staubbach, Trümmelbach e valle a piedi fino a Stechelberg",
          "Giorno 2: funivia per Grütschalp, sentiero fino a Mürren, discesa via Gimmelwald; sera a Wengen"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Staubbach, Trümmelbach e Mürrenbach",
          "Giorno 2: Grütschalp, Mürren e Schilthorn",
          "Giorno 3: Wengen e Kleine Scheidegg, oppure l'escursione a Obersteinberg; con tempo incerto Isenfluh e Sulwald"
        ]
      }
    ],
    zone: [
      {
        nome: "Lauterbrunnen",
        testo: "Campeggi e alloggi nel fondovalle, quasi senza auto di notte; più freddo e meno vita serale.",
        perChi: "chi vuole stare nella valle",
        fascia: "120-260 €"
      },
      {
        nome: "Wengen e Mürren",
        testo: "Senza auto, con viste dall'alto, ma da raggiungere con cremagliera o funivia con i bagagli.",
        perChi: "chi cerca villaggi sull'altopiano",
        fascia: "160-320 €"
      },
      {
        nome: "Interlaken",
        testo: "A 20 minuti di treno, con molti più alloggi e ristoranti. Si perde la valle di sera, ma si guadagna nei collegamenti verso laghi e Grindelwald.",
        perChi: "chi vuole più scelta e prezzi un po' più bassi",
        fascia: "150-300 €"
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patate fritte, con formaggio o salsiccia."
      },
      {
        nome: "Älplermagronen",
        testo: "Pasta, patate, formaggio e cipolle fritte, piatto di malga."
      },
      {
        nome: "Formaggi d'alpeggio",
        testo: "Si comprano nei piccoli negozi e dai produttori."
      }
    ],
    attenzioni: [
      "Le mucche pascolano sui sentieri: non avvicinarsi alle madri con i vitelli.",
      "Il tempo cambia in fretta: nebbia e pioggia possono nascondere le cascate in alto."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Lauterbrunnen?",
        risposta: "Un giorno per le cascate del fondovalle e Wengen. Con due o tre giorni si aggiungono Mürren, lo Schilthorn e una vera escursione come Obersteinberg."
      },
      {
        domanda: "Si può dormire in van nella valle di Lauterbrunnen?",
        risposta: "No: campeggio libero e sosta notturna fuori dalle aree autorizzate sono vietati, con multe fino a 200 CHF. Si dorme nei campeggi del fondovalle."
      },
      {
        domanda: "Le cascate del Trümmelbach sono aperte in inverno?",
        risposta: "No, aprono da inizio aprile a inizio novembre. Lo Staubbach invece si vede tutto l'anno, anche se d'inverno ha poca acqua."
      },
      {
        domanda: "Quando le cascate sono più belle?",
        risposta: "Fra maggio e luglio, con lo scioglimento della neve, e dopo qualche giorno di pioggia. A fine estate la portata cala."
      },
      {
        domanda: "Serve l'auto a Lauterbrunnen?",
        risposta: "No. Il fondovalle si gira a piedi e in bus postale, e Wengen e Mürren si raggiungono solo in treno o funivia perché sono chiusi alle auto."
      }
    ],
    gite: [
      {
        nome: "Mürren e lo Schilthorn",
        distanza: "circa 20 minuti fra funivia e treno",
        come: "Funivia per Grütschalp e treno fino a Mürren; per lo Schilthorn funivia da Mürren o da Stechelberg.",
        testo: "Il villaggio senza auto con la vista più aperta sulla Jungfrau e, sopra, il Piz Gloria a 2.970 metri con il ristorante girevole."
      },
      {
        nome: "Kleine Scheidegg e Jungfraujoch",
        distanza: "circa 45 minuti fino alla Kleine Scheidegg",
        come: "Cremagliera da Lauterbrunnen via Wengen; da lì il treno della Jungfrau prosegue fino in cima.",
        testo: "La salita classica alla Jungfrau dal lato di Lauterbrunnen. Anche solo fino alla Kleine Scheidegg è una giornata di panorami e sentieri facili."
      },
      {
        nome: "Interlaken e i laghi",
        distanza: "circa 20 minuti in treno",
        come: "Treno BOB diretto fino a Interlaken Ost.",
        testo: "Harder Kulm, battello sul Lago di Brienz e Iseltwald: la giornata giusta quando le nuvole coprono le cime."
      }
    ],
    esperienzeSlugs: ['trummelbachfalle'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La cascata Staubbach che precipita dalla parete di roccia sopra gli chalet di Lauterbrunnen, tra le nuvole basse, in toni quasi monocromi',
    immagine: '/images/svizzera/lauterbrunnen.jpg',
  },
  {
    slug: 'grindelwald',
    paeseSlug: 'svizzera',
    ordine: 3,
    nome: 'Grindelwald e il First',
    tipologia: ['montagna', 'panorama', 'famiglia'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'Ai piedi della parete nord dell\'Eiger, Grindelwald è il villaggio più «da cartolina» della regione. Da qui parte la funivia per il First, dove il Cliff Walk regala uno dei panorami più fotografati delle Alpi Bernesi senza nessuna camminata impegnativa.',
    percheAndarci:
      'È il modo più semplice di avvicinarsi all\'Eiger senza un dislivello serio, e il First va bene sia per chi cammina fino al Bachalpsee sia per chi vuole solo il panorama dalla funivia.',
    cosaVedere: [
      'La parete nord dell\'Eiger, visibile da tutto il paese',
      'Il First Cliff Walk, una passerella metallica a sbalzo sulla parete rocciosa',
      'Il Bachalpsee, un laghetto alpino che riflette Eiger, Mönch e Jungfrau nelle giornate senza vento',
    ],
    cosaFare: [
      'Salire in funivia al First e percorrere il Cliff Walk, incluso nel biglietto e ripetibile quante volte si vuole',
      'Camminare fino al Bachalpsee, 2-3 ore andata e ritorno con dislivello moderato',
      'Provare lo zipline First Flyer, attività extra a pagamento sul posto',
    ],
    doveDormire: 'Campeggi in zona, più economici di Interlaken ma con meno scelta.',
    doveMangiare: 'Ristoranti di montagna con vista sull\'Eiger, prezzi allineati al resto della regione.',
    comeArrivare: "Da Interlaken, 20 minuti d'auto o di treno. Il treno BOB diretto da Interlaken Ost impiega circa 35 minuti e ferma sia a Grindelwald Terminal (Eiger Express e cabinovia del Männlichen) sia alla stazione del paese, a pochi minuti dalla funivia del First. Da Zurigo aeroporto si arriva in circa 2 ore e mezza-3 ore con cambi a Berna e Interlaken. In auto c'è un parcheggio coperto al Terminal.",
    comeSpostarsi: 'Il paese si gira a piedi; per il First e il Bachalpsee serve la funivia.',
    periodoMigliore: 'da giugno a settembre; il Bachalpsee resta spesso ghiacciato fino a giugno inoltrato.',
    costi: "Funivia First 72-76 CHF A/R secondo la stagione; Cliff Walk incluso. Budget giornaliero a persona: basso 110-150 € (ostello o campeggio, spesa al supermercato, un impianto), medio 230-330 € (hotel di fascia media in doppia, ristorante, First o Männlichen), alto da 450 € in su, Jungfraujoch compreso.",
    erroriDaEvitare: [
      'Salire al First credendo che il Bachalpsee sia «dietro l\'angolo»: la camminata richiede 2-3 ore andata e ritorno',
      'Sottovalutare il vento in cima, che sul Cliff Walk può essere forte anche con cielo sereno a valle',
    ],
    miaEsperienza:
      "Grindelwald e il First sono stati una delle tappe del nostro giro in van con gli amici nella Jungfrau Region.",
    luoghi: [
      {
        nome: "First e il Cliff Walk",
        testo: "Dalla funivia di Grindelwald si sale al First, a 2.166 metri, con vista su Eiger, Mönch e Jungfrau. Il Cliff Walk è una passerella metallica di 45 metri sospesa sul vuoto, lungo la parete.",
        come: "Funivia da Grindelwald, circa 25 minuti con fermate a Bort e Schreckfeld. Il Cliff Walk è incluso nel biglietto.",
        quando: "Mattina, con il cielo più limpido. Chiusure e orari variano con la stagione.",
        tempo: "2-3 ore",
        costo: "72-76 CHF (circa 77-81 €) andata e ritorno secondo la stagione; Cliff Walk incluso.",
        lat: 46.66033,
        lng: 8.05301,
        url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/",
        consiglio: "La prima cabina del mattino ha meno coda; i ghiacciai si vedono meglio prima di mezzogiorno."
      },
      {
        nome: "Bachalpsee",
        testo: "Un lago d'alta quota che riflette il Wetterhorn e lo Schreckhorn. Dal First il sentiero è facile, in leggera salita.",
        come: "A piedi dalla stazione del First sul sentiero segnalato.",
        quando: "Mattina, quando l'acqua è ferma e specchia le montagne.",
        tempo: "2 ore andata e ritorno",
        costo: "Gratuito (serve il biglietto della funivia per il First).",
        orari: "Sentiero percorribile da giugno a ottobre, con la neve sciolta.",
        lat: 46.66958,
        lng: 8.02095,
        consiglio: "Portare uno strato caldo: soffia il vento, anche in luglio."
      },
      {
        nome: "Eiger Express e Eigergletscher",
        testo: "La cabinovia aperta nel 2020 sale in circa 15 minuti dal Grindelwald Terminal alla stazione di Eigergletscher, sotto la parete nord dell'Eiger. Lassù si prende il treno per il Jungfraujoch oppure si scende a piedi lungo l'Eiger Trail.",
        come: "Treno BOB da Interlaken Ost fino a Grindelwald Terminal, dove c'è anche il parcheggio coperto.",
        quando: "Con le prime corse del mattino, prima che si formino le nuvole sulla parete.",
        tempo: "15 minuti di salita, poi dipende dalla meta",
        costo: "Compresa nel biglietto per il Jungfraujoch, che online parte da 100,60 CHF (circa 108 €, tariffa più bassa).",
        lat: 46.62448,
        lng: 8.02028,
        url: "https://www.jungfrau.ch/en-gb/"
      },
      {
        nome: "Männlichen e il sentiero panoramico",
        testo: "La cresta tra Grindelwald e Wengen, raggiunta in cabinovia dal Grindelwald Terminal. Dalla stazione si sale in pochi minuti al belvedere a forma di corona del Royal Walk, poi parte il sentiero panoramico verso la Kleine Scheidegg, quasi tutto in discesa e di fronte a Eiger, Mönch e Jungfrau.",
        come: "Cabinovia Männlichen dal Grindelwald Terminal; dalla Kleine Scheidegg si torna in treno a Grindelwald o a Wengen.",
        quando: "Estate, di mattina; orari e chiusure stagionali della cabinovia sul sito ufficiale.",
        tempo: "mezza giornata",
        orari: "Estate fino a inizio novembre; chiusa per manutenzione dal 6 novembre 2026, riapre il 12 dicembre 2026 per l'inverno.",
        lat: 46.61814,
        lng: 7.93804,
        url: "https://maennlichen.ch/en/",
        consiglio: "Fare il sentiero in direzione Kleine Scheidegg: si cammina sempre con le tre vette davanti."
      },
      {
        nome: "Kleine Scheidegg",
        testo: "Il passo a 2.061 metri fra Grindelwald e Wengen, ai piedi di Eiger, Mönch e Jungfrau. È lo snodo dei treni a cremagliera e l'arrivo del sentiero panoramico dal Männlichen; d'estate i prati intorno sono pieni di escursionisti.",
        come: "Treno a cremagliera WAB da Grindelwald, circa 30 minuti, o da Wengen.",
        quando: "Estate; d'inverno è in mezzo alle piste.",
        tempo: "1-2 ore, di più se si cammina",
        lat: 46.58525,
        lng: 7.96131,
        consiglio: "Scendere a piedi fino ad Alpiglen o a Wengernalp e riprendere lì il treno."
      },
      {
        nome: "Eiger Trail",
        testo: "Il sentiero che scende da Eigergletscher ad Alpiglen correndo proprio sotto la parete nord dell'Eiger, la più famosa della storia dell'alpinismo. Si cammina su ghiaioni e prati con la valle di Grindelwald sotto i piedi.",
        come: "Eiger Express fino a Eigergletscher, poi a piedi; da Alpiglen si torna a Grindelwald in treno.",
        quando: "Da luglio a settembre, quando il sentiero è libero dalla neve.",
        tempo: "circa 2 ore e mezza",
        costo: "Gratuito il sentiero; si pagano gli impianti.",
        lat: 46.56846,
        lng: 7.9882,
        consiglio: "Farlo in discesa: in salita è molto più faticoso."
      },
      {
        nome: "Ghiacciaio inferiore (Unterer Gletscher)",
        testo: "Il ghiacciaio che scende fino alla valle sopra Grindelwald, con una gola profonda scavata dal fiume. Si arriva a piedi dal paese.",
        come: "A piedi dal paese o con la funivia della Pfingstegg.",
        quando: "Estate.",
        tempo: "2-3 ore",
        orari: "La gola chiude in inverno; aperta dalla primavera all'autunno.",
        lat: 46.611,
        lng: 8.05029,
        consiglio: "Non salire sul ghiaccio senza guida: ci sono crepacci nascosti."
      },
      {
        nome: "Pfingstegg",
        testo: "Una piccola funivia sale dal paese a una terrazza a 1.391 metri sopra il ghiacciaio inferiore, con slittovia estiva, una teleferica a zip line e un ristorante. Da qui partono sentieri facili verso il ghiacciaio e la Bäregg.",
        come: "A piedi dal centro fino alla stazione a valle, circa 15 minuti, o bus fino alla fermata Pfingsteggbahn.",
        quando: "Pomeriggio, con i bambini.",
        tempo: "2-3 ore",
        orari: "Stagione estiva 2026 dal 25 aprile al 25 ottobre; chiusa in inverno.",
        lat: 46.61752,
        lng: 8.05686,
        url: "https://www.pfingstegg.ch/en/"
      },
      {
        nome: "First Flyer, Glider, Mountain Cart e Trottibike",
        testo: "Le attività di discesa del First: una zip line lunga sopra i prati, un deltaplano trainato a forma d'aquila, i carrelli a tre ruote e i monopattini da montagna per scendere a valle lungo strade sterrate. Si fanno lungo le fermate intermedie della funivia, Schreckfeld e Bort.",
        come: "Funivia del First; biglietti alla stazione a valle.",
        quando: "Estate, con tempo asciutto.",
        tempo: "mezza giornata",
        costo: "First Adventure Package da 60 CHF (circa 64 €) per due attività, salite in funivia illimitate.",
        lat: 46.64672,
        lng: 8.05177,
        url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/",
        consiglio: "Nei weekend di luglio e agosto c'è coda al Flyer: farlo per primo."
      },
      {
        nome: "Grosse Scheidegg",
        testo: "Il passo a 1.962 metri verso Meiringen, chiuso al traffico privato, con il Wetterhorn che sembra cadere sulla strada. Si raggiunge in bus d'estate oppure a piedi dal First, su un sentiero quasi pianeggiante con vista continua sulla valle.",
        come: "Bus postale estivo da Grindelwald, oppure a piedi dal First in circa 1 ora e mezza.",
        quando: "Da giugno a settembre, quando il bus è in servizio.",
        tempo: "mezza giornata",
        costo: "Gratuito a piedi; il bus si paga a parte.",
        lat: 46.65588,
        lng: 8.10187
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Funivia al First con la prima corsa",
          "Cliff Walk e camminata al Bachalpsee",
          "Discesa con First Flyer o Mountain Cart",
          "Pomeriggio alla gola del ghiacciaio inferiore",
          "Cena in paese"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: First, Cliff Walk, Bachalpsee e attività di discesa",
          "Giorno 2: Männlichen in cabinovia, sentiero panoramico fino alla Kleine Scheidegg, rientro in treno; sera a Pfingstegg"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: First, Cliff Walk e Bachalpsee, poi Grosse Scheidegg a piedi",
          "Giorno 2: Männlichen e Kleine Scheidegg, discesa a piedi verso Alpiglen",
          "Giorno 3: Eiger Express fino a Eigergletscher e Eiger Trail; oppure Jungfraujoch con le prime corse"
        ]
      }
    ],
    zone: [
      {
        nome: "Grindelwald",
        testo: "Il paese si trova ai piedi della parete nord dell'Eiger, con servizi e accesso diretto alle funivie.",
        perChi: "chi vuole fare escursioni",
        fascia: "130-280 €"
      },
      {
        nome: "Interlaken",
        testo: "Treno diretto da Interlaken Ost, con più scelta di alloggi.",
        perChi: "chi vuole risparmiare",
        fascia: "150-300 €"
      },
      {
        nome: "Ostelli e pensioni di Grindelwald",
        testo: "In paese ci sono ostelli e piccole pensioni con camere doppie semplici, spesso con cucina in comune. Si prenotano presto per luglio e agosto.",
        perChi: "chi viaggia con un budget stretto",
        fascia: "80-150 €"
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patate fritte, con uova o formaggio, nei ristoranti d'alpe."
      },
      {
        nome: "Fondue",
        testo: "Formaggio fuso in pentola, in rifugi e ristoranti del paese."
      },
      {
        nome: "Meringata con panna",
        testo: "Un dolce di meringhe e panna di montagna."
      }
    ],
    attenzioni: [
      "Con nuvole basse la vista dal First sparisce: controllare le webcam prima di comprare il biglietto.",
      "Le passerelle del Cliff Walk non sono adatte a chi soffre di vertigini.",
      "I sentieri si innevano da ottobre; verificare lo stato dei sentieri."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Grindelwald?",
        risposta: "Un giorno basta per First, Cliff Walk e Bachalpsee. Con due o tre giorni si aggiungono Männlichen, Kleine Scheidegg, l'Eiger Trail o il Jungfraujoch."
      },
      {
        domanda: "Meglio Grindelwald o Lauterbrunnen come base?",
        risposta: "Grindelwald ha più servizi, la vista sull'Eiger e l'accesso diretto a First ed Eiger Express. Lauterbrunnen è più piccola e comoda per Mürren, Wengen e le cascate."
      },
      {
        domanda: "Quanto costa salire al First?",
        risposta: "L'andata e ritorno costa 72-76 CHF (circa 77-81 €) secondo la stagione, con il Cliff Walk compreso. Con Swiss Travel Pass o abbonamento metà prezzo si paga meno."
      },
      {
        domanda: "Quanto ci vuole a piedi dal First al Bachalpsee?",
        risposta: "Circa un'ora per andare e una per tornare, su sentiero facile in leggera salita. A inizio estate il lago può essere ancora ghiacciato."
      },
      {
        domanda: "Il Cliff Walk è adatto ai bambini?",
        risposta: "Sì, la passerella ha parapetti alti ed è inclusa nel biglietto. Con vento forte può fare impressione."
      }
    ],
    gite: [
      {
        nome: "Jungfraujoch",
        distanza: "circa 45 minuti fra cabinovia e treno",
        come: "Eiger Express dal Grindelwald Terminal fino a Eigergletscher, poi la ferrovia della Jungfrau dentro la montagna.",
        testo: "La stazione più alta d'Europa, a 3.454 metri, con il ghiacciaio dell'Aletsch e il palazzo di ghiaccio. Conviene partire con le prime corse e tenere un giorno di margine per il meteo."
      },
      {
        nome: "Wengen e Lauterbrunnen",
        distanza: "circa 1 ora e un quarto in treno",
        come: "Cremagliera da Grindelwald alla Kleine Scheidegg, poi giù verso Wengen e Lauterbrunnen.",
        testo: "Il giro classico della Jungfrau: si sale da una valle e si scende nell'altra, con il villaggio senza auto di Wengen e le cascate di Lauterbrunnen. Da Lauterbrunnen si torna via Interlaken."
      },
      {
        nome: "Interlaken e i laghi",
        distanza: "circa 35 minuti in treno",
        come: "Treno BOB diretto da Grindelwald a Interlaken Ost.",
        testo: "Per una giornata più tranquilla o con meteo incerto in quota: battello sul Lago di Brienz, Harder Kulm e il centro di Interlaken."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La parete nord dell\'Eiger innevata che domina il villaggio di Grindelwald, con chalet e prati verdi ai suoi piedi',
    immagine: '/images/svizzera/grindelwald.jpg',
  },
  {
    slug: 'jungfraujoch',
    paeseSlug: 'svizzera',
    ordine: 4,
    nome: 'Jungfraujoch, il Top of Europe',
    tipologia: ['ghiacciaio', 'panorama', 'esperienza unica'],
    giorniConsigliati: '1 giorno intero',
    visitataPersonalmente: true,
    introduzione:
      'La stazione ferroviaria più alta d\'Europa, a 3.454 metri. Ci arriva una cremagliera scavata quasi tutta nella roccia dell\'Eiger e del Mönch fra il 1896 e il 1912. In cima c\'è il ghiacciaio dell\'Aletsch, il più lungo delle Alpi.',
    percheAndarci:
      'È l\'unico punto di questa guida dove si sta oltre i 3.400 metri senza un\'escursione impegnativa, davanti al ghiacciaio più lungo delle Alpi. È anche il biglietto più caro del viaggio: va trattato come la giornata principale.',
    cosaVedere: [
      'Il ghiacciaio dell\'Aletsch, il più esteso delle Alpi, patrimonio UNESCO',
      'Il palazzo di ghiaccio scavato nel permafrost',
      'Le terrazze panoramiche, da cui nelle giornate limpide si vede fino alla Foresta Nera',
    ],
    cosaFare: [
      'Salire con la cremagliera da Interlaken Ost, partendo presto per avere più probabilità di cielo sereno',
      'Camminare sul primo tratto del ghiacciaio dell\'Aletsch, dove segnalato e in sicurezza',
      'Visitare il palazzo di ghiaccio, incluso nel biglietto',
    ],
    doveDormire: 'Non si pernotta in quota: è una gita di giornata da Interlaken o dalle valli vicine.',
    doveMangiare: 'Ristoranti self-service in stazione, prezzi da zona di alta quota isolata.',
    comeArrivare: 'Treno a cremagliera da Interlaken Ost, con cambi a Grindelwald o Lauterbrunnen e a Kleine Scheidegg, circa 2h20 complessive.',
    comeSpostarsi: 'A piedi tra le terrazze e le gallerie panoramiche in quota.',
    periodoMigliore: 'tutto l\'anno, con orari e frequenze diversi fra alta e bassa stagione; di solito le mattine sono più serene dei pomeriggi.',
    costi: 'Biglietto A/R da Interlaken Ost circa 224-261 CHF secondo la stagione; Good Morning Ticket scontato per chi parte entro le 8.',
    erroriDaEvitare: [
      'Partire nel primo pomeriggio: di solito le nuvole si formano dopo mezzogiorno e coprono la vista',
      'Non prenotare online: alla cassa i biglietti costano di solito di più',
      'Sottovalutare il freddo in quota anche in piena estate: servono giacca a vento e strati anche a luglio',
    ],
    miaEsperienza:
      "Il Jungfraujoch è stato una delle tappe del nostro giro in van con gli amici: il van resta giù, in cima si sale solo in treno.",
    luoghi: [
      {
        nome: "Terrazza della Sphinx",
        testo: "L'osservatorio e la terrazza a 3.571 metri, raggiunti con un ascensore dalla stazione. Da qui si vedono l'Aletsch, il Mönch e, nelle giornate limpide, la Foresta Nera e i Vosgi.",
        come: "Ascensore veloce dalla stazione (Top of Europe) alla piattaforma.",
        quando: "Mattina, con meno nuvole. Chiusa in caso di vento forte o tempesta.",
        tempo: "45 minuti",
        costo: "Biglietto caro, con prezzi che cambiano per data e stagione; sconti con Swiss Travel Pass o abbonamento metà prezzo. Posto riservato 10 CHF; il Good Morning Ticket del primo treno ha il 15% di sconto dal 1 maggio al 31 ottobre 2026. Prezzi e offerte sul sito ufficiale.",
        url: "https://www.jungfrau.ch/",
        consiglio: "Controllare la webcam prima di partire: nelle giornate coperte non si vede nulla."
      },
      {
        nome: "Palazzo di ghiaccio",
        testo: "Un tunnel scavato nel ghiacciaio, con sculture di ghiaccio, a circa 3.450 metri. Ha pavimento scivoloso e temperatura sotto zero tutto l'anno.",
        come: "Incluso nel biglietto, accanto alla stazione.",
        quando: "Tutto l'anno.",
        tempo: "30 minuti",
        consiglio: "Indossare scarpe con suola antiscivolo e guanti."
      },
      {
        nome: "Ghiacciaio dell'Aletsch e passeggiata sul Plateau",
        testo: "Il più lungo ghiacciaio delle Alpi, oltre 20 chilometri, e il sentiero battuto sulla neve verso la capanna Mönchsjoch. La camminata è facile ma in alta quota.",
        come: "Si esce dalla stazione e si segue il sentiero segnalato sul plateau.",
        quando: "Mattina; la neve è più compatta e il tempo migliore.",
        tempo: "1 ora",
        consiglio: "L'aria è rarefatta: camminare piano e bere acqua."
      },
      {
        nome: "Fermata Eismeer",
        testo: "Sulla salita il treno corre in galleria dentro l'Eiger e il Mönch e si ferma alla stazione Eismeer, a circa 3.160 metri. Dalle vetrate scavate nella roccia si guarda il ghiacciaio sottostante. La sosta dura circa 5 minuti, ma è il momento in cui si capisce l'impresa della ferrovia, finita nel 1912.",
        come: "Breve sosta compresa nel viaggio, solo in salita.",
        quando: "Tutto l'anno.",
        tempo: "pochi minuti",
        consiglio: "Sedersi in modo da scendere subito: le vetrate sono poche e si affollano."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Partenza da Interlaken Ost entro le 8",
          "Cambio a Kleine Scheidegg",
          "Terrazza della Sphinx e palazzo di ghiaccio",
          "Passeggiata sul plateau",
          "Rientro nel primo pomeriggio"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        perChi: "chi parte la mattina presto",
        testo: "Base comoda per il primo treno; alloggi per ogni budget."
      },
      {
        nome: "Grindelwald",
        perChi: "chi vuole il treno diretto",
        testo: "Da Grindelwald si sale con la cremagliera verso Kleine Scheidegg e in meno cambi."
      }
    ],
    sapori: [
      {
        nome: "Cioccolato Lindt",
        testo: "Ce n'è un negozio in cima, caro e turistico, ma è un souvenir tipico."
      },
      {
        nome: "Rösti di montagna",
        testo: "Al self-service della stazione."
      },
      {
        nome: "Tè caldo e zuppa",
        testo: "Per scaldarsi tra le due uscite sul ghiaccio."
      }
    ],
    attenzioni: [
      "Il mal di quota può colpire anche a 3.400 metri: salire con calma, bere e fermarsi se si ha mal di testa.",
      "Il biglietto è tra i più cari del Paese: confrontare le tariffe del Good Morning Ticket.",
      "Non tenere i documenti nelle tasche esterne: vento e guanti rendono scomodo cercarli."
    ],
    esperienzeSlugs: ['jungfraujoch-top-of-europe'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il ghiacciaio dell\'Aletsch e lo Jungfraufirn visti dalla terrazza panoramica della Sphinx al Jungfraujoch',
    immagine: '/images/svizzera/jungfraujoch.jpg',
  },
  {
    slug: 'muerren-schilthorn',
    paeseSlug: 'svizzera',
    ordine: 5,
    nome: 'Mürren e lo Schilthorn',
    tipologia: ['montagna', 'panorama', 'trekking'],
    giorniConsigliati: '1 giorno, più mezza giornata per chi fa la via ferrata',
    visitataPersonalmente: true,
    introduzione:
      'Mürren è uno dei villaggi senza auto della valle di Lauterbrunnen, con una delle viste più aperte della regione su Eiger, Mönch e Jungfrau. Sopra il paese la funivia sale allo Schilthorn, dove il ristorante girevole Piz Gloria, reso famoso da un film di James Bond, guarda a 360 gradi su oltre duecento vette.',
    percheAndarci:
      'Ha lo stesso panorama di Grindelwald sulla catena Eiger-Mönch-Jungfrau, ma dal lato opposto della valle e in un paese senza auto. E da qui parte la via ferrata più nota della regione.',
    cosaVedere: [
      'Il panorama sulla catena Eiger-Mönch-Jungfrau dal paese di Mürren, senza pareti a bloccare la vista',
      'Il ristorante girevole Piz Gloria in cima allo Schilthorn, set del film «Al servizio segreto di Sua Maestà»',
      'Il villaggio di Gimmelwald, ancora più piccolo e meno turistico, raggiungibile a piedi dalla via ferrata o in funivia',
    ],
    cosaFare: [
      'Salire in funivia allo Schilthorn per il panorama a 360 gradi',
      'Percorrere la via ferrata Mürren-Gimmelwald, circa 2,2 km con un ponte sospeso di 90 metri (vedi la scheda esperienza dedicata)',
      'Camminare da Mürren a Gimmelwald per il sentiero normale, alternativa senza attrezzatura da ferrata',
    ],
    doveDormire: 'Nessun campeggio dentro Mürren (paese senza auto): si dorme nei campeggi del fondovalle a Lauterbrunnen o Stechelberg.',
    doveMangiare: 'Ristoranti di paese con cucina di montagna; il Piz Gloria in cima allo Schilthorn ha un menù turistico con prezzi da terrazza panoramica.',
    comeArrivare: 'Da Lauterbrunnen, funivia da Stechelberg oppure cremagliera via Grütschalp.',
    comeSpostarsi: 'Mürren si gira a piedi; per lo Schilthorn e per Gimmelwald servono funivia o via ferrata.',
    periodoMigliore: 'da giugno a ottobre; la via ferrata è aperta solo in questa finestra.',
    costi: 'Funivia Schilthorn circa 115 CHF A/R da Stechelberg, 91 CHF da Mürren.',
    erroriDaEvitare: [
      'Affrontare la via ferrata senza kit omologato o senza aver fatto prima un percorso più semplice',
      'Lasciare il van a Lauterbrunnen pensando di guidare fino a Mürren: il paese non è raggiungibile in auto',
    ],
    confronti: [
      {
        titolo: 'Salire allo Schilthorn da Stechelberg o da Mürren',
        introduzione:
          'La funivia per lo Schilthorn ha due punti di partenza, con una differenza di prezzo e di tempo da conoscere prima di scegliere.',
        opzioni: [
          {
            nome: 'Da Stechelberg (fondovalle)',
            sintesi: 'Il percorso completo, dal fondo della valle di Lauterbrunnen fino in cima, con un solo biglietto su più tronconi.',
            costo: 'circa 115 CHF A/R',
            durata: '32 minuti di sola andata',
            pro: ['Un unico biglietto per tutto il dislivello', 'Non richiede prima la cremagliera per Mürren'],
            contro: ['Più caro della tratta da Mürren', 'Il van deve arrivare fino a Stechelberg, ultimo tratto della valle'],
            perChi: 'Chi arriva in van fin dentro la valle e non vuole cambiare mezzo più volte.',
          },
          {
            nome: 'Da Mürren',
            sintesi: 'Si arriva prima a Mürren in cremagliera da Lauterbrunnen via Grütschalp, poi si prende la funivia più corta per lo Schilthorn.',
            costo: 'circa 91 CHF A/R da Mürren',
            durata: 'tratta più breve rispetto a Stechelberg',
            pro: ['Tratta finale più economica', 'Si passa comunque da Mürren, utile per chi vuole vedere anche il paese'],
            contro: ['Serve anche il biglietto della cremagliera fino a Mürren, quindi si risparmia meno di quanto sembri'],
            perChi: 'Chi vuole comunque fermarsi a Mürren prima o dopo la salita allo Schilthorn.',
          },
        ],
        raccomandazione:
          'Per chi ha il van e vuole vedere anche il paese di Mürren, la tratta da Stechelberg con sosta intermedia resta la più semplice da organizzare in una sola giornata.',
      },
    ],
    miaEsperienza:
      "Mürren e lo Schilthorn erano una delle zone del nostro giro in van con gli amici nella Jungfrau Region.",
    luoghi: [
      {
        nome: "Schilthorn e Piz Gloria",
        testo: "La vetta a 2.970 metri con il ristorante girevole che compare in un film di James Bond del 1969. Dalla terrazza si vedono Eiger, Mönch e Jungfrau.",
        come: "Funivia da Stechelberg (fondovalle) o da Mürren, con più tronchi.",
        quando: "Mattina, con la luce migliore. Chiusa al vento forte.",
        tempo: "2-3 ore",
        costo: "Andata e ritorno 115 CHF da Stechelberg e 91,40 CHF da Mürren, validi fino al 12/12/2026 (sito ufficiale); forti sconti con Swiss Travel Pass.",
        url: "https://www.schilthorn.ch/",
        consiglio: "Dal fondovalle la salita è più lunga ma regala vedute sulle pareti."
      },
      {
        nome: "Mürren",
        testo: "Un villaggio senza auto sull'altopiano, di fronte alla parete nord dell'Eiger. Un posto per la vista, non per i monumenti.",
        come: "Funivia da Stechelberg o treno da Grütschalp.",
        quando: "Tutto l'anno.",
        tempo: "2 ore",
        consiglio: "Camminare fino al Allmendhubel per la vista sulle montagne."
      },
      {
        nome: "Gimmelwald",
        testo: "Un minuscolo villaggio agricolo a metà parete, senza auto, raggiungibile in funivia o a piedi da Mürren. Fienili in legno e mucche al pascolo. È il punto più quieto della valle, con la stessa vista di Mürren e pochissimi posti letto.",
        come: "Sentiero in discesa da Mürren, oppure la funivia per Stechelberg, che ferma qui.",
        quando: "Estate e autunno.",
        tempo: "1 ora e mezza",
        consiglio: "È un villaggio vivo: rispettare le proprietà e non entrare nelle stalle."
      },
      {
        nome: "Birg e il Thrill Walk",
        testo: "La stazione intermedia della funivia dello Schilthorn, sospesa sopra la valle. Da qui parte il Thrill Walk, un sentiero attrezzato che scende lungo le pareti verticali della roccia. Si vede la parete nord dell'Eiger da vicino, con il vuoto sotto i piedi.",
        come: "Si scende a Birg con lo stesso biglietto della funivia dello Schilthorn.",
        quando: "Quando la funivia è aperta; con ghiaccio la passerella può essere chiusa.",
        tempo: "30-45 minuti",
        costo: "Compreso nel biglietto della funivia.",
        consiglio: "Chi soffre di vertigini può fermarsi alla terrazza della stazione, che ha la stessa vista."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Funivia per lo Schilthorn di mattina",
          "Colazione a Piz Gloria",
          "Discesa a Mürren",
          "Camminata a Gimmelwald",
          "Rientro a Stechelberg"
        ]
      }
    ],
    zone: [
      {
        nome: "Mürren",
        perChi: "chi vuole vista e silenzio",
        testo: "Sull'altopiano, senza auto; pochi servizi e prezzi alti."
      },
      {
        nome: "Lauterbrunnen",
        perChi: "chi vuole risparmiare",
        testo: "Fondovalle, più servizi e meno cari, con funivia per Mürren."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patate fritte con uovo o formaggio, nei ristoranti di Mürren."
      },
      {
        nome: "Berner Platte",
        testo: "Piatto bernese di carni miste e crauti, nelle trattorie."
      },
      {
        nome: "Fondue",
        testo: "Formaggio fuso, nei ristoranti del villaggio."
      }
    ],
    attenzioni: [
      "Con nuvole basse lo Schilthorn non si vede: controllare le webcam.",
      "La sera la funivia ferma presto: segnarsi l'ultima corsa.",
      "Gimmelwald è un villaggio residenziale: non fare rumore la sera."
    ],
    esperienzeSlugs: ['via-ferrata-muerren-gimmelwald'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Una cabina della funivia dello Schilthorn sospesa tra Mürren e Birg, sopra le pareti rocciose della valle di Lauterbrunnen',
    immagine: '/images/svizzera/muerren-schilthorn.jpg',
  },
  {
    slug: 'grimsel-furka',
    paeseSlug: 'svizzera',
    ordine: 6,
    nome: 'Grimselpass e Furkapass',
    tipologia: ['roadtrip', 'panorama', 'passi alpini'],
    giorniConsigliati: '1 giorno di trasferimento',
    visitataPersonalmente: true,
    introduzione:
      'La strada che porta dalle Alpi Bernesi al Vallese attraverso due dei passi più scenografici della Svizzera: il Grimselpass (2.164 m), fra laghi artificiali color smeraldo, e il Furkapass (2.429 m), famoso per l\'inseguimento in Aston Martin di «Goldfinger» e affacciato sulla lingua terminale del ghiacciaio del Rodano.',
    percheAndarci:
      'È la giornata di guida pura di questa guida: qui il van serve ad attraversare le Alpi, oltre che a visitarle. E collega la Jungfrau Region a Zermatt senza tornare indietro verso la pianura.',
    cosaVedere: [
      'I laghi artificiali del Grimsel, verde smeraldo fra la roccia grigia',
      'Il ghiacciaio del Rodano, visibile dal Furkapass: è in forte ritiro e d\'estate in parte coperto da teli riflettenti per rallentarne lo scioglimento',
      'L\'Hotel Belvédère, abbandonato sul Furkapass, dove è stato girato l\'inseguimento in auto di «Goldfinger»',
    ],
    cosaFare: [
      'Percorrere la strada con soste fotografiche ai punti panoramici segnalati',
      'Una breve camminata alla lingua del ghiacciaio del Rodano, dove l\'accesso è consentito',
    ],
    doveDormire: 'Nessuna sosta prevista: è una giornata di trasferimento tra la Jungfrau Region e il Vallese.',
    doveMangiare: 'Pochi rifugi e punti di ristoro sui passi, con prezzi da alta quota isolata: conviene avere provviste nel van.',
    comeArrivare: 'Da Interlaken o dalla zona di Lauterbrunnen-Mürren, circa 2-3 ore di guida con soste.',
    comeSpostarsi: 'Solo in auto o van; non esiste un collegamento pubblico diretto lungo l\'intero tracciato.',
    periodoMigliore: 'da giugno a ottobre; le date di apertura cambiano ogni anno secondo la neve rimasta.',
    costi: 'Nessun pedaggio sulla strada.',
    erroriDaEvitare: [
      'Programmare il trasferimento senza controllare prima che i due passi siano aperti, soprattutto a inizio giugno o a fine ottobre',
      'Non sapere che il Furka ha un\'alternativa in treno-navetta (Furka Autoverlad) quando il passo è chiuso alla circolazione ordinaria',
    ],
    miaEsperienza:
      "Grimselpass e Furkapass sono stati il trasferimento in van con gli amici dalla Jungfrau Region verso il Vallese, sulla strada per Zermatt.",
    luoghi: [
      {
        nome: "Passo del Grimsel",
        testo: "Un valico a 2.164 metri tra il Canton Berna e il Vallese, in un paesaggio di laghi artificiali, dighe e rocce di granito levigate dal ghiaccio. La strada ha tornanti e punti di sosta.",
        come: "In auto da Meiringen verso Gletsch. Strada aperta di norma da giugno a ottobre.",
        quando: "Mattina: meno traffico e luce migliore. Controllare l'apertura in primavera e autunno.",
        tempo: "2 ore con le soste",
        consiglio: "Fermarsi alla diga del Räterichsboden e al lago del Grimsel."
      },
      {
        nome: "Ghiacciaio del Rodano",
        testo: "La sorgente del Rodano, che scende dal ghiacciaio di fronte all'Albergo Belvédère. Una grotta di ghiaccio scavata nel ghiacciaio si visita in estate.",
        come: "Dal parcheggio di Gletsch, a pochi minuti a piedi dal Belvédère.",
        quando: "Estate.",
        tempo: "1 ora",
        consiglio: "Il ghiacciaio si è ritirato molto: i cartelli mostrano la posizione in anni diversi."
      },
      {
        nome: "Passo della Furka",
        testo: "Un valico a 2.429 metri, con tornanti ripidi e panorami sul Rodano. Il passo è stato set di un film di James Bond (Goldfinger, 1964).",
        come: "Da Gletsch in auto, salendo per i tornanti.",
        quando: "Estate.",
        tempo: "1 ora",
        consiglio: "La strada ha tratti stretti: precedenza a chi sale."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Meiringen",
          "Passo del Grimsel",
          "Gletsch e ghiacciaio del Rodano",
          "Passo della Furka",
          "Andermatt o rientro per il Susten"
        ]
      }
    ],
    zone: [
      {
        nome: "Meiringen",
        perChi: "chi arriva da Berna",
        testo: "Cittadina ai piedi del Grimsel, con alberghi per ogni budget."
      },
      {
        nome: "Andermatt",
        perChi: "chi continua verso il Ticino",
        testo: "Paese alpino sulla Furka, comodo per ripartire verso il Gottardo."
      }
    ],
    sapori: [
      {
        nome: "Älplermagronen",
        testo: "Pasta, patate e formaggio, nei rifugi."
      },
      {
        nome: "Meringata di Meiringen",
        testo: "Il dolce che la tradizione fa nascere nella cittadina, con panna."
      },
      {
        nome: "Formaggio Bergkäse",
        testo: "Formaggio d'alpeggio."
      }
    ],
    attenzioni: [
      "I passi sono chiusi da ottobre-novembre a giugno: controllare l'apertura sui siti ufficiali.",
      "Il maltempo e il ghiaccio possono chiudere il passo in giornata.",
      "Carburante: i distributori sono rari in quota, fare il pieno a valle."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La valle del Grimselpass con i laghi artificiali tra le rocce granitiche e le cime ancora innevate',
    immagine: '/images/svizzera/grimsel-furka.jpg',
  },
  {
    slug: 'zermatt',
    paeseSlug: 'svizzera',
    ordine: 7,
    nome: 'Zermatt e il Cervino',
    tipologia: ['montagna', 'panorama', 'iconico'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il punto più a sud di questa guida, e l\'unico dove il van non entra: Zermatt è chiusa al traffico privato dal 1961. In cambio c\'è il Cervino (Matterhorn), 4.478 metri di piramide di roccia quasi perfetta, visibile dal centro del paese.',
    percheAndarci:
      'Il Cervino è una delle montagne più riconoscibili al mondo. Zermatt è la zona più cara e più lontana di questa guida, ma ha punti panoramici (il Gornergrat prima di tutti) che nel resto del giro non hanno equivalenti.',
    cosaVedere: [
      'Il Cervino (Matterhorn), visibile dal centro del paese in ogni giornata serena',
      'Il Gornergrat, raggiunto dalla ferrovia a cremagliera più alta d\'Europa all\'aperto',
      'Il centro storico di Zermatt, senza traffico automobilistico, con i tradizionali fienili di legno su piedritti in pietra',
    ],
    cosaFare: [
      'Salire al Gornergrat in treno per la vista frontale sul Cervino',
      'Passeggiare nel centro di Zermatt, libero da auto',
      'Per chi ha tempo, una delle molte funivie panoramiche minori intorno al paese',
    ],
    doveDormire: 'Dentro Zermatt in van non si dorme, perché la città è chiusa al traffico privato: si dorme nel van a Täsch o si torna verso le altre zone.',
    doveMangiare: 'Ristoranti da paese turistico, fra i più cari della guida; conviene alternarli con pasti preparati nel van a Täsch.',
    comeArrivare: "Il van si lascia nel parcheggio coperto di Täsch, 5 km prima di Zermatt; da lì un treno navetta parte ogni 20 minuti. Il treno navetta da Täsch impiega circa 12 minuti. In treno da Zurigo aeroporto si arriva in circa 3 ore e 40 con cambi a Visp, da Interlaken in circa 2 ore e mezza via Spiez e Visp, da Ginevra aeroporto in circa 4 ore; l'ultimo tratto, da Visp, è sulla linea Matterhorn Gotthard Bahn. La stazione di Zermatt è in centro e gli hotel mandano spesso i taxi elettrici a prendere i bagagli.",
    comeSpostarsi: 'A piedi in paese; per il Gornergrat e le altre quote serve la ferrovia a cremagliera o le funivie.',
    periodoMigliore: 'da giugno a settembre; il Cervino resta comunque visibile (quando il cielo è sereno) tutto l\'anno.',
    costi: "Parcheggio Täsch da 17 CHF/giorno; Gornergrat a parte, non incluso nel parcheggio. Budget giornaliero a persona: basso 120-160 € (ostello o alloggio a Täsch, spesa al supermercato, Sunnegga o Schwarzsee), medio 280-400 € (hotel in doppia a Zermatt, ristorante, Gornergrat), alto da 550 € in su.",
    erroriDaEvitare: [
      'Provare a entrare a Zermatt in van o in auto: il divieto c\'è e viene controllato',
      'Non mettere in conto il tempo di guida per arrivarci: oltre due ore da Interlaken anche passando per Grimsel-Furka',
      'Dare per scontato il Cervino libero dalle nuvole: se ne forma di proprie anche quando intorno il cielo è pulito',
    ],
    miaEsperienza:
      "Zermatt è stata l'ultima tappa del nostro giro in van con gli amici, arrivati dai passi del Grimsel e della Furka: il van si lascia a Täsch e l'ultimo tratto si fa in treno.",
    luoghi: [
      {
        nome: "Gornergrat",
        testo: "Il treno a cremagliera sale fino a 3.089 metri. Dalla terrazza si vedono il Cervino, il Monte Rosa e il ghiacciaio del Gorner.",
        come: "Treno a cremagliera dalla stazione della Gornergrat Bahn a Zermatt; in estate le corse sono frequenti.",
        quando: "Mattina, con il cielo più terso.",
        tempo: "Mezza giornata",
        costo: "Andata e ritorno 132 CHF da maggio a ottobre 2026 e 102 CHF da novembre 2026 ad aprile 2027; metà prezzo con Swiss Travel Pass o abbonamento metà prezzo.",
        lat: 45.98331,
        lng: 7.78463,
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Scendere a Rotenboden o Riffelberg per camminare un tratto a piedi."
      },
      {
        nome: "Villaggio di Zermatt",
        testo: "Il centro senza auto, con case di legno scuro, negozi e hotel. Il piccolo cimitero accanto alla chiesa ricorda gli alpinisti morti sul Cervino.",
        come: "Dalla stazione a piedi.",
        quando: "Tutto l'anno.",
        tempo: "1-2 ore",
        costo: "Gratuito.",
        orari: "Sempre accessibile.",
        lat: 46.02457,
        lng: 7.74813,
        consiglio: "Il museo del Cervino mostra la storia della prima salita nel 1865."
      },
      {
        nome: "Matterhorn Glacier Paradise",
        testo: "La stazione a 3.820 metri, sotto la vetta del Piccolo Cervino (3.883 m): tra i punti più alti d'Europa raggiungibili in funivia. Nel ghiacciaio è scavata una grotta di ghiaccio.",
        come: "Funivia da Zermatt con cambio a Furi e Trockener Steg.",
        quando: "Mattina presto per avere il cielo più terso.",
        tempo: "Mezza giornata",
        costo: "Andata e ritorno 104 CHF (circa 111 €) da novembre 2026 ad aprile 2027, 138 CHF (circa 148 €) da maggio a ottobre 2027.",
        lat: 45.93836,
        lng: 7.72934,
        url: "https://www.matterhornparadise.ch/",
        consiglio: "Portare occhiali da sole e uno strato caldo: a 3.800 metri fa freddo."
      },
      {
        nome: "Sentiero dei cinque laghi",
        testo: "Una camminata da Blauherd verso Sunnegga lungo cinque laghi alpini (Stellisee, Grindjisee, Grünsee, Moosjisee e Leisee) che riflettono il Cervino. È una delle foto classiche.",
        come: "Funicolare per Sunnegga e cabinovia per Blauherd, poi a piedi, più in discesa che in salita.",
        quando: "Estate; i laghi riflettono meglio al mattino.",
        tempo: "3-4 ore",
        costo: "Biglietto combinato Zermatt-Blauherd e Sunnegga-Zermatt 52 CHF (circa 56 €) in estate.",
        orari: "Sentiero percorribile da fine giugno a inizio ottobre, secondo la neve.",
        lat: 46.01344,
        lng: 7.80038,
        url: "https://www.matterhornparadise.ch/en/information/tickets-prices/sightseeing-tickets",
        consiglio: "Lo Stellisee è molto frequentato: arrivare presto."
      },
      {
        nome: "Riffelsee",
        testo: "Il laghetto sotto la stazione di Rotenboden, a 2.757 metri, dove il Cervino si specchia intero nelle mattine senza vento. È la foto più classica di Zermatt e si raggiunge con pochi minuti di cammino dal treno.",
        come: "Ferrovia del Gornergrat fino a Rotenboden, poi 10 minuti a piedi in discesa.",
        quando: "Prima mattina, quando l'acqua è ferma.",
        tempo: "1 ora",
        costo: "Compreso nel biglietto del Gornergrat.",
        orari: "Il lago è libero dal ghiaccio indicativamente da luglio a ottobre.",
        lat: 45.98336,
        lng: 7.76205,
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Proseguire a piedi fino a Riffelberg e riprendere lì il treno."
      },
      {
        nome: "Sunnegga e Rothorn",
        testo: "Una funicolare sotterranea sale in pochi minuti a Sunnegga, terrazza soleggiata con il Leisee e un parco giochi; da lì cabinovia e funivia proseguono fino al Rothorn, a 3.103 metri. È il belvedere con la vista più frontale sulla parete est del Cervino.",
        come: "Funicolare Sunnegga Express dalla stazione a valle lungo il fiume, poi Blauherd e Rothorn.",
        quando: "Mattina per il Cervino in luce; Sunnegga anche al tramonto.",
        tempo: "mezza giornata",
        costo: "Sunnegga andata e ritorno 26 CHF in inverno e 36 CHF (circa 39 €) in estate; Rothorn 70 CHF in inverno e 96 CHF (circa 103 €) in estate.",
        lat: 46.01717,
        lng: 7.76976,
        url: "https://www.matterhornparadise.ch/en/experience/peaks/rothorn",
        consiglio: "Al Leisee si fa il bagno in estate: è uno dei pochi laghi alpini adatti ai bambini."
      },
      {
        nome: "Schwarzsee",
        testo: "Un lago scuro a 2.583 metri con una cappella bianca sulla riva, proprio ai piedi della cresta dell'Hörnli, la via normale al Cervino. Da qui si vede la montagna di lato, quasi a portata di mano.",
        come: "Funivia da Zermatt con cambio a Furi.",
        quando: "Estate; si può scendere a piedi verso Zermatt passando per Stafelalp.",
        tempo: "2-3 ore",
        costo: "Andata e ritorno 53 CHF in inverno e 70 CHF (circa 75 €) in estate.",
        lat: 45.99077,
        lng: 7.70682,
        url: "https://www.matterhornparadise.ch/"
      },
      {
        nome: "Matterhorn Museum - Zermatlantis",
        testo: "Un museo sotto la piazza della chiesa, costruito come un villaggio sepolto, che racconta la prima salita al Cervino del 1865 e la tragedia della discesa. Si vede anche la corda spezzata della cordata di Whymper.",
        come: "A piedi dalla stazione, 5 minuti, accanto alla chiesa.",
        quando: "Nei pomeriggi di brutto tempo.",
        tempo: "1 ora",
        costo: "Adulti 12 CHF (circa 13 €), ragazzi 10-16 anni 7 CHF, bambini gratis.",
        orari: "Aperto il pomeriggio: dal 20 novembre 2026 venerdì-domenica 15-18, dal 18 dicembre tutti i giorni 15-18; da giugno 2027 tutti i giorni 14-18.",
        lat: 46.01977,
        lng: 7.74646,
        url: "https://www.zermatt.ch/en/Media/Attractions/Matterhorn-Museum-Zermatlantis"
      },
      {
        nome: "Kirchbrücke",
        testo: "Il ponte sulla Vispa accanto alla chiesa è il punto del paese con la vista più pulita sul Cervino, inquadrato fra le case e il fiume. All'alba, con la vetta che si accende di arancione, si riempie di fotografi.",
        come: "A piedi dal centro, 5 minuti dalla stazione.",
        quando: "All'alba, per la prima luce sulla vetta.",
        tempo: "20 minuti",
        costo: "Gratuito.",
        orari: "Sempre accessibile.",
        lat: 46.01891,
        lng: 7.74806
      },
      {
        nome: "Hinterdorf, il villaggio antico",
        testo: "Una via stretta dietro la Bahnhofstrasse con fienili e granai di legno annerito del Cinque e Seicento, sollevati su piedritti con dischi di pietra contro i topi. È quello che resta della Zermatt contadina prima dell'alpinismo.",
        come: "A piedi dalla chiesa verso nord, lungo la Hinterdorfstrasse.",
        quando: "Mattina presto o sera, con poca gente.",
        tempo: "30 minuti",
        costo: "Gratuito.",
        orari: "Sempre accessibile.",
        lat: 46.02085,
        lng: 7.74761
      },
      {
        nome: "Gola del Gorner (Gornerschlucht)",
        testo: "Una gola stretta scavata dal torrente glaciale del Gorner, percorsa su passerelle di legno agganciate alla roccia sopra l'acqua verde. È una passeggiata breve, a mezz'ora dal centro, che si abbina al ritorno a piedi da Furi.",
        come: "A piedi dal paese verso la frazione di Blatten, circa 30 minuti.",
        quando: "In estate, nelle ore calde.",
        tempo: "1-2 ore con il cammino",
        lat: 46.00882,
        lng: 7.7391,
        consiglio: "Controllare prima che sia aperta: le passerelle chiudono fuori stagione."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Kirchbrücke all'alba",
          "Gornergrat in treno, sosta al Riffelsee scendendo a Rotenboden",
          "Pranzo a Riffelberg e rientro in treno",
          "Pomeriggio fra Hinterdorf e il Matterhorn Museum"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Gornergrat, Riffelsee e il paese",
          "Giorno 2: Sunnegga, sentiero dei cinque laghi e Rothorn; sera alla Kirchbrücke"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Gornergrat e Riffelsee, pomeriggio in paese e al museo",
          "Giorno 2: Sunnegga, cinque laghi e Rothorn",
          "Giorno 3: Matterhorn Glacier Paradise al mattino, Schwarzsee nel pomeriggio e discesa a piedi verso la gola del Gorner"
        ]
      }
    ],
    zone: [
      {
        nome: "Zermatt",
        testo: "Senza auto; alloggi tutti i prezzi, ma cari.",
        perChi: "chi vuole stare nel centro",
        fascia: "200-450 €"
      },
      {
        nome: "Täsch e Randa",
        testo: "Prezzi più bassi, con il treno navetta frequente per Zermatt.",
        perChi: "chi vuole risparmiare",
        fascia: "130-250 €"
      },
      {
        nome: "Visp e Briga",
        testo: "Le due città sulla linea del Rodano, a circa un'ora di treno da Zermatt, hanno hotel più economici e treni rapidi verso Berna, Interlaken e l'Italia.",
        perChi: "chi combina Zermatt con altre mete del Vallese",
        fascia: "110-200 €"
      }
    ],
    sapori: [
      {
        nome: "Raclette",
        testo: "Formaggio fuso raschiato su patate, tipico del Vallese."
      },
      {
        nome: "Fondue al formaggio",
        testo: "Con vino bianco del Vallese."
      },
      {
        nome: "Cervino di cioccolato",
        testo: "Souvenir dolce, in vari negozi."
      }
    ],
    attenzioni: [
      "Le auto si fermano a Täsch: lasciarle nel parcheggio e prendere il treno.",
      "Prezzi alti: comprare panini nei supermercati prima di salire.",
      "Nei giorni di vento o nuvole le funivie possono chiudere: tenere un margine nel programma."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Zermatt?",
        risposta: "Due giorni bastano per Gornergrat e il sentiero dei cinque laghi. Con tre si aggiungono Matterhorn Glacier Paradise e Schwarzsee, e si ha un giorno di margine se il Cervino è coperto."
      },
      {
        domanda: "Si può arrivare a Zermatt in auto?",
        risposta: "No, il paese è chiuso al traffico privato. L'auto si lascia a Täsch, nel parcheggio coperto da 17 CHF al giorno, e il treno navetta arriva in circa 12 minuti, con partenze ogni 20 minuti."
      },
      {
        domanda: "Meglio il Gornergrat o il Matterhorn Glacier Paradise?",
        risposta: "Il Gornergrat ha la vista frontale sul Cervino e il Riffelsee lungo la strada, ed è la scelta per chi ha un solo giorno. Il Glacier Paradise è più alto e glaciale, ma dalla cima il Cervino si vede di lato."
      },
      {
        domanda: "Quando si vede meglio il Cervino?",
        risposta: "Al mattino presto, prima che si formino le nuvole intorno alla vetta. Le webcam degli impianti aiutano a decidere se salire."
      },
      {
        domanda: "Quanto costa una giornata a Zermatt?",
        risposta: "Gli impianti pesano più di tutto: il Gornergrat costa 132 CHF andata e ritorno in estate, metà con Swiss Travel Pass o abbonamento metà prezzo. Con hotel e ristorante si superano facilmente i 300 € a persona."
      }
    ],
    gite: [
      {
        nome: "Ponte sospeso Charles Kuonen (Randa)",
        distanza: "circa 20 minuti in treno, poi 1-2 ore a piedi",
        come: "Treno fino a Randa, poi sentiero in salita segnalato fino al ponte, sul tracciato dell'Europaweg.",
        testo: "Un ponte pedonale sospeso lungo 494 metri sopra una valle laterale, fra i più lunghi delle Alpi. Si cammina sospesi sul vuoto con il Weisshorn di fronte."
      },
      {
        nome: "Saas-Fee",
        distanza: "circa 2 ore fra treno e bus",
        come: "Treno fino a Visp o Stalden, poi autopostale fino a Saas-Fee.",
        testo: "L'altro villaggio senza auto del Vallese, chiuso da una corona di quattromila e da ghiacciai che scendono quasi fino alle case. Meno affollato e un po' meno caro di Zermatt."
      },
      {
        nome: "Sion",
        distanza: "circa 2 ore in treno",
        come: "Treno per Visp e cambio sulla linea del Rodano.",
        testo: "Il capoluogo del Vallese, con due colline fortificate, Valère e Tourbillon, e i vigneti in terrazza tutto intorno. Una giornata di città e vino quando in quota il meteo è brutto."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il Cervino al tramonto riflesso in un laghetto alpino sopra Zermatt, con un escursionista di spalle in primo piano',
    immagine: '/images/svizzera/zermatt.jpg',
  },
]
