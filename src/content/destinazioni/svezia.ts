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
      'Volo internazionale su Stoccolma Arlanda. Per chi arriva come seconda tappa dell\'itinerario «Capitali nordiche», da Copenaghen c\'è il treno diretto SJ (circa 5 ore) o il volo (circa 1 ora).',
    comeSpostarsi: 'Per il solo transito aeroporto-hotel non serve. Per un soggiorno pieno ci sono metro (Tunnelbana), bus e traghetti urbani con biglietto integrato SL; il centro storico si gira bene anche a piedi.',
    periodoMigliore: 'maggio-settembre per il clima e per le uscite in arcipelago, che funzionano meglio con le giornate lunghe',
    costi:
      'Biglietto SL singolo 43 SEK, pass giornaliero 180 SEK. Vasamuseet 195-240 SEK secondo la stagione. ABBA The Museum 269-349 SEK. Gita in arcipelago da circa 375 SEK (circa 33€) per un\'uscita guidata di 2-2,5 ore.',
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
        url: "https://www.vasamuseet.se",
        consiglio: "Prenotare online il biglietto in alta stagione."
      },
      {
        nome: "Stadshuset",
        testo: "Il Municipio in mattoni rossi del 1923 sull'acqua, sede del banchetto dei Premi Nobel nella Sala Blu e con la Sala Dorata coperta da oltre 18 milioni di tessere di mosaico d'oro. La torre è alta 106 metri, con una scala di 365 gradini e un ascensore: dalla cima si vede tutta la città.",
        come: "A piedi dalla stazione; la visita all'interno è solo guidata.",
        quando: "Mattina; orari dei tour e della torre sul sito ufficiale, dove si comprano i biglietti.",
        tempo: "1 ora",
        url: "https://stadshuset.stockholm",
        consiglio: "Controllare orari e disponibilità dei tour sul sito prima di andare."
      },
      {
        nome: "Skansen e Djurgården",
        testo: "Il più antico museo all'aperto della Svezia, aperto nel 1891, con case storiche da tutta la Svezia, animali nordici e artigiani in costume. Sull'isola ci sono anche ABBA The Museum e il parco Gröna Lund.",
        come: "Tram 7 o traghetto dal centro. Il biglietto copre il parco, non le attrazioni a parte.",
        quando: "Primavera ed estate; in inverno ci sono mercatini di Natale.",
        tempo: "3-4 ore",
        url: "https://www.skansen.se",
        consiglio: "Salire sul colle per la vista sulla città; a dicembre c'è il mercatino di Natale."
      },
      {
        nome: "Palazzo di Drottningholm",
        testo: "Dal 1981 il re e la regina vivono nell'ala sud; il resto è aperto al pubblico. Patrimonio UNESCO dal 1991, ha giardini barocchi e un teatro del Settecento ancora in uso, con un festival d'opera d'estate.",
        come: "Sull'isola di Lovön, fuori città; come arrivarci con i mezzi pubblici sul sito ufficiale.",
        quando: "Primavera ed estate, per i giardini.",
        tempo: "mezza giornata",
        url: "https://www.kungligaslotten.se",
        consiglio: "Lasciare tempo per i giardini: sono la parte più piacevole della visita."
      },
      {
        nome: "Arcipelago di Stoccolma",
        testo: "Decine di migliaia di isole e isolotti che si aprono a est della città verso il Baltico. Il battello di linea porta a Vaxholm, Grinda o Sandhamn, con sentieri, spiagge di roccia e piccoli caffè.",
        come: "Battelli di linea dal centro; biglietti e orari sul sito di Waxholmsbolaget.",
        quando: "Maggio-settembre, con le giornate lunghe.",
        tempo: "giornata intera",
        url: "https://www.waxholmsbolaget.se",
        consiglio: "Per chi ha poco tempo, le isole Fjäderholmarna sono vicine al centro."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Gamla Stan e Palazzo Reale",
          "Pranzo con fika a Gamla Stan",
          "Pomeriggio: Museo Vasa",
          "Sera: passeggiata a Södermalm"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Stadshuset",
          "Skansen e Djurgården",
          "Cena a Östermalm"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Drottningholm o arcipelago in battello"
        ]
      }
    ],
    zone: [
      {
        nome: "Gamla Stan",
        perChi: "Chi vuole il fascino del centro storico",
        testo: "Vicoli di ciottoli e locali, ma camere piccole e caro. Rumore di sera nelle vie principali."
      },
      {
        nome: "Norrmalm (vicino alla stazione)",
        perChi: "Chi ha poco tempo o parte presto",
        testo: "Comodo per i treni e l'aeroporto. Poca atmosfera, molti uffici."
      },
      {
        nome: "Södermalm",
        perChi: "Chi cerca bar e quartieri giovani",
        testo: "Un'isola con ristoranti, vecchi pub e vista dal Fjällgatan; a pochi minuti in metro dal centro."
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
    comeArrivare: 'Volo interno da Stoccolma Arlanda; poi treno panoramico per Abisko.',
    comeSpostarsi: 'A piedi in centro; treno per Abisko.',
    periodoMigliore: 'lo stesso di Abisko: da fine dicembre a marzo per l\'aurora, con febbraio-marzo molto più economici',
    costi:
      'Il centro si visita gratis; la chiesa è chiusa fino alla riapertura prevista nel 2027. La miniera LKAB costa circa 590 SEK (52€) a persona per il tour guidato di 3 ore. L\'ICEHOTEL costa 349 SEK (31€) solo ingresso di giorno, da 3.995 SEK (350€) a notte per 2 persone per dormirci. Doppia in hotel di fascia media in città: indicativamente 100-150€/notte.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Kiruna per me è stata una base pratica più che una meta: all\'andata l\'essenzialità dello STF, al ritorno la spa dell\'Elite Hotel Frost, e sullo sfondo la chiesa rossa e il centro in trasformazione.',
    luoghi: [
      {
        nome: "Chiesa di Kiruna",
        testo: "Chiesa in legno rossa del 1912 di Gustaf Wickman, considerata una delle più grandi costruzioni di legno della Svezia. Il 19 e 20 agosto 2025 è stata trasportata intera per circa 5 km, su carrelli comandati a distanza, fino al nuovo centro, tra il cimitero e la nuova piazza, per via dell'espansione della miniera. All'interno sono in corso i lavori di sistemazione: la riapertura è prevista nel 2027.",
        come: "Nel nuovo centro di Kiruna, a piedi; per ora si vede solo da fuori.",
        costo: "chiusa al pubblico fino alla riapertura prevista nel 2027",
        url: "https://www.svenskakyrkan.se/kiruna",
        quando: "Giorno, con luce diurna d'inverno breve.",
        tempo: "30 minuti-1 ora",
        consiglio: "Il nuovo centro è in costruzione: un'occasione di vedere una città che si sposta."
      },
      {
        nome: "Miniera di ferro LKAB",
        testo: "La più grande e moderna miniera di ferro sotterranea del mondo; il tour guidato, di circa 3 ore, scende al centro visitatori dell'LKAB a 540 metri di profondità e spiega perché Kiruna sta traslocando.",
        come: "Tour guidato di Kiruna Lapland con bus dal Kiruna Tourist Center (Malmvägen 9B); giorni e lingue cambiano con la stagione.",
        quando: "Tutto l'anno; i posti finiscono presto in inverno.",
        tempo: "3 ore",
        costo: "590 SEK adulti (2026), con trasferimento, guida e caffè",
        url: "https://kirunalapland.se/en/mine-tour/",
        consiglio: "Portare abiti caldi: sotto terra la temperatura è bassa."
      },
      {
        nome: "ICEHOTEL a Jukkasjärvi",
        testo: "L'hotel di ghiaccio rifatto ogni inverno con sculture e suite a tema. Si visita anche senza dormirci e c'è l'ICEBAR; le stanze di ghiaccio ci sono da dicembre ad aprile, mentre l'Art Suite 365 resta aperta tutto l'anno.",
        come: "A Jukkasjärvi, poco fuori Kiruna, in auto o bus.",
        quando: "Da dicembre ad aprile.",
        tempo: "1-2 ore",
        url: "https://www.icehotel.com",
        consiglio: "Anche chi non dorme lì può visitare le sale e il bar."
      },
      {
        nome: "Elite Hotel Frost e spa",
        testo: "La spa nel nostro albergo di Kiruna, ideale per recuperare dopo le giornate nel freddo di Abisko.",
        come: "In centro a Kiruna.",
        quando: "Sera, dopo il rientro da Abisko.",
        tempo: "2 ore",
        consiglio: "Una delle esperienze che meritano dopo la fase più fredda."
      }
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
    comeArrivare: 'Treno panoramico da Kiruna: poco più di un\'ora in un paesaggio sempre più spoglio.',
    comeSpostarsi: 'A piedi nel villaggio; escursioni organizzate per motoslitta e husky.',
    periodoMigliore: 'da fine dicembre a marzo; febbraio-marzo costa molto meno pur mantenendo alte probabilità di aurora',
    costi:
      'Attività, prezzo indicativo a persona: Aurora Sky Station con visita serale guidata da 1.295 SEK (circa 120€) e cena in quota da 2.395 SEK (circa 215€), listino STF della stagione 2026-27; motoslitta guidata sul lago ghiacciato circa 100-110€ (self-drive 150-250€); husky sledding serale con caccia all\'aurora 240€ (versioni diurne più brevi da 70€). Costi dell\'intero viaggio per persona: voli 600-645€, alloggi 400-600€, trasporti interni 80€ (treno panoramico + transfer aeroportuale), escursioni 450-500€ per 3 tour con guida. Budget totale indicativo da 1.500€ (base) a 1.800€ (livello ottimo).',
    erroriDaEvitare: [
      'Andare a Capodanno se l\'obiettivo è risparmiare: è il periodo più caro dell\'anno per volare e dormire in zona',
      'Non tenere un margine extra sui trasporti: con il freddo estremo i treni a volte vengono cancellati (non spesso, ma succede), e in quei casi i taxi della zona tendono ad alzare un po\' i prezzi',
    ],
    miaEsperienza:
      'Abisko è stato il cuore del viaggio: la cena in quota alla Aurora Sky Station, la motoslitta sul lago ghiacciato e l\'husky sledding sotto un cielo che a un certo punto si è acceso sul serio. Sono i ricordi più forti della settimana.',
    luoghi: [
      {
        nome: "Aurora Sky Station",
        testo: "Una stazione in cima al monte Nuolja, raggiungibile con una seggiovia, da cui si osserva l'aurora in uno dei posti più sereni di Svezia. C'è anche una cena panoramica.",
        come: "Seggiovia dalla STF Abisko Turiststation. Due formule da prenotare in anticipo, con posti limitati: Night Visit (guida, seggiovia andata e ritorno, tuta e scarponi termici) e Northern Lights Dinner.",
        quando: "Stagione 2026-27 dal 19 ottobre al 27 marzo, dalle 20:30 all'1:00; con vento forte la seggiovia si ferma.",
        tempo: "3-4 ore",
        costo: "Night Visit da 1.295 SEK, cena da 2.395 SEK a persona (stagione 2026-27, listino STF)",
        url: "https://www.auroraskystation.se",
        consiglio: "Ho cenato lassù: è tra i ricordi più forti della settimana."
      },
      {
        nome: "Lago ghiacciato Torneträsk e motoslitta",
        testo: "Il grande lago di Abisko ghiaccia in inverno e si percorre in motoslitta con una guida, anche di sera sotto l'aurora.",
        come: "Escursione con operatore locale, partenza da Abisko.",
        quando: "Inverno, quando il lago è ghiacciato: date con l'operatore.",
        tempo: "2-3 ore",
        consiglio: "Servono abiti caldi; requisiti per guidare sul sito dell'operatore. Ci si ferma spesso a guardare il cielo."
      },
      {
        nome: "Husky sledding",
        testo: "Guidare una slitta con cani husky nei dintorni di Abisko, con una sosta per il tè e la caccia all'aurora.",
        come: "Prenotazione con operatore locale; trasferimento in minibus.",
        quando: "Inverno, con la neve.",
        tempo: "mezza giornata",
        consiglio: "Sotto l'aurora è un'emozione che resta."
      },
      {
        nome: "Parco nazionale di Abisko e Lapporten",
        testo: "Il parco ai piedi delle montagne, con la valle a U di Lapporten, la «porta della Lapponia», sullo sfondo. La stazione turistica STF è la base per i sentieri.",
        come: "Treno da Kiruna fino alla stazione di Abisko Turiststation.",
        quando: "Estate per il trekking, inverno per l'aurora.",
        tempo: "giornata intera",
        costo: "ingresso al parco libero",
        consiglio: "I sentieri sono sempre aperti, ma in inverno servono ramponcini o ciaspole."
      }
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
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Aurora boreale verde sopra le montagne innevate del parco nazionale di Abisko',
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
