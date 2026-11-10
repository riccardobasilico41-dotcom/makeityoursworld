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
    miaEsperienza:
      "Ci sono stato con amici per quattro giorni, girando con i mezzi: la Porta di Brandeburgo e il Reichstag, un giorno intero sul Muro e la Guerra Fredda, l'Isola dei Musei e Berlino Est, e l'ultimo giorno Kreuzberg e Friedrichshain.",
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
    comeArrivare: "Aeroporto di **Berlino Brandeburgo (BER)**, unico scalo cittadino dal 2020. Il **FEX Airport Express** e i treni regionali arrivano alla Hauptbahnhof in circa 30 minuti; le **S-Bahn S9 e S45** sono più lente, circa 45-50 minuti, ma fermano in più quartieri. Per tutti serve il biglietto **ABC**, circa 5 € nel 2026, alle macchinette o nell'app BVG: il biglietto AB non basta. In treno dall'Italia non esiste un collegamento diretto comodo: si arriva in genere in aereo.",
    comeSpostarsi: 'Rete BVG di U-Bahn, S-Bahn, tram e bus, molto estesa vista la dimensione della città: a differenza di centri storici più compatti come Cracovia, qui gli spostamenti tra un quartiere e l\'altro richiedono quasi sempre i mezzi pubblici. Non serve auto.',
    periodoMigliore: 'maggio-settembre per il clima mite e le giornate lunghe; giugno-agosto è alta stagione, più affollata; novembre-marzo è freddo ma i mercatini di Natale a dicembre restano un buon motivo per andarci comunque',
    costi: "città di fascia media per l'Europa occidentale, più accessibile di Parigi o Londra: cena normale 15-25€ a testa, biglietto BVG singolo circa 3€, ingressi ai grandi musei la voce più costosa della giornata tipo. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 60-80 €, medio 110-160 €, alto oltre 230 €.",
    erroriDaEvitare: [
      'Farsi fotografare con i finti soldati a Checkpoint Charlie senza sapere che il servizio è a pagamento: la foto «gratuita» si paga a cose fatte',
      'Programmare l\'Isola dei Musei contando sul Pergamonmuseum: è chiuso del tutto dall\'ottobre 2023. L\'ala nord con l\'Altare di Pergamo riapre il 4 giugno 2027, l\'ala sud con la Porta di Ishtar solo intorno al 2037',
      'Dare per scontato che i negozi siano aperti la domenica: la legge tedesca sugli orari chiude quasi tutta l\'attività commerciale, ristoranti esclusi',
      'Sottovalutare le distanze: Berlino è molto più estesa di altre capitali europee, e spostarsi tra Mitte e Friedrichshain richiede sempre i mezzi pubblici',
      'Trattare i luoghi della memoria (Muro, Topografia del Terrore, Memoriale dell\'Olocausto) come tappe fotografiche qualunque: sono pensati per una visita silenziosa e informata',
    ],
    luoghi: [
      {
        "nome": "Reichstag e cupola",
        "testo": "Sede del Bundestag, con la cupola di vetro progettata da Norman Foster e completata nel 1999. Una rampa a spirale sale e scende dentro la cupola, con vista sulla città e sull'aula del Parlamento sotto di sé.",
        "come": "Ingresso gratuito con registrazione obbligatoria sul sito del Bundestag (nome e data di nascita di ogni visitatore). All'ingresso controlli di sicurezza e documento d'identità originale.",
        "quando": "Sera, per le luci della città; ingressi ogni quarto d'ora, l'ultimo alle 21:45 (chiuso il 24 dicembre). Registrarsi con giorni di anticipo.",
        "tempo": "1,5 ore",
        "costo": "ingresso gratuito, registrazione obbligatoria",
        "orari": "Ingressi ogni quarto d'ora, l'ultimo alle 21:45; chiuso il 24 dicembre.",
        "lat": 52.51865,
        "lng": 13.3761,
        "url": "https://www.bundestag.de",
        "consiglio": "Nella cupola c'è un'audioguida di 20 minuti in dodici lingue, italiano compreso, che racconta gli edifici intorno."
      },
      {
        "nome": "Porta di Brandeburgo",
        "testo": "Il monumento neoclassico del 1791 con la Quadriga sulla sommità, dal 1989 simbolo della riunificazione tedesca. Sulla Pariser Platz si trovano ambasciate e hotel di lusso.",
        "come": "A piedi dalla metropolitana S-Bahn Brandenburger Tor.",
        "quando": "Mattina presto o sera, per le foto senza folla.",
        "tempo": "30 minuti",
        "costo": "ingresso libero",
        "lat": 52.51627,
        "lng": 13.3777,
        "consiglio": "Di sera la porta è illuminata e la piazza si svuota."
      },
      {
        "nome": "Memoriale dell'Olocausto",
        "testo": "Un campo di oltre 2.700 stele di cemento di Peter Eisenman, in cui si cammina in un paesaggio che disorienta. Sotto il memoriale c'è un centro di informazione con storie personali.",
        "come": "A piedi dalla Porta di Brandeburgo.",
        "quando": "Il campo è aperto giorno e notte; il centro di informazione (gratuito) è aperto mar-dom 10-18, ultimo ingresso 45 minuti prima, chiuso il lunedì.",
        "tempo": "1 ora",
        "costo": "ingresso libero",
        "orari": "Campo delle stele sempre aperto; centro di informazione mar-dom 10-18, chiuso il lunedì.",
        "lat": 52.51387,
        "lng": 13.37873,
        "url": "https://www.stiftung-denkmal.de",
        "consiglio": "Entrare con rispetto: è un luogo di commemorazione, non un parco giochi."
      },
      {
        "nome": "Memoriale del Muro di Berlino (Bernauer Straße)",
        "testo": "Un tratto conservato del Muro, con la striscia della morte originale, la torre di guardia e il centro di documentazione. Una passerella sopra la striscia mostra come era la divisione.",
        "come": "S-Bahn S1, S2, S25 o S26 fino a Nordbahnhof, oppure U-Bahn U8 fino a Bernauer Straße.",
        "quando": "Mattina. La mostra all'aperto è visitabile tutti i giorni 8-22; centro di documentazione e centro visitatori mar-dom 10-18.",
        "tempo": "1,5-2 ore",
        "costo": "ingresso libero",
        "orari": "Mostra all'aperto tutti i giorni 8-22; centro di documentazione e centro visitatori mar-dom 10-18, chiusi il lunedì.",
        "lat": 52.53751,
        "lng": 13.39468,
        "url": "https://www.stiftung-berliner-mauer.de",
        "consiglio": "Salire sulla piattaforma del centro di documentazione per la vista sul percorso."
      },
      {
        "nome": "Topografia del Terrore",
        "testo": "Il centro di documentazione sul sito delle ex sedi della Gestapo e delle SS. La mostra racconta il funzionamento della repressione nazista.",
        "come": "A piedi dal Potsdamer Platz.",
        "quando": "Tutti i giorni 10-20; le aree all'aperto fino al tramonto, al massimo fino alle 20.",
        "tempo": "1,5-2 ore",
        "costo": "ingresso libero",
        "orari": "Tutti i giorni 10-20; aree all'aperto fino al tramonto.",
        "lat": 52.50621,
        "lng": 13.38415,
        "url": "https://www.topographie.de",
        "consiglio": "Si abbina bene a una passeggiata a Potsdamer Platz."
      },
      {
        "nome": "Isola dei Musei",
        "testo": "Patrimonio UNESCO dal 1999, con cinque musei tra cui il Neues Museum (con il busto di Nefertiti), l'Altes Museum e la Alte Nationalgalerie. Il Pergamonmuseum è chiuso del tutto dal 2023: l'ala nord con l'Altare di Pergamo riapre il 4 giugno 2027, l'ala sud con la Porta di Ishtar intorno al 2037. Nel frattempo, il Pergamonmuseum. Das Panorama, di fronte all'isola, mostra il plastico dell'antica Pergamo.",
        "come": "U-Bahn fino a Museumsinsel oppure S-Bahn fino a Hackescher Markt o Friedrichstraße, poi a piedi; l'ingresso del Neues Museum è dalla James-Simon-Galerie. Biglietti singoli e cumulativi sul sito ufficiale.",
        "quando": "Mattina nei giorni feriali. Il Neues Museum è aperto mar-dom 10-18, chiuso il lunedì; orari degli altri musei sul sito ufficiale.",
        "tempo": "mezza giornata",
        "costo": "biglietto d'area per i musei dell'isola 24 € intero, 12 € ridotto (2026)",
        "orari": "Neues Museum mar-dom 10-18, chiuso il lunedì.",
        "lat": 52.52016,
        "lng": 13.39774,
        "url": "https://www.smb.museum",
        "consiglio": "Nefertiti è nella sala della cupola nord del Neues Museum: biglietti e prezzi sul sito ufficiale."
      },
      {
        "nome": "Berliner Dom",
        "testo": "La cattedrale protestante della dinastia Hohenzollern, sull'Isola dei Musei, con la grande cupola verde, la cripta con un centinaio di sarcofagi reali e un camminamento esterno a 50 metri di altezza sopra la Sprea.",
        "come": "A piedi dall'Isola dei Musei; U5 Museumsinsel o S-Bahn Hackescher Markt. Biglietti online, con audioguida compresa.",
        "quando": "La mattina o nel tardo pomeriggio; gli orari cambiano nei giorni di funzioni e concerti.",
        "tempo": "1-1,5 ore",
        "costo": "15 € intero, 12 € ridotto (2026)",
        "orari": "Di norma lunedì-sabato 9-18, domenica 12-18; ultimo ingresso alle 17.",
        "lat": 52.51908,
        "lng": 13.40109,
        "url": "https://www.berlinerdom.de/",
        "consiglio": "Il camminamento della cupola si raggiunge a piedi, con molti gradini: vale la salita per la vista sull'isola."
      },
      {
        "nome": "Fernsehturm (Torre della TV)",
        "testo": "La torre della televisione di Alexanderplatz, costruita dalla DDR nel 1969 e alta 368 metri, il punto più alto della città. La piattaforma panoramica sta a circa 200 metri e mostra tutta l'estensione di Berlino.",
        "come": "S-Bahn e U-Bahn fino ad Alexanderplatz. Biglietti a orario sul sito ufficiale.",
        "quando": "Al tramonto, con prenotazione; nelle giornate limpide.",
        "tempo": "1 ora",
        "costo": "da 20 € (2026)",
        "orari": "Piattaforma panoramica 10-23; il 24 dicembre 10-16.",
        "lat": 52.52083,
        "lng": 13.40942,
        "url": "https://tv-turm.de/",
        "consiglio": "Senza fascia oraria prenotata, nei weekend si può aspettare a lungo."
      },
      {
        "nome": "DDR Museum",
        "testo": "Un museo interattivo sulla vita quotidiana nella Germania Est: un appartamento ricostruito, una Trabant in cui sedersi, la scuola, il lavoro, la Stasi. È sulla Sprea, di fronte al Duomo.",
        "come": "A piedi dal Berliner Dom o da Alexanderplatz.",
        "quando": "La sera, dopo i musei dell'isola, o in un giorno di pioggia.",
        "tempo": "1-1,5 ore",
        "orari": "Tutti i giorni 9-21, 365 giorni l'anno.",
        "lat": 52.51944,
        "lng": 13.40224,
        "url": "https://www.ddr-museum.de/"
      },
      {
        "nome": "East Side Gallery",
        "testo": "1.316 metri di Muro rimasti in piedi lungo la Sprea a Friedrichshain, il tratto superstite più lungo, dipinti nella primavera del 1990 da 118 artisti di 21 paesi: una delle gallerie d'arte all'aperto più grandi del mondo.",
        "come": "Sulla Mühlenstraße, tra la stazione Ostbahnhof e l'Oberbaumbrücke: si percorre a piedi lungo la Sprea.",
        "quando": "Mattina o tarda sera, con meno gente.",
        "tempo": "1-1,5 ore",
        "costo": "ingresso libero",
        "orari": "All'aperto, sempre accessibile.",
        "lat": 52.50445,
        "lng": 13.44084,
        "consiglio": "Non scrivere sulle opere: è un reato e danneggia i murales."
      },
      {
        "nome": "Checkpoint Charlie",
        "testo": "L'ex valico tra il settore americano e quello sovietico, dove nel 1961 i carri armati delle due parti si fronteggiarono. Oggi c'è una copia del casotto con i sacchi di sabbia e pannelli all'aperto sulla storia del confine.",
        "come": "U6 fino a Kochstraße; a piedi dalla Topografia del Terrore in 10 minuti.",
        "quando": "Di mattina presto, prima dei gruppi.",
        "tempo": "30 minuti",
        "costo": "gratuito all'aperto",
        "lat": 52.50743,
        "lng": 13.39038,
        "consiglio": "I figuranti in divisa chiedono soldi per la foto: il servizio è a pagamento."
      },
      {
        "nome": "Palazzo di Charlottenburg",
        "testo": "La più grande residenza degli Hohenzollern a Berlino, costruita dal 1695 per la regina Sofia Carlotta, con gli appartamenti barocchi, la Neuer Flügel rococò di Federico il Grande e un grande parco sulla Sprea.",
        "come": "U2 fino a Sophie-Charlotte-Platz o bus fino a Luisenplatz, poi a piedi.",
        "quando": "Mattina; il parco è gratuito e bello in ogni stagione.",
        "tempo": "mezza giornata",
        "costo": "Altes Schloss o Neuer Flügel 12 €; biglietto charlottenburg+ per tutti i musei del parco 19 € (2026)",
        "orari": "Martedì-domenica 10-17:30 da aprile a ottobre, 10-16:30 a novembre e dicembre; chiuso il lunedì, il 24 e il 25 dicembre.",
        "lat": 52.52064,
        "lng": 13.29271,
        "url": "https://www.spsg.de/",
        "consiglio": "Con il biglietto charlottenburg+ si fissa un orario d'ingresso all'Altes Schloss: prenotarlo all'arrivo."
      },
      {
        "nome": "Mauerpark",
        "testo": "Un parco sul vecchio tracciato del Muro, noto per il mercatino delle pulci, ogni domenica dal 2004, e per il Bearpit Karaoke, la domenica pomeriggio quando il tempo lo permette, dalla primavera all'autunno.",
        "come": "A piedi dal Memoriale del Muro di Bernauer Straße.",
        "quando": "Domenica.",
        "tempo": "2 ore",
        "costo": "ingresso libero",
        "orari": "Mercatino delle pulci la domenica.",
        "lat": 52.54372,
        "lng": 13.40193,
        "consiglio": "Il karaoke nell'anfiteatro è un'esperienza da locali."
      },
      {
        "nome": "Tempelhofer Feld",
        "testo": "Il vecchio aeroporto di Tempelhof, chiuso nel 2008 e trasformato in un parco di 300 ettari: si cammina, si va in bici e sui pattini sulle piste di decollo, accanto all'enorme terminal costruito negli anni Trenta e usato per il ponte aereo del 1948-49.",
        "come": "U6 fino a Paradestraße o U8 fino a Boddinstraße, poi uno degli ingressi.",
        "quando": "Pomeriggi di sole e tramonto, da primavera ad autunno.",
        "tempo": "1-2 ore",
        "costo": "ingresso libero",
        "lat": 52.47442,
        "lng": 13.4026,
        "consiglio": "Gli ingressi chiudono la sera, con orari che cambiano mese per mese: controllarli prima del tramonto."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": ["Mattina: Reichstag e Porta di Brandeburgo", "Memoriale dell'Olocausto", "Pranzo con currywurst", "Pomeriggio: Topografia del Terrore e Checkpoint Charlie", "Sera: East Side Gallery"]
      },
      {
        "titolo": "2 giorni",
        "tappe": ["Giorno 1 come sopra", "Giorno 2: Isola dei Musei e Berliner Dom", "Memoriale del Muro (Bernauer Straße)", "Sera a Prenzlauer Berg"]
      },
      {
        "titolo": "3 giorni",
        "tappe": ["Giorni 1-2 come sopra", "Giorno 3: Fernsehturm e DDR Museum la mattina, Palazzo di Charlottenburg il pomeriggio, oppure Mauerpark la domenica"]
      },
      {
        "titolo": "4 giorni",
        "tappe": ["Giorni 1-3 come sopra", "Giorno 4: Potsdam e Sanssouci, oppure Kreuzberg con il mercato del Maybachufer e il tramonto al Tempelhofer Feld"]
      }
    ],
    zone: [
      {
        "nome": "Mitte",
        "testo": "Vicino a Isola dei Musei e Alexanderplatz; prezzi alti e zone turistiche.",
        "perChi": "Chi ha poco tempo e vuole le attrazioni a piedi",
        "fascia": "100-200 €"
      },
      {
        "nome": "Prenzlauer Berg",
        "testo": "Case ben tenute, ristoranti e parchi; collegamenti buoni con la metro.",
        "perChi": "Chi cerca un quartiere tranquillo e caffè",
        "fascia": "80-160 €"
      },
      {
        "nome": "Kreuzberg e Friedrichshain",
        "testo": "Locali, street food e murales; più rumore e prezzi più bassi.",
        "perChi": "Chi vuole vita notturna e arte di strada",
        "fascia": "60-140 €"
      },
      {
        "nome": "Charlottenburg",
        "testo": "Negozi e viali eleganti, vicino a Zoo e Palazzo di Charlottenburg.",
        "perChi": "Chi preferisce un'atmosfera classica",
        "fascia": "80-170 €"
      }
    ],
    gite: [
      {
        "nome": "Potsdam e Sanssouci",
        "testo": "La residenza estiva di Federico il Grande, con il palazzo di Sanssouci (14 €, chiuso il lunedì; 2026), le terrazze delle vigne e un parco enorme di palazzi e padiglioni, patrimonio UNESCO.",
        "come": "Treno regionale o S-Bahn S7 fino a Potsdam Hauptbahnhof, con il biglietto ABC; poi bus fino al parco.",
        "distanza": "circa 35 km, 30-40 minuti in treno"
      },
      {
        "nome": "Memoriale di Sachsenhausen",
        "testo": "Il campo di concentramento costruito dalle SS nel 1936 alle porte di Berlino, oggi memoriale e museo, gratuito. Aperto tutti i giorni dalle 8:30, fino alle 18 d'estate e alle 16:30 d'inverno. Si visita in silenzio.",
        "come": "S1 da Friedrichstraße (circa 45 minuti) o RE5 dalla Hauptbahnhof (circa 25) fino a Oranienburg, poi 20 minuti a piedi.",
        "distanza": "circa 35 km, 25-45 minuti in treno"
      },
      {
        "nome": "Spreewald",
        "testo": "Una rete di canali tra i boschi dove si gira in barca a pertica, con i villaggi della minoranza sorba e i cetrioli in salamoia venduti lungo le rive.",
        "come": "Treno regionale fino a Lübbenau, poi a piedi fino ai moli.",
        "distanza": "circa 100 km a sud-est"
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per Berlino?",
        "risposta": "Quattro giorni, uno in più rispetto ad altre capitali, perché la città è molto estesa. In tre si vedono i luoghi della memoria, l'Isola dei Musei e un quartiere a est."
      },
      {
        "domanda": "Bisogna prenotare la cupola del Reichstag?",
        "risposta": "Sì: l'ingresso è gratuito ma serve la registrazione sul sito del Bundestag, con nome e data di nascita di ogni visitatore, e il documento all'ingresso. Conviene farla con giorni di anticipo."
      },
      {
        "domanda": "Il Pergamonmuseum è aperto?",
        "risposta": "No, è chiuso del tutto dall'ottobre 2023. L'ala nord con l'Altare di Pergamo riapre il 4 giugno 2027; gli altri musei dell'isola, come il Neues Museum con Nefertiti, sono aperti."
      },
      {
        "domanda": "Dove dormire a Berlino la prima volta?",
        "risposta": "Mitte per avere i monumenti a piedi, Prenzlauer Berg per un quartiere tranquillo vicino al centro, Kreuzberg o Friedrichshain per spendere meno e uscire la sera."
      },
      {
        "domanda": "Che biglietto serve dall'aeroporto BER?",
        "risposta": "Il biglietto ABC, circa 5 € nel 2026: quello AB non copre l'aeroporto, e i controlli sono frequenti. Con FEX e treni regionali si arriva alla Hauptbahnhof in circa 30 minuti."
      },
      {
        "domanda": "I negozi a Berlino sono aperti la domenica?",
        "risposta": "Quasi tutti no, per la legge sugli orari di apertura; restano aperti ristoranti, bar, musei e farmacie. La domenica è il giorno del Mauerpark."
      }
    ],
    sapori: [
      {
        nome: "Currywurst",
        testo: "Salsiccia affettata con salsa al curry e ketchup, da mangiare in piedi ai chioschi."
      },
      {
        nome: "Döner Kebab",
        testo: "Il kebab nel pane si è diffuso a Berlino grazie agli immigrati turchi ed è uno degli street food più amati della città."
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
      "Biglietti BVG: convalidare quelli di carta e tenere il titolo con sé, i controlli sono frequenti e le multe salate.",
      "Contanti: alcuni locali accettano solo contanti, portarne un po' con sé.",
      "Borseggiatori: attenzione nelle stazioni, sui mezzi affollati e nei luoghi turistici.",
    ],
    esperienzeSlugs: ['reichstag-cupola', 'museumsinsel-pergamon', 'east-side-gallery', 'berlino-clubbing'],
    tripSlugs: ['berlino-weekend'],
    imageAlt: 'Il palazzo del Reichstag a Berlino con la cupola di vetro e la bandiera tedesca, visto dal prato antistante',
    immagine: '/images/germania/berlino.jpg',
  },
]
