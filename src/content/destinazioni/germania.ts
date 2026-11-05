import type { Destinazione } from '@/lib/types'

// Prima uscita tedesca dell'archivio, collegata al viaggio "Berlino in
// quattro giorni" (src/content/viaggi/57-berlino-weekend.md, dati in
// src/content/viaggi-dati/berlino-weekend.ts), viaggio fatto da Rick. Un'unica destinazione,
// Berlino: a differenza di Cracovia con Auschwitz-Birkenau, qui i luoghi
// della memoria (Muro, Topografia del Terrore) sono dentro la città stessa e
// non richiedono una scheda-destinazione separata. visitataPersonalmente è
// true; il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. I paragrafi legati al nazismo e alla Guerra Fredda
// restano in un registro sobrio e informativo, mai da "attrazione". Nessun
// nome di hotel, ristorante o operatore è stato inventato. Orari e prezzi
// vanno riverificati sui canali ufficiali prima di partire.

export const destinazioniGermania: Destinazione[] = [
  {
    slug: 'berlino',
    paeseSlug: 'germania',
    ordine: 1,
    nome: 'Berlino',
    tipologia: ['città', 'storia', 'memoria', 'arte'],
    giorniConsigliati: '4 giorni, uno in più rispetto ad altre capitali, per via delle dimensioni della città',
    visitataPersonalmente: true,
    introduzione:
      'La capitale tedesca, capitale del Reich fino al 1945, divisa dal 1961 al 1989 in Berlino Ovest e Berlino Est dal Muro che l\'ha resa il simbolo fisico della Guerra Fredda, e riunificata con la Germania nel 1990. È molto più estesa e meno densa di altre capitali europee, con quartieri di carattere molto diverso: il centro storico e il quartiere del governo, l\'Isola dei Musei patrimonio UNESCO, e i quartieri a est come Kreuzberg e Friedrichshain, cresciuti sulla scia della riunificazione fino a diventare tra i più vivi d\'Europa.',
    percheAndarci:
      'Concentra in un\'unica città due secoli di storia europea (l\'impero, il nazismo, la divisione della Guerra Fredda, la riunificazione), con siti rimasti dov\'erano che si visitano camminando. Ed è una delle capitali europee con la scena artistica, museale e notturna più densa, cresciuta proprio nei quartieri che fino a pochi decenni fa erano ai margini della città divisa.',
    cosaVedere: [
      'La Porta di Brandeburgo, costruita nel 1791, con la Quadriga sulla sommità, diventata dal 1989 il simbolo della riunificazione tedesca',
      'Il Reichstag, sede del Bundestag, con la celebre cupola di vetro disegnata da Norman Foster e completata nel 1999, visitabile con prenotazione gratuita in anticipo',
      'Il Memoriale dell\'Olocausto (Denkmal für die ermordeten Juden Europas), il campo di 2.711 stele in cemento disegnato da Peter Eisenman vicino alla Porta di Brandeburgo, con il centro informazioni sotterraneo',
      'La Gedenkstätte Berliner Mauer (Memoriale del Muro di Berlino) lungo Bernauer Straße, il tratto meglio conservato e documentato, con la ricostruzione della «striscia della morte» e il centro di documentazione',
      'Checkpoint Charlie, l\'ex punto di attraversamento tra i settori americano e sovietico, oggi ricostruito con un presidio simbolico e diventato uno dei luoghi più fotografati e turistici della città',
      'La Topografia del Terrore (Topographie des Terrors), il centro di documentazione costruito sul sito delle ex sedi centrali della Gestapo e delle SS, con un tratto di Muro conservato lungo il perimetro',
      'L\'Isola dei Musei (Museumsinsel), patrimonio UNESCO dal 1999, con cinque musei tra cui il Neues Museum (con il busto di Nefertiti), l\'Altes Museum e il Pergamonmuseum, chiuso per lavori dal 2023 e in riapertura il 4 giugno 2027',
      'L\'East Side Gallery, 1,3 km del Muro rimasti in piedi lungo la Sprea a Friedrichshain, dipinti da oltre cento artisti nel 1990: la più lunga galleria d\'arte a cielo aperto del mondo',
      'Il quartiere di Kreuzberg, multiculturale e alternativo, con il mercato turco lungo il Maybachufer e molta street art',
    ],
    cosaFare: [
      'Salire sulla cupola del Reichstag (prenotazione gratuita obbligatoria) per il panorama sul quartiere del governo',
      'Camminare lungo Bernauer Straße al Memoriale del Muro, il modo più diretto per capire cosa significasse il confine tra le due Berlino',
      'Passare almeno mezza giornata sull\'Isola dei Musei, sapendo che il Pergamonmuseum è chiuso del tutto fino al 4 giugno 2027',
      'Percorrere a piedi o in bici l\'East Side Gallery lungo la Sprea',
      'Una serata tra i locali di Kreuzberg o Friedrichshain e, per chi è interessato, un assaggio della scena techno berlinese (c\'è una scheda esperienza dedicata)',
    ],
    doveDormire:
      'Mitte, il centro storico intorno alla Porta di Brandeburgo e all\'Isola dei Musei, è la zona più comoda per la prima parte dell\'itinerario, ben servita dai mezzi. Kreuzberg e Friedrichshain, più a est, sono l\'alternativa più vissuta e in genere più economica, con una vita serale propria che il centro storico non ha, a scapito di qualche minuto in più di metro per i musei.',
    doveMangiare:
      'Il currywurst, il würstel tagliato a fette e servito con salsa al curry, nato proprio a Berlino nel dopoguerra; il döner kebab, arrivato con l\'immigrazione turca e diventato piatto simbolo della città, al punto che più varianti si contendono il titolo di «originale»; i mercati come il Markthalle Neun a Kreuzberg per lo street food internazionale. La domenica quasi tutti i negozi (non i ristoranti) sono chiusi per la Ladenschlussgesetz, la legge tedesca sugli orari di apertura.',
    comeArrivare:
      'Aeroporto di Berlino Brandeburgo (BER), unico scalo cittadino dal 2020: collegato al centro con S-Bahn e treni regionali in circa 30 minuti. In treno dall\'Italia non esiste un collegamento diretto comodo: si arriva in genere in aereo.',
    comeSpostarsi: 'Rete BVG di U-Bahn, S-Bahn, tram e bus, molto estesa vista la dimensione della città: a differenza di centri storici più compatti come Cracovia, qui gli spostamenti tra un quartiere e l\'altro richiedono quasi sempre i mezzi pubblici. Non serve auto.',
    periodoMigliore: 'maggio-settembre per il clima mite e le giornate lunghe; giugno-agosto è alta stagione, più affollata; novembre-marzo è freddo ma i mercatini di Natale a dicembre restano un buon motivo per andarci comunque',
    costi: 'città di fascia media per l\'Europa occidentale, più accessibile di Parigi o Londra: cena normale 15-25€ a testa, biglietto BVG singolo circa 3€, ingressi ai grandi musei la voce più costosa della giornata tipo',
    erroriDaEvitare: [
      'Farsi fotografare con i finti soldati a Checkpoint Charlie senza sapere che il servizio è a pagamento: la foto «gratuita» si paga a cose fatte',
      'Programmare l\'Isola dei Musei contando sul Pergamonmuseum: è chiuso del tutto dall\'ottobre 2023. L\'ala nord con l\'Altare di Pergamo riapre il 4 giugno 2027, l\'ala sud con la Porta di Ishtar solo intorno al 2037',
      'Dare per scontato che i negozi siano aperti la domenica: la legge tedesca sugli orari chiude quasi tutta l\'attività commerciale, ristoranti esclusi',
      'Sottovalutare le distanze: Berlino è molto più estesa di altre capitali europee, e spostarsi tra Mitte e Friedrichshain richiede sempre i mezzi pubblici',
      'Trattare i luoghi della memoria (Muro, Topografia del Terrore, Memoriale dell\'Olocausto) come tappe fotografiche qualunque: sono pensati per una visita silenziosa e informata',
    ],
    luoghi: [
      {
        nome: "Reichstag e cupola",
        testo: "Sede del Bundestag, con la cupola di vetro progettata da Norman Foster e completata nel 1999. Una rampa a spirale porta in cima, con vista sulla città e sul Parlamento sotto di sé.",
        come: "Ingresso gratuito ma con registrazione online obbligatoria sul sito del Bundestag; portare un documento d'identità. Controlli di sicurezza all'ingresso.",
        quando: "Sera, per le luci della città; registrarsi con giorni di anticipo.",
        tempo: "1,5 ore",
        costo: "ingresso gratuito, registrazione obbligatoria",
        url: "https://www.bundestag.de",
        consiglio: "L'audioguida è gratuita e inclusa."
      },
      {
        nome: "Porta di Brandeburgo",
        testo: "Il monumento neoclassico del 1791 con la Quadriga sulla sommità, dal 1989 simbolo della riunificazione tedesca. Sulla Pariser Platz si trovano ambasciate e hotel di lusso.",
        come: "A piedi dalla metropolitana S-Bahn Brandenburger Tor.",
        quando: "Mattina presto o sera, per le foto senza folla.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Attenzione ai finti soldati che chiedono denaro per le foto."
      },
      {
        nome: "Memoriale dell'Olocausto",
        testo: "Un campo di 2.711 stele di cemento di Peter Eisenman, in cui si cammina in un paesaggio che disorienta. Sotto il memoriale c'è un centro di informazione con storie personali.",
        come: "A piedi dalla Porta di Brandeburgo (5 minuti).",
        quando: "Tutto il giorno, sempre aperto; il centro di informazione è chiuso il lunedì.",
        tempo: "1 ora",
        costo: "ingresso libero",
        url: "https://www.stiftung-denkmal.de",
        consiglio: "Entrare con rispetto: è un luogo di commemorazione, non un parco giochi."
      },
      {
        nome: "Memoriale del Muro di Berlino (Bernauer Straße)",
        testo: "Il tratto meglio conservato del Muro, con la striscia della morte originale, la torre di guardia e il centro di documentazione. Una passerella sopra la striscia mostra come era la divisione.",
        come: "S-Bahn fino a Nordbahnhof, 5 minuti a piedi.",
        quando: "Mattina; centro di documentazione chiuso il lunedì.",
        tempo: "1,5-2 ore",
        costo: "ingresso libero",
        url: "https://www.stiftung-berliner-mauer.de",
        consiglio: "Salire sulla piattaforma del centro di documentazione per la vista sul percorso."
      },
      {
        nome: "Topografia del Terrore",
        testo: "Il centro di documentazione sul sito delle ex sedi della Gestapo e delle SS, con un tratto di Muro. La mostra racconta il funzionamento della repressione nazista.",
        come: "A piedi dal Potsdamer Platz (10 minuti).",
        quando: "Mattina nei giorni feriali.",
        tempo: "1,5-2 ore",
        costo: "ingresso libero",
        url: "https://www.topographie.de",
        consiglio: "Combinabile con un tratto di Muro lì accanto."
      },
      {
        nome: "Isola dei Musei",
        testo: "Patrimonio UNESCO dal 1999, con cinque musei tra cui il Neues Museum (con il busto di Nefertiti), l'Altes Museum e la Alte Nationalgalerie. Il Pergamonmuseum è chiuso del tutto dal 2023: l'ala nord con l'Altare di Pergamo riapre il 4 giugno 2027, l'ala sud con la Porta di Ishtar intorno al 2037. Nel frattempo, il Pergamonmuseum. Das Panorama, di fronte all'isola, mostra il plastico dell'antica Pergamo.",
        come: "S-Bahn fino a Hackescher Markt, 10 minuti a piedi. Esiste un biglietto cumulativo per l'isola.",
        quando: "Mattina nei giorni feriali; prenotare online l'orario d'ingresso.",
        tempo: "mezza giornata",
        url: "https://www.smb.museum",
        consiglio: "Prenotare in anticipo il Neues Museum: l'ingresso per Nefertiti è a orario."
      },
      {
        nome: "East Side Gallery",
        testo: "1,3 km di Muro rimasti in piedi lungo la Sprea a Friedrichshain, dipinti da oltre cento artisti nel 1990: la galleria d'arte all'aperto più lunga del mondo.",
        come: "S-Bahn fino a Ostbahnhof o Warschauer Straße.",
        quando: "Mattina o tarda sera, con meno gente.",
        tempo: "1-1,5 ore",
        costo: "ingresso libero",
        consiglio: "Non scrivere sulle opere: è un reato e danneggia i murales."
      },
      {
        nome: "Mauerpark",
        testo: "Un parco sul vecchio tracciato del Muro, noto per il mercatino delle pulci della domenica e per il karaoke all'aperto.",
        come: "U-Bahn fino a Bernauer Straße o Eberswalder Straße.",
        quando: "Domenica, dalle 10 alle 18.",
        tempo: "2 ore",
        costo: "ingresso libero",
        consiglio: "Il karaoke nell'anfiteatro è un'esperienza da locali."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Reichstag e Porta di Brandeburgo",
          "Memoriale dell'Olocausto",
          "Pranzo con currywurst",
          "Pomeriggio: Topografia del Terrore",
          "Sera: East Side Gallery"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Isola dei Musei",
          "Memoriale del Muro (Bernauer Straße)",
          "Sera a Prenzlauer Berg"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Mauerpark la domenica, Charlottenburg o Potsdam"
        ]
      }
    ],
    zone: [
      {
        nome: "Mitte",
        perChi: "Chi ha poco tempo e vuole le attrazioni a piedi",
        testo: "Vicino a Isola dei Musei e Alexanderplatz; prezzi alti e zone turistiche."
      },
      {
        nome: "Prenzlauer Berg",
        perChi: "Chi cerca un quartiere tranquillo e caffè",
        testo: "Case ben tenute, ristoranti e parchi; collegamenti buoni con la metro."
      },
      {
        nome: "Kreuzberg e Friedrichshain",
        perChi: "Chi vuole vita notturna e arte di strada",
        testo: "Locali, street food e murales; più rumore e prezzi più bassi."
      },
      {
        nome: "Charlottenburg",
        perChi: "Chi preferisce un'atmosfera classica",
        testo: "Negozi e viali eleganti, vicino a Zoo e Palazzo di Charlottenburg."
      }
    ],
    sapori: [
      {
        nome: "Currywurst",
        testo: "Salsiccia affettata con salsa al curry e ketchup, da mangiare in piedi ai chioschi."
      },
      {
        nome: "Döner Kebab",
        testo: "L'invenzione berlinese del kebab nel pane: la versione di strada più famosa della città."
      },
      {
        nome: "Berliner (Pfannkuchen)",
        testo: "La ciambella ripiena di marmellata, tipica di bar e panifici."
      },
      {
        nome: "Eisbein e Schnitzel",
        testo: "Stinco di maiale e cotoletta, piatti classici di birrerie e ristoranti tradizionali."
      }
    ],
    attenzioni: [
      "Biglietti BVG: convalidare quelli di carta e tenere il titolo con sé, la multa è di 60 euro.",
      "Contanti: in molti locali non si accettano carte, portarne con sé.",
      "Borseggiatori a Alexanderplatz, Kottbusser Tor e Brandenburger Tor.",
      "Falsi soldati e petizioni (spesso con firma per sordomuti) vicino ai monumenti: ignorarli.",
      "La domenica quasi tutti i negozi sono chiusi."
    ],
    esperienzeSlugs: ['reichstag-cupola', 'museumsinsel-pergamon', 'east-side-gallery', 'berlino-clubbing'],
    tripSlugs: ['berlino-weekend'],
    imageAlt: 'Il palazzo del Reichstag a Berlino con la cupola di vetro e la bandiera tedesca, visto dal prato antistante',
    immagine: '/images/germania/berlino.jpg',
  },
]
