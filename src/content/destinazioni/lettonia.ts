import type { Destinazione } from '@/lib/types'

// Seconda tappa dell'itinerario "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts), viaggio fatto da Rick. Stesso trattamento
// delle destinazioni lituane ed estoni: visitataPersonalmente true ovunque,
// miaEsperienza resta assente finché non arriva un ricordo dell'autore. Jūrmala è trattata come destinazione a sé (non ripiegata nel
// cosaFare di Riga), sullo stesso criterio usato per Trakai in
// src/content/destinazioni/lituania.ts: un luogo fisicamente separato con un
// proprio cosaVedere denso, non solo una riga nel cosaFare della capitale.

export const destinazioniLettonia: Destinazione[] = [
  {
    slug: 'riga',
    paeseSlug: 'lettonia',
    ordine: 1,
    nome: 'Riga',
    tipologia: ['città', 'architettura', 'gastronomia'],
    giorniConsigliati: '3 giorni, compresa la gita a Jūrmala',
    visitataPersonalmente: true,
    introduzione:
      'È la capitale della Lettonia e la più grande delle tre capitali baltiche. Il centro storico medievale, patrimonio UNESCO dal 1997, si affaccia sul fiume Daugava con le guglie delle chiese anseatiche e la Casa delle Teste Nere. Appena fuori dalle mura, il quartiere costruito tra Otto e Novecento è famoso per i suoi palazzi Art Nouveau. Poco più in là il Mercato Centrale, ricavato da cinque ex hangar per dirigibili, è uno dei grandi mercati coperti d\'Europa.',
    percheAndarci:
      'In uno spazio piccolo ci sono un centro medievale vero, un intero quartiere Art Nouveau da guardare con il naso all\'insù e un mercato che è un monumento industriale dove si fa ancora la spesa ogni giorno. Da qui parte poi la gita più classica della costa lettone, la spiaggia di Jūrmala.',
    cosaVedere: [
      'La Piazza del Duomo (Doma laukums) con la Cattedrale di Riga (Rīgas Doms), la grande chiesa medievale della città, e il suo storico organo',
      'La Chiesa di San Pietro, con la piattaforma panoramica sulla guglia a 72 metri, con vista sulla Città Vecchia e sul fiume Daugava',
      'La Casa delle Teste Nere (Melngalvju nams), la celebre facciata rinascimentale della piazza del municipio, ricostruita dopo la distruzione della guerra',
      'I Tre Fratelli (Trīs brāļi), tre case di epoche diverse in fila su via Mazā Pils, nella Città Vecchia',
      'Il quartiere Art Nouveau, lungo Alberta iela e le vie vicine: centinaia di facciate decorate con maschere, volti scolpiti e motivi floreali, molte dell\'architetto Mihails Eizenšteins, padre del regista Sergej Ėjzenštejn',
      'Il Mercato Centrale (Centrāltirgus): cinque padiglioni ricavati da hangar per dirigibili tedeschi della Prima guerra mondiale, aperto nel 1930. Fa parte del sito UNESCO insieme alla Città Vecchia',
    ],
    cosaFare: [
      'Salire sulla torre della Chiesa di San Pietro per il panorama sulla Città Vecchia e sul Daugava',
      'Camminare lungo Alberta iela con il naso all\'insù, cercando le facciate più elaborate del quartiere Art Nouveau',
      'Girare tra i banchi del Mercato Centrale, nei padiglioni di pesce, carne, latticini e verdura, fermandosi ad assaggiare le specialità locali',
      'Passare una serata tra bar e ristoranti della Città Vecchia, con una sosta su un rooftop per la vista sui tetti',
    ],
    doveDormire:
      'Nella Città Vecchia (Vecrīga) si ha tutto a piedi, vita notturna compresa. Il quartiere Art Nouveau, appena fuori dalle mura verso nord, è più tranquillo e altrettanto centrale, e lì si può dormire dentro un palazzo liberty.',
    doveMangiare:
      'Il piatto invernale più identitario è il pelēkie zirņi ar speķi, piselli grigi con pancetta. Il rupjmaize, il pane di segale nero, sta alla base di molta cucina lettone, compreso il rupjmaizes kārtojums, un dolce a strati con panna e frutti di bosco. Per assaggiare i prodotti locali, dal formaggio affumicato al pesce del Baltico, i banchi del Mercato Centrale sono il modo più economico e genuino.',
    comeArrivare:
      "L'Aeroporto Internazionale di Riga (RIX), è fuori città: bus pubblico, oppure taxi o app di trasporto. Da alcuni aeroporti italiani ci sono voli diretti low cost, stagionali o tutto l'anno; altrimenti si fa scalo in un hub europeo. Da Vilnius ci sono bus diretti, con più compagnie e molte corse al giorno. Il bus 22 collega l'aeroporto al centro in 30-45 minuti, ogni 10-20 minuti, con biglietto di circa 1,50 € comprato in anticipo (app, macchinetta o Narvesen) o circa 1,80 € pagato a bordo con la carta; da aprile 2026 c'è anche il notturno N22. Da Vilnius e da Tallinn il bus Lux Express impiega circa 4 ore e arriva all'autostazione accanto al Mercato Centrale, a pochi minuti a piedi dalla Città Vecchia.",
    comeSpostarsi:
      'Il centro storico si gira tutto a piedi. Tram, filobus e bus della rete Rīgas satiksme coprono il resto della città, con biglietti a tempo economici. Per Jūrmala c\'è il treno regionale dalla stazione centrale, con corse frequenti.',
    periodoMigliore:
      'maggio-settembre, per il clima mite e, in piena estate, la possibilità di unire la città a un bagno a Jūrmala. Giugno-agosto è la stagione più affollata. L\'inverno (novembre-marzo) è freddo e spesso ventoso, ma la Città Vecchia regge bene e a dicembre c\'è il mercatino di Natale in Piazza del Duomo.',
    costi: "Città economica per gli standard dell'Europa occidentale: nel City Costs Barometer 2025 Riga è risultata la più conveniente tra 38 città europee. Budget giornaliero a persona con alloggio in doppia: 45-65 € spendendo poco, 90-130 € di fascia media (hotel 3-4 stelle, un museo, cena al ristorante), oltre 180 € con hotel 5 stelle e ristoranti stellati. Ingressi 2026: Casa delle Teste Nere 10 €, Museo dell'Occupazione 8 €, torre di San Pietro circa 9 €, Museo dell'Art Nouveau 9 €; biglietto del bus da circa 1,50 €.",
    erroriDaEvitare: [
      'Fermarsi alla Città Vecchia: il quartiere Art Nouveau appena fuori dalle mura è una parte centrale dell\'architettura di Riga quanto il centro medievale',
      'Andare al Mercato Centrale nel weekend dopo pranzo: i banchi migliori si svuotano presto, e il mattino, con i venditori locali, è il momento più autentico',
      'Programmare Jūrmala senza guardare il meteo: è una gita al mare e ha senso soprattutto da giugno ad agosto',
      'Pensare che il russo non serva: lo parla ancora la consistente minoranza russofona della città, e in certe situazioni quotidiane fuori dal centro turistico è più utile dell\'inglese',
    ],
    miaEsperienza:
      "Riga è stata la tappa centrale del giro delle capitali baltiche con gli amici: ci siamo arrivati in bus da Vilnius e ci siamo rimasti tre giorni, tra la Città Vecchia, il quartiere Art Nouveau, il Mercato Centrale e la torre di San Pietro, poi il bus per Tallinn.",
    luoghi: [
      {
        nome: "Cattedrale di Riga e Piazza del Duomo",
        testo: "Considerata tra le più grandi chiese medievali dei Paesi baltici, fondata nel 1211, con l'organo Walcker inaugurato nel 1884, 6.718 canne. La piazza è circondata da caffè.",
        come: "A piedi dalla Città Vecchia.",
        quando: "Mattina.",
        tempo: "1 ora",
        orari: "Piazza sempre accessibile; orari della cattedrale e dei concerti d'organo sul sito",
        lat: 56.94911,
        lng: 24.10474,
        url: "https://doms.lv",
        consiglio: "Programma dei concerti d'organo sul sito ufficiale."
      },
      {
        nome: "Casa delle Teste Nere",
        testo: "Dal Quattrocento sede della confraternita delle Teste Nere, gilda di mercanti celibi e armatori, con la facciata decorata nel primo Seicento. Distrutta nella Seconda guerra mondiale e demolita in epoca sovietica, è stata ricostruita alla fine del Novecento.",
        come: "Sulla Piazza del Municipio.",
        quando: "Mattina, per le foto.",
        tempo: "30 minuti",
        costo: "10 €; con caffè 12 €, con spumante o balsamo nero 13 €; audioguida 4 € (2026)",
        orari: "Tutti i giorni 10-17, con chiusure o orari ridotti in alcune date",
        lat: 56.94714,
        lng: 24.10692,
        url: "https://www.melngalvjunams.lv",
        consiglio: "La piazza del municipio è il punto più bello per le foto."
      },
      {
        nome: "Chiesa di San Pietro",
        testo: "Chiesa gotica la cui guglia ha una piattaforma panoramica a 72 metri, con vista sulla Città Vecchia e sulla Daugava. Si sale con l'ascensore.",
        come: "A piedi, vicino alla Piazza del Municipio.",
        quando: "Giorno sereno.",
        tempo: "45 minuti",
        costo: "Torre circa 9 € (2026)",
        orari: "Biglietti per la torre in vendita fino alle 17",
        lat: 56.9475,
        lng: 24.10944,
        consiglio: "Meglio salire al mattino, quando la luce è chiara."
      },
      {
        nome: "I Tre Fratelli",
        testo: "Tre case in fila ai numeri 17, 19 e 21 di via Mazā Pils, case d'abitazione di epoche diverse: la prima, con il frontone a gradoni, è medievale, la terza è barocca.",
        come: "A piedi dalla Città Vecchia.",
        quando: "Giorno.",
        tempo: "15 minuti",
        costo: "ingresso libero",
        orari: "Facciate visibili a qualsiasi ora",
        lat: 56.95035,
        lng: 24.10429,
        consiglio: "Dentro c'è il Museo dell'Architettura."
      },
      {
        nome: "Quartiere Art Nouveau",
        testo: "Alberta iela e le vie intorno, con facciate decorate da maschere, volti e motivi floreali, molte progettate dall'architetto Mikhail Eisenstein.",
        come: "A piedi o in tram dal centro.",
        quando: "Mattina, con luce piena sulle facciate.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        orari: "Strade sempre accessibili",
        lat: 56.95901,
        lng: 24.10985,
        consiglio: "Alzare lo sguardo: i dettagli sono sopra il primo piano."
      },
      {
        nome: "Museo dell'Art Nouveau",
        testo: "L'appartamento dell'architetto Konstantīns Pēkšēns, in Alberta iela 12, arredato come una casa borghese di inizio Novecento. La scala a chiocciola dipinta è il pezzo più fotografato; è il modo migliore per vedere un interno dopo le facciate della via.",
        come: "A piedi dalla Città Vecchia in 15-20 minuti, nel quartiere Art Nouveau.",
        quando: "Insieme alla passeggiata in Alberta iela ed Elizabetes iela.",
        tempo: "1 ora",
        costo: "Esposizione completa 9 €, ridotto 5 €; solo interni 6 € (2026)",
        orari: "10-18 (cassa fino alle 17.45), chiuso il lunedì",
        lat: 56.95961,
        lng: 24.10852,
        url: "https://jugendstils.riga.lv/en/"
      },
      {
        nome: "Mercato Centrale",
        testo: "Cinque padiglioni ricavati dagli hangar dei dirigibili tedeschi della Prima guerra mondiale, aperti nel 1930.",
        come: "A piedi dalla stazione ferroviaria.",
        quando: "Mattina.",
        tempo: "1-2 ore",
        costo: "Ingresso libero",
        lat: 56.94433,
        lng: 24.11321,
        consiglio: "Assaggiare il pesce affumicato nel padiglione del pesce."
      },
      {
        nome: "Monumento alla Libertà e Museo dell'Occupazione",
        testo: "Il monumento, inaugurato nel 1935, è il simbolo dell'indipendenza lettone; la guardia d'onore, tolta dai sovietici, è tornata nel 1992. Il Museo dell'Occupazione, nella Città Vecchia, racconta la storia sovietica e nazista.",
        come: "A piedi dalla Città Vecchia.",
        quando: "Mattina.",
        tempo: "1,5 ore",
        costo: "Museo dell'Occupazione 8 €, studenti 5 € (2026); monumento libero",
        orari: "Museo tutti i giorni 10-18",
        lat: 56.95151,
        lng: 24.11338,
        url: "https://okupacijasmuzejs.lv",
        consiglio: "Orari e biglietti del Museo dell'Occupazione sul sito ufficiale."
      },
      {
        nome: "Casa d'angolo, l'ex sede del KGB (Stūra māja)",
        testo: "Il palazzo all'angolo tra Brīvības iela e Stabu iela dove la polizia politica sovietica interrogava e incarcerava. La visita guidata passa dalle celle, dai corridoi e dal cortile delle esecuzioni: è dura e molto ben raccontata, gestita dal Museo dell'Occupazione.",
        come: "A piedi dal Monumento alla Libertà in 10 minuti lungo Brīvības iela.",
        quando: "Al mattino, prenotando il tour in inglese.",
        tempo: "1-1,5 ore",
        costo: "Visita guidata 15 €, studenti 9 €; mostra al piano terra gratuita (2026)",
        orari: "Tutti i giorni 10.30-17.30; tour in inglese alle 11, 12, 13, 15 e 16",
        lat: 56.95817,
        lng: 24.12414,
        url: "https://okupacijasmuzejs.lv/en/kgb-building-info",
        consiglio: "Non adatta ai bambini sotto i 12 anni né a chi ha difficoltà motorie."
      },
      {
        nome: "Porta Svedese e Torre delle Polveri",
        testo: "La Porta Svedese, del 1698, è l'unica porta superstite delle mura, ricavata in una casa privata; accanto corrono le caserme di Jēkaba. Poco lontano la Torre delle Polveri, cilindrica e con palle di cannone ancora incastrate nei muri, è l'ultima delle torri difensive rimaste.",
        come: "A piedi, in Torņa iela, nella parte nord della Città Vecchia.",
        quando: "Di giorno, lungo il giro della Città Vecchia.",
        tempo: "30 minuti",
        costo: "Esterni gratuiti",
        orari: "Sempre visibili dall'esterno",
        lat: 56.95145,
        lng: 24.10638
      },
      {
        nome: "Parco Bastejkalns e il canale cittadino",
        testo: "La fascia verde nata al posto dei bastioni demoliti nell'Ottocento, tra la Città Vecchia e il centro: un canale con ponticelli, prati, l'Opera nazionale e i boulevard. Dall'acqua partono le barche che fanno il giro del canale e del fiume Daugava.",
        come: "A piedi, alle spalle del Monumento alla Libertà.",
        quando: "Tardo pomeriggio d'estate; in autunno per i colori.",
        tempo: "1 ora",
        costo: "Parco libero",
        orari: "Sempre aperto",
        lat: 56.95189,
        lng: 24.11038
      },
      {
        nome: "Cattedrale ortodossa della Natività",
        testo: "La grande chiesa neobizantina del 1884 sul viale Brīvības, con cupole dorate e interni dipinti. In epoca sovietica fu trasformata in planetario; restituita al culto, è tornata a essere la principale chiesa ortodossa della città.",
        come: "A piedi, nel Parco Esplanade, a 5 minuti dal Monumento alla Libertà.",
        quando: "Di giorno, evitando le funzioni.",
        tempo: "20-30 minuti",
        costo: "Ingresso libero; spalle e gambe coperte, foulard per le donne",
        lat: 56.95391,
        lng: 24.11551
      },
      {
        nome: "Accademia delle Scienze e Maskavas forštate",
        testo: "Il grattacielo staliniano degli anni Cinquanta, detto «la torta di compleanno di Stalin», con una terrazza panoramica sulla città vecchia e sul Mercato Centrale. Intorno c'è il quartiere di Maskavas, con le case di legno e i resti dell'ex ghetto ebraico: un lato di Riga che pochi visitano.",
        come: "A piedi dal Mercato Centrale in 5-10 minuti.",
        quando: "Di giorno, con cielo sereno.",
        tempo: "1 ora con il quartiere",
        lat: 56.94313,
        lng: 24.12202
      },
      {
        nome: "Biblioteca Nazionale (Castello di Luce)",
        testo: "Il grande edificio a forma di montagna di vetro di Gunnar Birkerts, aperto nel 2014 sulla riva sinistra del Daugava. Dall'altra sponda è la vista più moderna di Riga; dentro, la «scala dei libri» donati dai cittadini attraversa più piani.",
        come: "A piedi dalla Città Vecchia attraversando il ponte di pietra (Akmens tilts), 15 minuti.",
        quando: "Al tramonto per la foto dalla riva della Città Vecchia.",
        tempo: "1 ora",
        lat: 56.94104,
        lng: 24.09677
      },
      {
        nome: "Kalnciema kvartāls",
        testo: "Un isolato di case di legno restaurate sulla riva sinistra, con cortili, caffè e il mercato del sabato con produttori locali, pane, formaggi e artigianato. D'estate ci sono concerti all'aperto.",
        come: "Tram o bus dalla Città Vecchia, circa 10 minuti, oppure a piedi da Āgenskalns.",
        quando: "Sabato mattina, per il mercato.",
        tempo: "1-2 ore",
        costo: "Ingresso libero",
        lat: 56.94313,
        lng: 24.0667
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Piazza del Duomo e Cattedrale, Tre Fratelli, Porta Svedese e Torre delle Polveri",
          "Casa delle Teste Nere sulla Piazza del Municipio",
          "Pranzo al Mercato Centrale",
          "Pomeriggio: Monumento alla Libertà, Parco Bastejkalns e quartiere Art Nouveau in Alberta iela",
          "Tramonto dalla torre di San Pietro (biglietti fino alle 17)"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2 mattina: Museo dell'Occupazione e visita guidata alla Casa d'angolo",
          "Museo dell'Art Nouveau (non di lunedì) e Cattedrale della Natività",
          "Pomeriggio: Accademia delle Scienze e Maskavas, poi la Biblioteca Nazionale dall'altra riva"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1 e 2 come sopra",
          "Giorno 3: Jūrmala in treno (spiaggia e ville di legno di Majori), oppure Sigulda e la valle del Gauja",
          "Se è sabato, mattina al mercato di Kalnciema prima di partire"
        ]
      }
    ],
    zone: [
      {
        nome: "Città Vecchia (Vecrīga)",
        testo: "Vicino a tutto, ma rumoroso la sera; molti bar.",
        perChi: "Chi vuole stare a due passi dalle attrazioni",
        fascia: "70-140 €"
      },
      {
        nome: "Centro Art Nouveau",
        testo: "Tranquillo, con edifici belli; a piedi dalla Città Vecchia.",
        perChi: "Chi cerca atmosfera e ristoranti",
        fascia: "60-120 €"
      },
      {
        nome: "Āgenskalns",
        testo: "Oltre il fiume, più economico; collegato con il tram.",
        perChi: "Chi preferisce un quartiere locale",
        fascia: "45-85 €"
      }
    ],
    sapori: [
      {
        nome: "Rupjmaize",
        testo: "Pane di segale scuro e dolce, base della cucina lettone."
      },
      {
        nome: "Pelēkie zirņi ar speķi",
        testo: "Piselli grigi con pancetta, piatto tradizionale."
      },
      {
        nome: "Rīgas Melnais balzams",
        testo: "Liquore di erbe nero, da provare nei bar della Città Vecchia."
      },
      {
        nome: "Pesce affumicato",
        testo: "Ottimo al Mercato Centrale: salmone, anguilla, sprat."
      }
    ],
    attenzioni: [
      "Locali notturni: ad alcuni turisti sono stati fatti pagare prezzi altissimi o addebiti falsi sulla carta. Guardare il pagamento con carta davanti a sé e diffidare se chiedono di reinserire il PIN.",
      "Taxi: prenotare con una compagnia nota o prenderlo a un posteggio, solo auto registrate con targa gialla; concordare prima il prezzo indicativo.",
      "Borseggiatori in Città Vecchia, al Mercato Centrale e alle stazioni di treni e autobus.",
      "D'inverno marciapiedi ghiacciati: scarpe adatte."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Riga?",
        risposta: "Due giorni per la Città Vecchia, il quartiere Art Nouveau, il Mercato Centrale e i musei della storia sovietica. Il terzo giorno si usa per Jūrmala o Sigulda."
      },
      {
        domanda: "Riga è cara?",
        risposta: "No: è tra le capitali più economiche dell'Unione Europea, con hotel 3 stelle da circa 55-85 € a notte e pranzi nei caffè da 12-20 €. Si spende di più solo nei locali della Piazza del Municipio."
      },
      {
        domanda: "Come si va dall'aeroporto di Riga al centro?",
        risposta: "Con il bus 22 in 30-45 minuti e circa 1,50 €, oppure con Bolt o taxi in circa 20 minuti. Di notte c'è il bus N22, una corsa all'ora."
      },
      {
        domanda: "Riga o Tallinn: quale scegliere?",
        risposta: "Tallinn ha la città medievale più compatta e intatta, Riga è più grande, con l'Art Nouveau, il mercato e una vita serale più varia, e costa meno. Con 4-5 giorni si fanno entrambe, collegate da un bus di circa 4 ore."
      },
      {
        domanda: "Serve prenotare la visita alla ex sede del KGB?",
        risposta: "La Casa d'angolo si vede solo con visita guidata, a orari fissi: conviene comprare il biglietto online in anticipo, soprattutto d'estate. La mostra al piano terra è libera."
      },
      {
        domanda: "Quando andare a Riga?",
        risposta: "Da maggio a settembre per il clima e Jūrmala; il 23-24 giugno c'è Līgo, la festa di mezza estate, con molti locali chiusi. Dicembre ha il mercatino di Natale in Piazza del Duomo."
      }
    ],
    gite: [
      {
        nome: "Jūrmala",
        distanza: "circa 20 km, 30-35 minuti in treno",
        come: "Treno regionale dalla stazione centrale fino a Majori, partenze almeno ogni mezz'ora.",
        testo: "La località balneare storica della Lettonia: 33 km di sabbia bianca sul Golfo di Riga e centinaia di ville di legno liberty. In treno si evita la tassa d'ingresso per le auto."
      },
      {
        nome: "Sigulda e il Parco nazionale del Gauja",
        distanza: "circa 50 km, 1-1,5 ore in treno",
        come: "Treno regionale dalla stazione centrale di Riga; a Sigulda si gira a piedi e in funivia.",
        testo: "La valle del fiume Gauja con boschi, grotte di arenaria e il castello di Turaida in mattoni rossi. In autunno i colori delle foglie sono il motivo principale per andarci."
      },
      {
        nome: "Palazzo di Rundāle",
        distanza: "circa 80 km, 1-1,5 ore in auto",
        come: "In auto o con un tour organizzato; con i mezzi pubblici serve un cambio a Bauska.",
        testo: "Il palazzo barocco progettato da Rastrelli, lo stesso architetto del Palazzo d'Inverno di San Pietroburgo, con il giardino alla francese e il roseto. È la gita da fare per vedere la Lettonia aristocratica."
      },
      {
        nome: "Torbiera di Ķemeri",
        distanza: "circa 45 km, circa 1 ora in treno",
        come: "Treno sulla linea di Jūrmala fino a Ķemeri, poi circa 3 km a piedi o in taxi fino al sentiero.",
        testo: "Una passerella di legno di circa 3 km nel Parco nazionale di Ķemeri, tra pozze, pini nani e muschio. Si unisce bene a mezza giornata a Jūrmala."
      }
    ],
    esperienzeSlugs: ['riga-art-nouveau-passeggiata', 'riga-mercato-centrale-tour'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Lo skyline della Città Vecchia di Riga visto dalla Daugava, con le guglie di San Pietro e della Cattedrale sopra il lungofiume',
    immagine: '/images/lettonia/riga.jpg',
  },
  {
    slug: 'jurmala',
    paeseSlug: 'lettonia',
    ordine: 2,
    nome: 'Jūrmala',
    tipologia: ['mare', 'architettura', 'relax'],
    giorniConsigliati: 'mezza giornata, come gita da Riga',
    visitataPersonalmente: true,
    introduzione:
      'La città balneare storica della Lettonia: una lunga spiaggia di sabbia bianca finissima sul Golfo di Riga, poco a ovest della capitale e raggiungibile in treno. Dagli anni degli zar fino all\'epoca sovietica, quando ci andava in villeggiatura l\'élite dell\'URSS, a Jūrmala sono sorte centinaia di ville di legno Art Nouveau e Art Déco. Molte oggi sono restaurate e fanno da case private, hotel o piccoli musei.',
    percheAndarci:
      'È la spiaggia più facile da raggiungere partendo da una capitale di questo itinerario. Dietro la sabbia, poi, le vie residenziali piene di ville di legno decorate sono un museo diffuso di architettura balneare con più di un secolo di storia lettone.',
    cosaVedere: [
      'La spiaggia di sabbia bianca, lunga e continua',
      'Jomas iela, la via pedonale di Majori, il centro della cittadina, con negozi, caffè e gelaterie',
      'Le ville di legno Art Nouveau e Art Déco nelle vie residenziali di Majori e Dzintari, molte con intagli fatti a mano e verande vetrate',
      'La Dzintari Concert Hall, la sala da concerti all\'aperto, sede storica di festival ed eventi estivi',
    ],
    cosaFare: [
      'Camminare a lungo sulla spiaggia, dalla stazione di Majori verso Dzintari o Bulduri',
      'Girare tra le vie residenziali dietro Jomas iela e guardare da fuori le ville di legno decorate',
      'Fermarsi in uno dei caffè o ristoranti sul lungomare, aperti tutto l\'anno e più animati in estate',
    ],
    doveDormire: 'In questo itinerario Jūrmala si visita in mezza giornata da Riga, senza dormirci. Chi vuole restare qualche giorno al mare può aggiungerla come estensione.',
    doveMangiare: 'Lungo Jomas iela ristoranti e caffè fanno cucina lettone e internazionale; in estate diversi chioschi sulla spiaggia servono pesce alla griglia e gelato.',
    comeArrivare: 'Da Riga con il treno regionale dalla stazione centrale (Rīga Centrālā stacija) fino a Majori, con corse frequenti.',
    comeSpostarsi: 'Il centro di Majori e la spiaggia si girano a piedi. Per Dzintari o le zone più lontane si può riprendere lo stesso treno regionale, che ferma in più punti lungo la costa.',
    periodoMigliore: 'giugno-agosto per fare il bagno. Nelle mezze stagioni la passeggiata sulla spiaggia e tra le ville di legno resta piacevole, con meno gente.',
    costi: 'gita economica: treno poco caro, spiaggia gratuita, caffè e ristoranti sul lungomare.',
    erroriDaEvitare: [
      'Andarci fuori stagione aspettandosi la vita balneare dell\'estate: fuori dall\'estate la spiaggia è quasi deserta e molti locali chiudono',
      'Restare solo in spiaggia senza girare per le vie residenziali: sono le ville di legno decorate a rendere Jūrmala diversa da "un\'altra spiaggia"',
      'Sottovalutare l\'acqua bassa e fresca del Golfo di Riga, molto diversa da un bagno nel Mediterraneo',
    ],
    miaEsperienza:
      "A Jūrmala siamo andati in treno da Riga per una mattina durante il giro delle capitali baltiche con gli amici: passeggiata sulla spiaggia da Majori e tra le ville di legno, poi rientro a Riga nel pomeriggio.",
    luoghi: [
      {
        nome: "Spiaggia di Jūrmala",
        testo: "Una spiaggia di sabbia bianca di quarzo lunga 33 km, sulla costa del Golfo di Riga.",
        come: "Treno da Riga a Majori, sulla linea Riga-Tukums.",
        quando: "Estate, quando fa caldo; d'inverno è deserta e suggestiva.",
        tempo: "mezza giornata",
        costo: "ingresso libero",
        consiglio: "Il treno è più comodo dell'auto: chi non è residente paga un pedaggio per entrare a Jūrmala con il veicolo, tutto l'anno: 5 € al giorno per un'auto (2026)."
      },
      {
        nome: "Jomas iela",
        testo: "La via pedonale di Majori, il centro della cittadina, con negozi, caffè e gelaterie. D'estate è molto animata.",
        come: "A piedi dalla stazione di Majori.",
        quando: "Pomeriggio e sera d'estate.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Scegliere un caffè nelle strade laterali per prezzi migliori."
      },
      {
        nome: "Ville di legno Art Nouveau",
        testo: "Nelle vie residenziali di Majori e Dzintari, ville di legno con intagli e verande vetrate, esempi di architettura in legno dell'inizio Novecento.",
        come: "A piedi, dietro Jomas iela.",
        quando: "Giorno, con buona luce.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Si guarda da fuori: sono residenze private."
      },
      {
        nome: "Sala da concerti Dzintari",
        testo: "La sala all'aperto, sede storica di festival e concerti estivi, con la musica classica e pop.",
        come: "Treno fino a Dzintari.",
        quando: "Estate, la sera.",
        tempo: "2 ore",
        url: "https://www.dzintarukoncertzale.lv",
        consiglio: "Controllare il programma per i concerti in cartellone."
      }
    ],
    sapori: [
      {
        nome: "Pesce alla griglia",
        testo: "Salmone e spratto serviti nei chioschi sulla spiaggia."
      },
      {
        nome: "Gelato",
        testo: "Chioschi sul lungomare, in estate, anche a basso costo."
      }
    ],
    attenzioni: [
      "Per entrare a Jūrmala in auto i non residenti pagano un pedaggio tutto l'anno, 5 € al giorno (2026): la gita in treno è più semplice.",
      "La spiaggia ha il vento: portare una felpa anche d'estate.",
      "Nei weekend estivi i ristoranti sono pieni: prenotare."
    ],
    esperienzeSlugs: ['jurmala-spiaggia-ville-liberty'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Una villa di legno con verande vetrate e decorazioni intagliate tra gli alberi di Jūrmala',
    immagine: '/images/lettonia/jurmala.jpg',
  },
]
