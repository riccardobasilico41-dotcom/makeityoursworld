import type { Destinazione } from '@/lib/types'

// Terza e ultima tappa dell'itinerario "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts), viaggio fatto da Rick. Stesso trattamento
// delle destinazioni lituane e lettoni: visitataPersonalmente true, miaEsperienza resta assente finché non arriva un ricordo dell'autore.
// A differenza di Vilnius e Riga, qui non c'è una seconda destinazione
// satellite paragonabile a Trakai o Jūrmala: Toompea, Kadriorg e Telliskivi
// sono quartieri di Tallinn stessa, non luoghi separati, e restano dentro il
// cosaVedere/cosaFare dell'unica destinazione estone.

export const destinazioniEstonia: Destinazione[] = [
  {
    slug: 'tallinn',
    paeseSlug: 'estonia',
    ordine: 1,
    nome: 'Tallinn',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale dell\'Estonia è la più settentrionale delle tre capitali baltiche e si affaccia sul Golfo di Finlandia. La Città Vecchia, patrimonio UNESCO dal 1997, è uno dei centri medievali meglio conservati del nord Europa: in alto la Toompea, la collina fortificata dove risiedeva il potere, in basso la città dei mercanti anseatici. Fuori dalle mura, il parco barocco di Kadriorg e l\'ex complesso industriale di Telliskivi raccontano due Estonie diverse, quella zarista e quella più recente, digitale e creativa.',
    percheAndarci:
      'Il centro storico è autentico: mura, torri e la piazza con il municipio gotico sono arrivate fino a oggi quasi intatte. E appena fuori da quelle mura Tallinn cambia faccia, con un parco imperiale russo da una parte e un distretto creativo nato in una fabbrica sovietica dall\'altra.',
    cosaVedere: [
      'La Piazza del Municipio (Raekoja plats), con il Municipio di Tallinn, del 1404, ancora in uso',
      'La collina di Toompea, con il Castello di Toompea (oggi sede del parlamento estone, il Riigikogu) e la Cattedrale ortodossa di Alexander Nevsky, con le cupole a cipolla dorate',
      'Le piattaforme panoramiche di Kohtuotsa e Patkuli su Toompea, le due viste classiche sulla città bassa, sul porto e sul Golfo di Finlandia',
      'Le mura cittadine medievali, con un lungo tratto ancora in piedi e le torri superstiti, fra cui la Kiek in de Kök, la grande torre d\'artiglieria',
      'La Chiesa di Sant\'Olaf (Oleviste kirik), gotica, con la sua alta guglia che domina la città bassa',
      'Il Parco di Kadriorg, con il Palazzo di Kadriorg, fatto costruire nel 1718 da Pietro il Grande per la moglie Caterina I su progetto dell\'architetto italiano Niccolò Michetti, oggi sede del museo d\'arte straniera; a pochi passi il KUMU, il museo d\'arte estone in un edificio contemporaneo',
      'Telliskivi Creative City, l\'ex complesso industriale e ferroviario di epoca sovietica diventato un quartiere creativo, con street art, studi di design, negozi indipendenti e locali',
    ],
    cosaFare: [
      'Salire su Toompea fino alle piattaforme di Kohtuotsa e Patkuli per il panorama sulla città bassa',
      'Camminare lungo il tratto di mura ancora percorribile e salire su una delle torri aperte al pubblico',
      'Girare tra i musei e i viali del Parco di Kadriorg, con una sosta al KUMU se c\'è tempo per una visita più lunga',
      'Passare un pomeriggio tra i negozi indipendenti, i murales e i locali di Telliskivi Creative City',
    ],
    doveDormire:
      'Nella Città Vecchia, per avere tutto a piedi: la parte bassa intorno a Piazza del Municipio è la più centrale, Toompea la più tranquilla e panoramica. Il quartiere di Kalamaja, fra la Città Vecchia e Telliskivi, è un\'alternativa più residenziale, dall\'aria più locale.',
    doveMangiare:
      'La verivorst (sanguinaccio) con mirtilli rossi è un piatto tradizionale, soprattutto a Natale; il kiluvõileib, un tramezzino aperto con spratti marinati, burro e uovo sodo, è lo spuntino estone per eccellenza. A Telliskivi c\'è la scena gastronomica più giovane della città, fra street food, birrifici artigianali e mercati alimentari nei fine settimana.',
    comeArrivare:
      'L\'aeroporto di Tallinn-Lennart Meri (TLL) è vicino al centro: tram, oppure taxi o app di trasporto. Da alcuni aeroporti italiani ci sono voli diretti low-cost, stagionali o tutto l\'anno; altrimenti si fa scalo su un hub europeo. Da Riga: bus diretti, con più compagnie e diverse corse al giorno. Da Helsinki: traghetti regolari, un\'estensione classica per chi ha qualche giorno in più.',
    comeSpostarsi:
      'Il centro storico si gira tutto a piedi. I mezzi pubblici collegano il centro a Kadriorg e Telliskivi, con biglietti economici da comprare in app o alle biglietterie.',
    periodoMigliore:
      'maggio-settembre, per il clima più mite e le giornate lunghissime vicino al solstizio; giugno-agosto è la stagione più affollata nella Città Vecchia. L\'inverno (novembre-marzo) è freddo e buio, ma la neve sui tetti medievali e i mercatini di Natale in Piazza del Municipio hanno il loro fascino.',
    costi: 'un po\' più cara di Vilnius e Riga: prezzi di torri e musei aggiornati sui siti ufficiali.',
    erroriDaEvitare: [
      'Fermarsi alla Città Vecchia: Kadriorg e Telliskivi mostrano la Tallinn zarista e quella contemporanea, che il centro medievale da solo non racconta',
      'Salire su Toompea e saltare le due piattaforme panoramiche (Kohtuotsa e Patkuli): sono a pochi passi l\'una dall\'altra e guardano la città bassa da angolazioni diverse',
      'Dare per scontato che l\'estone somigli al lituano o al lettone: è una lingua ugrofinnica, imparentata con il finlandese e del tutto estranea alla famiglia baltica delle altre due capitali',
      'Andare a Telliskivi senza controllare gli orari: locali e negozi indipendenti non aprono tutti allo stesso modo ogni giorno',
    ],
    luoghi: [
      {
        nome: "Piazza del Municipio (Raekoja plats)",
        testo: "Il cuore medievale della città, con il Municipio gotico finito nel 1404, il più antico della regione del Mar Baltico e della Scandinavia, oggi museo e sala concerti. In estate ha tavoli all'aperto; a dicembre ospita il mercatino di Natale.",
        come: "A piedi dal porto.",
        quando: "Mattina presto, per la piazza senza folla; orari di visita del Municipio e della sua torre sul sito ufficiale.",
        tempo: "1 ora",
        url: "https://www.tallinn.ee",
        consiglio: "Controllare le giornate di crociere: la piazza si riempie di gruppi."
      },
      {
        nome: "Toompea e Cattedrale Alexander Nevsky",
        testo: "Il colle sopra la città bassa, con il Castello di Toompea (sede del Parlamento) e la Cattedrale ortodossa Alexander Nevsky, costruita a fine Ottocento, con le cupole a cipolla. La salita è corta ma panoramica.",
        come: "A piedi dalla Piazza del Municipio, salendo da Pikk jalg.",
        quando: "Mattina.",
        tempo: "1,5 ore",
        consiglio: "Per le foto della città dall'alto, le piattaforme di Kohtuotsa e Patkuli."
      },
      {
        nome: "Piattaforme panoramiche di Kohtuotsa e Patkuli",
        testo: "Due terrazze su Toompea con le viste classiche sulla città bassa, sul porto e sul Golfo di Finlandia, con i tetti rossi e le guglie.",
        come: "A piedi dalla cattedrale.",
        quando: "Tramonto, per la luce sui tetti.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Kohtuotsa è spesso affollata, Patkuli di solito più tranquilla."
      },
      {
        nome: "Mura e torri medievali",
        testo: "Un lungo tratto di mura ancora in piedi, con molte torri medievali, tra cui la Kiek in de Kök, torre d'artiglieria del Quattrocento, il cui nome in basso tedesco significa «sbircia in cucina». Si visitano anche la Torre della Fanciulla, la torre della porta di Lühike jalg e i passaggi sotterranei dei bastioni.",
        come: "A piedi, lungo Müürivahe.",
        quando: "Giorno, con buone condizioni.",
        tempo: "1-2 ore",
        costo: "Kiek in de Kök 16 €, passaggi dei bastioni 10 € (2026); da ottobre ad aprile chiuso il lunedì, aperto 11-18",
        url: "https://www.linnamuuseum.ee",
        consiglio: "Unire Kiek in de Kök e i passaggi dei bastioni nella stessa visita."
      },
      {
        nome: "Chiesa di Sant'Olaf (Oleviste kirik)",
        testo: "Chiesa gotica con la guglia alta circa 124 metri, la chiesa più alta dell'Estonia. Nella torre c'è una piattaforma panoramica a 60 metri.",
        come: "A piedi, in fondo alla Piazza del Municipio.",
        quando: "Giorno sereno.",
        tempo: "45 minuti",
        url: "https://www.oleviste.ee",
        consiglio: "Salire sulla torre per la vista sul porto."
      },
      {
        nome: "Parco e Palazzo di Kadriorg, KUMU",
        testo: "Il Palazzo, voluto da Pietro il Grande nel 1718 per la moglie Caterina I, con il parco e il Kumu, il museo d'arte estone, in un edificio moderno nello stesso parco.",
        come: "Tram 1 o 3 fino al capolinea Kadriorg, oppure a piedi dal centro.",
        quando: "Pomeriggio; il parco è libero. Il Kumu è chiuso il lunedì; aperto 10-18, il giovedì fino alle 20.",
        tempo: "3 ore",
        costo: "Kumu 16 € intero, 11 € ridotto, 32 € famiglia (2026)",
        url: "https://kumu.ekm.ee",
        consiglio: "Il parco è un bel posto per passeggiare fuori dal centro."
      },
      {
        nome: "Telliskivi Creative City",
        testo: "Le ex officine dove si riparavano le locomotive, oggi quartiere creativo con street art, studi, negozi indipendenti e ristoranti.",
        come: "A piedi dalla Città Vecchia o con i mezzi pubblici.",
        quando: "Sera, per i locali; il sabato per i negozi.",
        tempo: "2 ore",
        costo: "ingresso libero",
        consiglio: "Qui si mangia molto bene a prezzi ragionevoli."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Piazza del Municipio",
          "Toompea e Cattedrale Nevsky",
          "Mura e torri",
          "Pranzo in un ristorante medievale",
          "Sera: Telliskivi"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Kadriorg e KUMU",
          "Chiesa di Sant'Olaf",
          "Sera in Città Vecchia"
        ]
      }
    ],
    zone: [
      {
        nome: "Città Vecchia (Vanalinn)",
        perChi: "Chi vuole stare a piedi tra le attrazioni",
        testo: "Vie di ciottoli e atmosfera, ma prezzi alti e rumore la sera."
      },
      {
        nome: "Kalamaja",
        perChi: "Chi cerca un quartiere di caffè e case di legno",
        testo: "Vicino a Telliskivi e al porto, a breve distanza dal centro."
      },
      {
        nome: "Kesklinn",
        perChi: "Chi vuole comodità e centri commerciali",
        testo: "Moderno, a pochi minuti dalla Città Vecchia."
      }
    ],
    sapori: [
      {
        nome: "Leib (pane nero)",
        testo: "Pane di segale scuro, base della cucina estone."
      },
      {
        nome: "Kama",
        testo: "Farina di cereali tostati con kefir, un dessert tipico."
      },
      {
        nome: "Verivorst",
        testo: "Sanguinaccio con orzo, tipico di Natale."
      },
      {
        nome: "Marzapane",
        testo: "Marzapane estone, nella pasticceria Maiasmokk, caffetteria storica della città."
      }
    ],
    attenzioni: [
      "I ristoranti in costume medievale sono cari e turistici: confrontare con quelli di Telliskivi.",
      "Taxi: usare un'app riconosciuta, e non quelli vicino al porto delle crociere.",
      "Nei giorni di crociere la Città Vecchia è affollatissima: andare presto.",
      "D'inverno il ghiaccio rende pericolosi i ciottoli: scarpe adatte."
    ],
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Le case medievali color pastello con i tetti a punta sul lato est della Piazza del Municipio di Tallinn, con i tavolini dei caffè all\'aperto',
    immagine: '/images/estonia/tallinn.jpg',
  },
]
