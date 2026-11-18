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
    comeArrivare: "Volo internazionale sul King Abdulaziz (JED), il principale scalo dell'ovest saudita, dove atterra anche chi usa il visto stopover di Saudia o flynas. Per il centro la soluzione più pratica è Uber o Careem, circa 50-100 SAR (12-23 €) e 30-50 minuti fino ad Al-Balad o alla Corniche; i taxi ufficiali in fila costano circa 100-150 SAR. Il treno Haramain parte dal Terminal 1 per la stazione Al Sulaymaniyah, ma è lontana dal centro storico. Da evitare gli autisti senza licenza che si offrono agli arrivi.",
    comeSpostarsi:
      'Uber e Careem funzionano benissimo e costano poco: sono il mezzo normale. Al-Balad si gira a piedi, il resto della città no, perché le distanze sono da metropoli americana.',
    periodoMigliore:
      'da novembre a marzo. Per via del Mar Rosso Jeddah è calda e umida quasi tutto l\'anno, e d\'estate caldo e umidità insieme pesano anche per gli standard della regione.',
    costi: "Camminare per Al-Balad e sulla Corniche non costa niente, Hayy Jameel è gratuito, le case-museo hanno biglietti contenuti. Uber e Careem costano poco; gli hotel hanno prezzi da capitale. Budget giornaliero a persona, indicativo: basso 60-80 € (hotel semplice in doppia, Uber, cibo di quartiere); medio 130-180 € (hotel sulla Corniche, una cena di pesce, un museo); alto 300 € e oltre (resort a Obhur, uscita privata in barca).",
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
            perChi: 'Chiunque venga per la prima volta o abbia pochi giorni. Con un visto stopover di quattro giorni è l\'unica scelta sensata.',
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
        "consiglio": "Chiudere la visita nei vicoli del souq con un caffè arabo al cardamomo.",
        "orari": "Quartiere sempre aperto; negozi e banchi del souq chiudono durante le preghiere",
        "costo": "Ingresso libero (2026)",
        "lat": 21.48333,
        "lng": 39.18333
      },
      {
        "nome": "Casa Nassif",
        "testo": "Costruita tra il 1872 e il 1881 per il mercante Omar Nasseef, è la casa-torre più nota di Al-Balad: nel 1925 vi abitò Ibn Saud dopo l'ingresso a Jeddah. La rampa interna permetteva di far salire i cammelli ai piani alti. Oggi è un centro culturale con mostre e incontri.",
        "come": "Dentro Al-Balad, a piedi.",
        "quando": "Mattina o fine pomeriggio. Orari di apertura degli interni: chiedere sul posto.",
        "tempo": "45 minuti",
        "lat": 21.48389,
        "lng": 39.18778
      },
      {
        "nome": "Corniche, fontana di Re Fahd e moschea Al-Rahma",
        "testo": "Il lungomare della città, con la fontana di Re Fahd, il getto d'acqua più alto del mondo secondo il Guinness (312 metri), e la moschea Al-Rahma, detta «galleggiante» perché costruita sulla riva e con l'alta marea sembra posata sull'acqua. La sera le famiglie passeggiano e fanno picnic.",
        "come": "Taxi o Uber dal centro. Si passeggia sul lungomare.",
        "quando": "Tramonto e sera, soprattutto nel fine settimana.",
        "tempo": "2 ore",
        "consiglio": "Cenare a base di pesce in uno dei ristoranti della zona.",
        "orari": "Lungomare sempre aperto; la fontana funziona soprattutto la sera",
        "costo": "Gratis (2026)",
        "lat": 21.51556,
        "lng": 39.145
      },
      {
        "nome": "Moschea Al-Shafi'i",
        "testo": "Una delle moschee più antiche di Jeddah, con origini nel XIII secolo, nel quartiere Al-Mazloum di Al-Balad. Il minareto si vede dai vicoli intorno ed è uno dei punti di riferimento per orientarsi nel centro storico.",
        "come": "A piedi da Casa Nassif, pochi minuti nei vicoli.",
        "quando": "Fuori dagli orari di preghiera, vestiti coperti.",
        "tempo": "20 minuti",
        "lat": 21.48611,
        "lng": 39.1875,
        "consiglio": "I non musulmani di solito la guardano dall'esterno: chiedere sul posto prima di entrare."
      },
      {
        "nome": "Souq Al-Alawi",
        "testo": "La strada-mercato che attraversa Al-Balad, ancora in attività: spezie, incenso, tessuti, datteri e caffè. È il modo più semplice di vedere il quartiere vissuto, non solo restaurato.",
        "come": "A piedi, dentro Al-Balad.",
        "quando": "Tardo pomeriggio e dopo la preghiera del tramonto, quando i negozi riaprono.",
        "tempo": "1 ora",
        "orari": "Negozi chiusi durante le preghiere",
        "costo": "Ingresso libero (2026)",
        "lat": 21.48421,
        "lng": 39.1875,
        "consiglio": "Portare contanti per i banchi più piccoli."
      },
      {
        "nome": "Bab Makkah",
        "testo": "La porta orientale della città vecchia, da cui partiva la strada per La Mecca. Intorno c'è uno dei mercati più popolari di Al-Balad, con frutta, dolci e cibo di strada.",
        "come": "A piedi dal souq Al-Alawi, verso est.",
        "quando": "Sera.",
        "tempo": "30-45 minuti",
        "costo": "Ingresso libero (2026)",
        "lat": 21.48526,
        "lng": 39.1927
      },
      {
        "nome": "Casa-museo Matbouli",
        "testo": "Una casa di Al-Balad aperta come museo: uno dei pochi modi per vedere l'interno di una casa-torre del quartiere.",
        "come": "A piedi, vicino al souq Al-Alawi.",
        "quando": "Pomeriggio; orari da chiedere sul posto.",
        "tempo": "45 minuti",
        "lat": 21.48499,
        "lng": 39.18884
      },
      {
        "nome": "Museo del Mar Rosso",
        "testo": "Aperto il 6 dicembre 2025 nell'edificio restaurato di Bab Al-Bunt, l'antica porta a mare di Jeddah, sul bordo di Al-Balad. Oltre mille oggetti in 23 sale raccontano il Mar Rosso: commerci, pellegrinaggio, navigazione e natura.",
        "come": "Taxi o Uber fino al lungomare di Al-Balad, poi a piedi.",
        "quando": "Mattina o primo pomeriggio, prima del giro nel quartiere al tramonto.",
        "tempo": "1,5-2 ore",
        "consiglio": "Vederlo prima di Al-Balad: aiuta a capire da dove arrivavano il legno dei rawashin e i pellegrini."
      },
      {
        "nome": "Moschea Al-Rahma",
        "testo": "La «moschea galleggiante», del 1985, costruita sul bordo del mare lungo la Corniche nord: con l'alta marea sembra posata sull'acqua. Ha una cupola principale e 52 cupole più piccole.",
        "come": "Taxi o Uber sulla Corniche nord, circa 30 minuti da Al-Balad.",
        "quando": "Al tramonto, per la luce sull'acqua.",
        "tempo": "30 minuti",
        "lat": 21.6486,
        "lng": 39.1008,
        "consiglio": "Abiti coperti; le donne portano un velo se entrano."
      },
      {
        "nome": "Museo Tayebat",
        "testo": "Un grande complesso privato costruito in stile hijazi, con sale su storia della penisola, archeologia, monete, costumi tradizionali e arte islamica. Utile per vedere come erano arredati gli interni delle case dell'Hijaz.",
        "come": "Taxi o Uber, quartiere Al-Faisaliyah.",
        "quando": "Mattina.",
        "tempo": "2 ore",
        "orari": "Domenica-giovedì 8-21",
        "lat": 21.58064,
        "lng": 39.17655
      },
      {
        "nome": "Hayy Jameel",
        "testo": "Il centro per le arti contemporanee di Art Jameel, aperto nel 2021: mostre, cinema, biblioteca, laboratori e caffè. È il posto migliore per vedere la scena artistica saudita di oggi.",
        "come": "Taxi o Uber, quartiere Al-Muhammadiyah, nel nord della città.",
        "quando": "Pomeriggio o sera.",
        "tempo": "1,5 ore",
        "orari": "Tutti i giorni 14-22; chiuso il martedì",
        "costo": "Ingresso libero (2026)",
        "url": "https://hayyjameel.org/visit/"
      },
      {
        "nome": "Sharm Obhur",
        "testo": "L'insenatura a nord della città, una vecchia valle fluviale invasa dal mare, con marina, club nautici e spiagge private. Sullo sfondo si vede il cantiere della Jeddah Tower, che a novembre 2026 ha superato i 480 metri.",
        "come": "Taxi o Uber, circa 30 km e mezz'ora da Al-Balad.",
        "quando": "Mattina per il mare, tramonto per la vista.",
        "tempo": "Mezza giornata",
        "lat": 21.7167,
        "lng": 39.1167,
        "consiglio": "Le spiagge migliori sono a pagamento e dentro resort o club: informarsi prima su regole di accesso e abbigliamento."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Museo del Mar Rosso",
          "Pomeriggio: Al-Balad, Casa Nassif e moschea Al-Shafi'i",
          "Tramonto nel souq Al-Alawi fino a Bab Makkah",
          "Sera: Corniche, fontana di Re Fahd e cena di pesce"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: mattina a Sharm Obhur o in barca sui reef, pomeriggio a Hayy Jameel, tramonto alla moschea Al-Rahma"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2: come sopra",
          "Giorno 3: Museo Tayebat la mattina, Casa-museo Matbouli e un secondo giro di Al-Balad, giovedì sera sulla Corniche con le famiglie"
        ]
      }
    ],
    zone: [
      {
        "nome": "Al-Balad",
        "perChi": "chi vuole dormire nel centro storico",
        "testo": "Poche strutture, ricavate in case antiche restaurate. Si esce a piedi nei vicoli al tramonto, ma il mare e i quartieri nuovi sono lontani."
      },
      {
        "nome": "Corniche",
        "perChi": "chi vuole mare e comodità",
        "testo": "Hotel e resort sul lungomare, con ristoranti di pesce e passeggiate serali. Per Al-Balad servono 15-30 minuti di taxi."
      },
      {
        "nome": "Quartieri nuovi",
        "perChi": "chi preferisce hotel internazionali",
        "testo": "Torri di vetro e catene internazionali lungo le grandi arterie del nord: comode e con molti servizi, ma da qui ci si sposta solo in auto."
      },
      {
        "nome": "Obhur",
        "perChi": "chi vuole mare e attività in barca",
        "testo": "Resort e club con spiaggia privata sull'insenatura a nord. Lontano dal centro, circa mezz'ora da Al-Balad."
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
    gite: [
      {
        "nome": "Reef del Mar Rosso in barca",
        "distanza": "30 km, circa 30 minuti fino a Obhur",
        "come": "Uscite di snorkeling o immersione con i diving center e i club nautici di Obhur, da prenotare uno o due giorni prima.",
        "testo": "Al largo di Jeddah ci sono reef molto meno frequentati di quelli egiziani. Mezza giornata basta per due tuffi e il rientro prima del caldo."
      },
      {
        "nome": "Umluj",
        "distanza": "circa 5-6 ore di strada verso nord",
        "come": "In auto lungo la costa, meglio con almeno una notte sul posto.",
        "testo": "Un arcipelago di isole di sabbia bianca e reef quasi intatti, ancora senza strutture turistiche. Non è una gita in giornata: ha senso come tappa verso AlUla."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Jeddah?",
        "risposta": "Due giorni bastano per Al-Balad, la Corniche e una mattina al mare. Con tre si aggiungono i musei e Hayy Jameel senza correre."
      },
      {
        "domanda": "I non musulmani possono visitare Jeddah?",
        "risposta": "Sì, Jeddah è aperta a tutti. È La Mecca, a circa 80 km, a essere vietata ai non musulmani: le autostrade indicano le deviazioni obbligatorie."
      },
      {
        "domanda": "Qual è il momento migliore per Al-Balad?",
        "risposta": "Il tardo pomeriggio, un'ora e mezza prima del tramonto. A mezzogiorno il quartiere è vuoto e la luce piatta; dopo la preghiera del tramonto i negozi riaprono."
      },
      {
        "domanda": "Come ci si muove in città?",
        "risposta": "Con Uber o Careem, che costano poco e funzionano bene. Al-Balad si gira a piedi, il resto della città no: le distanze sono enormi."
      },
      {
        "domanda": "Ci si può fare il bagno a Jeddah?",
        "risposta": "Sì, ma le spiagge migliori sono dentro resort e club a pagamento, soprattutto a Obhur. Sulle spiagge pubbliche valgono le regole di abbigliamento del paese."
      },
      {
        "domanda": "Quando conviene andare?",
        "risposta": "Da novembre a marzo. Il resto dell'anno caldo e umidità del Mar Rosso rendono pesante anche una passeggiata serale."
      }
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
    comeArrivare: "Di solito con un volo interno su AlUla (ULH): circa un'ora e mezza da Jeddah e due ore da Riyadh, con Saudia e flynas. All'arrivo conviene ritirare l'auto a noleggio, da prenotare prima in alta stagione. In alternativa ci sono circa 7 ore di strada da Jeddah e 3-4 da Medina: le strade sono ottime e la benzina costa pochissimo.",
    comeSpostarsi:
      'Ad AlUla c\'è un servizio di navette tra i siti principali; per il resto serve l\'auto. **A Hegra non si entra con il proprio mezzo**: si accede solo con i bus e le guide del sito.',
    periodoMigliore:
      'da ottobre a marzo; i mesi migliori sono dicembre e febbraio, con temperature tra i 12 e i 25 gradi. D\'estate si va ben oltre i 40 e la visita diventa impossibile. Le notti nel deserto sono fredde anche d\'inverno.',
    costi: "Hegra Day Tour 95 SAR (circa 22 €), tour Dadan e Jabal Ikmah da 60 SAR (circa 14 €), oasi, AlJadidah e Harrat Viewpoint gratuiti. Gli alloggi sono la voce più cara di tutto il viaggio in Arabia Saudita. Budget giornaliero a persona, indicativo: basso 90-120 € (albergo semplice nella città nuova, auto in comune, un tour); medio 180-260 € (hotel di livello, due tour, cene ad AlJadidah); alto 500 € e oltre (resort nel deserto, tour privati in 4x4).",
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
        "costo": "Hegra Day Tour con guida 95 SAR a persona, circa 22 €; Hegra Premium Tour in 4x4 privato da 1.000 SAR a veicolo, circa 230 € (2026)",
        "lat": 26.79167,
        "lng": 37.95278
      },
      {
        "nome": "Jabal Ikmah",
        "testo": "Un canyon con centinaia di iscrizioni incise nell'arenaria, soprattutto in dadanitico e in altre antiche lingue nord-arabiche, quasi tutte della seconda metà del I millennio a.C.",
        "come": "Con il tour Dadan e Jabal Ikmah: si parcheggia gratis al Winter Park di AlUla e un bus porta al centro visitatori di Dadan, poi a Jabal Ikmah e ritorno.",
        "quando": "Mattina, quando la luce radente fa risaltare le incisioni.",
        "tempo": "1-1,5 ore",
        "url": "https://www.experiencealula.com/en/places-to-go/jabal-ikmah",
        "costo": "Tour Dadan e Jabal Ikmah da 60 SAR a persona, circa 14 €, circa 2 ore (2026)",
        "lat": 26.695,
        "lng": 37.8839
      },
      {
        "nome": "Dadan",
        "testo": "La capitale dei regni di Dadan e Lihyan, oltre duemila anni fa, sulla Via dell'Incenso, con le tombe scavate nella parete rossa: alcune hanno leoni seduti scolpiti nella roccia e si pensa fossero dell'élite.",
        "come": "Con lo stesso tour di Jabal Ikmah, che parte dal Winter Park; non si può andare da soli in auto. Tour limitati, meglio prenotare online.",
        "quando": "Mattina.",
        "tempo": "1,5 ore",
        "url": "https://www.experiencealula.com/en/places-to-go/dadan",
        "consiglio": "Di solito si abbina a Jabal Ikmah.",
        "costo": "Compreso nel tour Dadan e Jabal Ikmah (da 60 SAR, circa 14 €, 2026)",
        "lat": 26.64676,
        "lng": 37.91393
      },
      {
        "nome": "Città vecchia di AlUla ed Elephant Rock",
        "testo": "Il borgo di vicoli e case di fango, abitato dal XII secolo sulla via dei pellegrini tra Damasco e la Mecca, oggi restaurato con negozi e ristoranti; e la roccia a forma di elefante, dove ci si trova al tramonto.",
        "come": "La città vecchia si gira a piedi; Elephant Rock è poco fuori città, in auto, con parcheggio gratuito e una passerella di legno.",
        "quando": "Città vecchia dal pomeriggio alla sera; Elephant Rock aperta tutti i giorni dalle 16 a mezzanotte (2026), al meglio al tramonto.",
        "tempo": "2 ore",
        "consiglio": "Sulla roccia non si sale; la sera nel deserto fa freddo e ci sono bracieri accesi.",
        "costo": "Città vecchia a ingresso libero, visita guidata 70 SAR, circa 16 € (2026); Elephant Rock con parcheggio gratuito",
        "url": "https://www.experiencealula.com/en/places-to-go/alula-old-town",
        "orari": "Città vecchia dalle 8-9 del mattino, negozi fino alle 23 e ristoranti fino all'una; Elephant Rock tutti i giorni 16-24",
        "lat": 26.61667,
        "lng": 37.91667
      },
      {
        "nome": "Qasr al-Farid",
        "testo": "La «tomba solitaria», la più fotografata di Hegra: una facciata nabatea scolpita in un unico masso isolato nel deserto. È rimasta incompiuta, e la parte bassa ancora grezza mostra che lavoravano dall'alto verso il basso.",
        "come": "Solo con il tour di Hegra, che ci fa sosta.",
        "quando": "Tardo pomeriggio, quando la luce scalda l'arenaria.",
        "tempo": "20-30 minuti, dentro il tour",
        "costo": "Compresa nel tour di Hegra (2026)",
        "lat": 26.77397,
        "lng": 37.96122,
        "url": "https://www.experiencealula.com/en/places-to-go/hegra"
      },
      {
        "nome": "Oasi di AlUla",
        "testo": "Il palmeto che dà da vivere alla valle: le palme producono oltre 90.000 tonnellate di datteri l'anno, e tra i campi crescono anche agrumi ed erbe. Circa 6 km di sentieri segnalati passano tra case di fango abbandonate, fattorie in attività e antiche mura.",
        "come": "A piedi o in bici; parcheggi gratuiti, i più comodi sono Heart of the Oasis e North Parking vicino ad AlJadidah.",
        "quando": "Mattina presto o tardo pomeriggio, all'ombra.",
        "tempo": "1,5-2 ore",
        "orari": "Sentieri aperti giorno e notte",
        "costo": "Ingresso libero; Oasis Heritage Trail con guida 35 SAR, circa 8 € (2026)",
        "lat": 26.62696,
        "lng": 37.91683,
        "url": "https://www.experiencealula.com/en/places-to-go/alula-oasis",
        "consiglio": "I datteri si comprano a peso direttamente dai produttori."
      },
      {
        "nome": "AlJadidah Arts District",
        "testo": "Il quartiere pedonale dell'arte, a due passi dalla città vecchia: murales, gallerie, mostre temporanee, un cinema all'aperto e una pista di pattinaggio. La sera è il posto più vivo di AlUla, con caffè, ristoranti e food truck.",
        "come": "A piedi dalla città vecchia; parcheggio gratuito al North Parking, con navetta.",
        "quando": "Dalle 16 in poi, quando si anima.",
        "tempo": "1-2 ore",
        "orari": "Ristoranti, food truck e negozi spesso aperti almeno fino a mezzanotte",
        "costo": "Ingresso libero (2026)",
        "lat": 26.63195,
        "lng": 37.91184,
        "url": "https://www.experiencealula.com/en/places-to-go/aljadidah-arts-district"
      },
      {
        "nome": "Harrat Viewpoint",
        "testo": "Un belvedere a 1.219 metri sull'Harrat Uwayrid, un campo di lava sopra la valle: da qui si vedono l'oasi, Dadan e la città vecchia. Ci sono telescopi per guardare le stelle dopo il tramonto.",
        "come": "In auto, circa 30 minuti dalla città vecchia, parcheggio gratuito; è anche una tappa di molti tour.",
        "quando": "Tramonto, poi restare per le stelle.",
        "tempo": "1-1,5 ore",
        "orari": "Tutti i giorni 14-22",
        "costo": "Ingresso libero, senza prenotazione (2026)",
        "lat": 26.63181,
        "lng": 37.89725,
        "url": "https://www.experiencealula.com/en/places-to-go/harrat-viewpoint",
        "consiglio": "Portare cappello e giacca: la sera lassù tira vento e fa freddo."
      },
      {
        "nome": "Maraya",
        "testo": "L'edificio rivestito di specchi nella valle di Ashar, il più grande del mondo: 9.740 pannelli che riflettono le rocce intorno. Ospita concerti ed eventi, con una sala da 500 posti.",
        "come": "In auto, circa 20 minuti dal centro di AlUla. L'interno si vede solo con il tour dedicato o con un evento.",
        "quando": "Tardo pomeriggio, quando il riflesso delle rocce è più caldo.",
        "tempo": "30-45 minuti",
        "lat": 26.74315,
        "lng": 37.86528,
        "url": "https://www.experiencealula.com/en/places-to-go/maraya"
      },
      {
        "nome": "Riserva naturale di Sharaan",
        "testo": "Un'area protetta di 1.500 km² a nord-est di Hegra, con canyon di roccia rossa e valli fiorite. Ci vivono stambecchi nubiani, gazzelle e struzzi; un giorno dovrebbe tornarci anche il leopardo arabo.",
        "come": "Solo con safari in 4x4 o escursioni guidate, circa 45 minuti dalla città vecchia. Bambini dagli 8 anni.",
        "quando": "Mattina presto o tardo pomeriggio, nei mesi freschi; d'estate le attività si fermano.",
        "tempo": "3-7 ore secondo il tour",
        "costo": "Hidden Valley Hike da 304 SAR a persona, circa 70 €; safari con cena da 1.295 SAR, circa 300 € (2026)",
        "lat": 26.8663,
        "lng": 38.24419,
        "url": "https://www.experiencealula.com/en/places-to-go/sharaan-nature-reserve",
        "consiglio": "Vestiti color sabbia o verde e una giacca: all'alba fa freddo."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Hegra con il Day Tour e la Qasr al-Farid",
          "Pomeriggio: oasi di AlUla all'ombra",
          "Tramonto a Elephant Rock, cena ad AlJadidah"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Hegra con visita guidata, tramonto a Elephant Rock",
          "Giorno 2: Jabal Ikmah e Dadan in mattinata, città vecchia e oasi nel pomeriggio, tramonto all'Harrat Viewpoint"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2: come sopra",
          "Giorno 3: escursione nella riserva di Sharaan al mattino, Maraya nel pomeriggio, sera ad AlJadidah"
        ]
      }
    ],
    zone: [
      {
        "nome": "Città nuova di AlUla",
        "perChi": "chi vuole prezzi normali",
        "testo": "Alberghi di quartiere e locali a prezzi più bassi, a 10-30 minuti di auto dai siti. Serve comunque l'auto."
      },
      {
        "nome": "Resort nel deserto",
        "perChi": "chi vuole il lusso",
        "testo": "Poche strutture di alto livello nelle valli di Ashar e dintorni, molto care e da prenotare mesi prima per dicembre-febbraio."
      },
      {
        "nome": "Città vecchia",
        "perChi": "chi vuole l'atmosfera storica",
        "testo": "Ristoranti e caffè nella parte restaurata e ad AlJadidah, a piedi; gli alloggi sono pochi."
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
    gite: [
      {
        "nome": "Tayma",
        "distanza": "185 km, circa 2 ore e 45 di auto",
        "come": "In auto verso nord-est su strada asfaltata, andata e ritorno in giornata.",
        "testo": "Una delle oasi più antiche della penisola, dove nel VI secolo a.C. si ritirò per anni il re babilonese Nabonedo. Restano mura antiche e pozzi."
      },
      {
        "nome": "Khaybar",
        "distanza": "265 km, circa 3 ore e 20 di auto",
        "come": "In auto verso sud-est; meglio con una notte, viste le distanze.",
        "testo": "Un'oasi circondata da campi di lava nera, con una fortezza e i resti di mura antiche: il paesaggio vulcanico è l'opposto dell'arenaria di AlUla."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono ad AlUla?",
        "risposta": "Tre giorni sono la misura giusta: uno per Hegra, uno per Jabal Ikmah, Dadan e la città vecchia, uno per Sharaan o l'Harrat Viewpoint. Con due si vede l'essenziale."
      },
      {
        "domanda": "Si può visitare Hegra da soli?",
        "risposta": "No. Si entra solo con tour guidati a numero limitato, il Day Tour in bus da 95 SAR o il Premium in 4x4 privato. Conviene prenotare online settimane prima."
      },
      {
        "domanda": "Serve l'auto ad AlUla?",
        "risposta": "Quasi sempre sì: i siti sono sparsi su decine di chilometri e i tour partono da punti diversi. Per Hegra, Dadan e Jabal Ikmah il trasporto interno al sito è compreso nel tour."
      },
      {
        "domanda": "Quando andare ad AlUla?",
        "risposta": "Da ottobre a marzo, meglio tra dicembre e febbraio. D'estate si superano i 40 gradi e molte attività si fermano."
      },
      {
        "domanda": "AlUla è come Petra?",
        "risposta": "Sono entrambe nabatee, ma Hegra ha meno tombe, niente Siq e niente Tesoro. In cambio ci sono pochissimi visitatori e iscrizioni ancora leggibili."
      },
      {
        "domanda": "Si dorme bene ad AlUla senza spendere troppo?",
        "risposta": "Le strutture sono poche e care. Le più economiche sono nella città nuova; in alta stagione vanno prenotate con largo anticipo."
      }
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
    comeArrivare: "In aereo sul King Khalid International (RUH), con voli diretti dall'Europa; da Jeddah il volo interno dura circa 2 ore, come da AlUla. Dall'aeroporto la linea 4 gialla della metro va in città per circa 4 SAR (meno di 1 €), con l'app Darb o la carta; Uber e Careem costano circa 60-100 SAR (14-23 €). Da evitare gli autisti senza licenza agli arrivi.",
    comeSpostarsi:
      'Con Uber e Careem, il mezzo normale, che costano poco. La metropolitana di Riyadh ha aperto da poco e copre gli assi principali. Per l\'Edge of the World serve un 4x4 con autista: l\'ultimo tratto è su pista ed è facile perdersi.',
    periodoMigliore:
      'da novembre a marzo. Nell\'interno il clima è secco, e 30 gradi si sopportano molto meglio dell\'umidità di Jeddah; ma d\'estate si superano i 45-50 e le notti d\'inverno scendono vicino allo zero.',
    costi: "At-Turaif circa 100 SAR (23 €), Museo Nazionale e Masmak gratuiti, Edge of the World con tour 300-600 SAR (70-140 €). Uber costa poco, gli hotel hanno prezzi da capitale. Budget giornaliero a persona, indicativo: basso 60-90 € (hotel semplice in doppia, metro e Uber, ristoranti popolari); medio 140-200 € (hotel a Olaya, Diriyah, cena nei quartieri nuovi); alto 350 € e oltre (hotel a Diriyah, tour privato, cene a Bujairi).",
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
        "consiglio": "Cenare nei locali di Bujairi Terrace per vedere il sito illuminato; anche Bujairi richiede un biglietto prenotato.",
        "orari": "Fino a mezzanotte; il venerdì dalle 14",
        "costo": "Circa 100 SAR, circa 23 € (2026), biglietto su diriyah.sa",
        "url": "https://www.diriyah.sa",
        "lat": 24.73333,
        "lng": 46.57556
      },
      {
        "nome": "Museo Nazionale Saudita",
        "testo": "Un museo completo per capire la storia della penisola: otto sale, dalla geologia e dalla preistoria ai regni preislamici, all'islam, ai due Stati sauditi e all'unificazione del regno.",
        "come": "Taxi o Uber, nel quartiere di Al-Murabba, dentro il Centro storico Re Abdulaziz.",
        "quando": "Mattina, prima di Diriyah.",
        "tempo": "2 ore",
        "orari": "9-19; giovedì e venerdì 14-22; chiuso la domenica",
        "costo": "Ingresso gratuito (2026)",
        "lat": 24.64572,
        "lng": 46.71087,
        "consiglio": "Vederlo prima di Diriyah: dà il contesto per capire At-Turaif."
      },
      {
        "nome": "Masmak Fort",
        "testo": "La fortezza di fango e mattoni crudi nel centro vecchio, da cui nel gennaio 1902 partì la riconquista di Riyadh da parte di Ibn Saud. Dal 1995 è un museo, con foto, mappe e armi.",
        "come": "Taxi o Uber, nel centro.",
        "quando": "Pomeriggio.",
        "tempo": "45 minuti",
        "orari": "Chiuso a metà giornata, riapre nel pomeriggio",
        "costo": "Ingresso gratuito (2026)",
        "lat": 24.63125,
        "lng": 46.71333
      },
      {
        "nome": "Edge of the World",
        "testo": "Una lunga scarpata della catena del Tuwaiq sopra la pianura desertica, a circa 100 km da Riyadh, con viste molto ampie.",
        "come": "Con un tour organizzato o una guida locale. Chi va da solo ha bisogno di un 4x4, perché le strade sono sconnesse, e di tutto il necessario: la zona è selvaggia e senza servizi.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "Mezza giornata",
        "consiglio": "Andare con un tour e stare lontani dal bordo.",
        "costo": "Nessun biglietto; tour in 4x4 con autista 300-600 SAR, circa 70-140 € secondo la formula (2026)",
        "lat": 24.95004,
        "lng": 46.00264
      },
      {
        "nome": "Bujairi Terrace",
        "testo": "Il quartiere di ristoranti e caffè affacciato su At-Turaif, dall'altra parte del wadi Hanifa. Da qui si vedono le mura di fango illuminate dopo il tramonto.",
        "come": "A piedi da At-Turaif; anche Bujairi richiede un biglietto prenotato.",
        "quando": "Sera, dopo la visita ad At-Turaif.",
        "tempo": "1,5-2 ore",
        "lat": 24.73579,
        "lng": 46.57586,
        "url": "https://www.diriyah.sa",
        "consiglio": "È caro: per la vista basta un caffè sulla terrazza."
      },
      {
        "nome": "Souq Al-Zal",
        "testo": "Il mercato tradizionale accanto al Masmak, con tappeti, incenso, abiti, pugnali e oggetti antichi. È la parte della città che più somiglia alla Riyadh di prima dei grattacieli.",
        "come": "A piedi dal Masmak.",
        "quando": "Dopo la preghiera del pomeriggio, quando riapre e si anima.",
        "tempo": "1 ora",
        "orari": "Negozi chiusi durante le preghiere",
        "costo": "Ingresso libero (2026)",
        "lat": 24.62897,
        "lng": 46.71224,
        "consiglio": "Si contratta, soprattutto sui tappeti."
      },
      {
        "nome": "Piazza Deira e Grande Moschea Imam Turki",
        "testo": "La piazza del vecchio centro, accanto al palazzo Al-Hukm e alla Grande Moschea Imam Turki bin Abdullah: fondata intorno al 1830 e ricostruita nel 1992 in stile najdi, accoglie 17.000 fedeli. La pietra calcarea di Riyadh la sera diventa dorata.",
        "come": "A piedi dal Masmak e dal souq Al-Zal.",
        "quando": "Sera, quando rinfresca e la moschea è illuminata.",
        "tempo": "30 minuti",
        "costo": "Ingresso libero (2026)",
        "lat": 24.63088,
        "lng": 46.71184
      },
      {
        "nome": "Palazzo Murabba",
        "testo": "Il palazzo «quadrato» costruito fuori dalle mura della città vecchia: dal 1938 al 1953 fu residenza e ufficio di re Abdulaziz. Dal 1999 è un museo, dentro il Centro storico Re Abdulaziz, lo stesso del Museo Nazionale.",
        "come": "A piedi dal Museo Nazionale.",
        "quando": "Pomeriggio, abbinato al museo.",
        "tempo": "45 minuti",
        "lat": 24.6465,
        "lng": 46.7093
      },
      {
        "nome": "Kingdom Centre e Sky Bridge",
        "testo": "Il grattacielo di 302 metri e 99 piani con il grande foro in cima, simbolo della Riyadh moderna. Lo Sky Bridge, la passerella sospesa tra le due punte, dà la vista più ampia sulla città.",
        "come": "Taxi o Uber, quartiere Olaya; biglietteria al piano terra, ascensori dal centro commerciale.",
        "quando": "Al tramonto, con il cielo limpido.",
        "tempo": "1 ora",
        "lat": 24.71138,
        "lng": 46.67435
      },
      {
        "nome": "Torre Al-Faisaliah",
        "testo": "Il primo grattacielo saudita, del 2000, progettato da Foster + Partners: 267 metri, con la sfera di vetro vicino alla cima. Fino al 2002 è stato l'edificio più alto del paese.",
        "come": "Taxi o Uber, quartiere Olaya, a pochi minuti dal Kingdom Centre.",
        "quando": "Sera, quando è illuminata.",
        "tempo": "30 minuti",
        "lat": 24.69004,
        "lng": 46.68521
      },
      {
        "nome": "King Abdullah Financial District",
        "testo": "Il distretto finanziario nel nord della città, con torri progettate da studi internazionali e strade pedonali. È il posto dove si vede meglio la Riyadh che sta nascendo adesso.",
        "come": "Metro (stazione KAFD) o Uber.",
        "quando": "Sera, per passeggiare.",
        "tempo": "1 ora",
        "lat": 24.76281,
        "lng": 46.64031
      },
      {
        "nome": "Wadi Hanifa",
        "testo": "La valle che attraversa Riyadh per 120 km da nord-ovest a sud-est: lungo il suo corso sorgono Diriyah, Uyaynah e altri villaggi storici. Nel tratto cittadino ci sono parchi e sentieri lungo il letto del wadi.",
        "come": "In auto o Uber fino ai parchi lungo il wadi.",
        "quando": "Tardo pomeriggio, nei mesi freschi.",
        "tempo": "1-2 ore",
        "lat": 24.5809,
        "lng": 46.71311
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Museo Nazionale e Palazzo Murabba",
          "Pomeriggio: Masmak, souq Al-Zal e piazza Deira",
          "Tramonto e sera: At-Turaif e cena a Bujairi Terrace"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: mattina lungo il Wadi Hanifa, pomeriggio all'Edge of the World in 4x4 fino al tramonto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2: come sopra",
          "Giorno 3: Kingdom Centre e Sky Bridge, torre Al-Faisaliah, sera al King Abdullah Financial District"
        ]
      }
    ],
    zone: [
      {
        "nome": "Olaya / centro",
        "perChi": "chi vuole stare vicino ai servizi",
        "testo": "Hotel moderni, centri commerciali e ristoranti lungo King Fahd Road. È la base più comoda per metro e Uber; per Diriyah servono circa 30 minuti."
      },
      {
        "nome": "Diriyah",
        "perChi": "chi vuole dormire vicino al sito storico",
        "testo": "Pochi hotel nuovi, tranquilli e curati, a pochi passi da At-Turaif e Bujairi. Lontani dal centro: ogni spostamento in città è un viaggio."
      },
      {
        "nome": "Al-Murabba e vecchio centro",
        "perChi": "chi vuole stare vicino ai musei",
        "testo": "Hotel più semplici vicino al Museo Nazionale, al Masmak e al souq Al-Zal. La sera il quartiere è meno animato delle zone nuove."
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
    gite: [
      {
        "nome": "Ushaiger",
        "distanza": "211 km, circa 2 ore e mezza di auto",
        "come": "In auto verso nord-ovest, oppure con un tour di giornata da Riyadh.",
        "testo": "Uno dei villaggi più antichi del Najd, tappa dei pellegrini diretti alla Mecca e luogo d'origine della famiglia Al Thani, che regna in Qatar. Case di fango restaurate, vicoli e palmeti."
      },
      {
        "nome": "Riserva Re Khalid (Thumamah)",
        "distanza": "74 km, circa un'ora di auto",
        "come": "In auto o Uber verso nord-est.",
        "testo": "L'ex tenuta di re Khalid, oggi area protetta tra dune e pianure: il posto dove gli abitanti di Riyadh vanno a fare picnic nel deserto nei mesi freschi."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Riyadh?",
        "risposta": "Due giorni per i musei del centro, Diriyah e l'Edge of the World. Con un terzo giorno si aggiungono il Kingdom Centre e i quartieri nuovi."
      },
      {
        "domanda": "Si può andare all'Edge of the World da soli?",
        "risposta": "Si può, ma non conviene: l'ultimo tratto è pista senza segnaletica, il telefono prende a tratti e serve un 4x4. Un tour con autista costa 300-600 SAR."
      },
      {
        "domanda": "Serve prenotare Diriyah?",
        "risposta": "Sì, il biglietto per At-Turaif, circa 100 SAR, si compra online su diriyah.sa; anche Bujairi Terrace richiede un biglietto prenotato."
      },
      {
        "domanda": "Come ci si muove a Riyadh?",
        "risposta": "Con Uber o Careem, che costano poco, e con la metropolitana sugli assi principali. A piedi si gira solo il vecchio centro attorno al Masmak."
      },
      {
        "domanda": "Il Museo Nazionale è a pagamento?",
        "risposta": "No, l'ingresso è gratuito. È chiuso la domenica, aperto 9-19 e il giovedì e venerdì 14-22."
      },
      {
        "domanda": "Quando andare a Riyadh?",
        "risposta": "Da novembre a marzo. D'estate si superano i 45 gradi, mentre le notti d'inverno possono scendere vicino allo zero."
      }
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
    comeArrivare: "Di solito con un volo interno su Abha (AHB) da Riyadh o Jeddah, circa un'ora e mezza con Saudia o flynas. L'aeroporto è piccolo e vicino alla città, e l'auto a noleggio si ritira lì: conviene prenotarla prima, soprattutto in estate. Via terra da Jeddah sono oltre 600 chilometri di strade di montagna. Al ritorno, se i biglietti sono separati, lasciare almeno 3 ore tra il volo interno e quello internazionale.",
    comeSpostarsi: 'L\'auto a noleggio è indispensabile: i villaggi sono sparsi tra le montagne e non c\'è un trasporto pubblico utile.',
    periodoMigliore:
      'qui il calendario è al contrario rispetto al resto del paese. La stagione buona è l\'estate, fresca e verde; l\'inverno può essere freddo e nebbioso. Da giugno ad agosto l\'Asir si riempie di sauditi in fuga dal caldo, ed è anche il periodo più vivace.',
    costi: "Contenuti: tolto il volo interno, è una delle zone più economiche del Regno. Il museo di Rijal Almaa costa poche decine di riyal, le funivie sono a pagamento con orari che cambiano secondo la stagione. Budget giornaliero a persona, indicativo: basso 50-70 € (hotel di città in doppia, auto in comune, ristoranti di quartiere); medio 100-150 € (hotel migliore, funivie, pranzi nei villaggi); alto 250 € e oltre (resort in montagna, guida privata).",
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
        "testo": "Il villaggio di una sessantina di case-torre in pietra, argilla e legno, alcune fino a otto piani, con le finestre bordate di bianco. Ha più di 900 anni ed era una tappa commerciale tra lo Yemen, la Mecca e il Levante; nelle case restaurate c'è un museo con oltre duemila oggetti e documenti.",
        "come": "In auto da Abha, circa 50 km e un'ora di tornanti verso la pianura costiera.",
        "quando": "Mattina, quando la luce è migliore e nel fondovalle fa meno caldo.",
        "tempo": "Mezza giornata",
        "lat": 18.2125,
        "lng": 42.27361
      },
      {
        "nome": "Jebel Sawda e funivia dell'Asir",
        "testo": "Riconosciuto ufficialmente come la cima più alta del paese, 3.207 metri, anche se un rilievo del 2018 sul Jabal Ferwa ha messo in dubbio il primato. La zona è coperta di boschi di ginepro, spesso nella nebbia, e ci sono babbuini che si avvicinano alle auto.",
        "come": "In auto da Abha, da mezz'ora a un'ora; oppure con la funivia.",
        "quando": "Mattina presto, quando le nuvole sono basse.",
        "tempo": "Mezza giornata",
        "lat": 18.26672,
        "lng": 42.36826,
        "consiglio": "Non dare da mangiare ai babbuini."
      },
      {
        "nome": "Habala",
        "testo": "Il villaggio in una valle circa 300 metri sotto il ciglio della scarpata, un tempo raggiungibile solo con scale di corda: il nome viene dalla parola araba per «corda». Era abitato dagli «uomini dei fiori», che portavano ghirlande di erbe e fiori secchi sul capo. Dagli anni Novanta ci si scende in funivia.",
        "come": "In auto da Abha, circa un'ora (58 km), poi funivia.",
        "quando": "Pomeriggio; la funivia ha orari ridotti e può fermarsi con il vento.",
        "tempo": "1,5 ore",
        "lat": 18.03808,
        "lng": 42.87266
      },
      {
        "nome": "Abha e le case dipinte",
        "testo": "Il qatt asiri, i motivi geometrici colorati che le donne dipingono sulle pareti interne delle case, patrimonio immateriale UNESCO dal 2017. Abha sta a 2.270 metri e d'estate è la città più fresca del Regno.",
        "come": "A piedi o in taxi nel centro.",
        "quando": "Mattina.",
        "tempo": "2 ore",
        "lat": 18.21694,
        "lng": 42.50528
      },
      {
        "nome": "Villaggio d'arte Al-Muftaha",
        "testo": "Il quartiere degli artisti di Abha, con atelier e gallerie. È uno dei posti dove vedere il qatt asiri reinterpretato da pittori di oggi.",
        "come": "A piedi o in taxi dal centro di Abha.",
        "quando": "Pomeriggio e sera.",
        "tempo": "1 ora",
        "lat": 18.21314,
        "lng": 42.49556
      },
      {
        "nome": "Monte Verde (Al-Jabal Al-Akhdar)",
        "testo": "La collina in mezzo alla città, con il belvedere più comodo su Abha e sulle montagne intorno. La sera è il ritrovo delle famiglie.",
        "come": "In auto o taxi dal centro, pochi minuti.",
        "quando": "Tramonto e sera.",
        "tempo": "45 minuti",
        "lat": 18.20451,
        "lng": 42.50634
      },
      {
        "nome": "Lago della diga di Abha",
        "testo": "Il bacino artificiale alle porte della città, con un parco e passeggiate lungo la riva.",
        "come": "In auto o taxi, pochi minuti dal centro.",
        "quando": "Tardo pomeriggio.",
        "tempo": "1 ora",
        "lat": 18.21228,
        "lng": 42.48668
      },
      {
        "nome": "Parco Al-Sahab",
        "testo": "Il «parco delle nuvole», sul bordo della scarpata a ovest di Abha: con la nebbia sembra di stare sopra il cielo. Ci sono belvedere sulle valli che scendono verso la Tihama.",
        "come": "In auto da Abha, pochi chilometri verso ovest.",
        "quando": "Mattina presto o tardo pomeriggio, quando le nuvole salgono dalla valle.",
        "tempo": "1 ora",
        "lat": 18.21832,
        "lng": 42.39671
      },
      {
        "nome": "Parco nazionale dell'Asir",
        "testo": "Istituito nel 1981, copre le creste attorno ad Abha e al Jebel Sawda. Boschi di ginepro, aree picnic e strade panoramiche: d'estate è pieno di famiglie saudite in fuga dal caldo.",
        "come": "In auto da Abha; l'area di As-Sūda è a circa mezz'ora.",
        "quando": "Estate, la mattina.",
        "tempo": "Mezza giornata",
        "lat": 18.27615,
        "lng": 42.36442
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Rijal Almaa e il suo museo",
          "Pomeriggio: Abha, le case dipinte e il villaggio d'arte Al-Muftaha",
          "Tramonto sul Monte Verde"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: Jebel Sawda e parco nazionale dell'Asir in mattinata, pomeriggio al parco Al-Sahab"
        ]
      },
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
        "testo": "Hotel di città a prezzi contenuti e ristoranti, al centro di tutte le gite: Rijal Almaa, Habala e il Jebel Sawda sono tutti entro un'ora."
      },
      {
        "nome": "Villaggi di montagna",
        "perChi": "chi vuole quiete",
        "testo": "Poche guesthouse e piccole strutture tra le terrazze. Serve l'auto, e d'inverno nebbia e freddo si sentono."
      },
      {
        "nome": "Khamis Mushait",
        "perChi": "chi cerca più scelta e prezzi bassi",
        "testo": "La grande città a mezz'ora da Abha, con hotel di catena e centri commerciali. Più comoda per i servizi, meno bella come base."
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
    gite: [
      {
        "nome": "Khamis Mushait",
        "distanza": "30 km, circa mezz'ora di auto",
        "come": "In auto o taxi da Abha.",
        "testo": "La quinta città del paese e uno dei grandi centri commerciali del sud. Il nome significa «il giovedì di Mushait», dal mercato settimanale del giovedì."
      },
      {
        "nome": "Al-Namas",
        "distanza": "144 km, circa un'ora e 45 di auto",
        "come": "In auto verso nord sulla strada di montagna.",
        "testo": "Un capoluogo dell'Asir circa 120 km a nord di Abha, sulle alture tra le terrazze coltivate. È la gita per chi vuole vedere la montagna fuori dai percorsi più battuti."
      }
    ],
    faq: [
      {
        "domanda": "Quando andare nell'Asir?",
        "risposta": "In estate, al contrario del resto del paese: sopra i 2.000 metri fa fresco ed è tutto verde. L'inverno può essere freddo e nebbioso."
      },
      {
        "domanda": "Serve l'auto ad Abha?",
        "risposta": "Sì. I villaggi e i belvedere sono sparsi su strade di montagna e non c'è un trasporto pubblico utile. L'auto si ritira all'aeroporto di Abha."
      },
      {
        "domanda": "Quanti giorni servono?",
        "risposta": "Almeno due, meglio tre: uno per Abha, uno per Rijal Almaa, uno per Habala e il Jebel Sawda. In un giorno solo si vede soprattutto la strada."
      },
      {
        "domanda": "È sicuro andare nell'Asir?",
        "risposta": "Il governo britannico sconsiglia qualsiasi viaggio entro 10 km dal confine con lo Yemen e i viaggi non essenziali in tutto il paese. Controllare viaggiaresicuri.it prima di partire e non scendere verso sud."
      },
      {
        "domanda": "Cosa comprare nell'Asir?",
        "risposta": "Il miele di montagna, il più pregiato della penisola, da comprare dai produttori assaggiandolo prima. Viaggia bene in stiva, non nel bagaglio a mano."
      }
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
      'Sono reef che non hanno subito decenni di pressione turistica. Ed è la parte del paese che cambia più in fretta: qui stanno sorgendo i grandi progetti costieri, e chi ci va adesso la vede prima. È in lista per un motivo che ha una scadenza. Questi reef sono tra i meno danneggiati del Mar Rosso perché fino al 2019 quasi nessun turista poteva arrivarci, e adesso su questa costa stanno nascendo alcuni dei più grandi progetti turistici mai avviati al mondo. Il periodo in cui Umluj resta un porto di pescatori con un centinaio di isole bianche davanti e nessuna struttura sarà, con ogni probabilità, breve. Va anche detto con onestà cosa comporta: niente servizi, pochi operatori, nessuno standard garantito, e le regole del paese valgono anche in spiaggia, dove sulle spiagge pubbliche si entra in acqua vestiti. Non è una meta balneare come la intendiamo noi: è una costa che si sta aprendo adesso.',
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
    comeArrivare: "Con un volo interno su Yanbu o Al-Wajh e poi in auto, oppure direttamente in auto da Jeddah: circa 5-6 ore di strada costiera, che si inseriscono bene nel tragitto verso AlUla. Da Yanbu a Umluj ci sono circa 150 km, da Umluj ad Al-Wajh 176. L'auto a noleggio conviene ritirarla in aeroporto: in zona non ci sono trasporti pubblici utili.",
    comeSpostarsi: 'L\'auto propria è obbligatoria; le uscite in barca si organizzano al porto con gli operatori locali.',
    periodoMigliore:
      'da ottobre ad aprile. D\'estate caldo e umidità della costa rendono faticosa una giornata in barca, anche se l\'acqua resta ottima.',
    costi: "Uscite in barca a prezzi contenuti rispetto al Mar Rosso egiziano, da contrattare con gli operatori locali; alloggi economici in paese, molto cari nei resort di The Red Sea. Budget giornaliero a persona, indicativo: basso 60-80 € (alloggio semplice in doppia, auto in comune, pesce al porto); medio 120-180 € (hotel migliore o a Yanbu, uscita in barca di gruppo); alto 600 € e oltre (resort sulle isole).",
    erroriDaEvitare: [
      'Aspettarsi strutture turistiche: qui non ci sono ancora, ed è il pregio e insieme il limite della zona',
      'Contare su operatori di livello internazionale per le immersioni: la scena è agli inizi e va valutata caso per caso',
      'Dare per scontato l\'abbigliamento da spiaggia: fuori dai resort chiusi valgono le regole del paese, e sulle spiagge pubbliche si entra in acqua vestiti',
      'Programmarla senza auto',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Arcipelago di Umluj",
        "testo": "Un arcipelago di 103 isole di sabbia bianca e banchi corallini al largo di Umluj, cittadina sulla costa. Il turismo qui è ancora poco sviluppato: niente strutture sulle isole, solo barche di operatori locali.",
        "come": "In barca da Umluj, con operatori locali, da accordare al porto o tramite l'alloggio.",
        "quando": "Da ottobre ad aprile, la mattina quando il mare è più calmo.",
        "tempo": "Una giornata",
        "consiglio": "Portare acqua, ombra e cibo: sulle isole non c'è niente."
      },
      {
        "nome": "Reef del Mar Rosso settentrionale",
        "testo": "Reef poco frequentati, perché il paese rilascia visti turistici solo dal settembre 2019. Si stimano circa 200 tipi di corallo e 1.200 specie di pesci. Snorkeling e immersioni con operatori locali.",
        "come": "Operatori locali, ancora pochi.",
        "quando": "Nei mesi più freschi.",
        "tempo": "Mezza giornata"
      },
      {
        "nome": "Isola di Jabal Hassan",
        "testo": "La più grande isola della provincia di Tabuk nel Mar Rosso, con rilievi rocciosi e acque ricche di vita: tartarughe verdi ed embricate, delfini e dugonghi. È anche una sosta per gli uccelli migratori, come gru e pavoncelle.",
        "come": "In barca da Umluj, di solito dentro un'uscita di giornata tra le isole.",
        "quando": "Mattina, con il mare calmo.",
        "tempo": "Mezza giornata o giornata intera",
        "lat": 24.97778,
        "lng": 37.08361
      },
      {
        "nome": "Spiaggia di Ras al-Shabaan",
        "testo": "Una delle spiagge di sabbia bianca con le palme vicino a Umluj, sul Mar Rosso. Non ci sono servizi organizzati.",
        "come": "In auto da Umluj.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "2-3 ore",
        "consiglio": "Fuori dai resort chiusi ci si bagna vestiti: informarsi sulle regole locali."
      },
      {
        "nome": "Spiaggia di Al-Duqm",
        "testo": "La costa a nord della cittadina, con palme sulla spiaggia e sabbia chiara.",
        "come": "In auto, pochi chilometri a nord di Umluj.",
        "quando": "Tardo pomeriggio.",
        "tempo": "2 ore",
        "lat": 25.0842,
        "lng": 37.25913
      },
      {
        "nome": "Umluj e il porto",
        "testo": "La cittadina di pescatori da cui partono tutte le uscite in barca. Non ha monumenti, ma è il posto dove trovare barche, pesce e un'idea di com'era la costa prima dei grandi progetti.",
        "come": "In auto; da Jeddah circa 5-6 ore lungo la costa.",
        "quando": "La mattina presto, quando rientrano le barche.",
        "tempo": "1 ora",
        "lat": 25.03028,
        "lng": 37.26223
      },
      {
        "nome": "Destinazione The Red Sea",
        "testo": "Il grande progetto turistico tra Umluj e Al-Wajh: l'obiettivo è arrivare a 50 hotel su 22 isole e 6 siti nell'entroterra. È il futuro di questa costa, con resort di fascia altissima.",
        "come": "Si arriva con l'aeroporto dedicato o in auto con trasferimento verso le isole, solo con prenotazione in un resort.",
        "quando": "Da ottobre ad aprile.",
        "tempo": "Uno o più giorni",
        "lat": 25.505,
        "lng": 36.955
      },
      {
        "nome": "Al-Wajh",
        "testo": "La cittadina costiera più a nord, capoluogo del proprio governatorato sul Mar Rosso. Ha un aeroporto domestico ed è l'alternativa a Umluj per chi arriva in aereo.",
        "come": "In auto da Umluj, 176 km e circa 2 ore.",
        "quando": "Di passaggio, verso AlUla o verso nord.",
        "tempo": "Mezza giornata",
        "lat": 26.28333,
        "lng": 36.41667
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: uscita in barca tra le isole e snorkeling sui reef",
          "Pomeriggio: spiaggia di Al-Duqm",
          "Sera: pesce al porto di Umluj"
        ]
      },
      {
        "titolo": "2 giorni, tra Jeddah e AlUla",
        "tappe": [
          "Giorno 1: da Jeddah a Umluj in auto lungo la costa, tramonto a Ras al-Shabaan",
          "Giorno 2: giornata in barca a Jabal Hassan, poi partenza verso AlUla o notte ad Al-Wajh"
        ]
      }
    ],
    zone: [
      {
        "nome": "Umluj",
        "perChi": "chi vuole una base semplice",
        "testo": "Alloggi economici e semplici in paese, vicino al porto da cui partono le barche. Niente strutture turistiche vere e proprie."
      },
      {
        "nome": "Yanbu",
        "perChi": "chi vuole più servizi",
        "testo": "La città portuale a circa 150 km a sud, più grande e attrezzata, con hotel di catena. Si va e viene in giornata."
      },
      {
        "nome": "Resort di The Red Sea",
        "perChi": "chi vuole il lusso sulle isole",
        "testo": "Pochi resort di altissimo livello tra Umluj e Al-Wajh, molto cari e da prenotare con trasferimento incluso."
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
    gite: [
      {
        "nome": "Harrat Lunayyir",
        "distanza": "nell'entroterra di Umluj",
        "come": "In 4x4 con una guida locale: non ci sono servizi né segnaletica.",
        "testo": "Un campo di lava con crateri e coni vulcanici. Nel 2009 uno sciame di terremoti ha aperto fessure nel terreno e fatto evacuare oltre duemila persone: è considerato ancora attivo."
      },
      {
        "nome": "Yanbu",
        "distanza": "147 km, circa un'ora e 45 di auto",
        "come": "In auto lungo la costa verso sud.",
        "testo": "Il grande porto del Mar Rosso tra Jeddah e Umluj, base più attrezzata della zona. Utile per spezzare il viaggio da Jeddah o per trovare hotel e servizi."
      }
    ],
    faq: [
      {
        "domanda": "Umluj è davvero «le Maldive saudite»?",
        "risposta": "È un'esagerazione: le isole e i reef sono bellissimi, ma non ci sono resort sulle isole né servizi turistici. È una costa che si sta aprendo adesso."
      },
      {
        "domanda": "Come si arriva a Umluj?",
        "risposta": "In auto da Jeddah, circa 5-6 ore lungo la costa, oppure con un volo interno su Yanbu o Al-Wajh e poi in auto. Senza auto propria non ci si muove."
      },
      {
        "domanda": "Ci si può fare il bagno in costume?",
        "risposta": "Solo dentro i resort chiusi. Sulle spiagge pubbliche valgono le regole del paese, e ci si bagna vestiti."
      },
      {
        "domanda": "Quando andare a Umluj?",
        "risposta": "Da ottobre ad aprile. D'estate caldo e umidità rendono faticosa una giornata in barca, anche se il mare resta ottimo."
      },
      {
        "domanda": "Ci sono diving center affidabili?",
        "risposta": "Pochi, e la scena è agli inizi: conviene scegliere operatori con recensioni recenti e controllare attrezzatura e sicurezza prima di partire."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Le case basse e bianche di Umluj viste dall\'alto, con il Mar Rosso blu all\'orizzonte',
  },
]
