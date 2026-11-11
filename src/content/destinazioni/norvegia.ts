import type { Destinazione } from '@/lib/types'

// Contenuto riutilizzato dal viaggio "Lofoten in 7 giorni" (src/content/viaggi/01-lofoten-estate-2025.md).
// Dove un dato non è nel diario originale, il campo resta vuoto o con una nota
// esplicita "da confermare/da completare" — nessun fatto inventato.
//
// Le immagini sono foto stock temporanee (Pixabay/Pexels, licenze free-use),
// scelte per rappresentare davvero il luogo in attesa delle foto reali del
// viaggio — vanno sostituite non appena disponibili gli scatti originali.
//
// Oslo serve anche un secondo viaggio, "Capitali nordiche"
// (src/content/viaggi/60-capitali-nordiche.md): lì la città non è più solo il
// giorno di apertura/chiusura delle Lofoten, ma la tappa finale di 2-3 giorni
// pieni. visitataPersonalmente resta true (quella giornata di transito è
// stata vissuta davvero) e miaEsperienza non cambia — racconta solo quella
// giornata. Le voci aggiunte per il nuovo itinerario (Vigeland Park, Fram
// Museum, crociera sul fiordo) sono ricerca, non ricordo: coerente con le
// singole schede Esperienza collegate, che restano giudizio 'da-verificare'.

