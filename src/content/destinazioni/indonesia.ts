import type { Destinazione } from '@/lib/types'

// Otto isole visitate di persona. Sette di queste sono ora collegate al primo
// viaggio-diario combinato dell'Indonesia ("Indonesia in 30 giorni", slug
// indonesia-itinerario): tripSlugs riporta quel viaggio per Sumatra, Giava,
// Bali, Sulawesi, Lombok e Gili, Komodo e Flores. Raja Ampat è fuori da
// quel viaggio di proposito (dal 5/11/2026 ha bali-sulawesi-raja-ampat e la guida): la sua stagione migliore (ottobre-aprile) è
// opposta a quella del resto dell'arcipelago, quindi non è stata inclusa in
// quell'itinerario. L'autore ci è stato in un viaggio a parte, ad agosto 2026,
// fuori dalla finestra migliore: il ricordo lo dice. Le foto
// restano da caricare (immagini con fallback grafico, non foto stock): è un
// task separato da questo, che ha collegato solo testo e metadati. Nessun nome
// di hotel, ristorante o operatore è stato inventato.

export const destinazioniIndonesia: Destinazione[] = [
  {
    slug: 'sumatra',
    paeseSlug: 'indonesia',
    ordine: 1,
    nome: 'Sumatra',
    tipologia: ['natura', 'avventura', 'trekking'],
    giorniConsigliati: '7-10 giorni per coprire il nord (Bukit Lawang, Lago Toba, Berastagi)',
    visitataPersonalmente: true,
    introduzione:
      'La porta d\'accesso più selvaggia dell\'arcipelago: la giungla del Gunung Leuser con gli oranghi selvatici, il più grande lago vulcanico al mondo e la cultura Batak sull\'isola di Samosir.',
    percheAndarci:
      'Qui il trekking nella giungla è meno battuto che in altre mete del sud-est asiatico, e il momento più forte è l\'incontro con gli oranghi.',
    cosaVedere: [
      'Il Parco Nazionale del Gunung Leuser a Bukit Lawang, uno degli ultimi habitat degli oranghi di Sumatra',
      'Il Lago Toba, il più grande lago vulcanico al mondo, con l\'isola di Samosir al centro',
      'I villaggi Batak di Samosir, con le case tradizionali dal tetto a sella e le tombe di pietra',
      'I vulcani Sibayak e Sinabung nella zona di Berastagi',
    ],
    cosaFare: [
      'Trekking di uno o più giorni nella giungla di Bukit Lawang per avvistare oranghi selvatici (solo con guida certificata)',
      'Giro in barca sul Lago Toba e giornata in scooter sull\'isola di Samosir',
      'Bagno nelle sorgenti calde ai piedi del Sibayak dopo un trekking vulcanico',
      'Immersione nella cultura Batak: cerimonie, artigianato, danze Sigale-gale',
    ],
    doveDormire:
      'Guesthouse lungo il fiume Bohorok a Bukit Lawang, comode per partire presto per il trekking; homestay sull\'isola di Samosir per il Lago Toba.',
    doveMangiare:
      'Si mangia semplice e quasi ovunque bene: il nasi padang (vetrinette con molti piatti già pronti: si indica quello che si vuole e si paga solo ciò che si tocca) è l\'istituzione locale ed è nato proprio qui, a Sumatra occidentale. Nella zona del Lago Toba compare il maiale, raro nel resto dell\'Indonesia musulmana, perché i Batak sono cristiani. Il caffè di Sumatra, bevuto nei warung sulla strada per Berastagi, è molto apprezzato e costa poco.',
    comeArrivare: "Per il nord si vola su Medan, all'aeroporto di Kualanamu (KNO), da Giacarta, Kuala Lumpur o Singapore. Il treno Railink porta a Medan in circa 35-45 minuti; per Bukit Lawang invece serve l'auto privata, circa 3-4 ore per 650.000-700.000 IDR (circa 37-40 €), quasi sempre mandata dalla guesthouse. Per il Lago Toba c'è anche l'aeroporto di Silangit, a circa un'ora e mezza da Parapat, con voli diretti per Giacarta. Per Bukittinggi e la Sumatra occidentale si vola su Padang (PDG): da lì sono circa 3 ore d'auto, con un'auto privata a circa 500.000 IDR (circa 28 €).",
    comeSpostarsi: 'Auto privata o bus tra Medan, Bukit Lawang, Berastagi e Lago Toba; traghetto per l\'isola di Samosir.',
    periodoMigliore: 'giugno-settembre, stagione più secca per il trekking',
    costi: "Tra le isole più economiche dell'arcipelago, soprattutto per alloggi e trekking guidati. Budget: circa 25-35 € al giorno con guesthouse sul fiume o sul lago, warung e bus. Medio: 60-90 € con camere migliori, un driver per le tratte lunghe (800.000-900.000 IDR, circa 45-50 €, da Bukit Lawang a Berastagi) e il trekking di due giorni. Alto: oltre 130 € con i resort sul lago, driver privato per ogni tratta e trekking privati.",
    erroriDaEvitare: [
      'Affidarsi a guide non certificate per il trekking oranghi: il contatto ravvicinato non regolamentato è pericoloso sia per i visitatori sia per gli animali',
      'Sottovalutare i tempi di spostamento su strade di montagna spesso dissestate',
    ],
    confronti: [
      {
        titolo: 'Oranghi a Sumatra o in Borneo?',
        introduzione:
          'Gli oranghi selvatici esistono solo su queste due isole, e sono specie diverse: quello di Sumatra (in pericolo critico) e quello del Borneo. Chi ha fatto Bukit Lawang e pensa al Borneo, o viceversa, fa bene a chiederselo, perché le due esperienze sono diverse.',
        opzioni: [
          {
            nome: 'Bukit Lawang, Sumatra',
            sintesi: 'Trekking a piedi nella giungla del Gunung Leuser, cercando gli animali invece di aspettarli.',
            costo: 'il più economico: trekking guidati a prezzi contenuti, alloggi semplici sul fiume',
            durata: '2-3 giorni',
            pro: [
              'Si cammina dentro la foresta: l\'incontro è attivo, senza piattaforme né barche',
              'Probabilità alte, perché nella zona vivono ex individui riabilitati ormai selvatici',
              'Costi molto più bassi delle opzioni del Borneo',
              'Il Leuser è uno dei pochi ecosistemi dove oranghi, tigri, rinoceronti ed elefanti convivono',
            ],
            contro: [
              'C\'è un nodo etico: alcune guide attirano gli animali con il cibo per garantire l\'avvistamento, e va rifiutato in modo esplicito quando si prenota',
              'Fisicamente impegnativo: fango, radici, caldo e umidità alti',
              'Regolamentazione meno rigida che in Malesia: la qualità dipende molto dalla guida',
              'Oltre agli oranghi, la zona offre meno varietà di fauna visibile',
            ],
            perChi: 'Chi vuole cercarli camminando, ha un budget contenuto e sceglie l\'operatore con attenzione.',
          },
          {
            nome: 'Sabah, Borneo malese',
            sintesi: 'Il sistema Sepilok più Kinabatangan: centro di riabilitazione con poppate a orario e poi crociere sul fiume per gli avvistamenti selvatici.',
            costo: 'molto più alto: i lodge sul Kinabatangan si pagano a pacchetto',
            durata: '4-5 giorni per fare entrambi con senso',
            pro: [
              'A Sepilok l\'incontro ravvicinato è ragionevolmente garantito in quasi ogni stagione',
              'Sul Kinabatangan gli oranghi sono selvatici e arrivano con tutto il resto: nasiche, elefanti pigmei, coccodrilli, buceri',
              'Standard di gestione e regolamentazione più alti, con pratiche di alimentazione dichiarate',
              'Nella stessa isola ci sono la foresta primaria della Danum Valley e Sipadan',
            ],
            contro: [
              'Si guarda da una piattaforma o da una barca, a distanza: è meno diretto',
              'Costa molto di più, e i trasferimenti interni sono lunghi',
              'A Sepilok gli animali sono semi-selvatici e abituati all\'uomo',
            ],
            perChi: 'Chi vuole vedere anche il resto della fauna del Borneo e accetta un budget più alto in cambio di maggiore prevedibilità.',
          },
        ],
        raccomandazione:
          'Per il solo incontro con gli oranghi, Sumatra dà più per molto meno: si cammina, si cerca, e costa una frazione. Il Borneo si sceglie quando la lista è più lunga (nasiche, elefanti pigmei, foresta primaria, Sipadan) e gli oranghi sono solo uno dei motivi. Chi ha già fatto Bukit Lawang non attraversi mezzo sud-est asiatico per rivederli: vada in Borneo per tutto il resto, e li rivedrà comunque.',
      },
    ],
    miaEsperienza:
      'È l\'isola che quasi nessuno mette in itinerario, e sbaglia. A Bukit Lawang siamo saliti nel fango aggrappandoci alle radici, con un caldo che toglieva il respiro, e dopo tre ore senza vedere niente mi è venuto il dubbio di aver buttato una giornata. Poi un orango è sceso su un ramo a pochi metri, è rimasto a guardare per qualche secondo e ha ripreso a mangiare, e il dubbio è sparito. C\'è anche una parte scomoda: qualche guida attira gli animali col cibo per garantire l\'avvistamento, e va rifiutato in modo esplicito quando si prenota. Il Lago Toba, dopo, è stato la decompressione: grande come una provincia, silenzioso, con un ritmo che rallenta da solo.',
    luoghi: [
      {
        nome: "Bukit Lawang e il Gunung Leuser",
        testo: "Il villaggio sul fiume Bohorok alle porte del Parco Nazionale del Gunung Leuser, uno degli habitat rimasti dell'orango di Sumatra. Nella zona vivono oranghi ex riabilitati ormai selvatici. Nel parco vivono anche l'elefante, la tigre e il rinoceronte di Sumatra.",
        come: "Da Medan in auto o minibus, qualche ora secondo il traffico. Il trekking si fa solo con guida certificata, a piedi nella giungla, per mezza giornata o più giorni. I prezzi li fissano le guide locali e il permesso del parco di solito è incluso: conviene confrontare due o tre offerte prima di scegliere.",
        quando: "Nei mesi più secchi, quando i sentieri sono meno fangosi. Uscire all'alba.",
        tempo: "2-3 giorni",
        lat: 3.55083,
        lng: 98.12367,
        consiglio: "Rifiutare in modo esplicito, già alla prenotazione, le guide che attirano gli animali con il cibo."
      },
      {
        nome: "Lago Toba",
        testo: "Il più grande lago vulcanico del mondo, circa 1.130 km², nato da un'eruzione enorme. Acqua fresca, rive verdi, villaggi e un'isola grande al centro, Samosir.",
        come: "Da Medan in auto o bus fino a Parapat, diverse ore di strada, poi traghetto per Tuk Tuk sull'isola di Samosir. Da Berastagi a Parapat sono circa 3 ore, con un driver a 700.000-800.000 IDR (circa 40-45 €). Il traghetto passeggeri Parapat-Tuk Tuk impiega circa 45 minuti; quello per le auto parte da Ajibata e arriva a Tomok.",
        quando: "Tutto l'anno, meglio al mattino e nella stagione secca.",
        tempo: "2-3 giorni",
        lat: 2.68,
        lng: 98.88,
        consiglio: "Dopo Bukit Lawang è la decompressione ideale: ritmo lento, nessuna fretta."
      },
      {
        nome: "Isola di Samosir e i villaggi Batak",
        testo: "I Batak Toba sono in grandissima maggioranza cristiani e vivono in case dal tetto a sella con facciate scolpite. L'isola occupa il centro del cratere ed è grande quasi quanto Singapore. Homestay e ristoranti si concentrano sulla penisola di Tuk Tuk, i villaggi tradizionali sono lungo la strada costiera.",
        come: "In scooter o auto a noleggio da Tuk Tuk, lungo la strada che gira l'isola.",
        quando: "Al mattino. Le danze della marionetta Sigale-gale si tengono soprattutto per i visitatori, in alcuni villaggi.",
        tempo: "1 giorno",
        costo: "Scooter a noleggio 70.000-100.000 IDR al giorno, circa 4-6 € (2026).",
        lat: 2.58333,
        lng: 98.81667,
        consiglio: "Noleggiare uno scooter e girare l'isola con calma, fermandosi nei villaggi."
      },
      {
        nome: "Huta Siallagan ad Ambarita",
        testo: "Il villaggio del re Siallagan, con le case Batak in fila e le sedie di pietra dove si riuniva il consiglio degli anziani per giudicare i colpevoli. È uno dei villaggi più visitati di Samosir, a pochi chilometri da Tuk Tuk.",
        come: "In scooter da Tuk Tuk, una decina di minuti verso nord lungo la strada costiera. Le guide all'ingresso raccontano la storia delle sedie.",
        quando: "Al mattino, prima dei gruppi.",
        tempo: "1 ora",
        lat: 2.67892,
        lng: 98.83647,
      },
      {
        nome: "Tomok e la tomba del re Sidabutar",
        testo: "Il villaggio dove attracca il traghetto per le auto, con il sarcofago di pietra del re Sidabutar, ancora oggetto di culto, e le statue degli antenati intorno. Lungo il viale che porta alla tomba ci sono bancarelle di tessuti ulos e intagli.",
        come: "In scooter da Tuk Tuk verso sud, oppure con il traghetto da Ajibata.",
        quando: "Al mattino.",
        tempo: "1 ora",
        lat: 2.62,
        lng: 98.862,
      },
      {
        nome: "Cascata di Sipiso-piso",
        testo: "Una cascata che precipita per più di cento metri dall'altopiano dentro una gola, all'estremità nord del lago Toba. Dal belvedere si vedono insieme la cascata e il lago.",
        come: "Sosta lungo la strada tra Berastagi e Parapat, con un driver. Dal parcheggio una lunga scalinata scende verso la base: risalire è faticoso.",
        quando: "Al mattino, prima che arrivino le nuvole.",
        tempo: "1-2 ore",
        lat: 2.91642,
        lng: 98.51965,
      },
      {
        nome: "Gunung Sibayak e Berastagi",
        testo: "Un vulcano attivo ma tranquillo sopra la cittadina di Berastagi, con una salita di poche ore e fumarole in cima. Dopo, sorgenti calde per riposare.",
        come: "Da Berastagi a piedi o in moto fino all'inizio del sentiero. Meglio con guida.",
        quando: "Alle prime ore del mattino, prima che arrivino nuvole e pioggia.",
        tempo: "mezza giornata",
        lat: 3.23917,
        lng: 98.50556,
        consiglio: "Chiudere il trekking con un bagno nelle sorgenti calde."
      },
      {
        nome: "Bukit Gundaling",
        testo: "La collina appena fuori Berastagi da cui si vedono i due vulcani della zona, il Sibayak e il Sinabung. Il Sinabung è in attività da anni e le zone interdette intorno al cratere vanno rispettate: da qui lo si guarda a distanza.",
        come: "Dal centro di Berastagi in pochi minuti di auto.",
        quando: "Al tramonto o al mattino presto, con il cielo limpido.",
        tempo: "1 ora",
        lat: 3.19273,
        lng: 98.50129,
      },
      {
        nome: "Medan: Istana Maimun e mercati",
        testo: "La città di partenza di quasi tutti i viaggi nel nord di Sumatra. Il palazzo del sultano di Deli, costruito tra il 1887 e il 1891 e ancora di proprietà del sultanato, e i mercati sono le tappe più interessanti.",
        come: "Il palazzo è in centro, in taxi o Grab.",
        quando: "Al mattino.",
        tempo: "2 ore",
        lat: 3.57528,
        lng: 98.68389,
        consiglio: "Non fermarsi più di una notte: la parte bella è fuori città."
      },
      {
        nome: "Masjid Raya Al-Mashun, Medan",
        testo: "La grande moschea del sultanato di Deli, con le cupole nere e le vetrate colorate. È a pochi minuti a piedi dall'Istana Maimun e si visitano bene insieme.",
        come: "A piedi dal palazzo. Si entra fuori dagli orari di preghiera, con gambe e spalle coperte.",
        quando: "Al mattino, evitando il venerdì a mezzogiorno.",
        tempo: "30-45 minuti",
        lat: 3.57511,
        lng: 98.68732,
      },
      {
        nome: "Bukittinggi e la Jam Gadang",
        testo: "La città dell'altopiano dei Minangkabau, a circa 900 metri, fresca la sera dopo il caldo della costa. In centro c'è la Jam Gadang, la torre dell'orologio, con intorno il mercato di Pasar Atas e i locali per cenare. Fa da base per le gite nella Sumatra occidentale.",
        come: "Da Padang o dal suo aeroporto in auto, circa 3 ore. Il centro si gira a piedi.",
        quando: "Tardo pomeriggio e sera, quando la piazza si riempie.",
        tempo: "mezza giornata",
        lat: -0.3052,
        lng: 100.3696,
        consiglio: "In cima alla torre non si sale più: si guarda dalla piazza."
      },
      {
        nome: "Ngarai Sianok e Lobang Jepang",
        testo: "Il canyon che scende ripido ai margini di Bukittinggi, con le pareti verdi e il fiume sul fondo. Sotto il parco Panorama, sul bordo del canyon, ci sono i Lobang Jepang, i tunnel scavati durante l'occupazione giapponese nella Seconda guerra mondiale.",
        come: "A piedi dal centro di Bukittinggi fino al parco Panorama; l'ingresso ai tunnel è nello stesso parco.",
        quando: "Al mattino, con la luce sulle pareti.",
        tempo: "2 ore",
        costo: "Circa 15.000 IDR per il belvedere, meno di 1 € (2026); biglietto economico a parte per i tunnel.",
        orari: "Lobang Jepang aperto più o meno dalle 8 al tardo pomeriggio.",
        lat: -0.30779,
        lng: 100.3652,
      }
    ],
    programmi: [
      {
        titolo: "3 giorni: solo Bukit Lawang",
        tappe: [
          "Giorno 1: arrivo a Kualanamu, auto per Bukit Lawang, cena sul Bohorok",
          "Giorno 2: trekking di due giorni nel Gunung Leuser con notte in giungla",
          "Giorno 3: rientro a piedi o in tubing sul fiume, auto per Medan e Istana Maimun"
        ]
      },
      {
        titolo: "4 giorni: Bukittinggi e la Sumatra occidentale",
        tappe: [
          "Giorno 1: arrivo a Padang, strada per Bukittinggi lungo la gola di Lembah Anai",
          "Giorno 2: valle di Harau",
          "Giorno 3: Puncak Lawang e lago Maninjau lungo i tornanti della Kelok 44",
          "Giorno 4: Jam Gadang, Ngarai Sianok e Lobang Jepang, rientro a Padang"
        ]
      },
      {
        titolo: "7 giorni",
        tappe: [
          "Giorno 1: arrivo a Medan, trasferimento a Bukit Lawang",
          "Giorno 2-3: trekking nel Leuser con guida certificata",
          "Giorno 4: trasferimento a Berastagi, Sibayak",
          "Giorno 5-6: Lago Toba e Samosir",
          "Giorno 7: rientro a Medan"
        ]
      },
      {
        titolo: "10 giorni",
        tappe: [
          "Come i 7 giorni, con un giorno in più a Bukit Lawang e due sul lago Toba",
          "Sosta alla cascata di Sipiso-piso tra Berastagi e Parapat",
          "Una giornata in scooter su Samosir tra Tuk Tuk, Ambarita e Tomok",
          "Rientro da Silangit con un volo per Giacarta, invece della strada per Medan"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Lawang",
        perChi: "chi fa il trekking",
        testo: "Guesthouse lungo il fiume Bohorok. Semplici e comode per partire presto.",
        fascia: "10-40 €"
      },
      {
        nome: "Tuk Tuk (Samosir)",
        perChi: "chi va al lago Toba",
        testo: "Homestay e guesthouse sulla penisola di Tuk Tuk, sul lago. Tranquillo, basso costo.",
        fascia: "12-45 €"
      },
      {
        nome: "Berastagi",
        perChi: "chi va al vulcano",
        testo: "Cittadina d'altura con alloggi economici, più fresca."
      },
      {
        nome: "Bukittinggi, intorno alla Jam Gadang",
        perChi: "chi gira la Sumatra occidentale",
        testo: "Alberghi e homestay in centro, con ristoranti a piedi e le gite per Harau e Maninjau in giornata.",
        fascia: "15-60 €"
      }
    ],
    sapori: [
      {
        nome: "Nasi padang",
        testo: "Riso con molti piatti già pronti portati in tavola o in vetrina: si sceglie quello che si vuole e si paga ciò che si tocca. È nato a Sumatra occidentale."
      },
      {
        nome: "Caffè di Sumatra",
        testo: "Tra i migliori del paese, bevuto nei warung sulla strada per Berastagi per pochi centesimi."
      },
      {
        nome: "Maiale Batak",
        testo: "Intorno al lago Toba, perché i Batak sono cristiani. Raro nel resto dell'Indonesia musulmana."
      },
      {
        nome: "Mie goreng",
        testo: "Noodles saltati con verdure e uovo. Quasi sempre disponibili."
      }
    ],
    attenzioni: [
      "Trekking solo con guide certificate: il contatto ravvicinato non regolato è pericoloso per voi e per gli oranghi.",
      "Sulle strade di montagna i tempi di percorrenza sono molto più lunghi di quanto sembri.",
      "Il fiume Bohorok può ingrossarsi con la pioggia: seguire le indicazioni locali.",
      "Sicurezza e legge: l'Indonesia ha leggi severissime sulla droga. Non portare niente con sé che non sia proprio."
    ],
    gite: [
      {
        nome: "Valle di Harau",
        distanza: "47 km da Bukittinggi, 1,5-2 ore in auto",
        come: "Auto con autista da Bukittinggi, oltre Payakumbuh. Ingresso circa 10.000-20.000 IDR a persona, meno di 1 €.",
        testo: "Una conca di risaie chiusa da pareti verticali di roccia, con piccole cascate che scendono dalle falesie, come Sarasah Murai. Meglio un giorno feriale e il mattino, prima delle nuvole del pomeriggio."
      },
      {
        nome: "Lago Maninjau e Puncak Lawang",
        distanza: "45 minuti da Bukittinggi al belvedere, 1,5-2 ore fino alla riva",
        come: "Auto con autista locale: la strada è stretta. Puncak Lawang circa 10.000-25.000 IDR a persona, la riva è libera.",
        testo: "Un lago vulcanico dentro una caldera, da guardare prima dall'alto. Poi si scende alla riva lungo la Kelok 44, la strada con 44 tornanti numerati, e si pranza con il pesce di lago."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Sumatra?",
        risposta: "Almeno una settimana per il nord, tra Bukit Lawang, Berastagi e il lago Toba. Con due settimane si aggiungono Bukittinggi e le Mentawai, partendo da Padang."
      },
      {
        domanda: "Gli oranghi di Bukit Lawang si vedono di sicuro?",
        risposta: "Non c'è garanzia, ma le probabilità sono alte perché nella zona vivono oranghi ex riabilitati. Chi promette l'avvistamento certo spesso attira gli animali con il cibo, ed è una pratica da rifiutare."
      },
      {
        domanda: "Serve una guida per il trekking nel Gunung Leuser?",
        risposta: "Sì, si entra solo con guida certificata. Conviene sceglierla tra quelle registrate e non tra le offerte più economiche per strada."
      },
      {
        domanda: "Come si arriva al lago Toba?",
        risposta: "In auto fino a Parapat, circa 3 ore da Berastagi o 4-5 dall'aeroporto di Kualanamu, poi il traghetto passeggeri per Tuk Tuk in circa 45 minuti. In alternativa si vola su Silangit, a un'ora e mezza da Parapat."
      },
      {
        domanda: "Meglio Medan o Padang come porta d'ingresso?",
        risposta: "Medan per gli oranghi, Berastagi e il lago Toba; Padang per Bukittinggi e le Mentawai. Le due zone sono lontane via terra, e con poco tempo conviene sceglierne una."
      },
      {
        domanda: "Qual è il periodo migliore per Sumatra?",
        risposta: "Da giugno a settembre, la stagione più secca. Con le piogge i sentieri della giungla diventano molto fangosi e il fiume Bohorok può ingrossarsi."
      }
    ],
    esperienzeSlugs: ['trekking-oranghi-bukit-lawang'],
    tripSlugs: ['indonesia-itinerario', 'sumatra-mentawai', 'indonesia-isola-per-isola'],
    imageAlt: 'Il lago Toba visto dall\'alto tra colline verdi e foresta, Sumatra',
    immagine: '/images/indonesia/sumatra.jpg',
  },
  {
    slug: 'giava',
    paeseSlug: 'indonesia',
    ordine: 2,
    nome: 'Giava',
    tipologia: ['cultura', 'natura', 'vulcani'],
    giorniConsigliati: '6-8 giorni tra Yogyakarta, Bromo e Ijen',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più popolosa dell\'Indonesia, cuore culturale del paese con grandi templi buddisti e induisti e due vulcani spettacolari da vedere all\'alba.',
    percheAndarci:
      'Concentra in un\'isola sola i templi di Borobudur e Prambanan, l\'alba sul cratere del Bromo e il fuoco blu dell\'Ijen, esperienze molto diverse tra loro.',
    cosaVedere: [
      'Borobudur, il tempio buddista più grande del mondo, all\'alba',
      'Prambanan, il complesso di templi induisti più grande dell\'Indonesia',
      'Il Gunung Bromo, con il cratere fumante circondato dal Mare di Sabbia',
      'Il Kawah Ijen, con il lago di acido solforico turchese e le fiamme blu notturne',
    ],
    cosaFare: [
      'Alba al Bromo in jeep 4x4 dal punto panoramico del Monte Penanjakan',
      'Trekking notturno al cratere dell\'Ijen per vedere il fenomeno del "fuoco blu" e i minatori di zolfo al lavoro',
      'Giro dei templi di Yogyakarta, base ideale per Borobudur e Prambanan',
      'Corso di batik o visita a un laboratorio tradizionale a Yogyakarta',
    ],
    doveDormire:
      'Yogyakarta come base per Borobudur e Prambanan, con la zona di Prawirotaman più tranquilla di Malioboro; per Bromo si dorme a Cemoro Lawang, sul bordo del cratere, e per l\'Ijen a Banyuwangi o nelle guesthouse di Licin.',
    doveMangiare:
      'Yogyakarta è il posto dove provare il gudeg, lo stufato dolce di jackfruit che è il piatto identitario della città e divide chi lo assaggia. Per il resto la strada batte i ristoranti: nasi goreng e mie goreng dai carretti serali, sate ayam e il tempeh (inventato proprio a Giava), fritto e mangiato come spuntino. Attorno a Bromo e all\'Ijen l\'offerta è minima e i pasti si fanno in guesthouse: non è il momento del viaggio in cui si mangia bene.',
    comeArrivare:
      "Dall'Italia si atterra a Giacarta (CGK) e si prosegue con un volo interno di circa 1 ora e 20 minuti per Yogyakarta, con qualche ora di margine per i ritardi e l'immigrazione. L'aeroporto di Yogyakarta (YIA) è sulla costa, a circa 45 km dalla città: il treno KA Bandara arriva alla stazione Tugu in circa 40 minuti per circa 20.000 IDR (circa 1 €; circa 50.000 il YIA Xpress, più rapido), il bus DAMRI costa circa 80.000 IDR, Grab e taxi circa 250.000-350.000 IDR (15-20 €) in oltre un'ora. Per Bromo e Ijen si prosegue in treno verso Surabaya Gubeng (4-5 ore) e Probolinggo (altre 2 ore).",
    comeSpostarsi:
      'Treno tra le città principali (rete efficiente Giacarta-Yogyakarta-Surabaya), auto con autista per le escursioni a Bromo e Ijen.',
    periodoMigliore: 'maggio-settembre, cieli più tersi per l\'alba al Bromo',
    costi: "Ingressi: Borobudur e Prambanan circa 25 USD ciascuno per gli stranieri, con la salita su Borobudur a parte; Bromo circa 255.000 IDR; Ijen 100.000-150.000 IDR (2025-26). Budget: circa 25-35 € al giorno con guesthouse, warung, treni e minivan pubblici. Medio: 50-80 € con hotel a Prawirotaman, auto con autista per i templi e jeep condivisa al Bromo. Alto: oltre 150 € con hotel di categoria e tour privati per i vulcani.",
    erroriDaEvitare: [
      'Salire al Kawah Ijen senza maschera antigas: i fumi di zolfo sono pericolosi',
      'Sottovalutare il traffico di Giacarta nella pianificazione degli spostamenti',
    ],
    miaEsperienza:
      'Giava è la parte di Indonesia che fa meno vacanza e lascia il ricordo più netto. L\'Ijen soprattutto: siamo partiti all\'una di notte e siamo saliti al buio con la maschera antigas addosso. Scesi nel cratere, le fiamme blu erano più piccole di come appaiono nelle foto; enorme era tutto il resto. Accanto passavano i minatori con ceste di zolfo da ottanta chili sulle spalle, scalzi o quasi, e lì dentro il turismo assume un peso diverso. Al Bromo è successo l\'opposto: l\'alba dal Penanjakan è spettacolare, ma è anche un parcheggio con centinaia di jeep e file di persone col telefono alzato. Vale comunque, a patto di saperlo prima. Borobudur all\'alba è una delle poche cose che regge il proprio mito, ma il biglietto per salire sulla struttura è a numero chiuso e si esaurisce con largo anticipo.',
    luoghi: [
      {
        nome: "Borobudur",
        testo: "Il tempio buddista più grande del mondo, del IX secolo, con nove piattaforme sovrapposte, sei quadrate e tre circolari, 2.672 pannelli in rilievo e in origine 504 statue del Buddha. All'alba, con la nebbia sulla pianura, è uno dei pochi luoghi che regge il proprio mito.",
        come: "Da Yogyakarta in auto o bus. La salita alla struttura è a numero chiuso, con guida e sandali speciali: si prenota online sul sito ufficiale con largo anticipo.",
        quando: "All'alba o al tramonto, con pacchetti dedicati a pagamento. La salita sulla struttura è divisa in fasce orarie a numero chiuso e si esaurisce.",
        tempo: "3 ore",
        costo: "Per gli stranieri circa 25 USD, circa 22 € (2025), per il parco; la salita sulla struttura, con guida e sandali upanat, è un biglietto a parte a turni, con circa 1.200 posti al giorno. Gli indonesiani pagano meno.",
        orari: "Salita sulla struttura tutti i giorni 8:30-17:00, a turni. Il lunedì l'area dei templi può restare chiusa per manutenzione: controllare sul sito ufficiale.",
        lat: -7.608,
        lng: 110.204,
        url: "https://ticket.borobudurpark.com/en",
        consiglio: "Prenotare il biglietto per salire con largo anticipo, perché è a numero chiuso.",
      },
      {
        nome: "Prambanan",
        testo: "Il più grande complesso di templi induisti dell'Indonesia, della metà del IX secolo, con le torri dedicate a Shiva, Vishnu e Brahma; quella di Shiva, alta 47 metri, è la più alta del complesso. I rilievi del tempio di Shiva e di quello di Brahma raccontano il Ramayana.",
        come: "Poco fuori Yogyakarta, in bus urbano o taxi. Si visita da soli o con guida.",
        quando: "Al mattino o al tramonto. Il lunedì, per manutenzione, si visita solo il parco intorno ai templi: controllare sul sito ufficiale. In alcune serate si tiene il balletto del Ramayana.",
        tempo: "2 ore",
        costo: "Per gli stranieri circa 25 USD, circa 22 € (2025). Il biglietto comprende anche i templi di Lumbung, Bubrah e Sewu, nello stesso parco.",
        orari: "Tutti i giorni dalle 6:30; chiude nel tardo pomeriggio, con l'ultimo ingresso circa un'ora prima.",
        lat: -7.75222,
        lng: 110.49167,
        url: "https://ticket.borobudurpark.com/en",
        consiglio: "Controllare le date del balletto: in alcuni periodi si tiene al tramonto con le torri illuminate.",
      },
      {
        nome: "Gunung Bromo",
        testo: "Un cratere fumante dentro la caldera del Tengger, circondato dal Mare di Sabbia. L'alba dal punto panoramico di Penanjakan è una delle immagini più famose di Giava.",
        come: "Da Cemoro Lawang o da Surabaya con jeep 4x4 prenotata la sera prima. Si parte nel cuore della notte. Il biglietto si compra online sul sito ufficiale del parco, prima della visita. Dal Mare di Sabbia all'orlo del cratere si sale a piedi, con una scalinata finale di circa 250 gradini.",
        quando: "All'alba, da aprile a ottobre il cielo è più terso. Prima di partire va controllato che il parco sia aperto: nel 2026 è rimasto chiuso per settimane dopo un incendio.",
        tempo: "mezza giornata",
        costo: "Ingresso per gli stranieri circa 255.000 IDR, circa 15 € (2026), più caro nel fine settimana, con prenotazione online. Jeep condivisa circa 700.000-900.000 IDR a veicolo (40-50 €), da dividere in 4-6.",
        lat: -7.94167,
        lng: 112.95,
        url: "https://bromotenggersemeru.org/",
        consiglio: "L'alba dal Penanjakan è spettacolare ma affollata di jeep: andarci sapendolo.",
      },
      {
        nome: "Kawah Ijen e il fuoco blu",
        testo: "Il più grande lago craterico fortemente acido del mondo, largo circa un chilometro, turchese, e di notte le fiamme blu dei gas solforosi che bruciano. Nel cratere lavorano i minatori di zolfo, che portano a spalla carichi pesantissimi.",
        come: "Da Banyuwangi o da Licin in auto fino a Paltuding, poi a piedi fino al bordo del cratere e, dove è permesso, giù verso il lago. Serve una maschera antigas vera. I biglietti si comprano online; il parco chiede anche un certificato medico recente (spesso lo organizzano hotel e tour).",
        quando: "Il cancello di Paltuding apre alle 2 e chiude a mezzogiorno; il fuoco blu si vede solo con il buio, prima dell'alba. Il cratere chiude un giorno al mese per la pulizia e con maltempo o attività vulcanica.",
        tempo: "mezza giornata",
        costo: "Stranieri 100.000 IDR nei feriali e 150.000 IDR nel fine settimana e nei festivi, circa 6-9 € (2025).",
        orari: "Cancello di Paltuding dalle 2 a mezzogiorno. Chiuso per manutenzione il primo venerdì del mese e con fumi, maltempo o attività vulcanica.",
        lat: -8.0575,
        lng: 114.2415,
        url: "https://ayoketamannasional.kehutanan.go.id/en/taman-wisata-alam/kawah-ijen",
        consiglio: "Portare una maschera antigas vera e non un foulard; non fotografare i minatori senza chiedere.",
      },
      {
        nome: "Kraton di Yogyakarta e Taman Sari",
        testo: "Il palazzo del sultano, ancora in uso, con un museo e spettacoli di gamelan. Dentro il recinto del Kraton c'è il Taman Sari, il «castello d'acqua» costruito nel XVIII secolo, con vasche e padiglioni.",
        come: "A piedi o in becak da Malioboro.",
        quando: "Al mattino. Il Kraton ha orari ridotti nei giorni di cerimonia.",
        tempo: "2 ore",
        costo: "Kraton circa 25.000 IDR per gli stranieri, Taman Sari a parte circa 25.000 IDR: circa 1,5 € ciascuno (2025).",
        orari: "Kraton dal martedì alla domenica 9:00-14:00, chiuso il lunedì e durante le cerimonie di corte.",
        lat: -7.80569,
        lng: 110.36406,
        consiglio: "Visitare entrambi nello stesso giro, poi perdersi nelle vie del quartiere dei batik. Ignorare chi propone una «mostra di batik degli studenti, solo oggi»: porta in un negozio a prezzi gonfiati.",
      },
      {
        nome: "Punthuk Setumbu",
        testo: "Una collina boscosa a pochi chilometri da Borobudur, da cui all'alba si vede il tempio emergere dalla nebbia, con i vulcani Merapi e Merbabu sullo sfondo. È l'alternativa più semplice quando i posti per l'alba sopra il tempio sono finiti.",
        come: "In auto da Yogyakarta, circa un'ora e mezza; dal parcheggio una breve salita a piedi su gradini fino alla piattaforma.",
        quando: "Prima dell'alba, poi si entra a Borobudur con il primo turno.",
        tempo: "1,5 ore",
        lat: -7.60741,
        lng: 110.17784,
        consiglio: "Le giornate secche, da maggio a settembre, danno più possibilità di vedere nebbia bassa e vulcani insieme.",
      },
      {
        nome: "Candi Ratu Boko",
        testo: "I resti di un complesso dell'VIII-IX secolo su un altopiano a sud di Prambanan: una grande porta in pietra, terrazze, vasche e basamenti. Più che i ruderi conta la posizione, con la vista sulla pianura e sul Merapi al tramonto.",
        come: "Pochi chilometri a sud di Prambanan, in auto o taxi; si abbina facilmente nello stesso pomeriggio.",
        quando: "Nel tardo pomeriggio, per il tramonto dalla porta.",
        tempo: "1,5-2 ore",
        orari: "Tutti i giorni dalle 7:00.",
        lat: -7.77,
        lng: 110.48889,
        url: "https://ticket.borobudurpark.com/en",
      },
      {
        nome: "Candi Sewu",
        testo: "Il secondo complesso buddista di Giava dopo Borobudur, dell'VIII secolo: un tempio centrale circondato da file di templi minori, molti in parte ricostruiti. È nello stesso parco di Prambanan ed è quasi sempre vuoto.",
        come: "A piedi o con le biciclette e le navette interne del parco di Prambanan, circa 800 metri a nord dei templi principali.",
        quando: "Dopo Prambanan, un'ora e mezza prima della chiusura.",
        tempo: "45 minuti",
        costo: "Compreso nel biglietto di Prambanan.",
        lat: -7.74393,
        lng: 110.49284,
        url: "https://ticket.borobudurpark.com/en",
      },
      {
        nome: "Cascata di Madakaripura",
        testo: "La cascata più alta di Giava, nascosta in fondo a un canyon stretto, con un salto di oltre 200 metri. Per arrivarci si cammina lungo il fiume e si passa sotto cascate minori: ci si bagna di sicuro.",
        come: "A circa 45 minuti d'auto dall'area del Bromo; circa un chilometro a piedi lungo il fiume, poi altri 500 metri guadando.",
        quando: "In mattinata, dopo l'alba al Bromo; nella stagione secca, perché con le piogge il fiume si ingrossa.",
        tempo: "2-3 ore",
        lat: -7.84472,
        lng: 113.0175,
        consiglio: "Sandali, un cambio e una busta stagna per telefono e documenti.",
      },
      {
        nome: "Malioboro e i laboratori di batik",
        testo: "La via dello shopping di Yogyakarta e i laboratori di batik dove si può imparare la tecnica con la cera e le tinture.",
        come: "A piedi. I corsi si prenotano nei laboratori del quartiere di Taman Sari.",
        quando: "Il pomeriggio e la sera.",
        tempo: "2-3 ore",
        lat: -7.79336,
        lng: 110.36571,
        consiglio: "Un corso di batik è un buon modo di vedere un'artigianalità viva.",
      },
      {
        nome: "Kotagede",
        testo: "Il quartiere più antico di Yogyakarta, prima capitale del regno di Mataram nel XVI secolo, con vicoli stretti, case tradizionali, la vecchia moschea e le tombe reali. È noto soprattutto per i laboratori di argento, dove si vede lavorare la filigrana.",
        come: "Circa 5 km a sud-est del centro, in Grab o Gojek; il quartiere si gira a piedi.",
        quando: "Al mattino, con i laboratori aperti.",
        tempo: "2 ore",
        lat: -7.81786,
        lng: 110.39541,
      },
      {
        nome: "Kota Tua, Giacarta",
        testo: "La vecchia Batavia coloniale olandese, con la piazza Fatahillah, i palazzi porticati dell'amministrazione e i musei ospitati negli edifici storici. È il posto giusto per vedere Giacarta in mezza giornata, prima del volo per Yogyakarta.",
        come: "In Grab o con la linea di bus TransJakarta fino alla stazione Jakarta Kota; poi a piedi intorno alla piazza.",
        quando: "Al mattino o nel tardo pomeriggio, evitando il caldo delle ore centrali.",
        tempo: "2-3 ore",
        lat: -6.13468,
        lng: 106.81324,
      },
      {
        nome: "Monas, Giacarta",
        testo: "Il monumento nazionale, un obelisco di 132 metri con la cima dorata al centro della piazza Merdeka. Dalla terrazza in cima, nelle giornate senza foschia, si vede la città stendersi fino all'orizzonte.",
        come: "In Grab da Kota Tua, pochi minuti. La salita in cima ha un biglietto a parte e posti limitati.",
        quando: "Al mattino, quando la foschia è più leggera e le code più corte.",
        tempo: "1-1,5 ore",
        lat: -6.17539,
        lng: 106.82714,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno: i templi di Yogyakarta",
        tappe: [
          "Alba a Borobudur, o a Punthuk Setumbu se i posti sono finiti",
          "Salita sulla struttura con il primo turno",
          "Pausa nelle ore calde a Yogyakarta",
          "Pomeriggio a Prambanan e Candi Sewu, tramonto tra le torri",
        ],
      },
      {
        titolo: "2 giorni: Yogyakarta",
        tappe: [
          "Giorno 1: Borobudur all'alba, Prambanan e Sewu al tramonto",
          "Giorno 2: Kraton e Taman Sari al mattino, laboratorio di batik",
          "Giorno 2: Kotagede nel pomeriggio, sera su Malioboro con il gudeg",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Yogyakarta, Kraton e Taman Sari, cena a Malioboro",
          "Giorno 2: alba a Borobudur, Prambanan nel pomeriggio",
          "Giorno 3: treno per Surabaya o Probolinggo, notte a Cemoro Lawang",
        ],
      },
      {
        titolo: "6-8 giorni",
        tappe: [
          "Giorni 1-3 come sopra",
          "Giorno 4: alba al Bromo, trasferimento verso Banyuwangi",
          "Giorno 5: Ijen nella notte, riposo",
          "Giorni 6-8: Bali o rientro",
        ],
      },
    ],
    zone: [
      {
        nome: "Prawirotaman (Yogyakarta)",
        perChi: "chi vuole stare più tranquillo",
        testo: "Quartiere di caffè e guesthouse, meno caotico di Malioboro.",
        fascia: "15-70 €",
      },
      {
        nome: "Malioboro",
        perChi: "chi vuole il cuore turistico",
        testo: "Vicino alla stazione e alle bancarelle. Rumoroso.",
        fascia: "20-80 €",
      },
      {
        nome: "Cemoro Lawang",
        perChi: "chi vuole il Bromo",
        testo: "Villaggio sul bordo del cratere, con alloggi semplici. Fa freddo la notte.",
        fascia: "15-70 €",
      },
      {
        nome: "Banyuwangi o Licin",
        perChi: "chi va all'Ijen",
        testo: "Alloggi semplici per partire nel cuore della notte.",
      },
    ],
    sapori: [
      {
        nome: "Gudeg",
        testo: "Stufato dolce di jackfruit, piatto identitario di Yogyakarta. Divide chi lo assaggia."
      },
      {
        nome: "Nasi goreng e mie goreng",
        testo: "Riso e noodles saltati, dai carretti serali."
      },
      {
        nome: "Sate ayam",
        testo: "Spiedini di pollo con salsa di arachidi."
      },
      {
        nome: "Tempeh",
        testo: "Soia fermentata, inventata proprio a Giava, fritta e mangiata come spuntino."
      }
    ],
    attenzioni: [
      "Ijen: senza maschera antigas i fumi di zolfo sono pericolosi.",
      "Il traffico di Giacarta rende i tempi di percorrenza imprevedibili.",
      "Bromo: concordare il prezzo della jeep prima di partire; il Penanjakan è affollato.",
      "I taxi non ufficiali alle stazioni chiedono tariffe alte: usare Grab o taxi con tassametro."
    ],
    gite: [
      {
        nome: "Vulcano Merapi",
        distanza: "circa 30 km, 1 ora d'auto",
        come: "Con un'auto con autista fino a Kaliurang, poi in jeep con i tour locali sulle colate dell'eruzione del 2010.",
        testo: "Il vulcano più attivo dell'Indonesia domina la pianura di Yogyakarta. I giri in jeep passano tra i villaggi sepolti e i campi di lava, con il cono che fuma sullo sfondo nelle mattine limpide. Con allerta vulcanica alta le zone vicine al cratere chiudono.",
      },
      {
        nome: "Spiaggia di Parangtritis",
        distanza: "circa 28 km, 45 minuti-1 ora d'auto",
        come: "In Grab o scooter da Yogyakarta, verso sud.",
        testo: "Una lunga spiaggia di sabbia scura sull'Oceano Indiano, con dune e scogliere, legata alle leggende della regina del mare del Sud. Si viene per il tramonto: il mare ha correnti forti e il bagno è sconsigliato.",
      },
      {
        nome: "Altopiano di Dieng",
        distanza: "circa 120 km, 3-4 ore d'auto",
        come: "Con auto e autista, partendo prima dell'alba; giornata lunga, meglio con una notte sul posto.",
        testo: "Un altopiano vulcanico a oltre 2.000 metri con alcuni dei templi induisti più antichi di Giava, laghi colorati e crateri fumanti. Fa freddo, soprattutto all'alba.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Giava?",
        risposta: "Tre giorni bastano per Yogyakarta con Borobudur e Prambanan. Per aggiungere Bromo e Ijen servono 6-8 giorni, perché i trasferimenti in treno e in auto sono lunghi.",
      },
      {
        domanda: "Serve prenotare la salita su Borobudur?",
        risposta: "Sì. La salita sulla struttura è a turni con guida e circa 1.200 posti al giorno, e si esaurisce con largo anticipo: va comprata sul portale ufficiale prima di partire.",
      },
      {
        domanda: "Conviene fare Borobudur e Prambanan nello stesso giorno?",
        risposta: "Sì, è la combinazione più comune: Borobudur all'alba, pausa nelle ore calde, Prambanan nel pomeriggio fino al tramonto. Sono ai lati opposti di Yogyakarta, quindi serve un'auto con autista.",
      },
      {
        domanda: "Come si va da Yogyakarta al Bromo?",
        risposta: "In treno fino a Surabaya Gubeng (4-5 ore), poi a Probolinggo (circa 2 ore) e in minivan pubblico fino a Cemoro Lawang, circa 35.000 IDR. All'uscita della stazione di Probolinggo conviene ignorare chi dice che i minivan sono già partiti.",
      },
      {
        domanda: "Si può salire all'Ijen senza tour?",
        risposta: "Sì, con un'auto con autista da Banyuwangi o Licin fino a Paltuding e il biglietto comprato online. Servono comunque una maschera antigas vera, una frontale e il controllo medico richiesto dal parco.",
      },
      {
        domanda: "Qual è il periodo migliore per Giava?",
        risposta: "Da maggio a settembre, la stagione secca, quando il cielo all'alba sul Bromo e su Borobudur è più terso. Da novembre a marzo piove spesso e i sentieri dei vulcani possono chiudere.",
      },
    ],
    esperienzeSlugs: ['alba-bromo-jeep'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'indonesia-isola-per-isola'],
    imageAlt: 'Una testa di Buddha in pietra di Borobudur, di spalle, davanti alla valle avvolta nella nebbia dell\'alba, Giava',
    immagine: '/images/indonesia/borobudur-buddha-nebbia-riccardo.jpg',
  },
  {
    slug: 'bali',
    paeseSlug: 'indonesia',
    ordine: 3,
    nome: 'Bali',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: '7-10 giorni per coprire Ubud, il sud e almeno una delle isole vicine',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più conosciuta dell\'arcipelago: risaie a terrazza, templi a picco sul mare, spiagge da surf e una scena di vita notturna e benessere molto sviluppata.',
    percheAndarci:
      'In poco spazio ci sono anime molto diverse: la calma culturale di Ubud, il surf e la vita notturna del sud, le scogliere di Uluwatu e Nusa Penida raggiungibile in barca.',
    cosaVedere: [
      'Le risaie a terrazza di Tegalalang e la foresta delle scimmie a Ubud',
      'Il tempio di Uluwatu, su una scogliera a strapiombo sul mare',
      'Tanah Lot, il tempio su uno scoglio circondato dalla marea',
      'Kelingking Beach e Angel\'s Billabong a Nusa Penida',
    ],
    cosaFare: [
      'Sunrise trekking sul vulcano Gunung Batur',
      'Giornata (o più) alle isole Nusa Penida per Kelingking Beach e i punti snorkeling con le manta (c\'è una scheda esperienza dedicata)',
      'Surf a Canggu o Uluwatu, per tutti i livelli',
      'Danza Kecak al tramonto al tempio di Uluwatu',
      'Giro in scooter tra le risaie dell\'entroterra di Ubud',
    ],
    doveDormire:
      'Ubud per la parte culturale e le risaie, Canggu per il surf e la vita serale, Uluwatu per le scogliere e la calma relativa, Sanur o Nusa Dua per un ritmo più tranquillo e familiare. Dormire una notte a Nusa Penida evita la traversata doppia in giornata.',
    doveMangiare:
      'L\'errore è mangiare solo nei caffè per stranieri, che sono ovunque e ottimi ma raccontano poco. Il babi guling, il maialino da latte allo spiedo, è il piatto balinese per eccellenza e si trova nei locali specializzati che aprono a pranzo e chiudono quando finiscono; il bebek betutu, l\'anatra cotta per ore nelle spezie, va spesso ordinato il giorno prima. Nei warung di quartiere si mangia con pochi euro, e la qualità non c\'entra niente col prezzo.',
    comeArrivare: "Si atterra all'aeroporto Ngurah Rai di Denpasar (DPS), dall'Europa con uno scalo, di solito a Singapore, Doha, Dubai o Istanbul. Non ci sono treni né metro: al banco ufficiale dei taxi negli arrivi la tariffa è fissa per zona, circa 150.000-250.000 IDR per Kuta, Seminyak o Sanur e 300.000-450.000 IDR per Ubud, che dista da 1 a 2 ore secondo il traffico; Uluwatu è a circa 45 minuti. Grab e Gojek costano meno, dal punto di ritiro indicato nell'app. Prima di partire si pagano online l'e-VOA e la tassa turistica Love Bali (150.000 IDR) e si compila la All Indonesia Arrival Card.",
    comeSpostarsi:
      'Scooter a noleggio (patente internazionale consigliata, controlli frequenti) o autista privato/Grab per gli spostamenti più lunghi.',
    periodoMigliore: 'aprile-ottobre, stagione secca',
    costi: "Variano molto: è tra le mete indonesiane con più offerta, sia economica sia di fascia alta. Budget: circa 30-40 € al giorno con guesthouse, warung e scooter (60.000-100.000 IDR al giorno). Medio: 80-120 € con villa o boutique hotel e qualche giornata con driver (300.000-600.000 IDR a tratta). Alto: oltre 200 € con resort e driver fisso. Tassa turistica 150.000 IDR a persona.",
    erroriDaEvitare: [
      'Noleggiare uno scooter senza patente internazionale: i controlli sono frequenti e le multe salate',
      'Sottovalutare il traffico tra Canggu e Seminyak nelle ore di punta',
      'Non prenotare in anticipo la barca per Nusa Penida in alta stagione',
    ],
    miaEsperienza:
      'Bali è due isole diverse a seconda di dove si dorme, ed è il motivo per cui riceve giudizi opposti. Il sud tra Canggu e Seminyak è fatto di cemento, traffico e locali pensati per chi arriva da fuori: ci si può divertire, ma l\'Indonesia è altrove. Bastano venti chilometri verso l\'interno e ricompaiono le offerte di fiori davanti alle case, rinnovate ogni mattina, e i templi in uso invece che in mostra: l\'isola torna quella che si veniva a cercare. Più di qualsiasi risaia o spiaggia mi è rimasta impressa la danza Kecak a Uluwatu al tramonto, con settanta uomini seduti in cerchio che fanno tutta la musica con la voce. Nusa Penida invece è ormai vittima del proprio successo (Kelingking a metà giornata è una coda di persone su un sentiero ripido) e conviene essere sulla prima barca del mattino.',
    luoghi: [
      {
        nome: "Ubud e le risaie di Tegalalang",
        testo: "Il centro culturale di Bali, con templi, laboratori, danze e risaie a terrazza intorno. Tegalalang è la più fotografata, ma l'entroterra ha vallate meno battute.",
        come: "Da Denpasar o dal sud in auto con autista o scooter: i tempi dipendono molto dal traffico. Le risaie si visitano a piedi.",
        quando: "Al mattino, prima dei gruppi.",
        tempo: "1 giorno",
        costo: "Tegalalang circa 25.000 IDR, circa 1,5 €, variabile secondo l'accesso; altalene a parte.",
        lat: -8.4335,
        lng: 115.279,
        consiglio: "Basta allontanarsi un po' verso l'interno per ritrovare le offerte di fiori davanti alle case e i templi in uso.",
      },
      {
        nome: "Monkey Forest di Ubud",
        testo: "Una foresta con templi e centinaia di macachi. Sono abituati ai visitatori e rubano occhiali, borse e cibo.",
        come: "A piedi dal centro di Ubud.",
        quando: "Al mattino.",
        tempo: "1 ora",
        costo: "Circa 130.000 IDR per gli adulti stranieri dall'aprile 2026, circa 7 €.",
        orari: "Tutti i giorni, circa 9-18.",
        lat: -8.5188,
        lng: 115.2585,
        url: "https://www.monkeyforestubud.com/",
        consiglio: "Non portare cibo né oggetti sporgenti: i macachi strappano tutto.",
      },
      {
        nome: "Tempio di Uluwatu e danza Kecak",
        testo: "Un tempio su una scogliera a strapiombo sul mare. La sera, nell'anfiteatro, si tiene la danza Kecak: decine di uomini seduti in cerchio fanno tutta la musica con la voce, senza strumenti, e raccontano il Ramayana.",
        come: "Da Canggu o Seminyak in auto o scooter; con il traffico serve margine. Ci sono macachi ovunque.",
        quando: "Al tramonto.",
        tempo: "2-3 ore",
        costo: "Tempio circa 50.000 IDR, circa 3 €; Kecak circa 150.000 IDR, circa 8 €, biglietto a parte.",
        orari: "La Kecak comincia ogni sera verso le 18; nei mesi di punta i posti finiscono.",
        lat: -8.8291,
        lng: 115.0849,
        consiglio: "Arrivare presto per avere un buon posto nell'anfiteatro.",
      },
      {
        nome: "Tanah Lot",
        testo: "Un tempio su uno scoglio al largo, circondato dalla marea. Uno dei punti più fotografati del tramonto di Bali.",
        come: "In auto da Canggu, poco lontano lungo la costa. Con la bassa marea si può arrivare alla base dello scoglio.",
        quando: "Al tramonto, ma è affollato.",
        tempo: "1 ora e mezza",
        lat: -8.6212,
        lng: 115.0868,
        consiglio: "Controllare la marea: con la bassa marea è più suggestivo.",
      },
      {
        nome: "Alba sul Gunung Batur",
        testo: "Un trekking notturno che porta in cima al vulcano, 1.717 metri, per l'alba sulla caldera e sul lago Batur. La salita è di qualche ora e non è tecnica.",
        come: "Con una guida locale, in pratica obbligatoria, partendo da Toya Bungkah o dai villaggi vicini; molte agenzie passano a prendere in hotel tra le 2 e le 3 di notte.",
        quando: "Partenza nel cuore della notte per essere in cima all'alba.",
        tempo: "Mezza giornata",
        costo: "Permesso circa 100.000 IDR a persona, circa 5,5 €, più la guida.",
        lat: -8.242,
        lng: 115.375,
        consiglio: "Portare una giacca: in cima fa freddo.",
      },
      {
        nome: "Tirta Empul",
        testo: "Il tempio delle sorgenti sacre, fondato nel X secolo, dove i balinesi fanno il bagno di purificazione sotto le fontane di pietra. Si può entrare nelle vasche con il sarong, seguendo la fila dei fedeli.",
        come: "Circa 30-40 minuti d'auto a nord di Ubud, verso Tampaksiring. Si abbina a Tegalalang.",
        quando: "All'apertura, prima dei gruppi; nei giorni di cerimonia le vasche possono essere riservate ai fedeli.",
        tempo: "1-1,5 ore",
        costo: "Circa 75.000 IDR per gli adulti stranieri, circa 4 € (2026); sarong in prestito o a noleggio.",
        orari: "Tutti i giorni, circa 8-18.",
        lat: -8.4155,
        lng: 115.3153,
        consiglio: "Chi entra in acqua salta le fontane riservate ai riti per i defunti: lo indicano i fedeli e i custodi.",
      },
      {
        nome: "Pura Besakih",
        testo: "Il «tempio madre» di Bali, sulle pendici del Gunung Agung a circa mille metri: un complesso di oltre venti templi su terrazze, il più importante dell'isola. Nei giorni di festa è pieno di processioni.",
        come: "Circa un'ora e mezza d'auto da Ubud. Si entra con la guida del tempio, che si prende all'ingresso: le guide che si offrono lungo la strada vanno ignorate.",
        quando: "Al mattino, quando l'Agung è libero dalle nuvole.",
        tempo: "2 ore",
        lat: -8.3739,
        lng: 115.4517,
      },
      {
        nome: "Pura Lempuyang",
        testo: "Il tempio all'estremità orientale dell'isola, famoso per la porta spaccata che inquadra il Gunung Agung, la «porta del paradiso». La foto si fa a turni e la coda può durare ore; i templi più in alto, su una scalinata lunga, sono quasi deserti.",
        come: "Circa 2 ore d'auto da Ubud. Le auto private si lasciano al terminal, poi una navetta obbligatoria porta all'ingresso.",
        quando: "All'alba, quando la coda è più corta e l'Agung si vede meglio.",
        tempo: "Mezza giornata con il viaggio",
        costo: "Circa 100.000 IDR più 50.000 per la navetta andata e ritorno, circa 8 € in tutto (2026), solo in contanti; sarong compreso.",
        lat: -8.3915,
        lng: 115.6305,
        consiglio: "Il riflesso «a specchio» delle foto è un trucco del fotografo con un vetro: non c'è nessun lago.",
      },
      {
        nome: "Tirta Gangga",
        testo: "Il giardino d'acqua dell'ultimo re di Karangasem, con vasche, fontane e pesci koi: si cammina sulle pietre che attraversano l'acqua. È la sosta naturale dopo Lempuyang.",
        come: "In auto, una ventina di minuti da Lempuyang.",
        quando: "Nella tarda mattinata, al ritorno da Lempuyang.",
        tempo: "1 ora",
        costo: "Piccolo biglietto d'ingresso.",
        lat: -8.412,
        lng: 115.587,
      },
      {
        nome: "Sidemen",
        testo: "Una valle di terrazze di riso ai piedi del Gunung Agung, meno turistica di Tegalalang, con villaggi di tessitori di songket. Non c'è un monumento da spuntare: si cammina tra i campi e ci si ferma in un warung con vista sul vulcano.",
        come: "Da Ubud circa 1h15-1h30 di strada, in scooter o con driver (andata e ritorno circa 350.000 IDR, circa 20 €).",
        quando: "Al mattino presto o nel tardo pomeriggio.",
        tempo: "Mezza giornata, o una notte",
        lat: -8.48,
        lng: 115.44,
        consiglio: "Per camminare tra le risaie conviene una guida del villaggio per un paio d'ore: i sentieri non sono segnalati e passano su proprietà private.",
      },
      {
        nome: "Kerta Gosa a Klungkung",
        testo: "Il padiglione di giustizia del vecchio regno di Klungkung, con i soffitti dipinti nello stile di Kamasan: pene dell'inferno e premi del paradiso, a fumetti. Accanto c'è il padiglione galleggiante e un piccolo museo.",
        come: "Sulla strada tra Ubud e Sidemen o Padang Bai, una fermata facile con il driver.",
        quando: "Di giorno, durante uno spostamento verso est.",
        tempo: "45 minuti",
        costo: "Biglietto d'ingresso modesto.",
        lat: -8.5355,
        lng: 115.4039,
      },
      {
        nome: "Risaie di Jatiluwih",
        testo: "Le terrazze più estese di Bali, patrimonio UNESCO per il subak, il sistema di irrigazione condiviso gestito dai templi dell'acqua. Si camminano su sentieri segnati di diverse lunghezze, con il monte Batukaru sullo sfondo.",
        come: "Circa 1,5-2 ore d'auto da Ubud; si abbina a Ulun Danu Beratan.",
        quando: "Al mattino, prima del caldo; prima del raccolto le terrazze sono verdi.",
        tempo: "2-3 ore",
        costo: "Circa 75.000 IDR per gli stranieri, circa 4 €.",
        lat: -8.37,
        lng: 115.131,
      },
      {
        nome: "Ulun Danu Beratan",
        testo: "Il tempio dedicato alla dea delle acque sul lago Beratan, a circa 1.200 metri, con i tetti a più piani che sembrano galleggiare. In quota fa fresco e la mattina c'è spesso la nebbia.",
        come: "In auto, nella zona di Bedugul, sulla strada tra il sud e Munduk o Lovina.",
        quando: "Al mattino presto, quando il lago è calmo.",
        tempo: "1 ora",
        costo: "Circa 100.000 IDR per gli stranieri dal luglio 2026, circa 5,5 €, in contanti o con carta.",
        lat: -8.2752,
        lng: 115.1668,
      },
      {
        nome: "Palazzo reale e tempio Saraswati di Ubud",
        testo: "Nel centro di Ubud il Puri Saren, il palazzo della famiglia reale, e poco più in là il tempio Saraswati con lo stagno di fior di loto. La sera, nei cortili, ci sono spettacoli di danza balinese quasi ogni giorno.",
        come: "A piedi, sulla strada principale di Ubud.",
        quando: "Di giorno per i cortili, la sera per le danze.",
        tempo: "1 ora, più lo spettacolo",
        costo: "Ingresso libero di giorno; biglietti per le danze serali in vendita all'ingresso nel pomeriggio.",
        lat: -8.5069,
        lng: 115.2625,
      },
      {
        nome: "Campuhan Ridge Walk",
        testo: "Un sentiero lastricato di circa due chilometri sulla cresta tra due valli fluviali, appena fuori Ubud, tra erba alta e palme. Alla fine ci sono caffè e risaie.",
        come: "A piedi dal centro di Ubud; si parte dietro il tempio Gunung Lebah.",
        quando: "All'alba o al tramonto: a metà giorno non c'è ombra.",
        tempo: "1-1,5 ore",
        costo: "Gratuito.",
        lat: -8.503,
        lng: 115.254,
      },
      {
        nome: "Spiagge di Uluwatu",
        testo: "Sulla penisola del Bukit le spiagge sono piccole calette sotto le falesie: Padang Padang, Bingin, Suluban, ognuna con la sua scalinata. Sono le onde da surf più famose di Bali.",
        come: "In scooter o con driver; si scende a piedi per scale ripide.",
        quando: "Con la bassa marea, quando c'è più sabbia; il tramonto dai warung di Bingin.",
        tempo: "Mezza giornata",
        costo: "Padang Padang circa 15.000 IDR per gli stranieri, in contanti.",
        lat: -8.811,
        lng: 115.103,
      },
      {
        nome: "Nusa Penida: Kelingking Beach",
        testo: "Una scogliera a forma di dinosauro sopra una spiaggia, il punto più fotografato dell'isola. Con Angel's Billabong e Manta Bay completa il giro.",
        come: "Con barca veloce da Sanur o Padang Bai, poi auto o scooter sull'isola.",
        quando: "Sulla prima barca del mattino, per evitare la coda sul sentiero ripido.",
        tempo: "1 giorno",
        lat: -8.7505,
        lng: 115.4746,
        consiglio: "Dormire una notte a Nusa Penida evita la traversata doppia in giornata.",
      },
    ],
    programmi: [
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Ubud, palazzo reale e Monkey Forest, Campuhan Ridge Walk al tramonto",
          "Giorno 2: alba sul Batur, al ritorno Tirta Empul e le risaie di Tegalalang",
          "Giorno 3: Uluwatu, spiagge con la bassa marea e danza Kecak al tramonto",
        ],
      },
      {
        titolo: "5 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: est di Bali, Lempuyang all'alba, Tirta Gangga, Kerta Gosa e la valle di Sidemen",
          "Giorno 4: Jatiluwih e Ulun Danu Beratan, Tanah Lot al tramonto",
          "Giorno 5: Uluwatu, spiagge e danza Kecak",
        ],
      },
      {
        titolo: "7 giorni",
        tappe: [
          "Giorni 1-5: come sopra",
          "Giorni 6-7: Nusa Penida sulla prima barca da Sanur, Kelingking prima della folla, notte sull'isola e rientro",
        ],
      },
    ],
    zone: [
      {
        nome: "Ubud",
        perChi: "chi cerca cultura e risaie",
        testo: "Cuore culturale, con guesthouse tra i campi. Molto turistico di giorno.",
        fascia: "35-150 €",
      },
      {
        nome: "Canggu",
        perChi: "chi cerca surf e vita serale",
        testo: "Locali, caffè e spiagge nere. Traffico pesante e cemento.",
        fascia: "50-180 €",
      },
      {
        nome: "Uluwatu",
        perChi: "chi cerca scogliere e calma relativa",
        testo: "Spiagge sotto le falesie e tramonti. Più tranquillo ma lontano da tutto.",
        fascia: "60-250 €",
      },
      {
        nome: "Sanur o Nusa Dua",
        perChi: "famiglie",
        testo: "Ritmo più tranquillo e mare riparato. Da Sanur partono le barche per le Nusa.",
        fascia: "50-250 €",
      },
    ],
    sapori: [
      {
        nome: "Babi guling",
        testo: "Maialino da latte allo spiedo, il piatto balinese per eccellenza. Si trova nei locali specializzati che aprono a pranzo e chiudono quando finiscono."
      },
      {
        nome: "Bebek betutu",
        testo: "Anatra cotta per ore nelle spezie, spesso da ordinare il giorno prima."
      },
      {
        nome: "Nasi campur",
        testo: "Riso con piccoli assaggi di carne, verdure e frittelle, nei warung di quartiere."
      },
      {
        nome: "Sate lilit",
        testo: "Spiedini di pesce o carne macinata avvolti su canna di bambù o di limone."
      }
    ],
    attenzioni: [
      "Scooter: serve la patente internazionale, i controlli sono frequenti e le multe alte.",
      "Traffico tra Canggu e Seminyak nelle ore di punta: lasciare molto margine.",
      "Cambiavalute e cocktail: usare cambi ufficiali e bere in locali affidabili. Il metanolo nei drink è un rischio segnalato dalle autorità.",
      "Nusa Penida: prenotare la barca in anticipo in alta stagione e partire presto.",
      "All'arrivo si paga la tassa turistica di Bali, 150.000 IDR a persona dal 2024: conviene pagarla online sul sito ufficiale Love Bali (lovebali.baliprov.go.id).",
    ],
    gite: [
      {
        nome: "Nusa Lembongan e Nusa Ceningan",
        distanza: "circa 30 minuti di barca veloce da Sanur",
        come: "Barca veloce da Sanur, più corse al giorno, da prenotare il giorno prima; sull'isola scooter o pick-up con autista.",
        testo: "Più tranquille di Penida: mangrovie da girare in barca, il ponte giallo verso Ceningan, la Blue Lagoon e uscite di snorkeling. Si fanno in giornata, ma una notte rende tutto più calmo.",
      },
      {
        nome: "Isole Gili",
        distanza: "1,5-2 ore di barca veloce da Padang Bai",
        come: "Barca veloce da Padang Bai (circa 350.000-475.000 IDR a tratta), più cara da Sanur; comprare dalla compagnia, non dai venditori al porto.",
        testo: "Tre isolotti senza auto davanti a Lombok: Trawangan festaiola, Air a metà, Meno silenziosa, con le tartarughe a pochi metri dalla riva. In giornata non ha senso: servono almeno due notti.",
      },
      {
        nome: "Isola di Menjangan",
        distanza: "circa 3-4 ore d'auto dal sud, poi 30-40 minuti di barca",
        come: "In auto fino al molo di Labuan Lalang, nel parco nazionale di Bali Barat, poi barca con guida.",
        testo: "Il miglior snorkeling di Bali: pareti di corallo che scendono a picco in acqua limpida, nel parco nazionale dell'ovest. Si combina con una notte a Pemuteran o Munduk.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Bali?",
        risposta: "Da 7 a 10 giorni per Ubud, il sud e almeno una delle isole vicine. Con meno di cinque si sceglie: Ubud e Uluwatu, rinunciando all'est.",
      },
      {
        domanda: "Dove conviene dormire a Bali?",
        risposta: "In due basi: Ubud per le risaie e i templi dell'interno, Uluwatu o Sanur per il mare. Cambiare base evita ore di traffico ogni giorno.",
      },
      {
        domanda: "Cosa serve per entrare a Bali?",
        risposta: "Passaporto con sei mesi di validità, e-VOA online (circa 500.000 IDR, circa 35 €), la All Indonesia Arrival Card e la tassa turistica Love Bali di 150.000 IDR, da pagare online su lovebali.baliprov.go.id.",
      },
      {
        domanda: "Meglio scooter o autista a Bali?",
        risposta: "Lo scooter costa 60.000-100.000 IDR al giorno, ma serve la patente internazionale e un'esperienza vera nel traffico. Il driver costa 300.000-600.000 IDR a tratta e per le gite lunghe è la scelta più sensata.",
      },
      {
        domanda: "Qual è il periodo migliore per Bali?",
        risposta: "Da aprile a ottobre, nella stagione secca. A marzo, nel giorno di Nyepi, l'isola si ferma per 24 ore e chiude anche l'aeroporto.",
      },
      {
        domanda: "Nusa Penida si può fare in giornata?",
        risposta: "Sì, ma è faticoso: due traversate e strade lente. Meglio dormire una notte sull'isola ed essere a Kelingking con la prima barca del mattino.",
      },
    ],
    esperienzeSlugs: ['giornata-nusa-penida'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'bali-nusa-komodo', 'bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: "Le risaie a terrazze di Jatiluwih, a Bali, lucide d'acqua fino all'orizzonte, viste dal drone",
    immagine: '/images/indonesia/jatiluwih-terrazze-riccardo.jpg',
  },
  {
    slug: 'sulawesi',
    paeseSlug: 'indonesia',
    ordine: 4,
    nome: 'Sulawesi',
    tipologia: ['cultura', 'natura', 'diving'],
    giorniConsigliati: '7-9 giorni tra Tana Toraja e Bunaken',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola dalla forma unica, divisa tra le tradizioni funerarie e i villaggi di montagna di Tana Toraja e i reef del Bunaken National Park, all\'estremo nord.',
    percheAndarci:
      'Offre due esperienze quasi opposte: una cultura che tratta la morte come un evento sociale invece che come un tabù, e uno dei parchi marini più belli del sud-est asiatico.',
    cosaVedere: [
      'I villaggi tongkonan di Tana Toraja, con le case dal tetto a barca',
      'Le tombe scavate nella roccia e le "tau tau", le effigi lignee dei defunti',
      'Il reef del Bunaken National Park, con pareti coralline verticali',
      'Makassar e il forte olandese di Fort Rotterdam',
    ],
    cosaFare: [
      'Assistere, con una guida locale che spieghi l\'etichetta, a una cerimonia funebre Toraja se capita nel periodo giusto',
      'Trekking tra i villaggi di montagna intorno a Rantepao',
      'Diving o snorkeling nel Bunaken National Park (c\'è una scheda esperienza dedicata)',
    ],
    doveDormire:
      'Rantepao è la base naturale per tutta Tana Toraja, con guesthouse semplici in centro; per Bunaken si sceglie tra i dive resort sull\'isola stessa, più comodi per le immersioni all\'alba, e Manado sulla terraferma, più economica ma con la traversata in barca ogni giorno.',
    doveMangiare:
      'Sulawesi ha una cucina molto piccante, soprattutto nel nord attorno a Manado: il piatto da conoscere è il rica-rica, a base di peperoncino in quantità che non si negoziano. A Makassar si mangia il coto makassar, zuppa di manzo servita a colazione, e il pesce alla griglia sul lungomare la sera. In Tana Toraja compaiono maiale e bufalo, perché la zona è cristiana: il pa\'piong, carne cotta dentro un tubo di bambù, spesso va ordinato in anticipo.',
    comeArrivare:
      "Gli aeroporti sono due: Makassar (UPG), lo snodo del sud, e Manado (MDC), la porta del nord. Da Makassar a Rantepao il bus notturno parte la sera dal terminal Daya e arriva al mattino presto dopo circa 9-10 ore, per 200.000-350.000 IDR secondo la classe (circa 11-19 €); il volo per l'aeroporto di Toraja dura circa 55 minuti, ma i voli sono pochi e possono saltare. Da Denpasar a Manado c'è un diretto di circa 2,5 ore quando la rotta è attiva, altrimenti si passa da Makassar in 4-5 ore. Dall'aeroporto di Manado a Tomohon servono 1-1,5 ore d'auto; per Bunaken la barca dal molo di Manado impiega 30-60 minuti.",
    comeSpostarsi: 'Bus o auto con autista per Tana Toraja; barca dal molo di Manado per Bunaken. Per organizzare tutto consiglio Wale Adventure (wale-adventure.com), tour operator locale: gentili e bravi, con tour privati su tutta l\'isola e una vanilla farm da visitare (il loro sito l\'ho fatto io).',
    periodoMigliore: 'maggio-ottobre',
    costi:
      "Tangkoko circa 100.000 IDR al giorno per gli stranieri (circa 5 €), di più nel fine settimana, guida a parte; Bunaken circa 50.000 IDR al giorno (circa 3 €), spesso incluso nei tour (2026). Budget: circa 30-40 € al giorno con guesthouse, warung e bus. Medio: 70-110 € con hotel a Rantepao e Manado, autista e guida. Alto: oltre 150 € con dive resort a Bunaken e tour privati.",
    erroriDaEvitare: [
      'Partecipare a cerimonie funebri senza una guida che spieghi l\'etichetta: sono eventi privati, aperti ai visitatori solo con certe regole di rispetto',
    ],
    miaEsperienza:
      'Tana Toraja è la cosa più diversa che ho visto in Indonesia, e non è un posto da cartolina. Un funerale toraja dura giorni, raduna centinaia di persone e prevede il sacrificio di bufali davanti a tutti. Della sobrietà cui siamo abituati non ha niente: è una festa costosissima, per cui le famiglie risparmiano per anni. Da estranei si può assistere (si porta un regalo, di solito zucchero o sigarette, e si sta dove indica la guida), ma bisogna essere pronti a vedere cose che colpiscono. Bunaken è l\'altra faccia: pareti coralline che scendono a picco per centinaia di metri, dove ci si gira sulla schiena e sotto non c\'è più fondo. Tra le due, quella che ha cambiato qualcosa in me è Toraja.',
    luoghi: [
      {
        nome: "Rantepao e i villaggi tongkonan",
        testo: "Il cuore di Tana Toraja, con le case dal tetto a barca (tongkonan) e le risaie. Kete Kesu è uno dei villaggi più noti, con case, granai e tombe.",
        come: "Toraja è lontana da Makassar: un lungo viaggio in bus notturno o in auto, oppure con voli interni. I villaggi si visitano con guida.",
        quando: "Nella stagione secca. Le date dei funerali le decidono le famiglie: la guida sa se ce n'è uno in corso.",
        tempo: "2-3 giorni",
        lat: -2.97046,
        lng: 119.89872,
        consiglio: "Prendere una guida locale che spieghi i simboli: senza si perde metà del significato.",
      },
      {
        nome: "Ke'te Kesu",
        testo: "Il villaggio tongkonan più visitato di Tana Toraja: una fila di case dal tetto a barca davanti ai granai di riso, con le corna di bufalo appese alle facciate come segno di rango. Dietro il villaggio, sulla parete di roccia, ci sono tombe antiche e bare di legno appese. È il posto giusto per capire come è fatto un villaggio toraja prima di vedere gli altri.",
        come: "A pochi chilometri a sud-est di Rantepao, in auto, scooter o con la guida.",
        quando: "Al mattino presto, prima dei gruppi.",
        tempo: "1-1,5 ore",
        costo: "Piccolo biglietto d'ingresso, pagato all'entrata.",
        lat: -2.99664,
        lng: 119.91026,
      },
      {
        nome: "Tombe nella roccia",
        testo: "Tombe scavate nella parete di roccia e grotte funerarie, come il cimitero di Lemo, ricavato nella roccia a strapiombo. In alcuni siti le «tau tau», le effigi lignee dei defunti, guardano dai balconi.",
        come: "Con la guida da Rantepao, in auto o scooter.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        costo: "Piccolo biglietto d'ingresso a ogni sito, pagato all'entrata.",
        lat: -3.04979,
        lng: 119.89287,
        consiglio: "Portare una torcia per le grotte e rispettare le tombe: non toccare le ossa.",
      },
      {
        nome: "Londa",
        testo: "Grotte funerarie alla base di una parete di roccia, con le tau tau allineate su un balcone scavato sopra l'ingresso. Dentro, al buio, ci sono bare, teschi e ossa lasciati dalle famiglie, spesso con offerte di sigarette. È uno dei siti funerari più suggestivi della zona, e uno dei più vicini a Rantepao.",
        come: "A sud di Rantepao, in auto o scooter. All'ingresso ci sono guide locali con le lampade per entrare nelle grotte.",
        quando: "Al mattino.",
        tempo: "1 ora",
        costo: "Piccolo biglietto d'ingresso; la guida con la lampada si paga a parte.",
        lat: -3.01491,
        lng: 119.87589,
        consiglio: "Nei passaggi bassi si cammina chinati: scarpe chiuse e niente borse ingombranti.",
      },
      {
        nome: "Un funerale toraja",
        testo: "Un funerale dura più giorni, raduna spesso centinaia di persone e prevede il sacrificio di bufali. Le famiglie risparmiano per anni. È una festa costosissima, non un lutto sobrio.",
        come: "Solo con una guida che spieghi l'etichetta. Si porta un regalo, di solito zucchero o sigarette, e si sta dove indica la guida.",
        quando: "Quando la famiglia lo celebra: le date non sono fisse e si scoprono sul posto, con la guida.",
        tempo: "mezza giornata",
        consiglio: "Prepararsi a vedere cose che colpiscono. Per organizzare il viaggio: Wale Adventure (wale-adventure.com), operatore locale.",
      },
      {
        nome: "Batutumonga e i sentieri del Sesean",
        testo: "Un villaggio sulle pendici del monte Sesean, a nord di Rantepao, con risaie terrazzate che scendono verso la valle e la vista su tutta la piana. Da qui si scende a piedi per qualche ora tra campi, tongkonan isolati e piccoli villaggi. È il modo più lento e meno turistico di vedere la cultura toraja.",
        come: "In auto fino al villaggio, poi a piedi in discesa con una guida da concordare a Rantepao, a giornata.",
        quando: "Nella stagione secca, partendo al mattino.",
        tempo: "1 giorno",
        lat: -2.91039,
        lng: 119.88334,
        consiglio: "Il sentiero passa su argini e terreni privati: dopo la pioggia sono fangosi, servono scarpe con la suola.",
      },
      {
        nome: "Bunaken National Marine Park",
        testo: "Pareti coralline verticali e acqua limpida. Molto noto per snorkeling e immersioni da barca.",
        come: "In barca dal porto di Manado. Pacchetti di una o più notti.",
        quando: "Nei mesi con il mare più calmo: chiedere agli operatori di immersione.",
        tempo: "2-3 giorni",
        costo: "Ingresso al parco per gli stranieri circa 50.000 IDR al giorno, circa 3 € (2026), spesso incluso nei tour.",
        lat: 1.61667,
        lng: 124.75,
        consiglio: "Chi ci arriva dopo Toraja la vive come una compensazione: due volti diversi dell'isola.",
      },
      {
        nome: "Riserva di Tangkoko",
        testo: "Una foresta di pianura sotto il monte Tangkoko, vicino a Bitung, nella punta nord-orientale di Sulawesi. Si cammina con una guida locale per cercare i tarsi, minuscoli primati con gli occhi enormi, e i macachi neri crestati, oltre a buceri e altri uccelli. È uno dei pochi posti al mondo dove i tarsi si vedono con buona probabilità.",
        come: "Da Tomohon circa 2-2,5 ore d'auto, da Manado un po' meno. Si entra dal villaggio di Batuputih con una guida locale, obbligatoria.",
        quando: "All'alba per i macachi e gli uccelli; al tramonto per i tarsi, quando escono dagli alberi cavi dove dormono.",
        tempo: "2-3 ore a uscita",
        costo: "Circa 100.000 IDR al giorno per gli stranieri, circa 5 € (2026), di più nel fine settimana; la guida si paga a parte.",
        lat: 1.51667,
        lng: 125.18333,
        consiglio: "Noi l'abbiamo fatta con Wale Adventure. Con una notte a Batuputih si fanno sia l'alba sia il tramonto senza guidare al buio. I tarsi non vanno illuminati con la torcia o il flash.",
      },
      {
        nome: "Tomohon e il lago Linow",
        testo: "Tomohon è una città sull'altopiano tra i vulcani Lokon e Mahawu, più fresca della costa e circondata da serre di fiori e orti. Pochi chilometri a sud c'è il lago Linow, un lago vulcanico dove le acque cambiano colore con lo zolfo e la luce, con fumarole sulle rive. È la base più comoda per il nord di Sulawesi.",
        come: "Dall'aeroporto di Manado 1-1,5 ore d'auto; il lago è a pochi minuti dal centro di Tomohon.",
        quando: "Al mattino, prima che arrivino le nuvole sui vulcani.",
        tempo: "mezza giornata",
        lat: 1.27078,
        lng: 124.82648,
        consiglio: "La sera serve una felpa. Wale Adventure ha base a Tomohon e organizza i tour del nord, compresa la visita alla loro vanilla farm.",
      },
      {
        nome: "Vulcano Mahawu",
        testo: "Uno dei vulcani che chiudono l'altopiano di Tomohon, con un cratere largo e un laghetto sul fondo. Si arriva in auto quasi in cima e si sale a piedi fino all'orlo, da dove nelle giornate limpide si vedono il Lokon, la piana e il mare verso Manado.",
        come: "In auto da Tomohon, poi una breve salita a piedi.",
        quando: "Mattina presto, con il cielo più limpido.",
        tempo: "1,5-2 ore",
        lat: 1.358,
        lng: 124.858,
      },
      {
        nome: "Fort Rotterdam e Makassar",
        testo: "Il forte sul porto, nato come fortezza del regno di Gowa e ricostruito dagli olandesi della VOC nel XVII secolo, con il museo La Galigo. La città è il punto di partenza per Toraja.",
        come: "A piedi o in taxi dal centro di Makassar.",
        quando: "Al mattino.",
        tempo: "1-2 ore",
        lat: -5.13389,
        lng: 119.40552,
        consiglio: "Mangiare coto makassar al mattino e pesce alla griglia sul lungomare la sera.",
      },
      {
        nome: "Porto di Paotere",
        testo: "Il vecchio porto di Makassar, dove sono ancorati i pinisi, le grandi barche di legno dei Bugis che collegano ancora le isole. Tra carichi di merci, pescatori e mercato del pesce, è il lato più vivo e meno turistico della città.",
        come: "In taxi o Grab dal centro, pochi chilometri a nord di Fort Rotterdam.",
        quando: "Al mattino presto, quando si scaricano le barche.",
        tempo: "1 ora",
        lat: -5.1097,
        lng: 119.42109,
      },
      {
        nome: "Lungomare di Losari",
        testo: "Il lungomare di Makassar, a due passi da Fort Rotterdam, dove la sera si riunisce la città. Le bancarelle e i ristoranti di pesce grigliano il pescato del giorno, e il tramonto sullo stretto è il momento più bello della giornata in città.",
        come: "A piedi da Fort Rotterdam.",
        quando: "Al tramonto e la sera.",
        tempo: "1-2 ore",
        lat: -5.14388,
        lng: 119.40698,
      },
    ],
    programmi: [
      { titolo: "1 giorno: Makassar", tappe: [
        "Mattina presto: porto di Paotere e i pinisi",
        "Colazione con il coto makassar",
        "Fort Rotterdam e il museo La Galigo",
        "Tramonto e pesce alla griglia sul lungomare di Losari",
        "Sera: bus notturno per Rantepao",
      ] },
      { titolo: "3 giorni: Tana Toraja", tappe: [
        "Giorno 1: Ke'te Kesu al mattino, poi Londa e Lemo",
        "Giorno 2: funerale toraja con la guida, se ce n'è uno",
        "Giorno 3: Batutumonga e discesa a piedi tra le risaie del Sesean",
        "Sera: rientro a Makassar con il bus notturno",
      ] },
      { titolo: "3 giorni: il nord, da Tomohon a Bunaken", tappe: [
        "Giorno 1: arrivo a Manado e salita a Tomohon, lago Linow e Mahawu",
        "Giorno 2: Tangkoko, con l'uscita al tramonto per i tarsi e notte a Batuputih",
        "Giorno 3: barca per Bunaken, snorkeling o immersioni sulle pareti",
      ] },
      { titolo: "7-9 giorni", tappe: [
        "Giorno 1: arrivo a Makassar, Fort Rotterdam",
        "Giorno 2: trasferimento a Rantepao",
        "Giorno 3-4: tongkonan, tombe nella roccia, funerale se c'è",
        "Giorno 5: rientro a Makassar o volo per Manado",
        "Giorno 6-8: Bunaken",
        "Giorno 9: rientro",
      ] },
    ],
    zone: [
      {
        nome: "Rantepao",
        perChi: "chi visita Tana Toraja",
        testo: "Piccola città con guesthouse e ristoranti, base per i villaggi.",
        fascia: "20-60 €",
      },
      {
        nome: "Tomohon",
        perChi: "chi visita il nord con Tangkoko e i vulcani",
        testo: "Altopiano fresco tra i vulcani, con homestay e piccoli hotel economici. A 1-1,5 ore da Manado.",
        fascia: "10-40 €",
      },
      {
        nome: "Manado",
        perChi: "chi va a Bunaken",
        testo: "Città portuale con alberghi, da cui partono le barche per l'isola.",
        fascia: "25-80 €",
      },
      {
        nome: "Isola di Bunaken",
        perChi: "chi fa immersioni",
        testo: "Homestay e resort sull'isola. Semplice.",
        fascia: "40-120 €",
      },
    ],
    sapori: [
      {
        nome: "Coto makassar",
        testo: "Zuppa di manzo, servita a colazione a Makassar."
      },
      {
        nome: "Pa'piong",
        testo: "Carne cotta in un tubo di bambù, tipica di Toraja. Spesso va ordinata in anticipo."
      },
      {
        nome: "Rica-rica",
        testo: "Piatto piccantissimo del nord, attorno a Manado."
      },
      {
        nome: "Pesce alla griglia",
        testo: "Sul lungomare di Makassar, la sera."
      }
    ],
    attenzioni: [
      "Cerimonie funebri: non presentarsi senza una guida; sono eventi privati con regole di rispetto.",
      "Tana Toraja è cristiana: compare il maiale, che nel resto dell'Indonesia è raro.",
      "Le strade verso Toraja sono lunghe e tortuose; il bus notturno è scomodo.",
      "Il pacchetto diving a Bunaken costa di più della media: confrontare gli operatori."
    ],
    gite: [
      {
        nome: "Rammang-Rammang",
        distanza: "circa 45 km da Makassar, 1-1,5 ore d'auto",
        come: "In auto con autista fino al molo sul fiume, poi in barca tra le torri carsiche.",
        testo: "Torri di roccia calcarea che spuntano dalle risaie e dal fiume, nel carso di Maros. Si risale il fiume in barca fino a un piccolo villaggio tra le pareti, e si cammina tra i campi.",
      },
      {
        nome: "Cascata di Bantimurung",
        distanza: "circa 45 km da Makassar, 1-1,5 ore d'auto",
        come: "In auto; si abbina facilmente a Rammang-Rammang nella stessa giornata.",
        testo: "Una cascata larga su gradoni di roccia nel parco nazionale di Bantimurung-Bulusaraung, famoso per le farfalle. Nel fine settimana è piena di famiglie di Makassar: meglio andarci in un giorno feriale.",
      },
      {
        nome: "Stretto di Lembeh",
        distanza: "Bitung, 1-1,5 ore d'auto da Manado",
        come: "In auto fino a Bitung, poi in barca con un centro immersioni.",
        testo: "Il canale tra Sulawesi e l'isola di Lembeh è una delle mete più note al mondo per il muck diving: fondali di sabbia scura dove si cercano polpi, pesci rana e nudibranchi. È vicino a Tangkoko, e si abbina bene alla riserva.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per Sulawesi?",
        risposta: "Almeno una settimana per Tana Toraja e il nord: Toraja da sola chiede tre giorni più i due di strada da e per Makassar, il nord con Tomohon, Tangkoko e Bunaken altri tre o quattro.",
      },
      {
        domanda: "Meglio Tana Toraja o il nord di Sulawesi?",
        risposta: "Dipende da cosa si cerca: Toraja è cultura, con villaggi, tombe e funerali; il nord è natura, con vulcani, tarsi e le pareti di Bunaken. Con poco tempo, il nord è più comodo perché Manado ha voli diretti per Sorong e Bali.",
      },
      {
        domanda: "Come si arriva a Tana Toraja da Makassar?",
        risposta: "Con il bus notturno dal terminal Daya, circa 9-10 ore per 200.000-350.000 IDR, oppure con il volo di circa 55 minuti per l'aeroporto di Toraja, che però ha pochi voli e può saltare.",
      },
      {
        domanda: "Si può assistere a un funerale toraja?",
        risposta: "Sì, con una guida locale che conosca la famiglia e spieghi l'etichetta. Si porta un piccolo regalo, di solito zucchero o sigarette, e si sta dove indica la guida; le cerimonie sono più frequenti nella stagione secca.",
      },
      {
        domanda: "Quando si vedono i tarsi a Tangkoko?",
        risposta: "Al tramonto, quando escono dagli alberi cavi dove dormono. Per vederli con calma conviene dormire a Batuputih, all'ingresso della riserva, e fare anche l'uscita dell'alba per i macachi.",
      },
      {
        domanda: "Qual è il periodo migliore per Sulawesi?",
        risposta: "Da maggio a ottobre, nella stagione più secca. È anche il periodo in cui i grandi funerali toraja sono più frequenti, soprattutto d'estate.",
      },
    ],
    esperienzeSlugs: ['diving-bunaken-national-park'],
    tripSlugs: ['indonesia-itinerario', 'bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: 'Un tongkonan dal tetto a prua di nave in un villaggio toraja vicino a Rantepao, Sulawesi',
    immagine: '/images/indonesia/sulawesi.jpg',
  },
  {
    slug: 'lombok-gili',
    paeseSlug: 'indonesia',
    ordine: 5,
    nome: 'Lombok e Gili',
    tipologia: ['mare', 'trekking', 'isole'],
    giorniConsigliati: '6-8 giorni, di cui 2-3 per il trekking al Rinjani se incluso',
    visitataPersonalmente: true,
    introduzione:
      'La vicina meno affollata di Bali: le tre isole Gili senza veicoli a motore, il vulcano Rinjani (il secondo più alto dell\'Indonesia) e spiagge del sud ancora poco battute.',
    percheAndarci:
      'Il ritmo è più lento che a Bali: il trekking al Rinjani è la sfida fisica, le Gili il contrappeso rilassato sul mare.',
    cosaVedere: [
      'Le tre isole Gili (Trawangan, Meno, Air), senza auto né scooter',
      'Il Gunung Rinjani, con il lago craterico Segara Anak',
      'Le spiagge del sud: Kuta Lombok, Tanjung Aan, Selong Belanak',
    ],
    cosaFare: [
      'Snorkeling con le tartarughe marine alle Gili',
      'Trekking di più giorni al Rinjani fino al lago craterico (c\'è una scheda esperienza dedicata)',
      'Surf a Kuta Lombok o, per livelli avanzati, a Desert Point',
    ],
    doveDormire:
      'Gili Trawangan per la vita serale, Gili Air per l\'equilibrio tra servizi e calma, Gili Meno per il silenzio; a Lombok, Kuta è la base del sud per surf e spiagge, Senaru e Sembalun sono i due villaggi da cui partono i trek al Rinjani.',
    doveMangiare:
      'Il piatto di Lombok è l\'ayam taliwang, pollo grigliato in una salsa di peperoncino che non fa sconti. Alle Gili il mercato serale di Trawangan è un posto buono ed economico: il pesce è esposto sul ghiaccio, lo si sceglie e si aspetta che venga grigliato. Nei ristoranti sul mare si paga soprattutto la vista.',
    comeArrivare: "Il Lombok International Airport (LOP) è a Praya, nel sud dell'isola, con voli da Bali in poco meno di un'ora e da Giacarta. Dall'aeroporto Kuta Lombok è a circa mezz'ora d'auto, Senaru a circa 3 ore. Da Bali le barche veloci partono da Padang Bai (1,5-2 ore, 350.000-475.000 IDR a tratta, circa 18-25 €) o da Sanur, più care, e arrivano alle Gili o a Bangsal; con il mare grosso le corse saltano o ritardano. Da Bangsal la barca pubblica per le Gili impiega circa 30 minuti e costa poco. Il biglietto si compra dalla compagnia o da piattaforme note, non dai venditori al porto.",
    comeSpostarsi: 'Solo cidomo (calessi trainati da cavalli) o bicicletta alle Gili, dove veicoli a motore sono vietati; auto o scooter sul resto di Lombok.',
    periodoMigliore:
      'la stagione secca; il Rinjani chiude nella stagione delle piogge, le date si controllano sull\'app ufficiale E-Rinjani del parco',
    costi: "Barca veloce Padang Bai-Gili 350.000-475.000 IDR a tratta (circa 18-25 €), bici alle Gili circa 50.000 IDR al giorno (circa 2,5 €). Budget: circa 25-35 € al giorno con guesthouse, warung e barche pubbliche. Medio: 60-90 € con bungalow con piscina, ristoranti e qualche gita in barca. Alto: oltre 150 € con resort sul mare e transfer privati. Il trekking al Rinjani si paga a parte all'operatore.",
    erroriDaEvitare: [
      'Sottovalutare la fatica e l\'altitudine del trekking al Rinjani',
      'Tentare il trekking senza guida: è obbligatoria per legge',
    ],
    miaEsperienza:
      'Il Rinjani è il trekking più duro che ho fatto in Indonesia, e il paragone con gli altri non regge. La salita al bordo del cratere è lunga ed esposta, e finisce su sabbia vulcanica dove ogni tre passi se ne perde uno. Il campo l\'abbiamo montato sul ciglio, col vento, e la notte si dorme poco e male. Svegliarsi sopra il lago Segara Anak con le nuvole sotto, però, ripaga tutto. Le Gili sono perfette subito dopo: niente auto né scooter, si gira a piedi in un\'ora e le tartarughe si vedono partendo dalla spiaggia, senza barca né guida. Trawangan la sera è più festaiola di quanto qualcuno si aspetti, Meno è l\'opposto: meglio saperlo prima di prenotare.',
    luoghi: [
      {
        nome: "Isole Gili: Trawangan, Meno e Air",
        testo: "Tre isole dove auto e motorini sono vietati da un'ordinanza: si girano a piedi, in bici o in calesse (cidomo). Trawangan è la più grande e festaiola, Meno la più tranquilla, Air una via di mezzo. Le tartarughe si vedono sui reef vicino a riva.",
        come: "Barca veloce da Bali (Padang Bai) o barca locale da Bangsal, il porto sulla costa nord di Lombok. Alle Gili si cammina o si va in cidomo.",
        quando: "Nella stagione secca. Meno è la più tranquilla in ogni momento.",
        tempo: "2-3 giorni",
        consiglio: "Scegliere l'isola secondo il carattere: festa a Trawangan, calma a Meno.",
        costo: "Barca veloce da Padang Bai 350.000-475.000 IDR a tratta, circa 18-25 € (2026); tra le tre isole la barca pubblica costa pochi euro. Bici a noleggio circa 50.000 IDR al giorno, circa 2,5 €.",
        lat: -8.35034,
        lng: 116.03626,
      },
      {
        nome: "Snorkeling con le tartarughe",
        testo: "Le tartarughe verdi pascolano sui reef vicino a riva. Non servono barca né guida.",
        come: "Si entra in acqua dalla spiaggia, con maschera e pinne a noleggio.",
        quando: "Al mattino, con l'acqua più calma.",
        tempo: "1-2 ore",
        consiglio: "Non toccare né inseguire le tartarughe: tenersi a distanza.",
        costo: "Maschera e pinne a noleggio per pochi euro; la gita di snorkeling condivisa sulle tre isole, di mezza giornata, ha un prezzo contenuto e si prenota la sera prima.",
      },
      {
        nome: "Trekking al Gunung Rinjani",
        testo: "Il secondo vulcano più alto dell'Indonesia, 3.726 metri. Dall'orlo del cratere si vede il lago Segara Anak, dentro la caldera, a circa 2.000 metri di quota. Il percorso è lungo ed esposto e finisce su sabbia vulcanica.",
        come: "Da Senaru o Sembalun, solo con un operatore autorizzato e una guida. I biglietti si prenotano sull'app ufficiale E-Rinjani del parco (Android e iOS); il sito erinjani.id oggi rimanda a un'agenzia privata, non al parco. Pacchetti di più giorni con portatori e tende.",
        quando: "Nella stagione secca. Con le piogge, il maltempo o dopo incidenti il parco può chiudere i sentieri: controllare sull'app E-Rinjani o sui canali ufficiali del parco prima di prenotare.",
        tempo: "più giorni",
        consiglio: "Il campo sul ciglio è ventoso e si dorme poco: svegliarsi sopra le nuvole, con il lago sotto, ripaga tutto.",
        orari: "Chiuso ogni anno da gennaio a fine marzo, e a volte in altri periodi dopo incidenti o maltempo.",
        lat: -8.41441,
        lng: 116.45977,
      },
      {
        nome: "Cascate di Senaru",
        testo: "Sendang Gile e Tiu Kelep sono due cascate nella foresta ai piedi del Rinjani, raggiungibili con una camminata breve. Un'ottima giornata di riposo prima o dopo il trekking.",
        come: "A piedi da Senaru, con guida.",
        quando: "Al mattino.",
        tempo: "3 ore",
        consiglio: "Portare scarpe che si possono bagnare.",
        lat: -8.30556,
        lng: 116.40828,
      },
      {
        nome: "Spiagge del sud: Kuta, Tanjung Aan, Selong Belanak",
        testo: "Baie di sabbia chiara e onde per il surf, molto meno affollate di Bali.",
        come: "In scooter o auto da Kuta Lombok, che è vicina all'aeroporto.",
        quando: "Al mattino o al tramonto.",
        tempo: "1 giorno",
        consiglio: "Selong Belanak è adatta ai principianti del surf.",
        lat: -8.91667,
        lng: 116.28333,
      },
      {
        nome: "Mercato serale di Gili Trawangan",
        testo: "Ogni sera, vicino al porto di Trawangan, i banchi espongono pesce, gamberi e calamari sul ghiaccio: si sceglie, si paga a peso e lo grigliano al momento. Accanto ci sono sate, nasi campur e dolci. È uno dei modi più economici di cenare alle Gili.",
        come: "A piedi dal porto, sulla strada principale lungo la costa est.",
        quando: "Dal tramonto; i banchi migliori finiscono il pesce presto.",
        tempo: "1 ora",
        consiglio: "Chiedere il prezzo al chilo prima di scegliere il pesce.",
      },
      {
        nome: "Nest, le statue sommerse di Gili Meno",
        testo: "Un cerchio di figure umane a grandezza naturale scolpite da Jason deCaires Taylor e posate sul fondale a pochi metri di profondità, al largo di Gili Meno. Si vedono anche solo con maschera e boccaglio, e il corallo sta colonizzando le sculture.",
        come: "Dalla spiaggia ovest di Gili Meno a nuoto, o come tappa delle gite di snorkeling sulle tre isole.",
        quando: "Con l'acqua calma e la bassa marea, al mattino.",
        tempo: "1 ora",
        consiglio: "C'è corrente: restare vicino alla barca o alla boa e non toccare le statue.",
      },
      {
        nome: "Bukit Merese",
        testo: "Una collina erbosa a est di Kuta Lombok, affacciata sulle baie di Tanjung Aan e Gerupuk. È il punto panoramico più noto del sud, e al tramonto si riempie di gente.",
        come: "In scooter o auto da Kuta, circa 15 minuti; poi una breve salita a piedi.",
        quando: "Al tramonto, oppure all'alba per averla quasi vuota.",
        tempo: "1 ora",
        lat: -8.91423,
        lng: 116.31908,
        consiglio: "Abbinarla a un bagno a Tanjung Aan, che è sotto.",
      },
      {
        nome: "Spiaggia di Mawun",
        testo: "Una baia a ferro di cavallo tra due promontori, a ovest di Kuta, con sabbia chiara e acqua più riparata delle spiagge vicine. Ci sono pochi warung e ombrelloni a noleggio.",
        come: "In scooter o auto da Kuta, circa 20 minuti sulla strada costiera verso Selong Belanak.",
        quando: "Al mattino, prima del vento.",
        tempo: "Mezza giornata",
        lat: -8.90221,
        lng: 116.23234,
        consiglio: "Si unisce bene a Selong Belanak nello stesso giro.",
      },
      {
        nome: "Villaggio sasak di Sade",
        testo: "Un villaggio tradizionale del popolo sasak, con le case di bambù e paglia e i granai dal tetto a forma di cappello, l'emblema di Lombok. Ci vivono ancora famiglie che tessono e vendono stoffe. È molto turistico, ma aiuta a capire la cultura dell'isola.",
        come: "Sulla strada tra l'aeroporto e Kuta. Si visita con una guida del villaggio, a cui si lascia un'offerta.",
        quando: "Al mattino o nel tardo pomeriggio.",
        tempo: "1 ora",
        lat: -8.63854,
        lng: 116.30769,
        consiglio: "Nessun obbligo di comprare le stoffe: dire di no è normale.",
      },
      {
        nome: "Sukarara",
        testo: "Il villaggio della tessitura songket, le stoffe con fili d'oro e d'argento lavorate a mano su telai di legno. Nelle botteghe si vede come si tesse e a volte si prova.",
        come: "In auto, nel centro dell'isola, spesso nello stesso giro di Sade.",
        quando: "Di giorno, quando lavorano ai telai.",
        tempo: "45 minuti",
        lat: -8.69408,
        lng: 116.22522,
        consiglio: "I prezzi delle stoffe si trattano.",
      },
      {
        nome: "Pink Beach (Pantai Tangsi)",
        testo: "Una spiaggia nella punta sud-est di Lombok, con la sabbia che diventa rosata per i frammenti di corallo rosso. È lontana da tutto e meno frequentata delle spiagge di Kuta.",
        come: "In auto da Kuta, circa 1,5-2 ore, su strade in parte sterrate; oppure in barca dalle baie vicine.",
        quando: "Con il sole alto il rosa si vede meglio.",
        tempo: "Giornata intera con il viaggio",
        lat: -8.85931,
        lng: 116.58086,
        consiglio: "Portare acqua e cibo: i servizi sono pochi.",
      },
      {
        nome: "Cascate di Benang Kelambu e Benang Stokel",
        testo: "Due cascate nella foresta del centro dell'isola, sulle pendici meridionali del Rinjani. Benang Kelambu scende a veli sottili da una parete coperta di vegetazione, Benang Stokel ha due salti più alti.",
        come: "In auto da Kuta o da Mataram, circa 1,5 ore; dal parcheggio sentiero a piedi, con guide locali disponibili.",
        quando: "Nella stagione delle piogge c'è più acqua; al mattino ci sono meno persone.",
        tempo: "Mezza giornata",
        lat: -8.53277,
        lng: 116.33701,
        consiglio: "Scarpe che si possono bagnare: il sentiero è scivoloso.",
      },
      {
        nome: "Taman Narmada",
        testo: "Un giardino d'acqua costruito nel Settecento dai re balinesi che governavano Lombok, con vasche, padiglioni e un tempio. Secondo la tradizione la vasca grande riproduce il lago craterico del Rinjani.",
        come: "A est di Mataram, in auto o taxi.",
        quando: "Nei giorni feriali, quando è meno frequentato dalle famiglie del posto.",
        tempo: "1 ora",
        lat: -8.59602,
        lng: 116.20533,
      },
      {
        nome: "Pura Lingsar",
        testo: "Un complesso del primo Settecento condiviso da induisti balinesi e da musulmani sasak della tradizione wetu telu. Ogni anno, nella festa del Perang Topat, le due comunità si lanciano pacchetti di riso.",
        come: "Pochi chilometri a nord-est di Mataram, abbinato a Narmada.",
        quando: "Di giorno; sarong e fascia in vita, di solito prestati all'ingresso.",
        tempo: "45 minuti",
        lat: -8.57581,
        lng: 116.18014,
      },
    ],
    programmi: [
      {
        titolo: "2 giorni: Gili",
        tappe: [
          "Giorno 1: barca da Bangsal o da Bali, giro di Gili Trawangan in bici, tramonto sulla costa ovest e cena al mercato serale",
          "Giorno 2: gita di snorkeling sulle tre isole con le tartarughe e Nest a Gili Meno, pomeriggio a Gili Air",
        ],
      },
      {
        titolo: "3 giorni: il sud di Lombok",
        tappe: [
          "Giorno 1: Sade e Sukarara dall'aeroporto, sera a Kuta",
          "Giorno 2: Mawun e Selong Belanak, tramonto a Bukit Merese",
          "Giorno 3: Tanjung Aan al mattino, poi Pink Beach o le cascate di Benang Kelambu",
        ],
      },
      {
        titolo: "6-8 giorni",
        tappe: [
          "Giorno 1: arrivo a Lombok, Senaru",
          "Giorno 2-4: trekking al Rinjani",
          "Giorno 5: riposo, cascate di Senaru",
          "Giorno 6-7: Gili, snorkeling con le tartarughe",
          "Giorno 8: partenza",
        ],
      },
      {
        titolo: "Senza Rinjani",
        tappe: [
          "Giorno 1-2: Kuta Lombok e le spiagge del sud",
          "Giorno 3-5: Gili",
          "Giorno 6: rientro",
        ],
      },
    ],
    zone: [
      {
        nome: "Gili Trawangan",
        perChi: "chi vuole vita serale",
        testo: "Bar, ristoranti e locali. Più rumorosa di quanto molti si aspettino.",
        fascia: "25-120 €",
      },
      {
        nome: "Gili Meno",
        perChi: "chi cerca calma",
        testo: "La più tranquilla, con pochi servizi e tramonti belli.",
        fascia: "30-120 €",
      },
      {
        nome: "Senaru o Sembalun",
        perChi: "chi fa il Rinjani",
        testo: "Villaggi alle pendici del vulcano con guesthouse semplici.",
      },
      {
        nome: "Kuta Lombok",
        perChi: "chi cerca spiagge e surf",
        testo: "Cittadina tranquilla con alloggi economici.",
        fascia: "30-130 €",
      },
    ],
    sapori: [
      {
        nome: "Ayam taliwang",
        testo: "Pollo grigliato in salsa di peperoncino che non fa sconti, il piatto più noto di Lombok."
      },
      {
        nome: "Pesce alla griglia del mercato serale di Trawangan",
        testo: "Il pesce è esposto sul ghiaccio, si sceglie e si aspetta che venga grigliato. Uno dei modi più economici di mangiare alle Gili."
      },
      {
        nome: "Plecing kangkung",
        testo: "Spinaci d'acqua con salsa di pomodoro piccante, un contorno tipico di Lombok."
      },
      {
        nome: "Sate rembiga",
        testo: "Spiedini di manzo piccanti, tipici di Lombok."
      }
    ],
    attenzioni: [
      "Rinjani: guida, operatore autorizzato e prenotazione sull'app ufficiale E-Rinjani sono obbligatori. Sottovalutare fatica e quota è l'errore più comune.",
      "Trawangan la sera è più festaiola di quanto sembri; Meno è l'opposto. Sceglierne una in base al carattere.",
      "Traversate da Bali: il mare può essere mosso; evitare di prenotare trasferimenti troppo stretti.",
      "Alle Gili la corrente e le imbarcazioni: non nuotare lontano dalla riva."
    ],
    gite: [
      {
        nome: "Gili del sud-ovest: Nanggu, Sudak e Kedis",
        distanza: "circa 2 ore d'auto da Kuta o da Mataram, poi 15-20 minuti di barca",
        come: "Auto fino al porto di Tawun o di Sekotong, poi barca noleggiata sul posto per il giro delle isole.",
        testo: "Isolotti piccoli e quasi senza strutture, con acqua bassa e reef vicino a riva. Sono le Gili senza la folla delle tre più famose.",
      },
      {
        nome: "Gili Kondo",
        distanza: "circa 2,5 ore d'auto da Kuta o da Senaru, poi barca breve",
        come: "Auto fino alla costa nord-est (Sambelia), barca da noleggiare al molo.",
        testo: "Un isolotto di sabbia bianca nella costa est, frequentato soprattutto da visitatori locali, con snorkeling sul reef intorno.",
      },
      {
        nome: "Tetebatu",
        distanza: "circa 1,5 ore d'auto da Kuta o da Mataram",
        come: "Auto o scooter; sul posto camminate tra le risaie con una guida del villaggio.",
        testo: "Un villaggio agricolo sulle pendici meridionali del Rinjani, con risaie a terrazze, piantagioni e cascate nella foresta. Aria più fresca e ritmo lento.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per Lombok e le Gili?",
        risposta: "Per le sole Gili bastano 2-3 giorni. Con il sud di Lombok si arriva a 5-6, e il trekking al Rinjani aggiunge 2-3 giorni più uno di riposo.",
      },
      {
        domanda: "Quale isola Gili scegliere?",
        risposta: "Trawangan per la vita serale, Gili Air per un equilibrio tra servizi e calma, Gili Meno per il silenzio. Si passa dall'una all'altra in pochi minuti di barca pubblica.",
      },
      {
        domanda: "Serve la guida per il trekking al Rinjani?",
        risposta: "Sì, è obbligatoria per legge, con un operatore autorizzato e la prenotazione sull'app ufficiale E-Rinjani del parco.",
      },
      {
        domanda: "Quando è chiuso il Rinjani?",
        risposta: "Ogni anno da gennaio a fine marzo, nella stagione delle piogge. Può chiudere anche in altri periodi dopo incidenti o maltempo: controllare sull'app E-Rinjani prima di prenotare.",
      },
      {
        domanda: "Come si va da Bali alle Gili?",
        risposta: "Con le barche veloci da Padang Bai (1,5-2 ore, 350.000-475.000 IDR a tratta) o da Sanur, più care. Con il mare grosso le corse saltano: meglio non fissare un volo lo stesso giorno.",
      },
      {
        domanda: "Alle Gili ci sono bancomat?",
        risposta: "Pochi, soprattutto a Trawangan, e non sempre funzionano. Conviene arrivare con abbastanza contanti, in particolare a Gili Meno e Gili Air.",
      },
    ],
    esperienzeSlugs: ['trekking-gunung-rinjani'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'indonesia-isola-per-isola'],
    imageAlt: 'Un isolotto di sabbia bianca al largo di Lombok, con le barche a bilanciere ormeggiate e le colline sullo sfondo',
    immagine: '/images/indonesia/gili-isolotto-barche-riccardo.jpg',
  },
  {
    slug: 'komodo',
    paeseSlug: 'indonesia',
    ordine: 6,
    nome: 'Komodo',
    tipologia: ['natura', 'avventura', 'diving'],
    giorniConsigliati: '3-4 giorni, spesso in tour in barca da Labuan Bajo',
    visitataPersonalmente: true,
    introduzione:
      'Il parco nazionale che dà il nome al drago di Komodo, la lucertola più grande del mondo, in un arcipelago di isole belle sopra e sotto il livello del mare.',
    percheAndarci:
      'È il posto dove si vanno a vedere i draghi di Komodo nel loro habitat naturale, con in più panorami e fondali molto fotografati.',
    cosaVedere: [
      'I draghi di Komodo sull\'isola di Komodo e sull\'isola di Rinca',
      'Pink Beach, con la sabbia rosata data dai frammenti di corallo',
      'Padar Island, il punto panoramico con le tre baie a mezzaluna',
      'I punti snorkeling di Kanawa e Kelor',
    ],
    cosaFare: [
      'Trekking guidato per vedere i draghi di Komodo (c\'è una scheda esperienza dedicata)',
      'Salita a Padar Island all\'alba per il panorama iconico',
      'Snorkeling o diving nel parco marino',
      'Tour in barca (anche liveaboard di più giorni) da Labuan Bajo tra le isole del parco',
    ],
    doveDormire:
      'Labuan Bajo è il punto di appoggio di tutti, con un\'ampia scelta tra ostelli e resort sul porto. In alternativa si dorme a bordo, nei tour in barca di due o più notti, che sono anche l\'unico modo per essere a Padar all\'alba.',
    doveMangiare:
      'A Labuan Bajo si mangia pesce, e bene: il mercato serale sul lungomare espone il pescato del giorno e lo griglia al momento, a prezzi molto più bassi dei ristoranti con vista sul porto poco più in là. A bordo cucina l\'equipaggio: piatti semplici di riso, pesce e verdure, ma buoni.',
    comeArrivare: "Si vola su Labuan Bajo (aeroporto Komodo, LBJ), con voli diretti da Bali in circa 1 ora e 15 minuti e da Giacarta; da Lombok sono meno frequenti. L'aeroporto è a pochi minuti d'auto dal porto e dagli alberghi del centro. Le barche per il parco partono dal porto di Labuan Bajo al mattino; per essere a Padar all'alba si parte prima delle 5 oppure si dorme a bordo. Chi arriva da est percorre la Trans-Flores con un'auto con autista, da Bajawa circa 9-10 ore con le soste.",
    comeSpostarsi: 'Solo in barca: tour organizzati di uno o più giorni, o liveaboard.',
    periodoMigliore: 'aprile-dicembre, stagione secca con mare più calmo',
    costi: "Ingresso al parco 250.000 IDR a persona per gli stranieri (circa 13 €), di solito gestito dall'operatore; tassa per le immersioni 25.000 IDR per attività. Budget: circa 40-60 € al giorno con guesthouse, mercato serale e tour condiviso in giornata. Medio: 100-150 € con hotel in città e speedboat, o due notti su una barca condivisa. Alto: oltre 250 € con liveaboard privato o resort sul mare.",
    erroriDaEvitare: [
      'Avvicinarsi ai draghi senza un ranger o una guida: sono predatori pericolosi',
      'Sottovalutare il mare mosso e le correnti forti tra le isole',
    ],
    miaEsperienza:
      'I draghi stanno quasi sempre fermi. Sono animali enormi che passano la giornata all\'ombra e si muovono poco, e chi si aspetta una scena da documentario resta spiazzato: a impressionare sono le dimensioni e il fatto che il ranger abbia in mano solo un bastone biforcuto. Rinca è più selvaggia e meno affollata dell\'isola di Komodo, e conviene chiederla espressamente. Il momento migliore è Padar all\'alba: una salita breve e ripida su una cresta, e sotto tre baie con tre sabbie diverse tutte insieme. Va fatta prestissimo, perché dalle otto la fila sul sentiero è continua e il caldo si fa sentire.',
    luoghi: [
      {
        nome: "Isola di Rinca",
        testo: "Ospita molti draghi ed è più selvaggia e meno affollata dell'isola di Komodo. I draghi stanno quasi sempre fermi all'ombra, ma sono predatori pericolosi.",
        come: "In barca da Labuan Bajo: il tempo dipende dal tipo di barca. Si cammina su sentieri con un ranger, che ha in mano solo un bastone biforcuto.",
        quando: "Al mattino, nelle ore più fresche.",
        tempo: "mezza giornata",
        url: "https://www.komodonationalpark.org/",
        consiglio: "Chiedere espressamente Rinca nel tour: è più selvaggia dell'isola di Komodo.",
        costo: "Ingresso al parco 250.000 IDR a persona per gli stranieri, circa 13 € (2026), di solito incluso o gestito dall'operatore del tour; il ranger è obbligatorio.",
        lat: -8.65927,
        lng: 119.7256,
      },
      {
        nome: "Isola di Komodo e Loh Liang",
        testo: "L'isola che dà il nome al parco. I sentieri brevi partono da Loh Liang e portano a zone dove si vedono i draghi.",
        come: "In barca da Labuan Bajo, più lontana di Rinca. Con un ranger obbligatorio.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        url: "https://www.komodonationalpark.org/",
        consiglio: "Mai avvicinarsi senza il ranger e mai lasciare il sentiero.",
        costo: "Ingresso al parco 250.000 IDR a persona per gli stranieri, circa 13 € (2026); il ranger è obbligatorio.",
        lat: -8.56831,
        lng: 119.5069,
      },
      {
        nome: "Padar Island",
        testo: "Una breve e ripida salita su una cresta, e sotto tre baie con sabbie di colori diversi: il punto panoramico più famoso del parco.",
        come: "In barca da Labuan Bajo con un tour, spesso come prima tappa del mattino.",
        quando: "All'alba, prestissimo: poco dopo arrivano i gruppi, la fila sul sentiero è continua e il caldo si sente.",
        tempo: "1 ora e mezza",
        consiglio: "Salire all'alba, con le prime luci, è l'unico modo di avere il panorama senza la coda.",
        costo: "Compreso nel biglietto del parco. Dal 2026 c'è un tetto giornaliero di visitatori e i turni per Padar si prenotano: confermarli con l'operatore.",
        lat: -8.6627,
        lng: 119.55574,
        url: "https://www.komodonationalpark.org/",
      },
      {
        nome: "Pink Beach",
        testo: "Una spiaggia rosata per i frammenti di corallo mescolati alla sabbia, con ottimo snorkeling.",
        come: "In barca come tappa del tour.",
        quando: "Mattina o primo pomeriggio.",
        tempo: "1-2 ore",
        consiglio: "Fare snorkeling: i fondali sono più interessanti della spiaggia.",
        lat: -8.60137,
        lng: 119.52052,
      },
      {
        nome: "Kanawa, Kelor e Manta Point",
        testo: "Isole e punti di snorkeling con barriera corallina e, in alcuni punti, mante.",
        come: "In barca con tour di uno o più giorni.",
        quando: "Nei mesi con il mare più calmo; chiedere all'equipaggio.",
        tempo: "mezza giornata",
        consiglio: "Correnti forti tra le isole: ascoltare le istruzioni dell'equipaggio.",
        costo: "Per le immersioni la tassa del parco è a parte: 25.000 IDR per attività, circa 1,3 € (2026).",
        lat: -8.4948,
        lng: 119.75884,
      },
      {
        nome: "Taka Makassar",
        testo: "Una lingua di sabbia bianca che emerge con la bassa marea in mezzo al mare, vicino al Manta Point. Intorno l'acqua è bassa e turchese, e ci si ferma per un bagno e lo snorkeling tra una tappa e l'altra.",
        come: "In barca, come tappa dei tour di uno o più giorni.",
        quando: "Con la bassa marea, quando la sabbia è scoperta; l'orario lo decide l'equipaggio.",
        tempo: "1 ora",
        consiglio: "Crema solare e maglietta: non c'è ombra.",
      },
      {
        nome: "Gili Lawa Darat",
        testo: "Un'isola collinare nel nord del parco, con una cresta erbosa da cui si vedono le baie e le isole intorno. È una delle salite panoramiche più belle dopo Padar, e di solito meno affollata.",
        come: "In barca, nei tour di più giorni che passano dal nord del parco; salita a piedi su sentiero ripido.",
        quando: "Al tramonto o all'alba, dormendo a bordo.",
        tempo: "1-1,5 ore",
        lat: -8.46933,
        lng: 119.55799,
        consiglio: "Scarpe chiuse: il terreno è secco e scivoloso.",
      },
      {
        nome: "Isola di Kalong",
        testo: "Un'isola di mangrovie da cui al tramonto escono migliaia di volpi volanti, i grandi pipistrelli della frutta, che attraversano il cielo verso le isole vicine. Non si scende: si guarda dalla barca all'ancora.",
        come: "In barca, nei tour con notte a bordo, che ancorano qui la sera.",
        quando: "Al tramonto.",
        tempo: "1 ora",
        consiglio: "È uno dei motivi per scegliere almeno una notte in barca.",
      },
      {
        nome: "Grotta di Batu Cermin",
        testo: "Una grotta calcarea a pochi chilometri dal centro di Labuan Bajo. Il nome, «pietra specchio», viene dalla luce che a certe ore entra da una fessura e si riflette sulle pareti. Dentro ci sono fossili marini nella roccia.",
        come: "In scooter o taxi dal centro; si visita con una guida locale e un casco.",
        quando: "Verso metà giornata, quando la luce entra nella grotta.",
        tempo: "1 ora",
        lat: -8.48374,
        lng: 119.89796,
        consiglio: "Buona mezza giornata a terra prima o dopo i tour in barca.",
      },
      {
        nome: "Mercato serale di Kampung Ujung",
        testo: "Sul lungomare di Labuan Bajo, la sera, i banchi espongono il pescato del giorno e lo grigliano al momento. Si mangia su tavoli all'aperto, a prezzi molto più bassi dei ristoranti con vista sul porto.",
        come: "A piedi dal centro, sul lungomare.",
        quando: "Dal tramonto.",
        tempo: "1 ora",
        consiglio: "Concordare il prezzo del pesce prima che lo mettano sulla griglia.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Alba: Padar",
          "Mattina: Pink Beach e snorkeling",
          "Pranzo a bordo",
          "Pomeriggio: Rinca o Komodo con i ranger",
          "Tramonto: rientro a Labuan Bajo",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: tour in giornata con Padar all'alba, Pink Beach e Komodo; sera al mercato di Kampung Ujung",
          "Giorno 2: snorkeling a Kanawa e Kelor al mattino, grotta di Batu Cermin nel pomeriggio",
        ],
      },
      {
        titolo: "3 giorni (barca)",
        tappe: [
          "Giorno 1: Kanawa, Rinca, notte a bordo",
          "Giorno 2: Padar all'alba, Pink Beach, Manta Point",
          "Giorno 3: isola di Komodo e rientro",
        ],
      },
    ],
    zone: [
      {
        nome: "Labuan Bajo",
        perChi: "chi fa i tour in giornata",
        testo: "Porto con alberghi di ogni fascia, ristoranti sul mare e il mercato serale del pesce. Base di tutti i tour.",
      },
      {
        nome: "Spiagge fuori città (Waecicu, Pede)",
        perChi: "chi vuole un resort sul mare",
        testo: "Resort e hotel con piscina sulla costa a nord e a sud del centro. Più tranquilli, ma serve un taxi per il porto e i ristoranti.",
        fascia: "100-300 €",
      },
      {
        nome: "A bordo (liveaboard)",
        perChi: "chi vuole vedere di più",
        testo: "Dormire in barca permette di essere a Padar all'alba, prima dei gruppi. Costa di più.",
      },
    ],
    sapori: [
      {
        nome: "Pesce alla griglia del mercato serale",
        testo: "Il pescato del giorno esposto sul lungomare di Labuan Bajo e grigliato al momento. Costa molto meno dei ristoranti con vista sul porto."
      },
      {
        nome: "Cucina di bordo",
        testo: "A bordo cucina l'equipaggio: riso, pesce e verdure, semplice ma buono."
      },
      {
        nome: "Caffè di Flores",
        testo: "Tostato in casa e servito senza filtro."
      }
    ],
    attenzioni: [
      "Avvicinarsi ai draghi solo con un ranger: sono predatori pericolosi.",
      "Il mare mosso e le correnti forti tra le isole: ascoltare l'equipaggio e non nuotare da soli.",
      "A Padar la fila sul sentiero cresce subito dopo l'alba: salire con le prime luci.",
      "Controllare quali sono le tariffe ufficiali e i permessi del parco prima di prenotare."
    ],
    gite: [
      {
        nome: "Cascata di Cunca Wulang",
        distanza: "circa 1 ora d'auto da Labuan Bajo",
        come: "Auto con autista o scooter, poi una camminata nella foresta con una guida del villaggio.",
        testo: "Una cascata in un canyon di roccia con piscine naturali dove si fa il bagno. È la gita a terra più bella intorno a Labuan Bajo.",
      },
      {
        nome: "Wae Rebo",
        distanza: "2 giorni: strada fino a Denge, poi 2,5-3 ore di salita a piedi",
        come: "Auto con autista fino a Denge, poi salita a piedi; si dorme nelle case del villaggio.",
        testo: "Un villaggio manggarai con le case coniche tradizionali, in una valle tra le montagne. Non è una gita in giornata, ma una delle esperienze più belle di Flores.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Komodo?",
        risposta: "Un tour in giornata copre Padar, Pink Beach e i draghi. Con 2-3 giorni, meglio con una notte in barca, si aggiungono snorkeling, Manta Point e Padar all'alba senza fretta.",
      },
      {
        domanda: "Meglio il tour in giornata o la barca con notte a bordo?",
        risposta: "Il tour in giornata è più economico ma corre. Dormire a bordo permette di salire a Padar all'alba, prima dei gruppi, e di vedere le volpi volanti di Kalong al tramonto.",
      },
      {
        domanda: "Quanto costa l'ingresso al parco di Komodo?",
        risposta: "Per gli stranieri 250.000 IDR a persona, circa 13 €, di solito gestito dall'operatore; le immersioni hanno una tassa a parte. Le tariffe sono cambiate più volte: confermarle prima di prenotare.",
      },
      {
        domanda: "C'è un limite di visitatori a Komodo?",
        risposta: "Dal 1° aprile 2026 il parco ammette al massimo 1.000 visitatori al giorno, con la stretta soprattutto su Padar, Rinca e Komodo. In alta stagione conviene prenotare il tour con anticipo.",
      },
      {
        domanda: "È pericoloso vedere i draghi di Komodo?",
        risposta: "Sono predatori, ma la visita si fa solo con un ranger e sui sentieri. Il rischio è basso se si seguono le istruzioni e non ci si allontana dal gruppo.",
      },
      {
        domanda: "Qual è il periodo migliore per Komodo?",
        risposta: "Da aprile a dicembre, nella stagione secca, quando il mare è più calmo. Le mante non sono mai garantite.",
      },
    ],
    esperienzeSlugs: ['trekking-draghi-komodo'],
    tripSlugs: ['indonesia-itinerario', 'bali-nusa-komodo', 'indonesia-isola-per-isola'],
    imageAlt: 'Le colline e le baie dell\'isola di Padar viste dal punto panoramico, Parco nazionale di Komodo',
    immagine: '/images/indonesia/komodo.jpg',
  },
  {
    slug: 'flores',
    paeseSlug: 'indonesia',
    ordine: 7,
    nome: 'Flores',
    tipologia: ['natura', 'cultura', 'vulcani'],
    giorniConsigliati: '5-7 giorni, spesso combinati con Komodo via Labuan Bajo',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più selvaggia e meno sviluppata tra quelle toccate dal viaggio, famosa per i tre laghi vulcanici che cambiano colore del Kelimutu e per i villaggi tradizionali sospesi tra le montagne.',
    percheAndarci:
      'È un lato dell\'Indonesia più rurale e meno turistico, con paesaggi vulcanici e una cultura dei villaggi ancora viva.',
    cosaVedere: [
      'Il Kelimutu, con i tre laghi craterici dai colori diversi',
      'Il villaggio tradizionale di Bena, ai piedi del vulcano Inerie',
      'Wae Rebo, il villaggio remoto raggiungibile solo a piedi',
      'Riung, punto di partenza per il tour delle 17 isole',
    ],
    cosaFare: [
      'Alba al Kelimutu per vedere i laghi nella luce migliore (c\'è una scheda esperienza dedicata)',
      'Trekking di 1-2 giorni fino al villaggio di Wae Rebo',
      'Giro dei villaggi tradizionali intorno a Bajawa, tra cui Bena',
    ],
    doveDormire:
      'Moni è il paese da cui si parte di notte per il Kelimutu, con guesthouse essenziali; Bajawa serve come base per i villaggi tradizionali, Labuan Bajo per l\'ovest e i tour a Komodo. A Wae Rebo si dorme nella casa comune del villaggio, tutti insieme sul pavimento: non è un albergo e non va trattato come tale.',
    doveMangiare:
      'L\'offerta è minima, e fa parte del viaggio: fuori da Labuan Bajo si mangia nei warung di paese, quasi sempre riso, pesce o pollo e verdure saltate, con poche alternative. Vale la pena provare il se\'i, la carne affumicata tipica delle isole orientali, e ovunque si trova il caffè di Flores, tostato in casa e servito senza filtro. Nelle guesthouse di Moni la cena si ordina nel pomeriggio, perché la cucinano apposta.',
    comeArrivare:
      "Per l'ovest si vola su Labuan Bajo (LBJ), con voli diretti da Bali, poco più di un'ora, e da Giacarta; è anche il porto per il Parco di Komodo. Per l'est si vola su Ende o Maumere, con pochi voli e orari che cambiano: vanno prenotati in anticipo. Poi si attraversa l'isola sulla Trans-Flores con un'auto con autista a giornata: Labuan Bajo-Bajawa circa 9-10 ore con le soste, Bajawa-Moni 6-7 ore, Moni-Ende 1,5-2 ore, Moni-Maumere 3-4 ore.",
    comeSpostarsi:
      'La Trans-Flores, la strada che attraversa l\'isola da ovest a est: panoramica ma tortuosa e più lenta di quanto sembri sulla mappa.',
    periodoMigliore: 'maggio-ottobre',
    costi: "Ingressi: Kelimutu circa 150.000 IDR per gli stranieri nei feriali, di più nel fine settimana; Bena e i villaggi a offerta. Budget: circa 20-30 € al giorno con guesthouse e warung, ma l'auto con autista sulla Trans-Flores pesa e conviene dividerla. Medio: 50-80 € con autista condiviso e hotel migliori a Labuan Bajo. Alto: oltre 120 € con autista privato, ecolodge e resort a Labuan Bajo. Contanti sempre in tasca: fuori da Labuan Bajo ed Ende i bancomat sono rari.",
    erroriDaEvitare: [
      'Sottovalutare i tempi di percorrenza sulla Trans-Flores: le distanze in linea d\'aria ingannano',
    ],
    miaEsperienza:
      'Flores è la parte di Indonesia rimasta indietro, ed è proprio questo che per me la rende la più interessante. La Trans-Flores sulla mappa sembra corta, in realtà è una successione infinita di curve: duecento chilometri sono una giornata intera, e chi ha poco tempo farebbe meglio a rinunciare. Il Kelimutu all\'alba merita comunque la sveglia alle tre. I colori dei tre laghi cambiano nel tempo e non c\'è modo di sapere prima cosa si troverà, ed è questo il senso del posto. Wae Rebo è la cosa più forte dell\'isola: tre ore di salita nella foresta, poi sette case coniche in una radura tra le montagne e nient\'altro. È un villaggio abitato, e si sta alle sue regole.',
    luoghi: [
      {
        nome: "Kelimutu",
        testo: "Tre laghi craterici nella stessa montagna, di colori diversi che cambiano nel tempo per i gas vulcanici e le piogge. Non c'è modo di sapere in anticipo quali colori si troveranno, ed è questo il senso del posto.",
        come: "Dal villaggio di Moni in moto o auto fino al parcheggio, circa 12 km e mezz'ora, poi una ventina di minuti a piedi su un sentiero facile con scalini fino al belvedere più alto. Sveglia prima dell'alba.",
        quando: "All'alba, prima che la nebbia salga. Le nuvole possono coprire tutto per la prima ora e poi aprirsi di colpo.",
        tempo: "3 ore",
        costo: "Stranieri circa 150.000 IDR nei feriali, circa 9 € (2025), di più nel fine settimana; in contanti.",
        lat: -8.76611,
        lng: 121.81417,
        url: "https://ayoketamannasional.kehutanan.go.id/en/taman-nasional/kelimutu",
        consiglio: "Meritano la sveglia prima dell'alba: la luce dell'alba sui laghi è la parte migliore.",
      },
      {
        nome: "Wae Rebo",
        testo: "Un villaggio remoto con sette case coniche (mbaru niang) disposte in cerchio attorno all'altare, in una radura tra le montagne, a circa 1.200 metri. È abitato e si sta alle sue regole, a cominciare dal rito di benvenuto. Una delle cose più forti dell'isola.",
        come: "Dall'area di Denge e Dintor, circa 4,5 km di sentiero nella foresta: 2,5-3 ore di salita (2022). Si dorme nelle case per gli ospiti del villaggio, in dormitorio. Si organizza tramite il comitato del villaggio o un operatore.",
        quando: "Nella stagione secca; con le piogge il sentiero è fangoso.",
        tempo: "2 giorni (1 notte)",
        lat: -8.76932,
        lng: 120.28398,
        consiglio: "Portare un dono modesto per la comunità e rispettare le regole del villaggio.",
      },
      {
        nome: "Bena",
        testo: "Un villaggio tradizionale ai piedi del vulcano Inerie, con file di case dal tetto di paglia e monumenti di pietra megalitici. Gli abitanti Ngada vi vivono ancora.",
        come: "Da Bajawa in auto, una ventina di chilometri. All'ingresso si firma il registro e si lascia un'offerta.",
        quando: "Al mattino o nel primo pomeriggio.",
        tempo: "1-2 ore",
        costo: "Offerta registrata all'ingresso.",
        lat: -8.87763,
        lng: 120.98583,
        consiglio: "Lasciare una piccola offerta e chiedere prima di fotografare le persone.",
      },
      {
        nome: "Risaie a ragnatela di Cancar e Ruteng",
        testo: "Risaie disposte a raggiera come una ragnatela, secondo l'antica spartizione delle terre. Il punto di vista migliore è su una collina vicino al paese.",
        come: "Da Ruteng in auto; è una sosta naturale sulla Trans-Flores tra Labuan Bajo e Bajawa.",
        quando: "Al mattino o al tramonto.",
        tempo: "1 ora",
        consiglio: "Combinare con una sosta a Ruteng, città fresca d'altura, e il suo caffè.",
      },
      {
        nome: "Riung e le 17 isole",
        testo: "Un arcipelago di piccole isole con spiagge e snorkeling, protetto come parco marino. Si gira in barca, fermandosi su spiagge bianche e su un isolotto dove riposano colonie di pipistrelli giganti.",
        come: "Da Bajawa o Ruteng a Riung in auto, poi barca. Tour di mezza giornata o giornata.",
        quando: "Nella stagione secca, con il mare più calmo.",
        tempo: "mezza giornata",
        consiglio: "Venirci con il tempo giusto: le distanze sulla Trans-Flores ingannano.",
      },
      {
        nome: "Casa di Sukarno a Ende",
        testo: "La casa dove fu esiliato Sukarno negli anni Trenta, prima di diventare il primo presidente dell'Indonesia. Dentro ci sono mobili e oggetti dell'epoca; nel giardino vicino, sotto un albero di pane, si dice che abbia pensato ai principi della Pancasila.",
        come: "In centro a Ende, in auto o a piedi.",
        quando: "Nei giorni feriali, in mattinata.",
        tempo: "45 minuti",
        costo: "Offerta o piccolo biglietto.",
        orari: "Dal lunedì al venerdì dalle 9:00, in orario d'ufficio; chiusa il sabato e la domenica.",
        lat: -8.84066,
        lng: 121.64455,
      },
      {
        nome: "Spiaggia di Penggajawa",
        testo: "Una spiaggia della costa sud coperta di ciottoli blu e verdi, che gli abitanti raccolgono, dividono per colore e vendono a sacchi. È una sosta di mezz'ora sulla strada tra Bajawa ed Ende.",
        come: "Sulla Trans-Flores, poco prima di Ende venendo da Bajawa.",
        quando: "Di giorno, durante il trasferimento.",
        tempo: "30 minuti",
        lat: -8.79458,
        lng: 121.49271,
        consiglio: "I ciottoli sono il lavoro degli abitanti: non portarne via.",
      },
      {
        nome: "Cascata di Murundao",
        testo: "Una piccola cascata con una pozza dove fare il bagno, appena fuori dal villaggio di Moni. È il modo più semplice di scaldarsi dopo il freddo dell'alba al Kelimutu.",
        come: "A piedi da Moni, pochi minuti dalla strada principale.",
        quando: "In tarda mattinata, al rientro dal Kelimutu.",
        tempo: "1 ora",
        lat: -8.75117,
        lng: 121.84602,
      },
      {
        nome: "Grotta di Batu Cermin",
        testo: "Una grotta calcarea alle porte di Labuan Bajo, chiamata «pietra specchio» perché in certe ore il sole entra da una fessura e si riflette sulle pareti umide. Nella roccia si vedono fossili di coralli e animali marini, segno che un tempo era sotto il mare.",
        come: "Pochi chilometri dal centro di Labuan Bajo, in scooter o auto; dentro si va con una guida locale e il casco.",
        quando: "In tarda mattinata, quando il sole è più alto.",
        tempo: "1 ora",
        lat: -8.47937,
        lng: 119.89919,
      },
    ],
    programmi: [
      {
        titolo: "2 giorni: Kelimutu dall'est",
        tappe: [
          "Giorno 1: volo su Ende, casa di Sukarno, strada per Moni",
          "Giorno 1: cena in guesthouse, ordinata nel pomeriggio",
          "Giorno 2: alba al Kelimutu, bagno a Murundao",
          "Giorno 2: rientro a Ende o Maumere per il volo",
        ],
      },
      {
        titolo: "3 giorni: l'ovest da Labuan Bajo",
        tappe: [
          "Giorno 1: Labuan Bajo, grotta di Batu Cermin, strada per Ruteng e le risaie di Cancar",
          "Giorno 2: Denge e salita a Wae Rebo, notte nel villaggio",
          "Giorno 3: discesa e rientro a Labuan Bajo",
        ],
      },
      {
        titolo: "5-7 giorni (est-ovest)",
        tappe: [
          "Giorno 1: Maumere o Ende, Moni",
          "Giorno 2: Kelimutu all'alba, Trans-Flores verso Bajawa",
          "Giorno 3: Bena e villaggi Ngada",
          "Giorno 4: strada per Ruteng, Cancar",
          "Giorno 5: Denge e salita a Wae Rebo",
          "Giorno 6: Wae Rebo, discesa e rientro a Labuan Bajo",
        ],
      },
    ],
    zone: [
      {
        nome: "Moni",
        perChi: "chi vede Kelimutu",
        testo: "Villaggio di guesthouse semplici. La cena si ordina nel pomeriggio.",
        fascia: "10-30 €",
      },
      {
        nome: "Bajawa",
        perChi: "chi va a Bena",
        testo: "Città d'altura con alloggi di ogni tipo, più fresca.",
        fascia: "12-45 €",
      },
      {
        nome: "Labuan Bajo",
        perChi: "chi parte o arriva",
        testo: "Porto con più servizi, base per Komodo.",
        fascia: "20-120 €",
      },
    ],
    sapori: [
      {
        nome: "Se'i",
        testo: "Carne affumicata tipica delle isole orientali."
      },
      {
        nome: "Caffè di Flores",
        testo: "Tostato in casa e servito senza filtro, ovunque."
      },
      {
        nome: "Warung di paese",
        testo: "Riso, pesce o pollo e verdure saltate: l'offerta è minima, e fa parte del viaggio."
      },
      {
        nome: "Sayur rebus",
        testo: "Verdure bollite con sambal, semplici e comuni."
      }
    ],
    attenzioni: [
      "La Trans-Flores è lunga e tortuosa: tratti brevi sulla mappa possono richiedere una giornata intera.",
      "A Wae Rebo e Bena si è ospiti: si chiede prima di fotografare e si rispettano le regole locali.",
      "Le guesthouse hanno pochi posti: prenotare per le tappe principali.",
      "Portare contanti: i bancomat sono rari fuori da Labuan Bajo."
    ],
    gite: [
      {
        nome: "Parco Nazionale di Komodo",
        distanza: "1-2 ore di barca da Labuan Bajo",
        come: "Con un tour in barca in giornata o con notti a bordo, da operatori con licenza.",
        testo: "I draghi di Komodo a Rinca o sull'isola di Komodo, sempre con un ranger, Padar all'alba e lo snorkeling a Manta Point e Kanawa. L'ingresso al parco per gli stranieri costa 250.000 IDR, con trekking e snorkeling compresi.",
      },
      {
        nome: "Kanawa",
        distanza: "circa 1 ora di barca da Labuan Bajo",
        come: "Con le barche dei tour o un passaggio in barca dal porto.",
        testo: "Un isolotto con una spiaggia bianca e un reef che comincia a pochi metri dalla riva: snorkeling facile per l'ultimo giorno prima del volo.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per Flores?",
        risposta: "Cinque-sette giorni per attraversarla da est a ovest con Kelimutu, Bena e Wae Rebo. Con meno tempo conviene scegliere un solo lato: l'est per il Kelimutu, l'ovest per Wae Rebo.",
      },
      {
        domanda: "Si può girare Flores senza autista?",
        risposta: "Sì, con bus locali e moto, ma è lento e faticoso. Quasi tutti prendono un'auto con autista a giornata sulla Trans-Flores, con il prezzo concordato prima: più giorni si prendono, meno costa.",
      },
      {
        domanda: "Come si arriva a Wae Rebo?",
        risposta: "Dal paese di Denge si sale a piedi per circa 4,5 km nella foresta, 2,5-3 ore. Si dorme nel villaggio, nella casa per gli ospiti, e si arriva rispettando il rito di benvenuto.",
      },
      {
        domanda: "Conviene partire da est o da ovest?",
        risposta: "È uguale: si vola su Maumere o Ende e si esce da Labuan Bajo, o al contrario. Chi vuole chiudere con Komodo parte da est.",
      },
      {
        domanda: "Quanto costa l'ingresso al Kelimutu?",
        risposta: "Per gli stranieri circa 150.000 IDR nei giorni feriali, di più nel fine settimana. Conviene avere contanti.",
      },
      {
        domanda: "Ci sono bancomat a Flores?",
        risposta: "A Labuan Bajo e a Ende sì; nei villaggi no, e a Moni mancano. Si parte con i contanti per i giorni di strada.",
      },
    ],
    esperienzeSlugs: ['alba-kelimutu'],
    tripSlugs: ['indonesia-itinerario', 'indonesia-isola-per-isola'],
    imageAlt: 'Le case coniche mbaru niang del villaggio di Wae Rebo tra le montagne di Flores',
    immagine: '/images/indonesia/flores.jpg',
  },
  {
    slug: 'raja-ampat',
    paeseSlug: 'indonesia',
    ordine: 8,
    nome: 'Raja Ampat',
    tipologia: ['diving', 'natura', 'mare'],
    giorniConsigliati: '5-7 giorni, meglio se in liveaboard o su più isole diverse',
    visitataPersonalmente: true,
    introduzione:
      'L\'arcipelago più remoto del viaggio, nella Papua occidentale: reef considerati tra i più biodiversi al mondo e isole a fungo che spuntano da un mare color smeraldo.',
    percheAndarci:
      'Per chi fa diving o snorkeling è una delle destinazioni più ambite al mondo; anche senza immersioni, i belvedere sulle isole a fungo bastano a giustificare il viaggio.',
    cosaVedere: [
      'Piaynemo e Wayag, i belvedere iconici sulle isole calcaree a forma di fungo',
      'Arborek, villaggio su palafitte con un reef accessibile direttamente dalla spiaggia',
      'I punti manta ray e i reef vergini del parco marino',
    ],
    cosaFare: [
      'Diving o snorkeling in liveaboard tra i reef del parco marino (c\'è una scheda esperienza dedicata)',
      'Salita ai belvedere di Piaynemo e Wayag',
      'Giornata a Arborek per lo snorkeling dal villaggio',
    ],
    doveDormire:
      'Tre opzioni molto diverse per budget e comfort (homestay, dive resort o liveaboard): il confronto è più sotto.',
    doveMangiare:
      'Non c\'è scelta, e non serve: negli homestay si mangia quello che cucina la famiglia, tre volte al giorno, pesce appena pescato con riso e verdure. È buono e monotono. Fuori dagli alloggi non esistono ristoranti, quindi l\'ultima occasione per comprare snack, acqua e contanti è Sorong o Waisai: sulle isole non ci sono bancomat.',
    comeArrivare:
      "Si vola su Sorong (SOQ) da Giacarta, Makassar o Manado, quest'ultimo diretto in circa 1,5 ore con Lion Air o TransNusa; da Bali c'è il diretto Garuda solo nei mesi in cui è attivo, nel 2026-2027 da fine ottobre a marzo. Dall'aeroporto al porto di Sorong bastano pochi minuti di taxi. Il traghetto per Waisai parte alle 14 e impiega circa 2 ore, con biglietto al porto in economy o VIP; la corsa del mattino non c'è tutti i giorni. A Waisai la barca dell'homestay porta a Kri, Arborek o alle Fam. Sulle isole non ci sono bancomat: i contanti si prelevano a Sorong.",
    comeSpostarsi: 'Solo via mare: barca pubblica, barca privata o liveaboard.',
    periodoMigliore:
      'non esiste una vera stagione sbagliata: ci sono due esperienze diverse. Da ottobre ad aprile le correnti portano una risalita di acque ricche di plancton che richiama mante e gli altri grandi pelagici, il mare è più calmo e i liveaboard operano a pieno regime: è la finestra più sicura e con più fauna. Da maggio a settembre soffiano i venti da sud-est, che alzano il mare soprattutto nello stretto di Dampier e negli attraversamenti verso Misool: gli spostamenti tra isole possono allungarsi e le uscite nelle zone più esposte possono saltare, e molti liveaboard in questo periodo si spostano altrove. In cambio l\'estate ha molta meno gente. Per la pioggia non c\'è una regola stagionale: qui piove tutto l\'anno, a rovesci brevi e imprevedibili. A decidere quando andare sono il vento e quello che si vuole vedere sott\'acqua.',
    costi:
      "Tassa turistica del distretto di Raja Ampat 1.000.000 IDR a persona per gli stranieri, circa 55 € (2026), da pagare una volta per soggiorno; la quota del parco marino è a parte e il suo importo è cambiato nel 2026, quindi va chiesto all'homestay prima di partire. Budget: circa 60-90 € al giorno a persona con homestay a pensione completa e uscite in barca divise. Medio: 150-250 € con dive resort e immersioni. Alto: oltre 300 € al giorno in liveaboard.",
    erroriDaEvitare: [
      'Non calcolare il costo e i tempi per ottenere il permesso obbligatorio del parco marino (PIN Raja Ampat)',
      'Sottovalutare i costi di trasporto interno: voli e barche verso quest\'area sono tra i più cari del paese',
      'Andare in estate aspettandosi gli stessi grandi pelagici dell\'inverno: mante e squali sono molto meno frequenti quando il plancton non risale in superficie',
      'Non mettere in conto giornate cuscinetto se si viaggia da maggio a settembre: il vento può far saltare un\'uscita o allungare un trasferimento tra isole, soprattutto verso Misool',
    ],
    confronti: [
      {
        titolo: 'Dove dormire a Raja Ampat: homestay, resort o liveaboard?',
        introduzione:
          'Con un arcipelago fatto quasi solo di isole e nessuna vera città, dove si dorme decide gran parte del viaggio: budget, contatto con le comunità locali e quali punti del parco si riesce davvero a raggiungere.',
        opzioni: [
          {
            nome: 'Homestay',
            sintesi: 'Palafitte a gestione familiare su isole come Gam, Kri o Arborek: la base più semplice e più diffusa.',
            costo: 'il più basso delle tre opzioni, di solito con i pasti preparati dalla famiglia',
            durata: 'più adatta a soggiorni di una settimana o più su una o due isole',
            pro: [
              'La spesa resta quasi interamente alla comunità locale, che è anche ciò che sostiene la protezione del parco marino',
              'Molti reef eccezionali (Arborek su tutti) si raggiungono a nuoto dalla spiaggia, senza barca',
              'Contatto diretto con chi vive sulle isole',
            ],
            contro: [
              'Sistemazioni essenziali: bagno spesso condiviso, elettricità solo a orari fissi (generatore)',
              'Nessun ristorante fuori dall\'alloggio: si mangia quello che cucina la famiglia',
              'Per i punti più lontani (Wayag, Misool) serve comunque organizzare barche a parte',
            ],
            perChi: 'Chi vuole il modo più economico e più vicino alla vita locale di stare a Raja Ampat, e si accontenta di esplorare l\'area intorno alla propria isola.',
          },
          {
            nome: 'Dive resort',
            sintesi: 'Strutture di fascia medio-alta, spesso su un\'isola privata o quasi, pensate per il diving organizzato.',
            costo: 'medio-alto, spesso con pacchetti che includono le immersioni',
            durata: 'da pochi giorni a una settimana, con uscite giornaliere in barca verso i siti vicini',
            pro: [
              'Comfort molto più alto dell\'homestay: acqua calda, elettricità continua, ristorante proprio',
              'Staff dedicato e barche più veloci e attrezzate per le uscite di immersione',
              'Buona base fissa per chi vuole più comodità senza rinunciare al diving quotidiano',
            ],
            contro: [
              'Costo comunque alto, e più lontano dal modello che sostiene direttamente le comunità',
              'Resta legato a un\'unica area: per i punti lontani serve comunque spostarsi',
            ],
            perChi: 'Chi fa diving sul serio e vuole comfort e organizzazione, senza il budget o la flessibilità di un liveaboard.',
          },
          {
            nome: 'Liveaboard',
            sintesi: 'Barca che fa da alloggio e mezzo di trasporto insieme, spostandosi di notte per essere ogni giorno su un punto diverso.',
            costo: 'il più caro delle tre opzioni, di solito tutto incluso',
            durata: 'crociere di più giorni, il modo più efficiente per coprire aree lontane tra loro',
            pro: [
              'È l\'unico modo pratico per arrivare fino a Wayag o spingersi a sud verso Misool nello stesso viaggio',
              'Nessun tempo perso in spostamenti via terra o traghetti: si dorme mentre la barca cambia zona',
              'Immersioni e pasti organizzati dall\'equipaggio, il comfort più alto delle tre opzioni',
            ],
            contro: [
              'Il costo è di gran lunga il più alto delle tre opzioni',
              'Il meno legato alle comunità locali: i soldi restano quasi tutti all\'operatore',
              'Nella stagione dei venti (maggio-settembre) molti liveaboard si spostano altrove, per evitare le zone più esposte',
            ],
            perChi: 'Chi ha il budget e vuole vedere il massimo dell\'arcipelago, punti più remoti compresi, in un\'unica settimana organizzata.',
          },
        ],
        raccomandazione:
          'Per un primo viaggio con budget contenuto, l\'homestay su un\'isola come Kri o Arborek dà già moltissimo. Il liveaboard si giustifica quando l\'obiettivo è vedere tutto l\'arcipelago, Wayag compreso, in un\'unica settimana intensa: è lì che il suo costo, il più alto delle tre opzioni, ha senso.',
      },
    ],
    miaEsperienza:
      'È il posto più bello che ho visto sott\'acqua, e anche il più faticoso da raggiungere: due voli, un traghetto e una barca, con costi che non somigliano al resto dell\'Indonesia. La differenza però si vede al primo snorkeling: una densità di pesce come quella del reef di Arborek, a venti metri dalla riva, altrove non c\'è più. Le correnti sono forti e vanno rispettate sul serio: certi punti si fanno solo negli orari giusti. Dormire negli homestay invece che nei resort è la scelta che vale la pena fare, perché quel modello, più ancora del prezzo, è ciò che tiene in piedi la protezione del parco. Piaynemo al tramonto, con le scale di legno e la piattaforma affollata, è l\'unico momento in cui si incontra qualcun altro. Ci siamo stati ad agosto 2026, che su tutte le guide è segnato come la stagione sbagliata. In parte lo è, ma in modo diverso da come ci si aspetta: il mare è stato clamoroso lo stesso, dieci giorni senza vedere una goccia di pioggia. Il vento invece si è fatto sentire: ha allungato un paio di trasferimenti tra le isole e ci ha fatto saltare un\'uscita in una zona più esposta. L\'altro conto da fare è sui grandi pelagici: mante e squali d\'estate sono molto più rari, perché la risalita di acque ricche di plancton che li richiama è soprattutto un fenomeno invernale. Con i reef pieni di pesce comunque e pochissimi altri turisti in giro, è stato un compromesso di cui non mi pento.',
    luoghi: [
      {
        nome: "Piaynemo",
        testo: "Il belvedere iconico di Raja Ampat, con le isole calcaree a forma di fungo che escono da una laguna turchese. Si raggiunge con una scalinata di legno.",
        come: "In barca dalle isole di Waisai o dagli homestay. Si paga il permesso del parco marino (PIN Raja Ampat).",
        quando: "Al tramonto, ma è il solo momento in cui si incontra qualcun altro.",
        tempo: "mezza giornata",
        costo: "Coperto dai permessi di Raja Ampat; il villaggio può chiedere un piccolo contributo a barca.",
        lat: -0.56417,
        lng: 130.2706,
        consiglio: "Salire presto o a fine giornata per evitare la piattaforma affollata.",
      },
      {
        nome: "Kri e Cape Kri",
        testo: "Una piccola isola nello stretto di Dampier, con una spiaggia bianca, una fila di homestay e un dive center. I reef intorno sono tra i più ricchi di specie al mondo, e molti si raggiungono direttamente dal pontile. Cape Kri, sulla punta orientale, è uno dei siti di immersione più famosi del parco per la quantità di pesce.",
        come: "Dal porto di Waisai con la barca dell'homestay, da concordare prima. Le immersioni si fanno con Soul Scuba Divers, sull'isola.",
        quando: "Al mattino, con la luce alta e il mare spesso più piatto.",
        tempo: "2-3 giorni",
        lat: -0.56083,
        lng: 130.6779,
        consiglio: "Noi abbiamo dormito al Paparisa Homestay: prezzi sopra la media degli altri homestay, ma un buon equilibrio tra comfort e local stay, e davanti alla spiaggia nuotano spesso delfini e dugonghi.",
      },
      {
        nome: "Arborek",
        testo: "Un villaggio su palafitte con un reef accessibile direttamente dalla spiaggia, con una densità di pesce a pochi metri dalla riva che altrove è rara.",
        come: "In barca dal resto delle isole. Si dorme negli homestay del villaggio.",
        quando: "Tutto l'anno; meglio al mattino.",
        tempo: "1-2 giorni",
        lat: -0.56506,
        lng: 130.51758,
        consiglio: "Dormire negli homestay, non nei resort: quel modello è ciò che tiene in piedi la protezione del parco.",
      },
      {
        nome: "Isole Fam: Rufas e la Fam Wall",
        testo: "Più a nord-ovest il paesaggio cambia: isolotti di roccia calcarea coperti di foresta, lagune turchesi e pochissime strutture. Rufas è una baia tra gli isolotti con acqua bassa e trasparente; la Fam Wall è una parete corallina che scende verso il blu, con coralli molli e ventagli di gorgonie. Piaynemo è a pochi minuti di barca.",
        come: "In barca da Kri o da Waisai, qualche ora secondo il mare; le uscite si organizzano con l'homestay.",
        quando: "L'ordine delle soste lo decide la marea; con il vento le zone esposte possono saltare.",
        tempo: "1-2 giorni",
        lat: -0.66054,
        lng: 130.29064,
        consiglio: "Noi abbiamo dormito al Tanjung Mefiyai Homestay: molto semplice, in un posto bellissimo, con Reno che organizza gite e trasporti. Maschera e pinne proprie, perché quelle in prestito non sempre sono in buono stato.",
      },
      {
        nome: "Telaga Bintang",
        testo: "Una laguna a forma di stella chiusa tra le rocce, a due passi da Piaynemo. Si vede dall'alto da un piccolo belvedere raggiunto con una breve salita sulla roccia, ed è una sosta che quasi tutte le barche abbinano a Piaynemo.",
        come: "Nella stessa uscita in barca di Piaynemo.",
        quando: "Prima o dopo Piaynemo, con la luce del pomeriggio.",
        tempo: "30-45 minuti",
        lat: -0.56887,
        lng: 130.27073,
        consiglio: "La roccia è tagliente e scivolosa: servono scarpe con la suola.",
      },
      {
        nome: "Stretto di Dampier e punti con le mante",
        testo: "I reef vergini del parco marino, con mante nei punti di pulizia e una grande varietà di pesci. Le correnti sono forti e vanno rispettate.",
        come: "In barca con operatori, secondo gli orari giusti per le correnti.",
        quando: "Le mante e i grandi pelagici dipendono dalla stagione: chiedere agli operatori di immersione prima di fissare le date.",
        tempo: "1-2 giorni",
        consiglio: "Certi punti si fanno solo con la corrente giusta: seguire le istruzioni della guida.",
      },
      {
        nome: "Uccelli del paradiso a Saporkren e Sawinggrai",
        testo: "Nella foresta di Waigeo e di Gam vivono gli uccelli del paradiso, con i maschi che all'alba fanno la danza di corteggiamento sugli stessi rami. Le guide dei villaggi di Saporkren e Sawinggrai portano ai punti di osservazione. A Sawinggrai il pontile del villaggio è anche un buon punto di snorkeling.",
        come: "Saporkren è vicino a Waisai, Sawinggrai su Gam: in barca dall'homestay prima dell'alba, poi una breve camminata nella foresta con la guida del villaggio.",
        quando: "All'alba: dopo le prime ore gli uccelli smettono di esibirsi.",
        tempo: "mezza giornata",
        lat: -0.43686,
        lng: 130.72983,
        consiglio: "Portare un binocolo o un teleobiettivo: gli uccelli stanno in alto sugli alberi.",
      },
      {
        nome: "Wayag",
        testo: "L'altro belvedere famoso, a nord, con decine di isolotti calcarei in una laguna. Più lontano, richiede più tempo e più soldi.",
        come: "Con liveaboard o barca privata, lontano da Waisai. Dipende dal vento e dal mare.",
        quando: "Nei mesi con il mare più calmo: chiedere a homestay e operatori.",
        tempo: "1 giorno o più",
        lat: 0.17774,
        lng: 130.04205,
        consiglio: "Mettere in conto una giornata cuscinetto: il vento può far saltare l'uscita.",
      },
      {
        nome: "Misool",
        testo: "Il sud del parco, con reef e isole calcaree più remote e aree più calme. Meno battuto.",
        come: "Con liveaboard o resort, lontano da Waisai.",
        quando: "Nei mesi con il mare più calmo; con il vento il mare verso Misool si alza.",
        tempo: "2 giorni o più",
        lat: -1.86951,
        lng: 130.13809,
        consiglio: "Con il vento i trasferimenti verso Misool possono saltare: tenere margine.",
      },
      {
        nome: "Pontile di Yenbuba",
        testo: "Il villaggio di Yenbuba, sull'isola di Mansuar di fronte a Kri, ha un pontile sotto il quale si radunano banchi di pesci, e un reef che inizia a pochi metri dalla riva. È una delle uscite di snorkeling più semplici da Kri.",
        come: "Pochi minuti di barca da Kri, con l'homestay.",
        quando: "Con la corrente debole: chiedere alla guida l'orario.",
        tempo: "1-2 ore",
        lat: -0.57107,
        lng: 130.65374,
        consiglio: "Nel villaggio si chiede sempre il permesso prima di fotografare le persone.",
      },
      {
        nome: "Friwen Wall",
        testo: "Una parete corallina poco profonda lungo l'isola di Friwen, tra Waisai e Kri, coperta di coralli molli, spugne e ventagli. È un punto riparato, adatto anche a chi fa snorkeling per la prima volta in queste acque.",
        come: "In barca da Waisai o da Kri, spesso come sosta durante il trasferimento.",
        quando: "Con la marea e la corrente indicate dalla guida.",
        tempo: "1 ora",
        lat: -0.47745,
        lng: 130.69603,
      },
    ],
    programmi: [
      { titolo: "1 giorno: da Kri", tappe: [
        "Mattina: snorkeling dal pontile di Kri o a Cape Kri",
        "Ore centrali all'ombra",
        "Pomeriggio: in barca al pontile di Yenbuba",
        "Tramonto dalla spiaggia dell'homestay",
      ] },
      { titolo: "3 giorni: Kri, Arborek e Fam", tappe: [
        "Giorno 1: traghetto Sorong-Waisai, barca per Kri e primo bagno dal pontile",
        "Giorno 2: all'alba uccelli del paradiso, poi il reef di Arborek",
        "Giorno 3: trasferimento alle Fam, Telaga Bintang e Piaynemo al tramonto",
      ] },
      { titolo: "5-7 giorni", tappe: [
        "Giorno 1: volo a Sorong, traghetto per Waisai",
        "Giorno 2-3: Arborek e snorkeling nei reef vicini",
        "Giorno 4: Piaynemo",
        "Giorno 5-6: punti con le mante o Wayag, se il mare lo consente",
        "Giorno 7: rientro a Sorong",
      ] },
    ],
    zone: [
      {
        nome: "Homestay (Arborek, Gam, Kri)",
        perChi: "chi vuole risparmiare e sostenere le comunità",
        testo: "Si dorme in casa di famiglie, si mangia ciò che cucinano, senza elettricità a tutte le ore.",
        fascia: "30-80 €",
      },
      {
        nome: "Dive resort (Kri, Gam, Mansuar)",
        perChi: "chi si immerge ogni giorno e vuole comodità",
        testo: "Bungalow con elettricità continua, ristorante e barche veloci per i siti dello stretto di Dampier. Di solito in pacchetto con pasti e immersioni.",
        fascia: "da 280 €",
      },
      {
        nome: "Liveaboard",
        perChi: "chi vuole coprire più zone",
        testo: "Barca con cuccette, per raggiungere Wayag e Misool. Costoso.",
      },
      {
        nome: "Waisai",
        perChi: "chi arriva e riparte",
        testo: "Capoluogo del distretto, con pochi servizi e tappa logistica.",
      },
    ],
    sapori: [
      {
        nome: "Pesce fresco con riso",
        testo: "Pesce appena pescato con riso e verdure, negli homestay. Buono e monotono."
      },
      {
        nome: "Papeda",
        testo: "Colla di sago, tipica della Papua, servita con zuppa di pesce giallo."
      },
      {
        nome: "Frutta di stagione",
        testo: "Quella che c'è, sulle isole."
      }
    ],
    attenzioni: [
      "Il permesso del parco marino (PIN Raja Ampat) è obbligatorio: calcolarne costo e tempi.",
      "Il vento può allungare i trasferimenti e far saltare le uscite verso le zone esposte: chiedere agli operatori qual è la stagione migliore.",
      "Non ci sono bancomat sulle isole: prelevare a Sorong o Waisai.",
      "Le correnti sono forti: seguire sempre le istruzioni della guida."
    ],
    gite: [
      {
        nome: "Arborek e Sawinggrai",
        distanza: "circa 20 km in barca da Kri",
        come: "Con la barca dell'homestay, prezzo a barca da dividere.",
        testo: "Una giornata tra il reef di Arborek, con i banchi di pesci sotto il pontile, e il villaggio di Sawinggrai su Gam. Partendo all'alba si aggiungono gli uccelli del paradiso.",
      },
      {
        nome: "Piaynemo e Telaga Bintang",
        distanza: "circa 45 km in barca da Kri, qualche ora secondo il mare",
        come: "Con l'homestay o con una barca privata, partendo al mattino.",
        testo: "Il belvedere più famoso di Raja Ampat e la laguna a stella lì accanto, con una sosta di snorkeling lungo il tragitto. Con il vento la traversata si allunga: meglio dormire una notte alle Fam.",
      },
      {
        nome: "Friwen Wall e Saporkren",
        distanza: "vicino a Waisai, circa 10 km in barca da Kri",
        come: "In barca, anche come sosta all'arrivo o alla partenza.",
        testo: "All'alba gli uccelli del paradiso nella foresta di Saporkren, poi snorkeling sulla parete riparata di Friwen. È la gita più semplice da incastrare nella giornata del traghetto.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Raja Ampat?",
        risposta: "Una settimana come minimo: con meno si passa più tempo in viaggio che in acqua. Conviene dividerla tra lo stretto di Dampier (Kri, Arborek) e le isole Fam.",
      },
      {
        domanda: "Quanto costa il permesso per Raja Ampat?",
        risposta: "Nel 2026 la tassa turistica del distretto è di 1.000.000 IDR a persona per gli stranieri, una volta per soggiorno. La quota del parco marino è separata e il suo importo è cambiato nel 2026: va chiesto all'homestay, e la ricevuta va conservata.",
      },
      {
        domanda: "Homestay, resort o liveaboard?",
        risposta: "L'homestay è la scelta più economica e quella che sostiene le comunità che proteggono il parco. Il resort conviene a chi si immerge ogni giorno; il liveaboard a chi vuole arrivare a Wayag o a Misool nello stesso viaggio.",
      },
      {
        domanda: "Qual è il periodo migliore per Raja Ampat?",
        risposta: "Da ottobre ad aprile, con mare più calmo, mante e grandi pelagici. Da maggio a settembre soffiano i venti da sud-est: i trasferimenti si allungano e qualche uscita può saltare, ma c'è molta meno gente.",
      },
      {
        domanda: "Ci sono bancomat a Raja Ampat?",
        risposta: "Non sulle isole. Si prelevano a Sorong tutti i contanti del soggiorno, in rupie: homestay, barche e contributi ai villaggi si pagano in contanti.",
      },
      {
        domanda: "Come si arriva a Kri?",
        risposta: "Volo su Sorong, traghetto delle 14 per Waisai (circa 2 ore) e poi la barca dell'homestay fino a Kri. Conviene un volo del mattino, per arrivare al porto con margine.",
      },
    ],
    esperienzeSlugs: ['diving-liveaboard-raja-ampat'],
    tripSlugs: ['bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: 'Gli isolotti calcarei coperti di foresta nella laguna turchese di Piaynemo, Raja Ampat',
    immagine: '/images/indonesia/raja-ampat.jpg',
  },
  {
    slug: 'mentawai',
    paeseSlug: 'indonesia',
    ordine: 9,
    nome: 'Mentawai',
    tipologia: ['natura', 'cultura', 'surf', 'mare'],
    giorniConsigliati: '7-8 giorni: 3-4 nella giungla di Siberut, il resto a Sipora per il mare o il surf',
    visitataPersonalmente: true,
    introduzione:
      'Un arcipelago a ovest di Sumatra, con quattro isole principali: Siberut, Sipora, Pagai Nord e Pagai Sud. A Siberut si vive qualche giorno nella giungla con una famiglia mentawai; a Sipora ci sono le spiagge e alcuni dei break di surf più famosi del mondo.',
    percheAndarci:
      'Per stare qualche giorno in una uma, la casa lunga dei Mentawai, con guide di Siberut, e poi per il mare e le onde di Sipora.',
    cosaVedere: [
      'La giungla di Siberut, risalendo il fiume in canoa a motore fino alla uma di una famiglia',
      'Le spiagge di Sipora',
      'Tuapejat, il capoluogo delle Mentawai, su Sipora',
      'I break di surf di Sipora',
    ],
    cosaFare: [
      'Qualche giorno con una famiglia mentawai nella giungla di Siberut, con un operatore che lavora con guide mentawai',
      'Surf sui reef di Sipora, solo per intermedi ed esperti, nella stagione maggio-settembre',
      'Lezioni di surf su onde di spiaggia per chi comincia, meglio nei mesi con poco swell',
    ],
    doveDormire:
      'A Siberut nella uma della famiglia che ospita, su una stuoia con zanzariera. A Sipora homestay semplici, oppure resort e surf camp, più cari.',
    comeArrivare:
      "Si vola su Padang, all'aeroporto Minangkabau (PDG), da Giacarta, Bali o Kuala Lumpur: andata e ritorno da Giacarta o Bali costa circa 130-200 USD. Il treno Minangkabau Ekspres porta in circa 40 minuti, per circa 10.000 IDR, alla stazione di Pulau Air, vicina al porto; in Grab o Gojek sono circa 100.000-150.000 IDR. Dal porto sulla foce del Batang Arau parte il traghetto veloce Mentawai Fast: circa 3,5 ore per Tuapejat (Sipora) e circa 4 per Siberut, a circa 300.000-400.000 IDR (circa 17-22 €), con supplemento per le tavole da surf. Orari e prezzi cambiano spesso: vanno verificati sulla pagina ufficiale dell'operatore, e il biglietto conviene comprarlo il giorno prima al porto. Non risultano voli regolari confermati per l'aeroporto delle Mentawai.",
    comeSpostarsi:
      'A Siberut minivan, canoa a motore sul fiume e trekking nel fango. Tra le isole e verso i break, barca privata o i trasferimenti organizzati da operatori e surf camp.',
    periodoMigliore:
      'maggio-inizio settembre per la giungla di Siberut, maggio-settembre per gli swell più grandi; da novembre a gennaio piove molto',
    costi:
      "soggiorni nella giungla con operatori locali a pacchetto, prezzi da chiedere all'operatore; per i surfisti c'è una tassa surf obbligatoria, con importo da verificare al momento della prenotazione. Budget: circa 50-70 € al giorno con homestay semplici a Sipora e traghetto pubblico. Medio: 100-150 € con un homestay migliore, qualche uscita in barca condivisa e il pacchetto nella giungla di Siberut (da 480 € a persona per 6 giorni con sosta a Sipora). Alto: oltre 250 € con resort o surf camp e barca privata, che costa di massima 1.500.000-3.000.000 IDR al giorno (circa 85-170 €).",
    erroriDaEvitare: [
      'Trattare la visita come uno spettacolo: si è ospiti in casa di una famiglia, si chiede il permesso prima di ogni foto e non si paga per pose o costumi',
      'Partire senza giorni di margine: con bandiera rossa del Syahbandar i traghetti non escono',
      'Sottovalutare le condizioni: fango, zanzare, niente elettricità, caldo umido',
      'Pensare che i reef famosi siano adatti ai principianti',
      'Partire senza assicurazione che copra l\'evacuazione e senza essere passati da un ambulatorio di medicina dei viaggi per la malaria',
    ],
    miaEsperienza:
      'Ci sono andato con Mentawai Tribe, un operatore di Padang che lavora con guide di Siberut, e ho passato qualche giorno nella giungla con una famiglia mentawai. Sono posti pazzeschi. Non è per tutti, però: c\'è fango ovunque, ci sono insetti, non c\'è elettricità e si dorme su una stuoia. E c\'è un lato etico da affrontare onestamente. Non è uno zoo umano, sei ospite in casa di qualcuno. Si chiede prima di fotografare, i regali li concorda la guida, i soldi devono arrivare alla comunità: per questo conta scegliere un operatore con guide mentawai. Serve anche sapere che per decenni lo Stato ha represso le loro tradizioni, bruciando oggetti rituali e arrestando gli sciamani. Dopo la giungla ci sono le spiagge, bellissime, e il surf di Sipora, che è il motivo per cui quasi tutti arrivano fin qui.',
    luoghi: [
      {
        nome: "Giungla di Siberut e la uma di una famiglia mentawai",
        testo: "Si risale il fiume in canoa a motore fino alla uma, la casa lunga di una famiglia, e si passano alcuni giorni nella giungla. Fango ovunque, insetti, niente elettricità, si dorme su una stuoia. Non è uno zoo umano: si è ospiti in casa di qualcuno.",
        come: "Dal porto di Siberut, in canoa a motore e a piedi nella foresta. Con guide mentawai di operatori locali di Padang. Dal porto si prosegue in minivan o pick-up fino a un villaggio, poi 1,5-2 ore di canoa e circa 3,5 km a piedi su fango, radici e tronchi.",
        quando: "Nei mesi meno piovosi; chiedere all'operatore, perché in certi periodi piove molto e i sentieri diventano difficili.",
        tempo: "3-8 giorni",
        costo: "A pacchetto con l'operatore; per esempio da 480 € a persona per 6 giorni tra Siberut e Sipora (2026).",
        lat: -1.36667,
        lng: 98.93333,
        consiglio: "Chiedere prima di fotografare, concordare i regali con la guida e scegliere un operatore con guide mentawai, perché i soldi arrivino alla comunità."
      },
      {
        nome: "Muara Siberut",
        testo: "Il porto principale di Siberut, dove arriva il traghetto da Padang. Da qui partono i mezzi verso i villaggi dell'interno e le canoe sul fiume. Dopo il porto la copertura telefonica diventa incerta.",
        come: "Traghetto Mentawai Fast da Padang, circa 4 ore. Secondo l'operatore della giungla le corse pubbliche partono il martedì, il giovedì e il sabato, ma vanno sempre riconfermate.",
        quando: "Partenza al mattino presto: chi va nella giungla arriva alla uma nel pomeriggio.",
        tempo: "mezza giornata di passaggio",
        costo: "Traghetto circa 300.000-400.000 IDR a persona, circa 17-22 € (2026).",
        lat: -1.5968,
        lng: 99.2138,
        url: "https://www.mentawaifast.com/",
        consiglio: "Telefono, documenti e soldi nella sacca stagna appena scesi: in canoa ci si bagna."
      },
      {
        nome: "Tuapejat e Sipora",
        testo: "Il capoluogo delle Mentawai e l'isola dove si trovano le spiagge più belle. Dopo la giungla di Siberut è la parte di mare e riposo.",
        come: "Traghetto veloce Mentawai Fast da Padang, solo alcuni giorni a settimana. Orari e prezzi cambiano spesso: verificarli sulla pagina dell'operatore. La traversata dura circa 3,5 ore.",
        quando: "Nei mesi con il mare più calmo, chiedendo agli operatori.",
        tempo: "2-3 giorni",
        costo: "Traghetto circa 300.000-400.000 IDR a persona, circa 17-22 €, più il supplemento per le tavole (2026).",
        lat: -2.0308,
        lng: 99.5867,
        url: "https://www.mentawaifast.com/",
        consiglio: "Lasciare giorni di margine: con la bandiera rossa del Syahbandar i traghetti non escono."
      },
      {
        nome: "Spiagge di Sipora",
        testo: "Spiagge bellissime e poco frequentate, con acqua limpida. Davanti a molte c'è il reef, buono per lo snorkeling quando il mare è calmo. Gli alloggi sono sparsi lungo la costa, tra Tuapejat e il sud dell'isola.",
        come: "In scooter o con trasferimenti organizzati da Tuapejat; per le spiagge vicine anche in barca.",
        quando: "Al mattino, quando il mare è più liscio e il vento più debole.",
        tempo: "1-2 giorni",
        consiglio: "Portare tutto ciò che serve: sull'isola i servizi sono pochi. Il corallo taglia: anche un graffio piccolo va disinfettato subito."
      },
      {
        nome: "I break di surf delle Mentawai",
        testo: "Onde tra le più celebri al mondo, il motivo per cui quasi tutti arrivano fin qui. I surf camp e le barche portano ai break secondo lo swell e il livello di chi surfa.",
        come: "Con barca privata o trasferimenti organizzati da surf camp. Tassa surf obbligatoria. Per chi comincia ci sono onde di spiaggia con lezioni e noleggio.",
        quando: "Gli swell e la stagione migliore dipendono dal livello: chiedere ai surf camp prima di fissare le date.",
        tempo: "almeno 5 giorni",
        costo: "Lezioni e noleggio per principianti circa 500.000-1.000.000 IDR al giorno, circa 28-55 € (2026). Tassa surf a parte, importo da confermare con l'alloggio.",
        consiglio: "I reef famosi non sono adatti ai principianti: scegliere i break secondo il livello."
      },
      {
        nome: "Lance's Left, baia di Katiet",
        testo: "La sinistra più accessibile del sud di Sipora, nella baia di Katiet. Resta comunque un'onda su reef, per intermedi, e con gli swell grandi diventa seria.",
        come: "In barca dagli alloggi del sud di Sipora, decidendo lo spot la mattina stessa con il barcaiolo.",
        quando: "Le prime ore del mattino, con meno vento e meno barche.",
        tempo: "mezza giornata",
        consiglio: "Con la bassa marea il reef è a pochi centimetri: scarpette da reef e mai in acqua da soli."
      },
      {
        nome: "HTs (Lance's Right)",
        testo: "Una destra difficile da leggere, vicina a Lance's Left, con il reef tagliente nell'inside. È un'onda da esperti.",
        come: "In barca dalla baia di Katiet o dagli alloggi del sud di Sipora.",
        quando: "Al mattino presto, secondo swell e marea.",
        tempo: "mezza giornata",
        lat: -2.37567,
        lng: 99.85954,
        consiglio: "Chi non ha il livello la guarda dalla barca: è già uno spettacolo."
      },
      {
        nome: "Telescopes",
        testo: "Una sinistra lunga a nord di Sipora, con più sezioni a tubo. È uno dei break più noti dell'isola, per surfisti esperti.",
        come: "In barca dagli alloggi di Sipora; lo spot si sceglie la mattina in base alla direzione dello swell.",
        quando: "Le prime ore del mattino, prima che il vento rinforzi.",
        tempo: "mezza giornata",
        consiglio: "Chi non surfa può fare snorkeling in acque calme o restare in barca."
      },
      {
        nome: "Padang: città vecchia e ponte Siti Nurbaya",
        testo: "La città di partenza per le Mentawai. Lungo il fiume Batang Arau ci sono i vecchi magazzini dell'epoca olandese, e il ponte di Siti Nurbaya è il punto più bello al tramonto. Il porto dei traghetti è sulla foce dello stesso fiume.",
        come: "A piedi nella città vecchia, dormendo in un albergo vicino al porto.",
        quando: "Al tramonto.",
        tempo: "mezza giornata",
        lat: -0.96546,
        lng: 100.35909,
        consiglio: "È anche l'ultima occasione per un nasi padang fatto bene e per comprare il rendang confezionato."
      },
      {
        nome: "Spiaggia di Air Manis e Malin Kundang",
        testo: "Una spiaggia a sud di Padang con la roccia che, secondo la leggenda, è Malin Kundang, il figlio ingrato trasformato in pietra. È la gita più semplice per un giorno di margine in città.",
        come: "In auto o con Grab dal centro di Padang.",
        quando: "Pomeriggio.",
        tempo: "2 ore",
        lat: -0.99127,
        lng: 100.36069,
      }
    ],
    programmi: [
      {
        titolo: "4 giorni: solo Siberut",
        tappe: [
          "Giorno 1: traghetto da Padang a Siberut, canoa sul fiume e sentiero fino alla uma",
          "Giorno 2: giornata con la famiglia, raccolta del cibo e lavorazione del sago",
          "Giorno 3: foresta intorno alla uma al mattino presto, pomeriggio di riposo",
          "Giorno 4: rientro a piedi e in canoa, traghetto per Padang"
        ]
      },
      {
        titolo: "5 giorni: Sipora, mare e surf",
        tappe: [
          "Giorno 1: Mentawai Fast da Padang a Tuapejat, trasferimento all'alloggio",
          "Giorno 2: spiaggia e snorkeling, o lezione di surf su onde di spiaggia",
          "Giorno 3: barca per Lance's Left e HTs nella baia di Katiet",
          "Giorno 4: Telescopes al mattino o giorno lento di riserva",
          "Giorno 5: traghetto Tuapejat-Padang nel primo pomeriggio"
        ]
      },
      {
        titolo: "8-9 giorni",
        tappe: [
          "Giorno 1: Padang, traghetto per Siberut",
          "Giorno 2-5: giungla con la famiglia mentawai",
          "Giorno 6: rientro e traghetto per Tuapejat",
          "Giorno 7-8: spiagge o surf a Sipora",
          "Giorno 9: rientro a Padang"
        ]
      }
    ],
    zone: [
      {
        nome: "Siberut (uma o homestay)",
        perChi: "chi fa la giungla",
        testo: "Si dorme con la famiglia o in un campo semplice. Senza elettricità."
      },
      {
        nome: "Tuapejat",
        perChi: "chi arriva dal traghetto",
        testo: "Alberghi semplici e ristoranti. Un punto logistico."
      },
      {
        nome: "Homestay di Sipora",
        perChi: "chi vuole mare e qualche uscita in barca",
        testo: "Strutture semplici lungo la costa, tra Tuapejat e il sud dell'isola. Conviene sceglierne una con il transfer dalla barca compreso.",
        fascia: "40-85 €"
      },
      {
        nome: "Surf camp di Sipora",
        perChi: "surfisti",
        testo: "Strutture dedicate, con barche per i break.",
        fascia: "da 220 €"
      }
    ],
    sapori: [
      {
        nome: "Pesce e riso",
        testo: "Il pasto base in giungla e sulle isole."
      },
      {
        nome: "Sago",
        testo: "Un alimento tradizionale mentawai, preparato dalle famiglie."
      },
      {
        nome: "Nasi padang a Padang",
        testo: "Prima o dopo le isole, il piatto della città di partenza."
      }
    ],
    attenzioni: [
      "Non trattare la visita come uno spettacolo: si è ospiti, si chiede prima di fotografare e non si paga per pose o costumi.",
      "Con bandiera rossa i traghetti non escono: partire con giorni di margine.",
      "Condizioni dure: fango, zanzare, niente elettricità, caldo umido.",
      "Assicurazione che copra l'evacuazione e visita in un ambulatorio di medicina dei viaggi per la malaria."
    ],
    gite: [
      {
        nome: "Bukittinggi e il canyon di Ngarai Sianok",
        distanza: "circa 3 ore d'auto da Padang",
        come: "Auto privata, circa 500.000 IDR (circa 28 €), da fissare prima. Meglio con una notte, se i giorni di margine lo permettono.",
        testo: "La città dell'altopiano dei Minangkabau, fresca dopo il caldo della costa, con la torre dell'orologio Jam Gadang, il canyon di Ngarai Sianok e i tunnel giapponesi dei Lobang Jepang."
      },
      {
        nome: "Cascata di Lembah Anai",
        distanza: "lungo la strada tra Padang e Bukittinggi",
        come: "In auto, come sosta sulla strada principale per l'altopiano.",
        testo: "La cascata cade proprio a bordo strada, nella gola di Lembah Anai. Si abbina alla gita a Bukittinggi o si fa da sola con mezza giornata libera a Padang."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per le Mentawai?",
        risposta: "Sette-otto giorni: tre o quattro nella giungla di Siberut e il resto a Sipora. A questi va aggiunto almeno un giorno di margine a Padang prima del volo."
      },
      {
        domanda: "Come si arriva alle Mentawai?",
        risposta: "Con il traghetto veloce Mentawai Fast da Padang: circa 3,5 ore per Tuapejat e 4 per Siberut. Non ci sono voli regolari confermati."
      },
      {
        domanda: "Le Mentawai sono adatte a chi non surfa?",
        risposta: "Sì: la giungla di Siberut con una famiglia mentawai e le spiagge di Sipora bastano da sole. Chi non surfa può anche seguire le barche ai break e fare snorkeling."
      },
      {
        domanda: "Si può imparare a surfare alle Mentawai?",
        risposta: "Su onde di spiaggia, con lezioni e noleggio a circa 500.000-1.000.000 IDR al giorno. I reef famosi, come HTs e Telescopes, sono per intermedi ed esperti."
      },
      {
        domanda: "Quanto costa la tassa surf delle Mentawai?",
        risposta: "La pagano solo i surfisti, e l'importo cambia spesso. Va chiesto aggiornato all'alloggio o all'operatore prima di partire."
      },
      {
        domanda: "Qual è il periodo migliore per le Mentawai?",
        risposta: "Da maggio a settembre: per la giungla di Siberut i mesi più asciutti vanno da maggio a inizio settembre, e d'estate arrivano anche gli swell più grandi. Da novembre a gennaio piove molto."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sumatra-mentawai', 'indonesia-isola-per-isola'],
    imageAlt: 'La foresta pluviale delle Mentawai che arriva fino al mare, con un fiume che serpeggia verso la costa, vista dal drone',
    immagine: '/images/indonesia/mentawai-costa-foresta.webp',
  },
]
