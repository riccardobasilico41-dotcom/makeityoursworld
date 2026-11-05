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
      'Aeroporto di Amsterdam Schiphol (AMS), tra i più trafficati d\'Europa, a circa 15 km dal centro: treno diretto in 15-20 minuti fino alla Stazione Centrale, con corse molto frequenti. Dall\'Italia non c\'è un collegamento ferroviario diretto comodo: si arriva quasi sempre in aereo.',
    comeSpostarsi: 'In centro bicicletta o piedi; per il resto della città tram, bus e metro GVB, che si pagano anche con carta contactless direttamente sui mezzi. Auto sconsigliata: in centro il traffico è scoraggiato e il parcheggio caro e scarso.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e molto affollata; novembre-marzo è freddo e spesso piovoso ma gestibile, con i mercatini di Natale a dicembre',
    costi: 'città cara per gli standard europei: musei principali 20-25€ l\'uno, cena normale 20-25€ a testa, noleggio bici 10-15€ al giorno',
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
        come: "Tram 2 o 12 fino al Rijksmuseum, 10 minuti dal centro. Biglietto online con orario.",
        quando: "Tutti i giorni 9-17, festivi compresi; mattina presto o pomeriggio tardi per evitare la ressa davanti alla Ronda di notte.",
        tempo: "3 ore",
        costo: "25 € adulti (2026), gratuito sotto i 18 anni",
        url: "https://www.rijksmuseum.nl",
        consiglio: "Cominciare dal piano degli Anni d'oro: in un'ora si vedono le sale più importanti."
      },
      {
        nome: "Museo Van Gogh",
        testo: "La più grande collezione di Van Gogh: dipinti, disegni e lettere in ordine cronologico, dai Mangiatori di patate ai Girasoli. Si capisce l'evoluzione dell'artista.",
        come: "Tram 2 o 5 fino a Van Baerlestraat; biglietti a orario.",
        quando: "Mattina presto, con biglietto già acquistato.",
        tempo: "2 ore",
        url: "https://www.vangoghmuseum.nl",
        consiglio: "Prenotare con anticipo, soprattutto nei weekend: le fasce si esauriscono."
      },
      {
        nome: "Casa di Anne Frank",
        testo: "L'alloggio segreto dove Anne Frank e la famiglia si nascosero dal 1942 al 1944, sopra la ditta del padre. Il percorso è stretto e silenzioso; non è permesso fotografare.",
        come: "I biglietti si vendono solo online sul sito ufficiale: ogni martedì alle 10 escono quelli per le visite di sei settimane dopo. All'ingresso non si vendono.",
        quando: "Prenotare appena si decidono le date; a Prinsengracht, 15 minuti dal centro.",
        tempo: "1-1,5 ore",
        costo: "16,50 € adulti, con 1 € di commissione (sito ufficiale, 2026)",
        url: "https://www.annefrank.org",
        consiglio: "Diffidare dei rivenditori: il sito ufficiale è l'unico affidabile."
      },
      {
        nome: "Canali del Seicento",
        testo: "L'anello dei canali (Grachtengordel) è patrimonio UNESCO dal 2010, con case a timpano, ponti e barche. I tratti più belli sono Prinsengracht, Keizersgracht e Herengracht.",
        come: "A piedi, con battello o con noleggio di barca; meglio a piedi.",
        quando: "Sera, con le luci sull'acqua.",
        tempo: "2-3 ore",
        consiglio: "Tour in battello al tramonto per vedere le case illuminate."
      },
      {
        nome: "Jordaan e Begijnhof",
        testo: "Il Jordaan è un quartiere di strade strette, caffè e negozi d'artigianato. Il Begijnhof è un cortile segreto con case del Medioevo e un giardino aperto al pubblico.",
        come: "A piedi dal centro (10-15 minuti).",
        quando: "Mattina, con luce soffusa e meno gente.",
        tempo: "2 ore",
        costo: "Begijnhof: ingresso libero",
        consiglio: "Il Begijnhof è un luogo di vita: parlare piano e non fotografare le porte."
      },
      {
        nome: "Vondelpark",
        testo: "Il parco più grande della città, con laghetti, prati e chioschi; d'estate ci sono concerti all'aperto. Un buon posto per fare una pausa dopo i musei.",
        come: "Accanto al museo Van Gogh, a pochi minuti a piedi.",
        quando: "Pomeriggio d'estate.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Noleggiare una bici per girare il parco."
      },
      {
        nome: "Mercato Albert Cuyp",
        testo: "Il più grande mercato di strada all'aperto della città: frutta, formaggi, stroopwafel caldi e gadget. Ideale per spuntini economici.",
        come: "Tram 3 o 24 fino a Albert Cuypstraat, a De Pijp.",
        quando: "Dal lunedì al sabato, mattina.",
        tempo: "1 ora",
        consiglio: "Provare stroopwafel caldi e aringhe con cipolle."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Rijksmuseum",
          "Pranzo da Albert Cuyp",
          "Canali al pomeriggio",
          "Sera: Jordaan"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Casa di Anne Frank prenotata",
          "Van Gogh Museum",
          "Vondelpark e cena"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: gita a Keukenhof (primavera) o Zaanse Schans"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro storico (Centrum)",
        perChi: "Chi vuole fare tutto a piedi",
        testo: "Canali e musei vicini, ma prezzi altissimi e rumore, soprattutto verso De Wallen."
      },
      {
        nome: "Jordaan e Canal Ring",
        perChi: "Chi cerca atmosfera e strade tranquille",
        testo: "Zone belle e più calme, ma care."
      },
      {
        nome: "De Pijp",
        perChi: "Chi vuole bar, ristoranti e vita locale",
        testo: "Quartiere vivace vicino a Albert Cuyp; meno turistico, prezzi un po' più bassi."
      },
      {
        nome: "Amsterdam Oost e Noord",
        perChi: "Chi cerca di risparmiare",
        testo: "Fuori dal centro, in tram o traghetto gratuito per Noord."
      }
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
      "Biciclette: sono il pericolo maggiore per i pedoni; non camminare sulle piste ciclabili rosse.",
      "Borseggiatori a Centraal Station, in Dam e sui tram affollati.",
      "Biglietti falsi o rivenditori non ufficiali per Anne Frank e musei: comprare solo dal sito ufficiale.",
      "A De Wallen è vietato fotografare le lavoratrici; in alcune zone è vietato fumare cannabis per strada.",
      "I taxi non sempre sono economici: meglio tram o piedi."
    ],
    esperienzeSlugs: ['amsterdam-in-bicicletta', 'crociera-sui-canali-amsterdam', 'casa-di-anna-frank'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Un vecchio ponte ad arco in mattoni sul canale Reguliersgracht ad Amsterdam, con le case a schiera e gli alberi spogli lungo le rive',
    immagine: '/images/paesi-bassi/amsterdam.jpg',
  },
]
