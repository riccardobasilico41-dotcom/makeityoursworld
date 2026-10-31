import type { Esperienza } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Lapponia svedese: Capodanno sotto l'aurora"
// (src/content/viaggi/14-lapponia-svedese-abisko.md). Prezzi, orari e modalità
// di svolgimento sono stati integrati con ricerca (fonti: siti ufficiali degli
// operatori, Swedish Tourist Association/STF, LKAB) per dare a chi legge una
// guida utile e concreta, non solo un ricordo personale — prezzi e orari vanno
// comunque sempre riverificati prima di prenotare, cambiano stagione per stagione.
//
// Le quattro esperienze di Stoccolma in fondo al file (Vasamuseet, Gamla Stan,
// ABBA Museum, arcipelago) appartengono al nuovo itinerario "Capitali
// nordiche" (src/content/viaggi/60-capitali-nordiche.md) e non al viaggio in
// Lapponia: nessuna è stata provata di persona, giudizio resta 'da-verificare'
// su tutte, coerente con destinazioni/svezia.ts.

export const esperienzeSvezia: Esperienza[] = [
  {
    slug: 'aurora-sky-station',
    paeseSlug: 'svezia',
    destinazioneSlug: 'abisko',
    nome: 'Aurora Sky Station',
    localita: 'Abisko, monte Nuolja',
    cosE:
      'Una seggiovia che in circa 15-20 minuti sale sul monte Nuolja (900 m), fino a una stazione panoramica con ristorante, bar e torre di osservazione dedicata all\'aurora boreale. Abisko ha un microclima secco, con meno nuvole che nel resto della regione: è il cosiddetto «buco blu» sopra la valle, creato dalle montagne intorno che deviano le perturbazioni. Per questo è uno dei punti con le probabilità di aurora più alte al mondo.',
    percheFarla: 'È l\'esperienza simbolo di Abisko: il panorama, la cena in quota e le probabilità più alte della zona di vedere l\'aurora, a pochi passi dallo STF Abisko Turiststation.',
    durata: 'in inverno la seggiovia resta aperta fino all\'1:00; una visita «mordi e fuggi» dura un\'ora o due, ma si può restare tutta la sera',
    periodo: 'stagione invernale, indicativamente da metà settembre a metà aprile',
    costo:
      'Solo seggiovia: circa 350-450 SEK a persona (35-40€ circa), biglietto in loco o online. Pacchetto «notte in quota» con guida: pernottamento in camerata con sacco a pelo, colazione, cena, tuta termica, sauna e seggiovia inclusi, circa 2.990 SEK a persona (270-310€ circa), solo il venerdì e su prenotazione.',
    comePrenotare: 'Il biglietto della seggiovia si compra direttamente allo STF Abisko Turiststation o online sul sito di Visit Abisko/STF; il pacchetto con cena e pernottamento va prenotato con anticipo, perché i posti sono limitati.',
    cosaPortare: 'Strati pesanti, anche se il tragitto è breve: in cima, aspettando l\'aurora, si sta fermi all\'aperto anche a lungo. Guanti pesanti e un termos con qualcosa di caldo aiutano.',
    perChiEAdatta: 'Chiunque alloggi ad Abisko, senza difficoltà fisiche: si sale in seggiovia, non a piedi.',
    miaEsperienza:
      'La prima sera ad Abisko, dopo il treno da Kiruna: seggiovia al buio, cena panoramica e un cielo che verso Nuolja mi è sembrato più pulito di quello visto altrove nel viaggio.',
    giudizio: 'imperdibile',
    alternative: [],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Il villaggio di Abisko e il lago Torneträsk visti dal monte Nuolja, dove si trova l\'Aurora Sky Station, in una giornata estiva',
    immagine: '/images/svezia/aurora-sky-station.jpg',
  },
  {
    slug: 'motoslitta-lago-ghiacciato',
    paeseSlug: 'svezia',
    destinazioneSlug: 'abisko',
    nome: 'Motoslitta sul lago ghiacciato',
    localita: 'Abisko, parco nazionale',
    cosE:
      'Un\'escursione sulla superficie ghiacciata di uno dei laghi del parco nazionale di Abisko. Gli operatori locali offrono due formule: guidata, in cui si viene trainati in una slitta agganciata alla motoslitta della guida (circa 2 ore), oppure «self-drive», in cui si guida la propria motoslitta seguendo la guida in testa al gruppo (percorsi più lunghi, anche di mezza giornata).',
    percheFarla: 'È l\'attività più adrenalinica del soggiorno ad Abisko, e il paesaggio artico si attraversa in un altro modo rispetto al passo lento dell\'husky sledding.',
    durata: 'dalle 2 ore della versione guidata «in slitta trainata» fino a mezza giornata per i tour self-drive più lunghi',
    periodo: 'inverno, quando il lago è completamente ghiacciato, indicativamente dicembre-aprile',
    costo:
      'Da circa 100-110€ a persona per il tour guidato in slitta trainata di 2 ore; i tour self-drive con motoslitta propria costano di più (in genere 150-250€ a seconda della durata e se si guida in solitaria o in coppia sullo stesso mezzo).',
    comePrenotare: 'Tour di operatori locali (per esempio Activities in Abisko), prenotabili online, con ritiro o punto d\'incontro in paese; per il self-drive serve la patente.',
    cosaPortare: 'Tuta termica e casco di solito li fornisce l\'operatore, ma conviene chiederlo quando si prenota; i propri guanti pesanti servono sempre.',
    perChiEAdatta: 'La versione guidata (in slitta trainata) non richiede esperienza; per il self-drive servono la patente e un minimo di attenzione, ma non serve aver già guidato una motoslitta.',
    miaEsperienza:
      'Il giorno più adrenalinico di Abisko: velocità sul ghiaccio e un silenzio surreale ogni volta che ci fermavamo a guardare il panorama.',
    giudizio: 'imperdibile',
    alternative: [],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Il paesaggio innevato del Parco nazionale di Abisko con una piccola sauna di legno e le montagne della Lapponia sullo sfondo',
    immagine: '/images/svezia/motoslitta-lago-ghiacciato.jpg',
  },
  {
    slug: 'husky-sledding-caccia-aurora',
    paeseSlug: 'svezia',
    destinazioneSlug: 'abisko',
    nome: 'Husky sledding con caccia all\'aurora',
    localita: 'Abisko, parco nazionale',
    cosE:
      'Un\'escursione serale in slitta trainata dagli husky nei dintorni di Abisko, organizzata nelle ore in cui l\'aurora è più probabile. Come per la motoslitta, ci sono tour «passeggeri» (ti porta un musher) e tour «self-drive» in cui guidi tu la slitta, spesso in coppia, scambiandosi i ruoli a metà percorso.',
    percheFarla: 'È stata la serata più bella del viaggio: il movimento della slitta, il fiato dei cani nell\'aria gelida e il cielo che, con le condizioni giuste, si accende sopra la testa.',
    durata: 'un\'escursione base dura circa 1-2 ore di guida vera e propria; con ritiro e riconsegna in paese la serata occupa 3-4 ore',
    periodo: 'stagione invernale, indicativamente da dicembre ad aprile',
    costo:
      '240€ a persona per il tour serale con caccia all\'aurora (la cifra del preventivo del viaggio); le versioni più brevi o diurne («panorama husky hike») partono da circa 70€, quelle self-drive più lunghe possono superare i 250€.',
    comePrenotare: 'Tour organizzato con guida, con ritiro direttamente allo STF Abisko Turiststation; conviene esserci circa 45 minuti prima della partenza. Nel periodo di Capodanno, quando la richiesta è più alta, meglio prenotare con un po\' di anticipo.',
    cosaPortare: 'Strati pesanti, guanti e sottoguanti: nella versione «passeggero» si resta immobili sulla slitta per buona parte del tempo, e il freddo si sente più che nel self-drive, dove ci si muove.',
    perChiEAdatta: 'La versione con musher va bene per chiunque, senza difficoltà fisiche; il self-drive richiede un minimo di equilibrio ma nessuna esperienza.',
    miaEsperienza:
      'Prima della partenza c\'era silenzio, rotto solo dai cani agitati e impazienti di correre. Poi la corsa nel buio quasi totale, e quella sera l\'aurora si è fatta vedere, anche se non a lungo.',
    giudizio: 'imperdibile',
    alternative: [],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Betulle spoglie e una distesa di neve nel Parco nazionale di Abisko, con le montagne della Lapponia all\'orizzonte',
    immagine: '/images/svezia/husky-sledding-caccia-aurora.jpg',
  },
  {
    slug: 'icehotel-jukkasjarvi',
    immagine: '/images/svezia/kiruna-stock.jpg',
    paeseSlug: 'svezia',
    destinazioneSlug: 'kiruna',
    nome: 'ICEHOTEL di Jukkasjärvi',
    localita: 'Jukkasjärvi, a circa 20 minuti da Kiruna',
    cosE:
      'L\'hotel di ghiaccio più famoso al mondo, ricostruito ogni inverno con blocchi di ghiaccio del fiume Torne: camere e suite scolpite ogni anno da artisti diversi (le «Art Suite»), più una parte «warm» riscaldata, aperta tutto l\'anno, con bar di ghiaccio, ristorante e negozio. Dal 2016 c\'è anche l\'ICEHOTEL 365, una versione permanente refrigerata artificialmente, visitabile anche d\'estate.',
    percheFarla: 'È una delle attrazioni più note della Lapponia svedese, a pochi minuti da Kiruna. In questo viaggio non l\'abbiamo fatta, ma conviene tenerla presente per un viaggio futuro, anche solo per una visita di poche ore.',
    durata: 'la sola visita richiede un\'ora o due; chi pernotta ha accesso gratuito e illimitato alla struttura di ghiaccio per tutto il soggiorno',
    periodo: 'la versione stagionale di ghiaccio è aperta indicativamente da dicembre ad aprile; la versione permanente ICEHOTEL 365 tutto l\'anno',
    costo:
      'Ingresso giornaliero (solo visita): circa 349 SEK adulti (31€ circa), 249 SEK studenti/over 65 (22€ circa), 125 SEK bambini 7-15 anni (11€ circa), gratis sotto i 7. Pernottamento in una camera di ghiaccio «cold»: circa 3.995 SEK a notte per 2 persone (350€ circa); una suite d\'artista: circa 4.995 SEK a notte per 2 persone (440€ circa). Chi dorme in una camera fredda ha comunque diritto a un letto in una camera calda per il resto della notte, incluso nel prezzo.',
    comePrenotare: 'Il biglietto d\'ingresso si compra in loco, senza prenotare; il pernottamento invece va prenotato con largo anticipo sul sito ufficiale, soprattutto per Capodanno.',
    cosaPortare: 'Per chi pernotta: il sacco a pelo termico lo fornisce la struttura, ma conviene avere un cambio caldo per la mattina.',
    perChiEAdatta: 'A chi vuole un\'esperienza estrema anche solo per una notte, oppure a chi preferisce una visita guidata e dormire altrove (per esempio a Kiruna, come abbiamo fatto noi).',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: [],
    imageAlt: 'Chiesa di legno rossa di Kiruna sotto un cielo invernale svedese',
  },
  {
    slug: 'miniera-lkab-kiruna',
    paeseSlug: 'svezia',
    destinazioneSlug: 'kiruna',
    nome: 'Visita alla miniera LKAB',
    localita: 'Kiruna, LKAB Visitor Centre',
    cosE:
      'Un tour guidato di 3 ore nella più grande miniera di ferro sotterranea al mondo, fino a 540 metri sotto la superficie, in un museo e centro visitatori di 20.000 m². Si capisce anche perché l\'intera città di Kiruna si sta spostando: l\'espansione della miniera ha reso instabile il terreno sotto il centro storico.',
    percheFarla: 'È il modo migliore per capire cosa sta ridisegnando Kiruna, ed è un\'esperienza diversa dalle attività nella natura del resto del viaggio.',
    durata: 'circa 3 ore, incluso il trasferimento',
    periodo: 'tutto l\'anno, ma solo in giorni fissi (martedì, giovedì, venerdì, sabato); i giorni cambiano con la stagione, quindi conviene ricontrollarli',
    costo: 'circa 590 SEK adulti (52€ circa), 490 SEK studenti/over 65 (43€ circa), 190 SEK bambini 6-15 anni (17€ circa). Prezzo comprensivo di transfer, guida e pausa caffè.',
    comePrenotare: 'Prenotazione online obbligatoria tramite Kiruna Lappland: i posti sono limitati.',
    cosaPortare: 'Abbigliamento pesante anche sottoterra: la temperatura in miniera si aggira sui 10°C.',
    perChiEAdatta: 'Per sicurezza servono almeno 6 anni d\'età e 110 cm d\'altezza. In questo viaggio non l\'ho fatta.',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: [],
    imageAlt: 'Gli impianti industriali della miniera di ferro LKAB ai piedi del monte Kiirunavaara, a Kiruna',
    immagine: '/images/svezia/miniera-lkab-kiruna.jpg',
  },
  {
    slug: 'vasamuseet-stoccolma',
    paeseSlug: 'svezia',
    destinazioneSlug: 'stoccolma',
    nome: 'Vasamuseet (Museo Vasa)',
    localita: 'Djurgården, Stoccolma',
    cosE:
      'Il museo del Vasa, una nave da guerra reale svedese affondata nel porto di Stoccolma durante il viaggio inaugurale, nel 1628, dopo meno di 1.300 metri di navigazione, e recuperata quasi intatta dal fondo del porto nel 1961. Oggi è la nave del XVII secolo meglio conservata al mondo, esposta intera dentro un edificio costruito apposta intorno allo scafo.',
    percheFarla:
      'È un naufragio del Seicento conservato quasi come se fosse successo ieri, con oltre il 95% del materiale originale. Il colpo d\'occhio nelle foto non si rende.',
    durata: 'indicativamente 1,5-2 ore per una visita con calma, incluso il film introduttivo',
    periodo: 'tutto l\'anno, museo al coperto',
    costo: 'da 195 SEK (gennaio-aprile e ottobre-dicembre) a 240 SEK (maggio-settembre) per adulti; gratuito sotto i 18 anni',
    comePrenotare: 'Biglietto online in anticipo (consigliato in alta stagione) o direttamente in loco',
    cosaPortare: 'Niente di particolare: il museo è al coperto',
    perChiEAdatta: 'Chiunque, senza difficoltà; è tra le attrazioni più visitate della Svezia',
    giudizio: 'da-verificare',
    alternative: ['Il biglietto combinato con il Vrak Museum of Wrecks, dedicato ad altri relitti del Mar Baltico, valido 72 ore'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'La poppa scolpita della nave da guerra Vasa del XVII secolo esposta all\'interno del Vasamuseet di Stoccolma',
    immagine: '/images/svezia/vasamuseet-stoccolma.jpg',
  },
  {
    slug: 'gamla-stan-passeggiata',
    paeseSlug: 'svezia',
    destinazioneSlug: 'stoccolma',
    nome: 'Passeggiata a Gamla Stan',
    localita: 'Gamla Stan, centro storico di Stoccolma',
    cosE:
      'Una passeggiata nel centro storico medievale di Stoccolma, costruito su una piccola isola: vicoli stretti e acciottolati, case color pastello, la piazza di Stortorget (la più antica della città, dove nel 1520 avvenne il «Bagno di sangue di Stoccolma»), il Palazzo Reale con il cambio della guardia e la cattedrale di Storkyrkan.',
    percheFarla:
      'È il nucleo originario di Stoccolma, fondata qui nel 1252: in un\'area piccola, che si gira in poche ore, c\'è gran parte della storia della città.',
    durata: 'mezza giornata per un giro con calma, incluse soste per caffè',
    periodo: 'tutto l\'anno, più piacevole da aprile a settembre',
    costo: 'camminare è gratis; il Palazzo Reale (appartamenti di stato) ha un ingresso a pagamento separato',
    comePrenotare: 'Per la passeggiata non serve prenotare; il cambio della guardia ha orari fissi, da controllare in loco o online',
    cosaPortare: 'Scarpe comode: sui ciottoli di Gamla Stan tacchi e suole sottili soffrono',
    perChiEAdatta: 'Chiunque, senza particolari difficoltà fisiche',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Un vicolo acciottolato di Gamla Stan di sera, stretto tra le facciate antiche e illuminato dai lampioni, Stoccolma',
    immagine: '/images/svezia/gamla-stan-passeggiata.jpg',
  },
  {
    slug: 'abba-museum-stoccolma',
    paeseSlug: 'svezia',
    destinazioneSlug: 'stoccolma',
    nome: 'ABBA The Museum',
    localita: 'Djurgården, Stoccolma',
    cosE:
      'Un museo interattivo dedicato agli ABBA, il gruppo pop svedese più famoso al mondo: costumi di scena originali, strumenti, la ricostruzione dello studio di registrazione Polar Music e stanze dove ci si può «esibire» virtualmente insieme agli ologrammi della band.',
    percheFarla:
      'È uno dei musei musicali più curati e divertenti d\'Europa, fatto per partecipare più che per guardare, e racconta un pezzo di cultura pop svedese esportata in tutto il mondo.',
    durata: 'circa 1,5-2 ore',
    periodo: 'tutto l\'anno, museo al coperto',
    costo: 'adulti 269-349 SEK secondo la data (prezzo dinamico), bambini 7-15 anni 129-169 SEK, gratuito sotto i 7',
    comePrenotare: 'Biglietto con fascia oraria d\'ingresso, da prenotare online in anticipo: gli orari più richiesti si esauriscono, soprattutto nel weekend',
    cosaPortare: 'Niente di particolare',
    perChiEAdatta: 'Chiunque, anche chi non è un fan sfegatato degli ABBA; con la parte interattiva va bene soprattutto per le famiglie',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Quattro costumi di scena originali degli ABBA esposti su manichini all\'ABBA The Museum di Stoccolma',
    immagine: '/images/svezia/abba-museum-stoccolma.jpg',
  },
  {
    slug: 'arcipelago-stoccolma-in-barca',
    paeseSlug: 'svezia',
    destinazioneSlug: 'stoccolma',
    nome: 'Gita in barca nell\'arcipelago di Stoccolma',
    localita: 'Stockholms skärgård, a est di Stoccolma',
    cosE:
      'Un\'uscita in barca tra le oltre 30.000 isole e isolotti dell\'arcipelago di Stoccolma, che si allunga verso est fino al Mar Baltico: guidata su un battello turistico o in autonomia con i traghetti pubblici Waxholmsbolaget. Le formule guidate più comuni toccano una o due isole in mezza giornata; chi ha più tempo può fare uscite di una giornata intera o dormire una notte su un\'isola.',
    percheFarla:
      'Per molti svedesi è l\'arcipelago a fare di Stoccolma una città «sull\'acqua». È l\'altra faccia della capitale rispetto al centro storico: casette rosse di legno, pinete, acqua bassa e trasparente.',
    durata: 'da 2-2,5 ore per un\'uscita guidata classica a una giornata intera per chi vuole toccare più isole',
    periodo: 'maggio-settembre, quando la maggior parte delle linee turistiche e dei collegamenti verso le isole minori è attiva; d\'inverno il servizio si riduce parecchio',
    costo: 'da circa 375 SEK (35€ circa) per un\'uscita guidata di 2-2,5 ore; i traghetti pubblici Waxholmsbolaget costano meno, ma l\'itinerario te lo organizzi da solo',
    comePrenotare: 'Tour guidati prenotabili online (per esempio Strömma) con partenza dal centro; i traghetti pubblici si prendono direttamente al molo di Strandvägen o Nybroplan, con biglietto in loco o via app',
    cosaPortare: 'Una giacca a vento anche d\'estate: in mare aperto il vento si sente più che in città',
    perChiEAdatta: 'Chiunque: le uscite guidate non hanno difficoltà fisiche; quelle in autonomia richiedono un minimo di organizzazione con gli orari dei traghetti',
    giudizio: 'da-verificare',
    alternative: ['I traghetti pubblici Waxholmsbolaget, più economici e più liberi nei tempi ma senza guida'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Il battello di linea dell\'arcipelago ormeggiato al pontile di Arholma accanto a una casa gialla sul mare, nell\'arcipelago di Stoccolma',
    immagine: '/images/svezia/arcipelago-stoccolma-in-barca.jpg',
  },
]
