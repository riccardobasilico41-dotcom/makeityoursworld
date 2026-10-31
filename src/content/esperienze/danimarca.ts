import type { Esperienza } from '@/lib/types'

// Prima uscita danese dell'archivio: è un viaggio fatto da Rick. giudizio
// resta 'da-verificare' finché non arriva la sua valutazione e il campo
// miaEsperienza resta assente finché non arriva un ricordo dell'autore (vedi
// il commento in src/content/destinazioni/danimarca.ts). Prezzi e orari
// cambiano spesso, specialmente quelli di Tivoli (aperto a stagioni alterne) e
// vanno riverificati sui canali ufficiali prima di prenotare.

export const esperienzeDanimarca: Esperienza[] = [
  {
    slug: 'nyhavn-giro-in-barca',
    paeseSlug: 'danimarca',
    destinazioneSlug: 'copenaghen',
    nome: 'Giro in barca sui canali da Nyhavn',
    localita: 'Nyhavn, Copenaghen',
    cosE:
      'Un giro in battello (aperto o coperto secondo la stagione) che parte dal molo colorato di Nyhavn e attraversa i canali del centro storico e del porto: il quartiere di Christianshavn, l\'Opera House, la Biblioteca Reale («Diamante Nero») e, secondo il percorso, un passaggio vicino alla Sirenetta, vista dall\'acqua.',
    percheFarla:
      'Copenaghen è costruita intorno all\'acqua, e dal canale gran parte del centro storico appare diversa: in poco più di un\'ora, senza camminare.',
    durata: 'circa 1 ora per il giro classico dei canali',
    periodo: 'tutto l\'anno, con partenze più frequenti in alta stagione (maggio-settembre)',
    costo: 'indicativamente 15-20€ a persona per il giro standard di un\'ora',
    comePrenotare: 'Il biglietto si compra al molo di Nyhavn oppure online in anticipo nei mesi di punta, quando le partenze si riempiono in fretta',
    cosaPortare: 'Una giacca anche d\'estate: sull\'acqua il vento si sente più che a terra, specie sulle barche scoperte',
    perChiEAdatta: 'Chiunque, senza difficoltà; secondo l\'imbarcazione, comoda anche con bambini o per chi ha mobilità ridotta',
    giudizio: 'da-verificare',
    alternative: ['Gli stessi canali in kayak a noleggio, più lento ma più attivo, per chi non vuole stare solo seduto'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Un motoscafo turistico che naviga nel canale di Nyhavn tra velieri ormeggiati e le case colorate, Copenaghen',
    immagine: '/images/danimarca/nyhavn-giro-in-barca.jpg',
  },
  {
    slug: 'copenaghen-tour-in-bicicletta',
    paeseSlug: 'danimarca',
    destinazioneSlug: 'copenaghen',
    nome: 'Tour in bicicletta di Copenaghen',
    localita: 'Copenaghen, centro e lungomare',
    cosE:
      'Un giro in bici a noleggio, con guida o da soli, sulle piste ciclabili del centro e del lungomare, spesso passando da Nyhavn, dal quartiere del porto, dalla Sirenetta e da Christianshavn. È il modo in cui si sposta ogni giorno la maggior parte degli abitanti di Copenaghen.',
    percheFarla:
      'La bici è il modo migliore per capire Copenaghen: la città è stata ridisegnata intorno alle due ruote, con piste separate, semafori dedicati e una rete così estesa che quasi nessun\'altra capitale europea ha qualcosa di simile.',
    durata: 'da 2-3 ore per un tour guidato classico a una giornata intera in autonomia',
    periodo: 'tutto l\'anno per chi è abituato al freddo; più comodo e diffuso da aprile a ottobre',
    costo: 'noleggio bici standard indicativamente 15-25€ al giorno; i tour guidati partono da circa 30-40€ a persona per 2-3 ore',
    comePrenotare: 'Si noleggia alle stazioni del bike-sharing cittadino o nei negozi di noleggio del centro; i tour guidati si prenotano online, in alta stagione meglio qualche giorno prima',
    cosaPortare: 'Scarpe comode e un antivento leggero; il casco si può noleggiare, ma in Danimarca per gli adulti non è obbligatorio',
    perChiEAdatta: 'A chi va già un minimo in bici in città: le piste sono sicure ma trafficate, e le precedenze vanno rispettate come su una strada vera',
    giudizio: 'da-verificare',
    alternative: ['Il bike-sharing cittadino Bycyklen, self-service, per chi preferisce muoversi da solo senza prenotare un tour'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Ciclisti su un\'ampia pista ciclabile separata dalla strada nel centro di Copenaghen, tra palazzi storici',
    immagine: '/images/danimarca/copenaghen-tour-in-bicicletta.jpg',
  },
  {
    slug: 'christiania-visita',
    paeseSlug: 'danimarca',
    destinazioneSlug: 'copenaghen',
    nome: 'Visita a Christiania',
    localita: 'Christianshavn, Copenaghen',
    cosE:
      'La visita, da soli o con un tour guidato dai residenti, della «città libera» di Christiania: un\'ex area militare occupata nel 1971 e diventata una comunità autogestita di circa 900 persone, con case autocostruite, murales, orti comuni e un\'economia informale propria. L\'ingresso è libero e gratuito; solo alcuni tour guidati si pagano.',
    percheFarla:
      'È un pezzo di storia sociale europea senza paragoni, ancora vivo dopo più di cinquant\'anni. Per rispettarla bisogna conoscerne le regole prima di entrare, invece di girarla come un\'attrazione.',
    durata: 'da 1 a 2-3 ore secondo quanto ci si ferma; i tour guidati durano circa 1-1,5 ore',
    periodo: 'tutto l\'anno, perché è un\'area residenziale aperta',
    costo: 'ingresso libero; i tour guidati con residenti costano indicativamente 10-15€ a persona',
    comePrenotare: 'Ingresso libero senza prenotazione; i tour guidati ufficiali (organizzati da residenti) si prenotano online sul sito di Christiania',
    cosaPortare: 'Niente di particolare; conviene conoscere già le regole scritte all\'ingresso («have fun, don\'t run, no hard drugs, no guns, no violence»)',
    perChiEAdatta: 'Adatta ai curiosi che rispettano le regole del posto; meno a chi cerca un\'attrazione turistica classica: qui si è ospiti in un quartiere abitato',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Un edificio in mattoni decorato con murales colorati e una foglia di cannabis dipinta, con biciclette parcheggiate davanti, a Christiania, Copenaghen',
    immagine: '/images/danimarca/christiania-visita.jpg',
  },
  {
    slug: 'smorrebrod-tour-torvehallerne',
    paeseSlug: 'danimarca',
    destinazioneSlug: 'copenaghen',
    nome: 'Smørrebrød a Torvehallerne',
    localita: 'Torvehallerne, mercato coperto vicino a Nørreport, Copenaghen',
    cosE:
      'L\'assaggio dello smørrebrød, il tradizionale panino aperto danese su pane di segale scuro (rugbrød), con farciture classiche come aringa marinata, gamberetti nordici, roast beef con remoulade o formaggio con marmellata di fichi, ai banchi specializzati di Torvehallerne, il mercato coperto della città.',
    percheFarla:
      'Lo smørrebrød è il piatto simbolo della cucina danese di tutti i giorni, e a Torvehallerne se ne assaggiano diverse versioni nello stesso posto, confrontando i banchi invece di scegliere alla cieca in un ristorante turistico.',
    durata: 'un\'ora o poco più per un giro tra i banchi',
    periodo: 'tutto l\'anno, mercato al coperto',
    costo: 'indicativamente 8-15€ per pezzo secondo la farcitura, un pranzo completo con 2-3 varietà sui 20-30€ a persona',
    comePrenotare: 'Non serve prenotare, si ordina al banco',
    cosaPortare: 'Niente di particolare',
    perChiEAdatta: 'Chiunque cerchi un pranzo tipico senza il formalismo (e il conto) di un ristorante di smørrebrød storico',
    giudizio: 'da-verificare',
    alternative: ['Un ristorante storico di smørrebrød nel centro, più formale e più caro, per chi vuole l\'esperienza al tavolo invece che al banco'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'I banchi gastronomici allineati sotto la copertura in vetro e acciaio del mercato coperto di Torvehallerne a Copenaghen',
    immagine: '/images/danimarca/smorrebrod-tour-torvehallerne.jpg',
  },
]
