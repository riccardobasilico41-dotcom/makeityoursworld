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
      'È la capitale della Lettonia e la più grande delle tre capitali baltiche. Il centro storico medievale, patrimonio UNESCO dal 1997, si affaccia sul fiume Daugava con le guglie delle chiese anseatiche e la Casa delle Teste Nere. Appena fuori dalle mura, il quartiere costruito tra Otto e Novecento ha una delle densità di architettura Art Nouveau più alte al mondo. Poco più in là il Mercato Centrale, ricavato da cinque ex hangar per dirigibili, è ancora il più grande bazar coperto d\'Europa.',
    percheAndarci:
      'In uno spazio piccolo ci sono un centro medievale vero, un intero quartiere Art Nouveau da guardare con il naso all\'insù e un mercato che è un monumento industriale dove si fa ancora la spesa ogni giorno. Da qui parte poi la gita più classica della costa lettone, la spiaggia di Jūrmala.',
    cosaVedere: [
      'La Piazza del Duomo (Doma laukums) con la Cattedrale di Riga (Rīgas Doms), la chiesa più grande del Baltico, e il suo storico organo',
      'La Chiesa di San Pietro, con la piattaforma panoramica sulla guglia a 72 metri: è la vista più alta sulla Città Vecchia e sul fiume Daugava',
      'La Casa delle Teste Nere (Melngalvju nams), la facciata rinascimentale più fotografata della piazza del municipio, ricostruita dopo la distruzione della guerra',
      'Le Tre Sorelle (Trīs brāļi), tre case medievali e barocche in fila su via Mazā Pils, tra gli edifici in pietra più antichi della città',
      'Il quartiere Art Nouveau, lungo Alberta iela, Elizabetes iela e Strēlnieku iela: centinaia di facciate decorate con maschere, volti scolpiti e motivi floreali, molte dell\'architetto Mihails Eizenšteins, padre del regista Sergej Ėjzenštejn',
      'Il Mercato Centrale (Centrāltirgus): cinque padiglioni ricavati da hangar per dirigibili tedeschi della Prima guerra mondiale, aperto nel 1930, quando era il più grande e moderno d\'Europa. Fa parte del sito UNESCO insieme alla Città Vecchia',
    ],
    cosaFare: [
      'Salire sulla torre della Chiesa di San Pietro per il panorama sulla Città Vecchia e sul Daugava',
      'Camminare lungo Alberta iela con il naso all\'insù, cercando le facciate più elaborate del quartiere Art Nouveau',
      'Girare tra i banchi del Mercato Centrale, nei padiglioni di pesce, carne, latticini e verdura, fermandosi ad assaggiare le specialità locali',
      'Passare una serata tra bar e ristoranti della Città Vecchia, con una sosta al Bar Skyline o su un altro rooftop per la vista sui tetti',
    ],
    doveDormire:
      'Nella Città Vecchia (Vecrīga) si ha tutto a piedi, vita notturna compresa. Il quartiere Art Nouveau, appena fuori dalle mura verso nord, è più tranquillo e altrettanto centrale, e lì si può dormire dentro un palazzo liberty.',
    doveMangiare:
      'Il piatto invernale più identitario è il pelēkie zirņi ar speķi, piselli grigi con pancetta. Il rupjmaize, il pane di segale nero, sta alla base di molta cucina lettone, compreso il rupjmaizes kārtojums, un dolce a strati con panna e frutti di bosco. Per assaggiare i prodotti locali, dal formaggio affumicato al pesce del Baltico, i banchi del Mercato Centrale sono il modo più economico e genuino.',
    comeArrivare:
      'L\'Aeroporto Internazionale di Riga (RIX), il principale scalo del Baltico, è a circa 10 km dal centro: bus o tram in 20-30 minuti, oppure taxi o Bolt in pochi minuti. Da alcuni aeroporti italiani ci sono voli diretti low cost, stagionali o tutto l\'anno; altrimenti si fa scalo in un hub europeo. Da Vilnius si arriva in bus in circa 4 ore, con più compagnie (tra cui Lux Express) e molte corse al giorno.',
    comeSpostarsi:
      'Il centro storico si gira tutto a piedi. Tram, filobus e bus della rete Rīgas satiksme coprono il resto della città, con biglietti a tempo economici. Per Jūrmala c\'è il treno regionale dalla stazione centrale, circa 30 minuti, con partenze almeno ogni mezz\'ora.',
    periodoMigliore:
      'maggio-settembre, per il clima mite e, in piena estate, la possibilità di unire la città a un bagno a Jūrmala. Giugno-agosto è la stagione più affollata. L\'inverno (novembre-marzo) è freddo e spesso ventoso, ma la Città Vecchia regge bene e a dicembre c\'è il mercatino di Natale in Piazza del Duomo.',
    costi: 'città economica per gli standard dell\'Europa occidentale: ingresso alla torre di San Pietro 9€, cena normale 10-16€ a testa, treno per Jūrmala circa 2€ a tratta.',
    erroriDaEvitare: [
      'Fermarsi alla Città Vecchia: il quartiere Art Nouveau appena fuori dalle mura è una parte centrale dell\'architettura di Riga quanto il centro medievale',
      'Andare al Mercato Centrale nel weekend dopo pranzo: i banchi migliori si svuotano presto, e il mattino, con i venditori locali, è il momento più autentico',
      'Programmare Jūrmala senza guardare il meteo: è una gita al mare e ha senso soprattutto da giugno ad agosto',
      'Pensare che il russo non serva: lo parla ancora la consistente minoranza russofona della città, e in certe situazioni quotidiane fuori dal centro turistico è più utile dell\'inglese',
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
      'La città balneare storica della Lettonia: circa 32 km di sabbia bianca finissima sul Golfo di Riga, a 20 km e mezz\'ora di treno dalla capitale. Dagli anni degli zar fino all\'epoca sovietica, quando ci andava in villeggiatura l\'élite dell\'URSS, a Jūrmala sono sorte centinaia di ville di legno Art Nouveau e Art Déco. Molte oggi sono restaurate e fanno da case private, hotel o piccoli musei.',
    percheAndarci:
      'È la spiaggia più facile da raggiungere partendo da una capitale di questo itinerario. Dietro la sabbia, poi, le vie residenziali piene di ville di legno decorate sono un museo diffuso di architettura balneare con più di un secolo di storia lettone.',
    cosaVedere: [
      'La spiaggia di sabbia bianca, continua per circa 32 km, tra le più larghe e pulite del Baltico',
      'Jomas iela, la via pedonale di Majori, il centro della cittadina, con negozi, caffè e gelaterie',
      'Le ville di legno Art Nouveau e Art Déco nelle vie residenziali di Majori e Dzintari, molte con intagli fatti a mano e verande vetrate',
      'La Dzintari Concert Hall, la sala da concerti all\'aperto tra i pini, sede storica di festival ed eventi estivi',
    ],
    cosaFare: [
      'Camminare a lungo sulla spiaggia, dalla stazione di Majori verso Dzintari o Bulduri',
      'Girare tra le vie residenziali dietro Jomas iela e guardare da fuori le ville di legno decorate',
      'Fermarsi in uno dei caffè o ristoranti sul lungomare, aperti tutto l\'anno e più animati in estate',
    ],
    doveDormire: 'In questo itinerario Jūrmala si visita in mezza giornata da Riga, senza dormirci. Chi vuole restare qualche giorno al mare può aggiungerla come estensione.',
    doveMangiare: 'Lungo Jomas iela ristoranti e caffè fanno cucina lettone e internazionale; in estate diversi chioschi sulla spiaggia servono pesce alla griglia e gelato.',
    comeArrivare: 'Da Riga con il treno regionale dalla stazione centrale (Rīga Centrālā stacija) fino a Majori: circa 30 minuti, con partenze almeno ogni mezz\'ora.',
    comeSpostarsi: 'Il centro di Majori e la spiaggia si girano a piedi. Per Dzintari o le zone più lontane si può riprendere lo stesso treno regionale, che ferma in più punti lungo la costa.',
    periodoMigliore: 'giugno-agosto per fare il bagno. Nelle mezze stagioni la passeggiata sulla spiaggia e tra le ville di legno resta piacevole, con meno gente.',
    costi: 'gita economica: treno circa 2€ a tratta, spiaggia gratuita, pasto in un caffè del lungomare 8-15€.',
    erroriDaEvitare: [
      'Andarci fuori stagione aspettandosi la vita balneare dell\'estate: da ottobre a maggio la spiaggia è quasi deserta e molti locali chiudono',
      'Restare solo in spiaggia senza girare per le vie residenziali: sono le ville di legno decorate a rendere Jūrmala diversa da "un\'altra spiaggia"',
      'Sottovalutare l\'acqua bassa e fresca del Golfo di Riga, molto diversa da un bagno nel Mediterraneo',
    ],
    esperienzeSlugs: ['jurmala-spiaggia-ville-liberty'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Una villa di legno con verande vetrate e decorazioni intagliate tra gli alberi di Jūrmala',
    immagine: '/images/lettonia/jurmala.jpg',
  },
]
