import type { Destinazione } from '@/lib/types'

// Prima uscita austriaca dell'archivio, collegata al viaggio "Vienna in un
// weekend lungo" (src/content/viaggi/55-vienna-weekend.md, dati in
// src/content/viaggi-dati/vienna-weekend.ts), viaggio fatto da Rick: visitataPersonalmente è
// true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome di hotel, ristorante o operatore è stato
// inventato. Prezzi e orari cambiano spesso e vanno riverificati sui canali
// ufficiali prima di partire.

export const destinazioniAustria: Destinazione[] = [
  {
    slug: 'vienna',
    paeseSlug: 'austria',
    ordine: 1,
    nome: 'Vienna',
    tipologia: ['città', 'arte', 'musica'],
    giorniConsigliati: '3-4 giorni per l\'Innere Stadt, Schönbrunn, il Belvedere e il Prater',
    visitataPersonalmente: true,
    introduzione:
      'La capitale austriaca, per secoli cuore dell\'Impero asburgico e oggi una delle città con la miglior qualità della vita al mondo secondo diverse classifiche internazionali. Il centro storico è compatto: l\'Innere Stadt, Patrimonio UNESCO, circondata dal Ring, il viale che nell\'Ottocento ha preso il posto delle antiche mura. La reggia di Schönbrunn, il palazzo del Belvedere e il grande parco del Prater stanno appena fuori dal nucleo più centrale.',
    percheAndarci:
      'Perché concentra in un\'area percorribile a piedi (o in pochi minuti di U-Bahn) secoli di storia imperiale, una delle collezioni d\'arte più importanti d\'Europa centrale con "Il Bacio" di Klimt al Belvedere, e una cultura del caffè riconosciuta dall\'UNESCO come patrimonio immateriale. E si paga in euro, senza le complicazioni di cambio valuta di Praga o Cracovia.',
    cosaVedere: [
      'La Cattedrale di Santo Stefano (Stephansdom), gotica, simbolo della città, con il tetto in 230.000 tegole colorate e la torre sud (Steffl) alta 136 metri, salibile con 343 gradini fino a un belvedere panoramico; sotto la cattedrale, le catacombe con gli organi interni degli imperatori asburgici',
      'La Hofburg, la reggia invernale degli Asburgo per oltre sei secoli, oggi sede del Museo Sisi, degli Appartamenti Imperiali e della Scuola Spagnola di Equitazione con i suoi cavalli Lipizzani',
      'La Reggia di Schönbrunn, la residenza estiva della famiglia imperiale, con oltre 1.400 stanze (poche decine visitabili), i giardini barocchi e la Gloriette in collina',
      'Il Palazzo del Belvedere, con l\'Upper Belvedere che ospita "Il Bacio" e altre opere di Gustav Klimt, oltre a una delle collezioni di arte austriaca più importanti al mondo',
      'Il Naschmarkt, il mercato alimentare più famoso della città, oltre un chilometro e mezzo di bancarelle tra frutta, spezie e cucine internazionali, con un mercatino delle pulci il sabato',
      'Il Prater, il grande parco pubblico dal 1766, con il Wiener Riesenrad, la ruota panoramica costruita nel 1897 per il giubileo dell\'imperatore Francesco Giuseppe e per decenni la più alta al mondo',
    ],
    cosaFare: [
      'Sedersi almeno una volta in un caffè storico (Café Central, Café Sacher o Landtmann tra i più noti) per capire dal vivo la Kaffeehauskultur, la cultura del caffè viennese riconosciuta dall\'UNESCO come patrimonio culturale immateriale dal 2011',
      'Salire sulla torre sud della Cattedrale di Santo Stefano per una vista dall\'alto sui tetti del centro storico',
      'Assistere a uno spettacolo all\'Opera di Stato con un biglietto in piedi (Stehplatz), a partire da circa 13€, uno dei modi più economici al mondo per vedere un\'opera di alto livello',
      'Un giro sul Wiener Riesenrad al Prater, soprattutto al tramonto',
      'Una passeggiata lungo il Ring, il viale che circonda l\'Innere Stadt sul tracciato delle antiche mura, tra edifici storicisti ottocenteschi',
    ],
    doveDormire:
      'L\'Innere Stadt (il I distretto, dentro il Ring) è la scelta più comoda e concentra la maggior parte delle attrazioni, ma è anche la zona con i prezzi più alti. I distretti limitrofi (II, IV, VII) sono alternative più economiche e ben collegate in U-Bahn, spesso a pochi minuti a piedi dal Ring.',
    doveMangiare:
      'Il Wiener Schnitzel, la cotoletta di vitello impanata, è il piatto simbolo; il Tafelspitz, il bollito di manzo alla viennese, altrettanto tradizionale. Tra i dolci, la Sachertorte (la celebre torta al cioccolato con marmellata di albicocche, nata proprio a Vienna) e l\'Apfelstrudel. Il Naschmarkt è il posto migliore per un pasto informale tra cucine diverse; i caffè storici, oltre al caffè, servono spesso pasticceria e piccoli pasti durante tutto il giorno.',
    comeArrivare:
      'Aeroporto di Vienna-Schwechat (VIE), a circa 18 km dal centro: il City Airport Train (CAT) arriva a Wien Mitte in 16 minuti (circa 14,90€ a tratta), oppure i treni regionali (S7, ÖBB) coprono lo stesso tragitto in poco più tempo a un prezzo inferiore. In treno dall\'Italia, collegamenti diretti da diverse città del Nord; da Praga, circa 4 ore di treno diretto.',
    comeSpostarsi: 'Centro storico in gran parte a piedi. Per il resto della città, U-Bahn, tram e bus di Wiener Linien, con biglietti singoli o pass giornalieri/plurigiorno. Non serve auto.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, affollata soprattutto a Schönbrunn e Stephansplatz; novembre-marzo è freddo ma gestibile, con i mercatini di Natale a dicembre',
    costi: 'nella media europea: musei principali 20-25€, pasto normale 15-25€ a testa, biglietti in piedi dell\'Opera a partire da 13€, trasporti pubblici economici',
    erroriDaEvitare: [
      'Presentarsi a Schönbrunn o al Belvedere in alta stagione senza biglietto prenotato online: le code in loco possono superare l\'ora',
      'Sottovalutare la Kaffeehauskultur come una semplice pausa caffè: nei caffè storici il tavolo è "affittato" per tutto il tempo che si vuole: è un\'usanza culturale precisa, da prendere con calma',
      'Programmare acquisti o commissioni di domenica: quasi tutti i negozi, supermercati compresi, sono chiusi per legge, con le sole eccezioni di stazioni, aeroporto e farmacie di turno',
      'Abbassare la guardia sulla linea U3 della metropolitana nelle ore di punta: è la linea più segnalata per i borseggi in città',
      'Sottovalutare le dimensioni di Schönbrunn: il solo giro del palazzo e dei giardini principali richiede una buona mezza giornata',
    ],
    luoghi: [
      {
        nome: "Palazzo di Schönbrunn",
        testo: "La residenza estiva degli Asburgo, patrimonio UNESCO, con 1.441 stanze e giardini barocchi. Si visitano gli appartamenti imperiali, con diversi percorsi.",
        come: "Metro U4 fino a Schönbrunn, oppure tram 10 o 60 e bus 10A fino a Schloss Schönbrunn. Biglietti online con orario.",
        quando: "Palazzo tutti i giorni 8:30-17, giardini dalle 6:30; mattina presto per anticipare i gruppi.",
        tempo: "3-4 ore",
        costo: "Palace Ticket 42 € adulti (2026), solo online sul sito ufficiale; giardini liberi",
        url: "https://www.schoenbrunn.at",
        consiglio: "I percorsi cambiano per durata e stanze comprese: sceglierli sul sito ufficiale, l'unico canale di vendita online, e non dai rivenditori."
      },
      {
        nome: "Hofburg e Museo Sisi",
        testo: "Il palazzo imperiale in centro, con appartamenti imperiali, la collezione delle argenterie e il museo dedicato a Sissi. Il complesso ospita anche la Scuola Spagnola di Equitazione.",
        come: "In centro, a piedi; la fermata della metro più vicina è Herrengasse (U3).",
        quando: "Orari sul sito ufficiale; il Museo Sisi riallestito riapre il 19 novembre 2026. Mattina nei giorni feriali.",
        tempo: "2 ore",
        costo: "Museo Sisi 15 €, con visita guidata agli appartamenti 33 € (2026)",
        url: "https://www.sisimuseum-hofburg.at",
        consiglio: "Combinare con una passeggiata nel Volksgarten lì accanto."
      },
      {
        nome: "Cattedrale di Santo Stefano (Stephansdom)",
        testo: "Il simbolo di Vienna, in stile gotico, con il tetto di tegole colorate e la torre sud di 136 metri, che si sale a piedi. Sulla torre nord incompiuta c'è una piattaforma con la campana Pummerin; sotto la chiesa ci sono le catacombe.",
        come: "Metro U1 o U3 fino a Stephansplatz. Torri e catacombe a pagamento: tariffe sul sito ufficiale.",
        quando: "Visite turistiche lun-sab 9-11:30 e 13-16:30, domenica e festivi 13-16:30, salvo funzioni. Mattina presto o sera per la luce sul tetto.",
        tempo: "1 ora",
        url: "https://www.stephanskirche.at",
        consiglio: "Le catacombe si vedono solo con visita guidata."
      },
      {
        nome: "Belvedere",
        testo: "Due palazzi barocchi del principe Eugenio di Savoia, con il giardino alla francese in mezzo; il Belvedere superiore ospita un'importante collezione di Klimt, con «Il bacio», e opere di Schiele e Kokoschka. Il parco è bello anche da solo.",
        come: "Tram D fino a Schloss Belvedere. Biglietti per il Belvedere superiore.",
        quando: "Tutti i giorni 9-18; mattina presto per vedere «Il bacio» senza folla.",
        tempo: "2 ore",
        costo: "Belvedere superiore 23 € adulti (2026, prezzo del giorno); gratis sotto i 19 anni",
        url: "https://www.belvedere.at",
        consiglio: "Riduzioni e orari estivi sul sito ufficiale."
      },
      {
        nome: "Kunsthistorisches Museum",
        testo: "Il grande museo d'arte degli Asburgo, con Bruegel, Raffaello, Tiziano e Vermeer. L'edificio stesso, con la cupola e la scalinata, è un'opera d'arte.",
        come: "Sul Ring, di fronte al Naturhistorisches Museum, vicino alle fermate della metro Volkstheater e Museumsquartier.",
        quando: "Tutti i giorni 10-18, giovedì fino alle 21; mattina nei giorni feriali.",
        tempo: "2-3 ore",
        costo: "22 € online, 24 € in cassa (2026); dall'8 settembre 2026 ingresso solo a fascia oraria",
        url: "https://www.khm.at",
        consiglio: "La sala Bruegel da sola vale la visita."
      },
      {
        nome: "Opera di Stato (Staatsoper)",
        testo: "Uno dei teatri lirici più importanti del mondo. Si può visitare con un tour guidato o assistere a uno spettacolo con i biglietti in piedi, molto economici.",
        come: "Sul Ring, in centro: metro U1, U2 o U4 fino a Karlsplatz, uscita nord verso l'Opera. I biglietti in piedi si vendono solo il giorno dello spettacolo, dalle 10.",
        quando: "Sera; i posti in piedi vanno comprati la mattina stessa, appena si aprono le vendite.",
        tempo: "3 ore",
        url: "https://www.wiener-staatsoper.at",
        consiglio: "Le sale con i posti in piedi hanno vista limitata ma acustica ottima."
      },
      {
        nome: "Prater e Riesenrad",
        testo: "Il grande parco con la ruota panoramica del 1897, celebre dal film «Il terzo uomo». Ci sono giostre storiche e il lungo viale alberato.",
        come: "Metro U1 o U2 fino a Praterstern, accanto all'ingresso principale.",
        quando: "Pomeriggio o sera, per la vista sulla città. Le attrazioni aprono da metà marzo a fine ottobre, più o meno dalle 11 all'1 di notte; d'inverno solo una parte.",
        tempo: "2 ore",
        costo: "ingresso al parco libero, giostre a pagamento (di solito 3,50-8 €, 2026)",
        url: "https://www.wienerriesenrad.com",
        consiglio: "Salire sulla ruota al tramonto."
      },
      {
        nome: "Naschmarkt",
        testo: "Un grande mercato all'aperto lungo la Wienzeile: bancarelle di frutta, spezie, olive e ristoranti. Il sabato, verso la Kettenbrücke, c'è anche il mercato delle pulci (6:30-15).",
        come: "A piedi dal centro, vicino a Karlsplatz; metro U4 fino a Kettenbrückengasse.",
        quando: "Bancarelle lun-ven 6-21 e sabato 6-18 (orari massimi fissati dal Comune); la domenica restano aperti solo ristoranti e bar, 9-21. Meglio la mattina.",
        tempo: "1-2 ore",
        consiglio: "Andarci la mattina, quando i banchi sono pieni."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Stephansdom",
          "Pranzo con Schnitzel",
          "Hofburg e Museo Sisi",
          "Sera: Naschmarkt o caffè"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Schönbrunn al mattino",
          "Belvedere e Klimt",
          "Sera: opera in piedi"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Kunsthistorisches Museum, Prater e Riesenrad"
        ]
      }
    ],
    zone: [
      {
        nome: "Innere Stadt (centro)",
        perChi: "Chi vuole tutto a piedi",
        testo: "Vicino a Stephansdom e Hofburg; prezzi alti, rumore di sera."
      },
      {
        nome: "Neubau e Mariahilf",
        perChi: "Chi cerca vita culturale e caffè",
        testo: "Quartieri creativi vicini al MuseumsQuartier, buoni collegamenti."
      },
      {
        nome: "Leopoldstadt",
        perChi: "Chi vuole risparmiare e il Prater",
        testo: "Quartiere multiculturale, vicino al Prater, con metro diretta."
      }
    ],
    sapori: [
      {
        nome: "Wiener Schnitzel",
        testo: "Cotoletta di vitello impanata, la specialità viennese; si trova ovunque."
      },
      {
        nome: "Sachertorte",
        testo: "Torta al cioccolato con marmellata di albicocche, del Café Sacher e del Demel."
      },
      {
        nome: "Apfelstrudel",
        testo: "Strudel di mele, servito caldo con salsa alla vaniglia o panna."
      },
      {
        nome: "Tafelspitz",
        testo: "Lesso di manzo con rafano e mele, piatto tradizionale della cucina asburgica."
      }
    ],
    attenzioni: [
      "Concerti: comprare i biglietti in biglietteria o sui siti ufficiali, non dai venditori in costume per strada.",
      "I Fiaker (carrozze) sono cari: chiedere il prezzo prima.",
      "Biglietti dei mezzi: convalidare quelli di carta prima di salire, altrimenti si rischia una multa sul posto.",
      "Borseggiatori nei centri affollati, sui mezzi e nelle stazioni principali; più attenzione nei parchi dopo il tramonto."
    ],
    esperienzeSlugs: ['vienna-schonbrunn-biglietto', 'vienna-opera-stehplatz', 'vienna-giro-caffe-storici'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'Il tetto in tegole smaltate a zig-zag colorate della Cattedrale di Santo Stefano a Vienna, tra le guglie gotiche',
    immagine: '/images/austria/vienna.jpg',
  },
]
