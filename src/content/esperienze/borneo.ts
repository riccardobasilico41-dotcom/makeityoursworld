import type { Esperienza } from '@/lib/types'

// Nessun operatore, lodge o resort è stato inventato. Le quote dei permessi
// (Kinabalu, Sipadan) cambiano: vanno riverificate.

export const esperienzeBorneo: Esperienza[] = [
  {
    slug: 'monte-kinabalu',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kota-kinabalu',
    nome: 'Salita al Monte Kinabalu',
    localita: 'Kinabalu Park, Sabah',
    cosE:
      'La salita in due giorni alla vetta più alta del sud-est asiatico tra l\'Himalaya e la Nuova Guinea, 4.095 metri. Prima sei chilometri di gradini nella foresta pluviale fino al rifugio di Laban Rata, a 3.270 metri; poi si riparte alle due di notte sulla piattaforma di granito nudo, con le corde fisse, per arrivare in vetta all\'alba.',
    percheFarla:
      'È una delle pochissime vette al mondo oltre i 4.000 metri che si raggiungono senza esperienza alpinistica. E l\'alba sulla piattaforma di granito, con le nuvole sotto i piedi e tutto il Borneo intorno, è quello che quasi tutti mettono al primo posto di questo viaggio.',
    durata: '2 giorni, 1 notte al rifugio',
    periodo:
      'da marzo a settembre, quando in vetta piove meno. Con il maltempo la montagna chiude, e in passato è rimasta chiusa per mesi dopo dei terremoti: meglio fissare la data con un po\' di margine.',
    costo:
      'la voce più cara del viaggio: permesso di salita, guida obbligatoria, notte con pasti a Laban Rata, assicurazione e trasferimenti si pagano a pacchetto. Se è compresa la via ferrata in vetta, il conto sale ancora.',
    comePrenotare:
      'Con **mesi** di anticipo, non settimane: i permessi giornalieri sono poco più di centosessanta e dipendono dai posti letto del rifugio, l\'unico appoggio in quota. Si prenota tramite gli operatori autorizzati che gestiscono le sistemazioni sulla montagna. La guida è obbligatoria per legge, e non è una formalità.',
    cosaPortare:
      'Strati veri: si parte a 1.866 metri con venti gradi e prima dell\'alba in vetta si è vicino allo zero, con il vento. Guanti sottili, torcia frontale (si parte di notte, al buio pesto), scarpe che tengano sul granito bagnato e il minimo indispensabile nello zaino, perché sulla scalinata ogni chilo pesa il doppio.',
    perChiEAdatta:
      'Non serve tecnica, servono le gambe: il primo giorno sono sei chilometri quasi tutti di gradini irregolari. Il vero problema è la quota. In poco più di ventiquattro ore si passa da meno di duemila a oltre quattromila metri senza acclimatamento, e il mal di montagna colpisce anche chi è allenatissimo.',
    miaEsperienza:
      'Il primo giorno è una scalinata senza fine dentro la foresta pluviale: sei chilometri di gradini irregolari di legno e pietra, con l\'umidità addosso e la sensazione che non finiscano mai. Nel primo pomeriggio siamo arrivati al rifugio di Laban Rata, dove si cena presto e si prova a dormire alle otto di sera in una camerata a 3.270 metri, cosa che a quella quota riesce a pochi. Poi la sveglia all\'una e mezza, e la parte che si ricorda. Si esce al buio, la foresta è finita, e si cammina sulla roccia nuda tenendosi a una corda fissa, con una fila di torce frontali sopra e sotto che segna il percorso lungo il fianco della montagna. La quota si sente: mal di testa e fiato corto sono la norma, e qualcuno rinuncia negli ultimi cento metri. Poi si arriva sulla piattaforma di granito, il cielo passa dal nero all\'arancione e sotto ci sono le nuvole e tutto il Borneo. Il consiglio pratico che conta più di tutti: i permessi sono poco più di centosessanta al giorno e legati ai letti del rifugio, quindi si prenota con mesi di anticipo. Chi ci prova sul posto non sale.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Kinabalu Park senza la vetta, con i sentieri bassi, il giardino botanico e le sorgenti termali di Poring',
      'La via ferrata in vetta, la più alta del mondo, per chi ha già il permesso di salita e vuole aggiungere una giornata',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Escursionisti sulle placche di granito della vetta del Monte Kinabalu, sopra il mare di nuvole',
    immagine: '/images/borneo/monte-kinabalu.jpg',
  },
  {
    slug: 'sepilok-oranghi',
    immagine: '/images/viaggi/borneo-itinerario/giorno-5-sepilok-orangutan.jpg',
    paeseSlug: 'borneo',
    destinazioneSlug: 'sepilok-sandakan',
    nome: 'Le poppate degli oranghi a Sepilok',
    localita: 'Sepilok Orangutan Rehabilitation Centre, Sabah',
    cosE:
      'Il centro dove gli oranghi orfani o confiscati al commercio illegale vengono riportati un po\' alla volta nella foresta. Due volte al giorno, su piattaforme raggiungibili da passerelle di legno, si lascia della frutta che integra quello che gli animali non sanno ancora procurarsi da soli.',
    percheFarla:
      'È il posto al mondo dove è più probabile vedere gli oranghi da vicino. E il centro non finge di essere natura: spiega apertamente che si tratta di riabilitazione, ed è molto più onesto di gran parte delle attrazioni con animali del sud-est asiatico.',
    durata: 'mezza giornata, contando entrambe le poppate',
    periodo:
      'tutto l\'anno, con una precisazione decisiva. Nella stagione dei frutti della foresta, più o meno tra dicembre e febbraio ma con variazioni, gli oranghi trovano cibo da soli e alle piattaforme ne arrivano molti meno. Da aprile a ottobre le probabilità sono molto più alte.',
    costo: 'circa 30 ringgit di ingresso, più un permesso per la macchina fotografica',
    comePrenotare:
      'Non si prenota: si paga all\'ingresso. Le poppate sono a orario fisso, la mattina e nel primo pomeriggio, e conviene andare a entrambe: sono due tentativi invece di uno.',
    cosaPortare:
      'Solo acqua, tenuta in borsa: i macachi girano intorno alle passerelle e strappano bottiglie, sacchetti e occhiali senza pensarci. Gli zaini vanno chiusi o lasciati negli armadietti all\'ingresso.',
    perChiEAdatta: 'Per tutti. Le passerelle sono comode e quasi tutte all\'ombra, e il percorso è breve.',
    miaEsperienza:
      'Ci siamo andati la mattina, per la prima poppata. È il posto dove gli oranghi si vedono con più sicurezza, e conviene dire subito cosa significa: sono animali orfani o sequestrati al commercio illegale, in riabilitazione, abituati alle persone. Non è natura, e il centro non la racconta come tale; in questa parte del mondo non è scontato. Detto questo, vedere un orango attraversare una corda tesa a pochi metri sopra la testa, con quel modo di muoversi lentissimo e stranamente ragionato, basta da solo a giustificare un viaggio. Il consiglio più utile è andare a entrambe le poppate, perché in certe stagioni la foresta dà abbastanza frutta e alle piattaforme non arriva quasi nessuno: è dichiarato, non è sfortuna. La cosa che quasi tutti saltano è a duecento metri: il centro dei sun bear, gli orsi più piccoli del mondo, recuperati dal commercio di animali domestici. Sono meno famosi, e la visita è altrettanto interessante.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Kinabatangan per gli oranghi selvatici, meno garantiti ma veri',
      'Semenggoh in Sarawak, con animali liberi che però nella stagione dei frutti possono non farsi vedere',
      'Bukit Lawang a Sumatra, dove gli oranghi si cercano a piedi nella giungla invece di aspettarli',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Due oranghi al Sepilok Orangutan Rehabilitation Centre, ripresi da vicino mentre si nutrono',
  },
  {
    slug: 'crociera-kinabatangan',
    immagine: '/images/borneo/kinabatangan.jpg',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kinabatangan',
    nome: 'Crociere sul fiume Kinabatangan',
    localita: 'Sukau e Bilit, fiume Kinabatangan, Sabah',
    cosE:
      'Uscite in barca all\'alba e al tramonto lungo il fiume, con il motore al minimo, per vedere gli animali che si concentrano nella fascia di foresta rimasta sulle rive: oranghi selvatici, nasiche, elefanti pigmei, coccodrilli, buceri e macachi. Quasi sempre si aggiunge un\'uscita notturna con le torce.',
    percheFarla:
      'In tutto il sud-est asiatico è il posto con il miglior rapporto fra probabilità di avvistamento e costo. E qui gli animali sono del tutto selvatici: niente piattaforme, niente orari dei pasti.',
    durata: '2-3 notti in lodge, con 4-6 uscite in tutto',
    periodo:
      'da marzo a ottobre. Nella stagione delle piogge il fiume si alza, la foresta si allaga e gli animali si spargono all\'interno invece di concentrarsi sulle rive: le probabilità calano parecchio.',
    costo: 'pacchetti da circa 100€ a notte a persona, con pensione completa, uscite in barca e trasferimenti da Sandakan compresi',
    comePrenotare:
      'Direttamente con i lodge di Sukau o Bilit, a pacchetto: organizzare i pezzi a parte non ha senso, perché lungo il fiume non ci sono servizi indipendenti. In alta stagione conviene muoversi qualche mese prima.',
    cosaPortare:
      '**Un binocolo**, che è la cosa che cambia di più la giornata: si guarda quasi sempre a venti o trenta metri, e senza si perde metà di quello che la guida indica. Poi repellente ad alta concentrazione per le uscite serali, una giacca leggera antipioggia e contanti in ringgit, perché lungo il fiume i bancomat non ci sono.',
    perChiEAdatta: 'Per tutti: si sta seduti in barca. Le uniche fatiche sono le sveglie prima dell\'alba e il caldo umido.',
    miaEsperienza:
      'Sul Kinabatangan il Borneo mantiene quello che promette, e nello stesso momento si capisce cosa è successo a quest\'isola. Siamo arrivati al lodge in barca e la prima uscita, al tramonto, è stata la sera stessa. Si esce all\'alba con la nebbia ancora sul fiume e il motore quasi spento, e in due ore passano nasiche che saltano tra i rami (le scimmie dal naso enorme che esistono solo qui), buceri in coppia, macachi, coccodrilli immobili sulle rive e, con un po\' di fortuna, un orango selvatico che si muove lentissimo su un albero. Poi la barca svolta in un affluente, la fascia di verde si assottiglia e dietro compaiono le file ordinate delle palme da olio, fino all\'orizzonte. Lì la cosa cambia di segno: gli animali si vedono così facilmente perché sono schiacciati in una striscia di foresta larga poche centinaia di metri. Non è una riserva ben progettata, è quello che è avanzato. Due consigli concreti: restare almeno due notti, perché ogni uscita è una lotteria e quattro biglietti valgono più di due, e portare un binocolo.',
    giudizio: 'imperdibile',
    alternative: [
      'La Danum Valley, foresta primaria vera, dove gli animali si vedono meno proprio perché hanno più spazio',
      'Le Gomantong Caves, poco lontano, con l\'uscita serale di milioni di pipistrelli',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Barche di legno colorate ormeggiate sulla riva del fiume Kinabatangan, pronte a partire verso la foresta',
  },
  {
    slug: 'diving-sipadan',
    paeseSlug: 'borneo',
    destinazioneSlug: 'semporna-sipadan',
    nome: 'Immersioni a Sipadan',
    localita: 'Isola di Sipadan, al largo di Semporna, Sabah',
    cosE:
      'Un pinnacolo corallino che sale da seicento metri di profondità in mezzo al mare, con pareti verticali, banchi di barracuda, centinaia di tartarughe e squali di barriera. L\'accesso è a numero chiuso, con permessi giornalieri gestiti da Sabah Parks; sull\'isola non si può dormire da quando, nel 2004, le strutture sono state rimosse.',
    percheFarla:
      'È uno dei pochissimi posti al mondo dove la fama di "miglior sito di immersione del pianeta" regge alla prova dei fatti: la quantità di vita su quelle pareti non ha quasi paragoni.',
    durata: 'una giornata di immersioni, dentro un soggiorno di 4-5 notti',
    periodo:
      'da aprile a settembre, con mare calmo e visibilità migliore. Da novembre a febbraio il mare è più mosso e le uscite possono saltare.',
    costo:
      'il permesso si paga in aggiunta al pacchetto diving; oggi ogni permesso dà diritto a tre immersioni sull\'isola nella stessa giornata. Il costo totale dipende dal resort e dalla durata del soggiorno.',
    comePrenotare:
      'Il punto decisivo: **i permessi non si danno ai privati**. Sabah Parks assegna una quota giornaliera, poco più di duecentocinquanta permessi, agli operatori autorizzati, che li distribuiscono tra i loro ospiti quasi sempre a rotazione, premiando i soggiorni più lunghi. Si prenota quindi un pacchetto di più notti in un resort di Mabul o Kapalai, sei-dodici mesi prima nei mesi di punta, e il permesso arriva da lì.',
    cosaPortare:
      'Brevetto e libretto delle immersioni, che vengono controllati, e l\'assicurazione subacquea. Bisogna sapere che in alcune immersioni le correnti sono serie. Il resto dell\'attrezzatura si noleggia sul posto.',
    perChiEAdatta:
      'Subacquei brevettati con un minimo di esperienza: le pareti scendono a picco e in alcuni punti le correnti sono forti. Per chi non ha il brevetto c\'è lo snorkeling, ma i permessi vanno quasi tutti ai subacquei, quindi non è la scelta su cui costruire il viaggio.',
    miaEsperienza:
      'Sipadan regge la sua fama, cosa che di un posto così celebrato si può dire di rado. Si scende lungo una parete che continua nel blu senza un fondo visibile, e in pochi minuti passa un banco di barracuda che si avvita in una spirale larga quanto una casa; le tartarughe sono così tante che dopo la quinta si smette di fotografarle. Prima di prenotare, però, bisogna capire che il permesso decide tutto il viaggio. Sono poco più di duecentocinquanta al giorno, non si comprano da privati: li assegna Sabah Parks agli operatori, che li distribuiscono a rotazione tra gli ospiti, e la rotazione premia chi resta più a lungo. Prenotare due notti e sperare è il modo più sicuro per non immergersi affatto. La sorpresa è stata un\'altra: Mabul, che tutti trattano come una semplice base d\'appoggio, è uno dei posti migliori al mondo per il muck diving, e passare quaranta minuti a cercare su una gorgonia un cavalluccio pigmeo grande come un\'unghia è divertente quanto un banco di barracuda.',
    giudizio: 'imperdibile',
    alternative: [
      'Il muck diving a Mabul e Kapalai, che vale il viaggio anche senza il permesso per Sipadan',
      'Le isole del parco marino di Tunku Abdul Rahman a Kota Kinabalu, per uno snorkeling facile e senza permessi',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Un banco di pesci sopra la barriera corallina nelle acque di Sipadan',
    immagine: '/images/borneo/diving-sipadan.jpg',
  },
  {
    slug: 'bako-nasiche',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kuching-bako',
    nome: 'Le nasiche del parco di Bako',
    localita: 'Parco nazionale di Bako, Sarawak',
    cosE:
      'Il parco nazionale più antico del Sarawak, raggiungibile solo in barca. I sentieri attraversano sette tipi di vegetazione diversi in poche migliaia di ettari, fino alle scogliere di arenaria sul mare. È il posto più accessibile al mondo per vedere le nasiche, le scimmie dal naso enorme che vivono solo nel Borneo.',
    percheFarla:
      'Le nasiche esistono solo su quest\'isola, e qui si osservano da pochi metri, senza barca e senza bisogno di troppa fortuna. Il parco, poi, è una delle gite di un giorno meglio riuscite di tutto il sud-est asiatico.',
    durata: 'una giornata, meglio con una notte nei chalet del parco',
    periodo:
      'da marzo a ottobre. Gli orari delle barche dipendono dalla marea e non dall\'orologio: con la bassa marea le partenze si spostano o saltano, ed è questo il vincolo che condiziona tutta la giornata.',
    costo: 'ingresso intorno ai 20 ringgit, più la barca di andata e ritorno da dividere tra i passeggeri',
    comePrenotare:
      'L\'ingresso si registra al quartier generale del parco. I chalet interni sono pochi e vanno prenotati prima sul portale dei parchi del Sarawak: chi li ha può fare i sentieri all\'alba e la passeggiata notturna, ed è questo il vero vantaggio.',
    cosaPortare:
      'Molta acqua, repellente, scarpe da sentiero e un binocolo. E niente cibo in mano: i macachi dalla coda lunga intorno al quartier generale sono aggressivi e organizzati, e rubano di continuo.',
    perChiEAdatta: 'Per tutti: ci sono sentieri di ogni lunghezza, dal quarto d\'ora alla giornata intera, e le nasiche si vedono spesso vicino alle strutture.',
    miaEsperienza:
      'Bako è la gita che rende più di quanto costa, a mezz\'ora da Kuching. Si arriva solo dal mare, su una barca che sbarca direttamente sulla spiaggia quando la marea lo permette, e già questo mette nello spirito giusto. Le nasiche si incontrano spesso entro la prima ora di sentiero: maschi con quel naso sproporzionato e la pancia gonfia, seduti sui rami a mangiare foglie, che guardano chi passa senza degnarlo di attenzione. Esistono solo su quest\'isola, e vederle da cinque metri, senza barca e senza appostamenti, qui è più facile che in qualsiasi altro posto del Borneo. I macachi vicino al quartier generale sono l\'opposto: aggressivi, abituati alle persone e velocissimi, e tenere cibo in mano è un errore che si paga subito. Il vincolo da tenere presente è la marea, perché le barche partono in base all\'acqua e non all\'orario: chi va in giornata senza controllarla rischia di restare bloccato o di perdere il pomeriggio.',
    giudizio: 'la-rifarei',
    alternative: [
      'Semenggoh per gli oranghi liberi, a mezz\'ora da Kuching, dove però è la stagione a decidere tutto',
      'Una notte in una longhouse iban lungo il Batang Ai, per il lato culturale del Sarawak',
    ],
    tripSlugs: [],
    imageAlt: 'Una nasica seduta su un ramo nel parco nazionale di Bako, Sarawak',
    immagine: '/images/borneo/bako-nasiche.jpg',
  },
]
