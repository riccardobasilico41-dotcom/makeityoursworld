import type { Destinazione } from '@/lib/types'

// Nessun nome di hotel, ristorante o operatore è stato inventato. Le parti
// storiche — la DMZ e la cultura delle haenyeo a Jeju — sono scritte su fonti
// verificabili (date, cifre, status UNESCO) e non ricostruite: i numeri vanno
// però riverificati, perché cambiano di anno in anno. Lo stesso vale per
// l\'accesso alla JSA di Panmunjom, sospeso e riaperto più volte.

export const destinazioniCoreaDelSud: Destinazione[] = [
  {
    slug: 'seoul',
    paeseSlug: 'corea-del-sud',
    ordine: 1,
    nome: 'Seoul',
    tipologia: ['città', 'cultura', 'gastronomia'],
    giorniConsigliati: '4-5 giorni, escluse le gite fuori città',
    visitataPersonalmente: true,
    introduzione:
      'Una capitale di dieci milioni di abitanti stretta tra le montagne e attraversata dal fiume Han. Cinque palazzi reali del Cinquecento stanno accanto ai quartieri più tecnologici dell\'Asia, e a quaranta chilometri in linea d\'aria comincia il confine più militarizzato del mondo.',
    percheAndarci:
      'È una delle poche megalopoli asiatiche che si girano a piedi, quartiere per quartiere. E nessun\'altra città racconta così chiaramente cosa significa ricostruire un paese da zero in due generazioni: nel 1953 Seoul era in macerie.',
    cosaVedere: [
      'Gyeongbokgung, il palazzo principale della dinastia Joseon, con il cambio della guardia davanti alla porta Gwanghwamun',
      'Changdeokgung e il suo Giardino Segreto (Huwon), visitabile solo con visita guidata a numero chiuso',
      'Il villaggio di hanok di Bukchon, tra i due palazzi, con le case tradizionali ancora abitate',
      'Il Memoriale della Guerra di Corea, il museo che spiega tutto quello che si vedrà alla DMZ',
      'Il mercato di Gwangjang, il più antico della città, con le cucine di strada in mezzo ai banchi',
      'La N Seoul Tower sul monte Namsan e la fortezza urbana che corre sui crinali attorno al centro',
      'Insadong per l\'artigianato, Hongdae per la vita universitaria, Seongsu per i caffè ricavati dalle vecchie fabbriche',
    ],
    cosaFare: [
      'Visitare Gyeongbokgung in hanbok, il costume tradizionale, che dà diritto all\'ingresso gratuito (vedi la scheda esperienza dedicata)',
      'Cena di cibo di strada al mercato di Gwangjang, tra bindaetteok e mayak gimbap',
      'Serata in un jjimjilbang, la sauna coreana aperta 24 ore, dove si può anche dormire',
      'Camminare un tratto della fortezza di Seoul lungo il crinale del Bugaksan, con la città sotto',
      'Gita in giornata alla DMZ, che parte da qui (vedi la scheda destinazione dedicata)',
    ],
    doveDormire:
      'Myeongdong e Jongno sono le zone più comode per i palazzi e per la metropolitana; Hongdae e Yeonnam per la vita serale e i prezzi più bassi; Seongsu e Itaewon per un ritmo più adulto. Quello che conta è stare vicino a una stazione della metro: a Seoul le distanze sono grandi e il traffico è pesante.',
    doveMangiare:
      'Seoul è una delle capitali gastronomiche dell\'Asia, e la prima cosa da capire sono i banchan: qualunque piatto si ordini, arriva con cinque o dieci contorni gratuiti, che su richiesta vengono riportati senza costi. Da provare il barbecue coreano, dove la carne la giri da solo sulla griglia incassata nel tavolo, il gomtang e il samgyetang per le zuppe, il naengmyeon freddo d\'estate e almeno una cena di cibo di strada al mercato di Gwangjang. I caffè invece costano quanto in Europa: in Corea sono luoghi di ritrovo e si paga la sosta più della tazza.',
    comeArrivare:
      'Volo internazionale su Incheon (ICN), uno dei migliori aeroporti al mondo, collegato al centro dall\'AREX in circa un\'ora. Il secondo scalo, Gimpo (GMP), serve soprattutto i voli interni, Jeju compresa.',
    comeSpostarsi:
      'Metropolitana capillare e pulita, con cartelli e annunci in inglese: si paga con la T-money, che si compra in qualsiasi minimarket. Per i taxi c\'è Kakao T, che funziona con carta estera. Attenzione a Google Maps: in Corea non calcola i percorsi, servono Naver Map o KakaoMap.',
    periodoMigliore:
      'aprile per i ciliegi e ottobre-inizio novembre per il foliage. L\'estate è calda, umida e piovosa; l\'inverno è gelido ma limpido, e i palazzi nella neve valgono il freddo.',
    costi:
      'Ingresso ai palazzi 3.000 won circa, gratis indossando l\'hanbok; il biglietto combinato per quattro palazzi più il santuario di Jongmyo costa poco più di 10.000 won. Metropolitana poco più di un euro, pasti 6-15€.',
    erroriDaEvitare: [
      'Andare a Changdeokgung senza aver prenotato la visita al Giardino Segreto: è a numero chiuso, con orari fissi, e si esaurisce',
      'Affidarsi a Google Maps per muoversi: mostra i luoghi ma non calcola nessun percorso',
      'Visitare i palazzi di martedì, quando Gyeongbokgung è chiuso (gli altri chiudono il lunedì): è l\'errore di programmazione più comune',
      'Saltare il Memoriale della Guerra prima di andare alla DMZ: senza quel contesto la gita al confine resta una serie di fotografie',
    ],
    confronti: [
      {
        titolo: 'Quale dei cinque palazzi di Seoul',
        introduzione:
          'I palazzi reali di Seoul sono cinque, tutti nel raggio di due chilometri, e quasi tutti i visitatori ne vedono uno solo. Cambiano molto per dimensioni, folla e tipo di visita, e la scelta cambia la giornata.',
        opzioni: [
          {
            nome: 'Gyeongbokgung',
            sintesi: 'Il palazzo principale, il più grande e il più monumentale, con il cambio della guardia davanti alla porta Gwanghwamun.',
            costo: 'circa 3.000 won, gratis in hanbok',
            durata: '2-3 ore',
            pro: ['Nessuno degli altri quattro ha le stesse dimensioni e la stessa solennità', 'Il cambio della guardia, più volte al giorno, è uno spettacolo vero', 'Due musei importanti dentro il recinto'],
            contro: ['Il più affollato di tutti', 'Quasi interamente ricostruito: i giapponesi lo demolirono in larga parte durante l\'occupazione', 'Chiuso il martedì'],
            perChi: 'Chi ne vede uno solo e vuole l\'immagine classica.',
          },
          {
            nome: 'Changdeokgung e il Giardino Segreto',
            sintesi: 'Patrimonio UNESCO, costruito assecondando il terreno invece di imporgli una griglia, con un giardino reale visitabile solo su prenotazione.',
            costo: 'circa 3.000 won più 5.000 per il Huwon',
            durata: '3 ore con la visita guidata al giardino',
            pro: ['Il Giardino Segreto è la cosa più bella di tutti i palazzi di Seoul', 'È il palazzo meglio conservato dei cinque', 'La visita guidata a numero chiuso tiene lontana la folla'],
            contro: ['Il Huwon si prenota online e si esaurisce, soprattutto in autunno', 'Orari rigidi, si entra solo con il gruppo assegnato', 'Chiuso il lunedì'],
            perChi: 'Chi ha una mattinata da dedicargli e prenota con qualche giorno di anticipo. È la scelta migliore.',
          },
          {
            nome: 'Deoksugung',
            sintesi: 'Il più piccolo e il più strano: accanto ai padiglioni tradizionali ci sono edifici in stile occidentale di inizio Novecento, che risalgono agli ultimi anni dell\'impero coreano.',
            costo: 'circa 1.000 won',
            durata: '1 ora',
            pro: ['In pieno centro, si infila in mezzo a qualsiasi programma', 'Il contrasto tra architettura coreana e neoclassica non esiste altrove', 'Bellissimo di sera, quando resta aperto e illuminato'],
            contro: ['Piccolo, si esaurisce in fretta', 'Meno spettacolare degli altri', 'Chiuso il lunedì'],
            perChi: 'Chi ha un\'ora libera o vuole vedere un palazzo dopo il tramonto.',
          },
        ],
        raccomandazione:
          'Con due mezze giornate: Changdeokgung con il Giardino Segreto prenotato e Gyeongbokgung per il cambio della guardia. Con una sola, Changdeokgung, a patto di aver prenotato il Huwon: senza, il confronto si ribalta.',
      },
    ],
    miaEsperienza:
      'Seoul mi ha spiazzato perché non somiglia alle altre capitali asiatiche: è ordinata, silenziosa per le sue dimensioni, e si gira a piedi. I palazzi sono belli ma in gran parte ricostruiti; mi ha colpito di più che quasi tutto quello che vedevo avesse meno di settant\'anni. Nel 1953 la città era in macerie e quasi nessuno degli edifici di oggi esisteva. Al Memoriale della Guerra questa cosa diventa concreta, ed è per questo che va visto prima della DMZ: senza, il confine resta una gita fotografica. Sul cibo nessuna avvertenza, solo una constatazione: i banchan, dieci contorni che arrivano gratis e vengono riportati senza chiedere niente, sono la cosa che più mi fa venire voglia di tornare. E il jjimjilbang, la sauna aperta 24 ore dove intere famiglie dormono per terra sulle stuoie, è l\'istituzione più coreana che ci sia.',
    luoghi: [
      {
        nome: "Gyeongbokgung",
        testo: "Il palazzo principale della dinastia Joseon, costruito nel 1395 e in gran parte ricostruito dopo l'occupazione giapponese. Davanti alla porta Gwanghwamun c'è il cambio della guardia in costume.",
        come: "Metro linea 3 fino a Gyeongbokgung. Si visita da soli; chi indossa l'hanbok entra gratis.",
        quando: "Chiuso il martedì (gli altri palazzi chiudono il lunedì). Il cambio della guardia è a orari fissi, da controllare sul sito.",
        tempo: "2 ore",
        costo: "Ingresso gratuito con l'hanbok",
        consiglio: "Visitarlo in hanbok, come abbiamo fatto noi, è la scelta più economica e divertente.",
      },
      {
        nome: "Changdeokgung e il Giardino Segreto (Huwon)",
        testo: "Palazzo patrimonio UNESCO integrato nel paesaggio della collina. Il giardino posteriore, Huwon, si visita solo con guida a orari fissi e posti limitati.",
        come: "Metro linea 3 fino a Anguk. Prenotare l'ingresso al giardino in anticipo.",
        quando: "Chiuso il lunedì. Orari di visita guidata a orari fissi.",
        tempo: "2-2,5 ore",
        consiglio: "Senza prenotazione il Giardino Segreto non si vede: si esaurisce.",
      },
      {
        nome: "Bukchon Hanok Village",
        testo: "Quartiere di case tradizionali coreane tra Gyeongbokgung e Changdeokgung, ancora abitate. Vicoli in salita con vista sui tetti e sulla città moderna.",
        come: "A piedi da Anguk (linea 3), circa 10 minuti.",
        quando: "Mattina presto; rispettare i cartelli sul silenzio.",
        tempo: "1-1,5 ore",
        consiglio: "È un quartiere dove la gente vive: parlare a bassa voce.",
      },
      {
        nome: "Memoriale della Guerra di Corea",
        testo: "Grande museo sulla guerra del 1950-1953, con ricostruzioni, mezzi e sale. Gratuito.",
        come: "Metro linee 4 e 6 fino a Samgakji.",
        quando: "Chiuso il lunedì.",
        tempo: "2-3 ore",
        costo: "Ingresso gratuito",
        consiglio: "Va visto prima della DMZ: senza, il confine resta una gita fotografica.",
      },
      {
        nome: "Mercato di Gwangjang",
        testo: "Il mercato storico di Seoul, con cibo di strada: bindaetteok (frittelle di fagioli), mayak gimbap, tteokbokki.",
        come: "Metro linea 1 fino a Jongno 5-ga.",
        quando: "Sera.",
        tempo: "1,5 ore",
        consiglio: "Cena di strada tra le bancarelle: vedi la scheda esperienza.",
      },
      {
        nome: "Fortezza di Seoul e N Seoul Tower",
        testo: "Un tratto di mura della fortezza che sale sulle colline con vista sulla città. La torre N Seoul domina Namsan.",
        come: "Sentieri da Hyehwa o da Namsan; funivia per la torre.",
        quando: "Tramonto.",
        tempo: "2-3 ore",
        consiglio: "Camminare un tratto di mura offre la vista migliore.",
      },
      {
        nome: "Jjimjilbang",
        testo: "La sauna coreana aperta 24 ore, con vasche, saune e aree comuni dove si può anche dormire.",
        come: "In molte zone della città; si indossa la divisa fornita.",
        quando: "Sera o notte.",
        tempo: "2-3 ore",
        consiglio: "Nudità nelle zone separate per genere: normale.",
      },
    ],
    programmi: [
      { titolo: "1 giorno: palazzi e quartieri", tappe: ["Gyeongbokgung all'apertura","Bukchon","Changdeokgung (con prenotazione)","Pranzo a Insadong","Sera: Gwangjang"] },
      { titolo: "2 giorni: aggiungere storia e panorami", tappe: ["Giorno 1: come sopra","Giorno 2: Memoriale della Guerra","Fortezza di Seoul e Namsan al tramonto","Serata in jjimjilbang"] },
    ],
    zone: [
      { nome: "Myeongdong / Jongno", perChi: "Chi vuole palazzi e metro", testo: "Zone comode per i palazzi e per la metropolitana. Più turistiche e affollate." },
      { nome: "Hongdae / Yeonnam", perChi: "Chi vuole vita serale e prezzi bassi", testo: "Vivaci e giovani, rumorose la notte." },
      { nome: "Seongsu / Itaewon", perChi: "Chi vuole un ritmo più adulto", testo: "Locali più curati." },
    ],
    sapori: [
      { nome: "Banchan", testo: "Contorni gratuiti che arrivano con ogni piatto e vengono riportati senza costi." },
      { nome: "Barbecue coreano", testo: "La carne si gira da soli sulla griglia incassata nel tavolo." },
      { nome: "Gomtang e samgyetang", testo: "Zuppe di manzo e di pollo con ginseng." },
      { nome: "Naengmyeon", testo: "Noodles freddi, da provare d'estate." },
    ],
    attenzioni: [
      "Andare a Changdeokgung senza prenotare il Giardino Segreto: è a numero chiuso.",
      "Affidarsi a Google Maps: in Corea non calcola i percorsi, servono Naver Map o KakaoMap.",
      "Visitare i palazzi di martedì o lunedì: sono chiusi.",
      "Dimenticare la T-money, che si compra in qualsiasi minimarket.",
    ],
    esperienzeSlugs: ['gyeongbokgung-hanbok', 'gwangjang-cibo-strada', 'jjimjilbang'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Un vicolo di case tradizionali hanok nel villaggio di Bukchon, con i grattacieli di Seoul sullo sfondo',
    immagine: '/images/corea-del-sud/seoul.jpg',
  },
  {
    slug: 'dmz',
    paeseSlug: 'corea-del-sud',
    ordine: 2,
    nome: 'La DMZ e Panmunjom',
    tipologia: ['storia', 'memoria', 'escursione'],
    giorniConsigliati: '1 giorno, in gita da Seoul',
    visitataPersonalmente: true,
    introduzione:
      'Una striscia di terra larga quattro chilometri e lunga 248 che taglia la penisola da costa a costa, lungo la linea dove i combattimenti si sono fermati il 27 luglio 1953. Si chiama Zona Demilitarizzata ed è il confine più militarizzato del pianeta: un milione di mine, due eserciti schierati e in mezzo una fascia di bosco dove da settant\'anni non entra quasi nessuno.',
    percheAndarci:
      'È l\'unico posto al mondo dove si guarda dentro una guerra mai finita. L\'armistizio del 1953 non è mai diventato un trattato di pace: le due Coree sono tecnicamente ancora in guerra. I tunnel, i villaggi vetrina, la stazione che aspetta un treno che non arriva: tutto quello che si vede qui discende da quel documento mai firmato.',
    cosaVedere: [
      'Imjingak, il parco della memoria appena fuori dalla zona controllata, con il Ponte della Libertà e la locomotiva crivellata di proiettili lasciata dov\'era',
      'Il Terzo Tunnel d\'Infiltrazione, scoperto nel 1978: 1.635 metri scavati dal Nord verso sud, 73 metri sotto terra, in grado di far passare 30.000 soldati all\'ora e con la testa a poco più di 40 chilometri da Seoul',
      'L\'Osservatorio di Dora, da cui si vedono la città nordcoreana di Kaesong, il «villaggio della propaganda» di Kijong-dong e il pennone alto 160 metri costruito per superare quello del Sud',
      'La stazione di Dorasan, inaugurata nel 2002 sulla linea per Pyongyang, con il cartello che non dice «ultima stazione del Sud» ma «prima stazione verso il Nord»',
      'La JSA di Panmunjom, quando è accessibile: le baracche azzurre a cavallo della linea di demarcazione e il Ponte del Non Ritorno',
    ],
    cosaFare: [
      'Tour standard della DMZ, con Terzo Tunnel, Osservatorio di Dora e Dorasan (vedi la scheda esperienza dedicata)',
      'Tour della JSA di Panmunjom, quando è aperta: è un\'esperienza del tutto diversa e va prenotata settimane prima (vedi la scheda esperienza dedicata)',
      'Visitare il giorno prima il Memoriale della Guerra di Corea a Seoul: è quello che rende leggibile tutto il resto',
      'Legare un nastro sulla recinzione del Ponte della Libertà, dove le famiglie divise lasciano messaggi da settant\'anni',
    ],
    doveDormire: 'Non ci si dorme: la DMZ si fa in giornata da Seoul, con partenze al mattino presto e rientro nel pomeriggio.',
    doveMangiare:
      'Il pranzo è quasi sempre incluso nel tour, in ristoranti convenzionati lungo la strada per Paju. La specialità della zona è la soia: l\'area di Jangdan, proprio sul confine, è nota per i suoi fagioli, e il tofu e il doenjang di queste parti sono tra i migliori del paese. Dentro la zona controllata non si compra né si mangia niente fuori dai punti previsti.',
    comeArrivare:
      'Solo con un tour organizzato da un operatore autorizzato, con partenza da Seoul: non si può accedere in autonomia, né in auto né con i mezzi pubblici. I punti di ritrovo sono in centro, con partenze tra le 7 e le 8 del mattino.',
    comeSpostarsi:
      'In pullman, all\'interno del tour. Superato il checkpoint militare si sale a bordo di un mezzo autorizzato con una guida accreditata e non ci si allontana mai dal gruppo: i percorsi sono fissi e sorvegliati.',
    periodoMigliore:
      'tutto l\'anno, con le giornate limpide di autunno e inverno che offrono la visibilità migliore dall\'Osservatorio di Dora. Le visite sono normalmente sospese il lunedì e nelle festività nazionali, e possono essere annullate senza preavviso per esercitazioni militari o tensioni diplomatiche.',
    costi:
      'Tour standard indicativamente 50-90€ a persona da Seoul, spesso con pranzo incluso; il tour con la JSA, quando c\'è, costa parecchio di più per via delle procedure di autorizzazione.',
    erroriDaEvitare: [
      'Dimenticare il passaporto: senza l\'originale non si passa il checkpoint, e copie o foto non valgono',
      'Prenotare all\'ultimo momento: il tour standard va preso con giorni di anticipo, quello della JSA con settimane, perché i dati del passaporto devono essere trasmessi in anticipo per l\'autorizzazione militare',
      'Dare per scontata la JSA: dal 2023 l\'accesso civile a Panmunjom è stato sospeso più volte e dipende dalla situazione diplomatica. Conviene controllarlo poco prima della partenza, con un piano B già pronto',
      'Presentarsi vestiti in modo inadeguato ai tour della JSA, dove esiste un codice di abbigliamento: niente jeans strappati, sandali o capi troppo scoperti',
      'Fotografare fuori dai punti consentiti: le restrizioni sono reali e vengono fatte rispettare',
      'Andarci senza aver letto niente: è l\'unico posto di questo viaggio dove il contesto storico conta più del panorama',
    ],
    confronti: [
      {
        titolo: 'Tour standard della DMZ o JSA di Panmunjom?',
        introduzione:
          'Sono due esperienze diverse che spesso si confondono. Il tour standard porta nelle aree controllate attorno alla zona: tunnel, osservatorio, stazione. La JSA porta dentro Panmunjom, nell\'unico punto dove i soldati dei due paesi si guardano a pochi metri di distanza. Il secondo tour è molto più difficile da ottenere e dal 2023 non sempre si fa.',
        opzioni: [
          {
            nome: 'Tour standard della DMZ',
            sintesi: 'Imjingak, Terzo Tunnel d\'Infiltrazione, Osservatorio di Dora, stazione di Dorasan. Mezza giornata o giornata intera da Seoul.',
            costo: 'indicativamente 50-90€, pranzo spesso incluso',
            durata: '5-8 ore con i trasferimenti',
            pro: [
              'Disponibile praticamente sempre, con partenze quotidiane',
              'Si prenota con pochi giorni di anticipo',
              'Il Terzo Tunnel è il momento più fisico: si scende a piedi in una galleria scavata dal Nord verso Seoul',
              'Nessun codice di abbigliamento e regole più rilassate',
            ],
            contro: [
              'Non si entra a Panmunjom né si vedono soldati nordcoreani',
              'La discesa nel tunnel è ripida, in uno spazio basso e stretto: chi soffre di claustrofobia farebbe meglio a saltarla',
              'Dall\'Osservatorio di Dora, con foschia, si vede poco',
            ],
            perChi: 'Chiunque abbia una giornata a Seoul e voglia capire la frontiera. Di solito è la scelta obbligata, perché spesso è l\'unica.',
          },
          {
            nome: 'Tour della JSA di Panmunjom',
            sintesi: 'L\'area di sicurezza congiunta, con le baracche azzurre a cavallo della linea di demarcazione, la Freedom House e il Ponte del Non Ritorno.',
            costo: 'sensibilmente più alto del tour standard',
            durata: 'giornata intera',
            pro: [
              'È l\'unico posto dove si sta a pochi metri dai soldati nordcoreani',
              'Dentro la sala delle riunioni si attraversa fisicamente la linea di confine',
              'Il Ponte del Non Ritorno, dove nel 1953 i prigionieri scelsero da che parte restare, una volta per tutte',
            ],
            contro: [
              'Accesso civile sospeso più volte dal 2023 e mai garantito: dipende dalla situazione diplomatica del momento',
              'Va prenotato con 2-4 settimane di anticipo, con i dati del passaporto trasmessi giorni prima per l\'autorizzazione militare',
              'Codice di abbigliamento, restrizioni fotografiche, dichiarazione di responsabilità da firmare',
              'Può essere annullato all\'ultimo, senza rimborso automatico del resto del viaggio',
            ],
            perChi: 'Chi ha date flessibili, prenota con largo anticipo e accetta che possa saltare.',
          },
        ],
        raccomandazione:
          'Conviene prenotare il tour standard come base certa e, se le date lo permettono, tentare la JSA in parallelo, controllando poco prima della partenza se è aperta. Costruire il viaggio sulla JSA è il modo più sicuro per restare delusi: dal 2023 è stata più spesso chiusa che aperta.',
      },
    ],
    miaEsperienza:
      'La DMZ è la tappa che più di ogni altra va preparata leggendo, perché da solo il paesaggio non dice quasi niente: colline, filo spinato, un parcheggio e un pullman. È stata una delle giornate più forti del viaggio perché sapevamo cosa stavamo guardando. Nel Terzo Tunnel tutto diventa fisico: siamo scesi per centinaia di metri lungo una galleria di servizio ripidissima, poi abbiamo proseguito curvi in un cunicolo scavato nella roccia, con il caschetto che batteva contro il soffitto, fino a una barriera di cemento oltre la quale il tunnel continua verso nord. Fu scoperto nel 1978, è largo poco più di un metro e mezzo, e da lì sarebbero potuti passare trentamila uomini all\'ora a quaranta chilometri da Seoul. Dall\'Osservatorio di Dora, con il binocolo, si vedono i campi coltivati del Nord e il villaggio di Kijong-dong, costruito apposta per essere guardato: file di case con le finestre senza vetri e le luci accese a orario. Quella che mi è rimasta più a lungo è la stazione di Dorasan: tirata a lucido, con i tabelloni delle partenze, i tornelli e il personale in servizio, aspetta dal 2002 un treno per Pyongyang. Il cartello non dice «ultima stazione del Sud», dice «prima stazione verso il Nord».',
    luoghi: [
      {
        nome: "Imjingak",
        testo: "Parco della memoria appena fuori dalla zona controllata, con il Ponte della Libertà e la locomotiva crivellata di proiettili lasciata dov'era.",
        come: "Con tour organizzato da Seoul (circa un'ora).",
        quando: "Controllare il tour.",
        tempo: "45 minuti",
        consiglio: "Qui comincia il percorso della DMZ.",
      },
      {
        nome: "Terzo Tunnel di infiltrazione",
        testo: "Scoperto nel 1978: 1.635 metri scavati dal Nord, 73 metri sotto terra, largo circa un metro e mezzo. Ci si scende lungo una galleria di servizio.",
        come: "Tour; caschetto fornito.",
        quando: "Con tour.",
        tempo: "1 ora",
        consiglio: "Dura la discesa e il cunicolo: caschetto obbligatorio.",
      },
      {
        nome: "Osservatorio di Dora e Dorasan",
        testo: "Un punto panoramico sulla Corea del Nord e la stazione ferroviaria di Dorasan, pronta ma mai in servizio.",
        come: "Con tour.",
        quando: "Con tour.",
        tempo: "1 ora",
        consiglio: "Nel tour standard.",
      },
      {
        nome: "JSA di Panmunjom",
        testo: "L'area di sicurezza comune, dove si fronteggiano le due Coree. Si visita con tour autorizzato, a posti limitati.",
        come: "Tour specifico, da prenotare settimane prima.",
        quando: "Quando è aperta; i dati del passaporto vanno inviati in anticipo.",
        tempo: "Mezza giornata",
        consiglio: "È un'esperienza diversa: sapere cosa si guarda.",
      },
    ],
    programmi: [
      { titolo: "1 giorno: DMZ", tappe: ["Tour dal mattino da Seoul","Imjingak","Terzo Tunnel","Osservatorio di Dora","Rientro nel pomeriggio"] },
    ],
    zone: [
      { nome: "Non serve dormirci", perChi: "Tour in giornata da Seoul", testo: "Tutta la visita si fa con tour da Seoul." },
    ],
    sapori: [
      { nome: "Tofu e doenjang della zona di Jangdan", testo: "Il pranzo è quasi sempre incluso nel tour." },
    ],
    attenzioni: [
      "Dimenticare il passaporto originale: senza non si passa il checkpoint.",
      "Prenotare all'ultimo: il tour standard va preso con giorni di anticipo, quello della JSA con settimane.",
      "Dare per scontata la JSA: può essere chiusa.",
    ],
    esperienzeSlugs: ['tour-dmz-terzo-tunnel', 'jsa-panmunjom'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La zona demilitarizzata tra le due Coree vista da un posto di osservazione, con le colline del Nord all\'orizzonte',
    immagine: '/images/corea-del-sud/dmz.jpg',
  },
  {
    slug: 'sokcho-seoraksan',
    paeseSlug: 'corea-del-sud',
    ordine: 3,
    nome: 'Sokcho e il Seoraksan',
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il parco nazionale più famoso della Corea, sulla costa orientale: creste di granito, monasteri incastrati nella roccia e, in ottobre, il foliage che in questo paese è un evento nazionale seguito bollettino per bollettino. Ai suoi piedi c\'è Sokcho, città di pescatori con una storia poco raccontata.',
    percheAndarci:
      'È il contrappeso naturale a Seoul. E Sokcho ha una storia precisa: fino al 1945 stava nel territorio poi assegnato al Nord, e dopo la guerra si riempì di profughi nordcoreani che non riuscirono mai a tornare a casa. Il quartiere di Abai, costruito da loro, esiste ancora.',
    cosaVedere: [
      'Il parco nazionale del Seoraksan, con il Buddha di bronzo di Sinheungsa all\'ingresso',
      'La funivia per Gwongeumseong, che risparmia la salita a chi non vuole camminare',
      'L\'eremo di Ulsanbawi, in cima a 808 gradini metallici lungo una parete di granito',
      'Il villaggio di Abai a Sokcho, fondato dai profughi nordcoreani, raggiungibile con il galsseonbae, la chiatta a fune tirata a mano',
      'Il mercato del pesce di Sokcho, uno dei migliori della costa orientale',
    ],
    cosaFare: [
      'Salita a Ulsanbawi, circa 4 ore andata e ritorno, con l\'ultimo tratto su scale metalliche a strapiombo',
      'Attraversare il canale di Abai sulla chiatta a fune, tirandola insieme agli altri passeggeri',
      'Mangiare l\'ojingeo sundae, il calamaro ripieno che è la specialità dei profughi del Nord',
      'Salita al Daecheongbong, la cima del massiccio, per chi ha una giornata intera e gambe allenate',
    ],
    doveDormire:
      'Sokcho è la base naturale, con l\'offerta più larga e il mare a due passi; i motel e le pensioni vicino all\'ingresso del parco sono più comodi per partire all\'alba ma molto più spogli.',
    doveMangiare:
      'Sokcho vive di pesce: il mercato centrale è il posto giusto, con i banchi che cucinano al momento. Il piatto identitario è però l\'ojingeo sundae, il calamaro farcito, portato qui dai profughi nordcoreani e diventato la cosa che la città rivendica di più. Da provare anche il granchio e, in stagione, il pesce crudo servito alla coreana, con le foglie di lattuga e la pasta di peperoncino.',
    comeArrivare:
      'Autobus express da Seoul, circa 2h30 dall\'Express Bus Terminal o da Dong Seoul: il treno non arriva fin qui e il bus è il mezzo normale. I bus coreani a lunga percorrenza sono molto comodi, con sedili reclinabili.',
    comeSpostarsi: 'Autobus locali frequenti tra Sokcho e l\'ingresso del parco (circa 30 minuti); taxi economici per le tratte brevi.',
    periodoMigliore:
      'ottobre è il mese del foliage ed è anche quello in cui il parco è più affollato: nei fine settimana di ottobre i sentieri si percorrono in fila. Maggio è l\'alternativa migliore. D\'inverno il parco resta aperto ma i sentieri alti si ghiacciano.',
    costi: 'ingresso al parco pochi euro; funivia per Gwongeumseong attorno agli 11.000 won andata e ritorno.',
    erroriDaEvitare: [
      'Andarci in un fine settimana di ottobre: in Corea il foliage è un fenomeno di massa e il parco si riempie più di quanto si immagini',
      'Sottovalutare gli 808 gradini di Ulsanbawi: sono scale metalliche ripide su una parete esposta, e la discesa pesa più della salita',
      'Fermarsi al Seoraksan e saltare Abai, che è il motivo per cui Sokcho vale una notte e non mezza giornata',
    ],
    miaEsperienza:
      'Il Seoraksan è bello, ma per come è andata a noi il motivo per venire fin qui sta a valle. Sokcho sembra una città di mare qualsiasi finché non scopri cos\'è il quartiere di Abai: lo costruirono i profughi arrivati dal Nord durante la guerra, convinti di fermarsi qualche mese, e rimasti per sempre. Ci siamo arrivati attraversando un canale su una chiatta a fune che i passeggeri tirano a mano, tutti insieme, con dei ganci: costa pochi centesimi, dura due minuti e vale più di molte attrazioni. Sul monte, la salita a Ulsanbawi è dura nel tratto finale, ottocento gradini metallici su una parete di granito con il vuoto sotto, ma la vista dalla cima sulla costa e sul mare ripaga la fatica. Chi ci arriva in un fine settimana di ottobre trova una fila di persone sui gradini e un\'attesa che rovina la giornata: qui più che altrove il giorno feriale è una condizione.',
    luoghi: [
      {
        nome: "Parco nazionale del Seoraksan",
        testo: "Massiccio granitico con valli, cascate e sentieri. All'ingresso c'è il Buddha di bronzo di Sinheungsa.",
        come: "Autobus locale da Sokcho (circa 30 minuti) o taxi.",
        quando: "Primavera e autunno; in ottobre il foliage richiama folle.",
        tempo: "Giornata intera",
        consiglio: "Evitare i fine settimana di ottobre.",
      },
      {
        nome: "Gwongeumseong",
        testo: "Fortezza sulla cima, raggiungibile con la funivia che risparmia la salita.",
        come: "Funivia dal parco.",
        quando: "Mattina.",
        tempo: "1,5 ore",
        consiglio: "Utile per chi non vuole camminare.",
      },
      {
        nome: "Ulsanbawi",
        testo: "Eremo in cima a 808 gradini metallici lungo una parete di granito, con vista sulla costa.",
        come: "A piedi dal parco, circa 4 ore andata e ritorno.",
        quando: "Mattina, bel tempo.",
        tempo: "4 ore",
        consiglio: "La discesa pesa più della salita: ginocchia e scarpe adatte.",
      },
      {
        nome: "Villaggio di Abai",
        testo: "Quartiere costruito dai profughi del Nord durante la guerra, raggiungibile con una chiatta a fune che i passeggeri tirano a mano.",
        come: "Da Sokcho centro, a piedi o in taxi.",
        quando: "Tutto il giorno.",
        tempo: "1-2 ore",
        consiglio: "Costa pochi centesimi e vale più di molte attrazioni.",
      },
    ],
    programmi: [
      { titolo: "2 giorni: Sokcho e Seoraksan", tappe: ["Giorno 1: Seoraksan e Ulsanbawi","Sera: mercato di Sokcho","Giorno 2: Abai e chiatta, ojingeo sundae"] },
    ],
    zone: [
      { nome: "Sokcho città", perChi: "Chi vuole mare e mercato", testo: "Comoda per mercato e autobus del parco." },
    ],
    sapori: [
      { nome: "Ojingeo sundae", testo: "Calamaro ripieno, specialità dei profughi del Nord." },
      { nome: "Pesce e granchio", testo: "Al mercato centrale, con banchi che cucinano al momento." },
    ],
    attenzioni: [
      "Andare nel fine settimana di ottobre.",
      "Sottovalutare gli 808 gradini di Ulsanbawi.",
      "Fermarsi al Seoraksan e saltare Abai.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Una cabina della funivia del Seoraksan sopra le foreste del parco nazionale',
    immagine: '/images/corea-del-sud/sokcho-seoraksan.jpg',
  },
  {
    slug: 'andong',
    paeseSlug: 'corea-del-sud',
    ordine: 4,
    nome: 'Andong e il villaggio di Hahoe',
    tipologia: ['cultura', 'borghi', 'storia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il cuore del confucianesimo coreano, nella provincia del Gyeongsang settentrionale: il villaggio di Hahoe, patrimonio UNESCO, è abitato dalla stessa famiglia da seicento anni e conserva case di nobili e di contadini nello stesso perimetro, dentro un\'ansa del fiume Nakdong.',
    percheAndarci:
      'Qui si capisce la struttura sociale che ha retto la Corea per cinquecento anni. E la danza delle maschere di Hahoe è una delle poche forme di satira popolare sopravvissute: una volta l\'anno i contadini mettevano in ridicolo i nobili, con il loro permesso.',
    cosaVedere: [
      'Il villaggio di Hahoe, con le case dal tetto di paglia dei contadini e quelle dal tetto di tegole dei nobili',
      'Il Museo delle maschere di Hahoe, con gli esemplari originali in legno, tesoro nazionale',
      'L\'accademia confuciana di Dosan Seowon, anch\'essa patrimonio UNESCO, immersa nei boschi',
      'La scogliera di Buyongdae, dall\'altra parte del fiume, da cui si vede il villaggio nell\'ansa',
    ],
    cosaFare: [
      'Assistere allo spettacolo delle maschere byeolsingut, che si tiene regolarmente nei fine settimana',
      'Attraversare il fiume in barca e salire a Buyongdae per la vista dall\'alto',
      'Dormire in una hanok tradizionale dentro il villaggio, che è l\'unico modo di vederlo la sera',
      'Mangiare l\'andong jjimdak, il pollo brasato con verdure e noodles di patata dolce che porta il nome della città',
    ],
    doveDormire:
      'Dentro Hahoe, in una delle case tradizionali che affittano stanze: si dorme su un materasso sottile sul pavimento riscaldato, i bagni sono in comune, e alle cinque del pomeriggio, quando i pullman se ne vanno, il villaggio torna a essere un paese. È l\'unica ragione per non farlo in giornata.',
    doveMangiare:
      'L\'andong jjimdak è il piatto della città e si mangia nel mercato vecchio, dove un\'intera galleria è occupata da ristoranti che fanno solo quello. L\'altra specialità è l\'heotjesatbap, un bibimbap «da cerimonia» nato dalle offerte rituali confuciane, servito senza peperoncino e con le verdure disposte secondo una regola precisa. Da provare anche il soju di Andong, molto più forte di quello industriale.',
    comeArrivare:
      'Treno o autobus express da Seoul, circa 2-3 ore secondo il mezzo. Da Andong al villaggio di Hahoe c\'è un autobus locale che ci mette circa 40 minuti e passa di rado: prima di partire conviene guardare gli orari del ritorno.',
    comeSpostarsi: 'Autobus locali tra la città e i siti; il villaggio si gira interamente a piedi.',
    periodoMigliore:
      'primavera e autunno. A fine settembre-inizio ottobre c\'è il festival internazionale delle maschere: riempie la città ed è insieme il momento migliore e il più affollato.',
    costi: 'ingresso a Hahoe attorno ai 5.000 won, spettacolo delle maschere spesso gratuito.',
    erroriDaEvitare: [
      'Farlo in giornata da Seoul: significa vedere il villaggio solo nelle ore dei pullman, che sono le peggiori',
      'Non controllare gli orari dell\'autobus di ritorno da Hahoe: le corse sono poche e l\'ultima parte presto',
      'Aspettarsi un museo all\'aperto: è un paese abitato, con famiglie che ci vivono, e va trattato come tale',
    ],
    miaEsperienza:
      'Quasi nessun itinerario straniero include Hahoe, eppure spiega più cose di molti musei. Non è un villaggio ricostruito: ci vivono ancora i discendenti della stessa famiglia, le case sono abitate e nei cortili ci sono panni stesi e attrezzi agricoli. Mi ha colpito l\'urbanistica sociale: le case dei nobili, con i tetti di tegole, stanno in alto e al centro, quelle dei contadini, con i tetti di paglia, tutto attorno, e la gerarchia si legge camminando. La danza delle maschere è l\'altra faccia della stessa medaglia: una volta l\'anno i contadini mettevano in scena uno spettacolo in cui il monaco è corrotto e il nobile è un idiota, e i nobili assistevano. Dormirci cambia la visita: alle cinque i pullman se ne vanno tutti insieme e restano il fiume, i cani e qualche vecchio seduto fuori.',
    luoghi: [
      {
        nome: "Villaggio di Hahoe",
        testo: "Villaggio patrimonio UNESCO ancora abitato dai discendenti della stessa famiglia. Le case dei nobili (tetto di tegole) stanno in alto e al centro, quelle dei contadini (tetto di paglia) attorno.",
        come: "Autobus locale da Andong (circa 50 minuti); ultima corsa presto.",
        quando: "Mattina presto e sera.",
        tempo: "3-4 ore",
        consiglio: "Dormirci cambia la visita: la sera e l'alba sono un altro posto.",
      },
      {
        nome: "Museo delle maschere di Hahoe",
        testo: "Museo con maschere originali in legno, tesoro nazionale.",
        come: "Fuori dal villaggio, a pochi minuti a piedi.",
        quando: "Aperto con orari fissi.",
        tempo: "1 ora",
        consiglio: "Per capire il teatro delle maschere.",
      },
      {
        nome: "Dosan Seowon",
        testo: "Accademia confuciana patrimonio UNESCO immersa nei boschi.",
        come: "Autobus locale e taxi.",
        quando: "Mattina.",
        tempo: "1,5 ore",
        consiglio: "Silenzio e natura.",
      },
      {
        nome: "Buyongdae",
        testo: "Scogliera sulla riva opposta del fiume, con vista dall'alto sul villaggio.",
        come: "Si attraversa il fiume in barca.",
        quando: "Pomeriggio.",
        tempo: "1 ora",
        consiglio: "Dall'alto si legge la mappa del villaggio.",
      },
    ],
    programmi: [
      { titolo: "2 giorni: Hahoe e Andong", tappe: ["Giorno 1: Hahoe, museo delle maschere, notte in hanok","Giorno 2: Buyongdae, Dosan Seowon, cena con jjimdak"] },
    ],
    zone: [
      { nome: "Hahoe (hanok)", perChi: "Chi vuole vedere il villaggio di sera", testo: "Dormire in una casa tradizionale dentro il villaggio." },
    ],
    sapori: [
      { nome: "Andong jjimdak", testo: "Pollo brasato con verdure e noodles, nella galleria del mercato." },
      { nome: "Heotjesatbap", testo: "Bibimbap «da cerimonia» senza peperoncino." },
    ],
    attenzioni: [
      "Farlo in giornata da Seoul.",
      "Non controllare gli orari dell'ultimo autobus.",
      "Trattare il villaggio come un museo: è abitato.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il villaggio di Hahoe nell\'ansa del fiume Nakdong, con le montagne alle spalle, Andong',
    immagine: '/images/corea-del-sud/andong.jpg',
  },
  {
    slug: 'gyeongju',
    paeseSlug: 'corea-del-sud',
    ordine: 5,
    nome: 'Gyeongju',
    tipologia: ['storia', 'cultura', 'archeologia'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Fu la capitale del regno di Silla per quasi mille anni, dal 57 a.C. al 935 d.C. È una città bassa dove al posto dei palazzi ci sono decine di tumuli funerari erbosi, alti come colline, in mezzo alle strade e ai parchi. La chiamano «il museo senza muri», e per una volta la definizione è esatta.',
    percheAndarci:
      'È l\'unico posto in Corea dove la storia antica si vede a cielo aperto, senza ricostruzioni. E Bulguksa e l\'eremo di Seokguram, entrambi patrimonio UNESCO, sono i due capolavori dell\'arte buddista coreana.',
    cosaVedere: [
      'I tumuli reali del Daereungwon, con la Tomba del Cavallo Celeste aperta e visitabile dall\'interno',
      'Il tempio di Bulguksa, con le due pagode di pietra dell\'VIII secolo',
      'L\'eremo di Seokguram, la grotta artificiale sul monte con il Buddha di granito che guarda verso il mare',
      'Lo stagno di Donggung e Wolji (Anapji), che di notte si specchia nei padiglioni illuminati',
      'Cheomseongdae, l\'osservatorio astronomico del VII secolo, tra i più antichi al mondo ancora in piedi',
      'Il Museo Nazionale di Gyeongju, con la corona d\'oro di Silla',
    ],
    cosaFare: [
      'Giro dei tumuli in bicicletta, che è il modo giusto di muoversi in questa città',
      'Bulguksa e Seokguram nella stessa mattinata (vedi la scheda esperienza dedicata)',
      'Templestay in un monastero, per dormire e alzarsi con i monaci (vedi la scheda esperienza dedicata)',
      'Anapji dopo il tramonto, quando si accendono le luci sull\'acqua',
    ],
    doveDormire:
      'La zona attorno al Daereungwon è la più comoda, con le guesthouse in hanok che sono la scelta più coerente col posto. Bomun Lake è il quartiere dei resort, comodo in auto ma lontano da tutto il resto a piedi.',
    doveMangiare:
      'Gyeongju ha due specialità: il ssambap, un pasto in cui arrivano venti ciotoline di verdure, carne e salse da avvolgere nelle foglie, e il pane di Hwangnam, un dolcetto ripieno di fagioli rossi che qui si vende in scatole da regalo e si mangia camminando. Nella zona del mercato c\'è la cucina di tutti i giorni a prezzi bassi.',
    comeArrivare:
      'KTX fino a Singyeongju, circa 2 ore da Seoul e 30 minuti da Busan, poi autobus o taxi per il centro (la stazione è fuori città). È una tappa intermedia comoda tra Seoul e Busan.',
    comeSpostarsi:
      'La bicicletta è il mezzo giusto: il centro storico è in piano e i siti sono vicini. Per Bulguksa e Seokguram, fuori città sul monte Toham, servono autobus locali o taxi, e tra i due c\'è ancora una strada di montagna.',
    periodoMigliore:
      'aprile per i ciliegi, che qui fioriscono intorno ai tumuli e sono tra i più belli del paese, e ottobre-novembre per il foliage. L\'estate è calda e umida.',
    costi: 'Bulguksa e Seokguram circa 6.000 won ciascuno, Daereungwon 3.000, Museo Nazionale gratuito.',
    erroriDaEvitare: [
      'Farla in giornata da Busan: Gyeongju ha bisogno di due giorni e soprattutto di una sera, perché Anapji illuminato è la cosa più bella della città',
      'Programmare Seokguram senza controllare i collegamenti: dall\'ingresso di Bulguksa c\'è ancora una strada di montagna e gli autobus sono radi',
      'Aspettarsi di vedere il Buddha di Seokguram da vicino: è protetto da una vetrata e si guarda dall\'anticamera, cosa che delude chi non lo sa prima',
    ],
    miaEsperienza:
      'Sulla carta Gyeongju si sottovaluta; per noi è stata la tappa più riposante e forse la più bella del viaggio. I tumuli reali non sono chiusi in un parco archeologico: stanno in mezzo alla città, colline erbose alte venti metri accanto a un incrocio, e ci abbiamo girato attorno in bicicletta come se niente fosse. Uno è aperto e ci si entra, con la corona d\'oro esposta nel punto esatto in cui fu trovata. Bulguksa è bellissimo e molto affollato. Seokguram, lassù sul monte, è quello che lascia il segno: una grotta artificiale dell\'VIII secolo, fatta di blocchi di granito incastrati senza malta, con un Buddha seduto che guarda verso il mare d\'Oriente. Si osserva da dietro un vetro, dall\'anticamera, e chi non lo sa prima resta deluso. Il momento migliore però è Anapji dopo il buio, con i padiglioni riflessi nello stagno: dura mezz\'ora e vale la giornata.',
    luoghi: [
      {
        nome: "Daereungwon e Cheonmachong",
        testo: "Il parco dei tumuli reali di Silla, in mezzo alla città. La tomba del Cavallo Celeste è aperta e visitabile, con la corona d'oro nel punto dove fu trovata.",
        come: "A piedi o in bicicletta dal centro.",
        quando: "Tutto il giorno.",
        tempo: "1 ora",
        consiglio: "Si gira attorno in bicicletta come se niente fosse.",
      },
      {
        nome: "Bulguksa",
        testo: "Tempio dell'VIII secolo con le due pagode di pietra, patrimonio UNESCO.",
        come: "Autobus o taxi dal centro, fuori città sul monte Toham.",
        quando: "Mattina presto.",
        tempo: "1,5 ore",
        url: "https://www.bulguksa.or.kr/",
        consiglio: "Bellissimo e molto affollato.",
      },
      {
        nome: "Seokguram",
        testo: "Grotta artificiale dell'VIII secolo con un Buddha di granito che guarda il mare. Si osserva da dietro un vetro.",
        come: "Strada di montagna da Bulguksa; autobus radi.",
        quando: "Mattina.",
        tempo: "1 ora",
        consiglio: "Controllare i collegamenti.",
      },
      {
        nome: "Donggung e Wolji (Anapji)",
        testo: "Stagno di palazzo di Silla che di notte si specchia illuminato.",
        come: "A piedi o in bicicletta dal centro.",
        quando: "Dopo il tramonto.",
        tempo: "1 ora",
        consiglio: "Illuminato è la cosa più bella della città.",
      },
      {
        nome: "Templestay",
        testo: "Un monastero dove si dorme e ci si alza con i monaci.",
        come: "Prenotare in anticipo.",
        quando: "Una notte.",
        tempo: "1 notte",
        consiglio: "Vedi la scheda esperienza.",
      },
    ],
    programmi: [
      { titolo: "2 giorni: Gyeongju", tappe: ["Giorno 1: tumuli in bicicletta, Anapji al tramonto","Giorno 2: Bulguksa e Seokguram"] },
    ],
    zone: [
      { nome: "Centro storico", perChi: "Chi vuole girare in bicicletta", testo: "Centro in piano con i siti vicini." },
    ],
    sapori: [
      { nome: "Ssambap", testo: "Venti ciotoline da avvolgere nelle foglie." },
      { nome: "Pane di Hwangnam", testo: "Dolcetto con fagioli rossi, venduto in scatole da regalo." },
    ],
    attenzioni: [
      "Farla in giornata da Busan.",
      "Programmare Seokguram senza controllare i collegamenti.",
      "Aspettarsi di vedere il Buddha da vicino.",
    ],
    esperienzeSlugs: ['bulguksa-seokguram', 'templestay'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'I padiglioni del palazzo di Donggung illuminati e riflessi nello stagno di Wolji al crepuscolo, Gyeongju',
    immagine: '/images/corea-del-sud/gyeongju.jpg',
  },
  {
    slug: 'busan',
    paeseSlug: 'corea-del-sud',
    ordine: 6,
    nome: 'Busan',
    tipologia: ['città', 'mare', 'gastronomia'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La seconda città del paese e il suo porto principale, distesa tra il mare e le colline: spiagge cittadine, il mercato del pesce più grande della Corea, un tempio costruito sugli scogli e un quartiere di case colorate che è nato come baraccopoli di profughi di guerra.',
    percheAndarci:
      'È l\'esatto contrario di Seoul: più lenta, più rumorosa, più meridionale. Durante la guerra di Corea fu l\'unica grande città a non cadere mai. Il perimetro di Busan fu l\'ultimo lembo di paese a resistere, e la città si riempì di centinaia di migliaia di profughi che non se ne andarono più.',
    cosaVedere: [
      'Il villaggio culturale di Gamcheon, il quartiere di case colorate aggrappate alla collina, nato come insediamento di profughi',
      'Il mercato del pesce di Jagalchi, il più grande della Corea, gestito storicamente da donne',
      'Il tempio di Haedong Yonggungsa, costruito sugli scogli a picco sul mare',
      'Le spiagge di Haeundae e Gwangalli, con il ponte illuminato la sera',
      'Il cimitero commemorativo delle Nazioni Unite, l\'unico al mondo dedicato ai caduti ONU, con i soldati di ventidue paesi',
      'Il mercato di Gukje e i vicoli di Bosu-dong, la strada dei librai fondata dai profughi',
    ],
    cosaFare: [
      'Percorrere Gamcheon dall\'alto verso il basso, seguendo i vicoli (vedi la scheda esperienza dedicata)',
      'Colazione di pesce crudo al secondo piano del Jagalchi, dove si compra sotto e si fa cucinare sopra',
      'Sentiero costiero di Igidae, con la vista frontale sullo skyline di Haeundae',
      'Serata a Gwangalli, con il ponte illuminato e i locali sulla spiaggia',
      'Visita al cimitero ONU, dove la guerra torna a essere fatta di nomi',
    ],
    doveDormire:
      'Haeundae per la spiaggia e i servizi, Seomyeon per essere al centro dei trasporti e della vita notturna, Nampo-dong per il porto, i mercati e Gamcheon. Busan è lunga e stretta: la metropolitana risolve, ma la scelta della zona cambia le giornate.',
    doveMangiare:
      'Busan è una città di mare e si mangia di conseguenza. Le specialità sono il dwaeji gukbap, la zuppa di maiale con riso nata proprio qui durante la guerra dagli scarti che i profughi potevano permettersi, e il milmyeon, i noodles freddi di farina, versione povera del naengmyeon del Nord. Sono due piatti che raccontano la storia della città. Al Jagalchi si compra il pesce al banco e lo si fa cucinare al piano di sopra, con un supplemento. Da provare anche gli ssiat hotteok, le frittelle dolci ripiene di semi, al mercato di Gukje.',
    comeArrivare:
      'KTX da Seoul in poco più di 2h30, la tratta ferroviaria più trafficata del paese: conviene prenotare qualche giorno prima. Volo su Gimhae (PUS) per chi arriva da Jeju.',
    comeSpostarsi: 'Metropolitana con quattro linee e T-money; autobus per Gamcheon e Haedong Yonggungsa, che non sono serviti dalla metro.',
    periodoMigliore:
      'maggio-giugno e settembre-ottobre. Luglio e agosto sono la stagione delle spiagge e Haeundae diventa un tappeto di ombrelloni; in ottobre si tiene il festival internazionale del cinema, il più importante dell\'Asia.',
    costi: 'quasi tutto gratuito o quasi: Gamcheon si visita liberamente, il tempio è gratuito, i mercati sono mercati.',
    erroriDaEvitare: [
      'Trattare Gamcheon come uno sfondo per le fotografie: è un quartiere abitato, con anziani che vivono in quelle case, e i cartelli che chiedono silenzio vanno rispettati',
      'Andare a Haedong Yonggungsa nel fine settimana, quando il percorso sugli scogli si fa in fila indiana',
      'Saltare il cimitero ONU perché «è un cimitero»: è il luogo che dà senso a tutto quello che si è visto alla DMZ',
      'Sottovalutare le distanze: Busan si allunga per trenta chilometri lungo la costa',
    ],
    miaEsperienza:
      'Busan mi è piaciuta proprio perché non è Seoul: è più disordinata e più rumorosa, la gente parla più forte e il dialetto si sente anche senza sapere il coreano. Di Gamcheon tutti mostrano le foto, e conviene essere precisi: quelle case colorate sulla collina sono nate come baraccopoli per i profughi di guerra, e la vernice è arrivata solo negli anni Duemila con un progetto di riqualificazione. Sapendolo, camminarci dentro è diverso dal fotografarlo. La tappa che nessuno mette in programma, e che mi è rimasta di più, è il cimitero delle Nazioni Unite: file di lapidi di ragazzi di ventidue paesi, molti di vent\'anni, in un giardino silenzioso in mezzo alla città. Dopo la DMZ, che è tutta geopolitica, lì la guerra torna a essere fatta di nomi. Sul cibo un solo consiglio: il dwaeji gukbap sembra una zuppa qualsiasi ed è nato dalla fame di questa città nel 1951. Mangiarlo in uno dei locali storici vicino al porto è la cosa più busanese che si possa fare.',
    luoghi: [
      {
        nome: "Villaggio di Gamcheon",
        testo: "Quartiere di case colorate sulla collina, nato come insediamento di profughi di guerra.",
        come: "Autobus dalla metro.",
        quando: "Mattina presto.",
        tempo: "2 ore",
        consiglio: "È un quartiere abitato: rispettare i cartelli sul silenzio.",
      },
      {
        nome: "Mercato di Jagalchi",
        testo: "Il più grande mercato del pesce della Corea, gestito da donne. Si compra sotto e si fa cucinare sopra.",
        come: "Metro linea 1 fino a Jagalchi.",
        quando: "Mattina.",
        tempo: "1,5 ore",
        consiglio: "Colazione di pesce crudo al secondo piano.",
      },
      {
        nome: "Haedong Yonggungsa",
        testo: "Tempio costruito sugli scogli a picco sul mare.",
        come: "Autobus.",
        quando: "Evitare il fine settimana.",
        tempo: "1,5 ore",
        consiglio: "Nel fine settimana si cammina in fila indiana.",
      },
      {
        nome: "Haeundae e Gwangalli",
        testo: "Le due spiagge con lo skyline e il ponte illuminato.",
        come: "Metro.",
        quando: "Sera a Gwangalli.",
        tempo: "2 ore",
        consiglio: "Il sentiero costiero di Igidae mostra lo skyline.",
      },
      {
        nome: "Cimitero ONU",
        testo: "Giardino con le lapidi di soldati di ventidue paesi, in mezzo alla città.",
        come: "Metro e breve tratto.",
        quando: "Mattina.",
        tempo: "1 ora",
        consiglio: "Dà senso al viaggio dopo la DMZ.",
      },
    ],
    programmi: [
      { titolo: "2 giorni: Busan", tappe: ["Giorno 1: Gamcheon, Jagalchi, Gwangalli","Giorno 2: Haedong Yonggungsa, Igidae, cimitero ONU"] },
    ],
    zone: [
      { nome: "Haeundae", perChi: "Chi vuole spiaggia", testo: "Zona turistica con hotel." },
      { nome: "Seomyeon / Nampo", perChi: "Chi vuole metro e locali", testo: "Centrale." },
    ],
    sapori: [
      { nome: "Dwaeji gukbap", testo: "Zuppa di maiale con riso nata durante la guerra." },
      { nome: "Milmyeon", testo: "Noodles freddi di farina." },
    ],
    attenzioni: [
      "Trattare Gamcheon come sfondo.",
      "Haedong Yonggungsa nel fine settimana.",
      "Saltare il cimitero ONU.",
    ],
    esperienzeSlugs: ['gamcheon-busan'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La spiaggia di Haeundae di notte con le torri dell\'LCT illuminate, Busan',
    immagine: '/images/corea-del-sud/busan.jpg',
  },
  {
    slug: 'jeonju',
    paeseSlug: 'corea-del-sud',
    ordine: 7,
    nome: 'Jeonju',
    tipologia: ['gastronomia', 'cultura', 'borghi'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città dove è nato il bibimbap e dove sopravvive il più grande villaggio di hanok della Corea: più di ottocento case tradizionali in un unico quartiere, in una città che l\'UNESCO ha riconosciuto come città creativa della gastronomia.',
    percheAndarci:
      'È la capitale gastronomica del paese. E il quartiere di hanok, per quanto turistico, è l\'unico posto dove si può dormire in una casa tradizionale senza uscire dalla città.',
    cosaVedere: [
      'Il villaggio di hanok, con le oltre ottocento case dai tetti curvi',
      'Il santuario di Gyeonggijeon, con il ritratto del fondatore della dinastia Joseon',
      'La cattedrale di Jeondong, in mattoni rossi, costruita dove erano stati giustiziati i primi martiri cattolici coreani',
      'Il belvedere di Omokdae, da cui si vedono tutti i tetti del villaggio insieme',
      'Il mercato di Nambu, con la sua sezione notturna nel fine settimana',
    ],
    cosaFare: [
      'Mangiare il bibimbap nella città in cui è nato, servito in una ciotola di ottone con una dozzina di ingredienti disposti a raggiera',
      'Girare il villaggio in hanbok, come fanno quasi tutti i coreani che vengono qui',
      'Dormire in una hanok, con il pavimento riscaldato dall\'ondol',
      'Assaggiare il makgeolli di Jeonju, servito in grandi brocche con una tavolata di contorni inclusi',
    ],
    doveDormire:
      'Dentro il villaggio di hanok, che è il motivo per cui ci si ferma: si dorme su un materasso sul pavimento caldo, in stanze essenziali, con i bagni spesso condivisi. Fuori dal villaggio gli hotel costano meno ma la sosta perde senso.',
    doveMangiare:
      'Il bibimbap di Jeonju è diverso da quello del resto del paese: riso cotto nel brodo di manzo, una dozzina di verdure, manzo crudo condito e un tuorlo, tutto in una ciotola di ottone. Va mescolato con energia. Le altre istituzioni locali sono il kongnamul gukbap, la zuppa di germogli di soia che qui si mangia al mattino dopo una sera di makgeolli, e le «makgeolli alley», dove ordini la bevanda e a ogni brocca arrivano gratis sempre più contorni.',
    comeArrivare: 'KTX da Seoul in circa 1h40, oppure autobus express. La stazione è a qualche chilometro dal villaggio di hanok, collegata da autobus urbani e taxi.',
    comeSpostarsi: 'Il villaggio si gira a piedi; per il resto della città autobus locali e taxi.',
    periodoMigliore: 'primavera e autunno; in ottobre si tiene il festival del cibo. Nei fine settimana il villaggio è pienissimo di visitatori coreani.',
    costi: 'ingresso al villaggio gratuito, Gyeonggijeon 3.000 won circa; bibimbap 10.000-15.000 won nei locali storici.',
    erroriDaEvitare: [
      'Andarci in un fine settimana: il villaggio di hanok è una delle mete domestiche più popolari della Corea e in quei giorni si cammina in mezzo alla folla',
      'Fermarsi solo alla via principale, che è tutta negozi di cibo da asporto: le vie laterali hanno ancora le case abitate',
      'Aspettarsi un borgo antico intatto: molte hanok sono ricostruzioni recenti, e il quartiere è un\'operazione di conservazione',
    ],
    miaEsperienza:
      'Jeonju vale la sosta per una ragione sola, e basta: si viene qui a mangiare. Il bibimbap nella ciotola di ottone, con il riso cotto nel brodo invece che nell\'acqua, è più ricco di quello che si mangia altrove, e va mescolato con energia fino a rendere tutto omogeneo, l\'opposto di quello che fa chi vuole salvare la disposizione per la foto. Il villaggio di hanok è molto turistico: la via principale è una fila continua di banchi di street food e di negozi che noleggiano hanbok, e nel fine settimana ci si muove a fatica. Bastano però due traverse per trovare cortili silenziosi e case ancora abitate. E dormire in una hanok con il pavimento caldo sotto la schiena me lo ricordo meglio di molte attrazioni.',
    luoghi: [
      {
        nome: "Villaggio di hanok",
        testo: "Oltre ottocento case dai tetti curvi, molto turistico. Le vie laterali hanno ancora case abitate.",
        come: "A piedi.",
        quando: "Giorno feriale.",
        tempo: "3 ore",
        consiglio: "Bastano due traverse per cortili silenziosi.",
      },
      {
        nome: "Gyeonggijeon",
        testo: "Santuario con il ritratto del fondatore della dinastia Joseon.",
        come: "A piedi dal villaggio.",
        quando: "Mattina.",
        tempo: "45 minuti",
        consiglio: "Poca gente.",
      },
      {
        nome: "Cattedrale di Jeondong",
        testo: "Cattedrale in mattoni rossi costruita dove furono giustiziati i primi martiri cattolici.",
        come: "A piedi.",
        quando: "Tutto il giorno.",
        tempo: "30 minuti",
        consiglio: "Vicina al villaggio.",
      },
      {
        nome: "Omokdae",
        testo: "Belvedere sui tetti del villaggio.",
        come: "A piedi, breve salita.",
        quando: "Tramonto.",
        tempo: "30 minuti",
        consiglio: "Panorama sul villaggio.",
      },
    ],
    programmi: [
      { titolo: "1 giorno: Jeonju", tappe: ["Villaggio di hanok","Pranzo con bibimbap","Gyeonggijeon e cattedrale","Omokdae al tramonto"] },
    ],
    zone: [
      { nome: "Hanok nel villaggio", perChi: "Chi vuole dormire in una casa tradizionale", testo: "Pavimento riscaldato dall'ondol." },
    ],
    sapori: [
      { nome: "Bibimbap di Jeonju", testo: "Riso cotto nel brodo di manzo, in ciotola di ottone." },
      { nome: "Makgeolli", testo: "Servito in grandi brocche." },
      { nome: "Kongnamul gukbap", testo: "Zuppa di germogli di soia." },
    ],
    attenzioni: [
      "Andarci nel fine settimana.",
      "Fermarsi alla via principale.",
      "Aspettarsi un borgo antico intatto.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'I tetti in tegole del villaggio hanok di Jeonju visti dall\'alto, con la città moderna alle spalle',
    immagine: '/images/corea-del-sud/jeonju.jpg',
  },
  {
    slug: 'jeju',
    paeseSlug: 'corea-del-sud',
    ordine: 8,
    nome: 'Jeju e le haenyeo',
    tipologia: ['isole', 'natura', 'cultura'],
    giorniConsigliati: '4 giorni, di cui almeno uno dedicato alla costa est e alle haenyeo',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola vulcanica a sud della penisola, dominata dall\'Hallasan, la montagna più alta della Corea del Sud. Il mare intorno è freddo, e da secoli ci si immergono in apnea donne che oggi hanno in media più di settant\'anni, per raccogliere molluschi e alghe. Sono le haenyeo, e dal 2016 la loro cultura è patrimonio immateriale UNESCO.',
    percheAndarci:
      'Per l\'isola, che ha crateri, cascate, tubi di lava e un sentiero costiero lungo 437 chilometri. E soprattutto per le haenyeo: è una delle ultime occasioni di vedere dal vivo una pratica che sta finendo e che per secoli ha plasmato la società e l\'economia dell\'isola, un caso senza uguali nell\'Asia orientale.',
    cosaVedere: [
      'Il Museo delle haenyeo a Gujwa-eup, sulla costa orientale, il punto di partenza per capire tutto il resto',
      'Seongsan Ilchulbong, il cono vulcanico che esce dal mare, patrimonio UNESCO, con le dimostrazioni di immersione delle haenyeo ai suoi piedi',
      'L\'Hallasan, 1.947 metri, con i sentieri che portano al cratere sommitale',
      'Il tubo di lava di Manjanggul, una galleria vulcanica lunga chilometri',
      'Le cascate di Jeongbang, tra le pochissime al mondo che cadono direttamente in mare',
      'Il Parco della Pace 4·3, dedicato ai fatti del 1948-1954, la pagina più dura della storia dell\'isola',
      'I bulteok, i ripari circolari in pietra dove le haenyeo si cambiano e si riscaldano: ne restano una settantina',
    ],
    cosaFare: [
      'Assistere a un\'immersione delle haenyeo e ascoltare il sumbisori (vedi la scheda esperienza dedicata)',
      'Alba su Seongsan Ilchulbong, che in coreano significa «picco del sole nascente» (vedi la scheda esperienza dedicata)',
      'Salita all\'Hallasan lungo uno dei due sentieri che arrivano in cima (vedi la scheda esperienza dedicata)',
      'Camminare una tappa degli Olle Trail, i sentieri costieri che fanno il giro dell\'isola',
      'Mangiare in una delle bancarelle gestite direttamente dalle cooperative di haenyeo, dove si paga il pescato a loro',
    ],
    doveDormire:
      'Jeju-si a nord, vicino all\'aeroporto, è la base più comoda per i collegamenti; Seogwipo a sud ha il clima più mite e le cascate; la costa orientale attorno a Seongsan è la scelta giusta per chi viene soprattutto per le haenyeo e per l\'alba sul cono vulcanico. In auto l\'isola si attraversa da nord a sud in due ore, quindi la base conta meno che altrove.',
    doveMangiare:
      'Jeju ha una cucina sua, molto diversa da quella della penisola. Il maiale nero dell\'isola, allevato qui da secoli, si mangia alla griglia ed è la cosa più famosa; il galchi, il pesce sciabola, si serve grigliato o in umido. Poi c\'è quello che raccolgono le haenyeo (orecchie di mare, ricci, polpo, conchiglie), venduto spesso nelle bancarelle delle loro cooperative: è il modo più diretto per far arrivare i soldi a loro. Da provare anche il gogi guksu, i noodles in brodo di maiale, e il tè al mandarino, il prodotto agricolo simbolo dell\'isola.',
    comeArrivare:
      'Volo da Seoul Gimpo, Busan o altre città: la Seoul-Jeju è una delle tratte più trafficate al mondo, con decine di voli al giorno e prezzi bassissimi. In alternativa il traghetto da Mokpo o Wando, molto più lento.',
    comeSpostarsi:
      'L\'auto a noleggio è di gran lunga il mezzo migliore: gli autobus ci sono e costano poco, ma sono lenti, e molti punti della costa si raggiungono a fatica. Serve la patente internazionale, da fare in Italia prima di partire.',
    periodoMigliore:
      'aprile-giugno e settembre-ottobre. L\'estate è affollata di turismo interno e tra agosto e settembre arrivano i tifoni. L\'inverno è ventoso e freddo: le haenyeo lavorano nelle condizioni più dure ed è più raro vederle in acqua.',
    costi:
      'Museo delle haenyeo circa 1.100 won, Seongsan Ilchulbong 5.000, Manjanggul 4.000, Parco della Pace 4·3 gratuito. Noleggio auto da 40-60€ al giorno, più caro in alta stagione.',
    erroriDaEvitare: [
      'Aspettarsi di trovare le haenyeo in acqua a comando: escono secondo maree, stagione e condizioni del mare, e nei mesi di fermo biologico non si immergono. Le uniche uscite a orario fisso sono le dimostrazioni organizzate',
      'Fotografarle da vicino senza chiedere: sono donne al lavoro, spesso molto anziane, non un\'attrazione folkloristica',
      'Salire sull\'Hallasan senza prenotare: i due sentieri che arrivano in cima hanno quote giornaliere e prenotazione obbligatoria online',
      'Noleggiare l\'auto senza patente internazionale, che in Corea è richiesta e non negoziabile',
      'Ridurre Jeju a un\'isola balneare: il mare è freddo, il vento è costante, e qui quello che vale è la terra e chi ci vive',
    ],
    confronti: [
      {
        titolo: 'Come incontrare le haenyeo',
        introduzione:
          'È la ragione principale per venire a Jeju, e anche la più facile da sbagliare. Le haenyeo non sono uno spettacolo a orario e il loro numero sta crollando: erano oltre 4.500 nel 2013, alla fine del 2024 erano circa 2.600, e più del 60% ha superato i settant\'anni. Ci sono quattro modi per avvicinarsi, molto diversi per onestà e probabilità di riuscita.',
        opzioni: [
          {
            nome: 'Il Museo delle haenyeo a Gujwa-eup',
            sintesi: 'Il museo dedicato, sulla costa orientale, con attrezzatura originale, ricostruzioni dei bulteok, testimonianze filmate e la storia della rivolta del 1932.',
            costo: 'circa 1.100 won',
            durata: '1-2 ore',
            pro: [
              'È il posto dove si capisce tutto il resto: senza, un\'immersione vista da lontano resta una curiosità',
              'Racconta la parte politica che nessun tour menziona, compresa la protesta anti-giapponese del 1932 guidata dalle haenyeo',
              'Aperto sempre, indipendente da maree e stagione',
              'Costa pochissimo',
            ],
            contro: ['Non si vede nessuna haenyeo in carne e ossa', 'Fuori mano rispetto ai circuiti classici dell\'isola'],
            perChi: 'Tutti, come primo passo. È il presupposto degli altri tre.',
          },
          {
            nome: 'La dimostrazione a Seongsan Ilchulbong',
            sintesi: 'Immersioni dimostrative organizzate ai piedi del cono vulcanico, con orari pubblicati, seguite dalla vendita del pescato.',
            costo: 'gratuito da guardare, oltre al biglietto del sito',
            durata: '30 minuti circa',
            pro: [
              'È l\'unica occasione quasi garantita di vederle entrare in acqua',
              'Si sente il sumbisori, il fischio con cui espellono l\'anidride carbonica quando riemergono: è il tratto più riconoscibile del loro mestiere',
              'Si può comprare da loro subito dopo, e i soldi restano alla cooperativa',
            ],
            contro: [
              'È una dimostrazione: breve, in acqua bassa, con il pubblico intorno',
              'Gli orari cambiano con maree e meteo e le uscite vengono annullate',
              'Molto affollata nei fine settimana e in alta stagione',
            ],
            perChi: 'Chi ha un solo giorno sulla costa est e vuole buone probabilità di vederle.',
          },
          {
            nome: 'I villaggi della costa e i bulteok',
            sintesi: 'Andare nei paesi dove lavorano (Hado-ri, Gujwa, Jongdal) con la marea giusta e guardare da lontano, senza organizzare niente.',
            costo: 'gratuito',
            durata: 'dipende: può non succedere nulla',
            pro: [
              'È l\'unica versione non addomesticata: donne al lavoro, senza pubblico',
              'Si vedono i bulteok, i ripari circolari in pietra dove si cambiano e si scaldano, che erano anche il luogo in cui la comunità prendeva le decisioni a voto',
              'Nessun costo e nessuna folla',
            ],
            contro: [
              'Nessuna garanzia: dipende da marea, stagione, mare e fermo biologico',
              'Serve un\'auto e la disponibilità a tornare più volte',
              'Vanno rispettate delle regole non scritte: non avvicinarsi, non fotografare da vicino, non entrare nei bulteok',
            ],
            perChi: 'Chi ha più giorni sull\'isola e accetta di non trovare niente.',
          },
          {
            nome: 'Le bancarelle e i ristoranti delle cooperative',
            sintesi: 'Mangiare il pescato là dove lo vendono direttamente le haenyeo, lungo la costa: orecchie di mare, ricci, polpo, conchiglie.',
            costo: 'variabile, a peso',
            durata: 'un pasto',
            pro: [
              'Così i soldi arrivano a loro, senza intermediari',
              'Si parla con loro, per quanto lo permetta la lingua',
              'Il pescato è di poche ore prima, e la differenza si sente',
            ],
            contro: ['Non si vede l\'immersione', 'Prezzi non sempre bassi, soprattutto per le orecchie di mare', 'Poche insegne in inglese'],
            perChi: 'Chiunque: è il complemento naturale di qualsiasi delle altre tre opzioni.',
          },
        ],
        raccomandazione:
          'La combinazione che funziona: museo al mattino, dimostrazione a Seongsan nel pomeriggio secondo l\'orario delle maree, pranzo o cena a una bancarella delle cooperative. Con un giorno in più si aggiunge una mattina nei villaggi della costa est, senza aspettative: se capita, è la versione vera.',
      },
    ],
    miaEsperienza:
      'Jeju viene venduta come isola di vacanza, ed è la lettura sbagliata: il mare è freddo, il vento non smette mai, e quello che vale è la terra e soprattutto chi ci lavora. Le haenyeo sono il motivo per arrivare fin qui, e prima di cercarle conviene sapere chi sono. Scendono in apnea fino a dieci metri, senza bombole, con la sola muta, per raccogliere molluschi e alghe. Restano sotto un paio di minuti e riemergono con un fischio acutissimo, il sumbisori, che serve a buttare fuori l\'anidride carbonica in un colpo solo: dal molo lo abbiamo sentito prima di vedere qualsiasi cosa. Riconoscono le compagne da quel suono. Quello che mi ha spiazzato, però, sono le età. La donna che usciva dall\'acqua con la rete piena aveva settantacinque anni, e non è un\'eccezione: oltre il sessanta per cento di loro ha superato i settanta, e in poco più di dieci anni sono passate da poco più di quattromila a circa duemilaseicento. Il museo di Gujwa spiega il resto, compresa la parte che nessun tour racconta. Qui per secoli il reddito in casa lo hanno portato le donne, con un\'autonomia economica che nel resto della Corea confuciana non esisteva, e nel 1932 furono loro a guidare una delle più grandi proteste contro il dominio giapponese. Vederle oggi significa vedere la fine di qualcosa, ed è per questo che va fatto adesso.',
    luoghi: [
      {
        nome: "Museo delle haenyeo",
        testo: "Museo a Gujwa-eup sulla vita delle donne subacquee dell'isola.",
        come: "In auto a noleggio.",
        quando: "Aperto con orari fissi.",
        tempo: "1,5 ore",
        consiglio: "Punto di partenza per capire.",
      },
      {
        nome: "Seongsan Ilchulbong",
        testo: "Cono vulcanico che esce dal mare, patrimonio UNESCO.",
        come: "Auto.",
        quando: "Alba.",
        tempo: "2 ore",
        consiglio: "Alba sul «picco del sole nascente».",
      },
      {
        nome: "Hallasan",
        testo: "Vulcano di 1.947 metri, con sentieri fino al cratere.",
        come: "Auto, poi sentiero.",
        quando: "Giornata, bel tempo.",
        tempo: "6-9 ore",
        consiglio: "Salita lunga.",
      },
      {
        nome: "Manjanggul",
        testo: "Tubo di lava lungo.",
        come: "Auto.",
        quando: "Mattina.",
        tempo: "1 ora",
        consiglio: "Fa fresco dentro.",
      },
      {
        nome: "Parco della Pace 4·3",
        testo: "Memoriale dei fatti del 1948.",
        come: "Auto.",
        quando: "Mattina.",
        tempo: "1,5 ore",
        costo: "Ingresso gratuito",
        consiglio: "Per capire la storia dell'isola.",
      },
    ],
    programmi: [
      { titolo: "3 giorni: Jeju", tappe: ["Giorno 1: haenyeo e Seongsan","Giorno 2: Hallasan","Giorno 3: Manjanggul e Parco della Pace"] },
    ],
    zone: [
      { nome: "Jeju città", perChi: "Chi vuole trasporti", testo: "Aeroporto vicino." },
      { nome: "Seogwipo", perChi: "Chi vuole il sud", testo: "Più tranquilla." },
    ],
    sapori: [
      { nome: "Maiale nero", testo: "Alla griglia, la cosa più famosa." },
      { nome: "Galchi", testo: "Pesce sciabola grigliato o in umido." },
    ],
    attenzioni: [
      "Aspettarsi le haenyeo in acqua a comando.",
      "Fotografarle da vicino senza chiedere.",
      "Noleggiare senza patente internazionale.",
    ],
    esperienzeSlugs: ['haenyeo-jeju', 'seongsan-ilchulbong', 'hallasan'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La costa di Yongmeori e il mare vista dal monte Sanbangsan, isola di Jeju',
    immagine: '/images/corea-del-sud/jeju.jpg',
  },
]
