import type { Destinazione } from '@/lib/types'

// Paese visitato di persona (seconda parte dell'articolo centro-america-itinerario,
// raggiunta in volo dal Belize). I campi miaEsperienza sono in prima persona e
// tengono solo i fatti raccontati nell'articolo. Nessun nome di hotel,
// ristorante o operatore.

export const destinazioniPanama: Destinazione[] = [
  {
    slug: 'panama-city',
    paeseSlug: 'panama',
    ordine: 1,
    nome: 'Panama City',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una capitale con due facce opposte a pochi chilometri di distanza: lo skyline di grattacieli sulla baia e il Casco Viejo, il centro storico coloniale Patrimonio UNESCO, con le sue piazze e i suoi rooftop.',
    percheAndarci:
      'È l\'hub aereo di tutta l\'America Latina e la porta d\'ingresso obbligata del paese, e a differenza di molte capitali della regione merita un paio di giorni.',
    cosaVedere: [
      'Il Casco Viejo, con Plaza de la Independencia e le chiese coloniali',
      'Le chiuse di Miraflores sul Canale di Panama, con il centro visitatori e la terrazza panoramica',
      'Le rovine di Panamá Viejo, la città originale distrutta dai pirati nel 1671',
      'Il Biomuseo firmato Frank Gehry, sulla Calzada de Amador',
      'Il Parque Natural Metropolitano, foresta tropicale dentro i confini della città',
    ],
    cosaFare: [
      'Visita alle chiuse del canale, meglio negli orari di transito delle navi (c\'è una scheda esperienza dedicata)',
      'Aperitivo su uno dei rooftop del Casco Viejo al tramonto',
      'Gita in giornata alle isole Perlas o a Isla Taboga in traghetto',
      'Escursione a Portobelo e alla costa caraibica, a circa 2 ore dalla capitale',
    ],
    doveDormire: 'Casco Viejo per l\'atmosfera e la vita serale; zona Marbella e Obarrio per hotel più moderni e prezzi spesso più bassi.',
    doveMangiare:
      'Il posto da non saltare è il Mercado de Mariscos sulla baia: al piano di sotto si compra il pesce, al piano di sopra lo cucinano, e un ceviche in bicchiere di plastica costa un paio di dollari. Il Casco Viejo ha i rooftop e i ristoranti d\'autore, con prezzi da capitale internazionale; le fonde di quartiere servono il sancocho, la zuppa di pollo con la ñame che è il piatto nazionale, e il ropa vieja. Come cibo di strada, da provare le carimañolas e le empanadas fritte a colazione.',
    comeArrivare: 'Volo internazionale su Panama City-Tocumen (PTY), uno degli hub principali delle Americhe; dall\'aeroporto al centro 30-45 minuti in taxi o Uber.',
    comeSpostarsi: 'Metro (due linee, economica e funzionale), Uber diffuso e conveniente, taxi da contrattare sempre prima di salire.',
    periodoMigliore: 'metà dicembre-metà aprile, stagione secca; nel resto dell\'anno piove soprattutto nel pomeriggio',
    costi: 'si paga in dollari USA (il balboa esiste solo in monete); ingresso a Miraflores circa 20 USD per gli stranieri',
    erroriDaEvitare: [
      'Andare alle chiuse senza controllare gli orari di transito: senza navi in passaggio la visita perde gran parte del senso',
      'Girare di notte fuori dalle zone turistiche del Casco Viejo, che confina con quartieri da evitare',
    ],
    miaEsperienza:
      'Dall\'aeroporto siamo andati dritti al Casco Viejo, e il primo impatto è stato uno skyline di grattacieli che non somigliava a niente di quello visto nelle tre settimane prima. Il giorno dopo, al mattino, le chiuse di Miraflores: gli orari di transito delle navi vanno controllati prima, perché senza una nave in manovra si guarda una vasca di cemento vuota, mentre una portacontainer che entra con pochi centimetri di margine per lato vale da sola la deviazione. Nel pomeriggio le rovine di Panamá Viejo e una passeggiata nel Casco Viejo, dove la cosa più interessante da guardare è il contrasto fra palazzi ristrutturati e facciate ancora puntellate. Abbiamo pranzato al Mercado de Mariscos con un ceviche in bicchiere di plastica da un paio di dollari. Fuori dalle zone turistiche del Casco, dopo il tramonto, meglio non girare a piedi.',
    esperienzeSlugs: ['chiuse-miraflores'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Lo skyline dei grattacieli di Panama City visto da una terrazza del Casco Viejo',
    immagine: '/images/panama/panama-city.jpg',
  },
  {
    slug: 'san-blas',
    paeseSlug: 'panama',
    ordine: 2,
    nome: 'San Blas (Guna Yala)',
    tipologia: ['mare', 'isole', 'cultura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un arcipelago di oltre 300 isole caraibiche amministrato in autonomia dal popolo Guna: palme, sabbia bianca, acqua bassa turchese e sistemazioni essenziali per scelta, spesso senza elettricità continua.',
    percheAndarci:
      'È il mare più famoso di Panama e uno dei pochi territori indigeni autogovernati del continente: le regole d\'accesso, i trasporti e le strutture li gestisce la comunità Guna, senza catene turistiche.',
    cosaVedere: [
      'Le isole più note per le gite in giornata: Isla Perro (con un relitto da snorkeling), Isla Aguja, Cayos Holandeses',
      'Le piscine naturali di acqua bassa in mezzo al mare',
      'I villaggi Guna, dove si acquistano le mole, i tessuti tradizionali cuciti a mano',
    ],
    cosaFare: [
      'Notte in cabaña su un\'isola, con pasti inclusi e giri in barca tra gli isolotti',
      'Snorkeling sui relitti e sulle secche coralline',
      'Traversata a vela verso la Colombia (3-5 giorni), alternativa classica al Darién Gap',
    ],
    doveDormire: 'Solo cabañas gestite dalle famiglie Guna, da quelle molto spartane a qualche opzione con bagno privato: si prenota a pacchetto, con trasporto e pasti inclusi.',
    doveMangiare: 'I pasti sono quasi sempre inclusi nel pacchetto: pesce, aragosta in stagione, riso e platano.',
    comeArrivare:
      'Trasferimento in 4x4 da Panama City fino al porto di Cartí (circa 2h30-3h su strada di montagna molto ripida), poi barca verso le isole. Partenze molto presto al mattino.',
    comeSpostarsi: 'Solo in barca, con i trasferimenti organizzati dalla struttura che ospita.',
    periodoMigliore: 'stagione secca (dicembre-aprile) per mare più calmo; la traversata in barca può essere impegnativa con vento',
    costi:
      'ingresso al territorio Guna e tasse per le isole da pagare in contanti; transfer 4x4 più barca 40-60 USD a tratta; pacchetti con cabaña e pasti 60-150 USD a persona per notte',
    erroriDaEvitare: [
      'Arrivare senza contanti: sulle isole non ci sono bancomat né pagamenti con carta',
      'Aspettarsi comfort da resort: elettricità limitata, acqua dolce razionata e wifi quasi assente fanno parte dell\'esperienza',
      'Prenotare con intermediari non autorizzati: le strutture e i trasporti sono gestiti dalla comunità Guna, che regola gli accessi',
    ],
    miaEsperienza:
      'Arrivarci è stato il trasferimento più impegnativo della seconda parte: sveglia verso le cinque, quasi tre ore di 4x4 su una strada di montagna dalle pendenze ripide fino al porto di Cartí, poi la barca verso le isole. Conviene sapere in cosa si entra. Guna Yala è un territorio autogovernato: il turismo lo gestiscono i Guna e la tassa d\'ingresso si paga a loro, solo in contanti, perché sulle isole non ci sono bancomat né carte. La nostra cabaña era essenziale per scelta, gestita da una famiglia Guna: luce a orario, acqua dolce razionata, wifi quasi assente, pasti inclusi. Il giorno pieno l\'abbiamo passato in barca fra Isla Perro, col relitto da fare in snorkeling, Isla Aguja, i Cayos Holandeses e le piscine naturali in mezzo al mare. Le regole sono della comunità: si chiede il permesso prima di fotografare persone e case, dalle isole non si porta via niente e le immersioni con bombole sono vietate.',
    esperienzeSlugs: ['notte-isola-san-blas'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Isolotto di sabbia bianca con palme e capanne nell\'arcipelago di San Blas, Panama',
    immagine: '/images/panama/san-blas.jpg',
  },
  {
    slug: 'bocas-del-toro',
    paeseSlug: 'panama',
    ordine: 3,
    nome: 'Bocas del Toro',
    tipologia: ['mare', 'isole', 'nightlife'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Arcipelago caraibico al confine con la Costa Rica, con case su palafitte, surf, snorkeling e la vita notturna più vivace del paese.',
    percheAndarci:
      'È il posto dove Panama diventa caraibica anche nell\'atmosfera: più vivace e meno essenziale di San Blas, con isole molto diverse tra loro a pochi minuti di barca.',
    cosaVedere: [
      'Isla Colón, con Bocas Town e i suoi edifici in legno colorati',
      'Starfish Beach, la spiaggia delle stelle marine',
      'Isla Bastimentos e il parco nazionale marino, con Red Frog Beach',
      'Cayo Zapatilla, spesso la tappa più bella dei tour in barca',
      'Cayo Coral, per lo snorkeling in acqua bassa',
    ],
    cosaFare: [
      'Tour in barca di giornata tra gli isolotti, con soste snorkeling e avvistamento delfini',
      'Lezione di surf a Playa Bluff o Paunch',
      'Giro in kayak tra le mangrovie',
      'Serata a Bocas Town, tra bar sull\'acqua e feste sulle isole',
    ],
    doveDormire: 'Bocas Town su Isla Colón per servizi e vita notturna; Bastimentos o Carenero per la tranquillità e gli alloggi sull\'acqua.',
    doveMangiare:
      'Bocas è il posto di Panama dove si mangia caraibico: pesce e pollo in salsa di cocco, rice and beans cucinati col latte di cocco invece che con l\'acqua, patacones ovunque. Il patrimonio afro-caraibico dell\'arcipelago si sente in cucina più che altrove nel paese. A Bocas Town i ristoranti sull\'acqua costano il doppio dei chioschi a due strade di distanza, dove si mangia lo stesso pesce; il mercato del mattino è l\'opzione più economica. La birra locale ghiacciata è quasi la bevanda ufficiale dell\'isola.',
    comeArrivare:
      'Volo interno da Panama City a Bocas del Toro (circa 1 ora) oppure bus notturno fino ad Almirante e water taxi (circa 30 minuti). Molti arrivano anche via terra dalla Costa Rica, dal confine di Sixaola.',
    comeSpostarsi: 'Water taxi tra le isole (pochi dollari a tratta), biciclette e taxi su Isla Colón.',
    periodoMigliore:
      'ha un microclima diverso dal resto del paese: settembre-ottobre e febbraio-marzo sono spesso i periodi più soleggiati, mentre qui la «stagione secca» panamense non sempre coincide',
    costi: 'tour in barca di giornata 25-40 USD a persona più le tasse del parco nazionale; volo interno 100-150 USD a tratta',
    erroriDaEvitare: [
      'Dare per scontata la stagione secca nazionale: qui il meteo segue un ciclo diverso dal resto di Panama',
      'Programmare il tour in barca senza tenere conto del mare mosso, che può cancellare le uscite verso i cayos più esterni',
    ],
    miaEsperienza:
      'Da Boquete siamo arrivati a Bocas via terra fino ad Almirante e poi in water taxi, ed è stato l\'opposto di San Blas: case su palafitte, un\'atmosfera molto più sociale e rumorosa, ostelli e gente che quasi sempre resta più del previsto. Il giorno dopo abbiamo fatto il giro in barca fra gli isolotti: Cayo Zapatilla, spesso il punto più bello di tutto il giro, e Starfish Beach, che mantiene la promessa del nome con le stelle marine in acqua alta poco più di un metro, più una sosta di snorkeling a Cayo Coral. Le uscite verso i cayos più esterni saltano col mare mosso, ed è un\'eventualità da mettere in conto. Due avvertenze pratiche: qui il meteo segue un microclima proprio e non la stagione secca del resto di Panama, e le sabbie sono infestate dai chitre, moscerini che pungono senza farsi sentire e lasciano segni per giorni. La sera, a Bocas Town, musica dal vivo e feste che spesso si spostano in barca sulle isole vicine.',
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Casette colorate su palafitte e pontile di legno sull\'acqua a Bocas del Toro, Panama',
    immagine: '/images/panama/bocas-del-toro.jpg',
  },
  {
    slug: 'boquete',
    paeseSlug: 'panama',
    ordine: 4,
    nome: 'Boquete e gli altopiani',
    tipologia: ['natura', 'trekking'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il Panama d\'altura, nella provincia di Chiriquí: clima fresco, piantagioni di caffè tra i migliori al mondo, foreste nuvolose e il Volcán Barú, il punto più alto del paese.',
    percheAndarci:
      'È l\'unico posto al mondo da cui, con la giornata giusta, si vedono insieme l\'Oceano Pacifico e il Mar dei Caraibi. Ed è il contrappeso fresco alle isole caraibiche.',
    cosaVedere: [
      'Il Volcán Barú (3.475 m), con la salita notturna per l\'alba sui due oceani',
      'Il Sendero Los Quetzales, tra i migliori posti al mondo per avvistare il quetzal',
      'Le piantagioni di caffè della zona, tra cui quelle che producono il pregiato Geisha',
      'Le cascate di Lost Waterfalls e il Caldera Hot Springs',
    ],
    cosaFare: [
      'Salita notturna al Volcán Barú per l\'alba (c\'è una scheda esperienza dedicata)',
      'Tour di una finca di caffè con degustazione',
      'Birdwatching sul Sendero Los Quetzales, meglio con guida locale',
      'Rafting sul Rio Chiriquí Viejo',
    ],
    doveDormire: 'Boquete paese per i servizi; i lodge sulle colline circostanti per il verde e le viste sulla valle.',
    doveMangiare:
      'A Boquete si beve il caffè migliore del viaggio: la zona produce il Geisha, che alle aste batte record mondiali di prezzo, e nelle caffetterie del paese si assaggia a una frazione di quello che costa altrove. Per un paese di montagna l\'offerta di cibo è a sorpresa internazionale, per via della comunità di pensionati nordamericani che ci vive; per mangiare panamense servono le fonde locali, con il sancocho e la carne guisada. Al mercato dell\'agricoltore si trovano fragole e verdura d\'altura, rare nel resto del paese.',
    comeArrivare:
      'Volo interno da Panama City a David (circa 1 ora), poi 40 minuti di auto o bus fino a Boquete; in alternativa bus notturno dalla capitale (6-7 ore).',
    comeSpostarsi: 'Bus locali frequenti tra David e Boquete; auto a noleggio comoda per le finche e i sentieri fuori paese.',
    periodoMigliore:
      'dicembre-aprile per la salita al Barú con cieli sereni; il bajareque, la pioggerella fine tipica della zona, può comparire in qualsiasi stagione',
    costi: 'ingresso al parco Volcán Barú pochi dollari; salita guidata 50-90 USD a persona; tour del caffè 30-40 USD',
    erroriDaEvitare: [
      'Salire al Barú senza abbigliamento invernale: in vetta si arriva prima dell\'alba, con vento e temperature vicine allo zero',
      'Aspettarsi la vista sui due oceani garantita: capita solo con cielo limpido, tipicamente nei mesi secchi',
    ],
    miaEsperienza:
      'Ci siamo arrivati da San Blas passando per Panama City e il volo per David, e dopo il caldo umido delle isole Boquete è stato un sollievo fisico: si dorme con la finestra aperta e senza ventilatore, cosa che nel resto del viaggio non capita quasi mai. Abbiamo fatto il tour di una finca di caffè con degustazione, ed è qui che si assaggia il Geisha a una frazione di quello che costa altrove. La notte dopo siamo partiti attorno a mezzanotte per il Barú: tredici chilometri di pista sterrata per lato, al buio, col freddo che aumenta, per arrivare in vetta ai 3.475 metri prima dell\'alba. La vista sui due oceani insieme si ha solo con il cielo del tutto limpido, cioè in pochi giorni buoni anche in stagione secca; anche senza quella fortuna, la salita notturna con le valli illuminate sotto vale la fatica. In tarda mattinata eravamo di nuovo a Boquete.',
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Arcobaleno sulle colline verdi attorno a Boquete, negli altopiani di Chiriquí, Panama',
    immagine: '/images/panama/boquete.jpg',
  },
]
