import type { Destinazione } from '@/lib/types'

// Prima uscita olandese dell'archivio, collegata al viaggio "Amsterdam in un
// weekend lungo" (src/content/viaggi/58-amsterdam-weekend.md, dati in
// src/content/viaggi-dati/amsterdam-weekend.ts), viaggio fatto da Rick. Un'unica
// destinazione: Amsterdam stessa, visitataPersonalmente true; il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore.
// Nessun nome di hotel, ristorante o operatore è stato inventato. Prezzi e
// orari (soprattutto quelli della Casa di Anna Frank) cambiano spesso e vanno
// riverificati sui canali ufficiali prima di partire.

export const destinazioniPaesiBassi: Destinazione[] = [
  {
    slug: 'amsterdam',
    paeseSlug: 'paesi-bassi',
    ordine: 1,
    nome: 'Amsterdam',
    tipologia: ['città', 'arte', 'storia'],
    giorniConsigliati: '3-4 giorni per il centro storico, l\'anello dei canali e i musei principali',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato con amici per quattro giorni, tre notti: l'anello dei canali e Jordaan, la Casa di Anna Frank, il Rijksmuseum e il Van Gogh Museum. L'ultimo giorno abbiamo noleggiato una bici e girato la città fermandoci dove capitava.",
    introduzione:
      'La capitale dei Paesi Bassi, costruita su una rete di canali concentrici scavati a partire dal Seicento, nell\'età dell\'oro olandese. Il Grachtengordel (l\'anello dei canali), con le tipiche case a schiera strette e alte affacciate sull\'acqua, è Patrimonio UNESCO dal 2010. È una città compatta, quasi piatta, da girare a piedi o, più spesso, in bicicletta.',
    percheAndarci:
      'In un\'area che in bici si attraversa in mezz\'ora ci sono alcuni dei musei più importanti d\'Europa (Rijksmuseum, Van Gogh Museum), un luogo della memoria da visitare preparati come la Casa di Anna Frank e un intero quartiere di canali patrimonio dell\'umanità. E c\'è una cultura urbana che altrove non si trova così: la bicicletta come mezzo di trasporto principale, non come attività per turisti.',
    cosaVedere: [
      'Il Grachtengordel, l\'anello dei canali seicenteschi (Herengracht, Keizersgracht, Prinsengracht) patrimonio UNESCO, con le case a schiera e i tipici gable, i frontoni decorati che un tempo indicavano il mestiere o la ricchezza del proprietario',
      'La Casa di Anna Frank (Anne Frank Huis), sul Prinsengracht, l\'edificio dove la famiglia Frank si nascose dal 1942 al 1944: i biglietti si esauriscono con settimane di anticipo e vanno prenotati online sul sito ufficiale',
      'Il Rijksmuseum, il museo nazionale con la più grande collezione di arte e storia olandese al mondo, dalla Ronda di notte di Rembrandt in poi',
      'Il Van Gogh Museum, la più grande collezione al mondo di opere di Vincent van Gogh, ordinata in gran parte cronologicamente',
      'Jordaan, l\'ex quartiere operaio a ovest del centro, oggi tra le zone più vissute della città, con stradine strette, hofjes (piccoli cortili interni, un tempo case di carità) e un\'atmosfera più residenziale del centro storico',
      'Il Quartiere a Luci Rosse (De Wallen), nel cuore medievale della città: un\'area a luci rosse regolamentata da secoli, da attraversare senza fotografare',
      'Dam Square, la piazza centrale con il Palazzo Reale e il Monumento Nazionale',
    ],
    cosaFare: [
      'Noleggiare una bicicletta e spostarsi come gli amsterdammer: è il modo più naturale di vivere la città, ma bisogna imparare in fretta le regole base (vedi la scheda esperienza dedicata)',
      'Una crociera sui canali, di giorno o al tramonto, per vedere l\'anello del Grachtengordel dall\'acqua invece che dai ponti',
      'Camminare per Jordaan senza una meta precisa, tra hofjes e piccoli negozi',
      'Attraversare il Quartiere a Luci Rosse con lo stesso passo di qualunque altra zona della città, senza fermarsi a fotografare le vetrine né le persone che ci lavorano: in molte aree è vietato per legge, e in ogni caso è una questione di rispetto elementare',
      'Se il tempo lo consente, visitare uno dei musei minori: il Museo Van Loon o il Museo Willet-Holthuysen, due case-museo di canale che mostrano come si viveva in queste case',
    ],
    doveDormire:
      'Il Grachtengordel (l\'anello dei canali) è la zona più centrale e caratteristica, comoda a piedi per quasi tutto; Jordaan, appena a ovest, è l\'alternativa più residenziale e spesso un po\' più economica, a dieci minuti a piedi dal cuore del centro storico.',
    doveMangiare:
      'Le bitterballen (polpette fritte ripiene, tipico snack da bar) con una birra olandese; l\'haring (aringa cruda marinata, servita a pezzi con cipolla tritata) dai chioschi di strada; lo stroopwafel, la cialda ripiena di sciroppo di caramello, meglio appena fatto e ancora caldo dai banchetti del mercato; la rijsttafel, il «tavolo di riso» con decine di piccoli piatti in stile indonesiano, eredità del passato coloniale olandese e oggi parte della cucina della città.',
    comeArrivare:
      "L'aeroporto di Schiphol (AMS) è a circa 15 km dal centro. Il treno NS arriva alla Stazione Centrale in 15-20 minuti, circa 6-7 €, con corse ogni pochi minuti e una all'ora anche di notte; si paga con la carta contactless ai tornelli, ricordando il check-out all'uscita. Il bus 397 va a Museumplein e Leidseplein in circa 30 minuti (circa 6,50 €); il taxi dalla fila ufficiale costa circa 50-60 €. Dall'Italia si arriva quasi sempre in aereo: non c'è un treno diretto comodo.",
    comeSpostarsi: 'In centro bicicletta o piedi; per il resto della città tram, bus e metro GVB, che si pagano anche con carta contactless direttamente sui mezzi. Auto sconsigliata: in centro il traffico è scoraggiato e il parcheggio caro e scarso.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e molto affollata; novembre-marzo è freddo e spesso piovoso ma gestibile, con i mercatini di Natale a dicembre',
    costi: "Città cara. Budget basso circa 90-120 € al giorno a persona (ostello o hotel fuori centro, cibo da mercati e supermercati, un museo); medio 180-250 € (hotel di fascia media in doppia, due musei, cene in ristorante); alto da 350 € in su (hotel sui canali, ristoranti di livello, tour privati). Musei principali circa 25 € l'uno, noleggio bici 10-20 € al giorno.",
    erroriDaEvitare: [
      'Arrivare senza aver prenotato online la Casa di Anna Frank: i biglietti si esauriscono con settimane di anticipo e non si comprano più alla cassa',
      'Camminare o fermarsi distratti sulle piste ciclabili (l\'asfalto rosso, distinto dal marciapiede): in tutta la città è la causa più comune di incidenti e discussioni con i turisti',
      'Dare per scontato di poter pagare in contanti ovunque: molti locali accettano solo carta o contactless',
      'Fotografare le vetrine o le persone che lavorano nel Quartiere a Luci Rosse: è vietato in gran parte dell\'area e culturalmente molto mal visto',
      'Sottovalutare le code al Rijksmuseum e al Van Gogh Museum in alta stagione: conviene prenotare online in anticipo i biglietti con fascia oraria',
    ],
    luoghi: [
      {
        nome: "Rijksmuseum",
        testo: "Il museo nazionale olandese, con la Ronda di notte di Rembrandt, i Vermeer e le navi in miniatura. L'edificio ha un giardino gratuito con sculture e una piazza dove si fanno le foto.",
        come: "Sul Museumplein. Conviene prenotare online l'orario d'ingresso; in cassa si vende solo se resta posto.",
        quando: "Tutti i giorni 9-17, festivi compresi; mattina presto o pomeriggio tardi per evitare la ressa davanti alla Ronda di notte.",
        tempo: "3 ore",
        costo: "25 € adulti (2026), gratuito fino a 18 anni",
        orari: "Tutti i giorni 9-17, festivi compresi (2026)",
        lat: 52.36,
        lng: 4.8853,
        url: "https://www.rijksmuseum.nl",
        consiglio: "Cominciare dal piano degli Anni d'oro: in un'ora si vedono le sale più importanti.",
      },
      {
        nome: "Museo Van Gogh",
        testo: "Una grandissima raccolta di opere di Van Gogh, tra dipinti, disegni e lettere, dai Mangiatori di patate (1885) ai Girasoli (1889). Si segue l'evoluzione dell'artista.",
        come: "Sul Museumplein, accanto al Rijksmuseum. Biglietti sul sito ufficiale.",
        quando: "Mattina presto, con biglietto già acquistato.",
        tempo: "2 ore",
        costo: "25 € adulti, gratuito sotto i 18 anni ma con prenotazione (2026; 26 € dal 1° gennaio 2027)",
        orari: "Tutti i giorni dalle 9; chiusura alle 17 o alle 18 secondo il periodo, il venerdì quasi sempre fino alle 21 (2026)",
        lat: 52.3583,
        lng: 4.8811,
        url: "https://www.vangoghmuseum.nl",
        consiglio: "Comprare il biglietto in anticipo, soprattutto nei weekend.",
      },
      {
        nome: "Casa di Anne Frank",
        testo: "L'alloggio segreto dove Anne Frank e la famiglia si nascosero per oltre due anni, dal 1942 al 1944, nel retro dell'edificio della ditta del padre, Prinsengracht 263. Il percorso è stretto e silenzioso.",
        come: "I biglietti si vendono solo online sul sito ufficiale: ogni martedì alle 10 escono quelli per le visite di sei settimane dopo. All'ingresso non si vendono.",
        quando: "Prenotare appena si decidono le date.",
        tempo: "1-1,5 ore",
        costo: "16,50 € adulti, con 1 € di commissione (sito ufficiale, 2026)",
        orari: "Tutti i giorni 9-22, salvo eccezioni indicate sul sito (2026)",
        lat: 52.37516,
        lng: 4.88408,
        url: "https://www.annefrank.org",
        consiglio: "Diffidare dei rivenditori: il sito ufficiale è l'unico affidabile.",
      },
      {
        nome: "Canali del Seicento",
        testo: "L'anello dei canali (Grachtengordel) è patrimonio UNESCO dal 2010, con case a timpano, ponti e barche. I tratti più belli sono Prinsengracht, Keizersgracht e Herengracht.",
        come: "A piedi, con battello o con noleggio di barca; meglio a piedi.",
        quando: "Sera, con le luci sull'acqua.",
        tempo: "2-3 ore",
        lat: 52.3723,
        lng: 4.8844,
        consiglio: "Tour in battello al tramonto per vedere le case illuminate.",
      },
      {
        nome: "Jordaan e Begijnhof",
        testo: "Il Jordaan è un quartiere di strade strette, caffè e negozi d'artigianato. Il Begijnhof è un cortile di origine medievale, con facciate antiche e Het Houten Huys, del 1420 circa, ritenuta la casa di legno più antica di Amsterdam.",
        come: "A piedi dal centro.",
        quando: "Mattina, con luce soffusa e meno gente.",
        tempo: "2 ore",
        lat: 52.3694,
        lng: 4.8901,
        consiglio: "Il Begijnhof è abitato: parlare piano e rispettare la privacy dei residenti.",
      },
      {
        nome: "Vondelpark",
        testo: "Il grande parco della città, 47 ettari di laghetti, prati e chioschi; da maggio a settembre il teatro all'aperto (Openluchttheater) ospita spettacoli quasi ogni weekend, a ingresso libero con offerta facoltativa. Un buon posto per fare una pausa dopo i musei.",
        come: "Accanto al museo Van Gogh, a pochi minuti a piedi.",
        quando: "Pomeriggio d'estate.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        orari: "Sempre aperto",
        lat: 52.3572,
        lng: 4.86412,
        consiglio: "Noleggiare una bici per girare il parco.",
      },
      {
        nome: "Mercato Albert Cuyp",
        testo: "Un grande mercato di strada nel quartiere De Pijp, attivo dal 1905: frutta, verdura, pesce, vestiti e stroopwafel fatti al momento. Ideale per spuntini economici.",
        come: "Metro Noord/Zuidlijn da Centraal fino a De Pijp, oppure in tram.",
        quando: "Lunedì-sabato 9:30-17; chiuso la domenica e nei giorni festivi. Meglio la mattina.",
        tempo: "1 ora",
        costo: "ingresso libero",
        orari: "Lunedì-sabato 9:30-17, chiuso domenica e festivi",
        lat: 52.35523,
        lng: 4.89178,
        consiglio: "Provare stroopwafel caldi e aringhe con cipolle.",
      },
      {
        nome: "Piazza Dam e Palazzo Reale",
        testo: "La piazza dove nacque la città, sulla diga del fiume Amstel, con il Monumento Nazionale ai caduti e la Nieuwe Kerk. Il Palazzo Reale, costruito come municipio nel Seicento, è ancora il palazzo di rappresentanza del re: dentro si vedono la Sala dei Cittadini in marmo e le sale con i dipinti dei maestri del Secolo d'oro.",
        come: "A piedi dalla Stazione Centrale, 10 minuti lungo il Damrak; tram 2, 4, 12, 14, 24 fino a Dam. L'audioguida è compresa nel biglietto.",
        quando: "Il palazzo apre circa 230 giorni l'anno e chiude per ricevimenti e visite di Stato: guardare il calendario sul sito prima di andare.",
        tempo: "1-1,5 ore con il palazzo",
        costo: "13,50 € adulti, audioguida compresa; gratuito fino a 17 anni (2026)",
        orari: "Nei giorni di apertura dalle 10 (calendario sul sito ufficiale)",
        lat: 52.37317,
        lng: 4.89136,
        url: "https://www.paleisamsterdam.nl/en/visit/",
      },
      {
        nome: "De Wallen e Oude Kerk",
        testo: "Il quartiere più antico della città, attorno alla Oude Kerk, la chiesa più vecchia di Amsterdam, consacrata nel 1306 e oggi usata anche per mostre d'arte contemporanea. È anche il Quartiere a Luci Rosse: un quartiere abitato, dove le vetrine non si fotografano.",
        come: "A piedi da Piazza Dam, 5 minuti. La chiesa ha biglietto d'ingresso, il quartiere si attraversa liberamente.",
        quando: "Di giorno o nel primo pomeriggio, quando è tranquillo; la sera tardi si riempie di gruppi.",
        tempo: "1 ora",
        orari: "Oude Kerk: lunedì-sabato 10-18, domenica 13-17:30 (2026)",
        lat: 52.37436,
        lng: 4.89807,
        url: "https://oudekerk.nl/en/visit/",
        consiglio: "Dal 2023 è vietato fumare cannabis per strada in tutto De Wallen, con multa.",
      },
      {
        nome: "Ons' Lieve Heer op Solder",
        testo: "Una casa di mercanti del Seicento sul canale Oudezijds Voorburgwal che nasconde, nei tre piani del sottotetto, una chiesa cattolica clandestina, dai tempi in cui il culto cattolico pubblico era vietato. È uno dei musei più sorprendenti della città e resta fuori dai grandi giri.",
        come: "A piedi da De Wallen o dalla Stazione Centrale; percorso con audioguida tra scale ripide e stanze d'epoca.",
        quando: "In mattinata, quando le stanze sono meno affollate.",
        tempo: "1 ora",
        lat: 52.3751,
        lng: 4.89929,
        url: "https://opsolder.nl/en/",
      },
      {
        nome: "Museo Casa di Rembrandt",
        testo: "La casa dove Rembrandt visse e lavorò dal 1639 al 1658, arredata com'era allora a partire dall'inventario dei suoi beni, con lo studio, la stanza delle curiosità e una raccolta quasi completa delle sue incisioni. Spesso si assiste a una dimostrazione di stampa o di preparazione dei colori.",
        come: "Metro fino a Waterlooplein, poi due minuti a piedi. Biglietti sul sito ufficiale.",
        quando: "Mattina, abbinandola al mercato di Waterlooplein e al quartiere ebraico.",
        tempo: "1-1,5 ore",
        lat: 52.3694,
        lng: 4.90129,
        url: "https://www.rembrandthuis.nl/en/",
      },
      {
        nome: "Stedelijk Museum",
        testo: "Il museo di arte moderna e contemporanea della città, nell'edificio ottocentesco ampliato con la «vasca da bagno» bianca del 2012. La collezione va da Mondrian, Malevič e Matisse al design olandese e ai grandi nomi del dopoguerra.",
        come: "Sul Museumplein, accanto al Museo Van Gogh; tram 2 o 12 fino a Van Baerlestraat.",
        quando: "Pomeriggio, dopo uno dei due grandi musei della mattina.",
        tempo: "2 ore",
        lat: 52.35806,
        lng: 4.87972,
        url: "https://www.stedelijk.nl/en",
      },
      {
        nome: "A'DAM Lookout e Amsterdam Noord",
        testo: "La terrazza panoramica in cima alla A'DAM Toren, a 100 metri sull'IJ: si vedono l'anello dei canali, il porto e, con il cielo limpido, i polder. Per chi vuole c'è anche l'altalena «Over the Edge» sporta nel vuoto. Intorno, Noord è il lato più nuovo della città, con l'EYE Film Museum e i vecchi cantieri NDSM.",
        come: "Traghetto GVB gratuito dal retro della Stazione Centrale per Buiksloterweg, 3 minuti di traversata.",
        quando: "Al tramonto, con il cielo sereno.",
        tempo: "1-1,5 ore",
        costo: "16,50 € online, 2 € in più alla cassa; altalena 7,50 € in più (2026)",
        lat: 52.38377,
        lng: 4.90214,
        url: "https://www.adamlookout.com",
      },
      {
        nome: "Bloemenmarkt",
        testo: "Il mercato dei fiori galleggiante sul Singel, con i banchi montati su chiatte: bulbi di tulipano, piante e souvenir. È più turistico di un tempo, ma resta l'unico del genere ed è di strada tra Piazza Dam e il Museumplein.",
        come: "A piedi da Piazza Dam o da Rembrandtplein; tram fino a Muntplein.",
        quando: "Di giorno, passando; in primavera c'è più scelta di bulbi.",
        tempo: "20-30 minuti",
        costo: "ingresso libero",
        lat: 52.36693,
        lng: 4.89076,
        consiglio: "I bulbi per l'Italia vanno comprati con il certificato fitosanitario sulla confezione.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Rijksmuseum con biglietto a orario",
          "Pranzo veloce al mercato Albert Cuyp",
          "Pomeriggio: Bloemenmarkt, Begijnhof e Piazza Dam",
          "Passeggiata sui canali fino al Jordaan",
          "Sera: battello sui canali o cena nel Jordaan",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Casa di Anne Frank prenotata, fascia del mattino",
          "Museo Van Gogh o Stedelijk",
          "Vondelpark",
          "Tramonto all'A'DAM Lookout, con il traghetto gratuito per Noord",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Ons' Lieve Heer op Solder e Oude Kerk",
          "Casa di Rembrandt e Waterlooplein",
          "Pomeriggio: gita a Zaanse Schans o a Haarlem, in primavera Keukenhof",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro storico (Centrum)",
        perChi: "Chi vuole fare tutto a piedi",
        testo: "Canali e musei vicini, ma prezzi altissimi e rumore, soprattutto verso De Wallen.",
        fascia: "180-350 €",
      },
      {
        nome: "Jordaan e Canal Ring",
        perChi: "Chi cerca atmosfera e strade tranquille",
        testo: "Zone belle e più calme, ma care.",
        fascia: "200-400 €",
      },
      {
        nome: "De Pijp",
        perChi: "Chi vuole bar, ristoranti e vita locale",
        testo: "Quartiere vivace vicino a Albert Cuyp; meno turistico, prezzi un po' più bassi.",
        fascia: "150-280 €",
      },
      {
        nome: "Amsterdam Oost e Noord",
        perChi: "Chi cerca di risparmiare",
        testo: "Fuori dal centro, in tram o, per Noord, con i traghetti GVB da dietro Centraal, gratuiti per pedoni e ciclisti.",
        fascia: "110-200 €",
      },
    ],
    sapori: [
      {
        nome: "Stroopwafel",
        testo: "Cialda con sciroppo di caramello, da mangiare calda ai mercati."
      },
      {
        nome: "Haring",
        testo: "Aringa cruda con cipolla e sottaceti, dai chioschi (haringhandel)."
      },
      {
        nome: "Bitterballen",
        testo: "Crocchette di ragù fritte, con senape, tipiche dei pub."
      },
      {
        nome: "Poffertjes e pannenkoeken",
        testo: "Mini frittelle e crêpe olandesi, nei ristoranti di pancake."
      }
    ],
    attenzioni: [
      "Biciclette: sono il pericolo maggiore per i pedoni, vanno veloci e spesso non si fermano ai semafori; non camminare sulle piste ciclabili rosse.",
      "Borseggiatori nel centro e intorno a Centraal Station, anche in bande sui treni e i tram da e per Schiphol.",
      "Rivenditori non ufficiali per Anne Frank e musei: comprare solo dal sito ufficiale. Diffidare anche dei falsi poliziotti che chiedono contanti o carte.",
      "A De Wallen non fotografare le lavoratrici e non fumare cannabis per strada: è vietato.",
      "I taxi non sempre sono economici: meglio tram o piedi."
    ],
    gite: [
      {
        nome: "Zaanse Schans",
        distanza: "20 minuti in treno",
        come: "Treno da Amsterdam Centraal a Zaandijk Zaanse Schans, poi 10 minuti a piedi.",
        testo: "Il villaggio dei mulini a vento ancora funzionanti sul fiume Zaan, con le case di legno verdi, un laboratorio di zoccoli e caseifici. Il villaggio è a ingresso libero; mulini e museo si pagano a parte.",
      },
      {
        nome: "Haarlem",
        distanza: "15 minuti in treno",
        come: "Treni frequenti da Amsterdam Centraal.",
        testo: "Una piccola città di canali e hofjes, i cortili delle case di carità, con la Grote Kerk sulla piazza del mercato e il Museo Frans Hals. Ha la stessa architettura di Amsterdam con molta meno folla.",
      },
      {
        nome: "Keukenhof",
        distanza: "35 km, circa 45 minuti",
        come: "Bus diretto da Schiphol o da Leida nei mesi di apertura, con biglietti combinati sul sito del parco.",
        testo: "Il grande parco dei bulbi in fiore, aperto solo in primavera, tra marzo e maggio. Intorno, i campi di tulipani della zona di Lisse.",
      },
      {
        nome: "Rotterdam",
        distanza: "40 minuti in treno",
        come: "Treno ad alta velocità da Amsterdam Centraal.",
        testo: "La città ricostruita quasi da zero dopo i bombardamenti del 1940, con le case cubiche, il Markthal e il ponte Erasmus: il contrario del centro storico di Amsterdam.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono ad Amsterdam?",
        risposta: "Tre giorni bastano per i canali, i due grandi musei del Museumplein, la Casa di Anne Frank e un paio di quartieri. Con un quarto giorno si aggiunge una gita a Zaanse Schans, Haarlem o, in primavera, Keukenhof.",
      },
      {
        domanda: "Serve prenotare la Casa di Anne Frank?",
        risposta: "Sì, e non c'è alternativa: i biglietti si vendono solo online sul sito ufficiale, escono il martedì per le visite di sei settimane dopo e alla porta non se ne vendono.",
      },
      {
        domanda: "Rijksmuseum e Museo Van Gogh nello stesso giorno?",
        risposta: "Si può, perché sono uno accanto all'altro, ma sono due visite lunghe: meglio il Rijksmuseum la mattina e il Van Gogh nel pomeriggio, con entrambi i biglietti a orario già comprati.",
      },
      {
        domanda: "Si possono pagare i mezzi con la carta?",
        risposta: "Sì: tram, bus, metro GVB e treni NS accettano le carte contactless, facendo check-in e check-out con la stessa carta. Dimenticare il check-out fa pagare la tariffa massima.",
      },
      {
        domanda: "Conviene noleggiare la bici?",
        risposta: "Sì per chi è abituato al traffico in bici: le ciclabili sono ovunque e le distanze brevi. Chi non pedala spesso in città conviene che cominci dal Vondelpark o da Noord, perché nel centro il traffico di biciclette è fitto e veloce.",
      },
      {
        domanda: "Si può fumare cannabis per strada?",
        risposta: "No nel quartiere a luci rosse di De Wallen, dove dal 2023 è vietato con multa; in generale si fuma nei coffeeshop e non nei luoghi pubblici affollati.",
      },
    ],
    esperienzeSlugs: ['amsterdam-in-bicicletta', 'crociera-sui-canali-amsterdam', 'casa-di-anna-frank'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Un vecchio ponte ad arco in mattoni sul canale Reguliersgracht ad Amsterdam, con le case a schiera e gli alberi spogli lungo le rive',
    immagine: '/images/paesi-bassi/amsterdam.jpg',
  },
]
