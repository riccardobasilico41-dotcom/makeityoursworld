import type { Destinazione } from '@/lib/types'

// Otto isole visitate di persona. Sette di queste sono ora collegate al primo
// viaggio-diario combinato dell'Indonesia ("Indonesia in 30 giorni", slug
// indonesia-itinerario): tripSlugs riporta quel viaggio per Sumatra, Giava,
// Bali, Sulawesi, Lombok e Gili, Komodo e Flores. Raja Ampat resta con
// tripSlugs vuoto di proposito: la sua stagione migliore (ottobre-aprile) è
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
      'La porta d\'accesso più selvaggia dell\'arcipelago: la giungla del Gunung Leuser con gli ultimi oranghi selvatici del pianeta, il più grande lago vulcanico al mondo e la cultura Batak sull\'isola di Samosir.',
    percheAndarci:
      'Qui il trekking nella giungla è meno battuto che in altre mete del sud-est asiatico, e il momento più forte è l\'incontro con gli oranghi.',
    cosaVedere: [
      'Il Parco Nazionale del Gunung Leuser a Bukit Lawang, uno degli ultimi habitat degli oranghi di Sumatra',
      'Il Lago Toba, il più grande lago vulcanico al mondo, con l\'isola di Samosir al centro',
      'I villaggi Batak di Samosir, con le case tradizionali dal tetto a sella e le tombe di pietra',
      'I vulcani Sibayak e Sinabung nella zona di Berastagi',
    ],
    cosaFare: [
      'Trekking di 1-3 giorni nella giungla di Bukit Lawang per avvistare oranghi selvatici (solo con guida certificata)',
      'Giro in barca sul Lago Toba e giornata in scooter sull\'isola di Samosir',
      'Bagno nelle sorgenti calde ai piedi del Sibayak dopo un trekking vulcanico',
      'Immersione nella cultura Batak: cerimonie, artigianato, danze Sigale-gale',
    ],
    doveDormire:
      'Guesthouse lungo il fiume Bohorok a Bukit Lawang, comode per partire presto per il trekking; homestay sull\'isola di Samosir per il Lago Toba.',
    doveMangiare:
      'Si mangia semplice e quasi ovunque bene: il nasi padang (vetrinette con dieci o quindici piatti già pronti: si indica quello che si vuole e si paga solo ciò che si tocca) è l\'istituzione locale ed è nato proprio qui, a Sumatra occidentale. Nella zona del Lago Toba compare il maiale, raro nel resto dell\'Indonesia musulmana, perché i Batak sono cristiani. Il caffè di Sumatra, bevuto nei warung sulla strada per Berastagi, è tra i migliori del paese e costa pochi centesimi.',
    comeArrivare: 'Volo su Medan (Kualanamu International, KNO) da Giacarta o da Kuala Lumpur/Singapore.',
    comeSpostarsi: 'Auto privata o bus tra Medan, Bukit Lawang, Berastagi e Lago Toba; traghetto per l\'isola di Samosir.',
    periodoMigliore: 'giugno-settembre, stagione più secca per il trekking',
    costi: 'tra le isole più economiche dell\'arcipelago, soprattutto per alloggi e trekking guidati',
    erroriDaEvitare: [
      'Affidarsi a guide non certificate per il trekking oranghi: il contatto ravvicinato non regolamentato è pericoloso sia per i visitatori sia per gli animali',
      'Sottovalutare i tempi di spostamento su strade di montagna spesso dissestate',
    ],
    confronti: [
      {
        titolo: 'Oranghi a Sumatra o in Borneo?',
        introduzione:
          'Gli oranghi selvatici esistono solo su queste due isole, e sono specie diverse: quello di Sumatra (in pericolo critico, poche migliaia di individui) e quello del Borneo. Chi ha fatto Bukit Lawang e pensa al Borneo, o viceversa, fa bene a chiederselo, perché le due esperienze sono diverse.',
        opzioni: [
          {
            nome: 'Bukit Lawang, Sumatra',
            sintesi: 'Trekking a piedi nella giungla del Gunung Leuser, cercando gli animali invece di aspettarli.',
            costo: 'il più economico di tutti: trekking guidati di 1-3 giorni per poche decine di euro, alloggi semplici sul fiume',
            durata: '2-3 giorni',
            pro: [
              'Si cammina dentro la foresta: l\'incontro è attivo, senza piattaforme né barche',
              'Probabilità alte, perché nella zona vivono ex individui riabilitati ormai selvatici',
              'Costi bassissimi, un quarto o meno di qualsiasi opzione del Borneo',
              'Il Leuser è l\'ultimo ecosistema al mondo dove oranghi, tigri, rinoceronti ed elefanti convivono',
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
            costo: 'molto più alto: i lodge sul Kinabatangan si pagano a pacchetto, da circa 100€ a notte',
            durata: '4-5 giorni per fare entrambi con senso',
            pro: [
              'A Sepilok l\'incontro ravvicinato è ragionevolmente garantito in quasi ogni stagione',
              'Sul Kinabatangan gli oranghi sono selvatici e arrivano con tutto il resto: nasiche, elefanti pigmei, coccodrilli, buceri',
              'Standard di gestione e regolamentazione più alti, con pratiche di alimentazione dichiarate',
              'Nella stessa isola ci sono la foresta primaria della Danum Valley e Sipadan',
            ],
            contro: [
              'Si guarda da una piattaforma o da una barca a venti-trenta metri: è meno diretto',
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
        testo: "Il villaggio sul fiume Bohorok alle porte del Parco Nazionale del Gunung Leuser, uno degli ultimi habitat degli oranghi di Sumatra. Nella zona vivono oranghi ex riabilitati ormai selvatici. Il Leuser è l'ultimo ecosistema al mondo dove convivono oranghi, tigri, rinoceronti ed elefanti.",
        come: "Da Medan in auto o minibus, 3-4 ore. Il trekking si fa solo con guida certificata, a piedi nella giungla, per mezza giornata o più giorni.",
        quando: "Da giugno a settembre, la stagione più secca. Uscire all'alba.",
        tempo: "2-3 giorni",
        consiglio: "Rifiutare in modo esplicito, già alla prenotazione, le guide che attirano gli animali con il cibo."
      },
      {
        nome: "Lago Toba",
        testo: "Il più grande lago vulcanico del mondo, nato da un'eruzione enorme. Acqua fresca, rive verdi, villaggi e un'isola grande al centro, Samosir.",
        come: "Da Medan in auto o bus fino a Parapat (4-5 ore), poi traghetto per Tuk Tuk sull'isola di Samosir.",
        quando: "Tutto l'anno, meglio al mattino e nella stagione secca.",
        tempo: "2-3 giorni",
        consiglio: "Dopo Bukit Lawang è la decompressione ideale: ritmo lento, nessuna fretta."
      },
      {
        nome: "Isola di Samosir e i villaggi Batak",
        testo: "I Batak sono cristiani e vivono in case dal tetto a sella con facciate scolpite. A Tomok ci sono le tombe di pietra dei re Sidabutar, ad Ambarita le sedie di pietra delle assemblee.",
        come: "In scooter o auto a noleggio da Tuk Tuk, lungo la strada che gira l'isola.",
        quando: "Al mattino. Alcune cerimonie e le danze Sigale-gale si tengono in giorni particolari.",
        tempo: "1 giorno",
        consiglio: "Noleggiare uno scooter e girare l'isola con calma, fermandosi nei villaggi."
      },
      {
        nome: "Gunung Sibayak e Berastagi",
        testo: "Un vulcano attivo ma tranquillo sopra la cittadina di Berastagi, con una salita di poche ore e fumarole in cima. Dopo, sorgenti calde per riposare.",
        come: "Da Berastagi a piedi o in moto fino all'inizio del sentiero. Meglio con guida.",
        quando: "Alle prime ore del mattino.",
        tempo: "mezza giornata",
        consiglio: "Chiudere il trekking con un bagno nelle sorgenti calde."
      },
      {
        nome: "Medan: Istana Maimun e mercati",
        testo: "La città di partenza di quasi tutti i viaggi nel nord di Sumatra. Il palazzo del sultano di Deli, del 1888, e i mercati sono le tappe più interessanti.",
        come: "Il palazzo è in centro, in taxi o Grab.",
        quando: "Al mattino.",
        tempo: "2 ore",
        consiglio: "Non fermarsi più di una notte: la parte bella è fuori città."
      }
    ],
    programmi: [
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
          "Come i 7 giorni, con un giorno in più a Bukit Lawang e due sul lago Toba"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Lawang",
        perChi: "chi fa il trekking",
        testo: "Guesthouse lungo il fiume Bohorok. Semplici e comode per partire presto."
      },
      {
        nome: "Tuk Tuk (Samosir)",
        perChi: "chi va al lago Toba",
        testo: "Homestay e guesthouse sulla penisola di Tuk Tuk, sul lago. Tranquillo, basso costo."
      },
      {
        nome: "Berastagi",
        perChi: "chi va al vulcano",
        testo: "Cittadina d'altura con alloggi economici, più fresca."
      }
    ],
    sapori: [
      {
        nome: "Nasi padang",
        testo: "Riso con dieci o quindici piatti già pronti in vetrina: si indica quello che si vuole e si paga ciò che si tocca. È nato a Sumatra occidentale."
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
    esperienzeSlugs: ['trekking-oranghi-bukit-lawang'],
    tripSlugs: ['indonesia-itinerario', 'sumatra-mentawai'],
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
      'L\'isola più popolosa dell\'Indonesia, cuore culturale del paese con i templi buddisti e induisti più imponenti del sud-est asiatico e due dei vulcani più spettacolari da vedere all\'alba.',
    percheAndarci:
      'Concentra in poche centinaia di chilometri i templi di Borobudur e Prambanan, l\'alba sul cratere del Bromo e il fuoco blu dell\'Ijen, esperienze molto diverse tra loro.',
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
      'Volo su Giacarta (CGK), hub internazionale del paese, oppure direttamente su Yogyakarta o Surabaya (punto di partenza per Bromo/Ijen).',
    comeSpostarsi:
      'Treno tra le città principali (rete efficiente Giacarta-Yogyakarta-Surabaya), auto con autista per le escursioni a Bromo e Ijen.',
    periodoMigliore: 'maggio-settembre, cieli più tersi per l\'alba al Bromo',
    costi: 'nella media dell\'arcipelago; i tour organizzati per Bromo/Ijen hanno un costo fisso indipendente dalla stagione',
    erroriDaEvitare: [
      'Salire al Kawah Ijen senza maschera antigas: i fumi di zolfo sono pericolosi',
      'Sottovalutare il traffico di Giacarta nella pianificazione degli spostamenti',
    ],
    miaEsperienza:
      'Giava è la parte di Indonesia che fa meno vacanza e lascia il ricordo più netto. L\'Ijen soprattutto: siamo partiti all\'una di notte e siamo saliti al buio con la maschera antigas addosso. Scesi nel cratere, le fiamme blu erano più piccole di come appaiono nelle foto; enorme era tutto il resto. Accanto passavano i minatori con ceste di zolfo da ottanta chili sulle spalle, scalzi o quasi, e lì dentro il turismo assume un peso diverso. Al Bromo è successo l\'opposto: l\'alba dal Penanjakan è spettacolare, ma è anche un parcheggio con centinaia di jeep e file di persone col telefono alzato. Vale comunque, a patto di saperlo prima. Borobudur all\'alba è una delle poche cose che regge il proprio mito, ma il biglietto per salire sulla struttura è a numero chiuso e si esaurisce con largo anticipo.',
    luoghi: [
      {
        nome: "Borobudur",
        testo: "Il tempio buddista più grande del mondo, del IX secolo, con nove terrazze e centinaia di rilievi in pietra. All'alba, con la nebbia sulla pianura, è uno dei pochi luoghi che regge il proprio mito.",
        come: "Da Yogyakarta in auto o bus, circa 1 ora e mezza. La salita alla struttura è a numero chiuso, con guida e sandali speciali: si prenota online sul sito ufficiale con largo anticipo.",
        quando: "All'alba o al tramonto. Il biglietto per salire si esaurisce.",
        tempo: "3 ore",
        url: "https://borobudurpark.com/",
        consiglio: "Prenotare il biglietto per salire con largo anticipo, perché è a numero chiuso."
      },
      {
        nome: "Prambanan",
        testo: "Il più grande complesso di templi induisti dell'Indonesia, del IX secolo, con le torri dedicate a Shiva, Vishnu e Brahma. I rilievi raccontano il Ramayana.",
        come: "Da Yogyakarta in bus Trans Jogja o taxi, circa 40 minuti. Si visita da soli o con guida.",
        quando: "Al mattino o al tramonto. Nelle serate programmate, balletto del Ramayana all'aperto.",
        tempo: "2 ore",
        url: "https://borobudurpark.com/",
        consiglio: "Controllare le date del balletto: in alcuni periodi si tiene al tramonto con le torri illuminate."
      },
      {
        nome: "Kraton di Yogyakarta e Taman Sari",
        testo: "Il palazzo del sultano, ancora in uso, con un museo e spettacoli di gamelan. A pochi passi il Taman Sari, il giardino d'acqua del Settecento.",
        come: "A piedi o in becak da Malioboro.",
        quando: "Al mattino. Il Kraton ha orari ridotti nei giorni di cerimonia.",
        tempo: "2 ore",
        consiglio: "Visitare entrambi nello stesso giro, poi perdersi nelle vie del quartiere dei batik."
      },
      {
        nome: "Gunung Bromo",
        testo: "Un cratere fumante dentro la caldera del Tengger, circondato dal Mare di Sabbia. L'alba dal punto panoramico di Penanjakan è una delle immagini più famose di Giava.",
        come: "Da Cemoro Lawang o da Surabaya con jeep 4x4 prenotata la sera prima. Si parte nel cuore della notte. Il biglietto si compra online sul sito ufficiale del parco.",
        quando: "All'alba, da aprile a ottobre il cielo è più terso.",
        tempo: "mezza giornata",
        url: "https://bromotenggersemeru.id/",
        consiglio: "L'alba dal Penanjakan è spettacolare ma affollata di jeep: andarci sapendolo."
      },
      {
        nome: "Kawah Ijen e il fuoco blu",
        testo: "Un cratere con un lago turchese di acido solforico e, di notte, le fiamme blu dei gas che bruciano. Sul fondo lavorano i minatori di zolfo, con ceste da ottanta chili.",
        come: "Da Banyuwangi o da Licin in auto, poi salita a piedi di circa 3 ore. Maschera antigas obbligatoria.",
        quando: "Partenza all'una di notte per vedere il fuoco blu, poi alba sul lago.",
        tempo: "mezza giornata",
        consiglio: "Portare una maschera antigas vera e non un foulard; non fotografare i minatori senza chiedere."
      },
      {
        nome: "Malioboro e i laboratori di batik",
        testo: "La via dello shopping di Yogyakarta e i laboratori di batik dove si può imparare la tecnica con la cera e le tinture.",
        come: "A piedi. I corsi si prenotano nei laboratori del quartiere di Taman Sari.",
        quando: "Il pomeriggio e la sera.",
        tempo: "2-3 ore",
        consiglio: "Un corso di batik è un buon modo di vedere un'artigianalità viva."
      }
    ],
    programmi: [
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Yogyakarta, Kraton e Taman Sari, cena a Malioboro",
          "Giorno 2: alba a Borobudur, Prambanan nel pomeriggio",
          "Giorno 3: treno per Surabaya o Probolinggo, notte a Cemoro Lawang"
        ]
      },
      {
        titolo: "6-8 giorni",
        tappe: [
          "Giorni 1-3 come sopra",
          "Giorno 4: alba al Bromo, trasferimento verso Banyuwangi",
          "Giorno 5: Ijen nella notte, riposo",
          "Giorni 6-8: Bali o rientro"
        ]
      }
    ],
    zone: [
      {
        nome: "Prawirotaman (Yogyakarta)",
        perChi: "chi vuole stare più tranquillo",
        testo: "Quartiere di caffè e guesthouse, meno caotico di Malioboro."
      },
      {
        nome: "Malioboro",
        perChi: "chi vuole il cuore turistico",
        testo: "Vicino alla stazione e alle bancarelle. Rumoroso."
      },
      {
        nome: "Cemoro Lawang",
        perChi: "chi vuole il Bromo",
        testo: "Villaggio sul bordo del cratere, con alloggi semplici. Fa freddo la notte."
      },
      {
        nome: "Banyuwangi o Licin",
        perChi: "chi va all'Ijen",
        testo: "Alloggi semplici per partire all'una di notte."
      }
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
    esperienzeSlugs: ['alba-bromo-jeep'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
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
      'L\'isola più conosciuta dell\'arcipelago: risaie a terrazza, templi a picco sul mare, spiagge da surf e una scena di vita notturna e benessere tra le più sviluppate del sud-est asiatico.',
    percheAndarci:
      'In poco spazio ci sono anime molto diverse: la calma culturale di Ubud, il surf e la vita notturna del sud, le scogliere di Uluwatu e Nusa Penida a poche ore di barca.',
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
    comeArrivare: 'Volo su Denpasar (DPS), il principale scalo internazionale dell\'isola.',
    comeSpostarsi:
      'Scooter a noleggio (patente internazionale consigliata, controlli frequenti) o autista privato/Grab per gli spostamenti più lunghi.',
    periodoMigliore: 'aprile-ottobre, stagione secca',
    costi: 'variano molto: è tra le mete indonesiane con più offerta, sia economica sia di fascia alta',
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
        come: "Da Denpasar o dal sud in auto con autista o scooter, circa un'ora e mezza. Le risaie si visitano a piedi.",
        quando: "Al mattino, prima dei gruppi.",
        tempo: "1 giorno",
        consiglio: "Bastano venti chilometri verso l'interno per ritrovare le offerte di fiori davanti alle case e i templi in uso."
      },
      {
        nome: "Monkey Forest di Ubud",
        testo: "Una foresta con templi e centinaia di macachi. Sono abituati ai visitatori e rubano occhiali, borse e cibo.",
        come: "A piedi dal centro di Ubud.",
        quando: "Al mattino.",
        tempo: "1 ora",
        consiglio: "Non portare cibo né oggetti sporgenti: i macachi strappano tutto."
      },
      {
        nome: "Tempio di Uluwatu e danza Kecak",
        testo: "Un tempio su una scogliera a strapiombo sul mare. Al tramonto, nell'anfiteatro, si tiene la danza Kecak: settanta uomini seduti in cerchio fanno tutta la musica con la voce.",
        come: "Da Canggu o Seminyak in auto o scooter, circa un'ora. Ci sono macachi ovunque.",
        quando: "Al tramonto.",
        tempo: "2-3 ore",
        consiglio: "Arrivare presto per avere un buon posto nell'anfiteatro."
      },
      {
        nome: "Tanah Lot",
        testo: "Un tempio su uno scoglio al largo, circondato dalla marea. Uno dei punti più fotografati del tramonto di Bali.",
        come: "In auto da Canggu, circa 30 minuti. Con la bassa marea si può arrivare alla base dello scoglio.",
        quando: "Al tramonto, ma è affollato.",
        tempo: "1 ora e mezza",
        consiglio: "Controllare la marea: con la bassa marea è più suggestivo."
      },
      {
        nome: "Alba sul Gunung Batur",
        testo: "Un trekking notturno che porta in cima al vulcano per l'alba sulla caldera e il lago. Salita di circa due ore.",
        come: "Con guida obbligatoria, partenza da Toya Bungkah o dai villaggi vicini verso le 3 del mattino.",
        quando: "Partenza nel cuore della notte, alba dalle 6.",
        tempo: "mezza giornata",
        consiglio: "Portare una giacca: in cima fa freddo."
      },
      {
        nome: "Nusa Penida: Kelingking Beach",
        testo: "Una scogliera a forma di dinosauro sopra una spiaggia, il punto più fotografato dell'isola. Con Angel's Billabong e Manta Bay completa il giro.",
        come: "Con barca veloce da Sanur o Padang Bai, circa 45 minuti, poi auto o scooter sull'isola.",
        quando: "Sulla prima barca del mattino, per evitare la coda sul sentiero ripido.",
        tempo: "1 giorno",
        consiglio: "Dormire una notte a Nusa Penida evita la traversata doppia in giornata."
      }
    ],
    programmi: [
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Ubud, Monkey Forest e risaie di Tegalalang",
          "Giorno 2: alba sul Batur, pomeriggio libero",
          "Giorno 3: Uluwatu al tramonto con la danza Kecak"
        ]
      },
      {
        titolo: "7 giorni",
        tappe: [
          "Giorni 1-3 come sopra",
          "Giorno 4: Tanah Lot al tramonto",
          "Giorno 5-6: Nusa Penida, con notte sull'isola",
          "Giorno 7: rientro e riposo"
        ]
      }
    ],
    zone: [
      {
        nome: "Ubud",
        perChi: "chi cerca cultura e risaie",
        testo: "Cuore culturale, con guesthouse tra i campi. Molto turistico di giorno."
      },
      {
        nome: "Canggu",
        perChi: "chi cerca surf e vita serale",
        testo: "Locali, caffè e spiagge nere. Traffico pesante e cemento."
      },
      {
        nome: "Uluwatu",
        perChi: "chi cerca scogliere e calma relativa",
        testo: "Spiagge sotto le falesie e tramonti. Più tranquillo ma lontano da tutto."
      },
      {
        nome: "Sanur o Nusa Dua",
        perChi: "famiglie",
        testo: "Ritmo più tranquillo e mare riparato."
      }
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
      "Nusa Penida: prenotare la barca in anticipo in alta stagione e partire presto."
    ],
    esperienzeSlugs: ['giornata-nusa-penida'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
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
      'Rantepao è la base naturale per tutta Tana Toraja, con guesthouse semplici in centro; per Bunaken si sceglie tra i dive resort sull\'isola stessa, più comodi per le immersioni all\'alba, e Manado sulla terraferma, più economica ma con un\'ora di barca ogni giorno.',
    doveMangiare:
      'Sulawesi ha la cucina più piccante dell\'arcipelago, soprattutto nel nord attorno a Manado: il piatto da conoscere è il rica-rica, a base di peperoncino in quantità che non si negoziano. A Makassar si mangia il coto makassar, zuppa di manzo servita a colazione, e il pesce alla griglia sul lungomare la sera. In Tana Toraja compaiono maiale e bufalo, perché la zona è cristiana: il pa\'piong, carne cotta dentro un tubo di bambù, va ordinato con ore di anticipo.',
    comeArrivare:
      'Volo su Makassar (hub principale), poi bus o volo interno per Rantepao (Tana Toraja) o per Manado (base per Bunaken).',
    comeSpostarsi: 'Bus o auto con autista per Tana Toraja; barca dal molo di Manado per Bunaken. Per organizzare tutto consiglio Wale Adventure (wale-adventure.com), tour operator locale: gentili e bravi, con tour privati su tutta l\'isola e una vanilla farm da visitare (il loro sito l\'ho fatto io).',
    periodoMigliore: 'maggio-ottobre',
    costi: 'nella media, più alto per i pacchetti diving a Bunaken',
    erroriDaEvitare: [
      'Partecipare a cerimonie funebri senza una guida che spieghi l\'etichetta: sono eventi privati, aperti ai visitatori solo con certe regole di rispetto',
    ],
    miaEsperienza:
      'Tana Toraja è la cosa più diversa che ho visto in Indonesia, e non è un posto da cartolina. Un funerale toraja dura giorni, raduna centinaia di persone e prevede il sacrificio di bufali davanti a tutti. Della sobrietà cui siamo abituati non ha niente: è una festa costosissima, per cui le famiglie risparmiano per anni. Da estranei si può assistere (si porta un regalo, di solito zucchero o sigarette, e si sta dove indica la guida), ma bisogna essere pronti a vedere cose che colpiscono. Bunaken è l\'altra faccia: pareti coralline che scendono a picco per centinaia di metri, dove ci si gira sulla schiena e sotto non c\'è più fondo. Tra le due, quella che ha cambiato qualcosa in me è Toraja.',
    luoghi: [
      {
        nome: "Rantepao e i villaggi tongkonan",
        testo: "Il cuore di Tana Toraja, con le case dal tetto a barca (tongkonan) e le risaie. Kete Kesu è il villaggio più conservato, con case, granai e tombe.",
        come: "Da Makassar con bus notturno o auto, circa 8 ore, oppure con voli interni. I villaggi si visitano con guida.",
        quando: "Da maggio a ottobre. Nei mesi secchi si concentrano i funerali.",
        tempo: "2-3 giorni",
        consiglio: "Prendere una guida locale che spieghi i simboli: senza si perde metà del significato."
      },
      {
        nome: "Tombe nella roccia: Londa e Lemo",
        testo: "Tombe scavate nella parete, con le «tau tau», le effigi lignee dei defunti, che guardano dai balconi. A Londa ci sono bare in grotta.",
        come: "Con la guida da Rantepao, in auto o scooter.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "Portare una torcia per le grotte e rispettare le tombe: non toccare le ossa."
      },
      {
        nome: "Un funerale toraja",
        testo: "Un funerale dura giorni, raduna centinaia di persone e prevede il sacrificio di bufali. Le famiglie risparmiano per anni. È una festa costosissima, non un lutto sobrio.",
        come: "Solo con una guida che spieghi l'etichetta. Si porta un regalo, di solito zucchero o sigarette, e si sta dove indica la guida.",
        quando: "Soprattutto da luglio a settembre.",
        tempo: "mezza giornata",
        consiglio: "Prepararsi a vedere cose che colpiscono. Per organizzare il viaggio: Wale Adventure (wale-adventure.com), operatore locale."
      },
      {
        nome: "Bunaken National Marine Park",
        testo: "Pareti coralline che scendono a picco per centinaia di metri. Tra i migliori posti al mondo per snorkeling e immersioni da barca.",
        come: "Da Manado in barca dal molo, circa 40-60 minuti. Pacchetti di una o più notti.",
        quando: "Da maggio a ottobre.",
        tempo: "2-3 giorni",
        consiglio: "Chi ci arriva dopo Toraja la vive come una compensazione: due volti diversi dell'isola."
      },
      {
        nome: "Fort Rotterdam e Makassar",
        testo: "Il forte olandese del Seicento sul porto, con museo. La città è il punto di partenza per Toraja.",
        come: "A piedi o in taxi dal centro di Makassar.",
        quando: "Al mattino.",
        tempo: "1-2 ore",
        consiglio: "Mangiare coto makassar al mattino e pesce alla griglia sul lungomare la sera."
      }
    ],
    programmi: [
      {
        titolo: "7-9 giorni",
        tappe: [
          "Giorno 1: arrivo a Makassar, Fort Rotterdam",
          "Giorno 2: trasferimento a Rantepao",
          "Giorno 3-4: tongkonan, Londa e Lemo, funerale se c'è",
          "Giorno 5: rientro a Makassar o volo per Manado",
          "Giorno 6-8: Bunaken",
          "Giorno 9: rientro"
        ]
      }
    ],
    zone: [
      {
        nome: "Rantepao",
        perChi: "chi visita Tana Toraja",
        testo: "Piccola città con guesthouse e ristoranti, base per i villaggi."
      },
      {
        nome: "Manado",
        perChi: "chi va a Bunaken",
        testo: "Città portuale con alberghi, da cui partono le barche per l'isola."
      },
      {
        nome: "Isola di Bunaken",
        perChi: "chi fa immersioni",
        testo: "Homestay e resort sull'isola. Semplice."
      }
    ],
    sapori: [
      {
        nome: "Coto makassar",
        testo: "Zuppa di manzo, servita a colazione a Makassar."
      },
      {
        nome: "Pa'piong",
        testo: "Carne cotta in un tubo di bambù, tipica di Toraja. Va ordinata con ore di anticipo."
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
    esperienzeSlugs: ['diving-bunaken-national-park'],
    tripSlugs: ['indonesia-itinerario'],
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
      'Trekking di 2-3 giorni al Rinjani fino al lago craterico (c\'è una scheda esperienza dedicata)',
      'Surf a Kuta Lombok o, per livelli avanzati, a Desert Point',
    ],
    doveDormire:
      'Gili Trawangan per la vita serale, Gili Air per l\'equilibrio tra servizi e calma, Gili Meno per il silenzio; a Lombok, Kuta è la base del sud per surf e spiagge, Senaru e Sembalun sono i due villaggi da cui partono i trek al Rinjani.',
    doveMangiare:
      'Il piatto di Lombok è l\'ayam taliwang, pollo grigliato in una salsa di peperoncino che non fa sconti: in sasak il nome dell\'isola significa proprio peperoncino. Alle Gili il mercato serale di Trawangan è il posto migliore e più economico: il pesce è esposto sul ghiaccio, lo si sceglie e si aspetta che venga grigliato. Nei ristoranti sul mare si paga soprattutto la vista.',
    comeArrivare:
      'Volo su Lombok International Airport (LOP), oppure traghetto veloce da Bali (Padang Bai o Sanur verso le Gili).',
    comeSpostarsi: 'Solo cidomo (calessi trainati da cavalli) o bicicletta alle Gili, dove veicoli a motore sono vietati; auto o scooter sul resto di Lombok.',
    periodoMigliore:
      'aprile-novembre; il Rinjani è accessibile solo da aprile a dicembre, chiuso nella stagione delle piogge',
    costi: 'in generale più economico di Bali',
    erroriDaEvitare: [
      'Sottovalutare la fatica e l\'altitudine del trekking al Rinjani',
      'Tentare il trekking senza guida: è obbligatoria per legge',
    ],
    miaEsperienza:
      'Il Rinjani è il trekking più duro che ho fatto in Indonesia, e il paragone con gli altri non regge. La salita al bordo del cratere è lunga ed esposta, e finisce su sabbia vulcanica dove ogni tre passi se ne perde uno. Il campo l\'abbiamo montato sul ciglio, col vento, e la notte si dorme poco e male. Svegliarsi sopra il lago Segara Anak con le nuvole sotto, però, ripaga tutto. Le Gili sono perfette subito dopo: niente auto né scooter, si gira a piedi in un\'ora e le tartarughe si vedono partendo dalla spiaggia, senza barca né guida. Trawangan la sera è più festaiola di quanto qualcuno si aspetti, Meno è l\'opposto: meglio saperlo prima di prenotare.',
    luoghi: [
      {
        nome: "Isole Gili: Trawangan, Meno e Air",
        testo: "Tre isole senza auto né scooter, che si girano a piedi, in bici o in calesse (cidomo). Trawangan è la più festaiola, Air la più mista, Meno la più tranquilla. Le tartarughe si vedono partendo dalla spiaggia.",
        come: "Barca veloce da Bali (Padang Bai o Sanur) o da Bangsal, il porto sulla costa nord di Lombok. Alle Gili si cammina o si va in cidomo.",
        quando: "Da aprile a novembre. Meno rumorosa durante il giorno.",
        tempo: "2-3 giorni",
        consiglio: "Scegliere l'isola secondo il carattere: festa a Trawangan, calma a Meno."
      },
      {
        nome: "Snorkeling con le tartarughe",
        testo: "Le tartarughe verdi pascolano sui fondali sabbiosi vicino alla riva di tutte e tre le isole. Non servono barca né guida.",
        come: "Si entra in acqua dalla spiaggia, con maschera e pinne a noleggio.",
        quando: "Al mattino, con l'acqua più calma.",
        tempo: "1-2 ore",
        consiglio: "Non toccare né inseguire le tartarughe: tenersi a distanza."
      },
      {
        nome: "Trekking al Gunung Rinjani",
        testo: "Il secondo vulcano più alto dell'Indonesia, 3.726 metri. Dall'orlo del cratere si vede il lago Segara Anak. Il percorso è lungo ed esposto e finisce su sabbia vulcanica.",
        come: "Da Senaru o Sembalun, con guida obbligatoria per legge. Pacchetti di 2-4 giorni con portatori e tende.",
        quando: "Da aprile a dicembre; chiuso nella stagione delle piogge.",
        tempo: "2-4 giorni",
        url: "https://rinjaninationalpark.com/",
        consiglio: "Il campo sul ciglio è ventoso e si dorme poco: svegliarsi sopra le nuvole, con il lago sotto, ripaga tutto."
      },
      {
        nome: "Cascate di Senaru",
        testo: "Sendang Gile e Tiu Kelep sono due cascate nella foresta ai piedi del Rinjani, raggiungibili con una camminata breve. Un'ottima giornata di riposo prima o dopo il trekking.",
        come: "A piedi da Senaru, con guida.",
        quando: "Al mattino.",
        tempo: "3 ore",
        consiglio: "Portare scarpe che si possono bagnare."
      },
      {
        nome: "Spiagge del sud: Kuta, Tanjung Aan, Selong Belanak",
        testo: "Baie di sabbia chiara e onde per il surf, molto meno affollate di Bali.",
        come: "In scooter o auto da Kuta Lombok. Dall'aeroporto circa 30 minuti.",
        quando: "Al mattino o al tramonto.",
        tempo: "1 giorno",
        consiglio: "Selong Belanak è la più adatta ai principianti del surf."
      }
    ],
    programmi: [
      {
        titolo: "6-8 giorni",
        tappe: [
          "Giorno 1: arrivo a Lombok, Senaru",
          "Giorno 2-4: trekking al Rinjani",
          "Giorno 5: riposo, cascate di Senaru",
          "Giorno 6-7: Gili, snorkeling con le tartarughe",
          "Giorno 8: partenza"
        ]
      },
      {
        titolo: "Senza Rinjani",
        tappe: [
          "Giorno 1-2: Kuta Lombok e le spiagge del sud",
          "Giorno 3-5: Gili",
          "Giorno 6: rientro"
        ]
      }
    ],
    zone: [
      {
        nome: "Gili Trawangan",
        perChi: "chi vuole vita serale",
        testo: "Bar, ristoranti e locali. Più rumorosa di quanto molti si aspettino."
      },
      {
        nome: "Gili Meno",
        perChi: "chi cerca calma",
        testo: "La più tranquilla, con pochi servizi e tramonti belli."
      },
      {
        nome: "Senaru o Sembalun",
        perChi: "chi fa il Rinjani",
        testo: "Villaggi alle pendici del vulcano con guesthouse semplici."
      },
      {
        nome: "Kuta Lombok",
        perChi: "chi cerca spiagge e surf",
        testo: "Cittadina tranquilla con alloggi economici."
      }
    ],
    sapori: [
      {
        nome: "Ayam taliwang",
        testo: "Pollo grigliato in salsa di peperoncino che non fa sconti. In sasak il nome dell'isola significa peperoncino."
      },
      {
        nome: "Pesce alla griglia del mercato serale di Trawangan",
        testo: "Il pesce è esposto sul ghiaccio, si sceglie e si aspetta che venga grigliato. Il posto migliore e più economico delle Gili."
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
      "Rinjani: guida obbligatoria per legge. Sottovalutare fatica e quota è l'errore più comune.",
      "Trawangan la sera è più festaiola di quanto sembri; Meno è l'opposto. Sceglierne una in base al carattere.",
      "Traversate da Bali: il mare può essere mosso; evitare di prenotare trasferimenti troppo stretti.",
      "Alle Gili la corrente e le imbarcazioni: non nuotare lontano dalla riva."
    ],
    esperienzeSlugs: ['trekking-gunung-rinjani'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
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
      'Il parco nazionale che dà il nome all\'ultimo grande predatore terrestre rimasto sulla Terra, il drago di Komodo, in un arcipelago di isole belle sopra e sotto il livello del mare.',
    percheAndarci:
      'È probabilmente l\'unico posto al mondo dove vedere i draghi di Komodo nel loro habitat naturale, con in più alcuni dei panorami e dei fondali più fotografati dell\'Indonesia.',
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
      'Tour in barca (liveaboard di 2-4 giorni) da Labuan Bajo tra le isole del parco',
    ],
    doveDormire:
      'Labuan Bajo è il punto di appoggio di tutti, con un\'ampia scelta tra ostelli e resort sul porto. In alternativa si dorme a bordo, nei tour in barca di due o più notti, che sono anche l\'unico modo per essere a Padar all\'alba.',
    doveMangiare:
      'A Labuan Bajo si mangia pesce, e bene: il mercato serale sul lungomare espone il pescato del giorno e lo griglia al momento, a prezzi molto più bassi dei ristoranti con vista sul porto poco più in là. A bordo cucina l\'equipaggio: piatti semplici di riso, pesce e verdure, ma buoni.',
    comeArrivare: 'Volo su Labuan Bajo (Flores), punto di partenza di tutti i tour verso il parco.',
    comeSpostarsi: 'Solo in barca: tour organizzati di uno o più giorni, o liveaboard.',
    periodoMigliore: 'aprile-dicembre, stagione secca con mare più calmo',
    costi: 'variabile secondo la durata del tour in barca; i liveaboard multi-giorno hanno un costo più alto',
    erroriDaEvitare: [
      'Avvicinarsi ai draghi senza un ranger o una guida: sono predatori pericolosi',
      'Sottovalutare il mare mosso e le correnti forti tra le isole',
    ],
    miaEsperienza:
      'I draghi stanno quasi sempre fermi. Sono animali enormi che passano la giornata all\'ombra e si muovono poco, e chi si aspetta una scena da documentario resta spiazzato: a impressionare sono le dimensioni e il fatto che il ranger abbia in mano solo un bastone biforcuto. Rinca è più selvaggia e meno affollata dell\'isola di Komodo, e conviene chiederla espressamente. Il momento migliore è Padar all\'alba: una salita breve e ripida su una cresta, e sotto tre baie con tre sabbie diverse tutte insieme. Va fatta prestissimo, perché dalle otto la fila sul sentiero è continua e il caldo si fa sentire.',
    luoghi: [
      {
        nome: "Isola di Rinca",
        testo: "Una delle due isole dove vivono i draghi di Komodo, più selvaggia e meno affollata dell'isola di Komodo. I draghi stanno quasi sempre fermi all'ombra, ma sono predatori pericolosi.",
        come: "In barca da Labuan Bajo, circa 2 ore. Si cammina su sentieri con un ranger, che ha in mano solo un bastone biforcuto.",
        quando: "Al mattino, nelle ore più fresche.",
        tempo: "mezza giornata",
        url: "https://komodonationalpark.org/",
        consiglio: "Chiedere espressamente Rinca nel tour: è più selvaggia dell'isola di Komodo."
      },
      {
        nome: "Isola di Komodo e Loh Liang",
        testo: "L'isola che dà il nome al parco. I sentieri brevi partono da Loh Liang e portano a zone dove si vedono i draghi.",
        come: "In barca da Labuan Bajo, circa 3-4 ore. Con un ranger obbligatorio.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        url: "https://komodonationalpark.org/",
        consiglio: "Mai avvicinarsi senza il ranger e mai lasciare il sentiero."
      },
      {
        nome: "Padar Island",
        testo: "Una breve e ripida salita su una cresta, e sotto tre baie con sabbie di colori diversi: il punto panoramico più famoso del parco.",
        come: "In barca da Labuan Bajo con un tour, spesso come prima tappa del mattino.",
        quando: "All'alba, prestissimo: dalle otto la fila sul sentiero è continua e il caldo si sente.",
        tempo: "1 ora e mezza",
        consiglio: "Salire all'alba, con le prime luci, è l'unico modo di avere il panorama senza la coda."
      },
      {
        nome: "Pink Beach",
        testo: "Una spiaggia rosata per i frammenti di corallo mescolati alla sabbia, con ottimo snorkeling.",
        come: "In barca come tappa del tour.",
        quando: "Mattina o primo pomeriggio.",
        tempo: "1-2 ore",
        consiglio: "Fare snorkeling: i fondali sono più interessanti della spiaggia."
      },
      {
        nome: "Kanawa, Kelor e Manta Point",
        testo: "Isole e punti di snorkeling con barriera corallina e, in alcuni punti, mante.",
        come: "In barca con tour di uno o più giorni.",
        quando: "Da aprile a dicembre, con il mare più calmo.",
        tempo: "mezza giornata",
        consiglio: "Correnti forti tra le isole: ascoltare le istruzioni dell'equipaggio."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Alba: Padar",
          "Mattina: Pink Beach e snorkeling",
          "Pranzo a bordo",
          "Pomeriggio: Rinca o Komodo con i ranger",
          "Tramonto: rientro a Labuan Bajo"
        ]
      },
      {
        titolo: "3 giorni (barca)",
        tappe: [
          "Giorno 1: Kanawa, Rinca, notte a bordo",
          "Giorno 2: Padar all'alba, Pink Beach, Manta Point",
          "Giorno 3: isola di Komodo e rientro"
        ]
      }
    ],
    zone: [
      {
        nome: "Labuan Bajo",
        perChi: "chi fa i tour in giornata",
        testo: "Porto con alberghi di ogni fascia, ristoranti sul mare e il mercato serale del pesce. Base di tutti i tour."
      },
      {
        nome: "A bordo (liveaboard)",
        perChi: "chi vuole vedere di più",
        testo: "Dormire in barca permette di essere a Padar all'alba, prima dei gruppi. Costa di più."
      }
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
      "A Padar la fila sul sentiero dalle otto in poi: salire all'alba.",
      "Controllare quali sono le tariffe ufficiali e i permessi del parco prima di prenotare."
    ],
    esperienzeSlugs: ['trekking-draghi-komodo'],
    tripSlugs: ['indonesia-itinerario'],
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
      'Volo su Labuan Bajo per l\'ovest dell\'isola (e per proseguire verso Komodo), oppure su Ende o Maumere per l\'est.',
    comeSpostarsi:
      'La Trans-Flores, la strada che attraversa l\'isola da ovest a est: panoramica ma tortuosa e più lenta di quanto sembri sulla mappa.',
    periodoMigliore: 'maggio-ottobre',
    costi: 'tra le isole più economiche del viaggio',
    erroriDaEvitare: [
      'Sottovalutare i tempi di percorrenza sulla Trans-Flores: le distanze in linea d\'aria ingannano',
    ],
    miaEsperienza:
      'Flores è la parte di Indonesia rimasta indietro, ed è proprio questo che per me la rende la più interessante. La Trans-Flores sulla mappa sembra corta, in realtà è una successione infinita di curve: duecento chilometri sono una giornata intera, e chi ha poco tempo farebbe meglio a rinunciare. Il Kelimutu all\'alba merita comunque la sveglia alle tre. I colori dei tre laghi cambiano nel tempo e non c\'è modo di sapere prima cosa si troverà, ed è questo il senso del posto. Wae Rebo è la cosa più forte dell\'isola: tre ore di salita nella foresta, poi sette case coniche in una radura tra le montagne e nient\'altro. È un villaggio abitato, e si sta alle sue regole.',
    luoghi: [
      {
        nome: "Kelimutu",
        testo: "Tre laghi craterici nella stessa montagna, di colori diversi che cambiano nel tempo. Non c'è modo di sapere in anticipo quali colori si troveranno, ed è questo il senso del posto.",
        come: "Dal villaggio di Moni, circa 40 minuti in moto o auto fino al parcheggio, poi un breve tratto a piedi. Sveglia alle tre.",
        quando: "All'alba, prima che la nebbia salga.",
        tempo: "3 ore",
        consiglio: "Meritano la sveglia alle tre: la luce dell'alba sui laghi è la parte migliore."
      },
      {
        nome: "Bena",
        testo: "Un villaggio tradizionale ai piedi del vulcano Inerie, con file di case dal tetto di paglia e monumenti di pietra megalitici. Gli abitanti Ngada vi vivono ancora.",
        come: "Da Bajawa, circa 20 minuti in auto. Si lascia un'offerta all'ingresso.",
        quando: "Al mattino.",
        tempo: "1-2 ore",
        consiglio: "Lasciare una piccola offerta e chiedere prima di fotografare le persone."
      },
      {
        nome: "Wae Rebo",
        testo: "Un villaggio remoto con sette case coniche in una radura tra le montagne. È abitato e si sta alle sue regole. Una delle cose più forti dell'isola.",
        come: "Da Denge, tre ore di salita nella foresta. Si dorme nel villaggio con una cerimonia di benvenuto. Si organizza tramite il comitato del villaggio o un operatore.",
        quando: "Da aprile a ottobre; con le piogge il sentiero è fangoso.",
        tempo: "2 giorni (1 notte)",
        consiglio: "Portare un dono modesto per la comunità e rispettare le regole del villaggio."
      },
      {
        nome: "Riung e le 17 isole",
        testo: "Un arcipelago di piccole isole con spiagge, snorkeling e pipistrelli volpe.",
        come: "Da Bajawa o Ruteng a Riung in auto, poi barca. Tour di mezza giornata o giornata.",
        quando: "Da maggio a ottobre.",
        tempo: "mezza giornata",
        consiglio: "Venirci con il tempo giusto: le distanze sulla Trans-Flores ingannano."
      },
      {
        nome: "Risaie a ragnatela di Cancar e Ruteng",
        testo: "Risaie disposte a raggiera come una ragnatela, secondo l'antica spartizione delle terre. Il punto di vista migliore è su una collina a pochi minuti dal paese.",
        come: "Da Ruteng, circa 20 km in auto.",
        quando: "Al mattino o al tramonto.",
        tempo: "1 ora",
        consiglio: "Combinare con una sosta a Ruteng, città fresca d'altura, e il suo caffè."
      }
    ],
    programmi: [
      {
        titolo: "5-7 giorni (est-ovest)",
        tappe: [
          "Giorno 1: Maumere o Ende, Moni",
          "Giorno 2: Kelimutu all'alba, Trans-Flores verso Bajawa",
          "Giorno 3: Bena e villaggi Ngada",
          "Giorno 4: strada per Ruteng, Cancar",
          "Giorno 5: Denge e salita a Wae Rebo",
          "Giorno 6: Wae Rebo, discesa e rientro a Labuan Bajo"
        ]
      }
    ],
    zone: [
      {
        nome: "Moni",
        perChi: "chi vede Kelimutu",
        testo: "Villaggio di guesthouse semplici. La cena si ordina nel pomeriggio."
      },
      {
        nome: "Bajawa",
        perChi: "chi va a Bena",
        testo: "Città d'altura con alloggi di ogni tipo, più fresca."
      },
      {
        nome: "Labuan Bajo",
        perChi: "chi parte o arriva",
        testo: "Porto con più servizi, base per Komodo."
      }
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
      "La Trans-Flores è lunga e tortuosa: duecento chilometri sono una giornata intera.",
      "A Wae Rebo e Bena si è ospiti: si chiede prima di fotografare e si rispettano le regole locali.",
      "Le guesthouse hanno pochi posti: prenotare per le tappe principali.",
      "Portare contanti: i bancomat sono rari fuori da Labuan Bajo."
    ],
    esperienzeSlugs: ['alba-kelimutu'],
    tripSlugs: ['indonesia-itinerario'],
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
      'Volo su Sorong (via Giacarta o Makassar), poi traghetto veloce o barca privata per Waisai o i resort/liveaboard.',
    comeSpostarsi: 'Solo via mare: barca pubblica, barca privata o liveaboard.',
    periodoMigliore:
      'non esiste una vera stagione sbagliata: ci sono due esperienze diverse. Da ottobre ad aprile, con il picco tra dicembre e febbraio, le correnti portano una risalita di acque ricche di plancton che richiama mante e gli altri grandi pelagici, il mare è più calmo e i liveaboard operano a pieno regime: è la finestra più sicura e con più fauna. Da maggio a settembre soffiano i venti da sud-est, più forti ad agosto, che alzano il mare soprattutto nello stretto di Dampier e negli attraversamenti verso Misool: gli spostamenti tra isole possono allungarsi e le uscite nelle zone più esposte possono saltare, e molti liveaboard in questo periodo si spostano altrove. In cambio l\'estate ha molta meno gente. Per la pioggia non c\'è una regola stagionale: qui piove tutto l\'anno, a rovesci brevi e imprevedibili. A decidere quando andare sono il vento e quello che si vuole vedere sott\'acqua.',
    costi:
      'tra le mete più costose dell\'Indonesia per via della logistica e del permesso obbligatorio del parco marino (PIN Raja Ampat)',
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
            costo: 'indicativamente 25-45€ a notte, pasti inclusi (colazione, pranzo e cena preparati dalla famiglia)',
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
            costo: 'da circa 150 a oltre 400€ a notte, spesso con pacchetti che includono le immersioni',
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
            costo: 'il più caro in assoluto: indicativamente 250-500€+ al giorno a persona, tutto incluso',
            durata: 'in genere 7-10 giorni, il modo più efficiente per coprire aree lontane tra loro',
            pro: [
              'È l\'unico modo pratico per arrivare fino a Wayag o spingersi a sud verso Misool nello stesso viaggio',
              'Nessun tempo perso in spostamenti via terra o traghetti: si dorme mentre la barca cambia zona',
              'Immersioni e pasti organizzati dall\'equipaggio, il comfort più alto delle tre opzioni',
            ],
            contro: [
              'Il costo è di gran lunga il più alto delle tre opzioni, spesso il doppio o il triplo di una settimana in homestay',
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
        consiglio: "Salire presto o a fine giornata per evitare la piattaforma affollata."
      },
      {
        nome: "Wayag",
        testo: "L'altro belvedere famoso, a nord, con decine di isolotti calcarei in una laguna. Più lontano, richiede più tempo e più soldi.",
        come: "Con liveaboard o barca privata, lontano da Waisai. Dipende dal vento e dal mare.",
        quando: "Da ottobre ad aprile, con il mare più calmo.",
        tempo: "1 giorno o più",
        consiglio: "Mettere in conto una giornata cuscinetto: il vento può far saltare l'uscita."
      },
      {
        nome: "Arborek",
        testo: "Un villaggio su palafitte con un reef accessibile direttamente dalla spiaggia. Una densità di pesce, a venti metri dalla riva, che altrove non c'è più.",
        come: "In barca dal resto delle isole. Si dorme negli homestay del villaggio.",
        quando: "Tutto l'anno; meglio al mattino.",
        tempo: "1-2 giorni",
        consiglio: "Dormire negli homestay, non nei resort: quel modello è ciò che tiene in piedi la protezione del parco."
      },
      {
        nome: "Stretto di Dampier e punti con le mante",
        testo: "I reef vergini del parco marino, con mante nei punti di pulizia e una grande varietà di pesci. Le correnti sono forti e vanno rispettate.",
        come: "In barca con operatori, secondo gli orari giusti per le correnti.",
        quando: "Da ottobre ad aprile per mante e grandi pelagici; in estate sono molto più rari.",
        tempo: "1-2 giorni",
        consiglio: "Certi punti si fanno solo con la corrente giusta: seguire le istruzioni della guida."
      },
      {
        nome: "Misool",
        testo: "Il sud del parco, con reef e isole calcaree più remote e aree più calme. Meno battuto.",
        come: "Con liveaboard o resort, lontano da Waisai.",
        quando: "Da ottobre ad aprile; in estate il vento alza il mare verso Misool.",
        tempo: "2 giorni o più",
        consiglio: "Da maggio a settembre i trasferimenti verso Misool possono saltare: tenere margine."
      }
    ],
    programmi: [
      {
        titolo: "5-7 giorni",
        tappe: [
          "Giorno 1: volo a Sorong, traghetto per Waisai",
          "Giorno 2-3: Arborek e snorkeling nei reef vicini",
          "Giorno 4: Piaynemo",
          "Giorno 5-6: punti con le mante o Wayag, se il mare lo consente",
          "Giorno 7: rientro a Sorong"
        ]
      }
    ],
    zone: [
      {
        nome: "Homestay (Arborek, Gam, Kri)",
        perChi: "chi vuole risparmiare e sostenere le comunità",
        testo: "Si dorme in casa di famiglie, si mangia ciò che cucinano, senza elettricità a tutte le ore."
      },
      {
        nome: "Liveaboard",
        perChi: "chi vuole coprire più zone",
        testo: "Barca con cuccette, per raggiungere Wayag e Misool. Costoso."
      },
      {
        nome: "Waisai",
        perChi: "chi arriva e riparte",
        testo: "Capoluogo del distretto, con pochi servizi e tappa logistica."
      }
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
      "Il vento da maggio a settembre può allungare i trasferimenti e far saltare le uscite verso zone esposte.",
      "Non ci sono bancomat sulle isole: prelevare a Sorong o Waisai.",
      "Le correnti sono forti: seguire sempre le istruzioni della guida."
    ],
    esperienzeSlugs: ['diving-liveaboard-raja-ampat'],
    tripSlugs: [],
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
      'I break di Sipora: Lance\'s Left e HTs nel sud, Telescopes nel nord',
    ],
    cosaFare: [
      'Qualche giorno con una famiglia mentawai nella giungla di Siberut, con un operatore che lavora con guide mentawai',
      'Surf sui reef di Sipora, solo per intermedi ed esperti, nella stagione maggio-settembre',
      'Lezioni di surf su onde di spiaggia per chi comincia, meglio nei mesi con poco swell',
    ],
    doveDormire:
      'A Siberut nella uma della famiglia che ospita, su una stuoia con zanzariera. A Sipora homestay (di massima 700.000-1.500.000 IDR a notte) o resort e surf camp (da circa 4.000.000 IDR).',
    comeArrivare:
      'Traghetto veloce Mentawai Fast da Padang: circa 3,5 ore per Tuapejat (Sipora) e circa 4 per Siberut. Orari e prezzi (300.000-400.000 IDR secondo le fonti) cambiano spesso: vanno verificati sulla pagina ufficiale dell\'operatore. Non risultano voli regolari confermati per l\'aeroporto delle Mentawai.',
    comeSpostarsi:
      'A Siberut minivan, canoa a motore sul fiume e trekking nel fango. Tra le isole e verso i break, barca privata (di massima 1.500.000-3.000.000 IDR al giorno) o i trasferimenti organizzati da operatori e surf camp.',
    periodoMigliore:
      'maggio-inizio settembre per la giungla di Siberut, maggio-settembre per gli swell più grandi; da novembre a gennaio piove molto',
    costi:
      'soggiorni con Mentawai Tribe da 200 € (3 giorni) a 550 € (8 giorni) a persona; tassa surf obbligatoria, con importo attuale da verificare (le fonti vanno da 75 a 130 USD)',
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
        come: "Dal porto di Muara Siberut, in canoa a motore e a piedi nella foresta. Con guide mentawai di operatori locali di Padang.",
        quando: "Da maggio a inizio settembre. Da novembre a gennaio piove molto.",
        tempo: "3-8 giorni",
        consiglio: "Chiedere prima di fotografare, concordare i regali con la guida e scegliere un operatore con guide mentawai, perché i soldi arrivino alla comunità."
      },
      {
        nome: "Tuapejat e Sipora",
        testo: "Il capoluogo delle Mentawai e l'isola dove si trovano le spiagge più belle. Dopo la giungla di Siberut è la parte di mare e riposo.",
        come: "Traghetto veloce Mentawai Fast da Padang, circa 3,5 ore. Orari e prezzi cambiano spesso: verificarli sulla pagina dell'operatore.",
        quando: "Da maggio a settembre.",
        tempo: "2-3 giorni",
        consiglio: "Lasciare giorni di margine: con la bandiera rossa del Syahbandar i traghetti non escono."
      },
      {
        nome: "Spiagge di Sipora",
        testo: "Spiagge bellissime e poco frequentate, con acqua limpida.",
        come: "In scooter o con trasferimenti organizzati da Tuapejat.",
        quando: "Da maggio a settembre.",
        tempo: "1-2 giorni",
        consiglio: "Portare tutto ciò che serve: sull'isola i servizi sono pochi."
      },
      {
        nome: "I break di surf: Lance's Left, HTs, Telescopes",
        testo: "Onde tra le più celebri al mondo, il motivo per cui quasi tutti arrivano fin qui. Lance's Left e HTs sono nel sud di Sipora, Telescopes nel nord.",
        come: "Con barca privata o trasferimenti organizzati da surf camp. Tassa surf obbligatoria.",
        quando: "Da maggio a settembre, quando gli swell sono più grandi.",
        tempo: "almeno 5 giorni",
        consiglio: "I reef famosi non sono adatti ai principianti: scegliere i break secondo il livello."
      }
    ],
    programmi: [
      {
        titolo: "7-8 giorni",
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
        nome: "Surf camp di Sipora",
        perChi: "surfisti",
        testo: "Strutture dedicate, con barche per i break."
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
    esperienzeSlugs: [],
    tripSlugs: ['sumatra-mentawai'],
    imageAlt: 'La giungla di Siberut e le spiagge di Sipora, isole Mentawai',
  },
]
