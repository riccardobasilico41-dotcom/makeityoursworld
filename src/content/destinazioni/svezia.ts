import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Lapponia svedese: Capodanno sotto l'aurora"
// (src/content/viaggi/14-lapponia-svedese-abisko.md), a sua volta ricostruito
// incrociando i documenti dell'agenzia "Mama Family Travel Partner" (preventivo,
// piano hotel, piano voli, presentazione comparativa Capodanno). Dove un dato
// non è nei documenti originali, il campo resta con una nota esplicita
// "da confermare/da completare" — nessun fatto inventato.
//
// Le immagini sono foto stock temporanee (Pixabay/Pexels, licenze free-use),
// scelte per rappresentare davvero il luogo in attesa di foto originali.
//
// Stoccolma serve un secondo viaggio, "Capitali nordiche"
// (src/content/viaggi/60-capitali-nordiche.md): lì la città non è più solo
// il transito di una notte verso Kiruna, ma una tappa piena di 2-3 giorni.
// visitataPersonalmente resta true (la notte di transito è stata vissuta
// davvero) e miaEsperienza non cambia — racconta solo quel transito. Le voci
// aggiunte per il nuovo itinerario (Gamla Stan, Vasa Museum, City Hall, ABBA
// Museum, arcipelago) sono ricerca, non ricordo: coerente con le singole
// schede Esperienza collegate, che restano giudizio 'da-verificare'.

