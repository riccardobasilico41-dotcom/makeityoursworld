import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Costa Rica in 13 giorni" (src/content/viaggi/12-costa-rica-360.md).

export const destinazioniCostaRica: Destinazione[] = [
  {
    slug: 'san-jose',
    paeseSlug: 'costa-rica',
    ordine: 1,
    nome: 'San José',
    tipologia: ['città'],
    giorniConsigliati: '1 giorno all\'arrivo, 1 al rientro',
    visitataPersonalmente: true,
    introduzione: 'Il punto di arrivo e di rientro del viaggio. Da vedere c\'è poco, ma è un buon primo assaggio di cucina e vita sociale costaricana.',
    percheAndarci: 'Come base logistica per il meeting di benvenuto e per il primo e l\'ultimo casado del viaggio.',
    cosaVedere: ['Il Mercado Central', 'Il quartiere coloniale di Barrio Amón', 'Il Museo Nazionale'],
    cosaFare: [
      'Cena al Jardín de Lolita, tra food truck e socialità di gruppo',
      'Dopocena da Booze and Scoops e serata di ballo a La Concha',
      'Cena d\'arrivederci al Costa Rica Beer Factory',
    ],
    doveDormire:
      'Casa Boutique Las Orquídeas, dove abbiamo dormito sia all\'arrivo sia l\'ultima notte. È più una casa che un hotel: atmosfera familiare, staff disponibile a ogni ora, colazione preparata al momento. Qualche recensione segnala pareti sottili e camere un po\' spartane. Fascia media.\n\nAlternative: economiche: Selina San José, Costa Rica Backpackers Hostel · fascia media: Hotel Presidente, Hotel Kekoldi (Barrio Amón) · lusso: Hotel Grano de Oro, Xandari Resort & Spa (Alajuela, vicino all\'aeroporto).',
    doveMangiare: 'Jardín de Lolita e Colonia Arepas y Bar all\'arrivo; Costa Rica Beer Factory per la cena d\'arrivederci.',
    usciteSerali: 'La Concha, nel quartiere di La California, che a differenza del centro è sicuro e animato anche di sera.',
    comeArrivare: 'Volo internazionale su San José; Uber dall\'aeroporto al centro (30 min-1h, circa 14$).',
    comeSpostarsi: 'Uber, meglio dei taxi: costa circa un terzo in meno ed è più sicuro.',
    periodoMigliore: 'metà-fine novembre',
    costi: 'Uber aeroporto-centro circa 14$.',
    erroriDaEvitare: ['Evitare il centro città dopo il tramonto: meglio muoversi sempre in gruppo o in Uber', 'Cambiare valuta solo in banche o uffici autorizzati, mai per strada'],
    miaEsperienza:
      "San José merita di essere vista solo di passaggio. Carini il Mercado Central e il Museo Nazionale, quello di storia; per il resto niente di speciale. La cena al Jardín de Lolita, tra i food truck e con tutto il gruppo seduto insieme, ci ha fatto socializzare fin dalla prima sera.",
      "luoghi": [
        {
          "nome": "Mercado Central",
          "testo": "Il mercato coperto storico del centro, con bancarelle di cibo, caffè, artigianato e le sodas che servono il casado del giorno.",
          "come": "A piedi dal centro.",
          "quando": "Mattina e pranzo, quando le sodas lavorano di più.",
          "tempo": "1-1,5 ore",
          "consiglio": "Mangiare in una soda dentro il mercato è il modo più economico per assaggiare la cucina di casa."
        },
        {
          "nome": "Barrio Amón",
          "testo": "Quartiere con case in legno e mattoni costruite fra fine Ottocento e inizio Novecento, ex dimore dei baroni del caffè, ora con gallerie, caffè e hotel di charme.",
          "come": "A piedi, a nord del centro.",
          "quando": "Mattina, a luce buona.",
          "tempo": "1-2 ore",
          "consiglio": "Meglio non girare con il telefono in mano e di sera sono preferibili i taxi."
        },
        {
          "nome": "Museo Nazionale",
          "testo": "Ospitato nell'ex Cuartel Bellavista, con sale di storia, archeologia e natura del paese, di fronte all'Assemblea legislativa.",
          "come": "A piedi dal centro.",
          "quando": "Da martedì a sabato 8.30-16.30, domenica 9-16.30; chiuso il lunedì.",
          "tempo": "1-2 ore",
          "url": "https://www.museocostarica.go.cr/"
        },
        {
          "nome": "Teatro Nacional",
          "testo": "Il teatro neoclassico inaugurato nel 1897 con il Faust, pagato con una tassa sul caffè. Dentro c'è il celebre dipinto dell'allegoria del caffè e delle banane.",
          "come": "A piedi dal centro, sulla Plaza de la Cultura.",
          "quando": "Mattina.",
          "tempo": "1 ora",
          "url": "https://www.teatronacional.go.cr/",
          "consiglio": "Prenotare in anticipo se si vuole assistere a uno spettacolo."
        },
        {
          "nome": "Museo del Oro Precolombino",
          "testo": "I musei del Banco Central, in sale sotterranee sotto la Plaza de la Cultura, con la mostra permanente sull'oro precolombino e il museo di numismatica.",
          "come": "A piedi dal centro: Plaza de la Cultura, tra avenida 0 e 2, calle 5.",
          "quando": "Tutti i giorni, 9-16.30.",
          "tempo": "1-1,5 ore",
          "costo": "8.800 colones per gli stranieri, 6.950 per gli studenti (sito ufficiale, 2026).",
          "url": "https://www.museosdelbancocentral.org/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mercato Centrale e pranzo in una soda",
            "Teatro Nacional e Plaza de la Cultura",
            "Barrio Amón nel pomeriggio",
            "Cena in centro"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1 come sopra",
            "Giorno 2: escursione verso un vulcano (Poás o Irazú) in giornata, oppure caffè e museo Nazionale"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Barrio Amón e Otoya",
          "perChi": "chi vuole atmosfera",
          "testo": "Case storiche, caffè e un po' di vita serale; quartiere da attraversare con attenzione dopo il tramonto."
        },
        {
          "nome": "Vicino all'aeroporto (Alajuela)",
          "perChi": "arrivo o partenza tardi",
          "testo": "Hotel comodi per voli presto o tardi; poco da vedere."
        }
      ],
      "sapori": [
        {
          "nome": "Pollo, riso e fagioli",
          "testo": "Il cibo è normale, un misto tra americano e centroamericano, con tanto pollo, riso e fagioli. La frutta invece è incredibile."
        },
        {
          "nome": "Casado",
          "testo": "Il piatto del giorno con riso, fagioli, insalata, platano e carne o pesce. Si mangia nelle sodas."
        },
        {
          "nome": "Gallo pinto",
          "testo": "Riso e fagioli saltati con spezie, a colazione con uova e panna acida."
        },
        {
          "nome": "Chifrijo",
          "testo": "Riso, fagioli, cotenna e pico de gallo, uno snack da bar."
        },
        {
          "nome": "Caffè costaricano",
          "testo": "Si compra in cooperative e negozi del centro."
        }
      ],
      "attenzioni": [
        "San José offre poco al turista: è una base per un paio di giorni, non una meta.",
        "Non girare di sera nelle zone fuori dal centro turistico e nei quartieri dietro la stazione; usare taxi ufficiali o app.",
        "Borseggi nei mercati e sui bus: portare solo il necessario.",
        "Le attività in Costa Rica sono carissime e si paga quasi sempre in dollari: mettetelo in conto nel budget.",
        "La sicurezza mi ha dato una buona impressione, ma come in tutto il Centro America occhi sempre aperti."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Il centro di San José, capitale della Costa Rica',
    immagine: '/images/costa-rica/san-jose-stock.jpg',
  },
  {
    slug: 'puerto-viejo',
    paeseSlug: 'costa-rica',
    ordine: 2,
    nome: 'Puerto Viejo',
    tipologia: ['mare', 'natura', 'giungla'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'La costa caraibica della Costa Rica, girata in bicicletta tra Punta Uva, Playa Chiquita e Cocles, con il Parco Nazionale di Cahuita a un passo.',
    percheAndarci: 'Per Punta Uva, la spiaggia più bella per nuotare nei Caraibi, e per il tour di Cahuita, tra bradipi, comunità Bribrì e cioccolato tradizionale.',
    cosaVedere: ['Punta Uva', 'Playa Chiquita e Cocles', 'Il Parco Nazionale di Cahuita'],
    cosaFare: [
      'Noleggio bici da Rasta Lion per esplorare la costa',
      'Tour completo di Cahuita con la guida José (c\'è una scheda esperienza dedicata)',
      'Happy hour al tramonto a Cocles',
      'Pacuaré rafting (opzionale, da organizzare con una settimana d\'anticipo)',
    ],
    doveDormire:
      'Escape Caribeño: bungalow fronte spiaggia con piscina e un giardino tropicale molto fotografato, colazione giudicata ottima dalla maggior parte degli ospiti. Qualcuno si lamenta delle dotazioni minime in camera e del prezzo, già alto, che non include la colazione. Fascia medio-alta.\n\nAlternative: economiche: Cabinas Guaraná, Rocking J\'s · fascia media: Coco Loco Lodge · lusso: Le Cameleon Boutique Hotel, Cariblue Beach & Jungle Resort.',
    doveMangiare: 'Madre Tierra, Koki Beach Restaurant (spesso un bradipo attraversa il tetto la sera), Amimodo.',
    usciteSerali: 'Hot Rocks per la musica dal vivo, Selina per il karaoke. Di notte meglio muoversi sempre in gruppo.',
    comeArrivare: 'Circa 4-4h30 di van da San José.',
    comeSpostarsi: 'Bicicletta a noleggio, tuk tuk locali per gli spostamenti brevi (circa 4$ a persona).',
    periodoMigliore: 'tutto l\'anno tropicale',
    costi: 'Noleggio bici circa 6$; tour di Cahuita 50$ a persona; Pacuaré rafting 112$.',
    erroriDaEvitare: ['Prenotare il tour di Cahuita e il Pacuaré rafting con almeno una settimana d\'anticipo', 'Di notte muoversi sempre in gruppo, soprattutto le ragazze da sole'],
    miaEsperienza:
      "Abbiamo pedalato lungo la costa fino a Punta Uva, con le scimmie urlatrici che si sentivano dagli alberi sopra la testa. Cahuita bella bella: lì abbiamo visto lo squalo nutrice, le razze, vari bradipi, scimmiette di ogni tipo e altro. La comunità bribri invece è un'esperienza culturale, ma non devi immaginartela come una cosa autentica dentro la giungla, almeno per come l'ho vissuta io. È bello vedere come vivono, o vivevano, e come si fa il cioccolato, però non è tipo i Mentawai, per dire. Nella zona consiglio anche il Jaguar Rescue Center. Da qui poi siamo andati al confine con Panama.",
      "luoghi": [
        {
          "nome": "Parco Nazionale di Cahuita",
          "testo": "Sentiero costiero fra spiaggia, foresta e mare, con una barriera corallina al largo. Si vedono bradipi, scimmie urlatrici e cappuccine, procioni e uccelli. All'ingresso di Cahuita non si paga un biglietto ma si lascia un'offerta.",
          "come": "Ingresso principale a Cahuita, oppure dal lato di Puerto Vargas. Il sentiero costeggia la spiaggia, in parte con guadi.",
          "quando": "Mattina presto, quando gli animali sono attivi.",
          "tempo": "3-4 ore",
          "consiglio": "Con una guida locale si vedono molti più animali. Esiste una scheda esperienza dedicata a un tour completo con la guida José. Noi abbiamo visto lo squalo nutrice, le razze, vari bradipi e scimmie."
        },
        {
          "nome": "Punta Uva e Playa Chiquita",
          "testo": "Spiagge di sabbia chiara a sud di Puerto Viejo, con palme e foresta alle spalle. Da qui si sentono le scimmie urlatrici dagli alberi.",
          "come": "In bici lungo la costa da Puerto Viejo; noleggio in paese.",
          "quando": "Mattina o tardo pomeriggio.",
          "tempo": "Mezza giornata",
          "consiglio": "Pedalare lungo la costa è il modo più semplice e più vero di conoscere il Caribe costaricano."
        },
        {
          "nome": "Playa Cocles",
          "testo": "Spiaggia frequentata vicino al paese, con onde per il surf e bar sulla sabbia.",
          "come": "In bici o a piedi dal paese.",
          "quando": "Tardo pomeriggio per l'happy hour.",
          "tempo": "2-3 ore",
          "consiglio": "Le correnti sono forti: bagno con attenzione."
        },
        {
          "nome": "Fiume Pacuaré (rafting)",
          "testo": "Discesa sul fiume Pacuaré, fra le gole e la foresta, un'escursione opzionale molto richiesta in zona.",
          "come": "Tour organizzato da Puerto Viejo, da prenotare qualche giorno prima.",
          "quando": "Verificare con l'operatore la stagione migliore.",
          "tempo": "Giornata intera",
          "consiglio": "Il fiume è lontano dalla costa: è una giornata lunga, con molte ore di strada."
        },
        {
          "nome": "Jaguar Rescue Center",
          "testo": "Un centro che soccorre animali feriti, malati o rimasti orfani, soprattutto scimmie, bradipi, uccelli e rettili. Li cura e, quando possono tornare liberi, li rilascia nella foresta, anche dalla sua stazione di rilascio La Ceiba.",
          "come": "A Puerto Viejo, in bici o in tuk tuk dal paese.",
          "quando": "Visite guidate tutti i giorni alle 9.30 e alle 11.30; visita privata alle 14, con posti limitati.",
          "tempo": "1,5-2 ore",
          "url": "https://www.jaguarrescue.foundation/en-us/",
          "consiglio": "Si entra solo con la visita guidata: prenotarla online sul loro sito."
        },
        {
          "nome": "Frontiera di Sixaola, verso Panama",
          "testo": "Da Puerto Viejo o Cahuita si arriva in bus a Sixaola, si passa il ponte binazionale sul fiume Sixaola, aperto nel 2021, e si entra a Panama a Guabito. Da lì si prosegue per Bocas del Toro.",
          "come": "Bus locale fino a Sixaola, poi a piedi sul ponte. Dopo Guabito: bus o taxi collettivo fino a Changuinola e Almirante, poi water taxi per Bocas Town (circa 30 minuti).",
          "quando": "La mattina presto: gli uffici di frontiera chiudono nel tardo pomeriggio.",
          "tempo": "Mezza giornata fino a Bocas",
          "costo": "Tassa di uscita via terra dal Costa Rica: 8 USD a persona, online sul sito del Banco de Costa Rica o ai chioschi BCR della frontiera.",
          "consiglio": "Panama può chiedere il biglietto di uscita e la prova di almeno 1.000 USD o una carta di credito. Panama è un'ora avanti rispetto al Costa Rica."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: bici fino a Punta Uva",
            "Pranzo di cucina caraibica",
            "Pomeriggio: Playa Cocles e happy hour"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: bici lungo la costa fino a Punta Uva",
            "Giorno 2: Parco di Cahuita con guida, poi bagno"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro di Puerto Viejo",
          "perChi": "vita sociale e ristoranti",
          "testo": "Tutto vicino ma musica la sera, anche forte."
        },
        {
          "nome": "Playa Cocles e Punta Uva",
          "perChi": "calma e natura",
          "testo": "Cabañas nella foresta, ma serve la bici o un taxi per cena."
        }
      ],
      "sapori": [
        {
          "nome": "Rice and beans caraibico",
          "testo": "Riso e fagioli cotti nel latte di cocco, con pollo o pesce."
        },
        {
          "nome": "Pollo e pesce al cocco",
          "testo": "Specialità caraibica, in piccoli locali del paese."
        },
        {
          "nome": "Patacones e ceviche",
          "testo": "Platano fritto e ceviche fresco, vicino alle spiagge."
        },
        {
          "nome": "Pan bon",
          "testo": "Pane dolce caraibico con frutta, tipico di queste coste."
        }
      ],
      "attenzioni": [
        "Furti nelle spiagge e nei bungalow: non lasciare nulla incustodito.",
        "Il mare e le correnti a Playa Cocles sono forti: bagno con prudenza.",
        "Il tempo caraibico è più piovoso e imprevedibile del Pacifico: lasciare margine di giorni."
      ],
    esperienzeSlugs: ['tour-cahuita'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'La spiaggia caraibica di Punta Uva vicino a Puerto Viejo, Costa Rica',
    immagine: '/images/costa-rica/puerto-viejo-stock.jpg',
  },
  {
    slug: 'tortuguero',
    paeseSlug: 'costa-rica',
    ordine: 3,
    nome: 'Tortuguero',
    tipologia: ['natura', 'giungla'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'Un piccolo villaggio senza strade per auto, raggiungibile solo in barca lungo i canali della giungla, con il kayak all\'alba tra le mangrovie.',
    percheAndarci: 'Per il tragitto in barca, che è già uno dei trasferimenti più belli del viaggio.',
    cosaVedere: ['I canali di Tortuguero, tra coccodrilli, caimani e uccelli', 'Cerro Tortuguero, collina panoramica con vista su tutta l\'area'],
    cosaFare: [
      'Navigazione in barca da Moín a Tortuguero (c\'è una scheda esperienza dedicata)',
      'Kayak all\'alba tra le mangrovie (c\'è una scheda esperienza dedicata)',
      'Cerro Tortuguero in autonomia',
      'Escursione notturna alla nidificazione delle tartarughe (stagionale, luglio-ottobre)',
    ],
    doveDormire:
      'Hotel Icaco Tortuguero: posizione comoda, proprio davanti alla spiaggia del parco, check-in e check-out rapidi. Alcune recensioni giudicano le camere piccole ed essenziali rispetto al prezzo. Fascia medio-bassa.\n\nAlternative: economiche: La Casona de Tortuguero, Cabinas Miss Junie · fascia media: Aracari Garden Hotel · lusso: Tortuga Lodge & Gardens, Manatus Hotel.',
    doveMangiare: 'Taylor\'s Place o Mi Niño in paese; cena inclusa in hotel.',
    comeArrivare: '1h30 di van fino al porto di Moín, poi 3 ore di navigazione in barca.',
    comeSpostarsi: 'A piedi: il villaggio non ha strade per auto. Kayak e barca per le escursioni.',
    periodoMigliore: 'luglio-ottobre per la nidificazione delle tartarughe',
    costi: 'Cerro Tortuguero 6$ barca + 3$ ingresso; escursione notturna tartarughe circa 40$ a persona.',
    erroriDaEvitare: [],
    miaEsperienza:
      "Tortuguero è bellissimo. Assomiglia molto all'Amazzonia ed è fantastico per la natura. Già il tragitto in barca da Moín, tra canali di giungla con coccodrilli e scimmie sulle rive, è stato uno dei trasferimenti più belli di tutto il viaggio.",
      "luoghi": [
        {
          "nome": "Canali di Tortuguero",
          "testo": "Una rete di canali di mangrovie e foresta nel nord-est, abitata da caimani, coccodrilli, scimmie, aironi e martin pescatori. Si naviga in barca con motore a basso impatto.",
          "come": "Barca da Moín o dalla zona di Cariari-La Pavona, lunghe ore di trasferimento. Il villaggio è senza strade.",
          "quando": "Mattina presto, per animali e luce.",
          "tempo": "2-3 ore",
          "consiglio": "Il trasferimento da Moín a Tortuguero, tra canali e giungla, è uno dei più belli del viaggio e vale come esperienza a sé."
        },
        {
          "nome": "Kayak all'alba nelle mangrovie",
          "testo": "Kayak in silenzio fra i canali laterali, senza motore, per avvicinarsi a uccelli e rettili.",
          "come": "Con guida del lodge, partenza prima dell'alba. Esiste una scheda esperienza dedicata.",
          "quando": "Alba.",
          "tempo": "2 ore"
        },
        {
          "nome": "Cerro Tortuguero",
          "testo": "Collina con vista su canali, mare e foresta.",
          "come": "Breve traversata in barca dal villaggio fino all'inizio del sentiero; chiedere al lodge le regole d'accesso e la tassa del momento.",
          "quando": "Mattina.",
          "tempo": "1-1,5 ore",
          "consiglio": "Portare acqua e repellente: nel bosco umido le zanzare sono tante."
        },
        {
          "nome": "Nidificazione delle tartarughe",
          "testo": "In stagione le tartarughe verdi depongono sulla spiaggia di notte. Si osservano solo con guide autorizzate.",
          "come": "Escursione notturna con guida autorizzata, in gruppi piccoli e con regole severe.",
          "quando": "Notte, nella stagione di nidificazione.",
          "tempo": "2-3 ore",
          "consiglio": "Niente luci né flash: segui la guida e mantieni distanza."
        }
      ],
      "programmi": [
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: barca da Moín, arrivo nel villaggio, passeggiata a piedi",
            "Giorno 2: kayak all'alba, canali in barca, Cerro Tortuguero"
          ]
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorni 1-2 come sopra",
            "Giorno 3: nidificazione notturna (in stagione) oppure trekking nel parco"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lodge sui canali",
          "perChi": "chi vuole immergersi nella natura",
          "testo": "Pacchetti con pasti e escursioni, isolati e silenziosi. Spesso gli unici servizi sono quelli del lodge."
        },
        {
          "nome": "Villaggio di Tortuguero",
          "perChi": "budget",
          "testo": "Cabinas semplici e ristoranti, con il rumore del paese."
        }
      ],
      "sapori": [
        {
          "nome": "Casado caraibico",
          "testo": "Riso, fagioli, pesce o pollo al cocco."
        },
        {
          "nome": "Pesce di fiume e mare",
          "testo": "Gamberi e pesce fresco, fritti o alla piastra."
        },
        {
          "nome": "Frutta tropicale",
          "testo": "Papaya, ananas e banane dei dintorni."
        },
        {
          "nome": "Gallo pinto",
          "testo": "A colazione, con uova e plátano."
        }
      ],
      "attenzioni": [
        "La regione è molto piovosa tutto l'anno: giacca impermeabile e custodie.",
        "Nel parco le regole sulla nidificazione sono severe: niente luci, niente flash, solo con guida autorizzata.",
        "Zanzare e umidità: repellente e abiti leggeri a maniche lunghe."
      ],
    esperienzeSlugs: ['barca-tortuguero', 'kayak-tortuguero'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Un canale di giungla verso il villaggio di Tortuguero, Costa Rica',
    immagine: '/images/costa-rica/tortuguero-stock.jpg',
  },
  {
    slug: 'sarapiqui',
    paeseSlug: 'costa-rica',
    ordine: 4,
    nome: 'Sarapiquí',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'Un lodge immerso nella foresta, con rafting sul fiume Sarapiquí e una cooking class per imparare a preparare piatti tradizionali.',
    percheAndarci: 'Per il rafting sul Sarapiquí, più regolare e adatto anche ai principianti rispetto al più estremo Pacuaré.',
    cosaVedere: ['La foresta intorno all\'Epic Adventure Lodge', 'Le Cataratas Bajas del Toro (escursione facoltativa)'],
    cosaFare: [
      'Rafting sul fiume Sarapiquí (c\'è una scheda esperienza dedicata)',
      'Cooking class inclusa al lodge (tipicamente empanadas)',
      'Escursione facoltativa alle Cataratas Bajas del Toro',
    ],
    doveDormire:
      'Epic Adventure Lodge, apprezzato per la vicinanza al fiume, la colazione abbondante e il calore dei proprietari. L\'unica nota stonata sono piccole mancanze, come zanzariere e ganci per gli asciugamani. Fascia media.\n\nAlternative: economiche: Hotel El Bambú, Perla Verde Hostel · fascia media: La Quinta de Sarapiquí Lodge · lusso: Sueño Azul Resort, Islas del Río.',
    doveMangiare: 'La cooking class al lodge, che diventa anche la cena; Restaurante Mirador Tinamú.',
    comeArrivare: '1h30 in barca da Tortuguero più 2h30 in van.',
    comeSpostarsi: 'Van privato; a piedi nel lodge.',
    periodoMigliore: 'tutto l\'anno, il Sarapiquí è più costante del Pacuaré',
    costi: 'Pranzo al sacco per Bajos del Toro circa 12$ a persona.',
    erroriDaEvitare: ['Fare scorta di bibite al supermercato lungo il tragitto prima di arrivare al lodge'],
    miaEsperienza:
      'La cooking class al lodge, con le empanadas preparate a mano che poi sono diventate la nostra cena, è stato un momento conviviale diverso dal resto del viaggio, più lento e più vero.',
      "luoghi": [
        {
          "nome": "Rafting sul Río Sarapiquí",
          "testo": "Discesa sul fiume tra rapide e foresta. Esiste una scheda esperienza dedicata.",
          "come": "Tour organizzato dal lodge o da operatori della zona, con guida e attrezzatura.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Cooking class al lodge",
          "testo": "Lezione di cucina costaricana, tipicamente empanadas fatte a mano che diventano la cena.",
          "come": "Inclusa nel pacchetto del lodge.",
          "quando": "Pomeriggio.",
          "tempo": "2 ore",
          "consiglio": "Un momento conviviale, più lento e più vero del resto del viaggio."
        },
        {
          "nome": "Foresta del lodge",
          "testo": "Sentieri nella foresta intorno al lodge, con uccelli, rane e scimmie.",
          "come": "A piedi dal lodge con guida.",
          "quando": "Alba.",
          "tempo": "1-2 ore"
        },
        {
          "nome": "Catarata del Toro",
          "testo": "Una cascata che cade dentro un antico cratere vulcanico, nella foresta di Bajos del Toro, con quattro belvedere in alto. Escursione opzionale.",
          "come": "In auto o con un tour; si trova circa a metà strada fra l'aeroporto di San José e La Fortuna, su strada asfaltata. Non serve prenotare.",
          "quando": "Da lunedì a sabato 7-17; chiusa la domenica.",
          "tempo": "Mezza giornata",
          "costo": "15 USD (sito ufficiale, 2026).",
          "url": "https://www.catarata-del-toro.com/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: rafting",
            "Pranzo al lodge",
            "Pomeriggio: cooking class"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: rafting e cooking class",
            "Giorno 2: sentieri nella foresta del lodge, poi trasferimento verso Arenal"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lodge nella foresta",
          "perChi": "chi cerca natura",
          "testo": "Sistemazioni isolate, con attività incluse, ma lontane dai paesi."
        }
      ],
      "sapori": [
        {
          "nome": "Empanadas",
          "testo": "Fatte a mano in cooking class."
        },
        {
          "nome": "Casado",
          "testo": "Il piatto del giorno con riso e fagioli."
        },
        {
          "nome": "Frutta tropicale",
          "testo": "Ananas e banane della regione."
        },
        {
          "nome": "Caffè e cacao",
          "testo": "Coltivati nella zona; da assaggiare nei lodge."
        }
      ],
      "attenzioni": [
        "Rafting: indossare sempre casco e giubbotto forniti dall'operatore e seguire la guida.",
        "La zona è piovosa e umida: impermeabile e ricambio.",
        "Zanzare e insetti: repellente."
      ],
    esperienzeSlugs: ['rafting-sarapiqui'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'La foresta pluviale intorno a un lodge a Sarapiquí, Costa Rica',
    immagine: '/images/costa-rica/sarapiqui-stock.jpg',
  },
  {
    slug: 'arenal',
    paeseSlug: 'costa-rica',
    ordine: 5,
    nome: 'Arenal e La Fortuna',
    tipologia: ['natura', 'vulcani'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'Il vulcano Arenal, la Cascada de La Fortuna e le sorgenti termali gratuite di El Chollín, molto più autentiche delle terme a pagamento "da cartolina".',
    percheAndarci: 'Per le sorgenti termali gratuite di El Chollín, uno dei momenti più belli e meno "da cartolina" di tutto il viaggio.',
    cosaVedere: ['Il vulcano Arenal', 'La Cascada de La Fortuna', 'Le sorgenti termali di El Chollín'],
    cosaFare: [
      'Bagno alla Cascada de La Fortuna (c\'è una scheda esperienza dedicata)',
      'Trekking al vulcano al Mirador El Silencio (opzionale)',
      'Ponti sospesi di Mistico Hanging Bridges (opzionale)',
      'Sorgenti termali gratuite di El Chollín',
      'Canyoning nel Lost Canyon (l\'abbiamo fatto: è l\'attività che consiglio di più a La Fortuna)',
    ],
    doveDormire:
      'Hotel Campos Arenal: tra i punti di forza più citati ci sono la vista sul vulcano dalla piscina, la colazione abbondante e la posizione comoda. Il difetto ricorrente è il vialetto sterrato d\'accesso, scivoloso quando piove. Fascia media.\n\nAlternative: economiche: Arenal Backpackers Resort, Gringo Pete\'s · fascia media: Volcano Lodge & Springs · lusso: Nayara Springs, Tabacón Thermal Resort & Spa.',
    doveMangiare: 'Nanku Restaurant con musica dal vivo; Soda Víquez per la cucina tradizionale ed economica; Spectacular Cantina (messicano).',
    usciteSerali: 'Selina o Lava Lounge.',
    comeArrivare: 'Circa 1h20 di van da Sarapiquí.',
    comeSpostarsi: 'Minivan a disposizione per tutta la giornata.',
    periodoMigliore: 'tardo pomeriggio per le sorgenti termali',
    costi: 'Cascada de La Fortuna 18-20$; tour combo 90-120$ a persona; canyoning Lost Canyon 115-119$.',
    erroriDaEvitare: ['Alle sorgenti di El Chollín non ci sono spogliatoi: bastano scarpe da fiume, costume e torcia frontale, senza asciugamani'],
    miaEsperienza:
      "La Fortuna è bella, ma un po' overtouristy. Le attività sono care, però belle belle, soprattutto il canyoning, che abbiamo fatto e che consiglio. Le sorgenti termali gratuite di El Choyin, in un tratto di fiume naturale, ci sono sembrate molto più autentiche delle terme a pagamento della zona.",
      "luoghi": [
        {
          "nome": "Cascada de La Fortuna",
          "testo": "Cascata di circa 70 metri in una gola di foresta, con circa 530 gradini fra discesa e risalita e una pozza per il bagno. Esiste una scheda esperienza dedicata.",
          "come": "Pochi minuti in auto o taxi dal paese di La Fortuna, poi scale ripide fino alla base.",
          "quando": "Aperta tutti i giorni dalle 7 alle 17; meglio la mattina, con meno folla.",
          "tempo": "2 ore",
          "costo": "20 USD per gli stranieri (2025); si paga anche solo per il belvedere.",
          "url": "https://www.cataratariofortuna.com/",
          "consiglio": "Il ritorno è tutto in salita: scarpe con presa e acqua."
        },
        {
          "nome": "Il fiume termale gratuito di El Chollín",
          "testo": "Un tratto del fiume Tabacón con acqua calda naturale e accesso pubblico, a pochi passi dai resort termali. Da non confondere con El Choyín, un complesso a pagamento sullo stesso fiume.",
          "come": "In auto o taxi da La Fortuna; si parcheggia sulla strada, spesso con un custode, e si scende a piedi al fiume per un breve tratto.",
          "quando": "Mattina presto: nei fine settimana e nei festivi è pieno.",
          "tempo": "1-2 ore",
          "consiglio": "Non ci sono docce, armadietti né servizi: scarpe da acqua, asciugamano e niente oggetti di valore in auto."
        },
        {
          "nome": "Ponti sospesi di Mistico",
          "testo": "Un sentiero di circa 3,2 km nella foresta vicino all'Arenal, con 16 ponti, di cui 6 sospesi; i più alti passano a circa 45 metri sopra la foresta.",
          "come": "In auto o taxi da La Fortuna; si va da soli o con una guida, che va prenotata.",
          "quando": "Aperto tutti i giorni dalle 6; ultimo ingresso al sentiero alle 15.50. Meglio la mattina presto, per gli animali.",
          "tempo": "2-3 ore",
          "costo": "Da 32 USD più tasse da soli, da 44 USD con la guida (sito ufficiale, 2026).",
          "url": "https://www.misticopark.com/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Cascata di La Fortuna",
            "Pranzo a La Fortuna",
            "Pomeriggio: fiume termale gratuito di El Chollín"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Cascada e terme",
            "Giorno 2: ponti sospesi di Mistico o escursione con vista sul vulcano, canyoning opzionale"
          ]
        }
      ],
      "zone": [
        {
          "nome": "La Fortuna",
          "perChi": "servizi e tour",
          "testo": "Il paese ha ristoranti, agenzie e hotel, con vista sul vulcano."
        },
        {
          "nome": "Dintorni del vulcano",
          "perChi": "chi cerca silenzio",
          "testo": "Lodge nella foresta, con terme proprie; serve l'auto per cenare."
        }
      ],
      "sapori": [
        {
          "nome": "Casado",
          "testo": "Riso, fagioli, insalata e carne o pesce."
        },
        {
          "nome": "Gallo pinto",
          "testo": "A colazione, con uova."
        },
        {
          "nome": "Olla de carne",
          "testo": "Stufato di manzo con yuca, platano e mais."
        },
        {
          "nome": "Pesce di lago",
          "testo": "Tilapia fritta, nei ristoranti della zona."
        }
      ],
      "attenzioni": [
        "La salita alla Cascada de La Fortuna è lunga e il ritorno è tutto in salita.",
        "Le terme a pagamento sono care: valutare quelle gratuite.",
        "Canyoning: molto adrenalinico, solo con operatori seri. Noi l'abbiamo fatto ed è bellissimo.",
        "La Fortuna è un po' overtouristy e le attività costano care: scegliere poche cose fatte bene."
      ],
    esperienzeSlugs: ['cascata-fortuna-termales'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Il vulcano Arenal visto da La Fortuna, Costa Rica',
    immagine: '/images/copertine/costa-rica-360.jpg',
  },
  {
    slug: 'monteverde',
    paeseSlug: 'costa-rica',
    ordine: 6,
    nome: 'Monteverde',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'La foresta nebulosa di Monteverde, con una piantagione di caffè, una camminata notturna per la fauna e alcune delle migliori zipline del paese.',
    percheAndarci: 'Per la foresta nebulosa e per le zipline, considerate tra le migliori della Costa Rica e più lunghe di quelle di La Fortuna.',
    cosaVedere: ['La foresta nebulosa di Monteverde', 'Una piantagione di caffè'],
    cosaFare: [
      'Visita a una piantagione di caffè con degustazione',
      'Camminata notturna nella foresta nebulosa (c\'è una scheda esperienza dedicata)',
      'Zipline avventura (c\'è una scheda esperienza dedicata)',
      'Birdwatching all\'alba (opzionale, guida Jason)',
    ],
    doveDormire:
      'Hotel Jardines de Monteverde: giardini curati, molta fauna da osservare senza uscire dalla struttura, staff sempre citato come gentile. Alcune recensioni più recenti segnalano camere e bagni un po\' datati. Fascia medio-bassa.\n\nAlternative: economiche: Pensión Santa Elena, Monteverde Backpackers · fascia media: Cloud Forest Lodge · lusso: Hotel Belmar, Monteverde Lodge & Gardens.',
    doveMangiare: 'Tree House (supermercato accanto); Tico y Rico, The Green Restaurant, Sabor Tico.',
    comeArrivare: 'Circa 3-3h30 di van da La Fortuna.',
    comeSpostarsi: 'Van privato per le escursioni.',
    periodoMigliore: 'mattina presto per birdwatching e zipline',
    costi: 'Camminata notturna (Kinkajou Night Walk) 28$ a persona; zipline circa 60$ a persona; birdwatching 50$ a persona.',
    erroriDaEvitare: ['Non avere paura di chiedere alla guida di accorciare la camminata notturna se dura troppo: per la durata non piace a tutti allo stesso modo'],
    miaEsperienza:
      "A Monteverde c'è la zip line gigante, ed è fighissima. Bella anche la camminata notturna nella foresta nebulosa, con la fauna che si muove solo dopo il tramonto, anche se a qualcuno la durata (1h30) può sembrare lunga.",
      "luoghi": [
        {
          "nome": "Foresta nebulosa di Monteverde",
          "testo": "Foresta pluviale d'altura, avvolta nelle nuvole, con migliaia di specie di piante, uccelli e insetti. Si cammina su sentieri e ponti.",
          "come": "Con taxi o navetta dalla cittadina di Santa Elena, su una strada di montagna lenta. Dal 2026 l'ingresso è a orario, da prenotare online. Meglio con guida per riconoscere gli animali.",
          "quando": "Sentieri della foresta dalle 7.30 alle 16 (orari del sito ufficiale); mattina presto per gli uccelli. La nebbia è parte del paesaggio.",
          "tempo": "3-4 ore",
          "url": "https://cloudforestmonteverde.com/"
        },
        {
          "nome": "Camminata notturna nella foresta",
          "testo": "Escursione serale con guida e torcia per vedere rane, insetti, tarantole e altri animali notturni. Esiste una scheda esperienza dedicata.",
          "come": "Partenza dopo il tramonto con guida.",
          "quando": "Sera: alla riserva la camminata notturna parte alle 18.",
          "tempo": "1-2 ore",
          "consiglio": "A qualcuno la durata può sembrare lunga. Portare giacca e scarpe chiuse."
        },
        {
          "nome": "Piantagione di caffè",
          "testo": "Visita a una finca con degustazione e spiegazione del processo, dalla pianta alla tazza.",
          "come": "Tour di mezza giornata prenotato in loco.",
          "quando": "Mattina.",
          "tempo": "2-3 ore"
        },
        {
          "nome": "Zipline avventura",
          "testo": "Percorso di teleferiche sopra la canopy. Esiste una scheda esperienza dedicata. A Monteverde c'è la zip line gigante: 100% Aventura dichiara sul suo sito il cavo più lungo del Costa Rica, 1.590 metri, su 10 linee, da 72 USD a persona (2026).",
          "url": "https://www.aventuracanopytour.com/",
          "come": "Prenotazione con operatore del posto, con trasferimento.",
          "quando": "Mattina.",
          "tempo": "2-3 ore",
          "consiglio": "Chiedere sempre l'attrezzatura e le misure di sicurezza dell'operatore."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: foresta nebulosa con guida",
            "Pranzo a Santa Elena",
            "Pomeriggio: caffè",
            "Sera: camminata notturna"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: foresta, caffè e camminata notturna",
            "Giorno 2: zipline, birdwatching all'alba come opzione"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Santa Elena",
          "perChi": "servizi e budget",
          "testo": "Ristoranti, agenzie e hotel; per la riserva servono taxi o navetta."
        },
        {
          "nome": "Vicino alla riserva",
          "perChi": "chi cerca natura",
          "testo": "Lodge e cabañas vicino alla foresta, più isolati e più cari."
        }
      ],
      "sapori": [
        {
          "nome": "Casado",
          "testo": "Il piatto del giorno con riso, fagioli e pollo o pesce."
        },
        {
          "nome": "Caffè di Monteverde",
          "testo": "Coltivato sugli altopiani, con degustazioni nelle fincas."
        },
        {
          "nome": "Trota",
          "testo": "Allevata nella zona, in vari ristoranti."
        },
        {
          "nome": "Formaggio e dolci",
          "testo": "Prodotti di latte locali."
        }
      ],
      "attenzioni": [
        "Fa freddo e piove di sera: portare giacca impermeabile e maglione.",
        "Le strade di montagna verso la riserva sono strette e lente: lasciare tempo, e prenotare l'orario d'ingresso online.",
        "Per gli uccelli e la fauna serve una guida: da soli si vede molto meno."
      ],
    esperienzeSlugs: ['camminata-notturna-monteverde', 'zipline-monteverde'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'La foresta nebulosa di Monteverde, Costa Rica',
    immagine: '/images/costa-rica/monteverde-stock.jpg',
  },
  {
    slug: 'uvita',
    paeseSlug: 'costa-rica',
    ordine: 7,
    nome: 'Uvita',
    tipologia: ['mare', 'natura', 'relax'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione: 'La costa pacifica della Costa Rica, con il whale watching e il celebre banco di sabbia a forma di coda di balena, la Cola de la Ballena.',
    percheAndarci: 'Per il whale watching (nella stagione giusta) e per uno dei paesaggi più belli di tutto il viaggio, la Cola de la Ballena vista con la bassa marea.',
    cosaVedere: ['La Cola de la Ballena, il banco di sabbia a forma di coda di balena', 'Il ponte di Tárcoles con i grandi coccodrilli, lungo il tragitto'],
    cosaFare: [
      'Whale watching (c\'è una scheda esperienza dedicata)',
      'Giro a cavallo al tramonto in spiaggia al Rancho La Merced (consigliatissimo)',
      'Surf con Ariel, oppure noleggio tavole da Nomadic Surf',
      'Yoga al tramonto su un deck panoramico',
    ],
    doveDormire:
      'El Tecal: buona posizione e staff cordiale sono gli aspetti più citati, ma diverse recensioni segnalano camere e bagni non sempre curati come dovrebbero. Fascia economico-media.\n\nAlternative: economiche: Flutterby House, Cascada Verde Hostel · fascia media: Eden Tica Lodge, Hotel Por Qué No? · lusso: La Cusinga Lodge, Oxygen Jungle Villas.',
    doveMangiare: 'Gastro Park di Uvita (spesso sconto del 10% se avvisato in anticipo).',
    comeArrivare: 'Fino a 4 ore di van da Monteverde, con sosta fotografica al ponte di Tárcoles.',
    comeSpostarsi: 'A piedi in spiaggia; van per le escursioni.',
    periodoMigliore: 'gennaio-marzo o luglio-ottobre per il whale watching (novembre-dicembre è meno favorevole)',
    costi: 'Whale watching 70$ a persona; equitazione 52$ a persona; surf 70$ per 4 tavole al giorno; yoga 10$ a persona.',
    erroriDaEvitare: ['Affidarsi a operatori improvvisati per il whale watching: meglio un operatore serio come Uvita Ballena Jorobada o il DMC, e chiedere sempre dell\'assicurazione'],
    miaEsperienza:
      "A Uvita ho fatto un po' di tutto. Per il tour delle balene consiglio Uvita Ballena Jorobada. Al Rancho La Merced abbiamo fatto il giro a cavallo al tramonto in spiaggia: io sono caduto, perché non sono un cavallerizzo esperto, ma è bellissimo. Gli animali sono trattati bene, cosa per me importantissima, e sono docili. Super consigliato. Il Costa Rica è bellissimo anche per il surf, e io qui l'ho fatto con Ariel. E la Cola de la Ballena con la bassa marea resta uno dei paesaggi più belli del viaggio.",
      "luoghi": [
        {
          "nome": "Parco Nazionale Marino Ballena e Cola de la Ballena",
          "testo": "Un banco di sabbia a forma di coda di balena che emerge con la bassa marea, nel Parco Marino Ballena. Uno dei paesaggi più belli del viaggio.",
          "come": "Ingresso dalla spiaggia di Playa Uvita; il banco si raggiunge a piedi con la bassa marea.",
          "quando": "Con bassa marea, da controllare sulle tabelle.",
          "tempo": "1-2 ore",
          "consiglio": "Controllare gli orari di marea: con l'alta marea il banco sparisce."
        },
        {
          "nome": "Whale watching",
          "testo": "Uscita in barca nel Parco Marino Ballena, creato nel 1989, per avvistare le megattere che vengono qui a riprodursi. Esiste una scheda esperienza dedicata.",
          "come": "Tour da Uvita con barca di piccole dimensioni.",
          "quando": "Due stagioni: da dicembre ad aprile arrivano le megattere dell'emisfero nord, da luglio a novembre quelle dell'emisfero sud.",
          "tempo": "3 ore",
          "consiglio": "Gli avvistamenti non sono garantiti, ma il paesaggio vale comunque."
        },
        {
          "nome": "Ponte di Tárcoles",
          "testo": "Un ponte sul fiume Tárcoles, lungo la strada principale, da cui si vedono grandi coccodrilli sulle rive.",
          "come": "Sosta lungo la strada Costanera, a piedi sul ponte.",
          "quando": "Giorno, con luce.",
          "tempo": "15-30 minuti",
          "consiglio": "Non scendere sulla riva: i coccodrilli sono reali."
        },
        {
          "nome": "Surf e yoga",
          "testo": "Noleggio di tavole e lezioni sulla spiaggia, e yoga al tramonto su un deck panoramico.",
          "come": "Scuole e deck nella zona di Uvita e Dominical.",
          "quando": "Mattina per il surf, tramonto per lo yoga.",
          "tempo": "2 ore"
        },
        {
          "nome": "Parco Nazionale Corcovado",
          "testo": "Il parco più selvaggio del paese, nella penisola di Osa: foresta primaria, spiagge deserte, tapiri, pecari e la popolazione più grande di are rosse del Costa Rica.",
          "come": "Solo con guida autorizzata e prenotazione (reservaciones.pnc@sinac.go.cr). In barca da Bahía Drake, Sierpe o Puerto Jiménez fino alla stazione Sirena; via terra dal settore La Leona, vicino a Playa Carate.",
          "quando": "Tutti i giorni 8-16. Il periodo migliore va da dicembre ad aprile; a ottobre la stazione Sirena è chiusa.",
          "tempo": "1-2 giorni",
          "url": "https://www.visitcostarica.com/",
          "consiglio": "Prenotare con largo anticipo: l'ente del turismo costaricano indica almeno sei mesi."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Cola de la Ballena con bassa marea",
            "Pranzo a Uvita",
            "Pomeriggio: surf",
            "Tramonto: yoga sul deck"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Cola de la Ballena e spiaggia",
            "Giorno 2: whale watching in stagione, sosta al ponte di Tárcoles verso nord"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Uvita",
          "perChi": "spiagge e servizi",
          "testo": "Ristoranti, tour e negozi vicino alla spiaggia, a poca distanza dal parco."
        },
        {
          "nome": "Colline sopra la costa",
          "perChi": "chi cerca vista e silenzio",
          "testo": "Lodge con vista sull'oceano, ma lontani dai servizi."
        }
      ],
      "sapori": [
        {
          "nome": "Casado di pesce",
          "testo": "Riso, fagioli e pesce del giorno."
        },
        {
          "nome": "Ceviche",
          "testo": "Pesce crudo marinato nel lime, sulle spiagge."
        },
        {
          "nome": "Frutta e smoothie",
          "testo": "Ananas, papaya e mango, per i chioschi."
        },
        {
          "nome": "Pesce alla griglia",
          "testo": "Nei ristoranti sul mare di Uvita."
        }
      ],
      "attenzioni": [
        "Tenere d'occhio la marea: il banco di sabbia si sommerge con l'alta marea.",
        "Il mare del Pacifico ha correnti forti: nuotare con prudenza.",
        "Furti dalle auto parcheggiate sulle spiagge: non lasciare niente a vista."
      ],
    esperienzeSlugs: ['whale-watching-uvita'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Il banco di sabbia della Cola de la Ballena a Uvita, Costa Rica',
    immagine: '/images/costa-rica/uvita-stock.jpg',
  },
  {
    slug: 'manuel-antonio',
    paeseSlug: 'costa-rica',
    ordine: 8,
    nome: 'Parco Nazionale Manuel Antonio',
    tipologia: ['natura', 'mare'],
    giorniConsigliati: 'mezza giornata, lungo il tragitto di rientro',
    visitataPersonalmente: true,
    introduzione: 'Una delle tappe più belle di tutto il Costa Rica: sentieri guidati tra bradipi, scimmie e iguane, seguiti da una delle spiagge più belle del paese.',
    percheAndarci: 'Con una guida esperta la probabilità di avvistare fauna selvatica è altissima, in uno dei parchi nazionali più famosi del paese.',
    cosaVedere: ['Bradipi, scimmie, iguane e colibrì lungo i sentieri', 'Le spiagge all\'interno del parco'],
    cosaFare: ['Visita guidata inclusa nel parco (c\'è una scheda esperienza dedicata)', 'Tempo libero in spiaggia dentro il parco'],
    doveDormire: 'Qui non abbiamo dormito: è stata una tappa di mezza giornata lungo il rientro verso San José.',
    doveMangiare: 'Non ho indirizzi da segnalare: la tappa era tutta per la visita al parco.',
    comeArrivare: 'Circa 1h30 di trasferimento da Uvita.',
    comeSpostarsi: 'A piedi lungo i sentieri del parco, con guida.',
    periodoMigliore: 'mattina presto: noi siamo partiti prima dell\'alba',
    costi: 'Il prezzo del biglietto non me lo sono segnato; ricordate che il parco è chiuso il martedì.',
    erroriDaEvitare: ['Dimenticare che il parco è chiuso il martedì: meglio controllare prima ed eventualmente anticipare la visita'],
    miaEsperienza:
      "Manuel Antonio è bello come parco, ma per la quantità di persone che ci sono hai quasi la sensazione di andare allo zoo. Rimane comunque molto bello. Grazie alla guida abbiamo visto da vicino bradipi, scimmie e iguane lungo sentieri che da soli avremmo fatto molta più fatica a leggere.",
      "luoghi": [
        {
          "nome": "Parco Nazionale Manuel Antonio",
          "testo": "Un parco piccolo ma ricco di vita: bradipi, scimmie cappuccine, iguane e colibrì lungo i sentieri, con spiagge dentro al parco. Esiste una scheda esperienza dedicata.",
          "come": "Si arriva da Quepos in bus o auto, in pochi minuti. Con guida si vedono molti più animali.",
          "quando": "Mattina presto, quando gli animali sono attivi. Aperto da mercoledì a lunedì, 7-16; chiuso il martedì.",
          "tempo": "3-4 ore",
          "costo": "Circa 18 USD per gli stranieri adulti (16 USD più IVA, 2025-2026), solo online e con posti limitati.",
          "url": "https://serviciosenlinea.sinac.go.cr/",
          "consiglio": "Con la guida abbiamo visto da vicino bradipi, scimmie e iguane lungo sentieri che da soli avremmo fatto molta più fatica a leggere."
        },
        {
          "nome": "Playa Manuel Antonio e Playa Espadilla Sur",
          "testo": "Spiagge dentro il parco, con sabbia chiara e acqua calma. Si può fare il bagno dopo la visita.",
          "come": "Dai sentieri del parco.",
          "quando": "Metà mattina.",
          "tempo": "1-2 ore",
          "consiglio": "Non dare cibo agli animali e non lasciare zaini incustoditi: le scimmie li aprono."
        },
        {
          "nome": "Ponte di Tárcoles",
          "testo": "Lungo il tragitto da Uvita, il ponte con i grandi coccodrilli del fiume Tárcoles.",
          "come": "Sosta sulla Costanera.",
          "quando": "Giorno.",
          "tempo": "20-30 minuti"
        }
      ],
      "programmi": [
        {
          "titolo": "Mezza giornata",
          "tappe": [
            "Arrivo all'apertura del parco",
            "Visita guidata di 2-3 ore",
            "Bagno in spiaggia",
            "Pranzo a Quepos e rientro"
          ]
        },
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: parco con guida",
            "Pomeriggio: spiaggia pubblica di Manuel Antonio",
            "Sera: tramonto sul mare"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Strada fra Quepos e il parco",
          "perChi": "vista e comodità",
          "testo": "Hotel con vista sulla costa, ma traffico di bus e taxi."
        },
        {
          "nome": "Quepos",
          "perChi": "budget",
          "testo": "Più economica, con ristoranti e mercato."
        }
      ],
      "sapori": [
        {
          "nome": "Casado di pesce",
          "testo": "Riso, fagioli e pesce del giorno."
        },
        {
          "nome": "Ceviche",
          "testo": "Pesce crudo marinato nel lime, nei ristoranti sul mare."
        },
        {
          "nome": "Frutta tropicale",
          "testo": "Ananas, papaya e banane, nei banchi vicino al parco."
        },
        {
          "nome": "Smoothie",
          "testo": "Con frutta fresca, nei chioschi di fronte all'ingresso."
        }
      ],
      "attenzioni": [
        "Il parco è chiuso il martedì; in caso di forti piogge il SINAC può chiuderlo anche in altri giorni.",
        "I biglietti si comprano solo online, sul sito del SINAC: all'ingresso non si vendono, e i siti che li rivendono con sovrapprezzo non sono ufficiali.",
        "Non dare cibo agli animali e tenere borse chiuse: scimmie e procioni rubano.",
        "Dal 30 aprile 2026 le multe per chi entra da accessi non ufficiali o in zone chiuse al pubblico sono alte: restare sui sentieri segnati.",
        "È uno dei parchi più affollati del paese: con tutta quella gente a tratti sembra uno zoo. Arrivare all'apertura aiuta."
      ],
    esperienzeSlugs: ['parco-manuel-antonio'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Un bradipo tra gli alberi del Parco Nazionale Manuel Antonio, Costa Rica',
    immagine: '/images/costa-rica/manuel-antonio-stock.jpg',
  },
]
