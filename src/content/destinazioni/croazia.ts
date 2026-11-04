import type { Destinazione } from '@/lib/types'

// Tappe di "Croazia in 14 giorni" (src/content/viaggi/69-croazia-itinerario.md),
// viaggio fatto da Rick: tutte hanno visitataPersonalmente: true e il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome
// di hotel, ristorante o operatore inventato. Prezzi indicativi 2026.

export const destinazioniCroazia: Destinazione[] = [
  {
    slug: 'zagabria',
    paeseSlug: 'croazia',
    ordine: 1,
    nome: 'Zagabria',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale, divisa tra la Città Alta medievale e la Città Bassa austroungarica, con caffè, musei e il mercato di Dolac. È il punto di partenza naturale per Plitvice.',
    percheAndarci: 'Per una Croazia continentale e mitteleuropea, diversa dalla costa.',
    cosaVedere: [
      'La chiesa di San Marco e la Città Alta',
      'La torre Lotrščak e il cannone di mezzogiorno',
      'Il mercato di Dolac',
      'Il Museo delle Relazioni Interrotte',
    ],
    cosaFare: ['Una sera nei caffè di via Tkalčićeva', 'Lo štrukli in una trattoria della Città Alta', 'Il mercatino di Natale a dicembre'],
    doveDormire: 'Città Bassa o vicino a piazza Jelačić: economico 50-80 €, medio 90-150 €, alto oltre 200 €.',
    comeArrivare: 'Aeroporto di Zagabria; in auto da Trieste in circa due ore e mezza.',
    comeSpostarsi: 'A piedi, in tram e con la funicolare per la Città Alta.',
    periodoMigliore: 'aprile-ottobre; dicembre per l\'Avvento.',
    erroriDaEvitare: ['Saltarla del tutto per correre al mare'],
    luoghi: [
      {
        nome: "Città Alta (Gornji grad)",
        testo: "Il nucleo medievale su una collina, con la chiesa di San Marco dal tetto a tegole colorate, la torre Lotrščak (dove un cannone spara ogni giorno a mezzogiorno) e vicoli di lampioni a gas.",
        come: "Dalla Città Bassa a piedi o con la funicolare, tra le più brevi del mondo (circa 60 metri).",
        quando: "Mattina o tardo pomeriggio. Il cannone spara a mezzogiorno.",
        tempo: "2 ore",
        consiglio: "Salire a piedi da via Tkalčićeva e scendere con la funicolare."
      },
      {
        nome: "Mercato di Dolac",
        testo: "Il mercato all'aperto della città, sopra piazza Jelačić, con banchi di frutta e verdura sotto gli ombrelloni rossi e formaggi nel mercato coperto sotto.",
        come: "A piedi dal centro, a pochi minuti da piazza Jelačić.",
        quando: "Mattina, fino a metà giornata; la domenica è più tranquillo e molti banchi chiudono.",
        tempo: "1 ora",
        consiglio: "Provare il formaggio fresco di panna (sir i vrhnje) con il pane caldo."
      },
      {
        nome: "Museo delle Relazioni Interrotte",
        testo: "Un piccolo museo con oggetti donati da persone di tutto il mondo, ciascuno con la storia di una relazione finita. Divertente e a tratti commovente.",
        come: "A piedi dalla Città Alta, in via Ćirilometodska.",
        quando: "Mattina o pomeriggio, evitando il fine settimana.",
        tempo: "1 ora",
        consiglio: "Si legge tutto in inglese: prevedere il tempo per leggere le didascalie."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mercato di Dolac al mattino",
          "Cattedrale e Città Alta",
          "Pranzo con štrukli",
          "Museo delle Relazioni Interrotte",
          "Aperitivo in via Tkalčićeva"
        ]
      }
    ],
    zone: [
      {
        nome: "Città Bassa",
        perChi: "chi vuole stazione e tram",
        testo: "Alberghi e appartamenti a piedi da tutto; la sera il centro è vivace e un po' rumoroso."
      },
      {
        nome: "Vicino a piazza Jelačić",
        perChi: "chi ha poco tempo",
        testo: "Tutto raggiungibile a piedi; i prezzi sono un po' più alti."
      }
    ],
    sapori: [
      {
        nome: "Štrukli",
        testo: "Pasta ripiena di formaggio fresco, lessata o al forno, il piatto più tipico della città."
      },
      {
        nome: "Purica s mlincima",
        testo: "Tacchino arrosto con pasta sottile, un piatto della cucina di casa croata."
      },
      {
        nome: "Kremšnita",
        testo: "Dolce di crema e panna tra due sfoglie, tipico di Samobor, vicino alla città."
      }
    ],
    attenzioni: [
      "In taxi, usare le app (Bolt, Uber) o le auto con tariffa esposta: alla stazione i prezzi variano.",
      "A Natale i prezzi degli alloggi salgono: prenotare in anticipo.",
      "Nei fine settimana del mercatino d'Avvento il centro si affolla molto: meglio un giorno feriale."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La chiesa di San Marco con il tetto a piastrelle colorate a Zagabria',
    immagine: '/images/viaggi/croazia-itinerario/giorno-01-zagabria.jpg',
  },
  {
    slug: 'plitvice',
    paeseSlug: 'croazia',
    ordine: 2,
    nome: 'Laghi di Plitvice',
    tipologia: ['parco nazionale', 'laghi', 'cascate'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Sedici laghi a terrazze collegati da cascate e barriere di travertino, attraversati da passerelle di legno, nel parco nazionale più antico della Croazia, patrimonio UNESCO dal 1979.',
    percheAndarci: 'Per le cascate e i colori dei laghi, da vedere all\'apertura.',
    cosaVedere: ['La Veliki slap, la cascata più alta (78 m)', 'I laghi inferiori e il canyon', 'I laghi superiori e il lago Kozjak'],
    cosaFare: ['Entrare all\'apertura dall\'ingresso 2 per i laghi superiori', 'Fare i laghi inferiori nel tardo pomeriggio'],
    doveDormire: 'Pensioni e camere a Mukinje, Rastovača e Grabovac (60-120 €); pochi hotel dentro il parco.',
    comeArrivare: 'In auto da Zagabria (circa 2 ore) o da Zara (circa 2 ore); bus da entrambe le città.',
    comeSpostarsi: 'A piedi sulle passerelle, battello elettrico sul lago Kozjak e trenini panoramici inclusi nel biglietto.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre; luglio-agosto molto affollati.',
    costi: 'Biglietto giornaliero circa 40 € in giugno-settembre, meno in primavera e autunno; da comprare online con fascia oraria.',
    erroriDaEvitare: [
      'Arrivare a metà mattina in alta stagione',
      'Non prenotare online la fascia d\'ingresso',
      'Pensare di fare il bagno: è vietato',
    ],
    luoghi: [
      {
        nome: "Laghi superiori e Kozjak",
        testo: "Sedici laghi collegati da cascate su terrazze di travertino, con passerelle di legno sull'acqua turchese. Patrimonio UNESCO dal 1979.",
        come: "Ingresso 2 per i laghi superiori. Sentieri segnati con lettere (A-K) e battello elettrico sul Kozjak incluso nel biglietto.",
        quando: "All'apertura o dopo le 15, per evitare le ore dei pullman. Il periodo più verde è tra maggio e giugno; in autunno i colori sono più intensi.",
        tempo: "4-6 ore per un percorso completo",
        url: "https://np-plitvicka-jezera.hr/en/",
        consiglio: "In alta stagione il biglietto è a orario e va prenotato sul sito ufficiale."
      },
      {
        nome: "Veliki slap",
        testo: "La cascata più alta del parco, circa 78 metri, alla fine dei laghi inferiori. Si vede dalla passerella in basso o dal sentiero in alto.",
        come: "Ingresso 1 per i laghi inferiori e la Veliki slap, a piedi con scale.",
        quando: "Mattina presto o fine pomeriggio.",
        tempo: "1 ora",
        consiglio: "Un'ottima ultima tappa: poi si risale con il trenino panoramico."
      },
      {
        nome: "Laghi inferiori e canyon",
        testo: "Un tratto più selvaggio e meno affollato, con pareti di roccia, grotte e cascate che escono dal calcare.",
        come: "A piedi dall'ingresso 1 lungo il sentiero indicato.",
        quando: "Mattina.",
        tempo: "2 ore",
        consiglio: "Scarpe con suola antiscivolo: le passerelle sono bagnate."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Ingresso 2 all'apertura",
          "Laghi superiori e Kozjak in battello",
          "Pranzo al parco",
          "Laghi inferiori e Veliki slap nel pomeriggio"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: laghi superiori e Kozjak",
          "Giorno 2: laghi inferiori, canyon e sentieri meno battuti"
        ]
      }
    ],
    zone: [
      {
        nome: "Mukinje e Rastovača",
        perChi: "chi vuole stare vicino",
        testo: "Pensioni e camere vicino all'ingresso, comode per la mattina presto."
      },
      {
        nome: "Grabovac",
        perChi: "chi cerca prezzi più bassi",
        testo: "Più economico, in auto a pochi minuti dall'ingresso."
      }
    ],
    sapori: [
      {
        nome: "Agnello alla brace",
        testo: "Si prepara nei ristoranti lungo la strada per il parco, con patate."
      },
      {
        nome: "Trota",
        testo: "Dei fiumi della zona, cotta alla griglia o fritta."
      },
      {
        nome: "Štrukli e crema di formaggio",
        testo: "Si trovano nelle trattorie vicine all'ingresso."
      }
    ],
    attenzioni: [
      "Il bagno nei laghi è vietato e vigilato: non uscire dai sentieri.",
      "Senza prenotazione in estate si rischia di non entrare: prenotare l'orario.",
      "Portare cibo e acqua: dentro i servizi sono pochi e costosi."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Una passerella di legno accanto a una cascata e all\'acqua turchese dei laghi di Plitvice',
    immagine: '/images/viaggi/croazia-itinerario/giorno-03-plitvice.jpg',
  },
  {
    slug: 'zara-krka-sebenico',
    paeseSlug: 'croazia',
    ordine: 3,
    nome: 'Zara, Krka e Sebenico',
    tipologia: ['città storiche', 'parco nazionale', 'mare'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La Dalmazia settentrionale: Zara con il centro romano e veneziano e le installazioni sul lungomare, le cascate di travertino del Parco Nazionale del Krka e Sebenico con la cattedrale di San Giacomo.',
    percheAndarci: 'Per il tramonto all\'Organo marino, le cascate del Krka e due città storiche meno affollate di Spalato e Dubrovnik.',
    cosaVedere: [
      'L\'Organo marino e il Saluto al Sole a Zara',
      'La chiesa di San Donato e il foro romano',
      'Lo Skradinski buk e il monastero di Visovac nel Krka',
      'La Cattedrale di San Giacomo a Sebenico',
    ],
    cosaFare: ['Il battello da Skradin alle cascate', 'Una giornata alle Kornati o a Ugljan da Zara'],
    doveDormire: 'Appartamenti nei centri storici (80-150 €); hotel a Borik, vicino a Zara.',
    comeArrivare: 'In auto da Plitvice; aeroporto di Zara con voli stagionali.',
    periodoMigliore: 'maggio-giugno e settembre.',
    costi: 'Krka circa 40 € in estate, molto meno in bassa stagione.',
    erroriDaEvitare: ['Aspettarsi di fare il bagno sotto le cascate del Krka: è vietato dal 2021'],
    luoghi: [
      {
        nome: "Zara: Organo marino e Saluto al Sole",
        testo: "Due installazioni sul lungomare della città vecchia: l'Organo marino suona con le onde che entrano in tubi sotto i gradini, accanto un disco di vetro cattura la luce del tramonto. Sono opera dell'architetto Nikola Bašić.",
        come: "A piedi dalla città vecchia, lungo la Riva.",
        quando: "Al tramonto, quando suona e illumina.",
        tempo: "1 ora",
        consiglio: "Sedersi sui gradini: il suono cambia con il vento e le onde."
      },
      {
        nome: "Città vecchia di Zara",
        testo: "Una penisola con il Foro romano, la rotonda di San Donato (IX secolo) e chiese romaniche. Molto danneggiata nella Seconda guerra mondiale e ricostruita.",
        come: "A piedi dai parcheggi esterni alle mura.",
        quando: "Mattina o sera.",
        tempo: "2 ore",
        consiglio: "Il mercato del pesce e della frutta, vicino alle mura, è una buona colazione."
      },
      {
        nome: "Cascate di Skradinski buk (Krka)",
        testo: "Una serie di cascate e vasche su terrazze di travertino nel Parco Nazionale della Krka. Si cammina su passerelle e si prende un battello da Skradin.",
        come: "Da Sebenico circa 45 minuti. Si parte dall'ingresso di Skradin con battello incluso nel biglietto.",
        quando: "Mattina presto o fine giornata. Maggio-giugno e settembre.",
        tempo: "3-4 ore",
        url: "https://np-krka.hr/en/",
        consiglio: "Il bagno ai piedi delle cascate non è più consentito."
      },
      {
        nome: "Cattedrale di San Giacomo, Sebenico",
        testo: "Cattedrale rinascimentale in pietra, iscritta all'UNESCO, costruita senza malta con blocchi incastrati. Sul fregio esterno corrono oltre 70 volti scolpiti.",
        come: "A piedi dal centro storico.",
        quando: "Mattina.",
        tempo: "45 minuti",
        consiglio: "Guardare i volti sull'abside: sono ritratti di abitanti della città."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Zara al mattino",
          "Pranzo in città",
          "Tramonto all'Organo marino"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Zara e tramonto sulla Riva",
          "Giorno 2: Krka al mattino, Sebenico nel pomeriggio"
        ]
      }
    ],
    zone: [
      {
        nome: "Zara città vecchia",
        perChi: "chi vuole il centro",
        testo: "Alloggi in pietra a pochi passi da tutto; di notte è vivace nella zona della Riva."
      },
      {
        nome: "Sebenico",
        perChi: "chi vuole raggiungere la Krka",
        testo: "Più tranquilla di Spalato, comoda per l'autostrada e il parco."
      }
    ],
    sapori: [
      {
        nome: "Maraschino",
        testo: "Liquore di ciliegie marasche tipico di Zara."
      },
      {
        nome: "Paška janjetina",
        testo: "Agnello dell'isola di Pag, arrosto."
      },
      {
        nome: "Sir iz mišine",
        testo: "Formaggio di Pag stagionato."
      },
      {
        nome: "Pesce di Sebenico",
        testo: "Cucina semplice di mare nelle konobe del porto."
      }
    ],
    attenzioni: [
      "Alla Krka non si può più fare il bagno: chiedere agli sportelli se ci sono limitazioni.",
      "In luglio e agosto le cascate si riempiono: arrivare all'apertura.",
      "I parcheggi vicino alla città vecchia sono a pagamento e con limiti di tempo."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Lo Skradinski buk nel Parco Nazionale del Krka',
    immagine: '/images/viaggi/croazia-itinerario/giorno-05-zara-krka-sebenico.jpg',
  },
  {
    slug: 'spalato',
    paeseSlug: 'croazia',
    ordine: 4,
    nome: 'Spalato e Traù',
    tipologia: ['città romana', 'mare', 'porto'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Spalato vive dentro il palazzo che l\'imperatore Diocleziano si fece costruire intorno al 300 d.C. A mezz\'ora c\'è Traù, isoletta medievale patrimonio UNESCO. Il porto è lo snodo dei traghetti per le isole.',
    percheAndarci: 'Per il palazzo di Diocleziano, la Riva, il Marjan e i collegamenti con Hvar, Brač e Vis.',
    cosaVedere: [
      'Il Peristilio e la cattedrale di San Doimo',
      'I sotterranei del palazzo',
      'La collina del Marjan',
      'Il centro di Traù e il portale di Radovan',
    ],
    cosaFare: ['Il picigin a Bačvice', 'Salire sul campanile di San Doimo', 'La sera sulla Riva'],
    doveDormire: 'Dentro o accanto al palazzo (camere 100-180 €); ostelli da 30-40 € a letto.',
    comeArrivare: 'Aeroporto di Spalato; auto, bus o traghetto da Ancona.',
    comeSpostarsi: 'A piedi nel centro; bus per Traù; catamarani dal porto per le isole.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre.',
    costi: 'Sotterranei del palazzo 10-15 €.',
    erroriDaEvitare: ['Girare in costume nel centro storico: si prende la multa'],
    luoghi: [
      {
        nome: "Palazzo di Diocleziano",
        testo: "Il palazzo-fortezza dell'imperatore romano Diocleziano, costruito attorno al 305 d.C., dentro cui oggi vive la città vecchia. Peristilio, mausoleo trasformato in cattedrale e sotterranei sono il cuore della visita.",
        come: "A piedi dalla Riva, attraverso la Porta d'Argento o la Porta di Bronzo. Entrata libera alle strade; si paga per cattedrale, campanile e sotterranei.",
        quando: "Mattina presto o sera: tra le 11 e le 16 i vicoli sono pieni.",
        tempo: "2-3 ore",
        consiglio: "Sotterranei: aperti con ingresso a pagamento, quasi vuoti, e fotogenici."
      },
      {
        nome: "Cattedrale di San Doimo e campanile",
        testo: "Il mausoleo ottagonale di Diocleziano, divenuto cattedrale nel VII secolo, è uno degli edifici più antichi al mondo ancora usati come chiesa. Il campanile alto 57 metri dà la vista sui tetti.",
        come: "Dentro il Peristilio. Biglietto per cattedrale e salita al campanile.",
        quando: "Mattina.",
        tempo: "1 ora",
        consiglio: "Salire al campanile per la vista: i gradini sono molti e stretti."
      },
      {
        nome: "Collina di Marjan",
        testo: "Il parco boscoso sopra la città, con sentieri, chiesette e un belvedere sul porto e sulle isole.",
        come: "A piedi dal quartiere Veli Varoš, circa 20 minuti di salita fino al belvedere.",
        quando: "Tardo pomeriggio.",
        tempo: "2 ore",
        consiglio: "Portare acqua: lungo la salita non ci sono bar."
      },
      {
        nome: "Traù",
        testo: "Una città-isola piccola e medievale a 30 km da Spalato, con la cattedrale di San Lorenzo e il suo portale scolpito da Radovan. Patrimonio UNESCO.",
        come: "In auto o con il bus 37 da Spalato, circa 1 ora. Si visita a piedi.",
        quando: "Mattina.",
        tempo: "3 ore",
        consiglio: "Il pomeriggio si ferma a prendere un gelato sulla Riva."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Palazzo di Diocleziano al mattino",
          "Pranzo in città vecchia",
          "Salita a Marjan nel pomeriggio",
          "Cena sulla Riva"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: palazzo, cattedrale e sotterranei",
          "Giorno 2: Traù al mattino, Klis o Salona nel pomeriggio"
        ]
      }
    ],
    zone: [
      {
        nome: "Città vecchia",
        perChi: "chi vuole il centro",
        testo: "Camere dentro il palazzo, a piedi da tutto; la sera c'è rumore fino a tardi."
      },
      {
        nome: "Veli Varoš",
        perChi: "chi cerca un quartiere tranquillo",
        testo: "Case di pescatori a 10 minuti dal centro, sotto Marjan."
      }
    ],
    sapori: [
      {
        nome: "Pašticada",
        testo: "Manzo stufato in salsa di vino e prugne, con gnocchi."
      },
      {
        nome: "Soparnik",
        testo: "Torta di bietole salata della Dalmazia, cotta sotto la cenere."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto nero al nero di seppia."
      },
      {
        nome: "Rožata",
        testo: "Crema caramellata della Dalmazia, dal tipico gusto di rosolio."
      }
    ],
    attenzioni: [
      "I taxi non segnalati a Spalato possono far pagare molto più della tariffa: usare Bolt o Uber.",
      "Per i traghetti in estate prenotare il posto per l'auto con Jadrolinija.",
      "Attenzione ai ristoranti in piazza con menu turistici e prezzi alti: allontanarsi di una strada riduce il costo."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Le colonne e gli archi del Peristilio del palazzo di Diocleziano a Spalato',
    immagine: '/images/viaggi/croazia-itinerario/giorno-07-spalato.jpg',
  },
  {
    slug: 'hvar',
    paeseSlug: 'croazia',
    ordine: 5,
    nome: 'Hvar',
    tipologia: ['isola', 'mare', 'vita notturna'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più soleggiata dell\'Adriatico, con una cittadina veneziana sulla baia, le isole Pakleni davanti al porto, campi di lavanda nell\'interno e la piana di Stari Grad, patrimonio UNESCO.',
    percheAndarci: 'Per le calette delle Pakleni, il tramonto dalla fortezza e, per chi la cerca, la vita notturna.',
    cosaVedere: ['La fortezza spagnola', 'Piazza di Santo Stefano e il teatro del 1612', 'Le isole Pakleni', 'La piana di Stari Grad'],
    cosaFare: ['Taxi-boat per Palmižana', 'Giro dell\'interno tra lavanda e paesi abbandonati'],
    doveDormire: 'Hvar città per la vita serale (100-220 €, di più in agosto), Stari Grad e Jelsa per la quiete.',
    comeArrivare: 'Catamarano da Spalato (circa 1 ora); traghetto per auto da Spalato a Stari Grad.',
    periodoMigliore: 'giugno e settembre; lavanda in fiore tra giugno e luglio.',
    costi: 'Taxi-boat per le Pakleni 10-15 € andata e ritorno.',
    erroriDaEvitare: ['Bere per strada o girare in costume in città: multe severe', 'Arrivare in agosto senza alloggio prenotato'],
    luoghi: [
      {
        nome: "Hvar città e fortezza Spagnola",
        testo: "Una cittadina veneziana sul mare con una piazza grande quanto un campo da calcio, la cattedrale e, sopra, la fortezza (Fortica) del Cinquecento con vista sulle isole Pakleni.",
        come: "A piedi dal porto. Fortezza con salita di circa 15 minuti.",
        quando: "Fortezza al mattino o tardo pomeriggio, per il caldo.",
        tempo: "2-3 ore",
        consiglio: "Salire alla fortezza al tramonto e cenare dopo, in un vicolo fuori dalla piazza."
      },
      {
        nome: "Isole Pakleni",
        testo: "Un arcipelago di isolotti con baie e acque limpide davanti a Hvar città. Si raggiungono con taxi-barca in 10-15 minuti.",
        come: "Taxi-barca dal porto di Hvar, andata e ritorno a orari.",
        quando: "Mattina; le baie sono più calme prima di mezzogiorno.",
        tempo: "mezza giornata",
        consiglio: "Concordare l'orario di ritorno con il barcaiolo."
      },
      {
        nome: "Piana di Stari Grad",
        testo: "Un paesaggio agricolo con muretti e campi divisi dai coloni greci nel IV secolo a.C., rimasti quasi uguali; è patrimonio UNESCO.",
        come: "Da Stari Grad in bici o a piedi, per sentieri tra uliveti e vigneti.",
        quando: "Primavera e autunno.",
        tempo: "2-3 ore",
        consiglio: "Il traghetto da Spalato arriva a Stari Grad, non a Hvar città."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Hvar città al mattino",
          "Isole Pakleni, mare",
          "Fortezza al tramonto"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Hvar città e fortezza",
          "Giorno 2: Stari Grad e la sua piana, poi Jelsa o Vrboska"
        ]
      }
    ],
    zone: [
      {
        nome: "Hvar città",
        perChi: "chi vuole vita e comodità",
        testo: "Alberghi, locali e il porto, ma più caro e rumoroso d'estate."
      },
      {
        nome: "Stari Grad e Jelsa",
        perChi: "chi cerca calma",
        testo: "Più tranquille e meno care, bus per Hvar città."
      }
    ],
    sapori: [
      {
        nome: "Gregada",
        testo: "Zuppa di pesce con patate e olio, cucina dei pescatori."
      },
      {
        nome: "Lavanda",
        testo: "Olio essenziale e miele, in vendita ovunque sull'isola."
      },
      {
        nome: "Vini Plavac e Bogdanuša",
        testo: "Rosso e bianco locali, dalle cantine dell'isola."
      }
    ],
    attenzioni: [
      "Il traghetto da Spalato porta a Stari Grad; da lì servono bus o taxi per Hvar città.",
      "In estate le camere nei weekend finiscono presto: prenotare con mesi di anticipo.",
      "Sugli scogli servono scarpette da mare: i ricci sono comuni."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La baia di Hvar e le isole Pakleni dalla fortezza spagnola',
    immagine: '/images/viaggi/croazia-itinerario/giorno-08-hvar.jpg',
  },
  {
    slug: 'curzola',
    paeseSlug: 'croazia',
    ordine: 6,
    nome: 'Curzola',
    tipologia: ['isola', 'città storica', 'vino'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una città vecchia fortificata su una penisola, con le vie a lisca di pesce, la cattedrale di San Marco e la casa dedicata a Marco Polo; sull\'isola si produce il vino bianco grk.',
    percheAndarci: 'Per una città storica più tranquilla di Hvar e Dubrovnik e per la danza della moreška.',
    cosaVedere: ['La città vecchia e le mura', 'La cattedrale di San Marco', 'Lumbarda e i suoi vigneti'],
    cosaFare: ['Assistere alla moreška nelle sere d\'estate', 'Degustare il grk a Lumbarda'],
    doveDormire: 'Città vecchia o Lumbarda, 90-160 €.',
    comeArrivare: 'Catamarano da Spalato, Hvar o Dubrovnik; traghetto da Orebić sulla penisola di Pelješac.',
    periodoMigliore: 'giugno e settembre.',
    erroriDaEvitare: ['Visitarla solo in giornata dalle crociere, perdendo la sera'],
    luoghi: [
      {
        nome: "Città vecchia di Curzola",
        testo: "Una penisola fortificata dalla pianta «a lisca di pesce», con vicoli pensati per riparare dal vento. Mura veneziane e torri, e la cattedrale di San Marco con l'altare di Tintoretto.",
        come: "A piedi dal porto, dopo la Porta di Terra.",
        quando: "Mattina o sera.",
        tempo: "2 ore",
        consiglio: "Salire sulla torre della cattedrale per i tetti."
      },
      {
        nome: "Casa di Marco Polo",
        testo: "Secondo la tradizione locale Marco Polo sarebbe nato a Curzola. Una casa-torre medievale ospita una piccola mostra.",
        come: "Nel centro storico, con scalini ripidi.",
        quando: "Mattina.",
        tempo: "30 minuti",
        consiglio: "La nascita a Curzola è una tradizione, non un fatto documentato."
      },
      {
        nome: "Moreška",
        testo: "Una danza con spade che mette in scena la lotta tra mori e cristiani, eseguita a Curzola da secoli. In estate si vede una volta a settimana.",
        come: "Di sera all'aperto o in sala, con biglietto.",
        quando: "Estate, ore serali.",
        tempo: "1 ora",
        consiglio: "Controllare giorno e orari sul posto: variano."
      },
      {
        nome: "Penisola di Sabbioncello (Pelješac)",
        testo: "La lunga penisola di fronte, con piccoli produttori di Plavac mali. Da Orebić si arriva a Curzola con il traghetto in circa 15 minuti.",
        come: "In auto, con visita alle cantine di Dingač e Potomje.",
        quando: "Primavera e autunno.",
        tempo: "mezza giornata",
        consiglio: "Prenotare le degustazioni, soprattutto in alta stagione."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Città vecchia al mattino",
          "Pranzo sul mare",
          "Spiaggia di Lumbarda o gita in barca",
          "Moreška la sera, se in programma"
        ]
      }
    ],
    zone: [
      {
        nome: "Città vecchia",
        perChi: "chi vuole atmosfera",
        testo: "Camere nel centro storico; la sera c'è musica e passeggio, ma si dorme bene."
      },
      {
        nome: "Lumbarda",
        perChi: "chi cerca spiagge",
        testo: "Villaggio con spiagge di sabbia e vigneti, a 6 km."
      }
    ],
    sapori: [
      {
        nome: "Grk",
        testo: "Vino bianco secco dell'area di Lumbarda."
      },
      {
        nome: "Pošip",
        testo: "Bianco profumato della zona, ottimo con il pesce."
      },
      {
        nome: "Plavac mali",
        testo: "Rosso potente di Pelješac."
      },
      {
        nome: "Zrnovski makaruli",
        testo: "Pasta fresca locale, con sugo di carne."
      }
    ],
    attenzioni: [
      "Il traghetto da Spalato e da Dubrovnik va prenotato in alta stagione.",
      "Con il vento di bora i collegamenti possono saltare.",
      "Nei ristoranti sul molo controllare il prezzo del pesce a peso."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La città vecchia di Curzola sulla penisola fortificata',
    immagine: '/images/viaggi/croazia-itinerario/giorno-10-curzola.jpg',
  },
  {
    slug: 'dubrovnik',
    paeseSlug: 'croazia',
    ordine: 7,
    nome: 'Dubrovnik e Ston',
    tipologia: ['città fortificata', 'mare', 'isole'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'antica repubblica di Ragusa, chiusa da due chilometri di mura sopra il mare, con lo Stradun, i palazzi e i monasteri. Davanti c\'è l\'isola di Lokrum; a nord, Ston con le sue mura lunghe oltre cinque chilometri e le ostriche di Mali Ston.',
    percheAndarci: 'Per il giro delle mura, la città vecchia, Lokrum e le gite verso Ston, le Elafiti e le Bocche di Cattaro.',
    cosaVedere: [
      'Le mura e la fortezza di Lovrijenac',
      'Lo Stradun e il palazzo del Rettore',
      'L\'isola di Lokrum',
      'Il panorama dal monte Srđ',
      'Le mura e le saline di Ston',
    ],
    cosaFare: ['Il giro delle mura nel tardo pomeriggio', 'Un bagno al Buža, fuori dalle mura', 'Ostriche a Mali Ston'],
    doveDormire: 'Dentro le mura (da 150 €, spesso oltre 250 € in alta stagione) o a Lapad e Gruž per prezzi più bassi.',
    comeArrivare: 'Aeroporto di Čilipi (circa 20 km); catamarano da Spalato, Hvar e Curzola; auto sul ponte di Pelješac.',
    comeSpostarsi: 'A piedi in centro; bus urbani per Gruž e Lapad; barca per Lokrum.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre.',
    costi: 'Mura circa 40 € con Lovrijenac; Lokrum con barca 25-30 €.',
    erroriDaEvitare: [
      'Salire sulle mura nelle ore centrali, con caldo e folla delle crociere',
      'Prenotare dentro le mura senza considerare le scale con i bagagli',
      'Arrivare in auto e cercare parcheggio vicino alla città vecchia',
    ],
    luoghi: [
      {
        nome: "Mura di Dubrovnik",
        testo: "Un anello di mura medievali lungo quasi due chilometri intorno alla città vecchia, con torri e bastioni. È il percorso più bello per vedere i tetti rossi e il mare.",
        come: "Si sale dalla Porta Pile o dal lato del porto; il percorso è a senso unico.",
        quando: "All'apertura o nel tardo pomeriggio: a mezzogiorno è caldo e affollato.",
        tempo: "1 ora e mezza-2 ore",
        consiglio: "Portare acqua e un cappello: ci sono pochi punti d'ombra."
      },
      {
        nome: "Stradun e città vecchia",
        testo: "La via principale in pietra levigata, lunga circa 300 metri, con la fontana di Onofrio, il Palazzo del Rettore e la chiesa di San Biagio. Dopo il terremoto del 1667 fu ricostruita in forme barocche.",
        come: "A piedi dalla Porta Pile. L'auto non entra.",
        quando: "Presto la mattina o la sera.",
        tempo: "2-3 ore",
        consiglio: "Un giro dopo le 20, quando i gruppi sono ripartiti, è molto diverso."
      },
      {
        nome: "Funivia e monte Srđ",
        testo: "Dalla stazione sotto le mura la funivia sale in pochi minuti sul monte Srđ, con la vista su tutta la città e le isole.",
        come: "Dalla stazione vicino a Porta Buža, a piedi.",
        quando: "Tardo pomeriggio per il tramonto.",
        tempo: "1-2 ore",
        consiglio: "Prenotare l'ora di salita al tramonto: le code possono essere lunghe."
      },
      {
        nome: "Ston e le ostriche di Mali Ston",
        testo: "Le mura di Ston, lunghe circa 5,5 km, sono tra le più lunghe d'Europa. Qui si allevano le ostriche e le cozze di Mali Ston.",
        come: "In auto da Dubrovnik, circa 1 ora, attraverso il ponte di Pelješac.",
        quando: "Mattina per le mura e pranzo con le ostriche.",
        tempo: "mezza giornata",
        consiglio: "Le mura si salgono a pagamento, ma la camminata è faticosa."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mura all'apertura",
          "Stradun e Palazzo del Rettore",
          "Pranzo fuori dalle mura",
          "Funivia al tramonto"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: mura, Stradun e funivia",
          "Giorno 2: Ston e ostriche, oppure Lokrum in barca"
        ]
      }
    ],
    zone: [
      {
        nome: "Città vecchia",
        perChi: "chi vuole stare dentro le mura",
        testo: "Camere dentro la città, ma rumorosa, con folla di giorno e pochi servizi per le auto."
      },
      {
        nome: "Lapad e Babin Kuk",
        perChi: "chi cerca spiagge",
        testo: "Penisole a pochi km, con alberghi, spiagge e bus per il centro."
      }
    ],
    sapori: [
      {
        nome: "Ostriche di Mali Ston",
        testo: "Piccole e salate, allevate nella baia vicina."
      },
      {
        nome: "Rožata",
        testo: "Crema caramellata della città."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto nero al nero di seppia."
      },
      {
        nome: "Dingač",
        testo: "Rosso intenso della penisola di Pelješac."
      }
    ],
    attenzioni: [
      "In alta stagione la città è molto affollata, con limiti per le navi da crociera: evitare le ore centrali.",
      "I ristoranti sullo Stradun costano di più: andare nei vicoli laterali o fuori dalle mura.",
      "Nei parcheggi dentro e fuori città si paga a ore e si applicano multe per chi resta oltre.",
      "Il ponte di Pelješac evita il passaggio in Bosnia a Neum, quindi nessun controllo di frontiera."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Le mura e il porto vecchio di Dubrovnik sul mare',
    immagine: '/images/viaggi/croazia-itinerario/giorno-11-dubrovnik.jpg',
  },
]