export const destinazioniSvezia: Destinazione[] = [
  {
    slug: 'stoccolma',
    paeseSlug: 'svezia',
    ordine: 1,
    nome: 'Stoccolma',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      'una notte all\'andata e una al ritorno nel viaggio in Lapponia, solo di transito; 2-3 giorni pieni nell\'itinerario «Capitali nordiche», come seconda tappa dopo Copenaghen',
    visitataPersonalmente: true,
    introduzione:
      'Nel viaggio in Lapponia è il transito obbligato tra il volo internazionale e quello interno per Kiruna. Ma è anche una capitale che merita molto più di una notte: è costruita su quattordici isole collegate da oltre cinquanta ponti, e ha il nucleo medievale di Gamla Stan, il relitto secentesco del Vasa e il municipio dove ogni anno si tiene il banchetto del Nobel.',
    percheAndarci:
      'Per il volo interno verso Kiruna bisogna comunque passarci, una notte per direzione. Ed è la seconda tappa naturale di un giro delle capitali nordiche: da Copenaghen si arriva in treno o in aereo, e tra centro storico, musei e arcipelago la città riempie bene 2-3 giorni.',
    cosaVedere: [
      'Il centro città, in una versione molto ridotta se si è solo in transito per una notte',
      'Gamla Stan, il centro storico medievale su un\'isola propria: vicoli stretti, case colorate, il Palazzo Reale (con il cambio della guardia) e la piazza di Stortorget',
      'Il Vasamuseet (Museo Vasa), con una nave da guerra reale del 1628 affondata nel porto di Stoccolma durante il viaggio inaugurale e recuperata quasi intatta nel 1961: una delle navi antiche meglio conservate al mondo',
      'Stadshuset, il Municipio in mattoni rossi affacciato sull\'acqua, sede del banchetto del Premio Nobel nella Sala Blu e della Sala Dorata rivestita di oltre 18 milioni di tessere dorate',
      'ABBA The Museum, sull\'isola di Djurgården, dedicato al gruppo pop più famoso della Svezia, con cimeli originali e stanze interattive',
      'L\'arcipelago di Stoccolma (Stockholms skärgård), oltre 30.000 tra isole e isolotti che si aprono a est della città verso il Mar Baltico',
    ],
    cosaFare: [
      'Poco altro oltre a check-in/check-out se si è solo in transito per una notte',
      'Una passeggiata tra i vicoli di Gamla Stan, con sosta a Stortorget',
      'La visita al Vasamuseet (vedi la scheda esperienza dedicata)',
      'Un tour guidato di Stadshuset, con salita alla torre nei mesi caldi per la vista sulla città (l\'accesso è stagionale: conviene controllare gli orari prima)',
      'Una mezza giornata o una giornata intera in barca nell\'arcipelago (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Ho dormito al Radisson Blu Royal Viking sia all\'andata sia al ritorno, in transito verso la Lapponia: una catena internazionale affidabile, comoda per chi arriva o parte con voli serali. Per un soggiorno pieno, Gamla Stan e Norrmalm/città vecchia restano le zone più centrali e comode a piedi; Södermalm, più giovane e con bar e ristoranti suoi, è un\'alternativa spesso più economica a pochi minuti di metro dal centro.',
    doveMangiare:
      'Nelle soste di transito avevo poche ore e non ho locali da segnalare. Gran parte dell\'offerta della città sta a Södermalm e a Östermalm, dai fast-casual ai ristoranti di fascia alta.',
    comeArrivare:
      "Volo internazionale su Stoccolma Arlanda. Per chi arriva come seconda tappa dell'itinerario «Capitali nordiche», da Copenaghen c'è il treno diretto SJ (circa 5 ore) o il volo (circa 1 ora). Da Arlanda l'Arlanda Express porta alla stazione centrale in circa 20 minuti (circa 349 SEK, più caro se comprato a bordo); il treno pendolare SL con supplemento aeroporto e i bus Flygbussarna sono più lenti ed economici. I taxi conviene prenderli solo dalle compagnie grandi, a tariffa fissa.",
    comeSpostarsi: 'Per il solo transito aeroporto-hotel non serve. Per un soggiorno pieno ci sono metro (Tunnelbana), bus e traghetti urbani con biglietto integrato SL; il centro storico si gira bene anche a piedi.',
    periodoMigliore: 'maggio-settembre per il clima e per le uscite in arcipelago, che funzionano meglio con le giornate lunghe',
    costi:
      "Biglietto SL singolo 43 SEK, pass giornaliero 180 SEK. Vasamuseet 195-240 SEK secondo la stagione. ABBA The Museum 269-349 SEK. Gita in arcipelago da circa 375 SEK (circa 33€) per un'uscita guidata di 2-2,5 ore. Budget giornaliero a persona, alloggio escluso: basso 50-70 € (supermercato, pass dei mezzi, un museo), medio 90-130 € (pranzo fuori, cena media, due ingressi), alto oltre 180 €.",
    erroriDaEvitare: [],
    miaEsperienza:
      'Stoccolma per me è stata solo una tappa logistica, all\'andata e al ritorno: giusto il tempo di dormire tra un volo e l\'altro.',
    luoghi: [
      {
        nome: "Gamla Stan e Palazzo Reale",
        testo: "Il centro storico medievale su un'isola, con vicoli stretti, case colorate e la piazza di Stortorget. Il Palazzo Reale, residenza ufficiale del re con oltre 1.400 stanze, ospita il cambio della guardia nel cortile esterno.",
        come: "A piedi dalla stazione centrale o con la metro fino a Gamla stan.",
        quando: "Mattina presto, prima dei gruppi; il cambio della guardia è a mezzogiorno nei giorni indicati dal sito reale.",
        tempo: "2-3 ore",
        costo: "Vicoli liberi; Palazzo Reale 220 SEK adulti, 240 SEK da maggio a settembre (2026), circa 20 €",
        orari: "Palazzo Reale in bassa stagione aperto tutti i giorni 10-16 (novembre 2026); in estate orari più lunghi, sul sito",
        lat: 59.325,
        lng: 18.07056,
        url: "https://www.kungligaslotten.se",
        consiglio: "I vicoli Mårten Trotzigs gränd e Västerlånggatan sono i più fotografati: andarci all'alba."
      },
      {
        nome: "Museo Vasa",
        testo: "Una nave da guerra del 1628 affondata nel porto il 10 agosto 1628, dopo circa 1.300 metri di viaggio inaugurale, e recuperata quasi intatta nel 1961. È la nave del Seicento meglio conservata al mondo, esposta in una grande sala con passerelle su più livelli, dalla chiglia fino all'altezza del ponte.",
        come: "Tram 7 o bus 67 fino alla fermata Nordiska museet/Vasamuseet, oppure traghetto 80 da Nybroplan o 82 da Slussen fino ad Allmänna gränd, a 8 minuti a piedi. Visita libera.",
        quando: "Mattina nei giorni feriali, quando c'è meno gente.",
        tempo: "2 ore",
        costo: "195 SEK adulti in bassa stagione (2026), di più in estate",
        orari: "Tutti i giorni: d'estate 8.30-18, nel resto dell'anno 10-17, il mercoledì fino alle 20",
        lat: 59.32807,
        lng: 18.09139,
        url: "https://www.vasamuseet.se",
        consiglio: "Prenotare online il biglietto in alta stagione."
      },
      {
        nome: "Stadshuset",
        testo: "Il Municipio in mattoni rossi del 1923 sull'acqua, sede del banchetto dei Premi Nobel nella Sala Blu e con la Sala Dorata coperta da oltre 18 milioni di tessere di mosaico d'oro. La torre è alta 106 metri, con una scala di 365 gradini e un ascensore: dalla cima si vede tutta la città.",
        come: "A piedi dalla stazione; la visita all'interno è solo guidata.",
        quando: "Mattina; orari dei tour e della torre sul sito ufficiale, dove si comprano i biglietti.",
        tempo: "1 ora",
        costo: "Visita guidata di circa 45 minuti poco più di 10 €; torre (maggio-settembre) con biglietto a parte",
        lat: 59.3275,
        lng: 18.055,
        url: "https://stadshuset.stockholm",
        consiglio: "Controllare orari e disponibilità dei tour sul sito prima di andare."
      },
      {
        nome: "Skansen e Djurgården",
        testo: "Il più antico museo all'aperto della Svezia, aperto nel 1891, con case storiche da tutta la Svezia, animali nordici e artigiani in costume. Sull'isola ci sono anche ABBA The Museum e il parco Gröna Lund.",
        come: "Tram 7 o traghetto dal centro. Il biglietto copre il parco, non le attrazioni a parte.",
        quando: "Primavera ed estate; in inverno ci sono mercatini di Natale.",
        tempo: "3-4 ore",
        orari: "Da giugno a fine agosto 10-18; in inverno feriali 10-15 e weekend 10-16 (calendario 2026-27)",
        lat: 59.32418,
        lng: 18.102,
        url: "https://www.skansen.se",
        consiglio: "Salire sul colle per la vista sulla città; a dicembre c'è il mercatino di Natale."
      },
      {
        nome: "ABBA The Museum",
        testo: "Il museo del gruppo pop svedese più famoso al mondo, con costumi, dischi d'oro e stanze interattive dove si canta e si balla sulle loro canzoni. Funziona anche per chi non è un fan: è allegro, ben fatto e veloce da visitare.",
        come: "A Djurgården, a pochi minuti a piedi dal Museo Vasa; tram 7 dal centro.",
        quando: "All'apertura o dopo le 15: tra le 10 e le 15 c'è più gente.",
        tempo: "1,5-2 ore",
        costo: "269-349 SEK secondo il giorno, circa 24-31 €",
        orari: "Tutti i giorni 10-18, ingresso con fascia oraria di 30 minuti",
        lat: 59.325,
        lng: 18.09639,
        url: "https://abbathemuseum.com",
        consiglio: "Comprare online: costa meno e si sceglie l'orario."
      },
      {
        nome: "Museo del Premio Nobel",
        testo: "Nell'antica Borsa che chiude un lato di Stortorget, racconta i premiati e le loro scoperte con oggetti, video e storie brevi. È piccolo e si abbina facilmente al giro di Gamla Stan.",
        come: "In piazza Stortorget, a Gamla Stan; metro fino a Gamla stan.",
        quando: "Venerdì sera, aperto fino alle 21, o con la pioggia.",
        tempo: "1 ora",
        costo: "160 SEK adulti (2026), circa 14 €; gratis sotto i 18 anni",
        orari: "Mar-dom 11-17, venerdì fino alle 21; lunedì chiuso in bassa stagione (novembre 2026)",
        lat: 59.32522,
        lng: 18.07083,
        url: "https://nobelprizemuseum.se/en/"
      },
      {
        nome: "Södermalm e Monteliusvägen",
        testo: "L'isola a sud del centro, con caffè, negozi vintage e i quartieri più giovani della città. Il sentiero di Monteliusvägen corre sopra le scogliere e offre la vista più bella su Gamla Stan, Riddarholmen e il Municipio.",
        come: "Metro fino a Slussen o Mariatorget, poi a piedi in salita per 10 minuti.",
        quando: "Al tramonto, con la luce sull'acqua.",
        tempo: "2-3 ore",
        costo: "Gratuito",
        orari: "Sentiero sempre accessibile",
        lat: 59.32072,
        lng: 18.06031
      },
      {
        nome: "Fotografiska",
        testo: "Museo di fotografia contemporanea in un ex edificio doganale sul lungomare di Södermalm, con tre o quattro mostre che cambiano durante l'anno. Il caffè all'ultimo piano ha una delle viste migliori sull'acqua e su Djurgården.",
        come: "A piedi da Slussen in 10 minuti lungo Stadsgårdshamnen.",
        quando: "La sera: resta aperto fino a tardi.",
        tempo: "1,5-2 ore",
        orari: "Aperto fino alle 23 (2026)",
        lat: 59.31779,
        lng: 18.08472,
        url: "https://www.fotografiska.com/sto/en/"
      },
      {
        nome: "Moderna Museet (Skeppsholmen)",
        testo: "Il museo d'arte moderna sull'isola di Skeppsholmen, con una collezione che va da Picasso e Dalí a Rauschenberg e Warhol. Fuori, nel giardino, ci sono le sculture colorate di Niki de Saint Phalle.",
        come: "A piedi dal centro attraversando il ponte di Skeppsholmsbron, o bus 65.",
        quando: "Venerdì dalle 18 alle 20, con ingresso gratuito.",
        tempo: "2 ore",
        costo: "170 SEK (2026), circa 15 €; gratis fino a 18 anni",
        orari: "10-18, martedì e venerdì fino alle 20 (2026)",
        lat: 59.32639,
        lng: 18.08361,
        url: "https://www.modernamuseet.se/stockholm/en/"
      },
      {
        nome: "Palazzo di Drottningholm",
        testo: "Dal 1981 il re e la regina vivono nell'ala sud; il resto è aperto al pubblico. Patrimonio UNESCO dal 1991, ha giardini barocchi e un teatro del Settecento ancora in uso, con un festival d'opera d'estate.",
        come: "Sull'isola di Lovön, fuori città; come arrivarci con i mezzi pubblici sul sito ufficiale.",
        quando: "Primavera ed estate, per i giardini.",
        tempo: "mezza giornata",
        costo: "170 SEK adulti (2026), circa 15 €",
        orari: "Fuori stagione solo sabato e domenica 10-16 (novembre 2026); calendario estivo sul sito",
        lat: 59.32167,
        lng: 17.88694,
        url: "https://www.kungligaslotten.se",
        consiglio: "Lasciare tempo per i giardini: sono la parte più piacevole della visita."
      },
      {
        nome: "Arcipelago di Stoccolma",
        testo: "Decine di migliaia di isole e isolotti che si aprono a est della città verso il Baltico. Il battello di linea porta a Vaxholm, Grinda o Sandhamn, con sentieri, spiagge di roccia e piccoli caffè.",
        come: "Battelli di linea dal centro; biglietti e orari sul sito di Waxholmsbolaget.",
        quando: "Maggio-settembre, con le giornate lunghe.",
        tempo: "giornata intera",
        costo: "Uscita guidata di 2-2,5 ore da circa 375 SEK, circa 33 €",
        lat: 59.38778,
        lng: 18.73581,
        url: "https://www.waxholmsbolaget.se",
        consiglio: "Per chi ha poco tempo, le isole Fjäderholmarna sono vicine al centro."
      },
      {
        nome: "Östermalms Saluhall",
        testo: "Il mercato coperto storico del 1888, restaurato da poco, con banchi di pesce, formaggi, carne di renna e piccoli ristoranti. È il posto giusto per un pranzo di aringhe e gamberi senza prenotare.",
        come: "Metro fino a Östermalmstorg.",
        quando: "A pranzo nei giorni feriali.",
        tempo: "1 ora",
        costo: "Ingresso libero; pranzo indicativamente 15-30 €",
        orari: "Lun-ven 9.30-19, sabato 9.30-17; alcuni ristoranti aperti la sera",
        lat: 59.33597,
        lng: 18.07809,
        url: "https://ostermalmshallen.se/en/"
      },
      {
        nome: "Le stazioni d'arte della metro",
        testo: "Oltre novanta stazioni della metropolitana sono decorate da artisti, tanto che la rete viene chiamata la galleria d'arte più lunga del mondo. T-Centralen, con i rampicanti blu sulla roccia, Kungsträdgården e Solna centrum sono le più note.",
        come: "Con un normale biglietto SL; la linea blu tocca le stazioni più scenografiche.",
        quando: "Fuori dalle ore di punta, per fotografare senza folla.",
        tempo: "1-2 ore",
        costo: "Biglietto SL singolo 43 SEK, circa 4 €; pass giornaliero 180 SEK",
        lat: 59.33167,
        lng: 18.06083
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Gamla Stan, Stortorget e Palazzo Reale",
          "Museo del Premio Nobel o fika in un caffè di Gamla Stan",
          "Pomeriggio: Museo Vasa a Djurgården",
          "Tramonto da Monteliusvägen e cena a Södermalm"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: visita guidata dello Stadshuset",
          "Pranzo a Östermalms Saluhall",
          "Pomeriggio: Skansen o ABBA The Museum",
          "Sera: Fotografiska, aperto fino a tardi"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3 d'estate: battello nell'arcipelago (Vaxholm o Fjäderholmarna)",
          "Giorno 3 d'inverno: Drottningholm (nel weekend) e Moderna Museet",
          "Rientro con un giro tra le stazioni d'arte della metro"
        ]
      }
    ],
    zone: [
      {
        nome: "Gamla Stan",
        testo: "Vicoli di ciottoli e locali, ma camere piccole e caro. Rumore di sera nelle vie principali.",
        perChi: "Chi vuole il fascino del centro storico",
        fascia: "150-280 €"
      },
      {
        nome: "Norrmalm (vicino alla stazione)",
        testo: "Comodo per i treni e l'aeroporto. Poca atmosfera, molti uffici.",
        perChi: "Chi ha poco tempo o parte presto",
        fascia: "120-220 €"
      },
      {
        nome: "Södermalm",
        testo: "Un'isola con ristoranti, vecchi pub e vista dal Fjällgatan; a pochi minuti in metro dal centro.",
        perChi: "Chi cerca bar e quartieri giovani",
        fascia: "100-200 €"
      },
      {
        nome: "Östermalm",
        testo: "Viali ampi, il mercato coperto e ristoranti di livello; a piedi da Djurgården e dal centro. È la zona più cara.",
        perChi: "Chi vuole un quartiere elegante e tranquillo",
        fascia: "160-300 €"
      }
    ],
    sapori: [
      {
        nome: "Köttbullar",
        testo: "Le polpette svedesi con salsa di panna, purè e mirtilli rossi: il piatto più famoso."
      },
      {
        nome: "Fika e kanelbullar",
        testo: "La pausa del caffè con girelle alla cannella o al cardamomo, in ogni caffè."
      },
      {
        nome: "Semla",
        testo: "Panino al cardamomo con mandorle e panna, tipico dell'inverno, intorno al martedì grasso."
      },
      {
        nome: "Gravlax",
        testo: "Salmone marinato con aneto e senape dolce, da provare nei ristoranti tradizionali."
      }
    ],
    attenzioni: [
      "Quasi tutto si paga con carta: molti locali non accettano contanti.",
      "Le bevande oltre il 3,5% di alcol si comprano solo da Systembolaget, chiuso la domenica e nei giorni festivi.",
      "Dall'aeroporto di Arlanda l'Arlanda Express arriva in centro in 18 minuti, con partenze ogni 12-15 minuti; ci sono anche altri treni e bus: i taxi non prezzati in anticipo possono costare molto.",
      "Borseggiatori nella stazione centrale e sulla metro nelle ore di punta."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per Stoccolma?",
        risposta: "Due giorni bastano per Gamla Stan, il Museo Vasa, lo Stadshuset e Skansen. Con tre giorni si aggiunge l'arcipelago in estate o Drottningholm."
      },
      {
        domanda: "Come si va dall'aeroporto di Arlanda al centro?",
        risposta: "L'Arlanda Express arriva alla stazione centrale in circa 20 minuti e costa circa 349 SEK. Il treno pendolare SL e i bus Flygbussarna sono più lenti ma più economici."
      },
      {
        domanda: "Stoccolma è cara?",
        risposta: "Meno di Oslo e Copenaghen, ma più dell'Italia: un pasto semplice costa 12-20 €, una cena media 35-45 € a persona, una birra 6-9 €."
      },
      {
        domanda: "Bisogna prenotare il Museo Vasa?",
        risposta: "Non è obbligatorio, ma in estate e nei weekend conviene comprare online per evitare la coda. ABBA The Museum invece funziona solo a fasce orarie."
      },
      {
        domanda: "Servono contanti in Svezia?",
        risposta: "Quasi mai: si paga con la carta ovunque, compresi metro e bancarelle. Alcuni locali non accettano proprio i contanti."
      },
      {
        domanda: "Quando andare a Stoccolma?",
        risposta: "Da maggio a settembre, con giornate lunghissime e battelli per l'arcipelago. Dicembre ha i mercatini di Natale a Skansen e Gamla Stan, ma fa buio presto."
      }
    ],
    gite: [
      {
        nome: "Uppsala",
        distanza: "40 minuti in treno",
        come: "Treni SJ e regionali frequenti dalla stazione centrale.",
        testo: "La città universitaria più antica della Scandinavia, con la cattedrale gotica più grande del nord, il castello e i tumuli vichinghi di Gamla Uppsala a pochi chilometri."
      },
      {
        nome: "Vaxholm",
        distanza: "1 ora in battello",
        come: "Battelli Waxholmsbolaget da Strömkajen, oppure bus 670 da Tekniska högskolan.",
        testo: "Il borgo dell'arcipelago più vicino e comodo, con case di legno, una fortezza sull'isolotto davanti al porto e caffè sull'acqua."
      },
      {
        nome: "Sigtuna",
        distanza: "50 km",
        come: "Treno pendolare fino a Märsta, poi bus 570 o 575.",
        testo: "La cittadina più antica della Svezia, fondata intorno al 980, con una via principale di case basse, rovine di chiese medievali e pietre runiche lungo le strade."
      }
    ],
    esperienzeSlugs: ['vasamuseet-stoccolma', 'gamla-stan-passeggiata', 'abba-museum-stoccolma', 'arcipelago-stoccolma-in-barca'],
    tripSlugs: ['lapponia-svedese-abisko', 'capitali-nordiche'],
    imageAlt: 'Case colorate del centro storico di Stoccolma affacciate sull\'acqua in inverno',
    immagine: '/images/svezia/stoccolma-stock.jpg',
  },
  {
    slug: 'kiruna',
    paeseSlug: 'svezia',
    ordine: 2,
    nome: 'Kiruna',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 notti totali (andata e ritorno), base logistica per Abisko',
    visitataPersonalmente: true,
    introduzione: 'La città più a nord della Svezia, base logistica per Abisko. È famosa per la miniera di ferro LKAB, che sta costringendo la città a spostarsi, pezzo per pezzo, qualche chilometro più in là.',
    percheAndarci: 'È il passaggio obbligato per Abisko, ma ha una sua identità: la chiesa di legno rossa, il centro in piena trasformazione urbanistica e, poco lontano, l\'ICEHOTEL.',
    cosaVedere: [
      'La chiesa di legno rossa di Kiruna, uno degli edifici simbolo della città',
      'Il centro città, che nei prossimi anni verrà smontato e ricostruito altrove per l\'espansione della miniera',
    ],
    cosaFare: [
      'Giro del centro a piedi',
      'Relax in spa all\'Elite Hotel Frost dopo le giornate più intense ad Abisko',
      'Visita guidata alla miniera LKAB (3 ore, fino a 540 m di profondità; vedi la scheda esperienza dedicata)',
      'Gita di mezza giornata all\'ICEHOTEL di Jukkasjärvi, a circa 20 minuti (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'All\'andata ho dormito allo STF Malmfältens Folkhögskola, una sistemazione semplice ed essenziale gestita dalla Svenska Turistföreningen (l\'associazione escursionistica svedese, molto presente in tutta la regione). Al ritorno all\'Elite Hotel Frost - Hotel & Spa: un bel salto di qualità, con una spa interna ideale per recuperare dopo le giornate più fredde ad Abisko.',
    doveMangiare: 'Non ho ristoranti da segnalare. Il budget indicativo che avevo messo in conto: colazioni 10-15€/giorno, pranzi e cene 30-50€ a pasto.',
    comeArrivare: "Si arriva in aereo all'aeroporto di Kiruna (KRN), con voli interni da Stoccolma Arlanda: il bus legato agli arrivi porta in centro in circa 20 minuti per 100-110 SEK (circa 10 €), il taxi costa 300-400 SEK. In alternativa c'è il treno SJ da Stoccolma verso Narvik, che ferma a Kiruna. Da Kiruna ad Abisko si prosegue in treno, circa un'ora e un quarto, oppure in auto sulla E10 (circa 96 km).",
    comeSpostarsi: 'A piedi in centro; treno per Abisko.',
    periodoMigliore: 'lo stesso di Abisko: da fine dicembre a marzo per l\'aurora, con febbraio-marzo molto più economici',
    costi: "Il centro si visita gratis; la chiesa è chiusa fino alla riapertura prevista nel 2027. La miniera LKAB costa 590 SEK (circa 52 €) a persona per il tour guidato di 3 ore. L'ICEHOTEL costa 325 SEK (circa 29 €) per la sola visita di giorno fino a dicembre 2026, da 3.995 SEK (circa 350 €) a notte per 2 persone per dormire in una camera di ghiaccio. Doppia in hotel di fascia media in città: indicativamente 100-150 €/notte. Budget giornaliero a persona, indicativo: 80-110 € con ostello STF e spesa al supermercato; 160-230 € con hotel in centro e due pasti fuori (30-50 € a pasto); oltre 400 € con notte all'ICEHOTEL e un tour guidato.",
    erroriDaEvitare: [],
    miaEsperienza:
      'Kiruna per me è stata una base pratica più che una meta: all\'andata l\'essenzialità dello STF, al ritorno la spa dell\'Elite Hotel Frost, e sullo sfondo la chiesa rossa e il centro in trasformazione.',
    luoghi: [
      {
        nome: "Chiesa di Kiruna",
        testo: "Chiesa in legno rossa del 1912 di Gustaf Wickman, considerata una delle più grandi costruzioni di legno della Svezia. Il 19 e 20 agosto 2025 è stata trasportata intera per circa 5 km, su carrelli comandati a distanza, fino al nuovo centro, tra il cimitero e la nuova piazza, per via dell'espansione della miniera. All'interno sono in corso i lavori di sistemazione: la riapertura è prevista nel 2027.",
        come: "Nel nuovo centro di Kiruna, a piedi; per ora si vede solo da fuori.",
        quando: "Giorno, con luce diurna d'inverno breve.",
        tempo: "30 minuti-1 ora",
        costo: "chiusa al pubblico fino alla riapertura prevista nel 2027",
        orari: "interno chiuso per lavori fino al 2027; l'esterno si vede a qualsiasi ora",
        lat: 67.84959,
        lng: 20.28885,
        url: "https://www.svenskakyrkan.se/kiruna",
        consiglio: "Il nuovo centro è in costruzione: un'occasione di vedere una città che si sposta.",
      },
      {
        nome: "Miniera di ferro LKAB",
        testo: "La più grande e moderna miniera di ferro sotterranea del mondo; il tour guidato, di circa 3 ore, scende al centro visitatori dell'LKAB a 540 metri di profondità e spiega perché Kiruna sta traslocando.",
        come: "Tour guidato di Kiruna Lapland con bus dal Kiruna Tourist Center (Malmvägen 9B); giorni e lingue cambiano con la stagione.",
        quando: "Tutto l'anno; i posti finiscono presto in inverno.",
        tempo: "3 ore",
        costo: "590 SEK adulti, circa 52 € (2026), con trasferimento, guida e caffè",
        orari: "giorni, orari e lingue variano con la stagione; ritrovo 15 minuti prima della partenza, prenotazione online",
        url: "https://kirunalapland.se/en/mine-tour/",
        consiglio: "Portare abiti caldi: sotto terra la temperatura è bassa.",
      },
      {
        nome: "ICEHOTEL a Jukkasjärvi",
        testo: "L'hotel di ghiaccio rifatto ogni inverno con sculture e suite a tema, a metà dicembre, e lasciato sciogliere nel fiume Torne ad aprile. Si visita anche senza dormirci; l'ICEHOTEL 365, con l'ICEBAR e le suite d'arte, resta aperto tutto l'anno.",
        come: "A Jukkasjärvi, circa 20 km da Kiruna: in auto o con il bus 501 di Länstrafiken Norrbotten (biglietto con carta a bordo, poche corse nel fine settimana).",
        quando: "Da dicembre ad aprile per l'hotel di ghiaccio vero e proprio.",
        tempo: "1-2 ore",
        costo: "visita di giorno 325 SEK adulti, circa 29 € (aprile-dicembre 2026); bambini 4-12 anni 39 SEK",
        orari: "mostra ICEHOTEL 365 tutti i giorni 11-18 fino all'11 dicembre 2026, poi 10-18 fino al 10 aprile 2027; ICEBAR 11-20 da dicembre 2026 a marzo 2027",
        lat: 67.85021,
        lng: 20.59642,
        url: "https://www.icehotel.com/tickets-opening-hours",
        consiglio: "Si paga solo con carta: in tutta la struttura non si accettano contanti.",
      },
      {
        nome: "Chiesa di Jukkasjärvi",
        testo: "Piccola chiesa di legno rossa con il campanile separato: l'edificio attuale è del 1726, ma conserva parti del 1607. Dentro, la pala d'altare dipinta da Bror Hjorth è il motivo per entrare.",
        come: "A Jukkasjärvi, a pochi minuti a piedi dall'ICEHOTEL: si abbina alla stessa mezza giornata.",
        quando: "Di giorno, prima o dopo la visita all'ICEHOTEL.",
        tempo: "30 minuti",
        orari: "tutti i giorni 10-15, tutto l'anno",
        lat: 67.84663,
        lng: 20.62125,
        url: "https://kirunalapland.se/en/destinations/jukkasjarvi/",
      },
      {
        nome: "Nutti Sámi Siida e museo Márkanbáiki",
        testo: "Museo all'aperto sulla cultura sami a Jukkasjärvi: vita nomade, storia dell'allevamento delle renne, e renne a cui si dà da mangiare a mano. C'è una capanna-caffè con pranzo sami e un negozio di artigianato.",
        come: "A Jukkasjärvi, accanto alla chiesa; gestito da Nutti Sámi Siida, che organizza anche escursioni con le slitte trainate dalle renne.",
        quando: "Inverno: d'estate quasi tutta la mandria è in montagna e al museo restano poche renne.",
        tempo: "1-2 ore",
        orari: "museo tutti i giorni 10-16; il 24 dicembre 10-14",
        lat: 67.84698,
        lng: 20.62,
        url: "https://nutti.se",
      },
      {
        nome: "Municipio Kristallen e nuovo centro",
        testo: "Il municipio Kristallen, inaugurato nel 2018, è stato il primo edificio del nuovo centro, circa tre chilometri a est della vecchia Kiruna. Intorno stanno nascendo isolati, un centro culturale, un impianto termale e le scuole: è qui che si capisce il trasloco della città.",
        come: "A piedi dalla chiesa o dall'Elite Hotel Frost, tutti nello stesso quartiere.",
        quando: "Di giorno; d'inverno nella finestra di luce di metà giornata.",
        tempo: "1 ora",
        lat: 67.849,
        lng: 20.30277,
        url: "https://kirunalapland.se/en/city-transformation/",
      },
      {
        nome: "Luossavaara",
        testo: "La collina a nord della città, con le piste da sci di Luossabacken e i sentieri. Dall'alto si vedono il vecchio e il nuovo centro e, di fronte, la montagna della miniera.",
        come: "In auto o in taxi fino alla base delle piste; d'inverno con lo skilift o con le ciaspole.",
        quando: "Al tramonto o nelle notti limpide, lontano dalle luci del centro.",
        tempo: "1-2 ore",
        lat: 67.87273,
        lng: 20.21002,
      },
      {
        nome: "Elite Hotel Frost e spa",
        testo: "La spa nel nostro albergo di Kiruna, ideale per recuperare dopo le giornate nel freddo di Abisko.",
        come: "Nel nuovo centro di Kiruna.",
        quando: "Sera, dopo il rientro da Abisko.",
        tempo: "2 ore",
        lat: 67.84956,
        lng: 20.30609,
        consiglio: "Una delle esperienze che meritano dopo la fase più fredda.",
      },
    ],
    sapori: [
      {
        nome: "Renna",
        testo: "Renskav (carne di renna a fettine con purè e mirtilli rossi), il piatto tipico del Nord."
      },
      {
        nome: "Camemoro (hjortron)",
        testo: "Frutti arancio tipici della Lapponia, in marmellata o con gelato."
      },
      {
        nome: "Salmerino alpino",
        testo: "Pesce d'acqua dolce servito affumicato o alla piastra."
      }
    ],
    attenzioni: [
      "In inverno la temperatura può scendere sotto -30 gradi: abbigliamento tecnico a strati, non cotone.",
      "La miniera e l'ICEHOTEL si prenotano in anticipo nei mesi di punta.",
      "L'aurora non è garantita: prevedere più sere in zona."
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina nel nuovo centro: chiesa di Kiruna (da fuori) e municipio Kristallen",
          "Pranzo in centro",
          "Pomeriggio a Jukkasjärvi con il bus 501: ICEHOTEL, chiesa di Jukkasjärvi e museo Márkanbáiki",
          "Sera alla spa dell'Elite Hotel Frost o a caccia di aurora fuori città",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: tour della miniera LKAB (3 ore, da prenotare)",
          "Pomeriggio sulla collina di Luossavaara per la vista sulla città",
          "Sera con un'uscita guidata per l'aurora",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: treno per Abisko, circa un'ora e un quarto",
          "Canyon dell'Abiskojåkka nelle ore di luce e sera all'Aurora Sky Station",
        ],
      },
    ],
    zone: [
      {
        nome: "Nuovo centro di Kiruna",
        perChi: "chi vuole ristoranti, negozi e il bus per l'aeroporto a due passi",
        testo: "Qui ci sono l'Elite Hotel Frost e gli altri hotel di città, vicino alla chiesa e al municipio. Comodo per la miniera e per gli spostamenti in bus.",
        fascia: "110-180 €",
      },
      {
        nome: "Jukkasjärvi",
        perChi: "chi vuole dormire all'ICEHOTEL o vicino al fiume Torne",
        testo: "Il villaggio dell'ICEHOTEL, a circa 20 km: camere calde tutto l'anno e camere di ghiaccio da dicembre ad aprile. La sera ci sono poche alternative per cenare oltre all'hotel.",
        fascia: "150-350 € (camera di ghiaccio da 3.995 SEK per 2)",
      },
      {
        nome: "Kurravaara e campi per l'aurora",
        perChi: "chi cerca buio vero e cabine con vista",
        testo: "Piccoli campi e cabine fuori città, lontano dalle luci, pensati per guardare il cielo dalla porta di casa. Serve un'auto o il transfer della struttura.",
        fascia: "200-250 €",
      },
    ],
    gite: [
      {
        nome: "Abisko",
        distanza: "circa 1 ora e un quarto in treno, 96 km",
        come: "Treno sulla linea per Narvik fino alla fermata Abisko Turiststation; in auto sulla E10.",
        testo: "Il parco nazionale con il microclima secco, l'Aurora Sky Station sul monte Nuolja e il lago Torneträsk: è il motivo del viaggio, e merita almeno due notti.",
      },
      {
        nome: "Jukkasjärvi",
        distanza: "circa 20 km, 20 minuti",
        come: "Bus 501 di Länstrafiken Norrbotten o auto.",
        testo: "ICEHOTEL, chiesa del Settecento e museo sami nella stessa mezza giornata.",
      },
      {
        nome: "Nikkaluokta e Kebnekaise",
        distanza: "circa 70 km in auto",
        come: "In auto o con il bus estivo fino a Nikkaluokta; da lì sentiero verso la stazione di montagna di Kebnekaise.",
        testo: "La porta d'accesso alla montagna più alta della Svezia. È una gita estiva: d'inverno la zona si raggiunge solo con le motoslitte e le guide.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Kiruna?",
        risposta: "Un giorno basta per il centro e Jukkasjärvi; con due si aggiunge la miniera LKAB, che si visita solo in alcuni giorni. Chi va ad Abisko di solito dorme a Kiruna all'andata e al ritorno.",
      },
      {
        domanda: "Meglio Kiruna o Abisko come base per l'aurora?",
        risposta: "Abisko, per il microclima secco e il buio del parco. Kiruna è più comoda per voli e servizi: si può fare una notte qui e due o tre ad Abisko.",
      },
      {
        domanda: "Serve prenotare la visita alla miniera LKAB?",
        risposta: "Sì, i tour si prenotano online sul sito di Kiruna Lapland e partono dal Kiruna Tourist Center. Giorni e lingue cambiano con la stagione e d'inverno i posti finiscono presto.",
      },
      {
        domanda: "Si può visitare l'ICEHOTEL senza dormirci?",
        risposta: "Sì, con il biglietto di giorno: 325 SEK per gli adulti fino a dicembre 2026. Si paga solo con carta.",
      },
      {
        domanda: "Come si va da Kiruna all'ICEHOTEL?",
        risposta: "Con il bus 501 di Länstrafiken Norrbotten, in auto o in taxi: sono circa 20 km. Nel fine settimana le corse sono poche, conviene controllare l'orario su ltnbd.se.",
      },
      {
        domanda: "La chiesa di Kiruna è aperta?",
        risposta: "No: è stata spostata nel nuovo centro nell'agosto 2025 e l'interno resta chiuso fino alla riapertura prevista nel 2027. Da fuori si vede sempre.",
      },
    ],
    esperienzeSlugs: ['icehotel-jukkasjarvi', 'miniera-lkab-kiruna'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Chiesa di legno rossa di Kiruna sotto un cielo invernale svedese',
    immagine: '/images/svezia/kiruna-stock.jpg',
  },
  {
    slug: 'abisko',
    paeseSlug: 'svezia',
    ordine: 3,
    nome: 'Abisko',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 notti, cuore del viaggio',
    visitataPersonalmente: true,
    introduzione: 'Il motivo del viaggio: un parco nazionale con un microclima secco che ne fa uno dei posti migliori al mondo per vedere l\'aurora boreale, e la base per motoslitta, husky sledding e la Aurora Sky Station.',
    percheAndarci: 'Prima di tutto per l\'aurora boreale. Poi per la natura artica del parco nazionale e per le due attività più adrenaliniche del viaggio.',
    cosaVedere: [
      'La vista dalla Aurora Sky Station, in cima al monte Nuolja',
      'Il lago ghiacciato del parco nazionale',
    ],
    cosaFare: [
      'Aurora Sky Station: seggiovia e cena panoramica (vedi la scheda esperienza dedicata)',
      'Motoslitta sul lago ghiacciato (vedi la scheda esperienza dedicata)',
      'Husky sledding con caccia all\'aurora (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Ho dormito allo STF Abisko Turiststation, la storica stazione di montagna dentro il parco nazionale, da cui si parte direttamente per la seggiovia della Aurora Sky Station. È essenziale, ma immersa nel parco ha un\'atmosfera che altrove non ho trovato.',
    doveMangiare: 'Non ho locali da segnalare: le colazioni sono spesso incluse nelle strutture STF, pranzi e cene nella media che avevo messo in conto (30-50€ a pasto).',
    comeArrivare: "Da Kiruna si arriva in treno sulla linea per Narvik, circa un'ora e un quarto in un paesaggio sempre più spoglio: ad Abisko ci sono due fermate, Abisko Östra per il paese e Abisko Turiststation, quella giusta per la stazione STF, il naturum e la seggiovia. Ci sono anche treni SJ diretti da Stoccolma. In auto sono circa 96 km da Kiruna sulla E10; dall'aeroporto di Kiruna conviene il treno o un transfer.",
    comeSpostarsi: 'A piedi nel villaggio; escursioni organizzate per motoslitta e husky.',
    periodoMigliore: 'da fine dicembre a marzo; febbraio-marzo costa molto meno pur mantenendo alte probabilità di aurora',
    costi: "Attività, prezzo indicativo a persona: Aurora Sky Station con visita serale guidata da 1.295 SEK (circa 120€) e cena in quota da 2.395 SEK (circa 215€), listino STF della stagione 2026-27; solo seggiovia da 260 SEK (circa 23 €); motoslitta guidata sul lago ghiacciato circa 100-110€ (self-drive 150-250€); husky sledding serale con caccia all'aurora 240€ (versioni diurne più brevi da 70€). Costi dell'intero viaggio per persona: voli 600-645€, alloggi 400-600€, trasporti interni 80€ (treno panoramico + transfer aeroportuale), escursioni 450-500€ per 3 tour con guida. Budget totale indicativo da 1.500€ (base) a 1.800€ (livello ottimo). Al giorno, a persona: circa 80-120 € con camera semplice alla STF e pasti semplici; 200-300 € con una o due attività guidate; oltre 400 € con la cena in quota e il self-drive in motoslitta.",
    erroriDaEvitare: [
      'Andare a Capodanno se l\'obiettivo è risparmiare: è il periodo più caro dell\'anno per volare e dormire in zona',
      'Non tenere un margine extra sui trasporti: con il freddo estremo i treni a volte vengono cancellati (non spesso, ma succede), e in quei casi i taxi della zona tendono ad alzare un po\' i prezzi',
    ],
    miaEsperienza:
      'Abisko è stato il cuore del viaggio: la cena in quota alla Aurora Sky Station, la motoslitta sul lago ghiacciato e l\'husky sledding sotto un cielo che a un certo punto si è acceso sul serio. Sono i ricordi più forti della settimana.',
    luoghi: [
      {
        nome: "Aurora Sky Station",
        testo: "Una stazione in cima al monte Nuolja, a 900 metri, raggiungibile con 20 minuti di seggiovia, da cui si osserva l'aurora in uno dei posti più sereni di Svezia. C'è anche una cena panoramica.",
        come: "Seggiovia dalla STF Abisko Turiststation. Due formule da prenotare in anticipo, con posti limitati: Night Visit (guida, seggiovia andata e ritorno, tuta e scarponi termici) e Northern Lights Dinner.",
        quando: "Stagione 2026-27 dal 19 ottobre al 27 marzo; con vento forte la seggiovia si ferma.",
        tempo: "3-4 ore",
        costo: "Night Visit da 1.295 SEK, cena da 2.395 SEK a persona (stagione 2026-27, listino STF); solo seggiovia da 260 SEK",
        orari: "inverno 2026-27 dalle 20:30 all'1:00; estate 2026 di giorno 9:30-16 (12 giugno-20 settembre) e di sera 20-1:30 (12 giugno-19 luglio)",
        lat: 68.36169,
        lng: 18.72341,
        url: "https://www.auroraskystation.se",
        consiglio: "Ho cenato lassù: è tra i ricordi più forti della settimana.",
      },
      {
        nome: "Lago ghiacciato Torneträsk e motoslitta",
        testo: "Il grande lago di Abisko, lungo 70 km, di solito resta ghiacciato da dicembre a giugno e si percorre in motoslitta con una guida, anche di sera sotto l'aurora.",
        come: "Escursione con operatore locale, partenza da Abisko: in slitta trainata con la guida alla motoslitta, oppure in self-drive con la patente.",
        quando: "Inverno, quando il lago è ghiacciato: date con l'operatore.",
        tempo: "2-3 ore",
        costo: "guidata circa 100-110 € (2 ore); self-drive 150-250 € (mezza giornata)",
        lat: 68.367,
        lng: 19.1,
        consiglio: "Servono abiti caldi; requisiti per guidare sul sito dell'operatore. Ci si ferma spesso a guardare il cielo.",
      },
      {
        nome: "Husky sledding",
        testo: "Guidare una slitta con cani husky nei dintorni di Abisko, con una sosta per il tè e la caccia all'aurora.",
        come: "Prenotazione con operatore locale; ritiro alla STF Abisko Turiststation, dove conviene essere 45 minuti prima.",
        quando: "Inverno, con la neve.",
        tempo: "mezza giornata",
        costo: "uscita serale con caccia all'aurora 240 €; versioni di giorno più brevi da 70 €",
        consiglio: "Sotto l'aurora è un'emozione che resta.",
      },
      {
        nome: "Parco nazionale di Abisko e Lapporten",
        testo: "Il parco ai piedi delle montagne, con la valle a U di Lapporten, la «porta della Lapponia», sullo sfondo. Le precipitazioni sono di soli 300 millimetri l'anno, ed è questo che rende il cielo così spesso sereno.",
        come: "Treno da Kiruna fino alla stazione di Abisko Turiststation; il naturum e la stazione STF sono a circa 800 metri.",
        quando: "Estate per il trekking, inverno per l'aurora.",
        tempo: "giornata intera",
        costo: "ingresso al parco libero",
        lat: 68.26622,
        lng: 18.98619,
        url: "https://www.sverigesnationalparker.se/en/parks/abisko-national-park/",
        consiglio: "I sentieri sono sempre aperti, ma in inverno servono ramponcini o ciaspole.",
      },
      {
        nome: "Canyon dell'Abiskojåkka",
        testo: "Il fiume che scende dal lago Abiskojaure al Torneträsk scava una gola stretta a pochi minuti dalla stazione STF. È la passeggiata più facile del parco, con un tratto di sentiero accessibile e un'area di sosta.",
        come: "A piedi dal naturum o dalla STF Abisko Turiststation; d'inverno i ramponcini aiutano sul ghiaccio.",
        quando: "Nelle ore di luce; d'inverno la finestra di metà giornata.",
        tempo: "1 ora",
        costo: "libero",
        lat: 68.36389,
        lng: 18.7875,
      },
      {
        nome: "Naturum Abisko",
        testo: "Il centro visite del parco: una mostra su geologia, flora e fauna e sugli effetti del clima che cambia sulla montagna, con guide naturalistiche, una piccola biblioteca e un negozio. Al piano di sopra ci sono mostre temporanee e proiezioni.",
        come: "Accanto alla STF Abisko Turiststation, circa 800 metri dalla fermata del treno; fuori c'è un punto informazioni sempre aperto.",
        quando: "Prima di partire per i sentieri.",
        tempo: "1 ora",
        orari: "2026-27: 1-26 settembre martedì-sabato 9-17; 1 dicembre-13 febbraio martedì, giovedì e sabato 14-17; dal 15 febbraio stessi giorni 13-17",
        lat: 68.35812,
        lng: 18.78489,
        url: "https://www.lansstyrelsen.se/norrbotten/besoksmal/naturum-i-norrbottens-lan/naturum-abisko.html",
      },
      {
        nome: "Kungsleden",
        testo: "Il «sentiero del re», lungo 425 km, comincia proprio alla STF Abisko Turiststation e sale lungo il fiume Abiskojåkka. Anche senza fare il trekking intero, i primi chilometri sono una bella passeggiata tra le betulle.",
        come: "Partenza a piedi dalla stazione STF; nel negozio si noleggia l'attrezzatura.",
        quando: "Da fine giugno a settembre per camminare; d'inverno il primo tratto si fa con le ciaspole o lo sci.",
        tempo: "da 2 ore a più giorni",
        costo: "libero",
        lat: 68.35738,
        lng: 18.78247,
        url: "https://www.swedishtouristassociation.com/facilities/stf-abisko-mountain-station/",
      },
      {
        nome: "Monte Nuolja e il sole di mezzanotte",
        testo: "D'estate il Nuolja diventa il posto per vedere il sole di mezzanotte: da inizio giugno ad Abisko c'è il giorno polare. Si sale in seggiovia o a piedi e si scende camminando.",
        come: "Seggiovia dalla stazione a valle vicino alla STF, oppure sentiero dalla stazione.",
        quando: "Da metà giugno a metà luglio, con la seggiovia serale aperta.",
        tempo: "3-4 ore",
        costo: "seggiovia da 260 SEK, circa 23 €",
        orari: "seggiovia serale 20-1:30 dal 12 giugno al 19 luglio (estate 2026)",
        lat: 68.37256,
        lng: 18.69877,
        url: "https://auroraskystation.se/sommar/linbana-sommar/",
      },
    ],
    sapori: [
      {
        nome: "Cena all'Aurora Sky Station",
        testo: "Menu fisso con ingredienti locali, in cima alla montagna."
      },
      {
        nome: "Colazione STF",
        testo: "Le strutture STF includono spesso la colazione: buffet semplice e abbondante."
      }
    ],
    attenzioni: [
      "Aurora Sky Station e seggiovia possono chiudere con vento forte o tempesta.",
      "Chi guida una motoslitta risponde dei danni: controllare franchigia e assicurazione.",
      "Ad Abisko i servizi sono pochi: portare con sé l'essenziale."
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Arrivo in treno alla fermata Abisko Turiststation",
          "Naturum e canyon dell'Abiskojåkka nelle ore di luce",
          "Cena alla STF e sera all'Aurora Sky Station (Night Visit o cena in quota)",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: motoslitta sul Torneträsk ghiacciato",
          "Sera: husky sledding con caccia all'aurora",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: primo tratto del Kungsleden con le ciaspole, o gita a Björkliden",
          "Sera libera per un'altra caccia all'aurora, se il cielo è sereno",
          "In estate: Lapporten e il sole di mezzanotte dal Nuolja",
        ],
      },
    ],
    zone: [
      {
        nome: "STF Abisko Turiststation",
        perChi: "chi vuole la seggiovia e i sentieri fuori dalla porta",
        testo: "La stazione storica dentro il parco, con camere, ostello, ristorante e negozio con noleggio. È qui che parte il Kungsleden e si prende la seggiovia.",
        fascia: "90-160 €",
      },
      {
        nome: "Abisko Östra",
        perChi: "chi preferisce un lodge o una cabina con cucina",
        testo: "Il paese vero e proprio, circa 4 km a est della stazione STF, con lodge, cabine e qualche ristorante; ha la sua fermata del treno.",
        fascia: "da circa 180 €",
      },
      {
        nome: "Björkliden",
        perChi: "chi vuole un resort di montagna con piste da sci",
        testo: "A circa 9 km da Abisko sulla E10, con hotel, cabine e piste; ha anche il campo da golf più a nord della Svezia.",
      },
    ],
    gite: [
      {
        nome: "Björkliden",
        distanza: "circa 9 km, 10 minuti in auto",
        come: "In auto sulla E10 o in treno, con la sua fermata.",
        testo: "Il villaggio sciistico più vicino, con piste e sentieri sopra il Torneträsk.",
      },
      {
        nome: "Riksgränsen",
        distanza: "circa 36 km, mezz'ora in auto",
        come: "In auto sulla E10 o in treno sulla linea per Narvik.",
        testo: "L'ultimo villaggio svedese prima del confine con la Norvegia, tra montagne e laghi, famoso per lo sci a fine stagione.",
      },
      {
        nome: "Narvik",
        distanza: "circa 77 km, poco più di un'ora in auto",
        come: "Treno sulla linea della ferrovia del ferro o auto sulla E10 oltre il confine.",
        testo: "Il porto norvegese dove finisce la linea che porta il minerale da Kiruna: in un giorno si passa dal lago ghiacciato ai fiordi.",
      },
      {
        nome: "Kiruna e Jukkasjärvi",
        distanza: "circa 1 ora e un quarto in treno fino a Kiruna",
        come: "Treno fino a Kiruna, poi bus 501 per Jukkasjärvi.",
        testo: "L'ICEHOTEL, il museo sami e la città che si sposta per la miniera, da abbinare al rientro.",
      },
    ],
    faq: [
      {
        domanda: "Quante notti servono ad Abisko per vedere l'aurora?",
        risposta: "Almeno due, meglio tre: l'aurora non è garantita e il meteo cambia da una sera all'altra. Con più sere si mette l'attività più cara in quella con il cielo migliore.",
      },
      {
        domanda: "Quando si vede l'aurora ad Abisko?",
        risposta: "Con il buio, quindi da settembre a marzo; l'Aurora Sky Station apre la sera dal 19 ottobre al 27 marzo nella stagione 2026-27. Da inizio giugno c'è il giorno polare e l'aurora non si vede.",
      },
      {
        domanda: "Serve prenotare l'Aurora Sky Station?",
        risposta: "Sì, Night Visit e cena hanno posti limitati e si prenotano online con STF. Con vento forte la seggiovia si ferma.",
      },
      {
        domanda: "A quale fermata del treno si scende?",
        risposta: "Abisko Turiststation per la stazione STF, il naturum e la seggiovia; Abisko Östra per il paese. Sono a circa 4 km l'una dall'altra.",
      },
      {
        domanda: "Abisko merita anche d'estate?",
        risposta: "Sì, per il sole di mezzanotte dal Nuolja, il Kungsleden e i sentieri del parco. La seggiovia d'estate apre di giorno e, da metà giugno a metà luglio, anche la sera.",
      },
      {
        domanda: "Che temperature ci sono d'inverno?",
        risposta: "Spesso tra -20 e -30 °C nelle settimane più fredde, ma è un freddo secco. Servono strati tecnici, sottocasco e guanti doppi, soprattutto in quota e in motoslitta.",
      },
    ],
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Aurora boreale verde sopra le montagne innevate del parco nazionale di Abisko',
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
