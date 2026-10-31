import type { Paese } from '@/lib/types'

// La Spagna entra nell'archivio non come una singola meta ma come quattro
// paesi diversi cuciti sotto un'unica bandiera: Canarie e Baleari sono due
// arcipelaghi separati, raggiungibili solo in aereo (o in traghetto tra loro),
// senza alcun nesso logico con la Spagna continentale o tra loro; il Sud
// (Andalusia) e il Nord (Paesi Baschi, Cantabria, Asturie, Galizia) sono
// entrambi sulla terraferma ma a 800-1.000 km di distanza e stilisticamente
// opposti — architettura moresca, flamenco e caldo torrido a sud, costa verde,
// cultura basca del cibo e clima fresco a nord. Per questo la scelta
// strutturale è la stessa già usata per l'Italia: un solo Paese, molti viaggi
// indipendenti, mai forzati in un unico itinerario.
//
// tripPrincipaleSlug punta a andalusia-itinerario: tra le quattro, l'Andalusia
// resta la "Spagna da cartolina" più riconoscibile a un pubblico italiano (Alhambra,
// Mezquita, flamenco) ed è quella con la più alta densità di patrimonio UNESCO
// per giorno di viaggio, quindi il viaggio-bandiera più naturale da mettere in
// vetrina nella pagina Paese — non perché sia "la Spagna vera" più delle altre tre.
//
// Rick ha fatto tutti e quattro i viaggi raccontati negli articoli
// (andalusia-itinerario, spagna-nord-itinerario, baleari-itinerario,
// canarie-itinerario): ogni destinazione spagnola è visitataPersonalmente:
// true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore.

