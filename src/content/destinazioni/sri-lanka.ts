import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Sri Lanka in 12 giorni" (src/content/viaggi/04-sri-lanka-2023.md).

export const destinazioniSriLanka: Destinazione[] = [
  {
    slug: 'negombo',
    paeseSlug: 'sri-lanka',
    ordine: 1,
    nome: 'Negombo',
    tipologia: ['mare', 'arrivo'],
    giorniConsigliati: '1 giorno, andata e ritorno',
    visitataPersonalmente: true,
    introduzione: 'La prima e l\'ultima tappa del viaggio, vicino all\'aeroporto di Colombo, con il suo famoso mercato del pesce all\'alba.',
    percheAndarci: 'È la base naturale per chi arriva o riparte da Colombo, e il fish market della mattina presto è uno spettacolo.',
    cosaVedere: ['Il fish market di Negombo all\'alba'],
    cosaFare: [
      'Cena di benvenuto o di addio tra Salt Restaurant, Tuk Tuk Wine & Dine e Jude Restaurant',
      'Dopocena al Rodeo o allo Sky Lounge',
      'Fish market la mattina presto',
    ],
    doveDormire:
      'All\'andata abbiamo dormito al Regal Réseau Hotel & Spa (4/5 su Tripadvisor, circa 400 recensioni): piace per il rooftop con piscina a sfioro, anche se secondo alcuni ospiti la musica del bar arriva fino alle camere. Al ritorno al Goldi Sands Hotel (4/5, oltre 1.700 recensioni): colazione a buffet migliore del previsto e posizione comoda, ma alcuni recensori trovano gli arredi datati.\n\nEconomiche: Icebear Guesthouse, Ocean Beauty Guest House. Fascia media: Jetwing Sea, Jetwing Lagoon. Lusso (contenuto): Jetwing Blue, Sentido Heritance Negombo.',
    doveMangiare: 'Jude Restaurant (pesce buono ma servizio lento, circa 12€ a testa); SeaJoy per un pranzo economico.',
    usciteSerali: 'Rodeo, Sky Lounge, oppure un beach party, chiedendo a guida e locali dove c\'è.',
    comeArrivare: "Negombo è a 20-30 minuti dall'aeroporto internazionale Bandaranaike (CMB) di Katunayake: per questo è la base più comoda per la prima e l'ultima notte. Si arriva con il taxi a tariffa fissa dal banco ufficiale agli arrivi, con le app PickMe o Uber oppure con un'auto dell'hotel concordata prima, intorno ai 5.000-6.000 LKR (circa 15-18 €) a macchina. Da Colombo ci sono circa 40 km sull'autostrada E03, o il treno della linea costiera fino alla stazione di Negombo.",
    comeSpostarsi: 'Van privato con autista.',
    periodoMigliore: 'novembre',
    costi: "Cena di pesce circa 12 € a testa (2023); transfer dall'aeroporto 5.000-6.000 LKR (circa 15-18 €). Budget giornaliero indicativo a persona: basso 25-35 € (guesthouse, rice and curry, tuk-tuk), medio 60-100 € (hotel sul mare, ristoranti di pesce, giro in barca nella laguna), alto da 150 € (resort sulla spiaggia, autista privato).",
    erroriDaEvitare: [],
    miaEsperienza:
      'Il fish market di Negombo la mattina presto è stato uno spettacolo genuino, un buon modo per prendere confidenza con il paese appena arrivati.',
    luoghi: [
      {
        "nome": "Mercato del pesce di Negombo",
        "testo": "Sulla spiaggia le barche da pesca scaricano all'alba e il pesce viene steso ad asciugare o venduto subito. Uno spettacolo genuino, un buon modo per prendere confidenza con il paese appena arrivati.",
        "come": "A pochi minuti dal centro, in tuk-tuk o a piedi dagli hotel sul mare.",
        "quando": "Alba o mattina presto.",
        "tempo": "1 ora",
        "lat": 7.21106,
        "lng": 79.83181,
        "consiglio": "Andare presto: a metà mattina l'attività è quasi finita."
      },
      {
        "nome": "Chiesa di Santa Maria",
        "testo": "Negombo è chiamata la «piccola Roma» per le sue chiese cattoliche, eredità del periodo portoghese. Santa Maria, finita nel 1922 dopo quasi cinquant'anni di lavori, ha il soffitto dipinto con scene della vita di Cristo, opera di un pittore locale buddhista, N.S. Godamanne.",
        "come": "A piedi o in tuk-tuk dal centro.",
        "tempo": "30 minuti",
        "lat": 7.201,
        "lng": 79.838,
        "consiglio": "Spalle e ginocchia coperte, come in tutti i luoghi di culto."
      },
      {
        "nome": "Cena sul mare",
        "testo": "Negombo è la tappa ideale per la cena di benvenuto o di addio: Salt Restaurant, Tuk Tuk Wine & Dine e Jude Restaurant.",
        "tempo": "una sera",
        "costo": "Cena circa 12 € a testa (dal viaggio del 2023)",
        "consiglio": "Jude Restaurant: pesce buono ma servizio lento."
      },
      {
        "nome": "Forte olandese",
        "testo": "I portoghesi costruirono qui un forte per controllare il commercio della cannella; gli olandesi lo presero nel 1644 e lo rifecero. Oggi ne restano la porta d'ingresso con la data 1678, un tratto di bastioni e la torre dell'orologio, perché all'interno c'è un carcere.",
        "come": "In tuk-tuk o a piedi dal centro, vicino alla laguna e al mercato del pesce.",
        "quando": "Mattina, insieme al mercato del pesce.",
        "tempo": "20-30 minuti",
        "lat": 7.20866,
        "lng": 79.83118,
        "consiglio": "Il carcere non si visita e non si fotografano le guardie: si guarda la porta da fuori."
      },
      {
        "nome": "Canale olandese (Hamilton Canal)",
        "testo": "Un canale scavato dagli olandesi per portare merci tra Colombo e Negombo senza passare dal mare, poi allungato dagli inglesi all'inizio dell'Ottocento. Lungo le rive ci sono case di pescatori, barche e uccelli acquatici.",
        "come": "Si costeggia a piedi o in bicicletta dal centro, oppure in barca con i giri della laguna.",
        "quando": "Mattina presto o tardo pomeriggio.",
        "tempo": "1 ora",
        "lat": 7.12325,
        "lng": 79.84708
      },
      {
        "nome": "Laguna di Negombo in barca",
        "testo": "La grande laguna a sud della città, tra mangrovie, isolotti e pescatori che lavorano con le reti e le barche tradizionali. Il giro in barca passa anche dai canali ed è il modo più tranquillo di passare la mattina prima di un volo.",
        "come": "Con le barche che partono dal lungolaguna o con un giro prenotato tramite l'hotel; prezzo da fissare prima di salire.",
        "quando": "Mattina presto, quando c'è meno caldo e più attività dei pescatori.",
        "tempo": "2 ore",
        "lat": 7.15,
        "lng": 79.85,
        "consiglio": "Chiarire prima se il prezzo è a persona o a barca."
      },
      {
        "nome": "Spiaggia di Negombo",
        "testo": "Una spiaggia larga e lunga davanti agli hotel di Porutota Road, comoda per una passeggiata al tramonto dopo il volo. Non è bella come quelle del sud e il mare è spesso mosso.",
        "come": "A piedi dagli hotel sul lungomare.",
        "quando": "Tramonto; il mare è più calmo indicativamente da novembre ad aprile.",
        "tempo": "1-2 ore",
        "lat": 7.23142,
        "lng": 79.84062,
        "consiglio": "Fare il bagno solo dove ci sono altre persone: le correnti possono essere forti."
      },
      {
        "nome": "Chiesa di San Sebastiano a Katuwapitiya",
        "testo": "Una chiesa neogotica a nord del centro, colpita dagli attentati della domenica di Pasqua del 2019 e poi ricostruita. All'interno un piccolo memoriale ricorda le vittime.",
        "come": "In tuk-tuk dal centro, circa 15 minuti.",
        "tempo": "30 minuti",
        "lat": 7.21106,
        "lng": 79.85917,
        "consiglio": "È un luogo di lutto per la comunità: abiti coperti e silenzio durante le funzioni."
      },
      {
        "nome": "Tempio di Angurukaramulla",
        "testo": "Un tempio buddhista nel centro di Negombo, con un ingresso a forma di bocca di drago e una grande statua del Buddha seduto. È un contrasto curioso con le chiese che hanno dato alla città il soprannome di «piccola Roma».",
        "come": "A piedi o in tuk-tuk dal centro; si entra scalzi.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "30-45 minuti",
        "lat": 7.21008,
        "lng": 79.85431,
        "consiglio": "Spalle e ginocchia coperte; le scarpe si lasciano all'ingresso."
      },
      {
        "nome": "Paludi di Muthurajawela",
        "testo": "Una grande zona umida tra la laguna di Negombo e Colombo, con mangrovie, canali, uccelli, varani e coccodrilli d'acqua salata. Si gira in barca con un centro visite.",
        "come": "In auto o tuk-tuk verso sud, circa 30 minuti da Negombo; giri in barca dal centro visite.",
        "quando": "Mattina presto o tardo pomeriggio, quando gli animali sono più attivi.",
        "tempo": "2-3 ore",
        "lat": 7.07889,
        "lng": 79.85302
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mercato del pesce all'alba",
          "Chiesa di Santa Maria",
          "Pranzo di pesce a SeaJoy",
          "Cena di benvenuto o di addio sul mare"
        ]
      },
      {
        "titolo": "2 giorni (arrivo e partenza)",
        "tappe": [
          "Giorno di arrivo: riposo, passeggiata sulla spiaggia al tramonto, cena di pesce",
          "Giorno di partenza: mercato del pesce all'alba, forte olandese, giro in barca nella laguna e sul canale olandese, poi aeroporto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: arrivo, spiaggia e cena sul mare",
          "Giorno 2: mercato del pesce all'alba, forte olandese, chiese di Santa Maria e San Sebastiano, tempio di Angurukaramulla",
          "Giorno 3: laguna in barca al mattino, paludi di Muthurajawela nel pomeriggio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lungomare di Negombo",
        "perChi": "arrivo e partenza",
        "testo": "Hotel sul mare, vicini all'aeroporto di Colombo. Comodo, ma poco di autentico fuori dal mercato del pesce.",
        "fascia": "40-100 €"
      },
      {
        "nome": "Lewis Place",
        "perChi": "budget",
        "testo": "La strada costiera a nord del centro, verso il mercato del pesce: guesthouse e piccoli hotel a conduzione familiare, a pochi passi dalla spiaggia.",
        "fascia": "20-50 €"
      },
      {
        "nome": "Laguna e Jetwing",
        "perChi": "comfort e piscina",
        "testo": "Resort con piscina tra il mare e la laguna, come i Jetwing e l'Heritance: più cari, ma comodi per riposare prima o dopo il volo.",
        "fascia": "80-180 €"
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Pescato del giorno nei ristoranti sul mare, come Jude."
      },
      {
        "nome": "Rice and curry",
        "testo": "Riso con più curry di verdure, pesce o pollo: il pasto base dello Sri Lanka."
      },
      {
        "nome": "Kottu",
        "testo": "Roti tagliato a strisce e saltato con verdure e uova o carne, nei locali di strada."
      },
      {
        "nome": "Hoppers",
        "testo": "Piccole ciotole di pastella di riso e cocco, con un uovo al centro: colazione o cena."
      }
    ],
    attenzioni: [
      "Il visto elettronico ETA è obbligatorio: richiederlo online sul sito ufficiale eta.gov.lk. Per i passaporti italiani è gratuito dal 25 maggio 2026 (30 giorni, doppio ingresso), ma le condizioni cambiano: controllare prima di partire.",
      "La SIM locale (Dialog o SLT-Mobitel) si compra ai banchi dell'aeroporto: confrontare le offerte prima di scegliere.",
      "Concordare il prezzo del tuk-tuk o del transfer prima di salire.",
      "Nei luoghi di culto servono spalle e ginocchia coperte: portare un pareo o pantaloni lunghi."
    ],
    gite: [
      {
        "nome": "Colombo",
        "distanza": "circa 40 km, 1 ora",
        "come": "In auto sull'autostrada E03 o in treno sulla linea costiera.",
        "testo": "Il lungomare di Galle Face Green al tramonto, i mercati di Pettah, il tempio di Gangaramaya e i palazzi coloniali di Fort: una giornata di città prima del volo."
      },
      {
        "nome": "Paludi di Muthurajawela",
        "distanza": "circa 30 minuti",
        "come": "In auto o tuk-tuk; i giri in barca partono dal centro visite.",
        "testo": "Mangrovie, canali e uccelli acquatici a mezz'ora dall'aeroporto, per chi ha una mattina libera."
      }
    ],
    faq: [
      {
        "domanda": "Meglio dormire a Negombo o a Colombo la prima notte?",
        "risposta": "Negombo è a 20-30 minuti dall'aeroporto, Colombo a 40-60 minuti con il traffico. Per la prima e l'ultima notte Negombo è quasi sempre più comoda, soprattutto con voli notturni."
      },
      {
        "domanda": "Quanto costa il transfer dall'aeroporto a Negombo?",
        "risposta": "Nel 2023 il transfer in auto costava 5.000-6.000 LKR a macchina (circa 15-18 €). Conviene il banco taxi ufficiale, un'app come PickMe o Uber, o l'auto dell'hotel concordata prima."
      },
      {
        "domanda": "A che ora va visto il mercato del pesce?",
        "risposta": "All'alba, quando rientrano le barche. A metà mattina l'attività è quasi finita."
      },
      {
        "domanda": "Il mare di Negombo è bello?",
        "risposta": "La spiaggia è larga e comoda per passeggiare, ma non bella come quelle del sud e il mare è spesso mosso. Per il mare vero conviene tenere i giorni per Hikkaduwa e la costa meridionale."
      },
      {
        "domanda": "Vale la pena restare a Negombo più di una notte?",
        "risposta": "Un giorno basta per mercato del pesce, forte, chiese e laguna. Con più tempo si aggiungono le paludi di Muthurajawela o una giornata a Colombo."
      },
      {
        "domanda": "Come ci si muove a Negombo?",
        "risposta": "A piedi lungo il mare e in tuk-tuk per il resto, con le app o fissando il prezzo prima di salire."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Barche da pesca colorate sulla spiaggia di Negombo, Sri Lanka',
    immagine: '/images/sri-lanka/negombo-stock.jpg',
  },
  {
    slug: 'anuradhapura',
    paeseSlug: 'sri-lanka',
    ordine: 2,
    nome: 'Anuradhapura',
    tipologia: ['storia', 'religione'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'La prima delle "città sacre" del triangolo culturale singalese: dagoba immense, alberi sacri e rovine con oltre duemila anni di storia buddhista.',
    percheAndarci: 'Per capire le radici del buddhismo in Sri Lanka, davanti allo Sri Maha Bodhi, discendente diretto dell\'albero sotto cui il Buddha raggiunse l\'illuminazione.',
    cosaVedere: ['Le dagoba del sito archeologico', 'Lo Sri Maha Bodhi, l\'albero sacro'],
    cosaFare: ['Visita guidata del sito archeologico (circa 3h) in bicicletta, con Anil o con Lalith'],
    doveDormire:
      'Abbiamo dormito al Miridiya Lake Resort: voto medio 3/5 su Tripadvisor (circa 400 recensioni), ma con la nuova gestione sembra migliorato parecchio (ingresso, cibo, camere). La vista sul lago Nuwara Wewa piace molto; qualcuno si lamenta di docce e umidità nei bagni.\n\nEconomiche: Saubagya Inn, Why Not Palace. Fascia media: Kings Town Hotel, Monaara Leisure. Lusso: Ulagalla by Uga Escapes, Divulgaha Gedara Boutique Hotel.',
    doveMangiare: 'Buffet in hotel (circa 2.200 LKR più le bevande).',
    comeArrivare: "Da Negombo e dall'aeroporto di Colombo servono circa 5 ore di auto con autista, la soluzione più comune. Da Dambulla e Sigiriya c'è circa un'ora e mezza di strada, da Mihintale una ventina di minuti. In treno si arriva da Colombo Fort sulla linea del nord, in circa 4-5 ore; i bus partono da Colombo, Dambulla e Kandy, più lenti ma economici.",
    comeSpostarsi: 'In bicicletta con la guida, dentro il sito.',
    periodoMigliore: 'il pomeriggio, dopo l\'arrivo',
    costi: "Biglietto del sito per stranieri circa 30 USD (circa 26 €, 2026); guida circa 6.500 LKR (19 €) più la mancia e buffet in hotel circa 2.200 LKR più le bevande (2023). Budget giornaliero indicativo a persona: basso 25-35 € (guesthouse, bicicletta, rice and curry), medio 60-100 € (hotel sul lago, guida, tuk-tuk), alto da 180 € (resort di lusso fuori città, auto con autista).",
    erroriDaEvitare: [],
    miaEsperienza:
      'Le dagoba immense di Anuradhapura danno subito la misura della storia buddhista dell\'isola. È stato un buon primo contatto con il triangolo culturale, prima delle tappe più note come Sigiriya.',
    luoghi: [
      {
        "nome": "Sri Maha Bodhi",
        "testo": "L'albero sacro, discendente diretto da quello sotto cui il Buddha raggiunse l'illuminazione, piantato nel III secolo a.C. Per i fedeli è il luogo più venerato della città.",
        "come": "Dentro il sito archeologico, in bicicletta o a piedi. Si entra scalzi e senza cappello, con spalle e gambe coperte; i fedeli vestono di bianco.",
        "quando": "Mattina o tardo pomeriggio; nei giorni di luna piena (poya) è affollatissimo di pellegrini.",
        "tempo": "1 ora",
        "lat": 8.34472,
        "lng": 80.39667
      },
      {
        "nome": "Dagoba del sito archeologico",
        "testo": "Le cupole bianche immense, come il Ruwanwelisaya che emerge dalla foresta, danno la misura della storia buddhista dell'isola.",
        "come": "Visita guidata in bicicletta, circa 3 ore.",
        "quando": "Biglietteria dalle 7 alle 17. Il pomeriggio, dopo l'arrivo; meglio evitare le ore centrali per il caldo.",
        "tempo": "3 ore",
        "costo": "Biglietto del sito per stranieri circa 30 USD (marzo 2026), pagato in rupie; guida circa 6.500 LKR (19 €) più la mancia (dal viaggio del 2023)",
        "orari": "Biglietteria tutti i giorni 7-17 (2026).",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Con una guida i luoghi si capiscono: senza, sono mucchi di pietra."
      },
      {
        "nome": "Lago Nuwara Wewa",
        "testo": "Il grande lago artificiale che costeggia la città nuova, bello al tramonto. Sul lago si affacciano alcuni alberghi, tra cui il Miridiya Lake Resort.",
        "quando": "Tramonto.",
        "tempo": "1 ora",
        "lat": 8.33246,
        "lng": 80.42992
      },
      {
        "nome": "Ruwanwelisaya",
        "testo": "Lo stupa bianco costruito dal re Dutugemunu nel II secolo a.C., il più venerato della città dopo l'albero sacro. Il basamento è circondato da un muro di elefanti scolpiti, e la sera i pellegrini vestiti di bianco girano intorno alla cupola con fiori e lumini.",
        "come": "Nel sito archeologico, a piedi dallo Sri Maha Bodhi; si entra scalzi.",
        "quando": "Tardo pomeriggio e sera, con i pellegrini e la luce più morbida.",
        "tempo": "45 minuti",
        "lat": 8.35,
        "lng": 80.39639
      },
      {
        "nome": "Jetavanaramaya",
        "testo": "Il re Mahasena lo fece costruire nel III secolo con milioni di mattoni: era alto circa 122 metri, uno degli edifici più alti del mondo antico dopo le piramidi di Giza. Oggi la cupola di mattoni rossi, restaurata, domina il parco.",
        "come": "In bicicletta o tuk-tuk dentro il sito, a est della cittadella.",
        "quando": "Mattina presto o tardo pomeriggio.",
        "tempo": "30-45 minuti",
        "costo": "Compreso nel biglietto del sito, circa 30 USD (circa 26 €) per stranieri (2026), pagati in rupie",
        "lat": 8.35167,
        "lng": 80.40361
      },
      {
        "nome": "Thuparamaya",
        "testo": "Il primo stupa costruito sull'isola dopo l'arrivo del buddhismo, nel III secolo a.C., per custodire secondo la tradizione la clavicola del Buddha. Piccolo e circondato da colonne di pietra sottili, che un tempo reggevano un tetto.",
        "come": "A piedi dal Ruwanwelisaya, pochi minuti a nord.",
        "tempo": "30 minuti",
        "lat": 8.35528,
        "lng": 80.39611
      },
      {
        "nome": "Abhayagiri e il suo museo",
        "testo": "Il grande monastero fondato nel I secolo a.C. dal re Vattagamani Abhaya, che arrivò a ospitare migliaia di monaci. Oltre allo stupa ci sono refettori, vasche e la celebre pietra di luna davanti al palazzo della regina; il museo raccoglie gioielli, sculture e oggetti trovati negli scavi.",
        "come": "Nella parte nord del sito, in bicicletta o tuk-tuk.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "1 ora e mezza",
        "costo": "Compreso nel biglietto del sito, circa 30 USD (circa 26 €) per stranieri (2026), pagati in rupie",
        "orari": "Biglietteria tutti i giorni 7-17 (2026).",
        "lat": 8.37094,
        "lng": 80.39525
      },
      {
        "nome": "Statua del Samadhi",
        "testo": "Un Buddha seduto in meditazione scolpito nella pietra intorno al IV secolo, alto poco più di due metri. È una delle immagini più note dello Sri Lanka, per l'espressione serena del volto.",
        "come": "Nel bosco vicino all'Abhayagiri, a pochi minuti in bicicletta.",
        "tempo": "20 minuti",
        "lat": 8.36987,
        "lng": 80.39817,
        "consiglio": "Mai posare con le spalle alla statua per una foto."
      },
      {
        "nome": "Kuttam Pokuna",
        "testo": "Le «vasche gemelle»: due piscine di pietra a gradoni del monastero di Abhayagiri, alimentate da canali sotterranei e filtri. Sono tra gli esempi più raffinati di ingegneria dell'acqua dell'antica Anuradhapura.",
        "come": "A nord-est dell'Abhayagiri, in bicicletta.",
        "tempo": "20 minuti",
        "lat": 8.37114,
        "lng": 80.40165
      },
      {
        "nome": "Isurumuniya",
        "testo": "Un tempio addossato a un masso, vicino al lago Tissa Wewa, con elefanti scolpiti nella roccia sopra la vasca. Nel piccolo museo c'è il bassorilievo degli «amanti», una delle sculture più famose dell'isola. Dalla cima del masso si vede la pianura con gli stupa.",
        "come": "A sud del sito principale, in tuk-tuk o bicicletta; biglietto a parte, non compreso in quello del sito.",
        "quando": "Tramonto, dalla cima del masso.",
        "tempo": "45 minuti",
        "lat": 8.3346,
        "lng": 80.3904
      },
      {
        "nome": "Lovamahapaya",
        "testo": "Il «Palazzo di bronzo»: in origine un edificio di nove piani per i monaci, con il tetto coperto di tegole di bronzo, costruito nel II secolo a.C. Oggi resta una foresta di circa 1.600 colonne di pietra, tra il Ruwanwelisaya e lo Sri Maha Bodhi.",
        "come": "A piedi, sulla strada tra l'albero sacro e il Ruwanwelisaya.",
        "tempo": "15 minuti",
        "lat": 8.34611,
        "lng": 80.39778
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Arrivo da Negombo (circa 5 ore di van)",
          "Pomeriggio: Sri Maha Bodhi e dagoba in bicicletta con la guida",
          "Tramonto sul lago Nuwara Wewa",
          "Cena a buffet in hotel"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: arrivo, pomeriggio tra Sri Maha Bodhi, Lovamahapaya, Ruwanwelisaya e Thuparamaya, sera all'albero sacro con i pellegrini",
          "Giorno 2: mattina in bicicletta tra Jetavanaramaya, Abhayagiri e il museo, Statua del Samadhi e Kuttam Pokuna; tramonto su Isurumuniya"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Sri Maha Bodhi, Ruwanwelisaya e Thuparamaya",
          "Giorno 2: Jetavanaramaya, Abhayagiri, Samadhi, Kuttam Pokuna, Isurumuniya al tramonto",
          "Giorno 3: Mihintale all'alba, poi partenza verso Dambulla o Sigiriya"
        ]
      }
    ],
    zone: [
      {
        "nome": "Città nuova e lago",
        "perChi": "chi vuole un hotel comodo",
        "testo": "Hotel e guesthouse affacciati sul lago, a pochi minuti dai siti in tuk-tuk. È la zona più pratica.",
        "fascia": "25-80 €"
      },
      {
        "nome": "Fuori città",
        "perChi": "chi cerca lusso e calma",
        "testo": "Ville e resort di campagna, più lontani dai siti; servono transfer.",
        "fascia": "150-400 €"
      },
      {
        "nome": "Vicino a Mihintale",
        "perChi": "chi prosegue verso est",
        "testo": "Guesthouse e piccoli hotel di campagna sulla strada per Mihintale, a circa 20 minuti dai siti: comodi per salire a Mihintale all'alba.",
        "fascia": "25-60 €"
      }
    ],
    sapori: [
      {
        "nome": "Buffet dell'hotel",
        "testo": "Curry di verdure, riso e pesce, circa 2.200 LKR a persona più le bevande al Miridiya (2023)."
      },
      {
        "nome": "Rice and curry",
        "testo": "Il pasto base dell'isola, nelle trattorie di città."
      },
      {
        "nome": "String hoppers",
        "testo": "Nidi di spaghetti di riso al vapore, serviti con curry e sambol di cocco a colazione."
      },
      {
        "nome": "Curd e treacle",
        "testo": "Yogurt di latte di bufala con sciroppo di palma da cocco: un dolce tipico."
      }
    ],
    attenzioni: [
      "Nei luoghi sacri si entra scalzi, in abiti coperti e chiari: portare calze o accettare la sabbia calda nelle ore centrali.",
      "Mai posare per una foto davanti a una statua del Buddha: è considerato irrispettoso, e mancare di rispetto alle immagini buddhiste è un reato.",
      "I giorni di luna piena (poya) sono festivi e di solito non si trova alcol: il sito è affollatissimo.",
      "Il caldo del pomeriggio è forte: acqua e cappello."
    ],
    gite: [
      {
        "nome": "Mihintale",
        "distanza": "circa 12 km, 20 minuti",
        "come": "In auto o tuk-tuk; si sale a piedi lungo una scalinata di granito.",
        "testo": "La collina dove secondo la tradizione arrivò il buddhismo in Sri Lanka, con templi, stupa e una vista ampia sulla pianura e sulle cupole di Anuradhapura."
      },
      {
        "nome": "Buddha di Avukana",
        "distanza": "circa 50 km, 1 ora",
        "come": "In auto con autista, passando accanto al lago di Kala Wewa.",
        "testo": "Una statua del Buddha in piedi alta circa 12 metri, scolpita nella roccia nel V secolo: si combina bene con il trasferimento verso Dambulla."
      },
      {
        "nome": "Ritigala",
        "distanza": "circa 45 km",
        "come": "In auto con autista; si visita a piedi su sentieri lastricati nel bosco.",
        "testo": "Le rovine di un monastero di eremiti nella foresta, con passerelle di pietra e vasche, quasi senza turisti."
      }
    ],
    faq: [
      {
        "domanda": "Quanto costa entrare ad Anuradhapura?",
        "risposta": "Il biglietto del sito per stranieri costa circa 30 USD (circa 26 €, 2026), pagati in rupie. Lo Sri Maha Bodhi e Isurumuniya hanno ingressi gestiti a parte dai templi."
      },
      {
        "domanda": "Serve una guida?",
        "risposta": "Molto utile: senza spiegazioni molte rovine sembrano mucchi di pietra. Nel 2023 una guida in bicicletta per circa tre ore costava 6.500 LKR (19 €) più la mancia."
      },
      {
        "domanda": "Meglio in bicicletta o in tuk-tuk?",
        "risposta": "Gli stupa sono a chilometri l'uno dall'altro: la bicicletta è il modo più piacevole se non fa troppo caldo, il tuk-tuk è più comodo nelle ore centrali."
      },
      {
        "domanda": "Un giorno basta?",
        "risposta": "Un pomeriggio e una mattina bastano per i luoghi principali. Con due giorni pieni si aggiungono Abhayagiri con il museo, Isurumuniya e Mihintale."
      },
      {
        "domanda": "Come ci si veste?",
        "risposta": "Abiti chiari che coprono spalle e ginocchia; nei luoghi sacri si entra scalzi e senza cappello. Un paio di calzini aiuta sulla pietra calda."
      },
      {
        "domanda": "Quando c'è più atmosfera?",
        "risposta": "Al tramonto, quando i pellegrini vestiti di bianco portano fiori e lumini allo Sri Maha Bodhi e al Ruwanwelisaya. Nei giorni di luna piena (poya) la folla è molto più grande."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La cupola bianca del Ruwanwelisaya che emerge dalla foresta sotto un cielo di pioggia, Anuradhapura',
    immagine: '/images/sri-lanka/anuradhapura-ruwanwelisaya-foresta-riccardo.jpg',
  },
  {
    slug: 'dambulla-sigiriya',
    paeseSlug: 'sri-lanka',
    ordine: 3,
    nome: 'Dambulla e Sigiriya',
    tipologia: ['storia', 'trekking', 'natura'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'Il cuore del triangolo culturale: Mihintale, il safari a Minneriya, il tramonto da Pidurangala Rock, la Rocca del Leone di Sigiriya e il Tempio d\'Oro scavato nella roccia.',
    percheAndarci: 'Qui si concentrano più momenti forti che in qualsiasi altra tappa del viaggio: storia, natura e trekking in due giorni intensi.',
    cosaVedere: [
      'Mihintale, dove secondo la tradizione il buddhismo arrivò per la prima volta in Sri Lanka',
      'Sigiriya, la Rocca del Leone, con le fondamenta del palazzo reale del V secolo e gli affreschi delle fanciulle celesti',
      'Il Tempio d\'Oro di Dambulla, cinque grotte scavate nella roccia',
      'Il panorama su Sigiriya da Pidurangala Rock',
    ],
    cosaFare: [
      'Safari a Minneriya tra gli elefanti (c\'è la scheda esperienza dedicata)',
      'Trekking al tramonto su Pidurangala Rock (30 minuti di salita)',
      'Trekking a Sigiriya (1h30-2h di salita; c\'è la scheda esperienza dedicata)',
      'Visita al Tempio d\'Oro di Dambulla',
      'Il Dambulla Wholesale Market: Dambulla è uno dei principali centri di distribuzione delle verdure del paese',
    ],
    doveDormire:
      'Abbiamo dormito al Tropical Life Resort, sulla carta il migliore dei nove hotel del viaggio: n. 1 tra le strutture specialty di Dambulla, 4/5 su Tripadvisor. Camere pulite e ben attrezzate, buffet abbondante, tutto immerso nel verde. Qualche recensione segnala che in camera manca il WiFi.\n\nEconomiche: Relax Guesthouse, Lake Island Homestay. Fascia media: Lake Lodge Boutique Hotel, Kalundewa Retreat. Lusso: Heritance Kandalama (il celebre hotel firmato Geoffrey Bawa), Aliya Resort & Spa.',
    doveMangiare: 'Mom\'s Kitchen e Golden Palace, tra Dambulla e Sigiriya.',
    comeArrivare: "Da Anuradhapura è circa 1 ora e mezza di trasferimento, passando da Mihintale e dal safari. Da Kandy servono circa 2 ore di auto. Dall'aeroporto di Colombo (CMB) sono circa 4 ore in auto con autista, la soluzione più comune; i bus per Dambulla partono da Colombo e da Kandy, più lenti ma economici. Tra Dambulla e Sigiriya c'è circa mezz'ora di strada.",
    comeSpostarsi: 'Van privato; a piedi per i trekking.',
    periodoMigliore: 'la mattina presto per Sigiriya, per evitare il caldo',
    costi: "Mihintale 1.000 LKR (circa 3 €, 2026; nel 2023 erano 500 LKR più 50 di sarong); safari a Minneriya circa 12.000 LKR a jeep più l'ingresso (2023); Sigiriya circa 35 USD (circa 30 €, 2026); Tempio d'Oro circa 3.000 LKR (circa 9 €, 2026); Pidurangala 1.000 LKR. Budget giornaliero indicativo a persona: basso 30-40 € (guesthouse a Sigiriya, rice and curry, tuk-tuk), medio 70-120 € (hotel con piscina, autista, un safari), alto da 200 € (Heritance Kandalama o resort di lusso, guida privata).",
    erroriDaEvitare: ['Partire tardi per Sigiriya: conviene muoversi presto per evitare il caldo peggiore durante la salita'],
    miaEsperienza:
      'Il tramonto da Pidurangala Rock, con la Rocca di Sigiriya di fronte, è uno dei panorami più belli di tutto il viaggio. Forse mi è piaciuto più della salita a Sigiriya, che tutti fanno di corsa senza fermarsi qui.',
    luoghi: [
      {
        "nome": "Sigiriya, la Rocca del Leone",
        "testo": "Una roccia alta circa 180 metri con in cima le fondamenta del palazzo del re Kashyapa (477-495), patrimonio UNESCO dal 1982. Lungo la salita si passano gli affreschi delle fanciulle celesti, la parete a specchio coperta di graffiti poetici del IX-X secolo e le due zampe del leone che fanno da porta all'ultima scalinata.",
        "come": "Dalla biglietteria si sale a piedi (1 ora e mezza-2 ore di salita nel viaggio del 2023); da Dambulla in van.",
        "quando": "Biglietteria dalle 7 alle 17: arrivare all'apertura, per evitare il caldo peggiore e le code.",
        "tempo": "3-4 ore",
        "costo": "Circa 35 USD (circa 30 €) per stranieri (marzo 2026), pagati in rupie al cambio del giorno; comprende il museo. Si può comprare anche online.",
        "orari": "Biglietteria tutti i giorni 7-17 (2026).",
        "lat": 7.95694,
        "lng": 80.75972,
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Muoversi presto: a metà mattina la salita è dura e piena di gente."
      },
      {
        "nome": "Pidurangala Rock",
        "testo": "Il tramonto da Pidurangala, con la Rocca di Sigiriya di fronte, è uno dei panorami più belli del viaggio. Forse mi è piaciuto più della salita a Sigiriya, che tutti fanno di corsa senza fermarsi qui.",
        "come": "Salita a piedi, con un tratto di roccia finale (circa 30 minuti nel viaggio del 2023).",
        "quando": "Tramonto.",
        "tempo": "2 ore",
        "costo": "Ingresso 1.000 LKR, circa 3 € (dal viaggio del 2023, invariato nel 2026)",
        "lat": 7.96562,
        "lng": 80.76185,
        "consiglio": "Portare una torcia per la discesa quando il sole è già calato."
      },
      {
        "nome": "Tempio d'Oro di Dambulla",
        "testo": "Cinque grotte scavate nella roccia con 153 statue del Buddha e circa 2.100 metri quadrati di pitture su pareti e soffitti. È patrimonio UNESCO dal 1991. La grotta più grande è la più spettacolare: le statue sono in fila sotto un soffitto tutto dipinto.",
        "come": "Da Sigiriya in van; si sale a piedi per una scalinata e si entra scalzi, con spalle e ginocchia coperte.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1 ora e mezza",
        "costo": "Circa 3.000 LKR (circa 9 €) per stranieri (2026)",
        "orari": "Biglietteria fino alle 17, tempio aperto fino alle 19 (viaggio del 2023).",
        "lat": 7.85667,
        "lng": 80.64917
      },
      {
        "nome": "Safari a Minneriya",
        "testo": "Il safari in jeep tra gli elefanti nel parco di Minneriya, che si stringe intorno al lago artificiale costruito dal re Mahasen nel III secolo. Nella stagione secca, quando l'acqua si ritira, gli elefanti scendono in branco sulle rive a brucare l'erba nuova.",
        "come": "In jeep con autista-guida dall'area di Sigiriya.",
        "quando": "Pomeriggio; il periodo con più elefanti insieme (il «gathering») va di solito da luglio a ottobre, con il picco ad agosto e settembre.",
        "tempo": "3-4 ore",
        "costo": "Circa 12.000 LKR a jeep più l'ingresso (dal viaggio del 2023); ingresso al parco circa 25 USD a persona per gli adulti stranieri, più tasse, servizio e veicolo (2026)",
        "lat": 7.97889,
        "lng": 80.84889
      },
      {
        "nome": "Mihintale",
        "testo": "La collina dove, secondo la tradizione, il buddhismo arrivò per la prima volta in Sri Lanka. Secondo la tradizione qui il monaco Mahinda incontrò il re Devanampiya Tissa. Una scalinata di 1.840 gradini di granito porta ai templi e al grande stupa in cima.",
        "come": "A circa 12 km a est di Anuradhapura, in van. Si sale a piedi; nei templi si entra scalzi.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "1 ora e mezza",
        "costo": "Ingresso 1.000 LKR per stranieri (2026); nel 2023 erano 500 LKR più 50 LKR di sarong",
        "lat": 8.35059,
        "lng": 80.51694
      },
      {
        "nome": "Parco nazionale di Kaudulla",
        "testo": "Il parco accanto a Minneriya, unito dallo stesso corridoio degli elefanti: quando l'acqua cala in un parco, i branchi si spostano nell'altro, intorno al lago di Kaudulla. Si visita in jeep come Minneriya.",
        "come": "In jeep con autista-guida dall'area di Sigiriya e Habarana; il parco si sceglie la mattina stessa, secondo dove sono gli elefanti.",
        "quando": "Pomeriggio.",
        "tempo": "3-4 ore",
        "lat": 8.16111,
        "lng": 80.905
      },
      {
        "nome": "Mercato all'ingrosso di Dambulla",
        "testo": "Il mercato all'ingrosso di frutta e verdura più grande dello Sri Lanka: camion carichi, montagne di prodotti e contrattazioni ad alta voce. Tra le bancarelle si assaggia lo street food.",
        "come": "Sulla strada principale di Dambulla, a pochi minuti dal Tempio d'Oro.",
        "quando": "Mattina, quando arrivano i camion.",
        "tempo": "45 minuti",
        "lat": 7.86604,
        "lng": 80.65173
      },
      {
        "nome": "Lago di Kandalama",
        "testo": "Il bacino artificiale a est di Dambulla, circondato dalla foresta, dove Geoffrey Bawa costruì l'Heritance Kandalama, incastrato nella roccia e coperto di vegetazione. Al tramonto la luce sull'acqua e sulle colline è bellissima.",
        "come": "In tuk-tuk o auto da Dambulla, circa 20 minuti.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "lat": 7.87502,
        "lng": 80.70501
      },
      {
        "nome": "Tombe megalitiche di Ibbankatuwa",
        "testo": "Una necropoli preistorica di circa 2.700 anni fa, a pochi chilometri dal Tempio d'Oro: tombe a cassa fatte di lastre di pietra, dove sono state trovate urne, perline e oggetti di metallo.",
        "come": "In tuk-tuk o auto, poco a sud di Dambulla sulla strada per Kandy.",
        "tempo": "30-45 minuti",
        "lat": 7.83725,
        "lng": 80.62989
      },
      {
        "nome": "Nalanda Gedige",
        "testo": "Un tempio in pietra di circa mille anni fa che mescola stile indù e buddhista, smontato e rimontato pezzo per pezzo per salvarlo dalle acque di un bacino. Secondo la tradizione si trova al centro geografico dell'isola.",
        "come": "Sulla strada tra Dambulla e Kandy, circa 25 km a sud di Dambulla: si ferma lungo il trasferimento.",
        "tempo": "30-45 minuti",
        "lat": 7.66972,
        "lng": 80.64556
      },
      {
        "nome": "Popham's Arboretum",
        "testo": "Un arboreto di foresta secca nato negli anni Sessanta per iniziativa di un piantatore inglese, Sam Popham. Sentieri nel bosco con una guida, tra ebano e satinwood: un'ora di silenzio a pochi minuti da Dambulla.",
        "come": "In tuk-tuk da Dambulla, sulla strada per Kandalama.",
        "quando": "Mattina presto o tardo pomeriggio, quando fa meno caldo.",
        "tempo": "1-2 ore",
        "lat": 7.86081,
        "lng": 80.67586
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina presto: Sigiriya",
          "Pranzo e Tempio d'Oro di Dambulla",
          "Pomeriggio: Pidurangala per il tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Mihintale, safari a Minneriya, tramonto a Pidurangala",
          "Giorno 2: Sigiriya all'apertura, poi Tempio d'Oro e mercato di Dambulla"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Mihintale al mattino, safari a Minneriya o Kaudulla nel pomeriggio",
          "Giorno 2: Sigiriya all'apertura, Tempio d'Oro e mercato di Dambulla, tramonto a Pidurangala",
          "Giorno 3: gita a Polonnaruwa in bicicletta, rientro con sosta al lago di Kandalama"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dambulla",
        "perChi": "base comoda",
        "testo": "Hotel immersi nel verde, a mezz'ora dai siti. Tropical Life Resort è stato il migliore dei nove hotel del viaggio.",
        "fascia": "30-90 €"
      },
      {
        "nome": "Sigiriya",
        "perChi": "vicino alla rocca",
        "testo": "Guesthouse e hotel vicino alla biglietteria, comodi per la salita all'alba. Meno scelta di ristoranti.",
        "fascia": "25-80 €"
      },
      {
        "nome": "Lago di Kandalama",
        "perChi": "lusso e architettura",
        "testo": "L'Heritance Kandalama, firmato da Geoffrey Bawa, è il più celebre, tra i più cari.",
        "fascia": "120-250 €"
      },
      {
        "nome": "Habarana",
        "perChi": "safari e Polonnaruwa",
        "testo": "Incrocio a nord-est di Sigiriya, vicino agli ingressi di Minneriya e Kaudulla e sulla strada per Polonnaruwa. Molti resort con piscina, poco da fare la sera.",
        "fascia": "40-150 €"
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry",
        "testo": "Riso con curry di verdure, dal e pesce, da Mom's Kitchen e Golden Palace."
      },
      {
        "nome": "Kottu",
        "testo": "Roti a strisce saltato con verdure e uova, nei locali di strada."
      },
      {
        "nome": "Frutta di Dambulla",
        "testo": "Dambulla è uno dei principali centri di distribuzione delle verdure del paese: al mercato all'ingrosso si vedono camion carichi e montagne di prodotti locali."
      },
      {
        "nome": "Tè e dolci",
        "testo": "Tè al latte e dolci di cocco e treacle nei caffè lungo la strada."
      }
    ],
    attenzioni: [
      "Ticket di Sigiriya: pagare solo alla biglietteria ufficiale. Chi ferma i turisti per strada offrendo «scorciatoie» o biglietti scontati è un procacciatore.",
      "Scimmie: non tenere cibo in vista e non fissarle negli occhi.",
      "Sigiriya: partire presto per evitare il caldo peggiore durante la salita.",
      "Sarong e spalle coperte per Mihintale e per il Tempio d'Oro."
    ],
    gite: [
      {
        "nome": "Polonnaruwa",
        "distanza": "circa 1 ora e 10 da Sigiriya",
        "come": "In auto con autista; il sito si gira in bicicletta, noleggiata sul posto per circa 1.000 LKR (2023).",
        "testo": "La seconda capitale medievale dell'isola, patrimonio UNESCO: templi, palazzi e le grandi statue del Buddha del Gal Vihara. Si visita in due ore e mezza-tre, più leggere e dirette di Sigiriya."
      },
      {
        "nome": "Ritigala",
        "distanza": "circa 40 km",
        "come": "In auto con autista; si visita a piedi, su sentieri lastricati nel bosco.",
        "testo": "Le rovine di un monastero di eremiti nella foresta, sulle pendici della montagna più alta della pianura settentrionale: sentieri di pietra, piattaforme e vasche, quasi senza turisti."
      },
      {
        "nome": "Buddha di Avukana",
        "distanza": "circa 40 km",
        "come": "In auto con autista, passando accanto al lago di Kala Wewa.",
        "testo": "Una statua del Buddha in piedi alta circa 12 metri, scolpita nella roccia nel V secolo accanto al grande lago di Kala Wewa. È tra le statue antiche meglio conservate dell'isola."
      }
    ],
    faq: [
      {
        "domanda": "Meglio Sigiriya o Pidurangala?",
        "risposta": "Sigiriya ha gli affreschi, la storia e le fondamenta del palazzo; Pidurangala costa molto meno e regala la vista sulla Rocca del Leone. Se il tempo c'è, vanno fatte tutte e due: Sigiriya all'apertura, Pidurangala al tramonto."
      },
      {
        "domanda": "Quanto costa entrare a Sigiriya?",
        "risposta": "Circa 35 USD per gli stranieri (marzo 2026), pagati in rupie al cambio del giorno, museo compreso. Il biglietto si compra alla biglietteria ufficiale o online sul portale del Central Cultural Fund."
      },
      {
        "domanda": "Meglio dormire a Dambulla o a Sigiriya?",
        "risposta": "Sigiriya è più comoda per la salita all'alba; Dambulla ha più scelta di hotel e ristoranti ed è vicina al Tempio d'Oro. Sono a circa mezz'ora l'una dall'altra."
      },
      {
        "domanda": "Quanti giorni servono?",
        "risposta": "Due giorni pieni bastano per Sigiriya, Pidurangala, il Tempio d'Oro e un safari. Con il terzo si aggiungono Polonnaruwa o Mihintale."
      },
      {
        "domanda": "Minneriya o Kaudulla per gli elefanti?",
        "risposta": "Dipende dal periodo: i branchi si spostano tra i due parchi secondo l'acqua. Il raduno più famoso è a Minneriya, di solito da luglio a ottobre; il parco si sceglie la mattina stessa in base a dove sono gli elefanti."
      },
      {
        "domanda": "Come ci si veste al Tempio d'Oro?",
        "risposta": "Spalle e ginocchia coperte, e si entra scalzi lasciando le scarpe al deposito. Un sarong o un paio di pantaloni lunghi risolvono."
      }
    ],
    esperienzeSlugs: ['safari-minneriya', 'trekking-sigiriya'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La rocca di Sigiriya che emerge blu dalla giungla al crepuscolo, vista da Pidurangala',
    immagine: '/images/sri-lanka/sigiriya-crepuscolo-riccardo.jpg',
  },
  {
    slug: 'polonnaruwa',
    paeseSlug: 'sri-lanka',
    ordine: 4,
    nome: 'Polonnaruwa',
    tipologia: ['storia'],
    giorniConsigliati: 'mezza giornata',
    visitataPersonalmente: true,
    introduzione: 'La seconda capitale medievale dello Sri Lanka, che abbiamo girato in bicicletta tra templi e statue del Buddha.',
    percheAndarci: 'È più leggera e immediata di Sigiriya, con altrettanta storia.',
    cosaVedere: ['I templi e le statue del Buddha della città medievale'],
    cosaFare: ['Giro tra i templi in bicicletta a noleggio (1.000 LKR)', 'Pranzo al Priyamali gedara, con vista sulle risaie'],
    doveDormire: 'Non ci ho dormito: è stata una gita di mezza giornata da Dambulla.',
    doveMangiare: 'Priyamali gedara, ristorante di campagna con vista sulle risaie: molto buono.',
    comeArrivare: "Da Sigiriya serve circa un'ora e dieci di auto, da Dambulla circa un'ora e mezza: per questo Polonnaruwa si visita spesso in giornata da lì. Da Habarana sono circa 45 minuti. Dall'aeroporto di Colombo la strada richiede circa 5-6 ore; i bus arrivano da Dambulla, Kandy e Colombo, e la stazione ferroviaria è sulla linea per Batticaloa.",
    comeSpostarsi: 'In bicicletta a noleggio, dentro il sito.',
    periodoMigliore: 'mattina o pomeriggio',
    costi: "Biglietto del sito per stranieri circa 30 USD (circa 26 €, 2026); bicicletta a noleggio 1.000 LKR (circa 3 €) e guida 6.000 LKR (circa 18 €) più la mancia (2023). Budget giornaliero indicativo a persona: basso 20-30 € (guesthouse, bicicletta, rice and curry), medio 50-90 € (hotel sul lago, guida, auto), alto da 150 € (resort di lusso nella zona, autista privato).",
    erroriDaEvitare: [],
    miaEsperienza:
      'Girare Polonnaruwa in bicicletta è stato un bel cambio di ritmo dopo la salita a Sigiriya del giorno prima. Il pranzo al Priyamali gedara, con vista sulle risaie, è stato uno dei migliori del viaggio.',
    luoghi: [
      {
        "nome": "Gal Vihara",
        "testo": "Quattro immagini del Buddha scolpite in un'unica parete di granito nel XII secolo, tra cui una figura in piedi e un Buddha sdraiato lungo circa 14 metri.",
        "come": "Nel sito archeologico, in bicicletta; si lasciano le scarpe all'ingresso.",
        "quando": "Mattina o pomeriggio, con la luce radente.",
        "tempo": "30 minuti",
        "lat": 7.96588,
        "lng": 81.00497
      },
      {
        "nome": "Vatadage e il Quadrangolo",
        "testo": "Il Vatadage è un tempio circolare costruito forse per la reliquia del dente, forse per la ciotola del Buddha: gli storici non sono d'accordo. Ha scalinate e una pietra di luna scolpita all'ingresso nord. Il Quadrangolo raccoglie in un recinto i templi più belli della città medievale.",
        "come": "Si gira in bicicletta tra le rovine e si visitano a piedi i templi del Quadrangolo.",
        "tempo": "1 ora",
        "lat": 7.94722,
        "lng": 81.00111
      },
      {
        "nome": "Giro in bicicletta tra i templi",
        "testo": "Girare Polonnaruwa in bicicletta è stato un bel cambio di ritmo dopo la salita a Sigiriya del giorno prima. Il sito è più leggero e immediato di Sigiriya, con altrettanta storia.",
        "come": "Bicicletta a noleggio all'ingresso del sito, con o senza guida.",
        "quando": "Biglietteria dalle 7 alle 17. Mattina o pomeriggio; evitare le ore centrali.",
        "tempo": "mezza giornata",
        "costo": "Biglietto del sito per stranieri circa 30 USD (marzo 2026); bicicletta 1.000 LKR (circa 2,5 €); guida 6.000 LKR più la mancia (dal viaggio del 2023)",
        "orari": "Biglietteria tutti i giorni 7-17 (2026).",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Pranzo al Priyamali gedara, ristorante di campagna con vista sulle risaie: molto buono."
      },
      {
        "nome": "Museo archeologico",
        "testo": "Il museo accanto alla biglietteria, con plastici della città medievale, bronzi indù e oggetti trovati negli scavi. Conviene vederlo per primo: dopo, le rovine si leggono meglio.",
        "come": "All'ingresso sud del sito, vicino al lago; il biglietto si compra qui.",
        "quando": "All'inizio della visita.",
        "tempo": "45 minuti",
        "costo": "Compreso nel biglietto del sito, circa 30 USD (circa 26 €) per stranieri (2026), pagati in rupie",
        "orari": "Biglietteria tutti i giorni 7-17 (2026).",
        "lat": 7.94179,
        "lng": 80.99898
      },
      {
        "nome": "Palazzo reale di Parakramabahu",
        "testo": "I resti del palazzo del re Parakramabahu I, del XII secolo: muri di mattoni spessi circa tre metri, che si dice reggessero sette piani. Accanto c'è la Sala del Consiglio, con le file di colonne e i leoni di pietra sulla scalinata.",
        "come": "Nella cittadella, la prima zona del sito dopo il museo.",
        "tempo": "45 minuti",
        "lat": 7.94348,
        "lng": 80.99793
      },
      {
        "nome": "Rankoth Vehera",
        "testo": "Il più grande stupa di Polonnaruwa, alto circa 54 metri, voluto dal re Nissanka Malla nel XII secolo sul modello di quelli di Anuradhapura.",
        "come": "In bicicletta, a nord del Quadrangolo.",
        "tempo": "20 minuti",
        "lat": 7.95821,
        "lng": 81.0034
      },
      {
        "nome": "Lankatilaka",
        "testo": "Una sala delle immagini con muri di mattoni alti circa 17 metri, che chiudono un enorme Buddha in piedi senza testa. Tra le pareti altissime la statua appare all'improvviso.",
        "come": "Nel gruppo dell'Alahana Parivena, in bicicletta, poco prima del Gal Vihara.",
        "tempo": "20 minuti",
        "lat": 7.96283,
        "lng": 81.00363
      },
      {
        "nome": "Kiri Vehera",
        "testo": "Uno stupa bianco a pochi passi dal Lankatilaka, ancora con l'intonaco originale dopo più di ottocento anni: secondo la tradizione lo fece costruire una regina di Parakramabahu.",
        "come": "A piedi dal Lankatilaka.",
        "tempo": "15 minuti",
        "lat": 7.96327,
        "lng": 81.00362
      },
      {
        "nome": "Shiva Devale n. 2",
        "testo": "Un piccolo tempio indù in pietra del periodo Chola, dell'XI secolo, tra le costruzioni più antiche ancora intere della città. Ricorda che Polonnaruwa fu anche una capitale dei re dell'India del sud.",
        "come": "In bicicletta, a nord del Quadrangolo.",
        "tempo": "15 minuti",
        "lat": 7.94999,
        "lng": 81.00751
      },
      {
        "nome": "Statua di Potgul Vihara",
        "testo": "Una figura in piedi alta circa 3,5 metri, scolpita in un masso a sud della città: c'è chi la considera il re Parakramabahu e chi un saggio con in mano un manoscritto di foglie di palma.",
        "come": "A sud del sito principale, lungo il lago: in bicicletta o tuk-tuk; si vede gratis.",
        "tempo": "20 minuti",
        "lat": 7.92627,
        "lng": 80.99484
      },
      {
        "nome": "Parakrama Samudra",
        "testo": "Il grande bacino artificiale voluto da Parakramabahu I per irrigare le risaie, ancora in uso. Al tramonto la strada sull'argine è il posto più bello della città.",
        "come": "La strada principale corre lungo l'argine: a piedi, in bicicletta o in tuk-tuk dagli hotel.",
        "quando": "Tramonto.",
        "tempo": "1 ora",
        "lat": 7.9,
        "lng": 80.96667
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Da Sigiriya a Polonnaruwa (circa 1 ora e 10)",
          "Giro in bicicletta: Quadrangolo, Vatadage, Gal Vihara",
          "Pranzo al Priyamali gedara",
          "Rientro a Dambulla"
        ]
      },
      {
        "titolo": "1 giorno pieno",
        "tappe": [
          "Mattina: museo archeologico, palazzo reale e Sala del Consiglio, Quadrangolo con il Vatadage",
          "Pranzo al Priyamali gedara",
          "Pomeriggio: Shiva Devale, Rankoth Vehera, Lankatilaka, Kiri Vehera e Gal Vihara in bicicletta",
          "Tramonto sul Parakrama Samudra"
        ]
      },
      {
        "titolo": "Lungo il percorso",
        "tappe": [
          "Da Sigiriya o Dambulla al mattino presto",
          "Visita in bicicletta di 2 ore e mezza-3 ore",
          "Statua di Potgul Vihara sulla via del ritorno",
          "Massaggio ayurvedico rientrando a Dambulla"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dambulla o Sigiriya",
        "perChi": "gita in giornata",
        "testo": "Polonnaruwa si visita in mezza giornata da Dambulla o Sigiriya, senza dormirci.",
        "fascia": "30-90 €"
      },
      {
        "nome": "Polonnaruwa nuova",
        "perChi": "chi vuole dormire vicino",
        "testo": "Guesthouse e piccoli hotel vicino al lago e al sito; poca vita serale.",
        "fascia": "20-50 €"
      },
      {
        "nome": "Habarana e Giritale",
        "perChi": "safari e comfort",
        "testo": "Resort con piscina tra Polonnaruwa e Sigiriya, vicino ai parchi di Minneriya e Kaudulla: comodi per unire il sito a un safari.",
        "fascia": "50-150 €"
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry di campagna",
        "testo": "Il pranzo del Priyamali gedara, con vista sulle risaie."
      },
      {
        "nome": "Frutta e tè",
        "testo": "Banane, papaya e tè al latte lungo le strade del sito."
      },
      {
        "nome": "Kottu",
        "testo": "Roti saltato con verdure nei locali di Polonnaruwa nuova."
      }
    ],
    attenzioni: [
      "Nei templi si entra scalzi, senza scarpe né cappello: la pietra al sole scotta, quindi meglio muoversi la mattina o a fine giornata.",
      "Il biglietto del sito si compra solo alla biglietteria ufficiale: diffidare di chi offre guide o biglietti per strada.",
      "Fare attenzione alle scimmie: non offrire cibo.",
      "Il caldo delle ore centrali è forte: acqua e cappello."
    ],
    gite: [
      {
        "nome": "Safari a Minneriya o Kaudulla",
        "distanza": "circa 30-45 minuti",
        "come": "In jeep con autista-guida; il parco si sceglie la mattina stessa secondo dove sono gli elefanti.",
        "testo": "I branchi di elefanti intorno ai grandi laghi artificiali: un pomeriggio di safari dopo la mattina tra le rovine."
      },
      {
        "nome": "Sigiriya e Dambulla",
        "distanza": "circa 1 ora e 10",
        "come": "In auto con autista.",
        "testo": "La Rocca del Leone e il Tempio d'Oro, le tappe vicine del triangolo culturale."
      }
    ],
    faq: [
      {
        "domanda": "Quanto tempo serve per Polonnaruwa?",
        "risposta": "In bicicletta bastano 2 ore e mezza-3 ore per i luoghi principali. Con il museo, il Potgul Vihara e il tramonto sul lago si arriva a una giornata intera."
      },
      {
        "domanda": "Quanto costa il biglietto?",
        "risposta": "Circa 30 USD (circa 26 €) per gli stranieri nel 2026, pagati in rupie alla biglietteria del museo; comprende il museo."
      },
      {
        "domanda": "Meglio Polonnaruwa o Anuradhapura?",
        "risposta": "Polonnaruwa è più compatta e si gira facilmente in mezza giornata, con le statue del Gal Vihara. Anuradhapura è più antica, più grande e più viva di pellegrini."
      },
      {
        "domanda": "Si gira bene in bicicletta?",
        "risposta": "Sì: il sito è pianeggiante e le distanze sono brevi. Nel 2023 il noleggio costava 1.000 LKR (circa 3 €)."
      },
      {
        "domanda": "Conviene dormire a Polonnaruwa?",
        "risposta": "Non è necessario: si visita in giornata da Dambulla, Sigiriya o Habarana. Dormire qui serve solo a chi vuole entrare all'apertura o vedere il tramonto sul lago."
      },
      {
        "domanda": "Come ci si veste?",
        "risposta": "Spalle e ginocchia coperte; nei templi si entra scalzi e senza cappello, quindi meglio evitare le ore centrali, quando la pietra scotta."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Il profilo di un Buddha di pietra segnato da crepe contro il cielo nuvoloso di Polonnaruwa',
    immagine: '/images/sri-lanka/polonnaruwa-buddha-profilo-riccardo.jpg',
  },
  {
    slug: 'kandy',
    paeseSlug: 'sri-lanka',
    ordine: 5,
    nome: 'Kandy',
    tipologia: ['cultura', 'religione'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'Il Tempio del Dente con la sua cerimonia serale, il mercato del pesce dove abbiamo trovato i souvenir migliori e il lago in città.',
    percheAndarci: 'Per la cerimonia serale al Tempio del Dente, uno dei momenti più spirituali e sentiti del viaggio.',
    cosaVedere: ['Il Tempio del Dente (Temple of the Tooth)', 'La statua del Buddha di Bahiravokanda', 'Il lago in città'],
    cosaFare: [
      'Il Ranweli Spice Garden, con la visita alla piantagione di spezie',
      'Il Kandy Fish Market, il posto migliore del viaggio per i souvenir (spezie, tessuti)',
      'La cerimonia serale al Tempio del Dente (c\'è la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Abbiamo dormito al Rivendell Hotel: 4/5 su Tripadvisor, ma con pareri contrastanti. A chi piace parla di una posizione tranquilla fuori dal centro e della vista sulle colline; altri lo trovano caro per quello che offre, e la mattina presto si sente il rumore di un tempio vicino.\n\nEconomiche: 256 Townhouse Rest, Sharon Inn Kandy. Fascia media: Hotel Suisse, OZO Kandy. Lusso: Earl\'s Regency, The Grand Kandyan.',
    doveMangiare: 'Il Ranweli Spice Garden a pranzo; un ristorante dell\'India del sud trovato sul posto, economico e ottimo (con gli ordini un po\' di confusione).',
    comeArrivare: "Da Dambulla sono circa 2 ore di auto, con la sosta al Ranweli Spice Garden fatta nel viaggio del 2023. Dall'aeroporto di Colombo (CMB) servono circa 3 ore in auto con autista. In treno da Colombo Fort il viaggio dura circa 2 ore e mezza-3 ore e sale già tra le colline. Da Kandy partono i treni dell'altopiano per Nanu Oya ed Ella: i posti riservati si prenotano in anticipo sul portale di Sri Lanka Railways.",
    comeSpostarsi: 'A piedi in centro.',
    periodoMigliore: 'tardo pomeriggio o sera, per arrivare in tempo alla cerimonia del Tempio del Dente',
    costi: "Ingresso al Tempio del Dente 2.000 LKR nel 2023, 3.000 LKR (circa 9 €) nel 2026. Budget giornaliero indicativo a persona: basso 25-35 € (guesthouse, rice and curry, bus e tuk-tuk), medio 60-100 € (hotel sulle colline, ristoranti, autista), alto da 180 € (hotel di lusso e guida privata).",
    erroriDaEvitare: ['Arrivare al Tempio del Dente all\'ultimo momento: la fila si forma già nel tardo pomeriggio, conviene presentarsi con molto anticipo'],
    miaEsperienza:
      'La cerimonia serale al Tempio del Dente, con i tamburi che cominciano poco prima che cali la luce, è stata uno dei momenti più intensi e spirituali di tutto il viaggio.',
    luoghi: [
      {
        "nome": "Tempio del Dente",
        "testo": "Custodisce la reliquia del dente del Buddha ed è uno dei luoghi più sacri del buddhismo, patrimonio UNESCO con la città di Kandy. La cerimonia serale, con i tamburi che cominciano poco prima che cali la luce, è stato uno dei momenti più intensi e spirituali del viaggio.",
        "come": "A piedi dal centro, sul lago. Si entra scalzi, con spalle e ginocchia coperte; la reliquia è chiusa in sette scrigni d'oro nella camera chiamata Handun Kunama. Pantaloncini e canottiere non sono ammessi; all'ingresso si trovano abiti adatti.",
        "quando": "Aperto ogni giorno dalle 5:30 alle 20. Le cerimonie sono alle 5:30, alle 9:30 e alle 18:30: per quella serale la fila si forma già nel tardo pomeriggio.",
        "tempo": "2 ore",
        "costo": "3.000 LKR (circa 9 €) per stranieri (2026, sito ufficiale), con i musei del complesso; nel 2023 erano 2.000 LKR. Valgono solo i biglietti delle macchinette del tempio.",
        "orari": "Tutti i giorni 5:30-20; cerimonie alle 5:30, alle 9:30 e alle 18:30 (sito ufficiale, 2026).",
        "lat": 7.2936,
        "lng": 80.6414,
        "url": "https://sridaladamaligawa.lk/",
        "consiglio": "Presentarsi con molto anticipo: arrivare all'ultimo momento significa restare in fondo alla fila."
      },
      {
        "nome": "Giardino botanico reale di Peradeniya",
        "testo": "Il giardino botanico più grande dello Sri Lanka, circa 60 ettari in un'ansa del fiume Mahaweli, a una manciata di chilometri dal centro. Era un giardino reale, trasformato dagli inglesi nell'Ottocento: oggi ha il viale delle palme reali, la serra delle orchidee e un enorme ficus di Giava che copre da solo un prato intero.",
        "come": "In tuk-tuk o in bus dal centro di Kandy, circa 20 minuti. Si gira a piedi: i viali sono ombreggiati, ma il giardino è grande.",
        "quando": "Mattina, prima del caldo; nei weekend arrivano molte famiglie del posto.",
        "tempo": "2-3 ore",
        "orari": "Tutti i giorni 7:30-18 (sito ufficiale, 2026).",
        "lat": 7.27111,
        "lng": 80.59556,
        "url": "https://en.botanicgardens.gov.lk/"
      },
      {
        "nome": "Buddha di Bahiravokanda e lago",
        "testo": "Una grande statua del Buddha su una collina sopra la città, con panorama su Kandy e sul lago artificiale al centro.",
        "come": "In tuk-tuk dal centro, pochi minuti.",
        "quando": "Tramonto.",
        "tempo": "1 ora",
        "lat": 7.29558,
        "lng": 80.6309
      },
      {
        "nome": "Danze kandyane",
        "testo": "Lo spettacolo delle danze tradizionali di Kandy, con tamburi, costumi e la camminata sulle braci in chiusura. È pensato per i turisti, ma dura circa un'ora e si incastra bene prima della cerimonia serale al Tempio del Dente.",
        "come": "Alla Kandyan Art Association, sul lato nord del lago, a pochi minuti a piedi dal tempio. Biglietti alla cassa.",
        "quando": "Tardo pomeriggio, prima della cerimonia serale.",
        "tempo": "1 ora",
        "lat": 7.29204,
        "lng": 80.64241
      },
      {
        "nome": "Museo nazionale di Kandy",
        "testo": "Nell'antico palazzo delle regine, accanto al Tempio del Dente, raccoglie gli oggetti del regno di Kandy: armi, gioielli, utensili e documenti fino all'arrivo degli inglesi nel 1815.",
        "come": "A piedi, nel complesso del tempio.",
        "tempo": "45 minuti",
        "lat": 7.29472,
        "lng": 80.64083
      },
      {
        "nome": "Natha Devale e Vishnu Devale",
        "testo": "Accanto al Tempio del Dente ci sono i santuari delle divinità protettrici della città: il Natha Devale, del XIV secolo, è tra gli edifici più antichi di Kandy. Buddhismo e culti di origine indù convivono nello stesso cortile, ed è da qui che parte la processione della Esala Perahera.",
        "come": "A piedi, uscendo dal Tempio del Dente verso nord. Si entra scalzi.",
        "tempo": "30 minuti",
        "lat": 7.2942,
        "lng": 80.6405
      },
      {
        "nome": "Kandy Fish Market",
        "testo": "Il posto migliore del viaggio per i souvenir: spezie, tessuti e prodotti locali, a prezzi più bassi che nei negozi per turisti.",
        "come": "In centro, a piedi.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1 ora"
      },
      {
        "nome": "Riserva forestale di Udawattakele",
        "testo": "La foresta alle spalle del Tempio del Dente, un tempo riservata ai re di Kandy. Sentieri nel bosco, scimmie, molti uccelli e uno stagno, a pochi minuti a piedi dal centro: il posto giusto per una pausa dal traffico.",
        "come": "A piedi dal tempio, salendo dietro il complesso; il biglietto si paga all'ingresso.",
        "quando": "Mattina presto, per il fresco e per gli uccelli.",
        "tempo": "1-2 ore",
        "lat": 7.29944,
        "lng": 80.63889,
        "consiglio": "Non tenere cibo in vista: le scimmie sono abituate ai visitatori."
      },
      {
        "nome": "Ceylon Tea Museum",
        "testo": "In una vecchia fabbrica di tè del 1925 sulle colline di Hantana, racconta la storia del tè di Ceylon con i macchinari originali. All'ultimo piano c'è una sala da tè con vista sulle colline.",
        "come": "In tuk-tuk dal centro, circa 15-20 minuti di salita sulla strada di Hantana.",
        "tempo": "1 ora e mezza",
        "lat": 7.26861,
        "lng": 80.63266
      },
      {
        "nome": "Cimitero della guarnigione britannica",
        "testo": "Un piccolo cimitero coloniale dietro il Tempio del Dente, con le tombe dei britannici morti a Kandy nell'Ottocento, molti giovanissimi. Le lapidi raccontano la vita della colonia; è un angolo quieto e poco visitato.",
        "come": "A piedi, in salita dalla strada dietro il tempio. Offerta libera al custode.",
        "tempo": "30 minuti",
        "lat": 7.2928,
        "lng": 80.6432
      },
      {
        "nome": "Tempio di Lankatilaka",
        "testo": "Un tempio del XIV secolo in cima a uno sperone di roccia, a ovest di Kandy, con un santuario buddhista e uno dedicato alle divinità indù sotto lo stesso tetto. È il più scenografico dei tre templi dell'ovest, insieme a Gadaladeniya ed Embekke.",
        "come": "In tuk-tuk o auto da Kandy, circa mezz'ora; i tre templi sono vicini e si fanno in un'unica mattina.",
        "quando": "Mattina.",
        "tempo": "45 minuti",
        "lat": 7.23384,
        "lng": 80.56503
      },
      {
        "nome": "Tempio di Gadaladeniya",
        "testo": "Un tempio in pietra del XIV secolo, costruito con l'aiuto di architetti dell'India del sud: lo stile dravidico lo rende diverso da quasi tutti gli altri templi dell'isola.",
        "come": "In tuk-tuk o auto da Kandy, nel giro dei templi dell'ovest.",
        "tempo": "30 minuti",
        "lat": 7.25731,
        "lng": 80.55608
      },
      {
        "nome": "Embekke Devalaya",
        "testo": "Famoso per le colonne di legno della sala dei tamburi, scolpite con ballerini, soldati, aquile a due teste e animali: uno dei capolavori dell'intaglio di Kandy.",
        "come": "In tuk-tuk o auto da Kandy, nel giro dei templi dell'ovest.",
        "tempo": "30 minuti",
        "lat": 7.21792,
        "lng": 80.56772
      },
      {
        "nome": "Ranweli Spice Garden",
        "testo": "Una visita alla piantagione di spezie con pranzo, sulla strada da Dambulla a Kandy.",
        "come": "Sosta lungo il trasferimento da Dambulla, circa 2 ore di van.",
        "tempo": "1 ora e mezza"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Arrivo da Dambulla con sosta al Ranweli Spice Garden",
          "Pomeriggio: mercato del pesce e lago",
          "Fine pomeriggio: Tempio del Dente con anticipo",
          "Cerimonia serale"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: mercato e lago, danze kandyane nel tardo pomeriggio, cerimonia serale al Tempio del Dente",
          "Giorno 2: giardino botanico di Peradeniya al mattino, Ceylon Tea Museum, tramonto al Buddha di Bahiravokanda"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Tempio del Dente con la cerimonia delle 9:30, museo nazionale e devale, cerimonia serale",
          "Giorno 2: Peradeniya e i templi di Gadaladeniya, Lankatilaka ed Embekke",
          "Giorno 3: Udawattakele al mattino, Ceylon Tea Museum, danze kandyane e Bahiravokanda al tramonto (oppure la gita ad Ambuluwawa)"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fuori dal centro",
        "perChi": "tranquillità",
        "testo": "Hotel sulle colline come il Rivendell, con vista, ma lontani dal tempio. Si dorme meglio, ma la mattina presto si sente un tempio vicino.",
        "fascia": "40-100 €"
      },
      {
        "nome": "Vicino al lago",
        "perChi": "visite a piedi",
        "testo": "Hotel e guesthouse a pochi minuti dal tempio e dal mercato. Più traffico e rumore.",
        "fascia": "25-70 €"
      },
      {
        "nome": "Hotel di lusso fuori città",
        "perChi": "piscina e comfort",
        "testo": "Earl's Regency e The Grand Kandyan, con piscina e vista sulle colline. Per il centro servono tuk-tuk o auto.",
        "fascia": "120-250 €"
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry del sud dell'India",
        "testo": "In un ristorante dell'India del sud trovato sul posto: economico e ottimo, anche se con gli ordini un po' di confusione."
      },
      {
        "nome": "Spezie",
        "testo": "Cardamomo, cannella e pepe dal giardino delle spezie e dal mercato."
      },
      {
        "nome": "Dosa e idli",
        "testo": "Crêpe e tortini di riso fermentato, nei locali di cucina indiana."
      },
      {
        "nome": "Tè di Kandy",
        "testo": "Tè nero dell'altopiano, in confezioni nei negozi del centro."
      }
    ],
    attenzioni: [
      "Al Tempio del Dente si entra scalzi, con spalle e ginocchia coperte, senza voltare le spalle alle statue per le foto.",
      "Il tempio non è un museo: nei giorni di festa e di luna piena (poya) è affollatissimo di pellegrini.",
      "I «tour delle spezie» a pagamento vendono prodotti a prezzi alti: confrontare con il mercato.",
      "Concordare il prezzo del tuk-tuk prima di salire."
    ],
    gite: [
      {
        "nome": "Kitulgala e il rafting sul Kelani",
        "distanza": "circa 2 ore in auto",
        "come": "In van o auto con autista; il rafting si organizza con un operatore sul posto o con il DMC.",
        "testo": "Il fiume dove fu girato Il ponte sul fiume Kwai, con rapide adatte anche a chi non ha mai fatto rafting. Con l'operatore si aggiungono canyoning, tuffi in cascata e una camminata nella giungla. Sta sulla strada verso l'Adam's Peak."
      },
      {
        "nome": "Torre di Ambuluwawa",
        "distanza": "circa 1 ora in auto",
        "come": "In auto o tuk-tuk via Gampola, poi una strada stretta fino in cima alla collina.",
        "testo": "Una torre a spirale in cima a una collina, con una scala esterna che si stringe fino alla punta e vista a 360 gradi sulle montagne. Sul colle convivono i luoghi di culto di quattro religioni."
      },
      {
        "nome": "Monti Knuckles",
        "distanza": "circa 2 ore in auto",
        "come": "Con autista fino a Riverston o Deanston, poi a piedi con una guida locale.",
        "testo": "La catena dei Knuckles, patrimonio UNESCO con gli altopiani centrali, ha sentieri tra foreste nebulose, cascate e villaggi. Da Kandy si fa una giornata di trekking."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Kandy?",
        "risposta": "Un giorno basta per il Tempio del Dente, il lago e la cerimonia serale. Con due si aggiungono il giardino di Peradeniya e il museo del tè; con tre i templi dell'ovest o una gita."
      },
      {
        "domanda": "A che ora è la cerimonia al Tempio del Dente?",
        "risposta": "Le cerimonie sono alle 5:30, alle 9:30 e alle 18:30 (sito ufficiale, 2026). Per quella serale conviene mettersi in fila dal tardo pomeriggio."
      },
      {
        "domanda": "Come ci si veste per il Tempio del Dente?",
        "risposta": "Spalle e ginocchia coperte, e si entra scalzi. Pantaloncini e canottiere non sono ammessi; all'ingresso si trovano abiti adatti."
      },
      {
        "domanda": "Come si va da Kandy a Ella?",
        "risposta": "In treno sulla linea dell'altopiano, circa 7 ore sulla carta e spesso di più: è la tratta più panoramica dell'isola. I posti riservati vanno prenotati con largo anticipo; in alternativa si va in auto con autista."
      },
      {
        "domanda": "Quando c'è la Esala Perahera?",
        "risposta": "La grande processione di Kandy si tiene tra luglio e agosto, con date che cambiano ogni anno secondo il calendario lunare. In quei giorni gli hotel si riempiono e i prezzi salgono: conviene prenotare molto prima."
      },
      {
        "domanda": "Meglio dormire vicino al lago o sulle colline?",
        "risposta": "Vicino al lago si va a piedi al tempio e al mercato, con più traffico e rumore. Sulle colline si dorme meglio e con vista, ma ogni spostamento è in tuk-tuk."
      }
    ],
    esperienzeSlugs: ['tempio-del-dente'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Sagome di fedeli in silenzio davanti al reliquiario d\'oro del Tempio del Dente di Kandy',
    immagine: '/images/sri-lanka/kandy-tempio-dente-reliquiario-riccardo.jpg',
  },
  {
    slug: 'nallathanniya',
    paeseSlug: 'sri-lanka',
    ordine: 6,
    nome: 'Nallathanniya e Adam\'s Peak',
    tipologia: ['trekking', 'religione', 'avventura'],
    giorniConsigliati: '1 giorno e mezzo, compreso il rafting a Kitulgala',
    visitataPersonalmente: true,
    introduzione: 'Il rafting sul fiume Kelani a Kitulgala e la scalata notturna dell\'Adam\'s Peak, la vera prova fisica del viaggio.',
    percheAndarci: 'Per la salita di notte fino all\'alba in cima, insieme a centinaia di pellegrini locali. Vale più per il percorso che per la meta.',
    cosaVedere: ['Il fiume Kelani, dove fu girato Il ponte sul fiume Kwai', 'L\'alba dalla cima dell\'Adam\'s Peak (2.243 m)'],
    cosaFare: [
      'Rafting sul fiume Kelani a Kitulgala (c\'è la scheda esperienza dedicata)',
      'Scalata notturna dell\'Adam\'s Peak (2h30-3h di salita; c\'è la scheda esperienza dedicata)',
    ],
    doveDormire:
      'La nostra base per la scalata è stata il Wathsala Inn, 3/5 su Tripadvisor: bella vista sulla valle e sul Peak, personale gentile, ma molte recensioni segnalano problemi di manutenzione (docce, lenzuola, infiltrazioni). Va preso per quello che è, un appoggio essenziale per partire di notte, non un posto da vacanza.\n\nEconomiche: Slightly Chilled, Sun Mount Adam\'s Peak. Fascia media: White House Adam\'s Peak, Adams Peak Grand. Strutture di lusso vere qui non ce ne sono: è il villaggio da cui parte il trekking.',
    doveMangiare: 'Cena in hotel prima della partenza notturna.',
    comeArrivare: "Nallathanniya, chiamata anche Dalhousie, è il villaggio da cui parte il sentiero dell'Adam's Peak, a circa 32 km da Hatton. Da Kandy servono circa 2 ore fino a Kitulgala e poi qualche ora di strada di montagna; da Nuwara Eliya circa 2 ore e mezza. In treno si scende alla stazione di Hatton, sulla linea per Ella, e da lì si prosegue in bus o tuk-tuk. Nella stagione del pellegrinaggio ci sono bus diretti anche da Colombo.",
    comeSpostarsi: 'A piedi per tutta la scalata.',
    periodoMigliore: 'la stagione del pellegrinaggio, dicembre-maggio, per il percorso illuminato (che però è anche più affollato)',
    costi: "Quanto costassero il rafting e le attività extra a Kitulgala non me lo sono segnato: si concordano con l'operatore. Budget giornaliero indicativo a persona: basso 20-30 € (guesthouse essenziale, cena in hotel), medio 40-70 € (guesthouse con vista, autista), alto 80-150 € (bungalow nelle tenute del tè intorno ai laghi).",
    erroriDaEvitare: ['Salire senza una felpa: in cima all\'alba fa freddo e tira vento (3-6 °C nel viaggio del 2023)'],
    miaEsperienza:
      'La notte sull\'Adam\'s Peak, in fila indiana con centinaia di pellegrini locali su una scalinata tutta illuminata, è stata la vera prova fisica del viaggio. In cima il freddo taglia, ma salire insieme a chi lo fa per fede, e non per turismo, conta più dell\'alba stessa.',
    luoghi: [
      {
        "nome": "Adam's Peak (Sri Pada)",
        "testo": "Una montagna di 2.243 metri sacra a buddhisti, indù, musulmani e cristiani. Si sale di notte lungo una scalinata tutta illuminata, in fila indiana con centinaia di pellegrini locali, per arrivare in cima all'alba. Ho trovato che conti più il percorso della meta.",
        "come": "Si parte a piedi dal villaggio di Nallathanniya, nel cuore della notte; la salita richiede alcune ore (2 ore e mezza-3 ore nel viaggio del 2023).",
        "quando": "Stagione del pellegrinaggio, da dicembre a maggio, con il percorso illuminato; aprile è il mese più affollato.",
        "tempo": "6-7 ore tra salita, alba e discesa",
        "lat": 6.8094,
        "lng": 80.4997,
        "consiglio": "In cima all'alba fa freddo e tira vento (3-6 °C nel viaggio del 2023): portare una felpa."
      },
      {
        "nome": "Rafting a Kitulgala",
        "testo": "Rafting sul fiume Kelani, lo stesso dove fu girato Il ponte sul fiume Kwai.",
        "come": "Con un operatore di Kitulgala, sulla strada da Kandy verso Nallathanniya.",
        "tempo": "mezza giornata",
        "costo": "Quanto costasse non me lo sono segnato: si concorda con l'operatore.",
        "lat": 6.99722,
        "lng": 80.41111
      },
      {
        "nome": "Fiume Kelani",
        "testo": "Il fiume che attraversa Kitulgala, tra foresta e rapide, con la zona del set del film.",
        "come": "Dalla strada principale di Kitulgala.",
        "tempo": "1 ora"
      },
      {
        "nome": "Pagoda della Pace",
        "testo": "Uno stupa bianco costruito da monaci giapponesi all'inizio del sentiero, poco sopra il villaggio. È una delle prime soste della salita e, di giorno, un punto panoramico sulla valle.",
        "come": "Lungo il sentiero da Nallathanniya, a circa mezz'ora dal villaggio.",
        "quando": "Di notte durante la salita, oppure di giorno per la vista.",
        "tempo": "15 minuti"
      },
      {
        "nome": "Lago di Maskeliya",
        "testo": "Il bacino artificiale ai piedi dell'Adam's Peak, circondato dalle piantagioni di tè. Quando l'acqua è bassa riemergono le rovine del vecchio paese di Maskeliya, sommerso dalla diga.",
        "come": "Sulla strada tra Hatton e Nallathanniya: si vede dall'auto o con una sosta.",
        "quando": "Pomeriggio, all'arrivo, o al ritorno dalla cima.",
        "tempo": "30 minuti",
        "lat": 6.84361,
        "lng": 80.54889
      },
      {
        "nome": "Cascate di Laxapana",
        "testo": "Una delle cascate più alte dello Sri Lanka, con un salto di oltre 120 metri in mezzo alla vegetazione, sulla strada tra Maskeliya e Kitulgala.",
        "come": "In auto, deviando dalla strada tra Kitulgala e Nallathanniya; ultimo tratto a piedi.",
        "quando": "Dopo le piogge, quando ha più acqua.",
        "tempo": "1 ora",
        "lat": 6.9,
        "lng": 80.5
      },
      {
        "nome": "Grotta di Belilena",
        "testo": "Una grotta preistorica vicino a Kitulgala, dove gli scavi hanno trovato resti umani e attrezzi di pietra di decine di migliaia di anni fa, tra i più antichi dell'isola.",
        "come": "Da Kitulgala in tuk-tuk e poi a piedi su un breve sentiero nella foresta.",
        "tempo": "1 ora",
        "lat": 7.00222,
        "lng": 80.43578
      },
      {
        "nome": "Cascate di St. Clair",
        "testo": "Una cascata larga, a più salti, chiamata la «piccola Niagara dello Sri Lanka», tra le piantagioni di tè vicino a Talawakele. Si vede da un belvedere sulla strada principale.",
        "come": "Sulla strada da Hatton verso Nuwara Eliya: sosta al belvedere o discesa a piedi tra il tè.",
        "quando": "Mattina, con la luce migliore.",
        "tempo": "30 minuti",
        "lat": 6.95118,
        "lng": 80.64788
      },
      {
        "nome": "Cascate di Devon",
        "testo": "Un salto di circa 97 metri in una gola verde, poco distante da St. Clair, chiamato con il nome di un piantatore inglese. Il punto di vista più comodo è un belvedere vicino al centro del tè.",
        "come": "Sulla strada tra Hatton e Talawakele, sosta al belvedere.",
        "tempo": "20 minuti",
        "lat": 6.95167,
        "lng": 80.62972
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno e mezzo",
        "tappe": [
          "Mattina: rafting a Kitulgala sulla strada da Kandy",
          "Pomeriggio: arrivo a Nallathanniya, riposo e cena presto",
          "Notte: partenza per l'Adam's Peak",
          "Alba in cima e discesa, poi trasferimento"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: rafting a Kitulgala al mattino, cascate di Laxapana, arrivo a Nallathanniya e cena presto",
          "Notte: salita all'Adam's Peak passando dalla Pagoda della Pace",
          "Giorno 2: alba in cima, discesa, riposo; nel pomeriggio lago di Maskeliya, cascate di Devon e St. Clair verso Nuwara Eliya"
        ]
      },
      {
        "titolo": "Lungo il percorso",
        "tappe": [
          "Kandy → Kitulgala (circa 2 ore), rafting",
          "Kitulgala → Nallathanniya, strada di montagna tra il tè",
          "Notte sull'Adam's Peak",
          "Nallathanniya → Pedro Tea Plantation → Nuwara Eliya"
        ]
      }
    ],
    zone: [
      {
        "nome": "Nallathanniya",
        "perChi": "chi sale di notte",
        "testo": "Il villaggio da cui parte il sentiero: guesthouse essenziali come il Wathsala Inn, con vista sulla valle. Non è un posto da vacanza.",
        "fascia": "15-40 €"
      },
      {
        "nome": "Hatton",
        "perChi": "più comodità",
        "testo": "Città vicina con più scelta di alloggi e ristoranti, ma più lontana dall'inizio del sentiero: la vetta è a circa 32 km.",
        "fascia": "30-80 €"
      },
      {
        "nome": "Laghi di Maskeliya e Castlereagh",
        "perChi": "chi vuole restare qualche giorno",
        "testo": "Bungalow e piccoli hotel nelle tenute del tè intorno ai laghi, a 30-60 minuti dal sentiero: più tranquilli e con più comfort, ma lontani per la partenza notturna.",
        "fascia": "60-150 €"
      }
    ],
    sapori: [
      {
        "nome": "Cena in hotel",
        "testo": "Riso e curry prima della partenza notturna, in hotel o guesthouse."
      },
      {
        "nome": "Tè caldo in salita",
        "testo": "Lungo la scalinata ci sono piccole bancarelle di tè e biscotti per i pellegrini."
      },
      {
        "nome": "Roti",
        "testo": "Pane piatto ripieno, per colazione al ritorno."
      }
    ],
    attenzioni: [
      "Salire senza una felpa: in cima all'alba fa freddo e tira vento.",
      "La scalinata è molto affollata nella stagione del pellegrinaggio: tenere il passo del flusso e non fermarsi sui gradini.",
      "Portare una torcia frontale e scarpe con buona presa: la scalinata è illuminata, ma conviene averla comunque.",
      "Con la nebbia o la pioggia la salita è scivolosa: valutare le condizioni prima di partire."
    ],
    gite: [
      {
        "nome": "Kitulgala",
        "distanza": "circa 2 ore e mezza",
        "come": "In auto, sulla strada verso Kandy o Colombo.",
        "testo": "Rafting sul fiume Kelani, lo stesso del film Il ponte sul fiume Kwai, con canyoning e camminate nella foresta da concordare con gli operatori."
      },
      {
        "nome": "Cascate di St. Clair e Devon",
        "distanza": "circa 1 ora",
        "come": "In auto sulla strada per Nuwara Eliya.",
        "testo": "Le due cascate più famose della zona del tè, a pochi minuti l'una dall'altra, da unire al trasferimento verso Nuwara Eliya."
      }
    ],
    faq: [
      {
        "domanda": "Quando si può salire sull'Adam's Peak?",
        "risposta": "Si sale tutto l'anno, ma la stagione del pellegrinaggio va da dicembre a maggio: il sentiero è illuminato e i baracchini di tè sono aperti. Fuori stagione le luci possono essere spente e i servizi chiusi."
      },
      {
        "domanda": "Quanto dura la salita?",
        "risposta": "Nel viaggio del 2023 la salita ha richiesto 2 ore e mezza-3 ore, e altrettanto la discesa. Nei giorni di luna piena e di festa la fila rallenta molto."
      },
      {
        "domanda": "A che ora si parte?",
        "risposta": "Indicativamente tra l'una e le due e mezza di notte, per arrivare in cima prima dell'alba."
      },
      {
        "domanda": "Cosa portare?",
        "risposta": "Scarpe da trekking, frontale, felpa o piumino leggero, acqua e qualche spuntino. In cima all'alba si scende a 3-6 °C con il vento."
      },
      {
        "domanda": "Meglio dormire a Nallathanniya o a Hatton?",
        "risposta": "Nallathanniya è al via del sentiero e permette di dormire qualche ora in più. Hatton ha più scelta, ma è a circa 32 km."
      },
      {
        "domanda": "Ci sono altre cose da fare in zona?",
        "risposta": "Il rafting a Kitulgala, il lago di Maskeliya e le cascate di Laxapana, Devon e St. Clair, quasi tutte lungo i trasferimenti."
      }
    ],
    esperienzeSlugs: ['rafting-kitulgala', 'scalata-adams-peak'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "Il santuario sulla vetta dell'Adam's Peak e la scalinata dei pellegrini sul costone verde, tra le nubi basse",
    immagine: '/images/sri-lanka/adams-peak-vetta-riccardo.jpg',
  },
  {
    slug: 'nuwara-eliya',
    paeseSlug: 'sri-lanka',
    ordine: 7,
    nome: 'Nuwara Eliya',
    tipologia: ['natura', 'relax'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'La "piccola Inghilterra" dello Sri Lanka, a 1.868 metri di quota, tra piantagioni di tè e l\'altopiano di Horton Plains.',
    percheAndarci: 'Per il cambio di clima e di paesaggio rispetto al resto del viaggio: tè, aria fresca e, per chi vuole, uno dei trekking più belli dell\'isola.',
    cosaVedere: ['La Pedro Tea Plantation e la sua fabbrica del tè', 'World\'s End a Horton Plains, il bordo dell\'altopiano con uno strapiombo di 870 metri'],
    cosaFare: [
      'Visita alla piantagione di tè Pedro',
      'Relax: massaggio, cerimonia del tè al Grand Hotel, Victoria Park, cascata di Lover\'s Leap',
      'Avventura: trekking a World\'s End, a Horton Plains (3h)',
    ],
    doveDormire:
      'Abbiamo dormito all\'Araliya RED, uno dei più prenotati della zona, 4/5 con quasi 2.000 recensioni: la piscina riscaldata piace molto, il personale è ospitale e dal rooftop si vede la città. Qualcuno segnala rumori dalle camere vicine e odore di gasolio all\'ingresso.\n\nEconomiche: Galaxy Grand Hotel, Star Gate Private Villa. Fascia media: Jetwing St. Andrew\'s, Clifton Inn. Lusso: Heritance Tea Factory, The Grand Hotel Nuwara Eliya.',
    doveMangiare: 'De Silva Food Center, Grand Indian, Grand Thai o Themparadu (il più locale); dopocena al Lakeview Pub.',
    comeArrivare: "Da Hatton e Nallathanniya serve circa un'ora e mezza-due di strada tra il tè, passando dalle cascate di St. Clair e dalla Pedro Tea Plantation. Da Kandy sono circa 2 ore e mezza-3 ore di auto, da Ella circa 2 ore e mezza. La stazione ferroviaria è Nanu Oya, a circa 15 minuti dal centro, sulla linea panoramica tra Kandy ed Ella; i bus arrivano da Kandy e da Colombo.",
    comeSpostarsi: 'Van privato per Horton Plains, a piedi in città.',
    periodoMigliore: 'una giornata di sole per il trekking a World\'s End',
    costi: "Attività in città (massaggio, cerimonia del tè) 5.000-8.000 LKR, circa 15-24 € (2023); Hakgala 3.540 LKR (circa 10 €); Horton Plains circa 25 USD più tasse e veicolo (2026). Budget giornaliero indicativo a persona: basso 25-35 € (guesthouse, ristoranti locali, bus), medio 60-100 € (hotel in centro, autista per Horton Plains), alto da 180 € (hotel storici e tenute del tè).",
    erroriDaEvitare: [],
    miaEsperienza:
      'Il trasferimento alla Pedro Tea Plantation è stato molto più breve del previsto, e così mi è rimasto più tempo per il pomeriggio libero tra le vallate di tè verdissime intorno a Nuwara Eliya.',
    luoghi: [
      {
        "nome": "Pedro Tea Plantation",
        "testo": "Una piantagione con la sua fabbrica del tè, dove si segue la lavorazione dalle foglie alla tazza. Il trasferimento da Nallathanniya è stato molto più breve del previsto, e così mi è rimasto più tempo per il pomeriggio libero tra le vallate di tè.",
        "come": "Circa 3,5 km a est di Nuwara Eliya, sulla strada per Kandapola: in van o tuk-tuk. Vicino c'è la cascata di Lover's Leap.",
        "quando": "Mattina o primo pomeriggio.",
        "tempo": "1 ora",
        "lat": 6.96994,
        "lng": 80.79555
      },
      {
        "nome": "World's End a Horton Plains",
        "testo": "Il bordo dell'altopiano di Horton Plains, oltre i 2.000 metri, con uno strapiombo di 870 metri sulla pianura sottostante. Il trekking è un anello di circa 9,5 km, 3 ore a passo tranquillo, tra praterie e foresta nebulosa, con la deviazione per le Baker's Falls. Nel parco è vietato portare plastica: i sacchetti abbandonati hanno ucciso diversi sambar, i cervi del parco.",
        "come": "In van da Nuwara Eliya, partendo all'alba; si cammina a piedi su un sentiero segnalato. L'ingresso apre alle 6.",
        "quando": "Presto la mattina: poi arrivano nebbia e nuvole e la vista sparisce. Una giornata di sole è necessaria.",
        "tempo": "3 ore di cammino più il trasferimento",
        "costo": "Ingresso al parco circa 25 USD a persona per gli adulti stranieri, più tasse, servizio e veicolo (2026)",
        "orari": "Ingresso dalle 6 (2026).",
        "lat": 6.78318,
        "lng": 80.79286,
        "url": "https://www.dwc.gov.lk",
        "consiglio": "Partire all'alba da Nuwara Eliya, per arrivare al bordo prima delle nuvole."
      },
      {
        "nome": "Victoria Park e laghetto",
        "testo": "Un parco ordinato in stile inglese, con aiuole e uccelli, nel cuore della «piccola Inghilterra» dello Sri Lanka.",
        "come": "A piedi dal centro.",
        "tempo": "1 ora",
        "lat": 6.96917,
        "lng": 80.76806
      },
      {
        "nome": "Cerimonia del tè e relax",
        "testo": "Il tè pomeridiano al Grand Hotel, un massaggio o una passeggiata alla cascata di Lover's Leap, alta circa 30 metri tra le piantagioni.",
        "tempo": "mezza giornata",
        "costo": "Attività 5.000-8.000 LKR (dal viaggio del 2023)"
      },
      {
        "nome": "Lago Gregory",
        "testo": "Il lago artificiale creato nel 1873 per volere del governatore William Gregory, ai margini del centro. Intorno corre un lungolago con giardini, pedalò, barche e cavalli: il posto dove le famiglie dello Sri Lanka vengono a passeggiare nei giorni di festa.",
        "come": "A piedi o in tuk-tuk dal centro, circa 10 minuti.",
        "quando": "Tardo pomeriggio; nei fine settimana e ad aprile è molto affollato.",
        "tempo": "1-2 ore",
        "lat": 6.95376,
        "lng": 80.77954
      },
      {
        "nome": "Giardino botanico di Hakgala",
        "testo": "Un giardino botanico su un pendio a circa 1.700 metri, nato a metà Ottocento come piantagione sperimentale di china. Oggi ha roseti, felci arboree, orchidee e boschi di montagna, con le scimmie dal muso viola tra gli alberi.",
        "come": "Circa 10 km a sud-est di Nuwara Eliya, sulla strada per Welimada: in tuk-tuk o auto.",
        "quando": "Mattina, prima che arrivino le nuvole.",
        "tempo": "1 ora e mezza-2 ore",
        "costo": "3.540 LKR (circa 10 €) per adulti stranieri, 1.770 LKR per bambini da 5 a 12 anni (2026)",
        "orari": "Tutti i giorni 7.30-18, biglietteria fino alle 17 (2026).",
        "lat": 6.92736,
        "lng": 80.82006,
        "url": "https://botanicgardens.gov.lk"
      },
      {
        "nome": "Tempio di Seetha Amman",
        "testo": "Un tempio indù colorato vicino a Hakgala, legato al Ramayana: secondo la tradizione qui fu tenuta prigioniera Sita, rapita dal re Ravana. Sulla roccia lungo il torrente i fedeli mostrano le impronte che attribuiscono all'elefante di Hanuman.",
        "come": "Sulla strada per Hakgala, a pochi minuti dal giardino botanico.",
        "quando": "Mattina, insieme a Hakgala.",
        "tempo": "30 minuti",
        "lat": 6.9332,
        "lng": 80.8105,
        "consiglio": "Si entra scalzi; è un luogo di culto molto frequentato dai pellegrini indiani."
      },
      {
        "nome": "Ufficio postale di Nuwara Eliya",
        "testo": "Un edificio in mattoni rossi in stile Tudor, con la torre dell'orologio, del periodo coloniale inglese, ancora in funzione come ufficio postale. È il simbolo della «piccola Inghilterra».",
        "come": "In centro, di fronte alla fermata degli autobus, a piedi.",
        "tempo": "15 minuti",
        "lat": 6.97159,
        "lng": 80.76639,
        "consiglio": "Si può spedire una cartolina con i francobolli dello Sri Lanka."
      },
      {
        "nome": "Cascata di Lover's Leap",
        "testo": "Una cascata alta circa 30 metri sopra le piantagioni, a cui si arriva con una breve camminata tra il tè. Il nome viene da una leggenda di due innamorati che si sarebbero gettati dalla rupe.",
        "come": "Dalla strada della Pedro Tea Plantation, poi 15-20 minuti a piedi su un sentiero ripido.",
        "quando": "Mattina, dopo le piogge.",
        "tempo": "1 ora"
      },
      {
        "nome": "Galway's Land",
        "testo": "Un piccolo parco nazionale di foresta di montagna ai margini della città, tra i più ricchi di uccelli dell'isola, con molte specie endemiche e migratrici d'inverno.",
        "come": "A piedi o in tuk-tuk dal centro, verso est.",
        "quando": "All'alba, il momento migliore per il birdwatching.",
        "tempo": "1-2 ore",
        "lat": 6.96667,
        "lng": 80.77722,
        "url": "https://www.dwc.gov.lk"
      },
      {
        "nome": "Moon Plains",
        "testo": "Un altopiano erboso a sud-est della città, con un belvedere da cui nelle giornate limpide si vedono le montagne più alte dell'isola, tra cui l'Adam's Peak.",
        "come": "In tuk-tuk o jeep dal centro, circa 20 minuti; l'ultimo tratto è riservato ai veicoli autorizzati.",
        "quando": "Mattina presto, prima delle nuvole.",
        "tempo": "1-2 ore",
        "lat": 6.95049,
        "lng": 80.8068
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina presto: World's End a Horton Plains",
          "Pranzo a Nuwara Eliya",
          "Pomeriggio: Pedro Tea Plantation e tè al Grand Hotel"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Pedro Tea Plantation e Lover's Leap, centro con l'ufficio postale e il Victoria Park, tè al Grand Hotel",
          "Giorno 2: World's End a Horton Plains all'alba, pomeriggio a Hakgala e al tempio di Seetha Amman, sera sul lago Gregory"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: piantagioni di tè, Lover's Leap e centro",
          "Giorno 2: Horton Plains e World's End all'alba",
          "Giorno 3: Galway's Land all'alba, Moon Plains, Hakgala e Seetha Amman; la mattina dopo treno da Nanu Oya per Ella"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro di Nuwara Eliya",
        "perChi": "chi vuole camminare",
        "testo": "Hotel e ristoranti a pochi minuti da parco e mercato. Più rumore e traffico.",
        "fascia": "30-90 €"
      },
      {
        "nome": "Colline del tè",
        "perChi": "vista e calma",
        "testo": "Piantagioni e resort di charme come l'Heritance Tea Factory, più lontani dal centro.",
        "fascia": "120-250 €"
      },
      {
        "nome": "Lago Gregory",
        "perChi": "famiglie e passeggiate",
        "testo": "Hotel e guesthouse intorno al lago, a pochi minuti dal centro: più verde e meno traffico, con le passeggiate sul lungolago sotto casa.",
        "fascia": "40-110 €"
      }
    ],
    sapori: [
      {
        "nome": "Tè di Nuwara Eliya",
        "testo": "Il tè delle piantagioni di altura, chiaro e profumato, da assaggiare in fabbrica o al Grand Hotel."
      },
      {
        "nome": "Ristoranti locali",
        "testo": "De Silva Food Center, Grand Indian, Grand Thai o Themparadu, il più locale."
      },
      {
        "nome": "Fragole",
        "testo": "Il clima fresco le fa crescere in altura: si vendono sul bordo delle strade."
      },
      {
        "nome": "Verdure di altura",
        "testo": "Carote, cavoli e patate coltivati sulle terrazze, nei curry locali."
      }
    ],
    attenzioni: [
      "Il freddo: a 1.868 metri di quota le sere sono fresche e a Horton Plains fa più freddo ancora. Portare un pile.",
      "A World's End senza sole il panorama non c'è: controllare le condizioni e partire presto.",
      "Non portare plastica monouso a Horton Plains, dove è vietata.",
      "Sui sentieri restare sempre sul percorso segnalato: ci sono dirupi non protetti."
    ],
    gite: [
      {
        "nome": "Horton Plains e World's End",
        "distanza": "circa 1 ora",
        "come": "In auto o jeep con autista, partendo all'alba; poi un anello di circa 9,5 km a piedi.",
        "testo": "L'altopiano oltre i 2.000 metri con lo strapiombo di 870 metri di World's End e le Baker's Falls: uno dei trekking più belli dell'isola."
      },
      {
        "nome": "Ella in treno",
        "distanza": "3 ore sulla carta",
        "come": "Treno panoramico dalla stazione di Nanu Oya, con posti riservati prenotati in anticipo.",
        "testo": "La tratta più fotografata dello Sri Lanka, tra vallate di tè, ponti e gallerie. I ritardi sono la norma."
      },
      {
        "nome": "Cascate di St. Clair e Devon",
        "distanza": "circa 1 ora",
        "come": "In auto sulla strada per Hatton.",
        "testo": "Due grandi cascate tra le piantagioni, visibili da belvedere sulla strada principale."
      }
    ],
    faq: [
      {
        "domanda": "Fa freddo a Nuwara Eliya?",
        "risposta": "A 1.868 metri le sere sono fresche tutto l'anno e a Horton Plains all'alba fa più freddo ancora. Serve un pile o una felpa pesante."
      },
      {
        "domanda": "Horton Plains si può fare da Nuwara Eliya in giornata?",
        "risposta": "Sì, è a circa un'ora. Conviene partire all'alba: dopo metà mattina le nuvole spesso coprono World's End."
      },
      {
        "domanda": "Quanto costa Horton Plains?",
        "risposta": "L'ingresso per gli adulti stranieri è di circa 25 USD, più tasse, servizio e veicolo (2026); si paga all'ingresso del parco, che apre alle 6."
      },
      {
        "domanda": "Quale piantagione di tè visitare?",
        "risposta": "La Pedro Tea Plantation è a circa 3,5 km dal centro, con la visita alla fabbrica e la degustazione; vicino c'è la cascata di Lover's Leap."
      },
      {
        "domanda": "Da dove parte il treno per Ella?",
        "risposta": "Dalla stazione di Nanu Oya, a circa 15 minuti dal centro. I posti riservati vanno prenotati in anticipo sul portale di Sri Lanka Railways."
      },
      {
        "domanda": "Quanti giorni servono?",
        "risposta": "Un giorno basta per tè e centro; con due si aggiunge Horton Plains all'alba, con tre anche Hakgala e i dintorni."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Le vallate di tè verdi attorno a Nuwara Eliya, Sri Lanka',
    immagine: '/images/sri-lanka/nuwara-eliya-stock.jpg',
  },
  {
    slug: 'ella',
    paeseSlug: 'sri-lanka',
    ordine: 8,
    nome: 'Ella',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '1 giorno, più il treno panoramico per arrivarci',
    visitataPersonalmente: true,
    introduzione: 'Il treno panoramico da Nuwara Eliya, il Nine Arches Bridge e i belvedere sulle colline del tè più fotografate dello Sri Lanka.',
    percheAndarci: 'Per il treno panoramico più famoso dell\'isola e per i tanti belvedere a due passi dal villaggio.',
    cosaVedere: ['Il Nine Arches Bridge', 'Lipton\'s Seat', 'Le cascate di Ravana, a circa 6 km da Ella'],
    cosaFare: [
      'Il treno panoramico Nuwara Eliya-Ella (c\'è la scheda esperienza dedicata)',
      'La zip line Flying Ravana (circa 20€, a 15 minuti da Ella)',
      'Un massaggio alla Spa Ceylon',
      'La cooking class con cena organizzata dal DMC',
    ],
    doveDormire:
      'Abbiamo dormito all\'88th Hotel, 4/5 su Tripadvisor e uno dei posti più consigliati della zona: centrale, vicino a Ella Rock e al Nine Arches Bridge, con un\'accoglienza calorosa. Meglio partire con le aspettative giuste: niente aria condizionata, niente ascensore, letto rigido con solo le lenzuola.\n\nEconomiche: Ella Alpine Resort, Rock Side Inn. Fascia media: Arawe Retreat, Zion View Ella Green Retreat. Lusso: 98 Acres Resort & Spa, Nine Skies.',
    doveMangiare: 'Cooking class con cena del DMC; dopocena al One Love Ella (attenzione ai drink offerti al tavolo, che spesso finiscono nel conto).',
    comeArrivare: "Il modo classico è il treno panoramico da Nanu Oya, la stazione di Nuwara Eliya: sulla carta 3 ore, ma gli orari reali sono imprevedibili. Da Kandy lo stesso treno impiega circa 7 ore sulla carta. In auto con autista, da Nuwara Eliya servono circa 2 ore e mezza e da Yala circa 2 ore; dall'aeroporto di Colombo è una giornata di strada. I posti riservati si prenotano sul portale di Sri Lanka Railways.",
    comeSpostarsi: 'A piedi per i belvedere vicini al villaggio.',
    periodoMigliore: 'non ho indicazioni precise sulla stagione migliore per Ella: noi ci siamo stati a novembre',
    costi: "Zip line Flying Ravana circa 20 € (2023); Nine Arches Bridge gratuito. Budget giornaliero indicativo a persona: basso 25-35 € (guesthouse in paese, rice and curry, tuk-tuk), medio 60-100 € (hotel sulle colline, cooking class, un'attività), alto da 200 € (resort di lusso, autista privato).",
    erroriDaEvitare: ['Aspettare a prenotare i biglietti del treno panoramico: vanno presi con molto anticipo, perché finiscono subito, soprattutto in alta stagione'],
    miaEsperienza:
      'Il treno panoramico è arrivato con ore di ritardo e senza niente da mangiare a bordo. Le vallate di tè a perdita d\'occhio viste dal finestrino, però, sono tra le immagini più belle di tutto il viaggio. Bisogna salirci con lo spirito giusto: i ritardi sono la norma.',
    luoghi: [
      {
        "nome": "Treno panoramico Nuwara Eliya-Ella",
        "testo": "Il tratto più famoso della ferrovia dell'altopiano, tra vallate di tè a perdita d'occhio. Il treno è arrivato con ore di ritardo e senza niente da mangiare a bordo, ma le immagini dal finestrino sono tra le più belle del viaggio.",
        "come": "Si sale alla stazione di Nanu Oya, per Nuwara Eliya; sulla carta 3 ore, ma gli orari reali sono imprevedibili.",
        "quando": "Mattina. I posti riservati si prenotano sul portale ufficiale di Sri Lanka Railways e si ritirano allo sportello con il codice e il passaporto: vanno presi con molto anticipo, perché finiscono subito, soprattutto in alta stagione.",
        "tempo": "3 ore sulla carta (viaggio del 2023), spesso molte di più",
        "url": "https://seatreservation.railway.gov.lk/mtktwebslr/",
        "consiglio": "Salire con lo spirito giusto: i ritardi sono la norma. Portare cibo e acqua."
      },
      {
        "nome": "Nine Arches Bridge",
        "testo": "Un viadotto ferroviario a nove archi in pietra, mattoni e cemento, finito nel 1919: è lungo 91 metri e alto 24, immerso nella giungla. Il momento di maggiore fascino è quando passa il treno.",
        "come": "A Demodara, tra le stazioni di Ella e Demodara: in tuk-tuk e poi a piedi su un sentiero.",
        "quando": "Quando passa un treno: chiedere gli orari in guesthouse.",
        "tempo": "1 ora",
        "costo": "Gratuito (viaggio del 2023)",
        "lat": 6.87667,
        "lng": 81.06111,
        "consiglio": "Non camminare sui binari quando arriva il treno."
      },
      {
        "nome": "Little Adam's Peak",
        "testo": "La camminata più facile e più bella di Ella: un sentiero tra le piantagioni di tè porta in cima a una collina con vista sulla valle e sull'Ella Gap. Il nome viene dalla forma, che ricorda quella dell'Adam's Peak.",
        "come": "A piedi dal paese lungo la strada per Passara, poi il sentiero tra il tè: circa 45 minuti di salita senza difficoltà.",
        "quando": "Alba o mattina presto, prima del caldo e delle nuvole.",
        "tempo": "2 ore andata e ritorno",
        "lat": 6.86505,
        "lng": 81.06302
      },
      {
        "nome": "Ella Rock",
        "testo": "Una salita più lunga e impegnativa, tra binari, piantagioni e bosco, fino a uno sperone di roccia sopra la valle. Il panorama vale la fatica, ma il sentiero non è sempre segnato.",
        "come": "A piedi da Ella, in parte lungo la ferrovia; chi non vuole perdersi prende una guida locale.",
        "quando": "Partire all'alba: a metà mattina le nuvole coprono spesso la vista.",
        "tempo": "4-5 ore andata e ritorno",
        "lat": 6.85472,
        "lng": 81.05194,
        "consiglio": "Diffidare di chi indica «scorciatoie» lungo il sentiero e poi chiede soldi per riportare sulla strada giusta."
      },
      {
        "nome": "Cascate di Ravana",
        "testo": "Una cascata a più salti alta circa 25 metri, lungo la strada per Wellawaya, a circa 6 km da Ella. La leggenda del Ramayana la lega al re Ravana, che avrebbe nascosto qui la principessa Sita.",
        "come": "In tuk-tuk o in bus verso Wellawaya: si vede dalla strada.",
        "quando": "Durante e dopo le piogge, quando porta più acqua.",
        "tempo": "30 minuti",
        "lat": 6.84083,
        "lng": 81.05444
      },
      {
        "nome": "Lipton's Seat",
        "testo": "Il belvedere sulle piantagioni di tè della tenuta di Dambatenne, che porta il nome di Thomas Lipton, il re del tè. Non è a Ella ma sopra Haputale: vale la gita se il cielo è limpido.",
        "come": "In van o tuk-tuk da Ella fino a Haputale, poi su per la strada della tenuta di Dambatenne.",
        "quando": "Mattina presto, prima delle nuvole.",
        "tempo": "mezza giornata da Ella",
        "lat": 6.78068,
        "lng": 81.0155
      },
      {
        "nome": "Zip line Flying Ravana",
        "testo": "Una zip line su due cavi lunga 550 metri, tra le colline sopra Ella. Si parte da Mini Adam's Peak e si scende sopra le piantagioni di tè.",
        "come": "In tuk-tuk da Ella, pochi minuti (circa 15 nel viaggio del 2023).",
        "tempo": "1 ora e mezza",
        "costo": "Circa 20 € (dal viaggio del 2023)",
        "lat": 6.86598,
        "lng": 81.06207,
        "url": "https://www.flyingravana.com/"
      },
      {
        "nome": "Grotta di Ravana",
        "testo": "Una grotta nella roccia sopra la valle, legata anch'essa alla leggenda di Ravana e Sita. Dentro c'è poco da vedere: vale soprattutto per la salita e per la vista.",
        "come": "In tuk-tuk fino alla base, poi una lunga scalinata ripida.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "1 ora",
        "lat": 6.86438,
        "lng": 81.04854
      },
      {
        "nome": "Fabbrica del tè Uva Halpewatte",
        "testo": "Una fabbrica di tè ancora in attività, sulle colline a nord di Ella. La visita guidata segue la lavorazione dalla foglia appena colta al tè confezionato e finisce con una degustazione.",
        "come": "In tuk-tuk da Ella, su una strada di montagna.",
        "quando": "Mattina, quando in fabbrica si lavorano le foglie.",
        "tempo": "1 ora",
        "lat": 6.88956,
        "lng": 81.03477
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Treno panoramico da Nanu Oya (ritardi possibili)",
          "Arrivo a Ella e pranzo",
          "Pomeriggio: Nine Arches Bridge all'ora del treno",
          "Cooking class con cena"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: treno panoramico e Nine Arches Bridge",
          "Giorno 2: Lipton's Seat all'alba (sopra Haputale), poi zip line e massaggio nel pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: treno panoramico da Nanu Oya, poi Nine Arches Bridge al passaggio del treno",
          "Giorno 2: Little Adam's Peak all'alba, zip line, fabbrica del tè di Halpewatte, cooking class la sera",
          "Giorno 3: Ella Rock all'alba e cascate di Ravana nel pomeriggio, oppure la gita a Lipton's Seat"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro di Ella",
        "perChi": "comodità e vita serale",
        "testo": "Guesthouse come l'88th Hotel, vicino a Ella Rock e al Nine Arches Bridge. Rumoroso la sera lungo la strada principale.",
        "fascia": "25-70 €"
      },
      {
        "nome": "Colline fuori dal centro",
        "perChi": "chi cerca vista e calma",
        "testo": "Resort e ville tra le piantagioni, con panorami ampi. Servono tuk-tuk per il paese.",
        "fascia": "60-150 €"
      },
      {
        "nome": "Resort di lusso",
        "perChi": "una notte speciale",
        "testo": "98 Acres Resort & Spa, tra le piantagioni sotto il Little Adam's Peak, e Nine Skies, più isolato. Bungalow con vista e piscina; il paese si raggiunge in tuk-tuk.",
        "fascia": "180-350 €"
      }
    ],
    sapori: [
      {
        "nome": "Cooking class",
        "testo": "Si impara a fare curry di cocco, sambol e dal; la cena è parte della lezione."
      },
      {
        "nome": "Kottu",
        "testo": "Roti a strisce saltato con verdure e uova, nei locali della strada principale."
      },
      {
        "nome": "Tè delle colline",
        "testo": "Dalle piantagioni intorno a Ella, nelle caffetterie con vista."
      },
      {
        "nome": "Rice and curry",
        "testo": "Il pasto base, in ogni guesthouse."
      }
    ],
    attenzioni: [
      "Treno panoramico: i biglietti finiscono subito e i ritardi di ore sono la norma. Prenotare con largo anticipo e non fissare coincidenze strette.",
      "One Love Ella e simili: i drink offerti al tavolo spesso finiscono nel conto.",
      "Alcune camere non hanno aria condizionata, ascensore o letti morbidi: leggere bene la descrizione prima di prenotare.",
      "Sui binari del Nine Arches Bridge non fermarsi quando arriva un treno."
    ],
    gite: [
      {
        "nome": "Cascate di Diyaluma",
        "distanza": "circa 1 ora e mezza in auto",
        "come": "In auto o tuk-tuk via Wellawaya e Koslanda; per le pozze in alto si sale a piedi, meglio con una guida del villaggio.",
        "testo": "La seconda cascata più alta dello Sri Lanka, circa 220 metri. In cima ci sono pozze naturali dove fare il bagno con vista sulla pianura."
      },
      {
        "nome": "Buduruvagala",
        "distanza": "circa 1 ora in auto",
        "come": "In auto via Wellawaya, poi qualche chilometro di strada secondaria.",
        "testo": "Sette figure scolpite nella roccia intorno al X secolo, con un Buddha in piedi di circa 15 metri, in mezzo alla foresta e quasi senza turisti."
      },
      {
        "nome": "Parco nazionale di Yala",
        "distanza": "circa 2 ore in auto",
        "come": "Con autista partendo prestissimo; il safari si fa in jeep con guida.",
        "testo": "Il parco con la più alta densità di leopardi al mondo, con elefanti, coccodrilli, bufali e molti uccelli. Il safari dura circa quattro ore e costava 12.000-16.000 LKR a jeep più l'ingresso (viaggio del 2023)."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Ella?",
        "risposta": "Un giorno basta per il treno e il Nine Arches Bridge. Con due o tre si aggiungono le camminate dell'alba (Little Adam's Peak, Ella Rock), la zip line e la gita a Lipton's Seat."
      },
      {
        "domanda": "Come si prenota il treno per Ella?",
        "risposta": "I posti riservati si comprano sul portale ufficiale di Sri Lanka Railways e si ritirano allo sportello con il codice e il passaporto. Finiscono presto, soprattutto in alta stagione: conviene prenotare appena aprono le vendite."
      },
      {
        "domanda": "Il treno panoramico è puntuale?",
        "risposta": "Quasi mai: i ritardi di ore sono la norma e a bordo non c'è niente da mangiare. Meglio non fissare coincidenze strette e portare acqua e cibo."
      },
      {
        "domanda": "Little Adam's Peak o Ella Rock?",
        "risposta": "Little Adam's Peak è facile, circa 45 minuti di salita, adatto a tutti. Ella Rock è più lunga e meno segnata, ma più selvaggia: è per chi ha tempo e gambe."
      },
      {
        "domanda": "Quando passa il treno sul Nine Arches Bridge?",
        "risposta": "I treni passano più volte al giorno, tra mattina e tardo pomeriggio, ma gli orari non sono affidabili. Conviene chiedere in guesthouse e aspettare sul belvedere con un buon margine."
      },
      {
        "domanda": "Da Ella si va a Yala in giornata?",
        "risposta": "Sì: sono circa 2 ore di strada, partendo prestissimo per il safari del mattino. Molti poi proseguono verso la costa sud."
      }
    ],
    esperienzeSlugs: ['treno-panoramico-ella'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Una vecchia locomotiva con il faro acceso tra i binari erbosi degli altipiani dello Sri Lanka',
    immagine: '/images/sri-lanka/treno-locomotiva-altipiani-riccardo.jpg',
  },
  {
    slug: 'hikkaduwa',
    paeseSlug: 'sri-lanka',
    ordine: 9,
    nome: 'Hikkaduwa',
    tipologia: ['mare', 'relax'],
    giorniConsigliati: '2-3 giorni, compreso il safari a Yala lungo il tragitto',
    visitataPersonalmente: true,
    introduzione: 'Il safari al Parco Nazionale di Yala e le spiagge del sud: la parte rilassata del viaggio, dopo giorni di templi e trekking.',
    percheAndarci: 'Per chiudere il viaggio al mare, dopo tutti i templi, i safari e i trekking dei giorni prima.',
    cosaVedere: ['Il Parco Nazionale di Yala', 'Il Tsunami Museum'],
    cosaFare: [
      'Safari a Yala, uno dei parchi con la più alta densità di leopardi al mondo (c\'è la scheda esperienza dedicata)',
      'Nuotare con le tartarughe: il punto migliore è davanti all\'Hikka Tranz by Cinnamon Hotel',
      'Tsunami Museum',
      'Big Buddha, surf, snorkeling, diving, boat safari sul fiume Madu',
    ],
    doveDormire:
      'Abbiamo dormito al Sapphire Seas Beachfront Hotel, con recensioni molto positive: un hotel boutique proprio sul mare, camere spaziose e una pulizia che citano in tanti. Qualcuno lo descrive come "un\'oasi" rispetto alle zone più trafficate di Hikkaduwa.\n\nEconomiche: Hilda Guest House, Amaroo Hikkaduwa. Fascia media: Sea Star Boutique Hotel, Hikka Tranz by Cinnamon. Lusso: Crystal Sands, Aditya Resort.',
    doveMangiare: 'Cena in spiaggia (abbiamo preso il red snapper: servizio lento ma cena ottima); Steffi\'s Mandala (vegetariano) o Thambili Cafe a pranzo; Sea Salt Society o Canal View a cena.',
    comeArrivare: "Da Colombo e dall'aeroporto si arriva in circa 2 ore e mezza-3 ore sull'autostrada del sud; da Negombo serve circa un'ora in più. Il treno costiero da Colombo Fort ferma a Hikkaduwa in circa 2 ore e mezza, con il mare dal finestrino. Da Ella, passando dal safari a Yala, il viaggio prende una giornata; Galle è a circa mezz'ora di auto o tuk-tuk.",
    comeSpostarsi: 'A piedi in spiaggia.',
    periodoMigliore: 'novembre, quando ci siamo stati, anche se tra un monsone e l\'altro sulla costa possono arrivare piogge e temporali',
    costi: "Safari a Yala 12.000-16.000 LKR a jeep, più l'ingresso (27-30 € a persona) e la mancia (2023); Museo dello Tsunami a offerta libera. Budget giornaliero indicativo a persona: basso 25-35 € (guesthouse a Narigama, rice and curry, tuk-tuk), medio 60-100 € (hotel sul mare, snorkeling, ristoranti di pesce), alto da 150 € (resort sulla spiaggia, escursioni private).",
    erroriDaEvitare: ['Fidarsi dei "pescatori sui pali" lungo la costa sud: ormai sono quasi sempre una messa in scena a pagamento per turisti'],
    miaEsperienza:
      'Dopo giorni pieni di templi e trekking, le spiagge di Hikkaduwa sono state il modo giusto per chiudere il viaggio. Il red snapper mangiato in spiaggia una sera, con il servizio lento e il mare a due passi, è uno dei ricordi più veri di tutto lo Sri Lanka.',
    luoghi: [
      {
        "nome": "Parco Nazionale di Yala",
        "testo": "Uno dei parchi con la più alta densità di leopardi al mondo, dove in safari si vedono anche elefanti, coccodrilli e uccelli.",
        "come": "In jeep con guida, sulla strada da Ella a Hikkaduwa; il safari dura alcune ore.",
        "quando": "Primo mattino o tardo pomeriggio, quando gli animali sono attivi.",
        "tempo": "4 ore",
        "costo": "Jeep 12.000-16.000 LKR, più l'ingresso (27-30 € a persona) e la mancia (dal viaggio del 2023); l'ingresso base è circa 25 USD per gli adulti stranieri, più tasse, servizio e veicolo (2026)",
        "lat": 6.57097,
        "lng": 81.50728,
        "url": "https://www.dwc.gov.lk",
        "consiglio": "I leopardi non sono garantiti: chiedere all'autista dove sono stati avvistati."
      },
      {
        "nome": "Nuotare con le tartarughe",
        "testo": "Il punto migliore a Hikkaduwa è davanti all'Hikka Tranz by Cinnamon Hotel, dove le tartarughe marine vengono a brucare l'alga.",
        "come": "Dalla spiaggia, con maschera e pinne.",
        "quando": "Mattina, con il mare calmo.",
        "tempo": "1-2 ore",
        "consiglio": "Non toccare né inseguire le tartarughe, e tenere le distanze."
      },
      {
        "nome": "Museo dello Tsunami",
        "testo": "Un museo dedicato allo tsunami del 2004, che sulla costa sud ha ucciso migliaia di persone. Un momento serio in mezzo alla vacanza al mare.",
        "come": "In tuk-tuk da Hikkaduwa.",
        "tempo": "1 ora",
        "lat": 6.16879,
        "lng": 80.08797
      },
      {
        "nome": "Fiume Madu, surf e Big Buddha",
        "testo": "Boat safari sul fiume Madu tra le mangrovie, la grande statua del Buddha lungo la costa e, per chi ama il mare, surf, snorkeling e diving.",
        "come": "Escursioni da Hikkaduwa in tuk-tuk o barca.",
        "tempo": "mezza giornata"
      },
      {
        "nome": "Barriera corallina di Hikkaduwa",
        "testo": "La barriera corallina davanti al centro è protetta come parco nazionale marino: pesci colorati, coralli e tartarughe a pochi metri dalla riva. Lo tsunami del 2004 e lo sbiancamento l'hanno danneggiata, ma resta il punto di snorkeling più comodo della costa.",
        "come": "Dalla spiaggia con maschera e pinne, oppure con le barche dal fondo di vetro che partono dalla riva.",
        "quando": "Mattina, con il mare calmo, indicativamente da novembre ad aprile.",
        "tempo": "1-2 ore",
        "lat": 6.145,
        "lng": 80.0925,
        "consiglio": "Non camminare sui coralli e non toccarli; il prezzo della barca si concorda prima."
      },
      {
        "nome": "Spiaggia di Narigama",
        "testo": "Il tratto di spiaggia a sud del centro, con le onde migliori per il surf, scuole e noleggio tavole, guesthouse e locali sulla sabbia. La sera è il cuore della vita notturna di Hikkaduwa.",
        "come": "A piedi lungo la spiaggia o in tuk-tuk dalla strada principale.",
        "quando": "Surf da novembre ad aprile; tramonto per l'atmosfera.",
        "tempo": "mezza giornata",
        "lat": 6.11952,
        "lng": 80.11506
      },
      {
        "nome": "Seenigama Muhudu Viharaya",
        "testo": "Un piccolo tempio buddhista su un isolotto a pochi metri dalla costa, a nord di Hikkaduwa. Sulla terraferma, di fronte, c'è un santuario dove i fedeli vengono a chiedere giustizia o a lanciare maledizioni contro chi li ha offesi.",
        "come": "In tuk-tuk verso nord, circa 10 minuti; all'isolotto si arriva in barca.",
        "tempo": "45 minuti",
        "lat": 6.15726,
        "lng": 80.09302
      },
      {
        "nome": "Buddha dello tsunami di Peraliya",
        "testo": "Una statua del Buddha in piedi alta circa 18 metri, ispirata ai Buddha di Bamiyan, costruita con l'aiuto del Giappone vicino al punto in cui l'onda del 2004 travolse un treno pieno di passeggeri. È il Big Buddha che si vede dalla strada costiera.",
        "come": "Sulla strada costiera a nord di Hikkaduwa, circa 15 minuti in tuk-tuk; si unisce bene al Museo dello Tsunami.",
        "tempo": "30 minuti",
        "lat": 6.16308,
        "lng": 80.09175,
        "consiglio": "È anche un memoriale: abiti coperti e rispetto per chi è venuto a pregare."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: safari a Yala sul trasferimento da Ella, poi cena in spiaggia",
          "Giorno 2: tartarughe in snorkeling al mattino, Museo dello Tsunami, pomeriggio in spiaggia"
        ]
      },
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: snorkeling con le tartarughe e sulla barriera corallina",
          "Pranzo da Steffi's Mandala o al Thambili Cafe",
          "Pomeriggio: Museo dello Tsunami e Buddha di Peraliya",
          "Tramonto a Narigama e cena di pesce"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: safari a Yala sul trasferimento da Ella, cena in spiaggia",
          "Giorno 2: tartarughe e barriera corallina, Museo dello Tsunami, Peraliya e Seenigama",
          "Giorno 3: forte di Galle in mattinata, pomeriggio di surf o boat safari sul fiume Madu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lungomare di Hikkaduwa",
        "perChi": "vita serale e surf",
        "testo": "Locali, scuole di surf e hotel lungo la strada principale. Rumorosa e trafficata.",
        "fascia": "40-110 €"
      },
      {
        "nome": "Hotel sul mare fuori dal centro",
        "perChi": "calma",
        "testo": "Hotel boutique come il Sapphire Seas, direttamente sulla spiaggia, in zone meno trafficate.",
        "fascia": "60-150 €"
      },
      {
        "nome": "Narigama",
        "perChi": "surf e budget",
        "testo": "Guesthouse, ostelli e piccoli hotel sul tratto di spiaggia con le onde migliori, vicino ai locali: economico e vivace, rumoroso la sera.",
        "fascia": "15-50 €"
      }
    ],
    sapori: [
      {
        "nome": "Red snapper alla griglia",
        "testo": "Cena in spiaggia: servizio lento ma pesce ottimo. Uno dei ricordi più veri dello Sri Lanka."
      },
      {
        "nome": "Cucina vegetariana",
        "testo": "Steffi's Mandala o Thambili Cafe a pranzo."
      },
      {
        "nome": "Frutti di mare",
        "testo": "Sea Salt Society o Canal View a cena."
      },
      {
        "nome": "Cocco fresco",
        "testo": "Thambili, il cocco arancione, venduto lungo la spiaggia."
      }
    ],
    attenzioni: [
      "Non fidarsi dei «pescatori sui pali» lungo la costa sud: ormai sono quasi sempre una messa in scena a pagamento per turisti.",
      "A ottobre e novembre, tra i due monsoni, sulla costa sud possono arrivare temporali e mare mosso: chiedere in hotel prima di fare il bagno.",
      "Safari a Yala: scegliere operatori che rispettano le distanze dagli animali e i limiti di jeep intorno agli avvistamenti.",
      "Correnti e onde alte nel sud: nuotare dove ci sono altre persone e rispettare le bandiere."
    ],
    gite: [
      {
        "nome": "Forte di Galle",
        "distanza": "circa 20 km, 30 minuti",
        "come": "In auto, tuk-tuk o treno costiero.",
        "testo": "La città fortificata degli olandesi, patrimonio UNESCO: bastioni sul mare, faro, chiese, viuzze con caffè e botteghe. Al tramonto i bastioni si riempiono di gente."
      },
      {
        "nome": "Fiume Madu",
        "distanza": "circa 30 minuti",
        "come": "In auto o tuk-tuk fino a Balapitiya, poi in barca.",
        "testo": "Boat safari tra mangrovie e isolotti, con un tempio su un'isola e la vita dei villaggi sull'acqua."
      },
      {
        "nome": "Centro delle tartarughe di Bentota",
        "distanza": "circa 45 minuti",
        "come": "In auto sulla strada verso Colombo e Negombo.",
        "testo": "Vasche con le tartarughe marine e i piccoli prima del rilascio in mare: una sosta comoda lungo il ritorno. Ingresso circa 1.000-2.000 LKR (2023)."
      },
      {
        "nome": "Mirissa",
        "distanza": "circa 1 ora e mezza",
        "come": "In auto o treno costiero verso sud.",
        "testo": "Una baia con palme e spiaggia chiara, punto di partenza delle uscite in barca per vedere le balene da dicembre ad aprile."
      }
    ],
    faq: [
      {
        "domanda": "Quando è la stagione migliore a Hikkaduwa?",
        "risposta": "Il mare della costa sud-ovest è calmo indicativamente da novembre ad aprile. A ottobre e novembre, tra i due monsoni, possono ancora arrivare temporali."
      },
      {
        "domanda": "Dove si nuota con le tartarughe?",
        "risposta": "Davanti all'Hikka Tranz by Cinnamon Hotel, a pochi metri dalla riva, meglio la mattina presto. Le tartarughe non si toccano e non si nutrono."
      },
      {
        "domanda": "Hikkaduwa è adatta al surf?",
        "risposta": "Sì, soprattutto a Narigama, con scuole e noleggio tavole sulla spiaggia; da novembre ad aprile ci sono onde anche per principianti."
      },
      {
        "domanda": "Hikkaduwa o Mirissa?",
        "risposta": "Hikkaduwa ha la barriera corallina, le tartarughe e più vita la sera; Mirissa è più piccola, con la baia e le uscite per le balene. Sono a circa un'ora e mezza l'una dall'altra."
      },
      {
        "domanda": "Quanto dista dal forte di Galle?",
        "risposta": "Circa 20 km, mezz'ora in auto o tuk-tuk, o poco di più in treno: si visita bene in mezza giornata."
      },
      {
        "domanda": "Il Museo dello Tsunami si paga?",
        "risposta": "È a offerta libera: racconta con foto e testimonianze cosa ha fatto lo tsunami del 2004 a questa costa."
      }
    ],
    esperienzeSlugs: ['safari-yala'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La spiaggia di Hikkaduwa sulla costa sud dello Sri Lanka',
    immagine: '/images/sri-lanka/hikkaduwa-stock.jpg',
  },
]
