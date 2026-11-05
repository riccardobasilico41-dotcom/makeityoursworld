import type { Destinazione } from '@/lib/types'

// Nessun nome di hotel, ristorante o operatore è stato inventato. L\'Arabia
// Saudita è il paese di questo archivio che cambia più in fretta: regole
// d\'ingresso, accessi ai siti e norme di comportamento vanno riverificati sui
// canali ufficiali prima di partire.

export const destinazioniArabiaSaudita: Destinazione[] = [
  {
    slug: 'jeddah',
    paeseSlug: 'arabia-saudita',
    ordine: 1,
    nome: 'Jeddah',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il porto del Mar Rosso da cui per secoli sono passati i pellegrini diretti alla Mecca, e la città più aperta e rilassata del Regno. Nel centro storico, Al-Balad, restano le case-torre di pietra corallina con i moucharabieh di legno alle finestre. È patrimonio UNESCO ed è l\'unico posto in Arabia Saudita dove si cammina in una vera città vecchia.',
    percheAndarci:
      'È la porta d\'ingresso naturale del paese, e Al-Balad al tramonto è la cosa più bella dell\'ovest saudita. Jeddah ha poi un rapporto con il mondo esterno che il resto del Regno non ha: qui si arriva da secoli da ogni parte del mondo musulmano, e si vede.',
    cosaVedere: [
      'Al-Balad, il centro storico UNESCO, con le case-torre in pietra corallina e i rawashin, le facciate di legno intagliato',
      'La Casa Nassif, la più nota delle case-torre, con la rampa interna costruita per far salire i cammelli',
      'Il souq Al-Alawi, dentro Al-Balad, ancora in attività',
      'La Corniche e la Fontana di Re Fahd, il getto d\'acqua più alto del mondo',
      'La moschea galleggiante di Al-Rahma, sulla Corniche',
      'I reef del Mar Rosso al largo, tra i meglio conservati del pianeta',
    ],
    cosaFare: [
      'Camminare per Al-Balad al tramonto, quando le facciate di legno prendono luce (c\'è la scheda esperienza dedicata)',
      'Cenare a base di pesce sulla Corniche, come fanno i sauditi il giovedì sera',
      'Snorkeling o immersioni sui reef del Mar Rosso, molto meno frequentati di quelli egiziani',
      'Girare i quartieri d\'arte contemporanea, a Jeddah la cosa più inattesa del paese',
    ],
    doveDormire:
      'Vicino ad Al-Balad per stare nella parte storica, o sulla Corniche per il mare e i ristoranti. Jeddah è grande e dispersa: la posizione conta più che altrove.',
    doveMangiare:
      'Jeddah è la città dove si mangia meglio in Arabia Saudita, perché secoli di pellegrinaggio hanno portato qui cucine da tutto il mondo musulmano. Da provare il kabsa, il piatto nazionale di riso speziato con carne, il mandi yemenita cotto nel forno interrato, il foul a colazione e il pesce del Mar Rosso alla griglia sulla Corniche. Poi il caffè arabo con i datteri, che qui è un rituale di ospitalità più che una consumazione. **Nel paese l\'alcol non c\'è**, nemmeno negli hotel.',
    comeArrivare:
      'Volo internazionale sul King Abdulaziz (JED), il principale scalo dell\'ovest saudita. È anche l\'aeroporto dove atterra chi usa il visto stopover di Saudia o flynas.',
    comeSpostarsi:
      'Uber e Careem funzionano benissimo e costano poco: sono il mezzo normale. Al-Balad si gira a piedi, il resto della città no, perché le distanze sono da metropoli americana.',
    periodoMigliore:
      'da novembre a marzo. Per via del Mar Rosso Jeddah è calda e umida quasi tutto l\'anno, e d\'estate caldo e umidità insieme pesano anche per gli standard della regione.',
    costi: 'Camminare per Al-Balad non costa niente; le case-museo hanno biglietti contenuti. Gli hotel hanno prezzi da capitale.',
    erroriDaEvitare: [
      'Provare ad andare alla Mecca: è **vietata ai non musulmani**, sull\'autostrada i cartelli indicano le deviazioni obbligatorie e ci sono controlli. Non è una formalità da aggirare',
      'Visitare Al-Balad a mezzogiorno: il quartiere si anima nel tardo pomeriggio, ed è solo allora che la luce arriva sulle facciate di legno',
      'Fotografare persone, soprattutto donne, senza un permesso esplicito: qui è un problema più serio che altrove nella regione',
      'Aspettarsi di trovare alcol: non c\'è in tutto il paese, nemmeno negli hotel internazionali',
    ],
    confronti: [
      {
        titolo: 'Jeddah o Riyadh come porta d\'ingresso',
        introduzione:
          'L\'Arabia Saudita ha due aeroporti principali a quasi mille chilometri l\'uno dall\'altro, e scegliere da quale entrare cambia la forma di tutto l\'itinerario.',
        opzioni: [
          {
            nome: 'Entrare da Jeddah',
            sintesi: 'La porta dell\'ovest: Al-Balad in città, AlUla a un volo breve o a sette ore di strada, il Mar Rosso davanti.',
            costo: 'voli diretti frequenti dall\'Europa',
            durata: 'base ideale per un itinerario a ovest di 7-9 giorni',
            pro: [
              'È la città più piacevole e aperta del paese, con il centro storico UNESCO',
              'AlUla è molto più vicina che da Riyadh',
              'Il Mar Rosso è a portata di mano, con reef quasi intatti',
              'È lo scalo dove atterra chi usa il visto stopover di Saudia o flynas',
            ],
            contro: ['Caldo e umidità pesanti quasi tutto l\'anno', 'Più lontana dall\'Asir e dall\'est del paese', 'Città dispersa, dove ci si muove solo in auto'],
            perChi: 'Chiunque venga per la prima volta o abbia pochi giorni. Con un visto stopover di quattro giorni è in pratica l\'unica scelta sensata.',
          },
          {
            nome: 'Entrare da Riyadh',
            sintesi: 'La capitale nell\'interno, con Diriyah patrimonio UNESCO alle porte e l\'Edge of the World a un\'ora e mezza di pista.',
            costo: 'voli diretti dall\'Europa, spesso un po\' più cari',
            durata: 'base per un itinerario tra centro ed est',
            pro: [
              'Diriyah, la capitale originale dei Saud, è patrimonio UNESCO e sta a venti minuti dal centro',
              'L\'Edge of the World, la scarpata del Tuwaiq, è una delle cose più spettacolari del paese',
              'Il clima è secco: a parità di temperatura si sopporta molto meglio che a Jeddah',
              'È più comoda per proseguire verso est e verso il Rub\' al-Khali',
            ],
            contro: [
              'Città moderna e verticale, senza un centro storico da girare a piedi',
              'Nella vita di tutti i giorni è più conservatrice e meno rilassata di Jeddah',
              'AlUla è lontana: il volo interno è quasi obbligatorio',
            ],
            perChi: 'Chi ha almeno dieci giorni, o chi entra ed esce da due aeroporti diversi.',
          },
        ],
        raccomandazione:
          'Con meno di una settimana, Jeddah senza dubbi: si atterra, si vede Al-Balad, si vola ad AlUla e si torna. Con dieci giorni o più conviene entrare da una parte e uscire dall\'altra (Jeddah, AlUla, poi volo su Riyadh con Diriyah e l\'Edge of the World), così non si rifanno mille chilometri all\'indietro.',
      },
    ],
    miaEsperienza:
      'Jeddah spiazza chi arriva convinto che l\'Arabia Saudita sia tutta uguale. È una città di mare, nei modi più mediterranea di quanto ci si aspetti, e la differenza con Riyadh si sente in mezza giornata. Al-Balad è il motivo principale per venirci, e va visto all\'ora giusta. Di giorno è un quartiere polveroso in restauro; nel tardo pomeriggio la luce bassa prende i rawashin, le facciate di legno intagliato, alcune alte quattro piani, fatte per far circolare l\'aria e per permettere alle donne di guardare fuori senza essere viste, e il quartiere cambia. Molte case sono puntellate e diverse sono crollate: il restauro va avanti a macchia, e chi vede Al-Balad oggi lo vede a metà strada. L\'altra cosa che resta è sociale più che monumentale: la Corniche il giovedì sera, con le famiglie che stendono i tappeti sul prato, i barbecue accesi e i bambini che giocano fino a mezzanotte. È lì, più che in qualsiasi museo, che si capisce meglio che paese sia questo.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Al-Balad",
        "testo": "Il centro storico, patrimonio UNESCO dal 2014 come «Jeddah storica, porta della Mecca», con le case-torre in pietra corallina e le roshan, le grandi finestre di legno intagliato. Il restauro procede a macchia: alcune case sono diventate hotel, altre sono ancora puntellate.",
        "come": "Si gira a piedi nelle stradine; taxi o Uber fino al margine del quartiere. Con una guida si capisce meglio cosa si guarda.",
        "quando": "Tardo pomeriggio, quando la luce bassa prende il legno e il quartiere si anima. A mezzogiorno è polveroso e vuoto.",
        "tempo": "2-3 ore",
        "consiglio": "Chiudere la visita nei vicoli del souq con un caffè arabo al cardamomo."
      },
      {
        "nome": "Casa Nassif",
        "testo": "Una delle case-torre più note di Al-Balad.",
        "come": "Dentro Al-Balad, a piedi.",
        "quando": "Mattina o fine pomeriggio. Orari di apertura degli interni da verificare sul posto.",
        "tempo": "45 minuti"
      },
      {
        "nome": "Corniche, fontana di Re Fahd e moschea Al-Rahma",
        "testo": "Il lungomare della città, con la fontana di Re Fahd, il getto d'acqua più alto del mondo secondo il Guinness (312 metri), e la moschea Al-Rahma, detta «galleggiante» perché costruita sulla riva e con l'alta marea sembra posata sull'acqua. La sera le famiglie passeggiano e fanno picnic.",
        "come": "Taxi o Uber dal centro. Si passeggia sul lungomare.",
        "quando": "Tramonto e sera, soprattutto nel fine settimana.",
        "tempo": "2 ore",
        "consiglio": "Cenare a base di pesce in uno dei ristoranti della zona."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Pomeriggio: Al-Balad e Casa Nassif",
          "Souq Al-Alawi al tramonto",
          "Sera: Corniche, fontana e cena di pesce"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: mattina sul Mar Rosso con snorkeling o immersioni, poi quartieri d'arte contemporanea"
        ]
      }
    ],
    zone: [
      {
        "nome": "Al-Balad",
        "perChi": "chi vuole dormire nel centro storico",
        "testo": "Poche strutture, restaurate in case antiche. Vicino a tutto ma lontano dal mare."
      },
      {
        "nome": "Corniche",
        "perChi": "chi vuole mare e comodità",
        "testo": "Hotel e resort sul lungomare, con ristoranti vicini."
      },
      {
        "nome": "Quartieri nuovi",
        "perChi": "chi preferisce hotel internazionali",
        "testo": "Torri di vetro e catene globali, comodi ma anonimi."
      }
    ],
    sapori: [
      {
        "nome": "Kabsa",
        "testo": "Il piatto nazionale: riso speziato con carne o pollo."
      },
      {
        "nome": "Mandi",
        "testo": "Carne yemenita cotta in forno interrato, con riso affumicato."
      },
      {
        "nome": "Foul",
        "testo": "Fave in pentola per colazione, con pane caldo."
      },
      {
        "nome": "Pesce alla griglia",
        "testo": "Del Mar Rosso, sulla Corniche."
      }
    ],
    attenzioni: [
      "Sicurezza: a novembre 2026 il governo britannico sconsiglia i viaggi non essenziali in tutta l'Arabia Saudita e qualsiasi viaggio entro 10 km dal confine con lo Yemen, per gli attacchi con missili e droni (anche sull'aeroporto di Riyadh). Controllare viaggiaresicuri.it e l'assicurazione prima di partire.",
      "La Mecca è vietata ai non musulmani: sull'autostrada i cartelli indicano le deviazioni obbligatorie. Non è una regola da aggirare.",
      "Al-Balad a mezzogiorno: il quartiere si anima nel tardo pomeriggio, quando la luce arriva sul legno.",
      "Foto alle persone, soprattutto alle donne: chiedere sempre il permesso.",
      "Regole su abbigliamento e comportamento in pubblico: controllare i canali ufficiali prima di partire."
    ],
    // GUIDA-END
    esperienzeSlugs: ['al-balad-jeddah'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'La porta in pietra con due torri all\'ingresso del quartiere storico di Al-Balad, Jeddah',
    immagine: '/images/arabia-saudita/jeddah.jpg',
  },
  {
    slug: 'alula',
    immagine: '/images/arabia-saudita/alula.jpg',
    paeseSlug: 'arabia-saudita',
    ordine: 2,
    nome: 'AlUla e Hegra',
    tipologia: ['archeologia', 'deserto', 'paesaggi'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'oasi in un deserto di arenaria rossa, con centoundici tombe monumentali scavate nella roccia dai nabatei, gli stessi di Petra, e con una fortuna che Petra non ha: quasi nessuno davanti. Hegra è stato il primo sito saudita iscritto nel patrimonio UNESCO, nel 2008.',
    percheAndarci:
      'È il motivo principale per venire in Arabia Saudita. Hegra era la seconda città del regno nabateo dopo Petra: le tombe sono altrettanto elaborate e molto meglio conservate, perché qui l\'arenaria è più resistente, e si visitano in un numero di persone che a Petra sarebbe impensabile.',
    cosaVedere: [
      'Hegra (Mada\'in Salih), con le 111 tombe monumentali e la Qasr al-Farid, la "tomba solitaria" rimasta incompiuta',
      'Jabal Ikmah, la "biblioteca a cielo aperto" con centinaia di iscrizioni in dadanitico, lihyanita, nabateo e arabo antico',
      'Dadan, capitale dei regni di Dadan e Lihyan, più antica di Hegra',
      'La città vecchia di AlUla, un labirinto di case di fango ai piedi della cittadella',
      'Elephant Rock (Jabal AlFil), il monolite di arenaria eroso a forma di elefante',
      'L\'oasi di AlUla, con centinaia di migliaia di palme da dattero e i sentieri all\'ombra tra i campi',
    ],
    cosaFare: [
      'La visita guidata a Hegra, obbligatoria e contingentata (c\'è la scheda esperienza dedicata)',
      'Jabal Ikmah la mattina presto, quando la luce radente fa risaltare le incisioni',
      'Il tramonto a Elephant Rock, il ritrovo serale della gente del posto',
      'Camminare o pedalare nell\'oasi, lungo i sentieri tra le palme',
      'In stagione, una notte nel deserto o un volo in mongolfiera sopra le formazioni di arenaria',
    ],
    doveDormire:
      'AlUla ha poche strutture rispetto alla domanda e prezzi alti, dai resort nel deserto, carissimi, alle sistemazioni più semplici nella città nuova. **Bisogna prenotare con molto anticipo**, soprattutto tra dicembre e febbraio, in piena stagione, con festival ed eventi.',
    doveMangiare:
      'L\'offerta è cresciuta in fretta, ma resta limitata e cara rispetto al resto del paese. Nella città vecchia restaurata ci sono ristoranti e caffè; nella città nuova si mangia nei locali di quartiere a prezzi normali. Da cercare i datteri dell\'oasi, il prodotto locale, da comprare direttamente dai produttori.',
    comeArrivare:
      'Di solito con un volo interno su AlUla (ULH) da Riyadh o Jeddah. In alternativa ci sono circa 7 ore di strada da Jeddah e 3-4 da Medina: le strade sono ottime e la benzina costa pochissimo, quindi l\'auto a noleggio è una scelta possibile.',
    comeSpostarsi:
      'Ad AlUla c\'è un servizio di navette tra i siti principali; per il resto serve l\'auto. **A Hegra non si entra con il proprio mezzo**: si accede solo con i bus e le guide del sito.',
    periodoMigliore:
      'da ottobre a marzo; i mesi migliori sono dicembre e febbraio, con temperature tra i 12 e i 25 gradi. D\'estate si va ben oltre i 40 e la visita diventa impossibile. Le notti nel deserto sono fredde anche d\'inverno.',
    costi:
      'l\'ingresso a Hegra con visita guidata ha un biglietto contingentato da prenotare online; gli altri siti hanno biglietti separati o combinati. Gli alloggi sono la voce più cara di tutto il viaggio in Arabia Saudita.',
    erroriDaEvitare: [
      'Presentarsi a Hegra senza prenotazione: gli accessi sono contingentati, si entra solo con la guida e nei mesi di punta i posti finiscono',
      'Prenotare l\'alloggio all\'ultimo: AlUla ha poche strutture e in alta stagione si riempie',
      'Programmarla d\'estate',
      'Fermarsi a Hegra e saltare Jabal Ikmah e Dadan: sono nella stessa zona e raccontano i mille anni prima dei nabatei',
      'Aspettarsi solo "la Petra senza turisti": il paesaggio è diverso e per certi versi più bello, ma le tombe sono meno numerose e non c\'è un Siq',
    ],
    miaEsperienza:
      'Hegra è il motivo per cui si prende l\'aereo per l\'Arabia Saudita, e mantiene quello che promette, a patto di aggiustare le aspettative. Chi arriva pensando a "Petra senza la folla" trova un\'altra cosa: le tombe sono centoundici contro le centinaia di Petra, non c\'è un Siq che prepari la sorpresa e non c\'è un Tesoro. In compenso c\'è quello che altrove non c\'è più. Si sta davanti a una facciata nabatea scolpita duemila anni fa, alta dieci metri, con le iscrizioni ancora leggibili sull\'architrave, e intorno non c\'è nessuno: niente venditori, niente cammelli, niente gruppi. La Qasr al-Farid, la tomba solitaria rimasta incompiuta, sta da sola in mezzo al deserto e mostra come lavoravano: scolpivano dall\'alto verso il basso, e lei si vede a metà. Il resto della zona vale quanto Hegra. Jabal Ikmah è una parete di roccia coperta di iscrizioni in quattro alfabeti, lasciate da chi passava di qui duemilacinquecento anni fa: una specie di registro pubblico scolpito nella pietra. Sul piano pratico conta una cosa: si entra solo con la guida e con la prenotazione, e ad AlUla gli alloggi sono pochi e cari.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hegra (Mada'in Salih)",
        "testo": "Il primo sito saudita patrimonio UNESCO: oltre 110 tombe monumentali nabatee scolpite nell'arenaria circa duemila anni fa, molte con iscrizioni sul defunto. La Qasr al-Farid, la tomba solitaria, è rimasta incompiuta: si vede come scolpivano dall'alto verso il basso.",
        "come": "Solo con visita guidata. I tour sono a numero limitato ogni giorno: meglio prenotare online, in biglietteria si trova posto solo se ne resta. Ritrovo all'ingresso sud di Hegra, con parcheggio gratuito, oppure bus dal Winter Park di AlUla.",
        "quando": "Mattina o tardo pomeriggio, con meno caldo.",
        "tempo": "2-3 ore",
        "url": "https://www.experiencealula.com/en/places-to-go/hegra",
        "consiglio": "Prenotare con settimane di anticipo nei mesi di punta. Non è «Petra senza la folla»: è più piccola e più silenziosa.",
        "costo": "Hegra Day Tour con guida 95 SAR a persona (2026)"
      },
      {
        "nome": "Jabal Ikmah",
        "testo": "Un canyon con centinaia di iscrizioni incise nell'arenaria, soprattutto in dadanitico e in altre antiche lingue nord-arabiche, quasi tutte della seconda metà del I millennio a.C.",
        "come": "Con il tour Dadan e Jabal Ikmah: si parcheggia gratis al Winter Park di AlUla e un bus porta al centro visitatori di Dadan, poi a Jabal Ikmah e ritorno.",
        "quando": "Mattina, quando la luce radente fa risaltare le incisioni.",
        "tempo": "1-1,5 ore",
        "url": "https://www.experiencealula.com/en/places-to-go/jabal-ikmah",
        "costo": "Tour Dadan e Jabal Ikmah da 60 SAR a persona, circa 2 ore (2026)"
      },
      {
        "nome": "Dadan",
        "testo": "La capitale dei regni di Dadan e Lihyan, oltre duemila anni fa, sulla Via dell'Incenso, con le tombe scavate nella parete rossa: alcune hanno leoni seduti scolpiti nella roccia e si pensa fossero dell'élite.",
        "come": "Con lo stesso tour di Jabal Ikmah, che parte dal Winter Park; non si può andare da soli in auto. Tour limitati, meglio prenotare online.",
        "quando": "Mattina.",
        "tempo": "1,5 ore",
        "url": "https://www.experiencealula.com/en/places-to-go/dadan",
        "consiglio": "Di solito si abbina a Jabal Ikmah.",
        "costo": "Compreso nel tour Dadan e Jabal Ikmah (da 60 SAR, 2026)"
      },
      {
        "nome": "Città vecchia di AlUla ed Elephant Rock",
        "testo": "Il borgo di vicoli e case di fango, abitato dal XII secolo sulla via dei pellegrini tra Damasco e la Mecca, oggi restaurato con negozi e ristoranti; e la roccia a forma di elefante, dove ci si trova al tramonto.",
        "come": "La città vecchia si gira a piedi; Elephant Rock è poco fuori città, in auto, con parcheggio gratuito e una passerella di legno.",
        "quando": "Città vecchia dal pomeriggio alla sera; Elephant Rock aperta tutti i giorni dalle 16 a mezzanotte (2026), al meglio al tramonto.",
        "tempo": "2 ore",
        "consiglio": "Sulla roccia non si sale; la sera nel deserto fa freddo e ci sono bracieri accesi.",
        "costo": "Città vecchia a ingresso libero, visita guidata 70 SAR (2026)",
        "url": "https://www.experiencealula.com/en/places-to-go/alula-old-town"
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Hegra con visita guidata, tramonto a Elephant Rock",
          "Giorno 2: Jabal Ikmah e Dadan in mattinata, città vecchia nel pomeriggio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Città nuova di AlUla",
        "perChi": "chi vuole prezzi normali",
        "testo": "Alberghi di quartiere e locali a prezzi più bassi, un po' lontani dai siti."
      },
      {
        "nome": "Resort nel deserto",
        "perChi": "chi vuole il lusso",
        "testo": "Poche strutture di alto livello, molto care e a volte lontane da tutto."
      },
      {
        "nome": "Città vecchia",
        "perChi": "chi vuole l'atmosfera storica",
        "testo": "Ristoranti e caffè nella parte restaurata, con alloggi limitati."
      }
    ],
    sapori: [
      {
        "nome": "Datteri di AlUla",
        "testo": "Il prodotto dell'oasi, da comprare dai produttori."
      },
      {
        "nome": "Kabsa",
        "testo": "Riso speziato con carne, nei locali di quartiere."
      },
      {
        "nome": "Caffè arabo",
        "testo": "Con cardamomo, servito con datteri."
      },
      {
        "nome": "Pane di forno",
        "testo": "Cotto nei forni di quartiere."
      }
    ],
    attenzioni: [
      "Sicurezza: a novembre 2026 il governo britannico sconsiglia i viaggi non essenziali in tutta l'Arabia Saudita e qualsiasi viaggio entro 10 km dal confine con lo Yemen, per gli attacchi con missili e droni (anche sull'aeroporto di Riyadh). Controllare viaggiaresicuri.it e l'assicurazione prima di partire.",
      "Presentarsi a Hegra senza prenotazione: i tour sono a numero limitato e nei mesi di punta finiscono.",
      "Prenotare l'alloggio all'ultimo: ad AlUla ci sono poche strutture e in alta stagione si riempiono.",
      "D'estate il caldo è estremo: venire tra ottobre e marzo.",
      "Fermarsi a Hegra e saltare Jabal Ikmah e Dadan: sono altrettanto interessanti."
    ],
    // GUIDA-END
    esperienzeSlugs: ['hegra-alula'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Un dromedario in primo piano sulla sabbia di AlUla, con un pinnacolo di arenaria e le rocce del deserto sullo sfondo',
  },
  {
    slug: 'riyadh-diriyah',
    paeseSlug: 'arabia-saudita',
    ordine: 3,
    nome: 'Riyadh e Diriyah',
    tipologia: ['città', 'storia', 'deserto'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale, nel cuore dell\'altopiano del Najd: una città verticale e recentissima, passata in due generazioni da villaggio fortificato a metropoli di sette milioni di abitanti. Alle porte c\'è Diriyah, la prima capitale della dinastia Saud, costruita in mattoni di fango e oggi patrimonio UNESCO. A un\'ora e mezza di pista c\'è la scarpata del Tuwaiq, che tutti chiamano Edge of the World.',
    percheAndarci:
      'Qui si capisce quanto in fretta si sia trasformato questo paese. E Diriyah e l\'Edge of the World, a mezz\'ora e a un\'ora e mezza dal centro, sono due delle cose migliori del Regno.',
    cosaVedere: [
      'Diriyah e il quartiere di At-Turaif, patrimonio UNESCO, costruito tutto in mattoni di fango',
      'Il Museo Nazionale Saudita, il migliore del paese per capire la storia della penisola',
      'Il Kingdom Centre, con lo skybridge sospeso tra le due torri',
      'Masmak Fort, la fortezza di fango da cui nel 1902 cominciò la riconquista di Ibn Saud',
      'Il souq Al-Zal e il quartiere di Deira, la Riyadh di prima dei grattacieli',
      'L\'Edge of the World (Jebel Fihrayn), la scarpata del Tuwaiq affacciata sul nulla',
    ],
    cosaFare: [
      'Diriyah al tramonto, quando i muri di fango diventano arancioni (c\'è la scheda esperienza dedicata)',
      'L\'escursione all\'Edge of the World, che richiede un 4x4 e mezza giornata (c\'è la scheda esperienza dedicata)',
      'Salire sullo skybridge del Kingdom Centre per la vista sulla città',
      'Una serata nei quartieri nuovi, dove dal 2019 hanno aperto caffè, ristoranti e locali che cinque anni fa non c\'erano',
    ],
    doveDormire:
      'La zona più comoda per trasporti e ristoranti è il centro moderno (Olaya, King Fahd Road). Diriyah ha strutture di fascia alta nel distretto restaurato. Riyadh è enorme e dispersa: senza auto o Uber non si va da nessuna parte.',
    doveMangiare:
      'La cucina del Najd è diversa da quella di Jeddah, più asciutta: il kabsa come piatto principale, la jareesh (grano spezzato cotto a lungo) e il mutabbaq. Nei quartieri vecchi ci sono ristoranti popolari ottimi che costano pochissimo; in quelli nuovi una scena di caffè e ristoranti esplosa negli ultimi anni, con prezzi da capitale. Da provare il caffè arabo saudita, chiaro e speziato al cardamomo, servito con i datteri.',
    comeArrivare: 'In aereo sul King Khalid International (RUH), con voli diretti dall\'Europa. Da Jeddah, volo interno di circa 2 ore.',
    comeSpostarsi:
      'Con Uber e Careem, il mezzo normale, che costano poco. La metropolitana di Riyadh ha aperto da poco e copre gli assi principali. Per l\'Edge of the World serve un 4x4 con autista: l\'ultimo tratto è su pista ed è facile perdersi.',
    periodoMigliore:
      'da novembre a marzo. Nell\'interno il clima è secco, e 30 gradi si sopportano molto meglio dell\'umidità di Jeddah; ma d\'estate si superano i 45-50 e le notti d\'inverno scendono vicino allo zero.',
    costi: 'Diriyah ha un biglietto d\'ingresso per At-Turaif; il Museo Nazionale costa poco; l\'escursione all\'Edge of the World 300-600 riyal secondo la formula.',
    erroriDaEvitare: [
      'Andare all\'Edge of the World da soli con un\'auto normale: l\'ultimo tratto è pista, non c\'è segnaletica e il telefono prende a tratti',
      'Visitare Diriyah a mezzogiorno: il fango riverbera, e il bello è tutto nell\'ultima ora di luce',
      'Aspettarsi una città storica: Riyadh è stata costruita quasi tutta dopo gli anni Settanta, e la parte vecchia si riduce a Masmak e a pochi isolati',
      'Sottovalutare le distanze: Riyadh si estende per decine di chilometri e ogni spostamento richiede mezz\'ora',
    ],
    miaEsperienza:
      'Riyadh spiega il paese meglio di ogni altra città, ma per la velocità con cui è cambiata più che per quello che mostra. Il Masmak Fort, la fortezza di fango da cui nel 1902 partì la riconquista di Ibn Saud, è incastrato tra i grattacieli, e in mezzo ci sono poco più di cento anni. Quello che mi è rimasto, però, è Diriyah, mezz\'ora fuori città: la prima capitale dei Saud, costruita tutta in mattoni di fango, distrutta dagli ottomani nel 1818 e restaurata negli ultimi anni. Al tramonto i muri passano dall\'ocra all\'arancione, e il quartiere di At-Turaif, con i palazzi a più piani e i motivi triangolari sulle facciate, sembra fare tutt\'uno con la terra da cui è fatto. L\'altra tappa è l\'Edge of the World, e per una volta il nome non esagera. Dopo un\'ora e mezza di pista si arriva sul bordo di una scarpata che scende per trecento metri su una pianura che si perde all\'orizzonte, senza recinzioni, senza biglietto e con pochissima gente intorno. Servono un 4x4 e una guida, perché non c\'è segnaletica e il telefono non prende.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "At-Turaif a Diriyah",
        "testo": "Il quartiere della capitale del primo Stato saudita (1727-1818), patrimonio UNESCO dal 2010, costruito in mattoni di fango, distrutto nel 1818 dall'esercito ottomano-egiziano di Ibrahim Pascià e restaurato. Al tramonto i muri passano dall'ocra all'arancione.",
        "come": "Alla periferia nord-ovest di Riyadh, in taxi o Uber. Ingresso con biglietto da prenotare; si cammina nel sito.",
        "quando": "Ultima ora di luce.",
        "tempo": "2 ore",
        "consiglio": "Cenare nei locali di Bujairi Terrace per vedere il sito illuminato; anche Bujairi richiede un biglietto prenotato."
      },
      {
        "nome": "Museo Nazionale Saudita",
        "testo": "Un museo completo per capire la storia della penisola: otto sale, dalla geologia e dalla preistoria ai regni preislamici, all'islam, ai due Stati sauditi e all'unificazione del regno.",
        "come": "Taxi o Uber, nel quartiere di Al-Murabba, dentro il Centro storico Re Abdulaziz.",
        "quando": "Mattina. Orari sul posto o sui canali ufficiali.",
        "tempo": "2 ore"
      },
      {
        "nome": "Masmak Fort",
        "testo": "La fortezza di fango e mattoni crudi nel centro vecchio, da cui nel gennaio 1902 partì la riconquista di Riyadh da parte di Ibn Saud. Dal 1995 è un museo, con foto, mappe e armi.",
        "come": "Taxi o Uber, nel centro.",
        "quando": "Pomeriggio.",
        "tempo": "45 minuti"
      },
      {
        "nome": "Edge of the World",
        "testo": "Una lunga scarpata della catena del Tuwaiq sopra la pianura desertica, a circa 100 km da Riyadh, con viste molto ampie.",
        "come": "Con un tour organizzato o una guida locale. Chi va da solo ha bisogno di un 4x4, perché le strade sono sconnesse, e di tutto il necessario: la zona è selvaggia e senza servizi.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "Mezza giornata",
        "consiglio": "Andare con un tour e stare lontani dal bordo."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Museo Nazionale e Masmak Fort, sera nei quartieri nuovi",
          "Giorno 2: mattina Edge of the World, pomeriggio Diriyah al tramonto"
        ]
      }
    ],
    zone: [
      {
        "nome": "Olaya / centro",
        "perChi": "chi vuole stare vicino ai servizi",
        "testo": "Hotel moderni e centri commerciali."
      },
      {
        "nome": "Diriyah",
        "perChi": "chi vuole dormire vicino al sito storico",
        "testo": "Pochi hotel nuovi, tranquilli e curati."
      }
    ],
    sapori: [
      {
        "nome": "Kabsa",
        "testo": "Riso speziato con carne, il piatto principale del Najd."
      },
      {
        "nome": "Jareesh",
        "testo": "Grano spezzato cotto a lungo con carne, più asciutto della cucina di Jeddah."
      },
      {
        "nome": "Mutabbaq",
        "testo": "Sfoglia ripiena di carne o formaggio."
      },
      {
        "nome": "Caffè arabo",
        "testo": "Con cardamomo, ovunque."
      }
    ],
    attenzioni: [
      "Sicurezza: a novembre 2026 il governo britannico sconsiglia i viaggi non essenziali in tutta l'Arabia Saudita e qualsiasi viaggio entro 10 km dal confine con lo Yemen, per gli attacchi con missili e droni (anche sull'aeroporto di Riyadh). Controllare viaggiaresicuri.it e l'assicurazione prima di partire.",
      "Edge of the World: meglio andarci con un tour organizzato invece che da soli.",
      "Visitare Diriyah a mezzogiorno: il fango riverbera, il bello è nell'ultima ora di luce.",
      "Aspettarsi una città storica: Riyadh è in gran parte moderna.",
      "D'estate il caldo è estremo: venire tra novembre e marzo."
    ],
    // GUIDA-END
    esperienzeSlugs: ['diriyah', 'edge-of-the-world'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Le mura in mattoni crudi e la torre d\'angolo della fortezza di Masmak, Riyadh',
    immagine: '/images/arabia-saudita/riyadh-diriyah.jpg',
  },
  {
    slug: 'abha-asir',
    paeseSlug: 'arabia-saudita',
    ordine: 4,
    nome: 'Abha e le montagne dell\'Asir',
    tipologia: ['montagna', 'natura', 'cultura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il sud-ovest del paese, sopra i 2.000 metri: montagne verdi, nebbie, terrazze coltivate e villaggi di pietra aggrappati alle pareti. È la parte dell\'Arabia Saudita che smentisce ogni aspettativa, e l\'unica dove d\'estate si sta al fresco mentre il resto del Regno supera i 45 gradi.',
    percheAndarci:
      'Nessuno si aspetta che l\'Arabia Saudita abbia una regione di montagna, piovosa e coltivata a terrazze. E l\'architettura dell\'Asir, con le case dipinte, i villaggi verticali come Rijal Almaa e i "villaggi di pietra" sulle scarpate, non somiglia a niente altro nella penisola.',
    cosaVedere: [
      'Rijal Almaa, il villaggio di pietra e quarzo su più piani, candidato a patrimonio UNESCO',
      'Il parco nazionale dell\'Asir e il Jebel Sawda, il punto più alto del paese',
      'Habala, il villaggio sulla scarpata che un tempo si raggiungeva solo con scale di corda',
      'Le case dipinte di Abha, con i motivi geometrici colorati dipinti dalle donne (il qatt asiri, patrimonio immateriale UNESCO)',
      'I mercati di montagna, dove i venditori portano ancora le ghirlande di fiori sul capo',
    ],
    cosaFare: [
      'Una giornata a Rijal Almaa, con il museo nelle case restaurate',
      'La funivia dell\'Asir e i sentieri sul Jebel Sawda',
      'Il giro dei villaggi di montagna in auto, tra terrazze e nebbia',
      'Il mercato del bestiame e dei fiori, che qui è ancora l\'evento sociale della settimana',
    ],
    doveDormire:
      'Abha ha la normale offerta di una città, a prezzi contenuti; nei villaggi di montagna cominciano a comparire piccole strutture, ma sono ancora poche.',
    doveMangiare:
      'Per via dell\'agricoltura di montagna, la cucina dell\'Asir usa più cereali e verdure che nel resto del paese. Da provare l\'areeka, il pane con miele e burro chiarificato, e il miele dell\'Asir, il più pregiato della penisola, che nei mercati si vende a prezzi importanti.',
    comeArrivare:
      'Di solito con un volo interno su Abha (AHB) da Riyadh o Jeddah: via terra da Jeddah sono oltre 600 chilometri di strade di montagna.',
    comeSpostarsi: 'L\'auto a noleggio è indispensabile: i villaggi sono sparsi tra le montagne e non c\'è un trasporto pubblico utile.',
    periodoMigliore:
      'qui il calendario è al contrario rispetto al resto del paese. La stagione buona è l\'estate, fresca e verde; l\'inverno può essere freddo e nebbioso. Da giugno ad agosto l\'Asir si riempie di sauditi in fuga dal caldo, ed è anche il periodo più vivace.',
    costi: 'contenuti: tolto il volo interno, è una delle zone più economiche del Regno.',
    erroriDaEvitare: [
      'Programmarla d\'inverno aspettandosi il clima del resto del paese: a 2.200 metri fa freddo e c\'è nebbia',
      'Andarci senza auto: i villaggi sono sparsi su decine di chilometri di montagna',
      'Visitarla di corsa: è la regione dove l\'Arabia Saudita rallenta, e in un giorno si vede solo la strada',
      'Avvicinarsi alla zona di confine con lo Yemen, sconsigliata dagli avvisi ufficiali',
    ],
    miaEsperienza:
      'Ci siamo arrivati con il volo interno su Abha, e lassù è cambiato tutto: montagne verdi, nebbie, terrazzamenti coltivati. Il primo pomeriggio l\'abbiamo passato ad Abha, tra le case dipinte e il mercato. Il qatt asiri, i motivi geometrici colorati che le donne dipingono sugli interni delle case, è patrimonio immateriale UNESCO e non ha niente in comune con l\'austerità del Najd. Il giorno dopo l\'ho dedicato a Rijal Almaa, il villaggio di pietra e quarzo su più piani con le facciate che luccicano al sole, e nel pomeriggio abbiamo fatto il giro dei villaggi di montagna in auto, tra terrazzamenti e nebbia, fino a Habala, sulla scarpata. L\'ultima giornata è stata la più lenta: la funivia, i sentieri sul Jebel Sawda e il mercato del bestiame e dei fiori, dove i venditori portano le ghirlande sul capo. Da sapere: qui la stagione buona è l\'estate, quando il resto del Regno è invivibile e i sauditi salgono in massa a prendere il fresco.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Rijal Almaa",
        "testo": "Il villaggio di una sessantina di case-torre in pietra, argilla e legno sulle montagne dell'Asir, alcune fino a otto piani, con un museo del patrimonio di oltre duemila oggetti e documenti.",
        "come": "In auto da Abha, circa 50 km a ovest, su strada di montagna.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata"
      },
      {
        "nome": "Jebel Sawda e funivia dell'Asir",
        "testo": "Considerata la cima più alta del Paese, anche se le misure della quota non concordano. Ci si arriva in auto o con la funivia.",
        "come": "In auto da Abha.",
        "quando": "Mattina presto, quando le nuvole sono basse.",
        "tempo": "Mezza giornata"
      },
      {
        "nome": "Habala",
        "testo": "Il villaggio in una valle sotto la scarpata, che un tempo si raggiungeva solo con scale di corda: il nome viene dalla parola araba per «corda». Oggi ci si scende in funivia.",
        "come": "In auto da Abha, poi funivia.",
        "quando": "Pomeriggio; orari della funivia da verificare sul posto.",
        "tempo": "1,5 ore"
      },
      {
        "nome": "Abha e le case dipinte",
        "testo": "Il qatt asiri, i motivi geometrici colorati che le donne dipingono sulle pareti interne delle case, patrimonio immateriale UNESCO dal 2017.",
        "come": "A piedi o in taxi nel centro.",
        "quando": "Mattina.",
        "tempo": "2 ore"
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Abha e case dipinte",
          "Giorno 2: Rijal Almaa",
          "Giorno 3: Habala in funivia e Jebel Sawda"
        ]
      }
    ],
    zone: [
      {
        "nome": "Abha",
        "perChi": "chi vuole una base con servizi",
        "testo": "Hotel e ristoranti, base per le gite in montagna."
      },
      {
        "nome": "Villaggi di montagna",
        "perChi": "chi vuole quiete",
        "testo": "Poche guesthouse, serve l'auto."
      }
    ],
    sapori: [
      {
        "nome": "Areeka",
        "testo": "Pane con miele e burro chiarificato."
      },
      {
        "nome": "Miele dell'Asir",
        "testo": "Miele di montagna, nei mercati."
      },
      {
        "nome": "Cereali e verdure",
        "testo": "La cucina di montagna ne usa più che nel resto del paese."
      },
      {
        "nome": "Caffè arabo",
        "testo": "Con cardamomo."
      }
    ],
    attenzioni: [
      "Sicurezza: a novembre 2026 il governo britannico sconsiglia i viaggi non essenziali in tutta l'Arabia Saudita e qualsiasi viaggio entro 10 km dal confine con lo Yemen, per gli attacchi con missili e droni (anche sull'aeroporto di Riyadh). Controllare viaggiaresicuri.it e l'assicurazione prima di partire.",
      "Qui la stagione buona è l'estate, fresca e verde; l'inverno è freddo e nebbioso.",
      "Senza auto non si va: i villaggi sono sparsi su decine di chilometri.",
      "Visitarla di corsa: in un giorno si vede solo la strada.",
      "Zona di confine: il governo britannico sconsiglia qualsiasi viaggio entro 10 km dal confine con lo Yemen."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Le case di Abha tra il verde, viste dall\'alto nella foschia delle montagne dell\'Asir',
    immagine: '/images/arabia-saudita/abha-asir.jpg',
  },
  {
    slug: 'umluj-mar-rosso',
    immagine: '/images/arabia-saudita/umluj-mar-rosso.jpg',
    paeseSlug: 'arabia-saudita',
    ordine: 5,
    nome: 'Umluj e il Mar Rosso',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '2 giorni, come estensione tra Jeddah e AlUla',
    visitataPersonalmente: false,
    introduzione:
      'La costa settentrionale del Mar Rosso saudita, con un arcipelago di un centinaio di isole di sabbia bianca e reef corallini tra i meno danneggiati del pianeta, perché fino a pochi anni fa nessun turista poteva arrivarci. Con un\'esagerazione perdonabile la chiamano "le Maldive saudite".',
    percheAndarci:
      'Sono reef che non hanno subito decenni di pressione turistica. Ed è la parte del paese che cambia più in fretta: qui stanno sorgendo i grandi progetti costieri, e chi ci va adesso la vede prima.',
    cosaVedere: [
      'L\'arcipelago al largo di Umluj, con le isole di sabbia bianca e i banchi corallini',
      'I reef del Mar Rosso settentrionale, con una visibilità altissima',
      'La costa verso Al Wajh e la zona dei grandi progetti turistici in costruzione',
      'I villaggi di pescatori lungo la costa, la parte che sta sparendo più in fretta',
    ],
    cosaFare: [
      'Una giornata in barca tra le isole, con snorkeling sui reef',
      'Immersioni, in una scena subacquea ancora agli inizi e con pochissimi operatori',
      'Avvistamenti di delfini e, in stagione, di squali balena',
    ],
    doveDormire:
      'A Umluj l\'offerta è ancora scarsa e per lo più semplice; i grandi resort costieri in costruzione cambieranno del tutto il quadro. Molti fanno base a Yanbu, più attrezzata.',
    doveMangiare: 'Pesce, nei ristoranti dei porti e dei villaggi costieri, a prezzi bassi. È una zona non ancora turistica: poche scelte e nessun menu in inglese.',
    comeArrivare:
      'Con un volo interno su Yanbu o Al Wajh, oppure in auto da Jeddah: circa 5-6 ore di strada costiera, che si inseriscono bene nel tragitto verso AlUla.',
    comeSpostarsi: 'L\'auto propria è obbligatoria; le uscite in barca si organizzano al porto con gli operatori locali.',
    periodoMigliore:
      'da ottobre ad aprile. D\'estate caldo e umidità della costa rendono faticosa una giornata in barca, anche se l\'acqua resta ottima.',
    costi: 'uscite in barca a prezzi contenuti rispetto al Mar Rosso egiziano; alloggi economici finché i grandi progetti non saranno aperti.',
    erroriDaEvitare: [
      'Aspettarsi strutture turistiche: qui non ci sono ancora, ed è il pregio e insieme il limite della zona',
      'Contare su operatori di livello internazionale per le immersioni: la scena è agli inizi e va valutata caso per caso',
      'Dare per scontato l\'abbigliamento da spiaggia: fuori dai resort chiusi valgono le regole del paese, e sulle spiagge pubbliche si entra in acqua vestiti',
      'Programmarla senza auto',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e la scheda si ferma ai fatti invece di raccontare una giornata inventata. È in lista per un motivo che ha una scadenza. Questi reef sono tra i meno danneggiati del Mar Rosso perché fino al 2019 quasi nessun turista poteva arrivarci, e adesso su questa costa stanno nascendo alcuni dei più grandi progetti turistici mai avviati al mondo. Il periodo in cui Umluj resta un porto di pescatori con un centinaio di isole bianche davanti e nessuna struttura sarà, con ogni probabilità, breve. Va anche detto con onestà cosa comporta: niente servizi, pochi operatori, nessuno standard garantito, e le regole del paese valgono anche in spiaggia, dove sulle spiagge pubbliche si entra in acqua vestiti. Non è una meta balneare come la intendiamo noi: è una costa che si sta aprendo adesso.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Arcipelago di Umluj",
        "testo": "Isole di sabbia e banchi corallini al largo di Umluj, cittadina sulla costa. Il turismo qui è ancora poco sviluppato.",
        "come": "In barca da Umluj, con operatori locali.",
        "quando": "Nei mesi più freschi.",
        "tempo": "Una giornata"
      },
      {
        "nome": "Reef del Mar Rosso settentrionale",
        "testo": "Reef poco frequentati, perché il paese rilascia visti turistici solo dal settembre 2019. Snorkeling e immersioni con operatori locali.",
        "come": "Operatori locali, ancora pochi.",
        "quando": "Nei mesi più freschi.",
        "tempo": "Mezza giornata"
      }
    ],
    zone: [
      {
        "nome": "Umluj",
        "perChi": "chi vuole una base semplice",
        "testo": "Alloggi economici nel porto, senza strutture turistiche."
      }
    ],
    sapori: [
      {
        "nome": "Pesce",
        "testo": "Nei ristoranti dei porti e dei villaggi, a prezzi bassi."
      },
      {
        "nome": "Riso e carne",
        "testo": "Piatti semplici nei locali della costa."
      },
      {
        "nome": "Caffè arabo",
        "testo": "Con cardamomo."
      },
      {
        "nome": "Datteri",
        "testo": "Dalle oasi dell'interno."
      }
    ],
    attenzioni: [
      "Sicurezza: a novembre 2026 il governo britannico sconsiglia i viaggi non essenziali in tutta l'Arabia Saudita e qualsiasi viaggio entro 10 km dal confine con lo Yemen, per gli attacchi con missili e droni (anche sull'aeroporto di Riyadh). Controllare viaggiaresicuri.it e l'assicurazione prima di partire.",
      "Qui non ci sono ancora strutture turistiche: è il pregio e il limite della zona.",
      "Operatori subacquei di livello internazionale: la scena è agli inizi, da valutare caso per caso.",
      "Fuori dai resort valgono le regole del paese anche in spiaggia: abbigliamento modesto, informarsi sul posto."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Le case basse e bianche di Umluj viste dall\'alto, con il Mar Rosso blu all\'orizzonte',
  },
]