export const spagna: Paese = {
  slug: 'spagna',
  nome: 'Spagna',
  continente: 'Europa',
  titolo: 'Spagna: quattro paesi in uno, dalle Canarie subtropicali al verde del Nord basco',
  descrizione:
    'In Spagna i viaggi sono quattro. Le Canarie, al largo dell\'Africa, con un clima mite tutto l\'anno. Le Baleari, l\'estate mediterranea fra Mallorca, Ibiza e Minorca. L\'Andalusia del sud, moresca e calda, col flamenco di Siviglia, Granada e Cordoba. Il Nord verde e piovoso di San Sebastián, Bilbao e della Galizia del Cammino di Santiago. Sono lontane fra loro e hanno climi opposti, quindi qui le tratto separate: una guida unica a destinazioni ed esperienze per tutte e quattro le regioni e quattro itinerari distinti, uno per regione, da non incastrare l\'uno nell\'altro.',
  periodoMigliore:
    'dipende dalla regione. Le Canarie hanno un clima mite tutto l\'anno (16-21°C anche a gennaio) e sono la meta spagnola giusta quando altrove è inverno. Le Baleari danno il meglio fra maggio-giugno e settembre; luglio e agosto sono affollati e cari. L\'Andalusia va evitata a luglio-agosto, quando Siviglia e Cordoba superano spesso i 40°C (il record spagnolo è di 47,6°C, a Córdoba nell\'agosto 2021): meglio la primavera o l\'autunno. Al Nord il caldo spagnolo non arriva quasi mai; il clima è fresco e piovoso tutto l\'anno e l\'estate (giugno-settembre) è il periodo più asciutto.',
  durataConsigliata:
    '7-10 giorni per ciascuna delle quattro regioni, come viaggi a sé. Metterle in un unico giro non ha senso: Canarie e Baleari sono arcipelaghi raggiungibili solo in aereo (o in traghetto fra loro) e Sud e Nord distano 800-1.000 km sulla terraferma.',
  budgetIndicativo:
    'cambia molto con regione e stagione. Le Baleari in alta stagione (luglio-agosto) hanno alcuni dei prezzi più alti d\'Europa per alloggi e voli. Le Canarie restano abbordabili anche quando altrove è bassa stagione. Andalusia e Nord sono nella media spagnola; l\'Andalusia costa meno del Nord basco, dove il costo della vita (soprattutto il cibo) è fra i più alti del paese.',
  stileViaggio: ['isole', 'cultura moresca', 'gastronomia', 'natura vulcanica', 'mare', 'cammino di santiago'],
  scheda: {
    documenti:
      'La Spagna è nell\'Unione Europea e nell\'area Schengen (Canarie e Baleari comprese): ai cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta: 'Euro, come in Italia, in tutte e quattro le regioni: nessun cambio da fare.',
    pagamenti:
      'Carte e contactless sono accettati quasi ovunque, anche nelle isole minori e nei piccoli bar da pintxos del Nord. Il contante serve ancora per mercati, bar di quartiere e mance.',
    connettivita:
      'Il roaming UE è incluso nelle normali tariffe italiane: la SIM locale non serve. La copertura 4G/5G è buona nelle città e sulle coste turistiche; cala nelle zone rurali dell\'entroterra andaluso, nei tratti più isolati del Cammino del Norte e in alcune valli interne delle Canarie (Anaga a Tenerife, l\'entroterra di Fuerteventura e La Gomera).',
    salute:
      'La tessera europea di assicurazione malattia (TEAM) vale ovunque, isole comprese. Nessuna vaccinazione richiesta. L\'acqua del rubinetto è potabile in tutto il paese, Canarie incluse, dove spesso è desalinizzata e ha un sapore un po\' diverso da quella continentale.',
    sicurezza:
      'Per gli standard europei la Spagna è un paese sicuro. Il rischio più diffuso, in tutte e quattro le regioni, sono i borseggi nelle zone turistiche affollate (vie pedonali del centro, spiagge, stazioni, autobus turistici): mai lasciare borse o zaini incustoditi, soprattutto ai tavolini all\'aperto di Siviglia, Granada, Palma o San Sebastián. A Ibiza e sulle Baleari in alta stagione vale la normale prudenza della vita notturna (drink incustoditi, gruppi numerosi). In Andalusia il problema pratico è il caldo estivo: a luglio-agosto, con Siviglia e Cordoba spesso sopra i 40°C, colpi di calore e disidratazione sono un rischio reale.',
    trasportiInterni:
      'Ogni regione ha la sua logistica. Sulla terraferma (Andalusia, Nord) l\'alta velocità AVE e le autostrade collegano bene le grandi città, ma per i borghi (pueblos blancos andalusi, costa basco-cantabrica) serve quasi sempre un\'auto a noleggio. Fra le isole delle Baleari ci si sposta in traghetto (Baleària, Trasmed, da 1 a oltre 4 ore secondo la tratta) o con un breve volo. Fra le isole delle Canarie il volo interno (Binter, Canaryfly) è quasi sempre più pratico del traghetto, viste le distanze e il mare aperto. Dentro un\'isola o una città bastano quasi sempre mezzi pubblici e taxi.',
    costoVita:
      'Per ristoranti e alloggi di fascia media costa meno dell\'Italia del Nord, con forti eccezioni stagionali: le Baleari a luglio-agosto sono fra le mete più care d\'Europa, mentre Canarie e Andalusia in bassa stagione restano convenienti tutto l\'anno.',
    lingua:
      'Spagnolo (castigliano) ovunque, accanto a lingue coufficiali regionali che contano molto per l\'identità locale: catalano/maiorchino alle Baleari, euskera (basco) nei Paesi Baschi e galiziano in Galizia. Il basco non è una lingua indoeuropea e non ha legami dimostrati con nessun\'altra lingua vivente. L\'inglese è diffuso nelle zone turistiche di tutte e quattro le regioni, meno nell\'entroterra andaluso e nei piccoli paesi del Cammino del Norte.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano quasi ovunque senza adattatore.',
    fusoOrario:
      'Attenzione: la Spagna continentale e le Baleari sono in UTC+1 (CET), come l\'Italia, mentre le Canarie sono in UTC+0 (WET), un\'ora indietro rispetto al resto della Spagna e all\'Italia tutto l\'anno, anche col cambio dell\'ora. Chi organizza voli o coincidenze fra le due zone spesso se ne accorge tardi.',
    clima:
      'Quattro climi diversi, ed è soprattutto per questo che il Paese è diviso in quattro viaggi: subtropicale mite alle Canarie tutto l\'anno; mediterraneo classico, caldo e secco d\'estate, alle Baleari; mediterraneo continentale con estati torride in Andalusia; oceanico, fresco e piovoso, più vicino all\'Irlanda che al resto della Spagna, nel Nord.',
    festivita:
      'La Settimana Santa (Semana Santa) è l\'evento religioso e turistico più sentito, soprattutto a Siviglia: le processioni bloccano il centro storico per una settimana e gli alloggi si prenotano mesi prima. La Feria de Abril di Siviglia (due settimane dopo Pasqua) è l\'altro grande appuntamento andaluso. San Fermín a Pamplona (6-14 luglio) è fuori dalle quattro regioni di questa guida, ma in quei giorni fa salire i prezzi dei voli su tutto il Nord. Il Cammino di Santiago ha il picco attorno al 25 luglio, festa di San Giacomo, soprattutto negli anni santi (Xacobeo).',
    emergenze: 'Numero unico europeo 112, attivo su tutto il territorio, isole incluse. Ambasciata d\'Italia a Madrid, consolato a Barcellona e consolati onorari in diverse città, anche alle Canarie e alle Baleari.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImage: '/images/spagna/spagna-paese.jpg',
  heroImageAlt: 'La Plaza de España di Siviglia con il canale, i ponti e il palazzo a emiciclo in mattoni',
  tripPrincipaleSlug: 'andalusia-itinerario',
}
