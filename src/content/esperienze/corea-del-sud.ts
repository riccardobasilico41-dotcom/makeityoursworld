import type { Esperienza } from '@/lib/types'

// Nessun operatore, hotel o ristorante è stato inventato. Le due schede
// storiche — DMZ/JSA e haenyeo — poggiano su date, cifre e status UNESCO
// verificabili. L\'accesso alla JSA di Panmunjom è però sospeso e riaperto a
// fasi alterne dal 2023: va verificato poco prima di partire.

export const esperienzeCoreaDelSud: Esperienza[] = [
  {
    slug: 'tour-dmz-terzo-tunnel',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'dmz',
    nome: 'Tour della DMZ e Terzo Tunnel d\'Infiltrazione',
    localita: 'Paju, provincia del Gyeonggi, circa un\'ora a nord di Seoul',
    cosE:
      'La gita di una giornata nelle aree controllate attorno alla Zona Demilitarizzata: il parco della memoria di Imjingak, la discesa a piedi nel Terzo Tunnel d\'Infiltrazione, l\'Osservatorio di Dora affacciato sulla Corea del Nord e la stazione di Dorasan, costruita nel 2002 sulla linea ferroviaria per Pyongyang e mai entrata in servizio regolare.',
    percheFarla:
      'È l\'unico modo di vedere da vicino una guerra che non si è mai chiusa. L\'armistizio firmato a Panmunjom il 27 luglio 1953 non è mai diventato un trattato di pace. I tunnel scavati sotto il confine, il villaggio vetrina dall\'altra parte, i binari che finiscono nel nulla: tutto quello che si attraversa in questa giornata viene da quella firma mancata.',
    durata: 'mezza giornata o giornata intera, 5-8 ore compresi i trasferimenti da Seoul',
    periodo:
      'tutto l\'anno. Le giornate limpide di autunno e inverno offrono la visibilità migliore dall\'Osservatorio di Dora. Le visite sono normalmente sospese il lunedì e nelle festività nazionali, e possono essere annullate senza preavviso per esercitazioni o tensioni al confine.',
    costo: 'indicativamente 50-90€ a persona da Seoul, con pranzo spesso incluso',
    comePrenotare:
      'Solo tramite operatori autorizzati, con partenza da Seoul: non si accede in autonomia, né in auto né con i mezzi pubblici. Si prenota con qualche giorno di anticipo, comunicando i dati del passaporto; nei periodi di punta conviene farlo una settimana prima.',
    cosaPortare:
      'Prima di tutto il passaporto originale: senza non si passa il checkpoint, e fotocopie o foto sul telefono non valgono. Poi scarpe comode per la discesa nel tunnel e un giubbino, perché sottoterra la temperatura è costante e bassa.',
    perChiEAdatta:
      'A tutti, con un\'avvertenza sul tunnel: la galleria di accesso è una rampa ripida e lunga, e il cunicolo vero e proprio è alto poco più di un metro e mezzo, tanto che si cammina curvi con il caschetto che sfrega il soffitto. Chi soffre di claustrofobia o ha problemi alle ginocchia può saltarlo e aspettare fuori senza perdere il resto.',
    miaEsperienza:
      'Più di ogni altra, questa giornata dipende da quanto hai letto prima, perché da solo il paesaggio non dice niente: colline, filo spinato, un parcheggio. Nel Terzo Tunnel diventa tutto fisico. Siamo scesi per centinaia di metri lungo una rampa ripidissima, poi abbiamo proseguito piegati in una galleria scavata nella roccia, fino a una barriera di cemento oltre la quale il cunicolo continua verso nord. Fu scoperto nel 1978 grazie a un disertore, arriva a poco più di quaranta chilometri da Seoul e avrebbe potuto far passare decine di migliaia di soldati in un\'ora. Dall\'Osservatorio di Dora, col binocolo, si vedono i campi del Nord e Kijong-dong, il villaggio costruito apposta per essere guardato: case con le finestre senza vetri e le luci accese a orario. Quella che mi è rimasta più a lungo è Dorasan, una stazione nuova e lucida, con i tabelloni delle partenze e il personale in servizio, che dal 2002 aspetta un treno per Pyongyang. Il cartello non dice «ultima stazione del Sud»: dice «prima stazione verso il Nord».',
    giudizio: 'imperdibile',
    alternative: [
      'Il tour della JSA di Panmunjom, quando è aperta: un\'esperienza del tutto diversa e molto più difficile da ottenere',
      'Il Memoriale della Guerra di Corea a Seoul, gratuito, da vedere il giorno prima: è quello che rende leggibile tutto il resto',
      'L\'Osservatorio dell\'Unificazione di Goseong, sulla costa orientale, molto meno battuto',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il binario del trenino che scende nel Terzo Tunnel d\'Infiltrazione, nella DMZ',
    immagine: '/images/corea-del-sud/tour-dmz-terzo-tunnel.jpg',
  },
  {
    slug: 'jsa-panmunjom',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'dmz',
    nome: 'La JSA di Panmunjom',
    localita: 'Joint Security Area, Panmunjom, sulla linea di demarcazione militare',
    cosE:
      'L\'unico punto della frontiera dove i soldati delle due Coree si fronteggiano a pochi metri di distanza: un piazzale con le baracche azzurre delle conferenze costruite a cavallo della linea di demarcazione, la Freedom House sul lato sud e, poco lontano, il Ponte del Non Ritorno. Dentro la sala delle riunioni si attraversa fisicamente il confine.',
    percheFarla:
      'È il luogo in cui la divisione della penisola è diventata concreta. Qui è stato firmato l\'armistizio del 1953; qui nel 1976 due ufficiali americani furono uccisi a colpi d\'ascia durante la potatura di un pioppo; e qui nel 2018 i leader delle due Coree si sono stretti la mano davanti alle telecamere di tutto il mondo.',
    durata: 'giornata intera',
    periodo:
      'quando è aperta, e non è scontato: dal 2023 l\'ingresso civile a Panmunjom è stato sospeso più volte e la riapertura dipende dalla situazione diplomatica. Conviene controllare poco prima della partenza.',
    costo: 'sensibilmente più alto del tour standard della DMZ, per via delle procedure di autorizzazione',
    comePrenotare:
      'Solo con operatori accreditati, con 2-4 settimane di anticipo in alta stagione e 1-2 in bassa. I dati del passaporto vanno trasmessi 5-7 giorni prima per l\'autorizzazione militare, e va firmata una dichiarazione di responsabilità. Esistono limitazioni per alcune nazionalità e regole diverse per i cittadini sudcoreani. La visita può essere annullata all\'ultimo momento senza possibilità di recupero.',
    cosaPortare:
      'Passaporto originale, obbligatorio. E abiti conformi al codice previsto: niente jeans strappati, sandali, canottiere o capi militari. Le restrizioni fotografiche vengono fatte rispettare: si scatta solo dove e quando la guida lo consente.',
    perChiEAdatta:
      'A chi ha date flessibili, prenota con largo anticipo e mette in conto che possa saltare. Non è adatta a chi costruisce l\'intero viaggio attorno a questa giornata.',
    miaEsperienza:
      'La JSA è l\'unica parte della frontiera in cui la tensione la senti addosso, senza doverla immaginare. Si arriva dopo una trafila di controlli, si firma una liberatoria che spiega senza giri di parole quali sono i rischi e si scende dal pullman in un piazzale dove i soldati sudcoreani stanno in posizione fissa, mezzi coperti dietro le baracche; dall\'altra parte, a venti metri, c\'è la Corea del Nord. Nella sala delle conferenze la linea di demarcazione passa esattamente in mezzo al tavolo, e girandoci attorno si finisce tecnicamente in territorio nordcoreano per qualche secondo. Il pezzo che racconta di più però è il Ponte del Non Ritorno, un ponticello grigio in mezzo al verde: nel 1953 i prigionieri di guerra ci passarono sopra dovendo scegliere da che parte restare, una volta sola e senza ripensamenti. Da lì il nome. Un punto va detto chiaro: dal 2023 questa visita è stata più spesso chiusa che aperta, e chi organizza il viaggio contandoci rischia di restare a mani vuote.',
    giudizio: 'imperdibile',
    alternative: [
      'Il tour standard della DMZ con Terzo Tunnel e Dorasan, sempre disponibile e da prenotare comunque come piano principale',
      'Il Memoriale della Guerra di Corea a Seoul, per il contesto storico completo',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Un militare osserva la Joint Security Area di Panmunjom, con le baracche blu sulla linea di demarcazione',
    immagine: '/images/corea-del-sud/jsa-panmunjom.jpg',
  },
  {
    slug: 'haenyeo-jeju',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'jeju',
    nome: 'Le haenyeo, le donne del mare di Jeju',
    localita: 'Costa orientale di Jeju: Gujwa-eup, Hado-ri, Seongsan',
    cosE:
      'Le haenyeo sono le pescatrici in apnea di Jeju: scendono fino a una decina di metri senza bombole, con la sola muta, una maschera e un galleggiante (il tewak), per raccogliere orecchie di mare, ricci, polpi e alghe. Restano sott\'acqua un paio di minuti per volta, per ore, e riemergono con un fischio acutissimo, il sumbisori, con cui espellono l\'anidride carbonica in un colpo solo. Dal 2016 la loro cultura è nella lista del patrimonio immateriale UNESCO.',
    percheFarla:
      'È una pratica che sta finendo sotto gli occhi di chi la guarda: erano oltre 4.500 nel 2013 e alla fine del 2024 erano scese a circa 2.600, con più del 60% sopra i settant\'anni e circa il 90% sopra i sessanta. E ha prodotto un caso unico nell\'Asia orientale confuciana: su quest\'isola, per secoli, il reddito familiare l\'hanno portato le donne.',
    durata: 'mezza giornata per il museo e una dimostrazione, una giornata intera facendo anche i villaggi della costa',
    periodo:
      'tutto l\'anno, ma le immersioni dipendono da maree, condizioni del mare e periodi di fermo biologico. Le uniche uscite a orario prevedibile sono le dimostrazioni organizzate. D\'inverno lavorano nelle condizioni più dure e si vedono più di rado.',
    costo: 'Museo delle haenyeo circa 1.100 won; le dimostrazioni sono gratuite oltre al biglietto del sito; il pescato si paga a peso alle bancarelle delle cooperative',
    comePrenotare:
      'Niente da prenotare. Il museo di Gujwa-eup è aperto tutto l\'anno (chiuso il lunedì); gli orari delle dimostrazioni a Seongsan sono pubblicati sul posto e cambiano con le maree. Per i villaggi della costa servono solo un\'auto e la disponibilità a tornare più volte.',
    cosaPortare:
      'Un binocolo: con quello si possono seguire da riva senza avvicinarsi. E soprattutto il rispetto delle regole non scritte, perché sono donne molto anziane al lavoro e non un\'attrazione folkloristica. Non ci si avvicina in acqua, non si fotografa da vicino senza chiedere, non si entra nei bulteok.',
    perChiEAdatta:
      'A chiunque, con una premessa: senza il contesto è solo una signora che nuota. Il museo prima, tutto il resto dopo.',
    miaEsperienza:
      'Il sumbisori lo abbiamo sentito prima di vedere qualsiasi cosa. Eravamo sul molo, il mare mosso e grigio, e dall\'acqua è arrivato un fischio lungo e acuto, poi un altro più lontano: erano loro che riemergevano, e tra loro si riconoscono proprio da quel suono. Mi ha spiazzato l\'età, più dell\'apnea. La donna che è uscita dall\'acqua con la rete piena di ricci aveva settantacinque anni: camminava piano sugli scogli con gli stivali di gomma, e nel giro di mezz\'ora era di nuovo sotto. Il museo di Gujwa è il posto dove il quadro si compone, e andrebbe visto per primo. Spiega i bulteok, i ripari circolari in pietra dove si cambiano e si scaldano e dove per generazioni la comunità ha preso le decisioni a voto. Spiega la gerarchia interna, dalle principianti alle sanggun che scendono più a fondo. E racconta la parte che nessun tour menziona: nel 1932 furono le haenyeo a guidare una delle più grandi proteste contro il dominio coloniale giapponese. Il modo più onesto di chiudere la giornata è comprare qualcosa alle bancarelle delle cooperative, dove i soldi vanno a loro. È l\'unica esperienza di questo viaggio con una scadenza: con questi numeri, tra vent\'anni non ci sarà più.',
    giudizio: 'imperdibile',
    alternative: [
      'Le ama giapponesi di Toba e della penisola di Shima, la pratica gemella dall\'altra parte del mare',
      'Il Parco della Pace 4·3 a Jeju, per l\'altra grande pagina di storia dell\'isola',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La statua di una haenyeo con la retina e il galleggiante sul lungomare di Jeju',
    immagine: '/images/corea-del-sud/haenyeo-jeju.jpg',
  },
  {
    slug: 'seongsan-ilchulbong',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'jeju',
    nome: 'Alba su Seongsan Ilchulbong',
    localita: 'Costa orientale di Jeju',
    cosE:
      'Un cono vulcanico di tufo alto 182 metri, nato da un\'eruzione sottomarina e saldato all\'isola da un istmo, con un cratere erboso in cima circondato da guglie di roccia. Il nome significa «picco del sole nascente» ed è patrimonio UNESCO. La salita è di circa venti minuti su gradini.',
    percheFarla:
      'È il punto da cui si guarda l\'alba in tutta la Corea, e ai suoi piedi si tengono le dimostrazioni di immersione delle haenyeo: è l\'unico posto dell\'isola dove le due cose stanno a cinquecento metri l\'una dall\'altra.',
    durata: '1-2 ore per la salita e la discesa',
    periodo:
      'tutto l\'anno, con orari di apertura che seguono l\'alba e cambiano di mese in mese. Il sito apre apposta prima del sorgere del sole.',
    costo: 'circa 5.000 won',
    comePrenotare: 'Non serve prenotare, si paga all\'ingresso. Gli orari di apertura vanno però controllati il giorno prima, perché seguono l\'alba.',
    cosaPortare: 'Una giacca a vento: qui il vento non smette mai e all\'alba, anche in estate, fa freddo. Torcia o telefono per i primi gradini al buio.',
    perChiEAdatta: 'A tutti: la salita è breve, su scalinata regolare con corrimano, ma è continua e senza tratti pianeggianti.',
    miaEsperienza:
      'La salita è corta e i gradini sono comodi; quello che me la fa ricordare è il vento sulla cresta finale. Arriva dal mare aperto senza niente a fermarlo, e in cima ci siamo tenuti al parapetto. Il cratere è meno spettacolare di quanto facciano credere le fotografie: è una conca erbosa, niente pozzo di lava. Vale di più girarsi e guardare il profilo del cono dall\'istmo, con il mare intorno su tre lati. L\'alba merita la sveglia solo con il cielo pulito, e a Jeju non è scontato. Il motivo vero per essere qui presto è un altro: in mattinata, ai piedi del cono, ci sono le uscite delle haenyeo, e vedere la stessa costa prima dall\'alto e poi dal livello dell\'acqua chiude il cerchio meglio di qualsiasi altra combinazione dell\'isola.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il cratere di Sangumburi o uno degli oreum interni, molto meno affollati',
      'L\'isola di Udo, a dieci minuti di traghetto, con altre haenyeo e nessuna coda',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il cono di tufo del Seongsan Ilchulbong sopra i prati della costa orientale di Jeju',
    immagine: '/images/corea-del-sud/seongsan-ilchulbong.jpg',
  },
  {
    slug: 'hallasan',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'jeju',
    nome: 'Salita all\'Hallasan',
    localita: 'Parco nazionale dell\'Hallasan, centro dell\'isola di Jeju',
    cosE:
      'La montagna più alta della Corea del Sud, 1.947 metri: un vulcano a scudo con un lago craterico in cima. Solo due sentieri arrivano alla vetta, Seongpanak e Gwaneumsa; gli altri si fermano più in basso. La salita non è tecnica ma è lunga: 8-10 ore andata e ritorno.',
    percheFarla:
      'È il punto più alto del paese, e dalla cima, nelle giornate limpide, si vede tutta l\'isola con il mare attorno. Ed è l\'unica escursione seria di un viaggio per il resto urbano.',
    durata: '8-10 ore andata e ritorno secondo il sentiero',
    periodo:
      'aprile-giugno e settembre-ottobre. D\'inverno si sale, ma servono i ramponi e i sentieri possono chiudere; d\'estate il caldo e le piogge rendono la salita pesante. Ci sono orari limite: dopo una certa ora i ranger non lasciano proseguire oltre i rifugi intermedi.',
    costo: 'ingresso al parco gratuito; la prenotazione è obbligatoria ma non a pagamento',
    comePrenotare:
      'Prenotazione online obbligatoria per i due sentieri che arrivano in vetta, con quote giornaliere: senza, al checkpoint non ti lasciano passare. Si prenota sul portale del parco nazionale con qualche giorno di anticipo, di più nei fine settimana e in autunno.',
    cosaPortare:
      'Scarpe da trekking, acqua e pranzo al sacco (lungo i sentieri non si compra nulla), e abiti a strati, perché in cima fa molto più freddo che alla partenza. La torcia se si parte prima dell\'alba, come fanno quasi tutti per rispettare gli orari limite.',
    perChiEAdatta:
      'Serve allenamento, non tecnica: non ci sono passaggi esposti né attrezzati, ma sono dieci ore di cammino su fondo sassoso e la discesa pesa più della salita, soprattutto sul sentiero di Gwaneumsa.',
    miaEsperienza:
      'Con questa escursione Jeju diventa un\'isola vera e smette di essere una gita al mare. Il sentiero di Seongpanak è il più facile e il più lungo: una salita graduale nel bosco che per ore non offre niente da guardare. È la parte noiosa, e conviene sapere che il paesaggio arriva solo negli ultimi due chilometri, quando gli alberi finiscono e si esce sull\'altopiano sommitale. Quello di Gwaneumsa è più corto, più ripido e molto più bello, con creste e valli aperte: per questo chi può organizzare il rientro in taxi sale da uno e scende dall\'altro. Gli orari limite dei ranger vanno presi sul serio: chi arriva tardi al rifugio intermedio viene fermato lì, e la giornata è persa. Sul lago craterico conviene abbassare le aspettative: per buona parte dell\'anno è quasi asciutto e la cima è spesso nella nebbia. La salita vale comunque, ma non per la cartolina.',
    giudizio: 'bella-non-essenziale',
    alternative: [
      'Una tappa degli Olle Trail lungo la costa, molto meno impegnativa e più rappresentativa dell\'isola',
      'La salita a uno degli oreum, i coni vulcanici minori che punteggiano Jeju, in un\'ora invece che in dieci',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il cratere del Baengnokdam con il piccolo lago sulla cima dell\'Hallasan, Jeju',
    immagine: '/images/corea-del-sud/hallasan.jpg',
  },
  {
    slug: 'gyeongbokgung-hanbok',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'seoul',
    nome: 'Gyeongbokgung in hanbok',
    localita: 'Centro di Seoul, quartiere di Jongno',
    cosE:
      'La visita al palazzo reale principale della dinastia Joseon con l\'hanbok, l\'abito tradizionale coreano, che si noleggia nei tanti negozi attorno all\'ingresso. Chi lo indossa entra gratis in tutti i palazzi della città, ed è per questo che lo fanno anche moltissimi coreani.',
    percheFarla:
      'È l\'unico modo di vedere Gyeongbokgung come lo vedono i visitatori locali. E rende evidente una cosa che nelle foto sfugge: i cortili sono stati progettati per essere attraversati da persone vestite così, e il modo in cui l\'abito si muove nello spazio cambia la percezione dell\'architettura.',
    durata: '3-4 ore comprese vestizione e restituzione',
    periodo:
      'tutto l\'anno. Primavera e autunno sono i mesi migliori; d\'estate l\'hanbok è pesante e d\'inverno va messo sopra i propri vestiti. Il palazzo è chiuso il martedì.',
    costo: 'noleggio hanbok indicativamente 15.000-30.000 won per 2-4 ore; ingresso al palazzo gratuito indossandolo (altrimenti circa 3.000 won)',
    comePrenotare:
      'Attorno alla fermata Gyeongbokgung ci sono decine di negozi di noleggio, e nei giorni feriali non serve prenotare; nei fine settimana e in alta stagione conviene farlo online. L\'acconciatura è spesso inclusa o costa pochissimo in più.',
    cosaPortare: 'Nulla di particolare: si lascia tutto in deposito al negozio. Scarpe comode, perché l\'hanbok si porta con le proprie.',
    perChiEAdatta: 'A tutti. Gli uomini lo indossano quanto le donne e nessuno ti guarda strano: è la norma.',
    miaEsperienza:
      'Sembra la cosa più turistica che si possa fare, e invece è quella che spiega meglio come funziona questo posto. Nei cortili di Gyeongbokgung, in una giornata qualsiasi, metà delle persone in hanbok sono coreane, spesso ragazzi e ragazze di vent\'anni che lo fanno per gli stessi motivi di un visitatore straniero. Il vantaggio pratico c\'è: l\'ingresso ai palazzi diventa gratuito e il noleggio in parte si ripaga da solo. Mi ha colpito però un\'altra cosa. Con quell\'abito addosso tra i padiglioni cambia il passo, perché la gonna è ampia e non lascia correre, e all\'improvviso capisci perché i cortili sono così grandi e le distanze così dilatate. Il cambio della guardia davanti alla porta principale, più volte al giorno, è la cornice giusta. Da sapere prima: il palazzo è chiuso il martedì, ed è l\'errore di programmazione più comune di chi arriva a Seoul.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Giardino Segreto di Changdeokgung, con visita guidata a numero chiuso: meno scenografico, più bello',
      'Deoksugung dopo il tramonto, illuminato e quasi vuoto',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Visitatori in hanbok nel cortile del palazzo Gyeongbokgung davanti al padiglione del trono, Seoul',
    immagine: '/images/corea-del-sud/gyeongbokgung-hanbok.jpg',
  },
  {
    slug: 'gwangjang-cibo-strada',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'seoul',
    nome: 'Cena al mercato di Gwangjang',
    localita: 'Jongno, Seoul',
    cosE:
      'Il mercato coperto più antico di Seoul, aperto dal 1905. Tra i banchi di tessuti è nata una delle zone di cucina di strada più famose dell\'Asia: si mangia sugli sgabelli davanti alla piastra, gomito a gomito con chi cucina.',
    percheFarla:
      'Qui la cucina di strada coreana si mangia nella sua forma originale. E l\'ora di punta, tra le sette e le nove di sera, è uno spettacolo a sé: centinaia di persone sedute ai banchi dentro un capannone di inizio Novecento.',
    durata: '1-2 ore',
    periodo: 'tutto l\'anno, la sera. Molti banchi chiudono la domenica o presto nel pomeriggio: l\'orario giusto è tra le sei e le nove.',
    costo: 'indicativamente 3.000-8.000 won a porzione: si mangia molto bene con 10-15€ a testa',
    comePrenotare: 'Niente da prenotare: ci si siede dove c\'è posto. Ai banchi più famosi, quelli finiti nei documentari, c\'è la coda: per evitarla basta spostarsi di dieci metri.',
    cosaPortare: 'Contanti per i banchi più piccoli, anche se quasi tutti accettano carta. E appetito, perché le porzioni arrivano in fretta.',
    perChiEAdatta:
      'A tutti, con un\'avvertenza per i vegetariani: quasi ogni piatto contiene pesce o carne, brodi compresi, e spiegarsi è complicato. Chi non tollera il piccante trova comunque molte opzioni.',
    miaEsperienza:
      'È la cosa da fare la prima sera a Seoul, prima ancora dei palazzi, perché ti mette subito nello spirito giusto. Ci siamo seduti su uno sgabello di plastica davanti a una signora che cucina la stessa cosa da trent\'anni, abbiamo indicato, e nel giro di due minuti è arrivato il piatto. Da provare il bindaetteok, la specialità del mercato, una frittella spessa di fagioli mung macinati al momento e fritta nello strutto; il mayak gimbap, piccoli rotoli di riso e alga da intingere nella senape; e il tteokbokki, gli gnocchi di riso nella salsa rossa. La parte migliore però è il contorno: il rumore, il vapore, la gente che mangia in piedi. E i banchi famosi con la fila davanti servono le stesse cose di quelli a dieci metri, dove ci si siede subito.',
    giudizio: 'imperdibile',
    alternative: [
      'Il mercato di Tongin, dove si comprano gettoni di ottone e si compone il proprio vassoio banco per banco',
      'La zona di Euljiro dopo il tramonto, con i tavolini in strada, per una versione meno turistica',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Vassoi di jeon, le frittelle coreane, in esposizione a un banco del mercato di Gwangjang, Seoul',
    immagine: '/images/corea-del-sud/gwangjang-cibo-strada.jpg',
  },
  {
    slug: 'jjimjilbang',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'seoul',
    nome: 'Una notte in jjimjilbang',
    localita: 'Ovunque in Corea; a Seoul se ne trovano in ogni quartiere',
    cosE:
      'La sauna pubblica coreana, aperta ventiquattro ore. Da una parte le vasche termali, divise per sesso e senza costume; dall\'altra una grande sala comune mista dove, nel pigiama fornito dalla struttura, si mangia, si guarda la televisione e si dorme per terra su stuoie e cuscini di legno.',
    percheFarla:
      'È l\'istituzione sociale più coreana che esista: ci vanno le famiglie il fine settimana, i ragazzi dopo una serata fuori, chi ha perso l\'ultimo treno. E con dieci euro hai un posto dove dormire.',
    durata: 'da due ore a una notte intera',
    periodo: 'tutto l\'anno, aperti 24 ore su 24',
    costo: 'indicativamente 8.000-15.000 won per l\'ingresso, con supplemento notturno in alcune strutture',
    comePrenotare: 'Non si prenota: si entra, si paga, si riceve un braccialetto con la chiave dell\'armadietto e il pigiama. Il braccialetto registra anche i consumi interni, che si saldano all\'uscita.',
    cosaPortare:
      'Niente: asciugamani, pigiama e prodotti da bagno sono forniti o si comprano all\'interno. Meglio sapere prima che nella zona delle vasche il costume non si usa e non è ammesso, e che ci si lava seduti alle docce prima di entrare in acqua.',
    perChiEAdatta:
      'A chi non ha problemi con la nudità nella zona termale, che è separata per sesso. La sala comune, dove si dorme, è mista e si sta in pigiama. Sconsigliato a chi ha la pelle sensibile: le sale calde superano di molto i settanta gradi.',
    miaEsperienza:
      'È stata insieme l\'esperienza più strana e più normale del viaggio. Abbiamo pagato poco più di dieci euro, abbiamo ricevuto un pigiama e un braccialetto, e da lì abbiamo fatto quello che fanno tutti: prima le vasche, alternando il caldissimo e il gelato, poi la sala comune, dove decine di persone stanno sdraiate per terra a guardare la televisione, a mangiare uova sode cotte nella sauna e a dormire. La prima volta imbarazza la zona termale, dove il costume non esiste e il rituale è preciso: ci si lava seduti alle docce basse prima di entrare in acqua, e la vera scortesia è saltare questo passaggio. Dopo dieci minuti non ci pensa più nessuno. Mi è rimasta la sala comune alle tre di notte: un padre che dorme accanto al figlio, due ragazze che chiacchierano, un signore anziano che russa. Più che una spa, è un pezzo di vita quotidiana in cui un visitatore può entrare per dieci euro.',
    giudizio: 'imperdibile',
    alternative: [
      'Un onsen giapponese, per il confronto: stessa idea di base, opposta nell\'atmosfera',
      'Una sauna di quartiere più piccola al posto dei grandi complessi, dove di visitatori stranieri non ce ne sono quasi',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il corridoio interno di un jjimjilbang coreano con l\'ingresso alla sala calda',
    immagine: '/images/corea-del-sud/jjimjilbang.jpg',
  },
  {
    slug: 'bulguksa-seokguram',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'gyeongju',
    nome: 'Bulguksa e l\'eremo di Seokguram',
    localita: 'Monte Toham, fuori Gyeongju',
    cosE:
      'I due capolavori dell\'arte buddista del regno di Silla, entrambi patrimonio UNESCO e costruiti nell\'VIII secolo. Il tempio di Bulguksa ha terrazze di pietra e due pagode nel cortile. L\'eremo di Seokguram, più in alto sul monte, è una grotta artificiale fatta di blocchi di granito incastrati senza malta, dove un Buddha seduto guarda verso il mare d\'Oriente.',
    percheFarla:
      'Sono il vertice tecnico e artistico di mille anni di regno di Silla. Seokguram in particolare resta impressionante anche sapendo com\'è fatta: una cupola di pietra autoportante del 751, orientata in modo che il sole nascente colpisse il volto della statua.',
    durata: 'mezza giornata per entrambi, compresi gli spostamenti',
    periodo:
      'tutto l\'anno. Aprile per i ciliegi lungo la strada di accesso e ottobre-novembre per il foliage sul monte Toham. L\'8 aprile del calendario lunare, per il compleanno del Buddha, i templi sono coperti di lanterne.',
    costo: 'circa 6.000 won ciascuno',
    comePrenotare: 'Nessuna prenotazione. Conviene però controllare gli orari degli autobus locali, perché tra Bulguksa e Seokguram c\'è ancora una strada di montagna e le corse sono poche.',
    cosaPortare: 'Scarpe comode, perché il complesso di Bulguksa è tutto su terrazze e scalinate di pietra.',
    perChiEAdatta: 'A tutti. Dall\'ingresso di Seokguram alla grotta c\'è un sentiero pianeggiante di circa dieci minuti nel bosco.',
    miaEsperienza:
      'Bulguksa è bellissimo e va preso per quello che è: quasi tutto il legno è stato ricostruito nel Novecento. Originali sono le fondamenta, le scalinate e soprattutto le due pagode di pietra del cortile, lì dall\'VIII secolo. Con la folla del fine settimana perde parecchio. Seokguram, più in alto sul monte, è quello che lascia il segno: una cupola di granito costruita nel 751 incastrando blocchi senza malta, con al centro un Buddha di tre metri e mezzo scolpito in un unico masso, orientato verso il mare perché il sole del mattino gli arrivasse in faccia. Una cosa va detta chiara, perché delude chi non la sa prima: oggi si guarda da dietro una grande vetrata, dall\'anticamera, e non si può entrare nella grotta né girarci attorno. Resta impressionante lo stesso, ma chi si aspetta di stare sotto la cupola ci rimane male. Il consiglio pratico è vederli nella stessa mattina, cominciando da Seokguram appena apre, quando i pullman non sono ancora saliti.',
    giudizio: 'la-rifarei',
    alternative: [
      'I tumuli del Daereungwon in città, con la tomba aperta e visitabile dall\'interno',
      'Lo stagno di Anapji dopo il tramonto, il momento più bello della giornata a Gyeongju',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Le scalinate in pietra e i padiglioni del tempio di Bulguksa, Gyeongju',
    immagine: '/images/corea-del-sud/bulguksa-seokguram.jpg',
  },
  {
    slug: 'templestay',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'gyeongju',
    nome: 'Templestay in un monastero buddista',
    localita: 'Monasteri in tutta la Corea; i più noti sono nelle montagne attorno a Gyeongju, Busan e Seoul',
    cosE:
      'Un programma ufficiale per soggiornare in un monastero buddista partecipando alla vita dei monaci: cerimonia serale, sveglia prima dell\'alba per la liturgia delle tre del mattino o poco dopo, pasti in silenzio secondo il rito del baru gongyang, meditazione seduta e lavoro comunitario. Lo offrono centinaia di templi, con formule di una o due notti.',
    percheFarla:
      'È il rovescio del ritmo coreano: dopo giorni di metropolitane, mercati e treni ad alta velocità, ti ritrovi in un monastero di montagna dove il rumore più forte è una campana. E il pasto rituale, in cui non si lascia nemmeno un chicco di riso e alla fine si lavano le ciotole con l\'acqua che poi si beve, insegna più di molte visite guidate.',
    durata: '1-2 notti',
    periodo:
      'tutto l\'anno. Le formule cambiano con la stagione; in inverno molti templi di montagna sono freddissimi, e nelle stanze essenziali si sente.',
    costo: 'indicativamente 50.000-100.000 won per una notte, con pasti inclusi',
    comePrenotare:
      'Sul portale ufficiale Templestay, che ha una sezione in inglese e indica quali monasteri offrono programmi con supporto linguistico. Il dettaglio cambia molto, perché in parecchi templi si svolge tutto in coreano.',
    cosaPortare:
      'Abiti comodi e coprenti (le divise da tempio vengono fornite, ma si indossano sopra i propri strati) e calzini, perché negli edifici si sta scalzi. Niente alcol, niente carne. Il telefono si tiene ma si usa poco: fa parte del patto.',
    perChiEAdatta:
      'A chi accetta regole precise: sveglia intorno alle tre o alle quattro del mattino, silenzio a tavola, prostrazioni ripetute durante le cerimonie. Chi cerca un ritiro benessere ha sbagliato posto.',
    miaEsperienza:
      'Nessuno la mette in programma, e poi è la tappa di cui si parla di più tornando a casa. La sveglia è prima delle quattro e la prima cerimonia si tiene al buio, con il tamburo e la campana che chiamano nel cortile: sul momento è durissima, mezz\'ora dopo è la cosa più bella della giornata. Il pasto rituale è quello che spiazza di più: quattro ciotole, porzioni decise da te, il divieto di lasciare avanzi, e alla fine si pulisce l\'ultima ciotola con un pezzo di daikon e si beve l\'acqua del risciacquo. È la regola monastica, e farlo una volta cambia per un po\' il modo di guardare il cibo. La notte si dorme su un materasso sottile per terra, e in montagna, fuori stagione, fa freddo. Il consiglio è scegliere un monastero con programma in inglese: altrimenti gran parte di quello che succede resta incomprensibile.',
    giudizio: 'imperdibile',
    alternative: [
      'Una notte in hanok a Hahoe o a Jeonju, per l\'esperienza dell\'alloggio tradizionale senza la parte religiosa',
      'Una visita in giornata a un tempio di montagna, per chi non vuole impegnare una notte',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il cortile e le sale del monastero buddista di Haeinsa tra le montagne',
    immagine: '/images/corea-del-sud/templestay.jpg',
  },
  {
    slug: 'gamcheon-busan',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'busan',
    nome: 'Il villaggio di Gamcheon',
    localita: 'Saha-gu, Busan',
    cosE:
      'Un quartiere di case basse e colorate che sale a gradoni sul fianco di una collina, con vicoli stretti, scalinate e murales. È nato come insediamento di profughi durante la guerra di Corea; negli anni Duemila un progetto artistico lo ha riqualificato e ne ha fatto uno dei luoghi più fotografati del paese.',
    percheFarla:
      'Dietro la cartolina c\'è una storia precisa: quelle case, addossate l\'una all\'altra sulla collina, le costruirono le famiglie arrivate qui senza niente mentre il resto della penisola era occupato. Sapendolo, camminare nei vicoli è un\'altra cosa che fotografarli.',
    durata: '2-3 ore',
    periodo: 'tutto l\'anno. Il tardo pomeriggio ha la luce migliore sulle facciate; il fine settimana è molto affollato.',
    costo: 'gratuito; alcune case-museo e punti panoramici chiedono un piccolo contributo',
    comePrenotare:
      'Niente da prenotare. Si sale in autobus dalla stazione della metro di Toseong e si scende a piedi: nel senso opposto ti tocca tutta la salita.',
    cosaPortare: 'Scarpe comode: è tutto scalinate e pendenza, e il fondo è irregolare.',
    perChiEAdatta:
      'A tutti, tranne a chi fa fatica in salita e in discesa: percorsi in piano non ce ne sono. È un quartiere abitato, e le regole di silenzio nei vicoli residenziali sono segnalate ovunque.',
    miaEsperienza:
      'La trappola di Gamcheon è trattarlo come un set. Le case colorate sulla collina sono fotogeniche, e nel fine settimana ti ritrovi in mezzo a centinaia di persone che cercano la stessa inquadratura. Ma il quartiere è nato come baraccopoli per chi era scappato dal Nord e dal resto del paese durante la guerra, quando Busan fu l\'ultima città a non cadere; la vernice è arrivata sessant\'anni dopo. Il modo giusto di visitarlo è salire in autobus fino in cima e scendere a piedi, lasciando perdere il percorso segnalato dei murales: nei vicoli laterali ci sono ancora gli anziani seduti fuori casa, i panni stesi e le porte aperte, e i cartelli che chiedono di parlare piano vanno rispettati. Dall\'alto, con la luce del tardo pomeriggio, la vista su quel mosaico di tetti fino al mare è una delle immagini che mi sono rimaste di tutto il viaggio.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il cimitero commemorativo delle Nazioni Unite, a Busan, che racconta la stessa guerra da un\'altra angolazione',
      'Il sentiero costiero di Igidae, con la vista frontale sullo skyline di Haeundae',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Le case colorate del villaggio di Gamcheon arrampicate sulla collina, Busan',
    immagine: '/images/corea-del-sud/gamcheon-busan.jpg',
  },
]