export const destinazioniNorvegia: Destinazione[] = [
  {
    slug: 'oslo',
    paeseSlug: 'norvegia',
    ordine: 1,
    nome: 'Oslo',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      '1 giorno, sia all\'andata che al ritorno, nel viaggio alle Lofoten; 2-3 giorni pieni nell\'itinerario "Capitali nordiche", come tappa finale dopo Copenaghen e Stoccolma',
    visitataPersonalmente: true,
    introduzione:
      'La capitale norvegese: giardini reali, lungomare di Aker Brygge, musei d\'arte contemporanea e l\'Opera House affacciata sul fiordo. Nel viaggio alle Lofoten è punto di ingresso e di uscita, una giornata per direzione; nell\'itinerario "Capitali nordiche" diventa una tappa piena, con il parco di sculture di Vigeland, i musei della penisola di Bygdøy e un\'uscita sul fiordo.',
    percheAndarci:
      'Un giorno di cultura e passeggiate a piedi che funziona bene sia per aprire sia per chiudere il viaggio alle Lofoten, prima o dopo il volo interno verso Bodø. Come tappa finale di un giro di capitali nordiche, regge bene 2-3 giorni pieni tra il centro, Bygdøy e il fiordo.',
    cosaVedere: [
      'Giardini del Palazzo Reale',
      'Lungomare di Aker Brygge',
      'Museo Astrup Fearnley (edificio di Renzo Piano)',
      'Oslo Opera House, con salita sul tetto per la vista su città e mare',
      'Il Vigeland Park (Frognerparken), il più grande parco di sculture al mondo opera di un solo artista: oltre 200 statue in bronzo, granito e ferro di Gustav Vigeland, ingresso libero e sempre aperto. È l\'attrazione più visitata di tutta la Norvegia',
      'La penisola di Bygdøy, con il Fram Museum (dedicato alla nave polare usata da Nansen e Amundsen) e il Kon-Tiki Museum (la zattera di Thor Heyerdahl): il Viking Ship Museum della stessa penisola è invece chiuso per una ristrutturazione che dovrebbe durare fino al 2027, con le navi vichinghe in trasferimento verso il nuovo Museum of the Viking Age: prima di programmare la visita conviene controllare la data di riapertura',
    ],
    cosaFare: [
      'Passeggiata a piedi dal Palazzo Reale ad Aker Brygge fino all\'Opera House',
      'Salita sul tetto dell\'Opera House per la vista, con una sosta per un tè caldo nel bar interno',
      'Una passeggiata tra le sculture del Vigeland Park (vedi la scheda esperienza dedicata)',
      'Una mattinata ai musei di Bygdøy (Fram Museum e Kon-Tiki Museum), vedi la scheda esperienza dedicata',
      'Una crociera sull\'Oslofjord di due ore, tra le isole e le baie a sud della città (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Ho dormito al Citybox Hotel, a 5 minuti a piedi da Oslo S: design-hotel economico, check-in automatico, camere essenziali ma pulite, letti comodi, macchina del caffè in stanza. Le recensioni (Tripadvisor, oltre 2.400 giudizi, punteggio 4/5) confermano la mia impressione: ottimo rapporto qualità-prezzo per gli standard di Oslo e posizione comodissima, a fronte di uno stile minimal per scelta (niente reception fisica) e qualche lamentela su stanze rumorose se affacciate sul tram. Consiglio di chiedere una camera sul lato interno.\n\nAlternative a Oslo. Economiche: Saga Poshtel (a pochi passi da Oslo S), Comfort Hotel Xpress Central Station (due minuti da Jernbanetorget) · fascia media (qui rientra anche il Citybox scelto): Comfort Hotel Karl Johan (250 m da Oslo S) · fascia alta senza esagerare: Amerikalinjen (hotel storico e boutique vicino alla stazione), The Thief (design hotel sul lungomare di Tjuvholmen, con spa interna).',
    doveMangiare:
      'Cena da Rorbua (Aker Brygge): cucina norvegese tradizionale, porzioni generose, prezzi nella media, atmosfera calda in legno. Se si torna a Oslo a fine viaggio, Café Sara va bene per l\'ultima cena: locale semplice ma aperto fino a tardi, comodo dopo un volo serale (nel weekend conviene prenotare).',
    comeArrivare:
      "Volo internazionale su Oslo Gardermoen, a circa 50 km dal centro. Il treno veloce Flytoget arriva a Oslo Sentralstasjon in circa 20 minuti (circa 276 NOK, 2026), con partenze frequenti; il treno regionale Vy impiega 23-30 minuti e costa circa 125 NOK. Da Stoccolma, per chi arriva come tappa finale di «Capitali nordiche»: treno diretto SJ (circa 5h45) o volo interno (circa 1 ora). Da Copenaghen c'è anche il traghetto notturno DFDS, circa 17 ore.",
    comeSpostarsi: 'A piedi in centro; Flytoget per/dall\'aeroporto; per Bygdøy, bus urbano o traghetto stagionale dal municipio.',
    periodoMigliore: 'per la sola tappa di transito vale l\'estate del viaggio alle Lofoten; maggio-settembre per un soggiorno pieno, con la crociera sul fiordo e Vigeland Park al meglio con le giornate lunghe',
    costi:
      "Flytoget circa 276 NOK a tratta, treno regionale circa 125 NOK. Vigeland Park e tetto dell'Opera gratuiti; Fram 180 NOK (circa 17 €), Munch e Nasjonalmuseet 220 NOK ciascuno (circa 20 €). Crociera sull'Oslofjord di 1,5-2 ore: indicativamente 45-70 € a persona. Budget giornaliero a persona, alloggio escluso: basso 60-80 € (supermercato, mezzi, attrazioni gratuite), medio 110-150 € (pranzo fuori, cena media, un museo), alto oltre 200 €.",
    erroriDaEvitare: [
      'Se si va a Café Sara nel weekend, prenotare: la sera è un locale molto frequentato',
      'Programmare la visita al Viking Ship Museum di Bygdøy senza informarsi prima: è chiuso per ristrutturazione, con riapertura prevista non prima del 2027',
    ],
    miaEsperienza:
      'Oslo per me è stata una tappa breve ma piacevole su entrambi i lati del viaggio: un pomeriggio di passeggiata tranquilla il primo giorno, e un\'ultima cena rilassata da Café Sara al rientro, dopo una settimana di trekking.',
    luoghi: [
      {
        nome: "Parco Vigeland (Frognerparken)",
        testo: "Il più grande parco di sculture fatto da un solo artista: 212 sculture in bronzo e granito di Gustav Vigeland, tra cui il Monolite, alto 14 metri, con 121 figure umane intrecciate. Lo visitano ogni anno da 1 a 2 milioni di persone.",
        come: "Metropolitana o tram fino a Majorstuen/Vigelandsparken, poi pochi minuti a piedi. Si cammina lungo l'asse centrale di circa 850 metri, dal cancello principale alla Ruota della vita, passando per il Monolite.",
        quando: "Aperto sempre, ingresso libero. Mattina presto o sera d'estate per avere le sculture senza folla.",
        tempo: "1,5-2 ore",
        costo: "ingresso libero",
        orari: "Parco sempre aperto",
        lat: 59.92741,
        lng: 10.69991,
        url: "https://www.vigeland.museum.no",
        consiglio: "Il museo Vigeland, accanto al parco, ha gli studi dell'artista: utile per un'ora in caso di pioggia."
      },
      {
        nome: "Oslo Opera House",
        testo: "Teatro dell'opera e del balletto sul fiordo, aperto nel 2008, progettato da Snøhetta con un tetto di marmo inclinato su cui si cammina. La vista sulla città e sul mare vale la salita.",
        come: "A piedi dalla stazione centrale. Il tetto è sempre aperto, anche senza biglietto per gli spettacoli.",
        quando: "Al tramonto, o con cielo limpido per la vista dell'Oslofjord.",
        tempo: "45 minuti-1 ora",
        costo: "tetto: ingresso libero",
        orari: "Tetto sempre accessibile",
        lat: 59.9075,
        lng: 10.7522,
        url: "https://www.operaen.no",
        consiglio: "Dopo la salita, tè caldo al bar interno: è il modo migliore per riscaldarsi."
      },
      {
        nome: "Munch e Nasjonalmuseet",
        testo: "Il museo Munch, a Bjørvika, raccoglie gran parte dell'opera di Edvard Munch; il Nasjonalmuseet, la più grande raccolta di arte, architettura e design della Norvegia, ha un'altra versione dell'Urlo (1893). Due edifici nuovi vicino al fiordo.",
        come: "Il Munch a piedi dalla stazione; il Nasjonalmuseet a piedi dal centro, vicino al municipio.",
        quando: "Mattina nei giorni feriali; prenotare online per gli ingressi con orario.",
        tempo: "2-3 ore per ognuno",
        costo: "Munch 220 NOK, Nasjonalmuseet 220 NOK adulti (2026), circa 20 € ciascuno; Munch gratis il primo mercoledì del mese dalle 18 alle 21",
        orari: "Munch tutti i giorni dalle 10; Nasjonalmuseet mar-mer 10-20, gio-dom 10-17, chiuso il lunedì (2026)",
        lat: 59.90617,
        lng: 10.75566,
        url: "https://www.munch.no",
        consiglio: "Confrontare le versioni dell'Urlo: le differenze si vedono dal vivo."
      },
      {
        nome: "Penisola di Bygdøy: Fram e Kon-Tiki",
        testo: "Il Fram Museum custodisce la nave polare di Nansen e Amundsen, intatta e visitabile a bordo. Accanto il Kon-Tiki Museum espone la zattera con cui Thor Heyerdahl attraversò il Pacifico nel 1947. Il museo delle navi vichinghe è chiuso per rinnovo fino al 2027: controllare la riapertura.",
        come: "Con i mezzi pubblici dal centro (percorsi e biglietti sull'app Ruter). I musei sono a pochi minuti l'uno dall'altro.",
        quando: "Mattina, per avere le sale con meno gruppi.",
        tempo: "3-4 ore",
        costo: "Fram 180 NOK, Kon-Tiki circa 180 NOK, biglietto combinato circa 325 NOK (2026), circa 30 €",
        orari: "Fram aperto tutti i giorni dell'anno 10-17 (2026)",
        lat: 59.90333,
        lng: 10.69944,
        url: "https://www.frammuseum.no",
        consiglio: "I due musei si vedono bene in mezza giornata."
      },
      {
        nome: "Norsk Folkemuseum",
        testo: "Il museo all'aperto di Bygdøy, con oltre 150 edifici portati da tutta la Norvegia, tra cui una chiesa di legno (stavkirke) del 1200 circa. D'estate ci sono figuranti in costume, animali e dimostrazioni di artigianato.",
        come: "Bus 30 dal centro fino a Folkemuseet; d'estate anche il traghetto da Rådhusbrygge.",
        quando: "Da giugno ad agosto, quando gli edifici sono animati; in inverno è più quieto.",
        tempo: "2-3 ore",
        orari: "In bassa stagione mar-dom 11-16, chiuso il lunedì (2026)",
        lat: 59.90691,
        lng: 10.68596,
        url: "https://norskfolkemuseum.no/en"
      },
      {
        nome: "Fortezza di Akershus",
        testo: "Fortezza medievale del 1300 sul porto, poi castello rinascimentale. Il parco è gratuito e le mura offrono una bella veduta sul porto di Oslo; dentro ci sono il museo militare e quello della Resistenza.",
        come: "A piedi dal centro; ingresso libero al parco.",
        quando: "Giorno intero; il complesso è sorvegliato dalla Guardia reale. Dentro ci sono anche il Museo delle forze armate e quello della Resistenza.",
        tempo: "1,5 ore",
        costo: "parco libero; musei e castello con biglietto separato",
        lat: 59.90661,
        lng: 10.73625,
        consiglio: "Salire sulle mura al tramonto: la luce sul fiordo è la migliore."
      },
      {
        nome: "Municipio (Rådhuset)",
        testo: "Le due torri in mattoni del 1950 dominano il porto; dentro, la grande sala è coperta di affreschi sulla storia e il lavoro dei norvegesi. È qui che ogni 10 dicembre si consegna il Premio Nobel per la Pace.",
        come: "A piedi dal centro, sul porto di fronte ad Aker Brygge.",
        quando: "Mattina nei giorni feriali; dalla torre suona un carillon ogni ora.",
        tempo: "45 minuti",
        costo: "Ingresso libero",
        orari: "Lun-sab 9-16, chiuso la domenica e in alcune date di eventi (2026)",
        lat: 59.91167,
        lng: 10.73361,
        url: "https://www.oslo.kommune.no/radhuset/"
      },
      {
        nome: "Palazzo Reale e Karl Johans gate",
        testo: "La via pedonale di Karl Johans gate sale dalla stazione fino al Palazzo Reale, passando davanti al Parlamento e all'Università. Intorno alla residenza del re si apre lo Slottsparken, un parco libero dove si assiste al cambio della guardia.",
        come: "A piedi dalla stazione centrale, circa 20 minuti in salita leggera.",
        quando: "Per il cambio della guardia, ogni giorno (orario sul sito della casa reale); d'estate l'interno del palazzo si visita con tour guidati.",
        tempo: "1-2 ore",
        costo: "Parco e via gratuiti",
        lat: 59.91722,
        lng: 10.7275,
        url: "https://www.royalcourt.no"
      },
      {
        nome: "Aker Brygge e Astrup Fearnley",
        testo: "L'ex area dei cantieri navali, oggi lungomare con ristoranti, e il museo d'arte contemporanea Astrup Fearnley, edificio di Renzo Piano. Il Tjuvholmen vicino ha sculture all'aperto.",
        come: "A piedi dal Palazzo Reale lungo il lungomare.",
        quando: "Sera d'estate, per i tavoli all'aperto sul fiordo.",
        tempo: "2 ore",
        orari: "Astrup Fearnley mar-ven 12-17, giovedì fino alle 19, sab-dom 11-17; lunedì chiuso, tranne luglio e agosto (12-17)",
        lat: 59.90667,
        lng: 10.72139,
        url: "https://www.afmuseet.no",
        consiglio: "Camminare fino a Tjuvholmen: la spiaggia urbana è gratuita."
      },
      {
        nome: "Crociera sull'Oslofjord",
        testo: "Un'uscita in barca di 1,5-2 ore tra le isole e le baie a sud della città, con la vista sull'Opera, sulla fortezza di Akershus e sulle casette estive degli isolotti. È il modo più semplice di capire quanto Oslo viva sul fiordo.",
        come: "Partenze dal molo davanti al Municipio (Rådhusbrygge); per le isole più vicine bastano i traghetti pubblici con il biglietto Ruter.",
        quando: "Da maggio a settembre, con più partenze al giorno; d'inverno l'offerta si riduce molto.",
        tempo: "1,5-2 ore",
        costo: "Indicativamente 45-70 € a persona",
        lat: 59.91167,
        lng: 10.73361
      },
      {
        nome: "Holmenkollen",
        testo: "Il trampolino di salto con gli sci di Oslo, con museo dello sci e simulatore, sopra la città. La vista sul fiordo e sulla foresta è la ragione per salire.",
        come: "Metropolitana linea 1 fino a Holmenkollen. Il percorso fino al trampolino è a piedi.",
        quando: "Giorno, con cielo limpido; in inverno spesso c'è neve.",
        tempo: "2 ore",
        lat: 59.96389,
        lng: 10.66778,
        url: "https://www.holmenkollen.com",
        consiglio: "Salire in metropolitana e tornare giù a piedi lungo i sentieri nel bosco."
      },
      {
        nome: "Biblioteca Deichman Bjørvika",
        testo: "La biblioteca centrale aperta nel 2020 accanto all'Opera, con sei piani di libri, sale di lettura, laboratori e una grande finestra sul fiordo all'ultimo piano. È uno spazio pubblico dove si entra anche solo per riposarsi al caldo.",
        come: "A piedi dalla stazione centrale, di fronte all'Opera.",
        quando: "Con il freddo o la pioggia, o la sera, quando è aperta fino a tardi.",
        tempo: "45 minuti",
        costo: "Ingresso libero",
        orari: "Nei giorni feriali 8-22 (2026)",
        lat: 59.90866,
        lng: 10.7527,
        url: "https://deichman.no/bibliotekene/bj%C3%B8rvika"
      },
      {
        nome: "Grünerløkka e Mathallen",
        testo: "L'ex quartiere operaio lungo il fiume Akerselva, oggi pieno di caffè, negozi di seconda mano e locali. Sul bordo c'è Mathallen, il mercato coperto con banchi di prodotti norvegesi e piccoli ristoranti.",
        come: "Tram 11, 12 o 18 dal centro, oppure a piedi lungo l'Akerselva in 20-25 minuti.",
        quando: "Domenica, quando il quartiere è pieno di gente nei parchi e nei mercatini.",
        tempo: "2-3 ore",
        costo: "Gratuito; pranzo a Mathallen indicativamente 15-30 €",
        orari: "Mathallen mar-sab 10-20, domenica 11-18, chiuso il lunedì",
        lat: 59.92342,
        lng: 10.75168,
        url: "https://www.mathallenoslo.no/en/"
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina presto: Parco Vigeland",
          "Karl Johans gate fino al Palazzo Reale",
          "Pranzo ad Aker Brygge",
          "Pomeriggio: Munch o Nasjonalmuseet",
          "Tramonto sul tetto dell'Opera"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Bygdøy con Fram, Kon-Tiki e Norsk Folkemuseum",
          "Rientro in traghetto (d'estate) o bus 30",
          "Sera: Municipio dall'esterno e fortezza di Akershus al tramonto"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: crociera sull'Oslofjord in mattinata",
          "Pomeriggio a Holmenkollen con la metro 1",
          "Cena a Grünerløkka o a Mathallen"
        ]
      }
    ],
    zone: [
      {
        nome: "Sentrum e Oslo S",
        testo: "Vicino alla stazione, all'Opera e ai bus per l'aeroporto. Il Citybox dove ho dormito è a 5 minuti dalla stazione. Zone rumorose di sera vicino alla stazione.",
        perChi: "Chi arriva in treno o ha poco tempo",
        fascia: "130-230 €"
      },
      {
        nome: "Grünerløkka",
        testo: "Quartiere giovane, raggiungibile a piedi dal centro. Molti locali, più rumore nel weekend.",
        perChi: "Chi cerca bar, caffè e vita notturna",
        fascia: "110-200 €"
      },
      {
        nome: "Frogner e Majorstuen",
        testo: "Quartiere residenziale vicino al Vigeland; alloggi un po' più cari, buoni collegamenti.",
        perChi: "Chi vuole tranquillità e il parco",
        fascia: "140-260 €"
      }
    ],
    sapori: [
      {
        nome: "Brunost",
        testo: "Formaggio bruno e dolce di siero di latte, a fette sul pane o sulle cialde."
      },
      {
        nome: "Fårikål",
        testo: "Il piatto nazionale: agnello e cavolo bollito con pepe in grani, tipico d'autunno."
      },
      {
        nome: "Gamberi al porto (reker)",
        testo: "Gamberi bolliti da mangiare con pane, maionese e limone; d'estate si trovano freschi al porto."
      },
      {
        nome: "Kanelboller",
        testo: "Girelle alla cannella e cardamomo, da provare nei forni del centro."
      }
    ],
    attenzioni: [
      "L'alcol forte si vende solo da Vinmonopolet; nei supermercati la birra si vende solo in certe fasce orarie e non la domenica.",
      "Pickpocket intorno alla stazione e a Karl Johans gate: tenere borsa e telefono davanti.",
      "Il traffico elettrico e i monopattini sfrecciano sulle piste ciclabili: guardare prima di attraversare.",
      "La metropolitana si usa con i biglietti dell'app Ruter: comprare prima di salire, i controlli ci sono."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per Oslo?",
        risposta: "Due giorni per Vigeland, Opera, Munch e Bygdøy; il terzo per la crociera sul fiordo e Holmenkollen."
      },
      {
        domanda: "Come si va dall'aeroporto di Gardermoen al centro?",
        risposta: "Il Flytoget arriva a Oslo S in circa 20 minuti e costa circa 276 NOK; il treno regionale Vy impiega 23-30 minuti e costa circa 125 NOK. Gardermoen è a 50 km: al ritorno conviene partire dal centro tre ore prima del volo."
      },
      {
        domanda: "Oslo è la più cara delle capitali nordiche?",
        risposta: "Per mangiare e bere sì: una birra al bar costa 9-14 €, una cena media parte da 35-45 € a persona. Molte attrazioni però sono gratuite, dal Vigeland al tetto dell'Opera."
      },
      {
        domanda: "Il Viking Ship Museum è aperto?",
        risposta: "No: la sede di Bygdøy è chiusa per lavori e il nuovo Museum of the Viking Age non riaprirà prima del 2027. Bygdøy si visita comunque per Fram, Kon-Tiki e Norsk Folkemuseum."
      },
      {
        domanda: "Conviene l'Oslo Pass?",
        risposta: "Conviene a chi in due o tre giorni fa Bygdøy, Munch e Nasjonalmuseet usando i mezzi; per chi gira a piedi e vede soprattutto le attrazioni gratuite non vale la spesa."
      },
      {
        domanda: "Quando andare a Oslo?",
        risposta: "Da maggio a settembre, con giornate lunghe e battelli sul fiordo. In inverno si scia a pochi minuti di metro dal centro, ma fa buio presto."
      }
    ],
    gite: [
      {
        nome: "Fredrikstad",
        distanza: "circa 1 ora in treno",
        come: "Treni regionali Vy da Oslo S.",
        testo: "Ha la città fortificata meglio conservata della Scandinavia, Gamlebyen, con bastioni, fossati e case di legno, raggiungibile con un piccolo traghetto dal centro moderno."
      },
      {
        nome: "Drøbak",
        distanza: "40 km",
        come: "Bus dal centro in circa un'ora; d'estate anche in battello sul fiordo.",
        testo: "Un borgo di case bianche di legno sull'Oslofjord, con caffè sul porto e la fortezza di Oscarsborg sull'isola di fronte, dove nel 1940 fu affondato l'incrociatore tedesco Blücher."
      },
      {
        nome: "Lillehammer",
        distanza: "circa 2 ore in treno",
        come: "Treni Vy da Oslo S e dall'aeroporto di Gardermoen.",
        testo: "La città delle Olimpiadi invernali del 1994, sul lago Mjøsa, con il museo all'aperto di Maihaugen e i trampolini da sci sopra il centro."
      }
    ],
    esperienzeSlugs: ['vigeland-park-oslo', 'bygdoy-musei-fram-kontiki', 'oslofjord-crociera'],
    tripSlugs: ['lofoten-estate-2025', 'capitali-nordiche'],
    imageAlt: 'Facciata in vetro e marmo dell\'Oslo Opera House, con persone sul tetto spiovente',
    immagine: '/images/norvegia/oslo-stock.jpg',
  },
  {
    slug: 'bodo',
    paeseSlug: 'norvegia',
    ordine: 2,
    nome: 'Bodø',
    tipologia: ['natura'],
    giorniConsigliati: 'poche ore, tappa di passaggio due volte (andata e ritorno)',
    visitataPersonalmente: true,
    introduzione: 'Il punto di transito obbligato tra Oslo e le Lofoten: qui si arriva in aereo, si ritira l\'auto a noleggio e si prendono i traghetti verso l\'arcipelago.',
    percheAndarci: 'Serve comunque attraversarla, e ha abbastanza da offrire per occupare bene qualche ora tra un volo e un traghetto.',
    cosaVedere: ['Nyholms Fort, punto panoramico a 10 minuti a piedi dal porto', 'Spiaggia di Mjelle'],
    cosaFare: [
      'Giro del centro e del molo a piedi',
      'Traghetto verso Misten/Kjerringøy (circa 10 minuti, si resta in auto, arrivare 30 minuti prima): a me non ha entusiasmato, ma è un modo onesto per occupare qualche ora. Se il Bodø/Glimt gioca in casa, può valere la pena andare alla partita',
    ],
    doveDormire: 'Non ho pernottato a Bodø, ci sono solo passato: non ho un indirizzo da consigliare per chi vuole fermarsi una notte.',
    doveMangiare:
      'Bryggerikaia (apre a metà mattina): ottimi panini "mega farciti" da asporto, da consumare al punto panoramico della città. Melkebaren per colazione: buono, ma il servizio è lento, da mettere in conto con i tempi stretti.',
    comeArrivare: "Volo interno da Oslo Gardermoen, circa un'ora e mezza. L'aeroporto di Bodø è a circa 1,5 km dal centro: bus 1 e 4 in 5-10 minuti (circa 45 NOK, circa 4 €, con l'app Reis Nordland), taxi 150-250 NOK, oppure un quarto d'ora a piedi; il noleggio auto è nel terminal. Dalle Lofoten si arriva con il traghetto Moskenes-Bodø (circa 3 ore e un quarto; auto fino a 6 metri 605 NOK, circa 53 €; passeggeri gratis); d'estate il posto auto va prenotato sul sito di Torghatten Nord. In treno, la linea Nordlandsbanen arriva da Trondheim in circa 10 ore.",
    comeSpostarsi: 'A piedi in centro; auto a noleggio per il resto degli spostamenti.',
    periodoMigliore: 'ci sono passato in estate, all\'andata e al ritorno dalle Lofoten; per gli altri mesi non ho un riferimento diretto',
    costi: "non mi sono segnato i costi di questa tappa. Riferimenti: Luftfartsmuseum 195 NOK (circa 17 €), bus dall'aeroporto circa 45 NOK, traghetto per Moskenes 605 NOK per l'auto. Budget giornaliero a persona, indicativo: basso 90-120 € (ostello, spesa al supermercato, bus); medio 160-230 € (hotel in doppia, un museo, una cena al ristorante); alto 300 € e oltre (hotel sul porto, auto a noleggio, cene di pesce).",
    erroriDaEvitare: ['Mettere in conto il servizio lento da Melkebaren se si ha poco tempo tra un traghetto e l\'altro'],
    miaEsperienza:
      'Per noi è stata una tappa logistica sia all\'andata che al ritorno, ma con abbastanza da fare (spiaggia di Mjelle, il punto panoramico di Nyholms Fort) da non sembrare tempo perso.',
    luoghi: [
      {
        lat: 67.2877,
        lng: 14.3677,
        nome: "Nyholms Fort",
        testo: "Un vecchio forte sulla punta del porto di Bodø, oggi con vista sul porto e sulle isole.",
        come: "A piedi dal porto.",
        quando: "Tardo pomeriggio, con la luce sulle isole.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Il punto più comodo per una foto panoramica prima dell'imbarco."
      },
      {
        lat: 67.4085,
        lng: 14.6273,
        nome: "Spiaggia di Mjelle",
        testo: "Una lunga spiaggia di sabbia a nord del centro, tra dune e mare. D'estate si cammina anche di sera con la luce lunga.",
        come: "In auto o con bus locale da Bodø.",
        quando: "Estate, sera.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Portare giacca antivento: il vento da nord è forte."
      },
      {
        orari: "Sempre accessibile, si guarda dal ponte e dalla riva",
        lat: 67.2281,
        lng: 14.6164,
        nome: "Saltstraumen",
        testo: "Una delle correnti di marea più forti del mondo, a sud-est di Bodø: a ogni ciclo di marea passano fino a 400 milioni di metri cubi d'acqua, formando vortici. Non l'ho visitato, ma è la gita classica da Bodø.",
        come: "In auto o con bus da Bodø.",
        quando: "Controllare le tabelle delle maree: la corrente è più forte a mezzo flusso, circa ogni sei ore.",
        tempo: "2-3 ore",
        consiglio: "Da guardare dal ponte; non si fa il bagno."
      },
      {
        nome: "Norsk Luftfartsmuseum",
        testo: "Il museo nazionale dell'aviazione, in un grande edificio a forma di elica vicino all'aeroporto. Una sezione è dedicata al volo civile, l'altra a quello militare, con aerei originali e una parte sulla Guerra fredda. È la visita al coperto più solida di Bodø quando piove.",
        come: "A piedi dal centro in circa 25 minuti, oppure in auto: è accanto all'aeroporto, comodo prima di riconsegnare il noleggio.",
        quando: "Con la pioggia o nelle ore prima del volo.",
        tempo: "2 ore",
        costo: "Adulti 195 NOK (circa 17 €), bambini 6-16 anni 95 NOK, famiglia 550 NOK (2026)",
        orari: "1 giugno-16 agosto tutti i giorni 10-18; resto dell'anno lun-ven 10-16, sab-dom 11-17; chiuso per manutenzione dal 1 al 24 gennaio e nei festivi di Natale",
        url: "https://luftfartsmuseum.no",
        lat: 67.2764,
        lng: 14.4128,
      },
      {
        nome: "Cattedrale di Bodø (Bodø domkirke)",
        testo: "La cattedrale fu costruita negli anni Cinquanta, dopo che il bombardamento del 1940 aveva distrutto gran parte della città. È un edificio moderno in cemento con il campanile staccato e grandi vetrate colorate.",
        come: "In centro, a pochi minuti a piedi dal porto.",
        quando: "Di giorno, fuori dagli orari delle funzioni.",
        tempo: "20-30 minuti",
        lat: 67.2823,
        lng: 14.3819,
      },
      {
        nome: "Nordlandsmuseet",
        testo: "Il museo regionale del Nordland, in uno degli edifici più vecchi del centro. Racconta la storia di Bodø, la pesca e la cultura sami, e aiuta a capire com'era la città prima della guerra.",
        come: "A piedi in centro, accanto alla cattedrale.",
        quando: "Mezz'ora libera tra un giro in centro e il traghetto.",
        tempo: "1 ora",
        url: "https://www.nordlandsmuseet.no",
        lat: 67.2819,
        lng: 14.3823,
      },
      {
        nome: "Stormen, biblioteca e sala concerti",
        testo: "I due edifici bianchi sul lungomare sono il centro culturale della città: da una parte la sala concerti, dall'altra la biblioteca, con grandi vetrate sul porto. Dentro la biblioteca si entra liberamente e ci si siede a guardare il mare.",
        come: "A piedi dal molo, sul lungomare del centro.",
        quando: "Con brutto tempo o la sera, se c'è un concerto.",
        tempo: "30 minuti",
        costo: "Biblioteca a ingresso libero; concerti a pagamento",
        lat: 67.2831,
        lng: 14.3754,
      },
      {
        nome: "Keiservarden",
        testo: "Il belvedere sul monte Rønvikfjellet, sopra la città, prende il nome dalla visita dell'imperatore tedesco Guglielmo II alla fine dell'Ottocento. Dalla cima si vedono Bodø, le isole e, con il cielo pulito, il profilo delle Lofoten. D'estate è il posto classico per il sole di mezzanotte.",
        come: "Sentiero segnato dalla zona di Rønvik, a nord del centro; in auto fino al parcheggio di partenza, poi a piedi.",
        quando: "Sera d'estate, con il sole di mezzanotte e il cielo sereno.",
        tempo: "2-3 ore andata e ritorno",
        costo: "Ingresso libero",
        lat: 67.315,
        lng: 14.4783,
        consiglio: "Scarpe da trekking: il terreno è bagnato anche d'estate.",
      },
      {
        nome: "Kjerringøy handelssted",
        testo: "Un emporio commerciale dell'Ottocento con case di legno, magazzini sul mare e la casa del mercante, oggi gestito come museo dal Nordlandsmuseet. Il paesaggio intorno, tra spiagge chiare e montagne a punta, ricorda le Lofoten in piccolo.",
        come: "In auto verso nord, con il traghetto di circa 10 minuti fino a Misten (si resta in auto, al molo mezz'ora prima).",
        quando: "Estate, quando ci sono le visite guidate.",
        tempo: "Mezza giornata con il viaggio",
        url: "https://www.nordlandsmuseet.no",
        lat: 67.5195,
        lng: 14.7643,
      },
      {
        nome: "Aspmyra Stadion",
        testo: "Lo stadio del Bodø/Glimt, la squadra che negli ultimi anni ha vinto il campionato norvegese e si è fatta conoscere nelle coppe europee. È piccolo e vicino al centro: quando gioca in casa, la città si colora di giallo.",
        come: "A piedi dal centro in un quarto d'ora.",
        quando: "Nei giorni di partita in casa; il calendario è sul sito del club.",
        tempo: "2-3 ore con la partita",
        url: "https://glimt.no",
        lat: 67.2767,
        lng: 14.3844,
        consiglio: "I biglietti vanno presi online per tempo, soprattutto per le partite europee.",
      },
    ],
    sapori: [
      {
        nome: "Panini da asporto",
        testo: "Da Bryggerikaia si mangiano panini farciti da portare al punto panoramico."
      },
      {
        nome: "Colazione",
        testo: "Da Melkebaren, anche se il servizio è lento."
      }
    ],
    attenzioni: [
      "Se si va alle Lofoten in traghetto, arrivare con buon anticipo: in estate le code sono lunghe.",
      "In estate gli alloggi di Bodø si riempiono in anticipo: prenotare presto."
    ],
    programmi: [
      { titolo: "Mezza giornata tra volo e traghetto", tappe: ["Giro a piedi del centro e del molo", "Panino da asporto e vista da Nyholms Fort", "Stormen e la cattedrale", "Al molo dei traghetti con largo anticipo"] },
      { titolo: "1 giorno", tappe: ["Mattina al Norsk Luftfartsmuseum", "Pranzo in centro e Nordlandsmuseet", "Pomeriggio a Saltstraumen, all'ora della corrente più forte", "Sera a Keiservarden con la luce lunga"] },
      { titolo: "2 giorni", tappe: ["Giorno 1: come sopra", "Giorno 2: traghetto per Misten e Kjerringøy", "Spiaggia di Mjelle sulla via del ritorno", "Partita del Bodø/Glimt, se c'è"] },
    ],
    zone: [
      { nome: "Centro e porto", perChi: "Chi arriva o parte in traghetto", testo: "Hotel, ristoranti e il molo dei traghetti a pochi minuti a piedi. È la zona più comoda per una notte di passaggio." },
      { nome: "Vicino all'aeroporto", perChi: "Chi ha un volo all'alba", testo: "Qualche hotel tra l'aeroporto e il centro, con il Luftfartsmuseum a due passi. Meno atmosfera, ma si arriva al terminal in pochi minuti." },
      { nome: "Saltstraumen", perChi: "Chi ha l'auto e vuole natura", testo: "Lodge e cabine intorno alla corrente di marea, a circa mezz'ora dalla città. Tranquillo, ma servono l'auto e la spesa fatta prima." },
    ],
    gite: [
      { nome: "Saltstraumen", distanza: "circa 30 km, mezz'ora d'auto", come: "In auto o con il bus locale da Bodø.", testo: "La corrente di marea forma vortici sotto il ponte quattro volte al giorno: va vista a mezza marea, controllando le tabelle." },
      { nome: "Kjerringøy", distanza: "circa 40 km a nord, con un traghetto di 10 minuti", come: "In auto e traghetto per Misten.", testo: "L'emporio storico, le spiagge chiare e le montagne a punta: un assaggio del paesaggio delle Lofoten senza le folle." },
      { nome: "Lofoten via Moskenes", distanza: "circa 3 ore e un quarto di traghetto", come: "Traghetto Torghatten Nord per Moskenes, con o senza auto.", testo: "Più che una gita è il passaggio verso Reine e Å: con l'auto d'estate bisogna prenotare, a piedi si sale senza problemi." },
    ],
    faq: [
      { domanda: "Vale la pena fermarsi a Bodø?", risposta: "Come tappa di qualche ora sì: il centro si gira a piedi, il belvedere di Nyholms Fort è a dieci minuti e Saltstraumen è a mezz'ora. Per più di una notte serve un interesse preciso, come Kjerringøy o una partita del Bodø/Glimt." },
      { domanda: "Come si va da Bodø alle Lofoten?", risposta: "Con il traghetto per Moskenes, circa 3 ore e un quarto: l'auto fino a 6 metri paga 605 NOK, i passeggeri viaggiano gratis. In alternativa si vola su Leknes o Svolvær, oppure si guida verso nord e si prende il traghetto Bognes-Lødingen." },
      { domanda: "Bisogna prenotare il traghetto per Moskenes?", risposta: "Con l'auto, d'estate sì: il posto si prenota sul sito di Torghatten Nord e senza prenotazione si rischia di restare a terra. A piedi si sale senza problemi; conviene comunque essere al porto 40 minuti prima." },
      { domanda: "Quanto dista l'aeroporto dal centro?", risposta: "Circa 1,5 km: un quarto d'ora a piedi, 5-10 minuti con i bus 1 e 4 (circa 45 NOK) o pochi minuti di taxi." },
      { domanda: "Quando si vede il sole di mezzanotte a Bodø?", risposta: "Bodø è sopra il Circolo polare artico: il sole di mezzanotte c'è all'incirca da inizio giugno a inizio luglio. Il punto migliore per vederlo è Keiservarden, sopra la città." },
      { domanda: "Cosa fare a Bodø con la pioggia?", risposta: "Il Norsk Luftfartsmuseum, il Nordlandsmuseet e la biblioteca di Stormen, tutti a breve distanza dal centro. Il museo dell'aviazione da solo occupa un paio d'ore." },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Vista dall\'alto del porto di Bodø, con casette rosse sul molo e la strada costiera',
    immagine: '/images/norvegia/bodo-stock.jpg',
  },
  {
    slug: 'svolvaer',
    paeseSlug: 'norvegia',
    ordine: 3,
    nome: 'Svolvær',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 notti, prima base del viaggio',
    visitataPersonalmente: true,
    introduzione: 'Il porto principale delle Lofoten e la prima base logistica del viaggio: da qui si parte per l\'escursione in gommone al Trollfjord e per la gita a Henningsvær.',
    percheAndarci: 'Posizione centrale per le prime giornate nell\'arcipelago, con il ristorante migliore di tutto il viaggio.',
    cosaVedere: ['Il porto di Svolvær'],
    cosaFare: ['Escursione in RIB al Trollfjord (vedi la scheda esperienza dedicata)', 'Colazione da Kringla, panetteria molto buona vicino agli appartamenti'],
    doveDormire:
      'Ho dormito in un appartamento con vista sul porto al Nordis Apartment: finestroni, terrazza panoramica, angolo cottura. Su Booking.com ha un punteggio di 8,7/10 (417 recensioni) e 9,7/10 per la posizione — numeri che confermano la mia impressione: spazi ampi e puliti, vista che da sola vale il soggiorno, comodo per chi vuole cucinare la sera invece di uscire sempre.\n\nAlternative a Svolvær. Economiche: Lofoten Feriesenter (campeggio e cabine, da circa 200 NOK a persona), Lofoten Sommerhotell og Vandrerhjem (ostello a Kabelvåg, sauna e colazione inclusa) · fascia media (qui rientra il Nordis Apartment scelto): Thon Hotel Lofoten (centrale, vista sul porto) · fascia alta senza esagerare: Thon Hotel Svolvær (grande hotel sul lungomare, binocolo in ogni stanza), Svinøya Rorbuer (rorbu storici con cucina propria, il più quotato di Svolvær su Tripadvisor).',
    doveMangiare:
      'Bacalo per una cena nella media. Paleo Arctic è stato il ristorante migliore di tutto il viaggio: prezzi un po\' sopra la media, ma qualità molto più alta. Va prenotato per tempo.',
    comeArrivare: "Da Bodø: circa 3h15 di guida fino a Bognes, traghetto Bognes-Lødingen (arrivare con 40 minuti di anticipo), poi altre 1h40 d'auto fino a Svolvær. Il traghetto dura circa un'ora e non si prenota: si entra in ordine di arrivo e il pedaggio si paga con l'AutoPASS o a bordo. In alternativa si arriva da sud con il traghetto Bodø-Moskenes (circa 3 ore e un quarto; l'auto paga intorno ai 600 NOK più la prenotazione del posto, i passeggeri viaggiano gratis) e poi si guida per circa 2 ore lungo la E10 da Reine a Svolvær.",
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'ci sono stato in estate; per gli altri mesi non ho un riferimento diretto',
    costi: "Non mi sono segnato i costi di questa tappa. Riferimenti 2026: RIB al Trollfjord 1.195 NOK (circa 100 €), Magic Ice 325 NOK, musei di Kabelvåg 130-160 NOK. Indicativamente, a persona al giorno: 80-120 € con campeggio o ostello e spesa al supermercato; 180-260 € con appartamento o hotel in due e una cena fuori; oltre 350 € con rorbu curato, ristoranti ed escursioni tutti i giorni.",
    erroriDaEvitare: ['Prenotare per tempo sia il Trollfjord sia una cena da Paleo Arctic: sono le due esperienze più richieste della zona'],
    miaEsperienza:
      'Svolvær è stata la base giusta per le prime giornate: comoda per il Trollfjord e per Henningsvær, e lì abbiamo fatto la cena migliore di tutto il viaggio, al Paleo Arctic.',
    luoghi: [
      {
        nome: "Porto di Svolvær",
        testo: "Il porto della capitale delle Lofoten, con vecchi capannoni da pesca (rorbuer) e barche. Da qui partono i RIB per il Trollfjord e i battelli per le isole.",
        come: "A piedi dal centro.",
        quando: "Sera, per la luce e il pesce in banchina.",
        tempo: "1 ora",
        costo: "ingresso libero",
        lat: 68.23215,
        lng: 14.57516,
        consiglio: "Appartamento con vista sul porto: scelta pratica per cucinare e riposare."
      },
      {
        nome: "Trollfjord",
        testo: "Un fiordo stretto di circa 2 km, con pareti ripide e un'imboccatura larga un centinaio di metri. In estate il giro in RIB (gommone veloce) è il modo più diffuso per entrarci.",
        come: "Escursione prenotata con operatore da Svolvær.",
        quando: "Estate, con cielo sereno.",
        tempo: "2 ore",
        costo: "1.195 NOK adulti, 950 NOK bambini, circa 100 € (Lofoten Explorer, 2026)",
        lat: 68.3628,
        lng: 14.9361,
        url: "https://lofoten-explorer.no",
        consiglio: "Prenotare in anticipo: i RIB si riempiono."
      },
      {
        nome: "Svolværgeita",
        testo: "Una roccia a due corna, Storhorn e Lillehorn, sopra il paese: gli alpinisti saltano dall'una all'altra sopra il vuoto. Alla base si arriva con un sentiero ripido.",
        come: "Sentiero dal paese, ben segnato ma ripido.",
        quando: "Giornata sgombra da nuvole.",
        tempo: "3-4 ore",
        costo: "gratuito",
        lat: 68.24632,
        lng: 14.58847,
        consiglio: "Non è per chi soffre di vertigini."
      },
      {
        nome: "Kabelvåg e Lofotr",
        testo: "Poco fuori Svolvær, il Lofotmuseet nel vecchio porto di Kabelvåg racconta la pesca; a Borg c'è il Lofotr Viking Museum con la ricostruzione della casa di un capo vichingo, aperto dal 1° maggio al 15 settembre.",
        come: "In auto da Svolvær; Kabelvåg è vicinissima, Borg più lontano, verso ovest.",
        quando: "Giorno pieno.",
        tempo: "2-3 ore",
        costo: "Lofotmuseet 130 NOK, circa 11 €; Lofotr 210 NOK da metà settembre a fine dicembre 2026, intorno ai 250 NOK in alta stagione",
        orari: "Lofotmuseet: da settembre ad aprile tutti i giorni 11-16, chiuso 24, 25 e 31 dicembre. Lofotr: tutti i giorni dal 1° maggio al 15 settembre; novembre-dicembre 2026 mercoledì e sabato 11-17",
        lat: 68.20697,
        lng: 14.45292,
        url: "https://lofotr.no",
        consiglio: "Il Lofotr Viking Museum si visita in autonomia; in estate ci sono attività dal vivo."
      },
      {
        nome: "Lofotakvariet",
        testo: "L'acquario delle Lofoten, nel vecchio porto di Kabelvåg: vasche con i pesci del mare intorno alle isole, foche e lontre. Il momento più vivace è l'alimentazione delle foche.",
        come: "In auto, 8 minuti da Svolvær (5 km); si parcheggia davanti all'acquario.",
        quando: "All'ora dell'alimentazione: 12 e 16 d'estate, 12 e 15 da settembre ad aprile.",
        tempo: "1-1,5 ore",
        costo: "160 NOK adulti, 100 NOK bambini 3-15 anni, circa 14 € (2026); biglietto combinato SKREI 375 NOK",
        orari: "maggio-agosto tutti i giorni 10-18; settembre-novembre e febbraio-aprile 11-16; chiuso dicembre e gennaio",
        lat: 68.2074,
        lng: 14.4495,
        url: "https://www.museumnord.no/en/our-venues/lofotakvariet/",
        consiglio: "Il biglietto SKREI vale anche per il Lofotmuseet e la Galleri Espolin, a poche centinaia di metri: si fanno tutti e tre in una mattina."
      },
      {
        nome: "Galleri Espolin",
        testo: "La galleria dedicata a Kaare Espolin Johnson, l'artista che ha raccontato in bianco e nero la vita dei pescatori e il mare del nord. Un edificio moderno a Storvågan, accanto al Lofotmuseet.",
        come: "In auto da Svolvær, 7-8 minuti; parcheggio comune con il Lofotmuseet.",
        quando: "Mattina, insieme agli altri musei di Kabelvåg.",
        tempo: "45 minuti",
        costo: "130 NOK adulti, 70 NOK bambini 5-15 anni, circa 11 € (dal 1° giugno 2026)",
        orari: "maggio-agosto tutti i giorni 10-18; settembre-aprile 11-16, chiuso 24, 25 e 31 dicembre",
        lat: 68.20806,
        lng: 14.45139,
        url: "https://www.museumnord.no/en/our-venues/galleri-espolin/"
      },
      {
        nome: "Vågan kirke (Lofotkatedralen)",
        testo: "La grande chiesa di legno di Kabelvåg, del 1898, chiamata «cattedrale delle Lofoten» per le dimensioni. Fu costruita così grande per i pescatori che arrivavano a migliaia per la stagione del merluzzo.",
        come: "In auto lungo la E10, all'ingresso di Kabelvåg arrivando da Svolvær.",
        quando: "Di giorno; dall'esterno si vede a qualsiasi ora.",
        tempo: "30 minuti",
        lat: 68.2157,
        lng: 14.4832
      },
      {
        nome: "Lofoten Krigsminnemuseum",
        testo: "Un museo privato sulla Seconda guerra mondiale nel nord della Norvegia, fitto di uniformi, oggetti e documenti, compresi quelli del raid britannico sulle Lofoten del 1941. Piccolo e affollato di pezzi, piace a chi ama la storia.",
        come: "A piedi dal porto, in centro.",
        quando: "In una giornata di pioggia, o dopo cena: è aperto anche la sera.",
        tempo: "1 ora",
        costo: "150 NOK adulti, 50 NOK bambini, circa 13 €",
        orari: "lunedì-venerdì 11-16, sabato 11-15, domenica 12-15; tutti i giorni anche 18.30-22.15",
        lat: 68.23116,
        lng: 14.56482,
        url: "https://lofotenkrigmus.no"
      },
      {
        nome: "Magic Ice Lofoten",
        testo: "Una sala di sculture di ghiaccio sul porto, con un bar dove si beve in un bicchiere di ghiaccio. È un'attrazione turistica, ma con la pioggia è una delle poche cose da fare al chiuso a Svolvær.",
        come: "A piedi dal centro; poncho e guanti vengono forniti all'ingresso.",
        quando: "Sera o giornata di maltempo.",
        tempo: "45 minuti",
        costo: "325 NOK con drink di benvenuto, circa 28 €",
        orari: "dal 1° giugno al 1° settembre tutti i giorni 12-22; d'inverno 14-22, dal 18 settembre dalle 18",
        lat: 68.22953,
        lng: 14.56676,
        url: "https://www.magicice.no/listings/svolvaer-lofoten/"
      },
      {
        nome: "Svinøya",
        testo: "L'isolotto collegato al centro da un ponte, dove è nata Svolvær: case rosse dei pescatori, rastrelliere del merluzzo e rorbuer storici oggi affittati ai viaggiatori. È l'angolo più fotogenico del paese.",
        come: "A piedi dal centro, una decina di minuti attraverso il ponte.",
        quando: "Sera, con la luce bassa sul porto.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        lat: 68.23396,
        lng: 14.57969
      },
      {
        nome: "Fløya e Djevelporten",
        testo: "La montagna alle spalle di Svolvær, la stessa della Svolværgeita. Il sentiero passa sotto Djevelporten, la «porta del diavolo», un masso incastrato tra due pareti di roccia, e continua fino in cima a Fløya con la vista sul porto e sulle isole.",
        come: "Si parte dal quartiere residenziale a nord del centro; sentiero ripido, con tratti a gradini e roccia.",
        quando: "Giornata senza nuvole, mai con la roccia bagnata.",
        tempo: "mezza giornata",
        costo: "gratuito",
        lat: 68.25084,
        lng: 14.59798,
        consiglio: "Chi non vuole arrivare in vetta può fermarsi a Djevelporten: la vista sul porto è già ottima."
      }
    ],
    sapori: [
      {
        nome: "Stoccafisso (tørrfisk)",
        testo: "Merluzzo essiccato all'aria sui tradizionali stendi di legno; lo si mangia in zuppa o con patate."
      },
      {
        nome: "Skrei",
        testo: "Merluzzo artico della stagione invernale, da gennaio ad aprile, nei ristoranti locali."
      },
      {
        nome: "Paleo Arctic",
        testo: "Il ristorante dove ho cenato meglio in tutto il viaggio: da prenotare per tempo."
      }
    ],
    attenzioni: [
      "In Norvegia le strade delle Lofoten sono strette e con molti ponti: attenzione agli autobus e ai camper.",
      "Prenotare il Trollfjord e le cene con anticipo in estate.",
      "Per l'accesso alla natura vale il diritto di libero accesso, ma niente campeggio vicino a case e bivacchi nei parcheggi dei villaggi."
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: RIB al Trollfjord (2 ore, da prenotare)",
          "Pranzo in centro e giro di Svinøya e del porto",
          "Pomeriggio a Kabelvåg: Lofotakvariet, Lofotmuseet e Vågan kirke",
          "Sera: cena (Paleo Arctic va prenotato) e Krigsminnemuseum o Magic Ice"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Henningsvær (27 minuti d'auto), campo da calcio e canale",
          "Pranzo sul canale e pomeriggio sul Festvågtind",
          "Rientro a Svolvær per cena"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Fløya e Djevelporten la mattina",
          "Pomeriggio al Lofotr Viking Museum di Borg (circa 1 ora d'auto), oppure partenza verso Reine"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro e porto",
        perChi: "chi vuole ristoranti, negozi e partenze delle escursioni a piedi",
        testo: "Hotel sul lungomare e appartamenti con vista sul porto, a pochi passi dai RIB del Trollfjord e dai locali.",
        fascia: "150-300 €"
      },
      {
        nome: "Svinøya",
        perChi: "chi vuole dormire in un rorbu storico",
        testo: "Case dei pescatori ristrutturate con cucina, sull'isolotto collegato al centro da un ponte; tranquillo ma a dieci minuti a piedi da tutto.",
        fascia: "170-300 €"
      },
      {
        nome: "Kabelvåg",
        perChi: "chi preferisce un paese più quieto o cerca un ostello",
        testo: "A 5 km da Svolvær, con i musei di Storvågan, la grande chiesa di legno e un ostello estivo con sauna.",
        fascia: "100-200 €"
      },
      {
        nome: "Campeggi e cabine",
        perChi: "chi viaggia in tenda, camper o con budget stretto",
        testo: "Il Lofoten Feriesenter, poco fuori Svolvær, ha piazzole e cabine semplici.",
        fascia: "da circa 200 NOK a persona (circa 17 €)"
      }
    ],
    gite: [
      {
        nome: "Henningsvær",
        distanza: "23 km, circa 30 minuti in auto",
        come: "In auto lungo la E10 e poi la strada per Henningsvær, che passa su due ponti.",
        testo: "Il villaggio dei pescatori con il campo da calcio sullo scoglio, il canale e il sentiero del Festvågtind."
      },
      {
        nome: "Lofotr Viking Museum a Borg",
        distanza: "55 km, circa 1 ora in auto",
        come: "In auto verso ovest sulla E10.",
        testo: "La casa lunga di un capo vichingo ricostruita a grandezza naturale, con navi e attività all'aperto in estate."
      },
      {
        nome: "Reine e Hamnøy",
        distanza: "121 km, circa 2 ore e 10 in auto",
        come: "In auto sulla E10 fino all'estremo ovest dell'arcipelago.",
        testo: "La baia più fotografata delle Lofoten e il Reinebringen. In giornata è una corsa: meglio spostare la base per una o due notti."
      }
    ],
    faq: [
      {
        domanda: "Quante notti servono a Svolvær?",
        risposta: "Due o tre: una giornata per il Trollfjord e Kabelvåg, una per Henningsvær e il Festvågtind, la terza per un sentiero o per il Lofotr Viking Museum."
      },
      {
        domanda: "Meglio dormire a Svolvær o a Reine?",
        risposta: "Conviene dividere il soggiorno: Svolvær per le isole a est, Reine o Flakstad per quelle a ovest. Sono a circa due ore d'auto, troppe da fare avanti e indietro ogni giorno."
      },
      {
        domanda: "Bisogna prenotare il Trollfjord?",
        risposta: "D'estate sì, con qualche giorno di anticipo: i RIB hanno pochi posti e si riempiono. Il giro dura circa due ore e le tute termiche sono fornite."
      },
      {
        domanda: "Si può visitare Svolvær senza auto?",
        risposta: "Il centro, Svinøya e le escursioni in barca sì, perché partono dal porto. Per Kabelvåg, Henningsvær e il resto dell'arcipelago l'auto è quasi indispensabile."
      },
      {
        domanda: "Cosa fare a Svolvær quando piove?",
        risposta: "I musei di Kabelvåg (acquario, Lofotmuseet, Galleri Espolin), il Krigsminnemuseum, aperto anche la sera, e il Magic Ice. Con la pioggia i sentieri di roccia vanno evitati."
      },
      {
        domanda: "Come si arriva a Svolvær da Bodø?",
        risposta: "In auto con il traghetto Bognes-Lødingen, circa cinque ore in tutto, oppure con il traghetto Bodø-Moskenes e poi due ore di strada da Reine."
      }
    ],
    esperienzeSlugs: ['trollfjord-rib'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'La chiesa di Svolvær con le case rosse del porto sullo sfondo di un cielo tempestoso, Lofoten',
    immagine: '/images/norvegia/svolvaer-stock.jpg',
  },
  {
    slug: 'henningsvaer',
    paeseSlug: 'norvegia',
    ordine: 4,
    nome: 'Henningsvær',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: 'mezza giornata, in gita da Svolvær (circa 30 minuti d\'auto)',
    visitataPersonalmente: true,
    introduzione: 'La "piccola Venezia" delle Lofoten: un villaggio di pescatori con il campo da calcio più fotografato di Norvegia e un\'atmosfera bohémien tra bakery, artigianato e boutique vintage.',
    percheAndarci: 'Uno dei villaggi più fotogenici dell\'arcipelago, con un ottimo pranzo sul canale e il punto di partenza per il Festvågtind trail.',
    cosaVedere: ['Il celebre campo da calcio, ottimo per foto/drone', 'Il canale del villaggio', 'Boutique vintage e artigianato locale'],
    cosaFare: [
      'Pranzo da Fiskekrogen, sul canale del villaggio: l\'effetto "piccola Venezia" c\'è, meglio prenotare e chiedere un tavolo vicino alla finestra',
      'Giro del villaggio, piccolo ma vivace',
      'Festvågtind trail nel pomeriggio (vedi la scheda esperienza dedicata)',
    ],
    doveDormire: 'Non ho pernottato a Henningsvær: si dorme a Svolvær, a circa 30 minuti d\'auto.',
    doveMangiare: 'Fiskekrogen, sul canale: cibo ottimo, ma meglio prenotare in anticipo, soprattutto per un tavolo vicino alla finestra.',
    comeArrivare: "30 minuti d'auto da Svolvær. Sono 23 km: si segue la E10 verso ovest e poi la strada 816, che entra nel villaggio su due ponti. Si parcheggia a pagamento all'ingresso del paese e da lì si gira tutto a piedi. Dal Lofotr Viking Museum di Borg e dalla parte ovest delle Lofoten si arriva in circa 50 minuti (47 km).",
    comeSpostarsi: 'A piedi, il villaggio è piccolo.',
    periodoMigliore: 'ci sono stato in estate; per gli altri mesi non ho un riferimento diretto',
    costi: "Non mi sono segnato i costi di questa tappa. Il villaggio si gira gratis; si paga il parcheggio all'ingresso. Indicativamente, a persona al giorno: 80-120 € con spesa al supermercato e notte in campeggio; 180-260 € con una notte in rorbu in due e un pranzo sul canale; oltre 350 € con alloggi curati ed escursioni guidate.",
    erroriDaEvitare: ['Non prenotare Fiskekrogen: nelle ore di punta il ristorante si riempie in fretta'],
    miaEsperienza:
      'Henningsvær è stata una delle sorprese del viaggio: il pranzo sul canale, il campo da calcio e, nel pomeriggio, il Festvågtind, un trekking più selvaggio e meno affollato del Reinebringen.',
    luoghi: [
      {
        nome: "Campo da calcio di Henningsvær",
        testo: "Un campo a erba sintetica costruito su una piccola isola di roccia, circondato dal mare. Dall'alto con il drone o dal ponte di accesso è una delle foto più note delle Lofoten.",
        come: "Si arriva in auto da Svolvær e si parcheggia nel villaggio.",
        quando: "Mattina presto o sera, con luce morbida.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 68.1525,
        lng: 14.19723,
        consiglio: "Non entrare in campo durante le partite o gli allenamenti."
      },
      {
        nome: "Canale e porto",
        testo: "Il villaggio si sviluppa su piccole isole unite da ponti, con case di legno colorate e vecchi magazzini del pesce. L'atmosfera da piccola Venezia c'è davvero sul canale.",
        come: "A piedi dal parcheggio.",
        quando: "Mattina, prima dei gruppi.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        lat: 68.1529,
        lng: 14.2008,
        consiglio: "Pranzo da Fiskekrogen sul canale: prenotare e chiedere un tavolo vicino alla finestra."
      },
      {
        nome: "Festvågtind",
        testo: "Una cima sopra il paese, con vista sul mare aperto e sulle isole. Il sentiero è più selvaggio e meno affollato del Reinebringen.",
        come: "Il punto di partenza è vicino al paese; sentiero con tratti ripidi.",
        quando: "Pomeriggio con cielo limpido.",
        tempo: "3-4 ore",
        costo: "ingresso libero",
        lat: 68.17806,
        lng: 14.22527,
        consiglio: "È stata una delle sorprese del viaggio: meno turisti, più silenzio."
      },
      {
        nome: "KaviarFactory",
        testo: "Una ex fabbrica di caviale sul porto trasformata in sala per l'arte contemporanea, con mostre temporanee di artisti internazionali. Gli spazi industriali bianchi, con le finestre sul mare, valgono la visita quanto le opere.",
        come: "A piedi nel villaggio, sul lato del porto.",
        quando: "Di giorno, soprattutto in estate.",
        tempo: "45 minuti",
        lat: 68.15528,
        lng: 14.20129
      },
      {
        nome: "Henningsvær Lysstøperi & Café",
        testo: "Un laboratorio di candele fatte a mano con un piccolo caffè: si vedono colare le candele e ci si scalda con un dolce tra un giro e l'altro del villaggio.",
        come: "A piedi, nella parte centrale del villaggio.",
        quando: "Pausa a metà giro, con il freddo o la pioggia.",
        tempo: "30 minuti",
        lat: 68.15446,
        lng: 14.20207
      },
      {
        nome: "Ponti di Henningsvær",
        testo: "Due ponti ad arco, aperti nel 1983, uniscono il villaggio all'isola di Austvågøy: il più lungo misura 258 metri. Prima c'era solo un traghetto da Festvåg, e arrivarci passando sopra il mare è già parte della visita.",
        come: "Sulla strada 816, unica via d'accesso in auto al villaggio.",
        quando: "Arrivando, con la luce della sera.",
        tempo: "15 minuti",
        costo: "gratuito",
        lat: 68.15972,
        lng: 14.21472
      },
      {
        nome: "Chiesa di Henningsvær",
        testo: "Una chiesa di legno del 1974, con 250 posti, sull'isolotto di Heimøya. Da qui si vede il villaggio dall'altro lato del porto.",
        come: "A piedi dal centro attraverso il porticciolo.",
        quando: "Di giorno.",
        tempo: "20 minuti",
        lat: 68.1518,
        lng: 14.1991
      },
      {
        nome: "Spiaggia di Rørvik (Rørvikstranda)",
        testo: "Una spiaggia di sabbia chiara e acqua verde-azzurra sotto le montagne, lungo la E10 tra Kabelvåg e Henningsvær. Accanto c'è un campeggio, ed è la sosta più comoda del tragitto.",
        come: "In auto da Svolvær lungo la E10 verso ovest.",
        quando: "Giornata di sole, anche solo per una passeggiata sulla sabbia.",
        tempo: "30 minuti",
        costo: "gratuito",
        lat: 68.20399,
        lng: 14.23275
      }
    ],
    sapori: [
      {
        nome: "Fiskekrogen",
        testo: "Ristorante sul canale con pesce fresco della zona: ottimo, da prenotare."
      },
      {
        nome: "Merluzzo al forno",
        testo: "Piatto semplice con patate e burro, cucina tradizionale."
      }
    ],
    attenzioni: [
      "Il parcheggio nel villaggio è piccolo: arrivare presto.",
      "Per il sentiero Festvågtind servono scarpe da trekking: dopo la pioggia è scivoloso."
    ],
    programmi: [
      {
        titolo: "Mezza giornata",
        tappe: [
          "Arrivo da Svolvær passando sui ponti",
          "Giro del canale e del porto",
          "Pranzo sul canale (Fiskekrogen va prenotato)",
          "Campo da calcio e rientro"
        ]
      },
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: sosta alla spiaggia di Rørvik lungo la strada",
          "Canale, KaviarFactory e un caffè al Lysstøperi",
          "Pranzo sul canale e campo da calcio",
          "Pomeriggio: Festvågtind (circa 3 ore)"
        ]
      },
      {
        titolo: "2 giorni con notte nel villaggio",
        tappe: [
          "Giorno 1 come sopra, con cena e sera nel villaggio senza gruppi",
          "Giorno 2: chiesa di Heimøya e porto al mattino presto",
          "Partenza verso ovest: Lofotr Viking Museum a Borg (50 minuti)"
        ]
      }
    ],
    zone: [
      {
        nome: "Henningsvær",
        perChi: "chi vuole il villaggio la sera, quando i gruppi sono partiti",
        testo: "Rorbuer, piccoli hotel sulle banchine e guesthouse: pochi posti, da prenotare presto in estate.",
        fascia: "170-300 €"
      },
      {
        nome: "Svolvær",
        perChi: "chi vuole più scelta e le partenze per il Trollfjord",
        testo: "A 30 minuti d'auto, con hotel sul porto, appartamenti e i ristoranti migliori della zona.",
        fascia: "150-300 €"
      },
      {
        nome: "Kabelvåg",
        perChi: "chi cerca prezzi un po' più bassi a metà strada",
        testo: "Paese tranquillo a 20 minuti, con musei, un ostello estivo e rorbuer.",
        fascia: "100-200 €"
      }
    ],
    gite: [
      {
        nome: "Svolvær",
        distanza: "23 km, circa 30 minuti in auto",
        come: "In auto sulla strada 816 e poi la E10 verso est.",
        testo: "Il porto principale delle Lofoten, con il Trollfjord in RIB, Svinøya e la montagna della Svolværgeita."
      },
      {
        nome: "Kabelvåg e i musei di Storvågan",
        distanza: "18 km, circa 20 minuti in auto",
        come: "In auto verso Svolvær; i musei sono poco prima del paese.",
        testo: "Acquario, Lofotmuseet e Galleri Espolin con un unico biglietto, più la grande chiesa di legno."
      },
      {
        nome: "Lofotr Viking Museum a Borg",
        distanza: "47 km, circa 50 minuti in auto",
        come: "In auto lungo la E10 verso ovest.",
        testo: "La casa lunga vichinga ricostruita, comoda da abbinare se si prosegue verso Reine."
      }
    ],
    faq: [
      {
        domanda: "Quanto tempo serve a Henningsvær?",
        risposta: "Mezza giornata per il villaggio, il pranzo e il campo da calcio. Con il Festvågtind diventa una giornata intera."
      },
      {
        domanda: "Conviene dormire a Henningsvær?",
        risposta: "Sì, per vedere il villaggio la sera senza la folla del giorno, ma i posti sono pochi e cari. Altrimenti si dorme a Svolvær, a mezz'ora d'auto."
      },
      {
        domanda: "Dove si parcheggia a Henningsvær?",
        risposta: "Nel parcheggio a pagamento all'ingresso del paese. Le strade interne sono strette e il villaggio si gira a piedi."
      },
      {
        domanda: "Si può entrare nel campo da calcio?",
        risposta: "È un campo vero, usato dalla squadra locale: si guarda dal bordo e si evita di entrare durante partite e allenamenti. La foto famosa si fa con il drone."
      },
      {
        domanda: "Il Festvågtind è difficile?",
        risposta: "Sono 3 km con 500 metri di dislivello, più tecnici del Reinebringen tra roccia e sabbia. In circa 3 ore si fanno salita e discesa; serve una suola che tenga sulla roccia."
      },
      {
        domanda: "Henningsvær o Reine?",
        risposta: "Sono due cose diverse: Henningsvær è un villaggio da girare a piedi in mezza giornata, Reine è la base per i trekking e le spiagge dell'ovest. In un viaggio di una settimana si fanno entrambi."
      }
    ],
    esperienzeSlugs: ['festvagtind-trail'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: "Henningsvær dal drone: il campo da calcio sullo scoglio, le rastrelliere del merluzzo e l'arcipelago di isolotti verdi",
    immagine: '/images/norvegia/henningsvaer-stadio-riccardo.jpg',
  },
  {
    slug: 'reine',
    paeseSlug: 'norvegia',
    ordine: 5,
    nome: 'Reine',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '1-2 giorni, base per Reinebringen e la gita alla spiaggia di Bunes',
    visitataPersonalmente: true,
    introduzione: 'Il villaggio simbolo delle Lofoten, base per il trekking più iconico dell\'arcipelago e punto di partenza del traghetto verso una delle spiagge più belle della zona.',
    percheAndarci: 'Il Reinebringen è il trekking che tutti associano alle Lofoten, e da qui si parte anche per la spiaggia di Bunes: per me sono state due delle esperienze più forti di tutto il viaggio.',
    cosaVedere: ['Il villaggio di Reine', 'Il Reinebringen dall\'alto'],
    cosaFare: [
      'Trekking al Reinebringen (vedi la scheda esperienza dedicata)',
      'Traghetto ed escursione alla spiaggia di Bunes (vedi la scheda esperienza dedicata)',
      'Tappa al Viking Museum di Borg lungo il tragitto da Svolvær (vedi la scheda esperienza dedicata)',
    ],
    doveDormire: 'Non ho pernottato a Reine: si dorme a Nesland/Flakstad, a pochi minuti d\'auto.',
    doveMangiare: 'A Reine non mi sono segnato ristoranti: la Coop Prix del paese è comoda per organizzare un pranzo al sacco prima delle escursioni.',
    comeArrivare: "Da Svolvær via Leknes (con tappa al Viking Museum di Borg), circa 55 minuti d'auto da Svolvær fino a Borg, poi altri 20-30 minuti fino a Reine. Da Bodø c'è il traghetto per Moskenes, a pochi minuti da Reine: circa 3 ore e un quarto di navigazione, l'auto paga intorno ai 600 NOK più la prenotazione del posto (d'estate da fare sul sito di Torghatten Nord), i passeggeri viaggiano gratis; al porto conviene arrivare 40 minuti prima. Da Svolvær sono 121 km lungo la E10, circa 2 ore e 10 senza soste.",
    comeSpostarsi: 'Parcheggio a pagamento in paese (200 NOK/3h).',
    periodoMigliore: 'Il Reinebringen vale la pena solo con cielo sereno: controllare le previsioni prima di programmare la giornata.',
    costi: "Parcheggio 200 NOK/3h. Le scale del Reinebringen sono gratuite. Riferimenti 2026: Lofotr 210 NOK fuori stagione, museo di Å 125 NOK. Indicativamente, a persona al giorno: 80-120 € in campeggio o cabina con spesa al supermercato; 200-280 € con un rorbu in due e una cena fuori; oltre 350 € con rorbu curati e ristorante ogni sera.",
    erroriDaEvitare: [
      'Il Reinebringen richiede un minimo di allenamento per il dislivello; se il cielo è coperto, meglio rimandarlo, perché la vista è tutto',
      'Per il traghetto verso Vindstad/Bunes, arrivare con almeno 30 minuti di anticipo anche con posti riservati',
    ],
    miaEsperienza:
      'Reine è stata il punto più intenso del viaggio: il Reinebringen (1h50 il mio tempo totale, tra salita, sosta e discesa) e il giorno dopo la spiaggia di Bunes, raggiungibile solo in traghetto. Di tutte le tappe, sono i due ricordi che mi sono portato a casa.',
    luoghi: [
      {
        nome: "Reinebringen",
        testo: "La salita più famosa delle Lofoten: una cima di 448 metri raggiunta da una scalinata di pietra costruita tra il 2016 e il 2019. Dalla cima si vede Reine con i fiordi e le montagne intorno.",
        come: "Parcheggio nel villaggio, sentiero ben segnato; salita ripida ma breve.",
        quando: "Con cielo sereno e senza pioggia, per evitare gradini scivolosi. Mattina presto o sera.",
        tempo: "circa 2 ore tra salita, sosta e discesa",
        costo: "scale gratuite; parcheggio a Reine 200 NOK per 3 ore, circa 17 €",
        lat: 67.9261,
        lng: 13.07532,
        consiglio: "Controllare le previsioni prima: con nuvole non si vede nulla dalla cima."
      },
      {
        nome: "Reine e Hamnøy",
        testo: "Villaggio di pescatori con rorbuer rossi su rocce a picco sul mare, tra le viste più fotografate della Norvegia. A pochi minuti di strada c'è Hamnøy, con le stesse case e il ponte.",
        come: "A piedi nel villaggio; Hamnøy in auto, poco lontano.",
        quando: "Mattina, con luce morbida.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        lat: 67.9324,
        lng: 13.0887,
        consiglio: "Il supermercato Coop Prix di Reine è comodo per preparare un pranzo al sacco."
      },
      {
        nome: "Spiaggia di Bunes",
        testo: "Una spiaggia di sabbia bianca raggiungibile solo in traghetto da Reine, con una camminata a piedi dall'approdo. È uno dei luoghi più belli e meno accessibili dell'arcipelago.",
        come: "Traghetto stagionale da Reine, poi sentiero a piedi.",
        quando: "Estate, con l'orario del traghetto verificato in anticipo.",
        tempo: "mezza giornata",
        lat: 67.97767,
        lng: 12.96349,
        consiglio: "Insieme al Reinebringen, è il ricordo che mi sono portato a casa."
      },
      {
        nome: "Lofotr Viking Museum a Borg",
        testo: "La ricostruzione a grandezza naturale della casa lunga di un capo vichingo, la più lunga casa lunga ricostruita al mondo, con navi, fucina e rievocazioni. Aperto dal 1° maggio al 15 settembre; fuori stagione solo alcuni giorni (novembre-dicembre 2026: mercoledì e sabato 11-17). Si trova sulla strada tra Svolvær e Reine.",
        come: "In auto da Svolvær; sosta ideale lungo il trasferimento.",
        quando: "Giorno pieno.",
        tempo: "2 ore",
        costo: "210 NOK adulti, 160 NOK bambini 6-15 anni da metà settembre a fine dicembre 2026, circa 18 €; intorno ai 250 NOK in alta stagione",
        orari: "tutti i giorni dal 1° maggio al 15 settembre; novembre-dicembre 2026 mercoledì e sabato 11-17, chiuso il 26 dicembre",
        lat: 68.24399,
        lng: 13.75686,
        url: "https://lofotr.no",
        consiglio: "Una sosta utile se piove."
      },
      {
        nome: "Sakrisøy",
        testo: "Un isolotto tra Reine e Hamnøy con i rorbuer dipinti di giallo ocra invece che di rosso, uno degli scorci più fotografati della E10. Sulla banchina c'è il chiosco di pesce Anita's Seafood, con panini, zuppe e sushi vista fiordo.",
        come: "In auto, 5 minuti da Reine sulla E10; si ordina al bancone.",
        quando: "A pranzo, d'estate, quando il chiosco è aperto.",
        tempo: "1 ora con il pranzo",
        lat: 67.94109,
        lng: 13.11064,
        url: "https://sakrisoy.no"
      },
      {
        nome: "Kvalvika e Ryten",
        testo: "Kvalvika è una spiaggia chiusa tra due pareti di roccia sul mare aperto, raggiungibile solo a piedi. Il sentiero parte da Fredvang, scavalca un passo e scende sulla sabbia; chi ha ancora gambe sale sul Ryten, la cima che guarda la baia dall'alto.",
        come: "In auto da Reine fino a Fredvang (25 km, circa 30 minuti), poi a piedi su sentiero con fango e roccia.",
        quando: "Giornata asciutta e serena; d'estate anche la sera, con il sole di mezzanotte.",
        tempo: "mezza giornata",
        costo: "sentiero gratuito",
        lat: 68.07703,
        lng: 13.09581,
        consiglio: "Scarpe da trekking vere: dopo la pioggia i tratti di torba diventano molto scivolosi."
      },
      {
        nome: "Spiaggia di Ramberg",
        testo: "Una lunga spiaggia di sabbia bianca lungo la E10, con le montagne alle spalle e l'acqua turchese con il sole. Accanto c'è il Ramberg Resort, comodo per cenare prima di una passeggiata sulla sabbia.",
        come: "In auto, circa 30 minuti da Reine (26 km) sulla E10.",
        quando: "Sera: d'estate la luce dura fino a notte.",
        tempo: "30-60 minuti",
        costo: "ingresso libero",
        lat: 68.0962,
        lng: 13.23793,
        consiglio: "Il supermercato di Ramberg è più fornito ed economico della Coop di Reine, ma vende solo birra: niente vino né superalcolici."
      },
      {
        nome: "Å e il Museo dei pescatori",
        testo: "Å, in fondo alla E10, è il paese dal nome più corto del mondo e un villaggio di pescatori conservato. Il Norsk Fiskeværsmuseum occupa le vecchie case e i magazzini e racconta come vivevano le comunità che campavano di pesca alle Lofoten.",
        come: "In auto, circa 15 minuti da Reine (9 km); parcheggio all'ingresso del villaggio.",
        quando: "Tarda mattinata, con la visita guidata; anche con la pioggia.",
        tempo: "1-1,5 ore",
        costo: "125 NOK adulti, 95 NOK 6-17 anni, circa 11 € (autunno 2026)",
        orari: "1° ottobre-6 dicembre 2026 tutti i giorni 9-15; chiuso dal 7 dicembre al 2 gennaio",
        lat: 67.88137,
        lng: 12.98206,
        url: "https://www.museumnord.no/en/our-venues/norsk-fiskevaersmuseum/",
        consiglio: "La panetteria storica del paese ha pochi posti a sedere: meglio passarci presto."
      }
    ],
    sapori: [
      {
        nome: "Tørrfisk",
        testo: "Merluzzo essiccato, simbolo delle Lofoten: si può comprare in confezioni nei negozi."
      },
      {
        nome: "Pranzo al sacco",
        testo: "La Coop Prix di Reine è la soluzione più pratica prima delle escursioni."
      }
    ],
    attenzioni: [
      "Reinebringen: i gradini sono molti e il sentiero è affollato; non scendere con fretta, soprattutto con la pioggia.",
      "Il traghetto per Bunes ha orari ridotti e può essere cancellato: verificare il giorno prima.",
      "Parcheggio e traffico nel villaggio sono limitati: non lasciare l'auto lungo la strada."
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: villaggio di Reine e ponte di Hamnøy",
          "Reinebringen (circa 2 ore tra salita e discesa)",
          "Pranzo a Sakrisøy",
          "Pomeriggio ad Å e al Museo dei pescatori",
          "Sera: cena a Ramberg e passeggiata sulla spiaggia"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: traghetto del mattino per Vindstad (40 minuti)",
          "Sentiero fino alla spiaggia di Bunes e pranzo al sacco",
          "Traghetto del pomeriggio e spesa a Ramberg"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Kvalvika da Fredvang, con il Ryten per chi ha gambe",
          "Rientro verso est con sosta al Lofotr Viking Museum di Borg"
        ]
      }
    ],
    zone: [
      {
        nome: "Reine e Hamnøy",
        perChi: "chi vuole svegliarsi davanti alla baia",
        testo: "Rorbuer rossi sulle rocce, alcuni con vista sul Reinebringen; i più richiesti, spesso con minimo di notti in estate.",
        fascia: "170-350 €"
      },
      {
        nome: "Sakrisøy",
        perChi: "chi cerca un rorbu tra Reine e Hamnøy",
        testo: "Poche case dei pescatori gialle sull'isolotto, con il chiosco di pesce sotto casa e le stesse viste di Reine.",
        fascia: "170-300 €"
      },
      {
        nome: "Ramberg e Flakstad",
        perChi: "chi vuole spendere meno ed è disposto a guidare mezz'ora",
        testo: "Cabine, guesthouse e campeggi vicino alla spiaggia di Ramberg, con il supermercato più fornito della zona.",
        fascia: "80-200 €"
      },
      {
        nome: "Tenda a Bunes",
        perChi: "chi viaggia in tenda e vuole la spiaggia per sé",
        testo: "Sulla spiaggia di Bunes si può campeggiare, senza fuochi sulla sabbia e riportando indietro i rifiuti; a Vindstad non ci sono negozi.",
        fascia: "gratuito con tenda propria, traghetto a parte"
      }
    ],
    gite: [
      {
        nome: "Å",
        distanza: "9 km, circa 15 minuti in auto",
        come: "In auto sulla E10 fino al capolinea della strada.",
        testo: "Il villaggio dei pescatori in fondo alle Lofoten, con il museo, la panetteria storica e le rastrelliere dello stoccafisso."
      },
      {
        nome: "Nusfjord",
        distanza: "41 km, circa 45 minuti in auto",
        come: "In auto sulla E10 verso est e poi la strada laterale per Nusfjord.",
        testo: "Uno dei villaggi di pescatori meglio conservati della Norvegia; d'estate si paga un biglietto per entrare."
      },
      {
        nome: "Lofotr Viking Museum a Borg",
        distanza: "66 km, circa 1 ora e 10 in auto",
        come: "In auto sulla E10 verso est.",
        testo: "La casa lunga vichinga ricostruita a grandezza naturale: una buona tappa con la pioggia."
      },
      {
        nome: "Bodø",
        distanza: "circa 3 ore e un quarto di traghetto da Moskenes",
        come: "Traghetto Moskenes-Bodø di Torghatten Nord; d'estate il posto auto va prenotato.",
        testo: "La città sulla terraferma, con la spiaggia di Mjelle e il traghetto per Kjerringøy; è anche la via più breve per lasciare le Lofoten."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Reine?",
        risposta: "Due: uno per il Reinebringen con Hamnøy e Å, uno per la spiaggia di Bunes in traghetto. Con un terzo giorno si aggiunge Kvalvika."
      },
      {
        domanda: "Il Reinebringen è difficile?",
        risposta: "Tecnicamente no, sono 1.978 scalini di pietra, ma salgono 448 metri in 1,1 km e il dislivello si sente. Il tempo medio è tra due e quattro ore andata e ritorno."
      },
      {
        domanda: "Come si arriva alla spiaggia di Bunes?",
        risposta: "Con il traghetto da Reine a Vindstad, circa 40 minuti, con poche corse al giorno: il posto conviene prenotarlo. Da Vindstad si cammina 45-50 minuti su un sentiero facile."
      },
      {
        domanda: "Dove si parcheggia a Reine?",
        risposta: "Nel parcheggio a pagamento del paese, 200 NOK per tre ore. L'auto non va lasciata lungo la strada: gli spazi sono pochi e il traffico d'estate è intenso."
      },
      {
        domanda: "Meglio dormire a Reine o a Svolvær?",
        risposta: "Per le isole dell'ovest, Reine o Flakstad; per il Trollfjord e Henningsvær, Svolvær. Sono a due ore d'auto, quindi conviene dividere il soggiorno."
      },
      {
        domanda: "Cosa fare a Reine se piove?",
        risposta: "Il Museo dei pescatori di Å e il Lofotr Viking Museum, al chiuso. Con la pioggia le scale del Reinebringen e la roccia in cima scivolano: meglio spostare il trekking."
      }
    ],
    esperienzeSlugs: ['reinebringen', 'spiaggia-di-bunes', 'viking-museum-borg'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Vista aerea dal Reinebringen sul villaggio di Reine e i fiordi circostanti',
    immagine: '/images/norvegia/reinebringen-stock.jpg',
  },
  {
    slug: 'nesland-flakstad',
    paeseSlug: 'norvegia',
    ordine: 6,
    nome: 'Nesland / Flakstad',
    tipologia: ['natura'],
    giorniConsigliati: '2-3 notti, seconda base del viaggio',
    visitataPersonalmente: true,
    introduzione: 'La base più isolata e silenziosa del viaggio: un rorbu affacciato direttamente sul fiordo, punto di partenza per la passeggiata panoramica verso Nusfjord.',
    percheAndarci: 'Per staccare dal ritmo dei trekking più famosi con una base tranquilla, e per la passeggiata verso Nusfjord, meno battuta ma altrettanto bella.',
    cosaVedere: ['Il fiordo davanti al rorbu', 'Il villaggio di Nusfjord, in fondo alla passeggiata panoramica'],
    cosaFare: [
      'Passeggiata panoramica Nesland-Nusfjord (vedi la scheda esperienza dedicata)',
      'Barbecue serale nella rorbu con la spesa fatta a Ramberg',
    ],
    doveDormire:
      'Ho dormito in un rorbu privato affacciato sul fiordo, Casa Flakstad, la sistemazione più isolata e silenziosa del viaggio. È una struttura piccola, con troppe poche recensioni online per citarle: un rorbu semplice ed essenziale, poche luci, tanto silenzio, il fiordo a pochi passi.\n\nAlternative a Nesland/Flakstad. Economiche: Ramberg Gjestegård (cabine semplici, 850-1050 NOK a notte, sconto in bassa stagione), Lofoten Beach Camp (campeggio a conduzione familiare a Ramberg, sauna e area pic-nic) · fascia media (qui rientra il rorbu scelto): Lofoten Nesland Guesthouse (punteggio molto alto nelle recensioni, posizione tranquilla con vista sull\'oceano) · fascia alta senza esagerare: Nusfjord Village & Resort (rorbu storici ristrutturati nel villaggio di Nusfjord, sauna e vasche idromassaggio incluse; caro, ma con recensioni entusiaste).',
    doveMangiare:
      'Cena al Ramberg Resort, buona posizione a due passi dalla spiaggia di Ramberg per una passeggiata digestiva. Il supermercato di Ramberg è più fornito ed economico rispetto alla Coop di Reine ed è il punto di riferimento per organizzare un barbecue serale (salmone, verdure, contorni). Attenzione: vende solo birra, niente vino o superalcolici.',
    comeArrivare: "In auto lungo la E10, la strada che attraversa tutte le Lofoten: da Leknes circa mezz'ora, da Svolvær circa un'ora e mezza, da Å circa 50 minuti. Il porto dei traghetti più vicino è Moskenes, con il traghetto Moskenes-Bodø (circa 3 ore e un quarto; auto fino a 6 metri 605 NOK, circa 53 €; passeggeri gratis). Gli aeroporti più comodi sono Leknes, con voli da Bodø, e Bodø stessa. I bus della E10 fermano a Ramberg ma con poche corse: l'auto resta la scelta più pratica.",
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'ci sono stato in estate; per gli altri mesi non ho un riferimento diretto',
    costi: "Cabine da 850-1050 NOK/notte per le opzioni economiche della zona. Budget giornaliero a persona, indicativo: basso 80-110 € (cabina semplice in due, spesa a Ramberg e barbecue); medio 150-220 € (rorbu o guesthouse in doppia, una cena al ristorante, carburante); alto 300 € e oltre (rorbu ristrutturati a Nusfjord, cene di pesce).",
    erroriDaEvitare: ['Il supermercato di Ramberg non vende vino/superalcolici, solo birra: pianificare la spesa di conseguenza'],
    miaEsperienza:
      'Il rorbu di Nesland è stato il posto più silenzioso di tutto il viaggio: nessuna luce artificiale, il fiordo a pochi passi, e una serata di barbecue tra le più rilassate della settimana.',
    luoghi: [
      {
        costo: "Ingresso libero",
        lat: 68.0042,
        lng: 13.2872,
        nome: "Passeggiata Nesland-Nusfjord",
        testo: "Un sentiero panoramico che segue la costa del fiordo da Nesland fino al villaggio di Nusfjord, con vista sul mare e sulle montagne di Flakstadøya.",
        come: "Dal rorbu a piedi, lungo la costa.",
        quando: "Sera d'estate, con la luce lunga.",
        tempo: "2-3 ore andata e ritorno",
        consiglio: "Il silenzio e le poche luci del posto sono la parte migliore."
      },
      {
        costo: "D'estate si paga un biglietto per entrare nel villaggio",
        lat: 68.0354,
        lng: 13.3477,
        nome: "Nusfjord",
        testo: "Un villaggio di pescatori ben conservato sulla costa sud di Flakstadøya, con rorbuer rossi e un piccolo porto.",
        come: "In auto da Nesland, poco lontano.",
        quando: "Mattina o sera, evitando i gruppi.",
        tempo: "1 ora",
        consiglio: "Passeggiata corta, ma da fare con tempo calmo."
      },
      {
        lat: 68.0899,
        lng: 13.2299,
        nome: "Ramberg e le spiagge di Flakstadøya",
        testo: "Ramberg ha una lunga spiaggia di sabbia chiara, poco più avanti c'è Skagsanden e, sull'isola vicina di Vestvågøy, Haukland: tra le spiagge più belle delle Lofoten. L'acqua è fredda ma il colore è caraibico.",
        come: "In auto da Nesland; Haukland è più lontana, verso Leknes.",
        quando: "Estate, con sole.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Nei supermercati si vende solo birra: vino e superalcolici solo al Vinmonopolet."
      },
      {
        nome: "Skagsanden",
        testo: "Una spiaggia di sabbia chiara accanto alla chiesa di Flakstad, chiusa dalle montagne. D'inverno è uno dei punti più fotografati per l'aurora boreale, d'estate per i tramonti lunghi sull'oceano.",
        come: "In auto lungo la E10, con un piccolo parcheggio sulla strada.",
        quando: "Sera d'estate o notti serene d'inverno.",
        tempo: "30 minuti-1 ora",
        costo: "Ingresso libero",
        lat: 68.1066,
        lng: 13.2951,
      },
      {
        nome: "Chiesa di Flakstad",
        testo: "Una chiesa di legno rossa della fine del Settecento, con il campanile a cipolla, sulla piana tra la strada e il mare. È uno dei pochi edifici antichi rimasti in piedi sull'isola.",
        come: "Sulla E10 tra Ramberg e Skagsanden, con parcheggio davanti.",
        quando: "D'estate, quando l'interno è aperto ai visitatori.",
        tempo: "20 minuti",
        lat: 68.1048,
        lng: 13.3063,
      },
      {
        nome: "Spiaggia di Kvalvika",
        testo: "Una baia selvaggia sulla costa nord, raggiungibile solo a piedi, chiusa tra due pareti di roccia. Il sentiero sale e scende tra torbiera e sassi, poi scende sulla sabbia.",
        come: "Dal parcheggio sulla strada per Fredvang, sentiero di circa 2 km a tratta.",
        quando: "Estate, con tempo asciutto: col bagnato il fango rallenta molto.",
        tempo: "2-3 ore andata e ritorno",
        costo: "Ingresso libero; parcheggio a pagamento",
        lat: 68.0781,
        lng: 13.102,
        consiglio: "Scarpe da trekking e niente fuochi sulla spiaggia; i rifiuti si riportano indietro.",
      },
      {
        nome: "Ryten",
        testo: "La montagna di circa 540 metri sopra Kvalvika, con un terrazzo di roccia a strapiombo sulla spiaggia. È una delle viste più belle delle Lofoten e una salita meno affollata del Reinebringen.",
        come: "Stesso parcheggio di Kvalvika; il sentiero si divide a metà e sale in cresta.",
        quando: "Giornate serene d'estate; con nuvole basse non si vede nulla.",
        tempo: "4-5 ore andata e ritorno",
        costo: "Ingresso libero; parcheggio a pagamento",
        lat: 68.0893,
        lng: 13.0929,
        consiglio: "Si può unire alla spiaggia: salita a Ryten e discesa a Kvalvika.",
      },
      {
        nome: "Ponti di Fredvang",
        testo: "Due ponti ad arco che collegano Flakstadøya con il villaggio di Fredvang, sopra uno stretto di acqua verde. Fermarsi a metà, nei piccoli parcheggi, regala una delle viste più fotografate della zona.",
        come: "In auto, deviazione dalla E10 verso Fredvang.",
        quando: "Con il sole, quando l'acqua è più chiara.",
        tempo: "20 minuti",
        costo: "Ingresso libero",
        lat: 68.0803,
        lng: 13.2003,
      },
      {
        nome: "Glasshytta Vikten",
        testo: "Un laboratorio di vetro soffiato in un edificio di pietra e legno sulla costa nord, affacciato sull'oceano. Si guarda lavorare il vetro e si comprano pezzi fatti sul posto; intorno ci sono una piccola galleria e il caffè estivo.",
        come: "In auto, deviazione dalla E10 verso Vikten, circa 15 minuti da Ramberg.",
        quando: "D'estate; fuori stagione può chiudere prima.",
        tempo: "45 minuti",
        lat: 68.1387,
        lng: 13.3113,
      },
    ],
    sapori: [
      {
        nome: "Barbecue nel rorbu",
        testo: "Spesa al supermercato di Ramberg: salmone, verdure e contorni sono la cena più semplice."
      }
    ],
    attenzioni: [
      "Ramberg: il supermercato vende solo birra, per il vino bisogna andare al Vinmonopolet più vicino.",
      "Il rorbu è isolato: portare spesa sufficiente e torcia."
    ],
    programmi: [
      { titolo: "1 giorno", tappe: ["Mattina a Nusfjord prima dei gruppi", "Chiesa di Flakstad e Skagsanden", "Pranzo e spesa a Ramberg", "Sera: passeggiata Nesland-Nusfjord con la luce lunga"] },
      { titolo: "2 giorni", tappe: ["Giorno 1: come sopra", "Giorno 2: Kvalvika a piedi, o Ryten con il cielo sereno", "Ponti di Fredvang al ritorno", "Sera: barbecue nella rorbu"] },
      { titolo: "3 giorni", tappe: ["Giorni 1-2: come sopra", "Giorno 3: Å, Sakrisøy e Hamnøy verso ovest", "Oppure verso est: Glasshytta Vikten e le spiagge di Vestvågøy"] },
    ],
    zone: [
      { nome: "Nesland e Nusfjord", perChi: "Chi cerca silenzio e vista sul fiordo", testo: "Rorbu e guesthouse sparse sulla costa sud, lontane dalla strada principale. Pochissimi servizi: la spesa si fa a Ramberg." },
      { nome: "Ramberg", perChi: "Chi vuole supermercato e spiaggia a due passi", testo: "Il paese più servito di Flakstadøya, con il supermercato, il Ramberg Resort e cabine semplici sulla spiaggia.", fascia: "75-90 € (cabina semplice, 850-1.050 NOK)" },
      { nome: "Fredvang", perChi: "Chi vuole fare Kvalvika e Ryten", testo: "Un villaggio oltre i ponti, ai piedi dei sentieri per Kvalvika e Ryten. Alloggi pochi, da prenotare presto." },
    ],
    gite: [
      { nome: "Reine e Hamnøy", distanza: "circa 30-40 minuti d'auto", come: "In auto verso ovest sulla E10.", testo: "La baia di Reine, il Reinebringen e le rorbu rosse di Hamnøy: il tratto più famoso delle Lofoten." },
      { nome: "Å", distanza: "circa 50 minuti d'auto", come: "In auto fino alla fine della E10.", testo: "Il Museo dei Pescatori e il panificio storico, con una sosta a Sakrisøy per pranzo." },
      { nome: "Haukland e Uttakleiv", distanza: "circa 40-50 minuti d'auto", come: "In auto verso est, oltre Leknes, sull'isola di Vestvågøy.", testo: "Due spiagge bianche collegate da una strada costiera e da un sentiero: tra le più belle dell'arcipelago." },
      { nome: "Lofotr Viking Museum", distanza: "circa 45 minuti d'auto", come: "In auto verso est, a Borg, oltre Leknes.", testo: "La ricostruzione della grande casa di un capo vichingo, aperta tutti i giorni d'estate; il biglietto è intorno ai 250 NOK in alta stagione." },
    ],
    faq: [
      { domanda: "Conviene dormire a Flakstadøya invece che a Reine?", risposta: "Per chi ha l'auto sì: si è a mezz'ora da Reine, a metà strada tra Å e Leknes, e la sera c'è molto più silenzio. Per chi si muove senza auto Reine è più comoda." },
      { domanda: "Si paga per entrare a Nusfjord?", risposta: "D'estate sì, c'è un biglietto d'ingresso al villaggio. Fuori stagione l'accesso è più libero; il sentiero da Nesland arriva comunque a piedi fino al paese." },
      { domanda: "Quanto è difficile il sentiero per Kvalvika?", risposta: "Non è tecnico, ma sale e scende su sassi e torbiera per circa 2 km a tratta. Con il bagnato diventa fangoso: servono scarpe da trekking." },
      { domanda: "Dove si fa la spesa?", risposta: "Al supermercato di Ramberg, più fornito ed economico della Coop di Reine. Vende solo birra: vino e superalcolici solo al Vinmonopolet." },
      { domanda: "Si vede l'aurora boreale da Flakstad?", risposta: "Sì, da fine agosto ad aprile, con il cielo sereno e il buio. Skagsanden e la spiaggia di Ramberg sono i punti più usati, perché guardano a nord sul mare." },
    ],
    esperienzeSlugs: ['nesland-nusfjord'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Rorbu rosse tradizionali con una montagna avvolta dalla nebbia sullo sfondo, Lofoten',
    immagine: '/images/norvegia/nesland-stock.jpg',
  },
  {
    slug: 'a',
    paeseSlug: 'norvegia',
    ordine: 7,
    nome: 'Å',
    tipologia: ['cultura'],
    giorniConsigliati: 'mezza giornata, in gita da Nesland/Flakstad (circa 50 minuti d\'auto)',
    visitataPersonalmente: true,
    introduzione: 'Il villaggio dal nome più corto del mondo, e forse il più "storico" di tutta la zona: bakery tradizionale e Museo dei Pescatori.',
    percheAndarci: 'Per capire lo stile di vita delle comunità di pescatori delle Lofoten, con una tappa golosa alla bakery del paese.',
    cosaVedere: ['Il villaggio storico', 'La bakery tradizionale'],
    cosaFare: ['Visita guidata al Museo dei Pescatori (vedi la scheda esperienza dedicata)', 'Pranzo lungo la strada a Sakrisøy da Anita\'s Seafood'],
    doveDormire: 'Non ho pernottato ad Å: si dorme a Nesland/Flakstad.',
    doveMangiare:
      'La bakery storica del paese (pochi posti a sedere, ma dolci ottimi). Lungo la strada, a Sakrisøy, Anita\'s Seafood: panini farciti, zuppe, sushi, vista sul fiordo. Si ordina al bancone, niente servizio al tavolo.',
    comeArrivare: "Å è l'ultimo paese della E10, in fondo all'isola di Moskenesøya: da Reine sono circa 10 km, da Nesland/Flakstad circa 50 minuti d'auto, da Svolvær circa due ore. Il porto dei traghetti per Bodø è a Moskenes, 5 km prima del paese: traghetto Moskenes-Bodø (circa 3 ore e un quarto; auto fino a 6 metri 605 NOK, circa 53 €; passeggeri gratis). Il parcheggio è dopo il tunnel, a pochi minuti a piedi dal centro del villaggio. I bus locali arrivano da Reine e Leknes, ma con poche corse.",
    comeSpostarsi: 'A piedi, il villaggio è piccolo.',
    periodoMigliore: 'ci sono stato in estate, sotto la pioggia; per gli altri mesi non ho un riferimento diretto',
    costi: "non mi sono segnato i costi di questa tappa. Riferimenti: Museo dei Pescatori 125 NOK (circa 11 €), parcheggio a Reine 200 NOK per tre ore, traghetto Moskenes-Bodø 605 NOK per l'auto. Budget giornaliero a persona, indicativo: basso 80-110 € (ostello o rorbu condivisa, spesa alla Coop); medio 150-220 € (rorbu in doppia, un museo, un pranzo di pesce); alto 300 € e oltre (rorbu sul mare a Reine o Hamnøy, cene al ristorante).",
    erroriDaEvitare: [],
    miaEsperienza:
      'Å mi ha colpito anche sotto la pioggia: il Museo dei Pescatori, con la visita guidata in inglese, racconta bene una parte di storia locale che altrove nel viaggio si vede solo di sfuggita.',
    luoghi: [
      {
        costo: "Adulti 125 NOK (circa 11 €, autunno 2026)",
        orari: "1 novembre-6 dicembre 2026 tutti i giorni 9-15; chiuso dal 7 dicembre al 2 gennaio; visite guidate quasi tutti i giorni",
        lat: 67.8814,
        lng: 12.9821,
        nome: "Museo dei Pescatori (Norsk Fiskeværsmuseum)",
        testo: "Il museo del villaggio di Å, con case, magazzini e un forno storico, racconta la vita dei pescatori delle Lofoten.",
        come: "In auto da Nesland; orari e modalità di visita sul sito ufficiale.",
        quando: "Mattina.",
        tempo: "1,5-2 ore",
        url: "https://www.museumnord.no",
        consiglio: "Con la pioggia, come quando ci sono stato, è comunque una buona visita al coperto."
      },
      {
        lat: 67.8808,
        lng: 12.9818,
        nome: "Panificio storico di Å",
        testo: "Una panetteria storica, con cannella e dolci fatti sul posto; pochi posti a sedere ma ottimo.",
        come: "A piedi nel villaggio.",
        quando: "Mattina.",
        tempo: "30 minuti",
        consiglio: "Prendere una girella alla cannella: è la cosa tipica."
      },
      {
        lat: 67.9412,
        lng: 13.1111,
        nome: "Sakrisøy e Anita's Seafood",
        testo: "Sul percorso verso Å c'è Sakrisøy, villaggio di casette gialle, e Anita's Seafood, dove si mangiano zuppe, panini e sushi. Si ordina al bancone, senza servizio al tavolo.",
        come: "In auto, lungo la strada verso Å.",
        quando: "Pranzo.",
        tempo: "1 ora",
        consiglio: "Vista sul fiordo dal tavolo esterno."
      },
      {
        nome: "Lofoten Tørrfiskmuseum",
        testo: "Un piccolo museo privato in un vecchio magazzino del pesce, dedicato allo stoccafisso: la pesca del merluzzo d'inverno, l'essiccazione sulle rastrelliere e l'esportazione, soprattutto verso l'Italia. Negli ultimi anni ha avuto aperture irregolari.",
        come: "A piedi all'ingresso del villaggio.",
        quando: "D'estate.",
        tempo: "45 minuti",
        lat: 67.8823,
        lng: 12.9841,
        consiglio: "Se è chiuso, le rastrelliere dello stoccafisso si vedono comunque all'aperto intorno al paese.",
      },
      {
        nome: "Belvedere sul Moskstraumen",
        testo: "Oltre le ultime case di Å un sentiero porta sugli scogli in fondo all'isola, davanti al Moskstraumen, la corrente di marea che ispirò il «Maelström» di Edgar Allan Poe e Jules Verne. Sullo sfondo si vede l'isola di Værøy.",
        come: "A piedi dal centro del villaggio, pochi minuti.",
        quando: "Con il mare calmo e la luce della sera.",
        tempo: "30 minuti",
        costo: "Ingresso libero",
        consiglio: "Gli scogli sono scivolosi col bagnato: restare lontani dal bordo.",
      },
      {
        nome: "Hamnøy",
        testo: "Un villaggio di pescatori su un isolotto, con le rorbu rosse sugli scogli e le montagne di Reine dietro. Dal ponte sulla E10 si scatta la foto più famosa delle Lofoten.",
        come: "In auto sulla E10, circa 20 minuti da Å; piccolo parcheggio prima del ponte.",
        quando: "Mattina presto o sera, quando la luce è radente.",
        tempo: "30 minuti",
        costo: "Ingresso libero",
        lat: 67.9464,
        lng: 13.1376,
        consiglio: "Non fermarsi sul ponte con l'auto: il traffico passa stretto.",
      },
      {
        nome: "Reine",
        testo: "Il villaggio nella baia più famosa delle Lofoten, ai piedi del Reinebringen. Da qui partono anche i traghetti per Vindstad e la spiaggia di Bunes.",
        come: "In auto sulla E10, circa 15 minuti da Å.",
        quando: "Tutto il giorno; il Reinebringen solo con il cielo sereno.",
        tempo: "1 ora per il villaggio, 2-4 ore con il Reinebringen",
        costo: "Parcheggio 200 NOK per tre ore (circa 17 €)",
        lat: 67.9325,
        lng: 13.0888,
      },
      {
        nome: "Moskenes",
        testo: "Il porto dei traghetti per Bodø, a pochi chilometri da Å. Non c'è molto da vedere, ma è il punto d'arrivo e di partenza di chi entra o esce dalle Lofoten dal lato ovest.",
        come: "In auto sulla E10, circa 5 km prima di Å.",
        quando: "Al porto 40 minuti prima della partenza.",
        tempo: "Circa 3 ore e un quarto di traversata per Bodø",
        costo: "Auto fino a 6 metri 605 NOK (circa 53 €), passeggeri gratis (2026)",
        url: "https://www.torghatten.no/en/our-routes/18-782",
        lat: 67.8998,
        lng: 13.0438,
        consiglio: "D'estate il posto per l'auto va prenotato.",
      },
    ],
    sapori: [
      {
        nome: "Cinnamon rolls dal panificio",
        testo: "Girelle fresche del panificio storico."
      },
      {
        nome: "Zuppa di pesce da Anita's",
        testo: "Zuppa e panini con vista sul fiordo."
      }
    ],
    attenzioni: [
      "Å è la fine della strada E10: non c'è altro oltre, parcheggiare con calma.",
      "Il tempo cambia in fretta: portare impermeabile."
    ],
    programmi: [
      { titolo: "Mezza giornata", tappe: ["Panificio storico appena apre", "Museo dei Pescatori con la visita guidata", "Belvedere sul Moskstraumen", "Pranzo a Sakrisøy"] },
      { titolo: "1 giorno da Å a Hamnøy", tappe: ["Mattina ad Å: panificio, museo, scogli in fondo al paese", "Pranzo da Anita's Seafood a Sakrisøy", "Pomeriggio: Reinebringen se il cielo è sereno", "Sera: foto dal ponte di Hamnøy"] },
      { titolo: "2 giorni", tappe: ["Giorno 1: come sopra", "Giorno 2: traghetto del mattino da Reine a Vindstad e spiaggia di Bunes", "Rientro con il traghetto del pomeriggio"] },
    ],
    zone: [
      { nome: "Å", perChi: "Chi vuole dormire nel villaggio storico", testo: "Rorbu e un ostello tra le case del museo. Di sera, quando le auto se ne vanno, il paese è silenzioso." },
      { nome: "Reine, Sakrisøy e Hamnøy", perChi: "Chi vuole la vista più famosa", testo: "Rorbu sull'acqua con le montagne davanti, a un quarto d'ora da Å. Sono le sistemazioni più richieste delle Lofoten: si prenotano con mesi di anticipo." },
      { nome: "Sørvågen e Moskenes", perChi: "Chi prende il traghetto presto", testo: "Tra Å e Reine, a pochi minuti dal porto dei traghetti. Più tranquillo e un po' meno caro dei villaggi da cartolina." },
    ],
    gite: [
      { nome: "Reinebringen", distanza: "circa 15 minuti d'auto fino a Reine", come: "In auto e poi a piedi: 1.978 scalini di pietra, 448 metri di dislivello.", testo: "La vista sulla baia di Reine dall'alto, la più famosa delle Lofoten. Vale solo con il cielo sereno." },
      { nome: "Spiaggia di Bunes", distanza: "traghetto di 40 minuti da Reine, poi circa un'ora a piedi", come: "Traghetto Reine-Vindstad, poche corse al giorno: il posto conviene prenotarlo.", testo: "Una spiaggia chiusa tra pareti di roccia, sul lato nord dell'isola. A Vindstad non ci sono negozi: acqua e pranzo vanno portati." },
      { nome: "Nusfjord e Flakstadøya", distanza: "circa 50 minuti d'auto", come: "In auto verso est sulla E10.", testo: "Il villaggio di pescatori di Nusfjord, la chiesa di Flakstad e le spiagge di Ramberg e Skagsanden." },
    ],
    faq: [
      { domanda: "Quanto tempo serve per Å?", risposta: "Mezza giornata basta per il panificio, il Museo dei Pescatori e gli scogli in fondo al paese. Con Reine, Sakrisøy e Hamnøy si arriva a una giornata piena." },
      { domanda: "Si può entrare in auto nel villaggio?", risposta: "Il parcheggio è dopo il tunnel, a pochi minuti a piedi dal centro: conviene lasciare l'auto lì e girare a piedi, il paese è piccolo." },
      { domanda: "Il Museo dei Pescatori è aperto tutto l'anno?", risposta: "Quasi: chiude tra inizio dicembre e inizio gennaio e gli orari cambiano con le stagioni. In autunno 2026 è aperto tutti i giorni dalle 9 alle 15, con biglietto da 125 NOK." },
      { domanda: "Cosa vuol dire Å?", risposta: "In norvegese antico significa «fiume». È considerato il toponimo più corto del mondo, insieme a pochi altri paesi scandinavi con lo stesso nome." },
      { domanda: "Quando conviene andare ad Å?", risposta: "D'estate per la luce lunga e i locali aperti, come il panificio e Anita's Seafood. Da febbraio ad aprile si vedono le rastrelliere piene di stoccafisso e, di notte, l'aurora boreale." },
    ],
    esperienzeSlugs: ['museo-dei-pescatori'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Rastrelliere tradizionali per l\'essiccazione dello stoccafisso al tramonto, con montagne innevate sullo sfondo, Lofoten',
    immagine: '/images/norvegia/a-stock.jpg',
  },
  {
    slug: 'tromso',
    paeseSlug: 'norvegia',
    ordine: 8,
    nome: 'Tromsø',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '5 giorni, viaggio a sé rispetto alle Lofoten',
    visitataPersonalmente: true,
    introduzione:
      'La "capitale artica" della Norvegia, ben più a nord delle Lofoten: base per la caccia all\'aurora boreale, husky sledding e cultura sami, con la Cattedrale Artica come simbolo della città.',
    percheAndarci: 'Per l\'aurora boreale e per un pacchetto di attività artiche molto concentrato in pochi giorni, con la città stessa come base comoda a piedi.',
    cosaVedere: [
      'Cattedrale Artica (Ishavskatedralen), a forma di iceberg, con una delle vetrate a mosaico più grandi d\'Europa',
      'Fjellheisen, la funivia che sale sul monte Storsteinen (465 m) con vista su città e fiordi: cabina ogni 30 minuti, 4-5 minuti di salita, aperta fino a mezzanotte in inverno',
      'Polaria, il centro artico con cinema panoramico, vasca delle foche e acquari di specie del mare del nord',
      'Polar Museum, dedicato alla storia delle spedizioni polari norvegesi (caccia alle foche, spedizioni artiche, Amundsen)',
    ],
    cosaFare: [
      'Aurora chase in minibus (vedi la scheda esperienza dedicata)',
      'Husky sledding a Tromsø Villmarkssenter (vedi la scheda esperienza dedicata)',
      'Esperienza sami con le renne (vedi la scheda esperienza dedicata)',
      'Whale watching invernale verso Skjervøy (in questo viaggio non l\'ho fatto), vedi la scheda esperienza dedicata',
      'Notte in igloo di vetro nel Lyngenfjord (in questo viaggio non l\'ho fatta), vedi la scheda esperienza dedicata',
    ],
    doveDormire: 'Non ricordo con precisione dove ho dormito. La zona più comoda è quella del porto/Storgata, a pochi passi da negozi, bar e dal punto di ritrovo di gran parte delle escursioni; una doppia in hotel centrale in alta stagione costa indicativamente 140-170€/notte.',
    doveMangiare: 'Ho ricordi generici più che locali precisi: la cucina locale ruota molto intorno a granchio reale (kongekrabbe) e baccalà essiccato (tørrfisk/lutefisk), diffusi nei ristoranti della zona di Storgata.',
    comeArrivare: "Volo diretto o con scalo su Tromsø. L'aeroporto di Tromsø-Langnes è a circa 5 km dal centro. Il Flybussen costa circa 125 NOK (200 andata e ritorno), biglietto in app o a bordo con carta, e arriva in Storgata e agli hotel principali in 15-20 minuti, con corse legate agli arrivi. I bus urbani 40 e 42 costano circa 48 NOK ma sono più lenti e la sera passano di rado; un taxi costa circa 250-350 NOK, una decina di minuti.",
    comeSpostarsi: 'A piedi in centro; minibus/pullman organizzati per le escursioni fuori città.',
    periodoMigliore: 'da fine settembre a fine marzo per l\'aurora, con notte polare (poca luce diurna) tra dicembre e gennaio',
    costi: "Fjellheisen: 645 NOK (circa 55€) andata e ritorno adulti, 310 NOK (circa 27€) bambini 3-15 anni (2026). Polaria: circa 400-450 NOK (35-39€). Polar Museum: 130 NOK (circa 11€). Aurora chase in minibus: 100-160€ a persona. Husky sledding: 170-320€ a persona. Esperienza sami con le renne: da 145€ a persona. Whale watching: 130-260€ a persona. Doppia in hotel centrale in alta stagione: 140-170€/notte. Indicativamente, a persona al giorno: 70-110 € con ostello e spesa al supermercato; 180-260 € con hotel centrale in due e una cena fuori; 350-500 € aggiungendo un'escursione organizzata al giorno.",
    erroriDaEvitare: [
      'Prenotare le escursioni serali con un minimo di anticipo, soprattutto nei mesi di punta (novembre-marzo)',
      'Sottovalutare il vento sul lungomare: si sente più del previsto',
      'Provare a fare tutto: tra aurora, husky, sami e whale watching il conto sale in fretta. Meglio scegliere 2-3 attività e viverle bene',
    ],
    miaEsperienza:
      'Di questo viaggio mi sono rimasti dei flash più che un diario dettagliato: il freddo pungente appena scesi dall\'aereo, il buio della notte polare, e l\'aurora vista muoversi nel cielo per la prima volta durante l\'aurora chase in minibus. Le attività fatte, però, le ricordo bene, e qui sotto trovi tutto quello che serve per organizzarle allo stesso modo, o meglio.',
    luoghi: [
      {
        nome: "Cattedrale Artica (Ishavskatedralen)",
        testo: "Chiesa del 1965 dalla sagoma triangolare, sul lato opposto del ponte rispetto al centro. Sul lato est c'è il grande mosaico di vetro «Il ritorno di Cristo», aggiunto nel 1972.",
        come: "A piedi attraverso il ponte o in bus dal centro.",
        quando: "Mattina o pomeriggio; orari di visita e concerti sul sito.",
        tempo: "45 minuti",
        costo: "90 NOK adulti, circa 8 €; gratis sotto i 12 anni, si paga all'ingresso",
        orari: "1° gennaio-30 maggio e 16 agosto-31 dicembre 10-17 (domenica 13-17; mercoledì chiuso 13-14); 1° giugno-15 agosto 9-18 (domenica 13-18)",
        lat: 69.6482,
        lng: 18.9871,
        url: "https://ishavskatedralen.no",
        consiglio: "Se c'è un concerto di mezzanotte in estate, meglio prenotare."
      },
      {
        nome: "Fjellheisen e Storsteinen",
        testo: "La funivia che sale in pochi minuti sopra la città; in cima c'è un belvedere sui fiordi e sulle isole. D'inverno è un posto per vedere l'aurora senza spostarsi.",
        come: "Dal centro con il bus 26 da Torgsenteret fino alla fermata Fjellheisen, oppure a piedi attraverso il ponte (circa 45 minuti). La cabina parte ogni mezz'ora, all'ora piena e alla mezza, dalle 9 a mezzanotte.",
        quando: "Sera in inverno per le luci della città, giorno in estate.",
        tempo: "1-2 ore",
        costo: "645 NOK andata e ritorno adulti, 310 NOK bambini 3-15 anni (2026)",
        orari: "tutti i giorni 9-24, una cabina ogni mezz'ora",
        lat: 69.64096,
        lng: 18.98724,
        url: "https://www.fjellheisen.no",
        consiglio: "Salita rapida, ma vestirsi caldo in cima."
      },
      {
        nome: "Polaria",
        testo: "Il centro artico con acquari di fauna marina locale e delle Svalbard, una vasca delle foche e un cinema panoramico.",
        come: "A piedi dal centro, accanto al porto.",
        quando: "Giorno, in particolare se piove.",
        tempo: "1,5 ore",
        costo: "400-450 NOK, circa 35-39 €",
        orari: "10-17 (novembre 2026); alimentazione e addestramento delle foche alle 10.30 e alle 12.30",
        lat: 69.6437,
        lng: 18.9501,
        url: "https://polaria.no",
        consiglio: "Orari delle alimentazioni delle foche sul sito."
      },
      {
        nome: "Polar Museum",
        testo: "Un piccolo museo sul porto dedicato alle spedizioni polari e alla caccia nell'Artico.",
        come: "A piedi dal centro.",
        quando: "Giorno.",
        tempo: "1 ora",
        costo: "130 NOK adulti, circa 11 €; gratis sotto i 18 anni",
        orari: "tutti i giorni 10-18 (2026); chiuso 1° e 17 maggio",
        lat: 69.65221,
        lng: 18.96343,
        url: "https://uit.no/tmu/polarmuseet",
        consiglio: "Più interessante di quanto sembri, per chi ama la storia delle esplorazioni."
      },
      {
        nome: "Mack's Ølhallen",
        testo: "Il pub storico della birreria Mack, fondata nel 1877 e per decenni tra le più settentrionali del mondo, con birra alla spina. Un posto da locali, senza pretese.",
        come: "A piedi dal centro.",
        quando: "Sera.",
        tempo: "1 ora",
        lat: 69.6459,
        lng: 18.95047,
        consiglio: "Provare una birra locale: si ordina al bancone."
      },
      {
        nome: "Caccia all'aurora in minibus",
        testo: "Un'uscita serale con guida fuori città, lontano dalle luci, per cercare l'aurora in cielo sereno. I tour durano di solito diverse ore.",
        come: "Prenotato con operatore, partenza dal centro in minibus.",
        quando: "Da fine settembre a fine marzo, notte con poche nuvole.",
        tempo: "una serata",
        costo: "100-160 € a persona",
        consiglio: "È stata la prima volta che ho visto l'aurora muoversi nel cielo."
      },
      {
        nome: "Husky e renne sami",
        testo: "A Tromsø Villmarkssenter si può guidare una slitta di husky; altre aziende organizzano visite a un campo sami con le renne e racconti della cultura locale.",
        come: "Prenotazione con operatore; trasferimento in minibus.",
        quando: "Inverno, con la neve.",
        tempo: "mezza giornata",
        costo: "husky 170-320 € a persona; renne con guida sami da 145 €",
        consiglio: "Vestirsi a strati: ci si ferma spesso."
      },
      {
        nome: "Duomo di Tromsø e Storgata",
        testo: "La cattedrale luterana di legno, del 1861, sta sulla via pedonale principale della città. Intorno, Storgata è la strada di negozi, bar e ristoranti dove passa quasi tutta la vita del centro.",
        come: "A piedi in centro.",
        quando: "Tardo pomeriggio, con le luci accese nel buio invernale.",
        tempo: "1 ora",
        lat: 69.64874,
        lng: 18.95676
      },
      {
        nome: "Nordnorsk Kunstmuseum",
        testo: "Il museo d'arte della Norvegia del nord, in un vecchio edificio del centro: pittura dell'Ottocento, arte sami e contemporanea. Una buona ora al caldo tra un'escursione e l'altra.",
        come: "A piedi da Storgata, vicino al porto.",
        quando: "Di giorno, con il maltempo.",
        tempo: "1 ora",
        costo: "110 NOK adulti, circa 9 €; gratis sotto i 18 anni",
        orari: "martedì-domenica 11-17; chiuso il lunedì",
        lat: 69.6482,
        lng: 18.9599,
        url: "https://nnkm.no"
      },
      {
        nome: "Tromsø Museum (Museo universitario artico)",
        testo: "Il museo dell'università, nel parco di Folkeparken a sud dell'isola: sale sull'aurora boreale, sulla cultura sami, sulla geologia e sulla fauna artica. Spiega bene quello che si vede fuori nelle escursioni.",
        come: "In bus dal centro, oppure a piedi lungo la costa (circa 2 km).",
        quando: "Prima della prima caccia all'aurora, per capire cosa si cerca.",
        tempo: "1,5-2 ore",
        costo: "130 NOK adulti, circa 11 €; gratis sotto i 18 anni",
        orari: "16 agosto-14 giugno lunedì-venerdì 10-16.30, sabato e domenica 11-16; 15 giugno-15 agosto lunedì-venerdì 10-18, sabato e domenica 11-17; chiuso 1° gennaio, 1° e 17 maggio, 24 e 25 dicembre",
        lat: 69.63486,
        lng: 18.91257,
        url: "https://uit.no/tmu"
      },
      {
        nome: "Giardino botanico artico-alpino",
        testo: "Il giardino botanico dell'università, con piante artiche e d'alta montagna da varie parti del mondo, tra rocce e piccoli stagni. Si visita quando la neve si è sciolta.",
        come: "In bus dal centro verso il campus universitario di Breivika.",
        quando: "Da giugno a settembre.",
        tempo: "1 ora",
        lat: 69.6768,
        lng: 18.9763
      },
      {
        nome: "Pust, saune nel porto",
        testo: "Saune galleggianti nel porto interno, con il tuffo nel mare artico tra un turno e l'altro. Sono tre, tra cui una a forma di lavvu, la tenda sami.",
        come: "A piedi dal centro; si prenota online la fascia oraria.",
        quando: "Sera d'inverno, prima o dopo cena.",
        tempo: "1-2 ore",
        costo: "da 150 NOK, circa 13 €, a seconda della sauna e dell'orario",
        orari: "tutti i giorni 6-23",
        lat: 69.65089,
        lng: 18.96254,
        url: "https://www.pust.io/en/lokasjon/tromso/"
      },
      {
        nome: "Telegrafbukta",
        testo: "Una piccola spiaggia sul lato sud-ovest dell'isola, con la vista sul fiordo e sulle montagne di Kvaløya. D'estate è il posto dei barbecue, d'inverno uno degli angoli più bui a portata di passeggiata.",
        come: "A piedi dal centro in circa 40 minuti, accanto al Tromsø Museum, o in bus.",
        quando: "Tramonto d'estate; sere serene d'inverno.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 69.63208,
        lng: 18.90648
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Polaria (foche alle 10.30) e Polar Museum",
          "Pranzo in Storgata e Duomo",
          "Pomeriggio: Cattedrale Artica",
          "Sera: Fjellheisen per la vista e, con cielo sereno, l'aurora"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: husky o renne con guida sami (mezza giornata)",
          "Sera: caccia all'aurora in minibus"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Tromsø Museum e Telegrafbukta, oppure whale watching verso Skjervøy (da metà ottobre a fine gennaio)",
          "Sera: sauna Pust nel porto e ultima birra al Mack's Ølhallen"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro (Storgata e porto)",
        perChi: "Chi non ha l'auto",
        testo: "A pochi passi da negozi, bar e dal punto di ritrovo delle escursioni. In alta stagione i prezzi sono alti: prenotare presto.",
        fascia: "140-250 €"
      },
      {
        nome: "Tromsdalen",
        perChi: "Chi vuole un po' di tranquillità",
        testo: "Dall'altra parte del ponte, vicino alla Cattedrale Artica e alla funivia; si va in centro in bus.",
        fascia: "120-200 €"
      },
      {
        nome: "Ostelli",
        perChi: "chi viaggia con poco e spende per le escursioni",
        testo: "Ostelli in centro come il Tromsø Activities Hostel, con letti in dormitorio e cucina comune.",
        fascia: "da circa 35 € a letto in dormitorio"
      }
    ],
    sapori: [
      {
        nome: "Granchio reale (kongekrabbe)",
        testo: "Nei ristoranti del centro si mangiano gambe di granchio reale, ricco e dolce."
      },
      {
        nome: "Stoccafisso (tørrfisk)",
        testo: "Merluzzo essiccato, cucina tipica del nord."
      },
      {
        nome: "Renna",
        testo: "Servita in stufato o in padella, tipica della cucina sami."
      }
    ],
    attenzioni: [
      "Aurora: non è garantita, serve cielo sereno e attività solare; prevedere più sere.",
      "Il freddo pungente e le giornate di notte polare richiedono strati termici veri.",
      "Prezzi alti: confrontare i tour prima di prenotare."
    ],
    gite: [
      {
        nome: "Sommarøy e Kvaløya",
        distanza: "57 km, circa 1 ora e 10 in auto",
        come: "In auto a noleggio o con i tour in minibus che partono dal centro.",
        testo: "Isolotti, spiagge di sabbia bianca e acqua chiara sul mare aperto; d'inverno la strada attraversa Kvaløya tra montagne innevate."
      },
      {
        nome: "Ersfjordbotn",
        distanza: "21 km, circa 30 minuti in auto",
        come: "In auto attraverso Kvaløya; molte cacce all'aurora passano di qui.",
        testo: "Un fiordo chiuso tra pareti ripide, lontano dalle luci della città: d'inverno uno dei posti più vicini per guardare l'aurora."
      },
      {
        nome: "Alpi di Lyngen",
        distanza: "circa 1 ora e 30-2 ore",
        come: "In auto o con tour organizzati; gli igloo di vetro di Lyngen North si prenotano con largo anticipo.",
        testo: "Montagne a picco sul Lyngenfjord. Una notte in igloo di vetro costa intorno ai 380-420 € in due."
      },
      {
        nome: "Whale watching verso Skjervøy",
        distanza: "giornata intera",
        come: "Solo con tour in barca da Tromsø, da metà ottobre a fine gennaio.",
        testo: "Orche e megattere che seguono le aringhe nei fiordi del nord; 130-260 € a persona, e la qualità della barca cambia molto l'esperienza."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Tromsø?",
        risposta: "Quattro o cinque, per avere più sere a disposizione per l'aurora e due o tre escursioni di giorno. In due giorni si vede la città, ma l'aurora diventa una scommessa."
      },
      {
        domanda: "Quando si vede l'aurora boreale a Tromsø?",
        risposta: "Da fine settembre a fine marzo, con cielo sereno e un po' di attività solare. Non è mai garantita: conviene prevedere più uscite."
      },
      {
        domanda: "Serve l'auto a Tromsø?",
        risposta: "No: il centro si gira a piedi e le escursioni includono il transfer. L'auto serve solo per muoversi in autonomia verso Kvaløya o Sommarøy, e d'inverno richiede esperienza su neve e ghiaccio."
      },
      {
        domanda: "Come si va dall'aeroporto al centro?",
        risposta: "Con il Flybussen, circa 125 NOK e 15-20 minuti fino a Storgata, oppure in taxi, 250-350 NOK. I bus urbani costano meno ma la sera passano di rado."
      },
      {
        domanda: "Bisogna prenotare le escursioni in anticipo?",
        risposta: "Sì, soprattutto da novembre a marzo: aurora, husky e renne vanno prenotati qualche giorno prima, scegliendo date flessibili per l'aurora."
      },
      {
        domanda: "Cosa fare durante la notte polare?",
        risposta: "Tra dicembre e gennaio la luce dura poche ore: si usano per la Cattedrale Artica e i musei, mentre il buio è il momento di Fjellheisen, della sauna nel porto e della caccia all'aurora."
      }
    ],
    esperienzeSlugs: ['aurora-chase-minibus-tromso', 'husky-sledding-tromso', 'sami-renne-lavvu-tromso', 'whale-watching-tromso', 'glass-igloo-lyngen'],
    tripSlugs: ['tromso'],
    imageAlt: 'Cattedrale Artica di Tromsø illuminata di sera con aurora boreale sullo sfondo',
    immagine: '/images/norvegia/tromso-stock.jpg',
  },
]
