import type { Esperienza } from '@/lib/types'

// Esperienze collegate a "Svizzera in van" (src/content/viaggi/52-svizzera-alpi-van.md),
// viaggio fatto da Rick. giudizio resta 'da-verificare' finché non arriva la sua valutazione
// e il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Prezzi e orari stagionali vanno riverificati prima di
// partire.

export const esperienzeSvizzera: Esperienza[] = [
  {
    slug: 'jungfraujoch-top-of-europe',
    paeseSlug: 'svizzera',
    destinazioneSlug: 'jungfraujoch',
    nome: 'Il treno per il Jungfraujoch, Top of Europe',
    localita: 'Jungfraujoch',
    cosE:
      'Il treno a cremagliera che sale dentro la montagna fino alla stazione ferroviaria più alta d\'Europa, a 3.454 metri, affacciata sul ghiacciaio dell\'Aletsch, il più lungo delle Alpi.',
    percheFarla:
      'È un\'opera di ingegneria costruita fra il 1896 e il 1912 che in Europa resta unica, e il ghiacciaio dell\'Aletsch visto da lassù non ha equivalenti nel resto della guida. Il prezzo però è quello del biglietto più caro del viaggio.',
    durata: 'giornata intera contando i trasferimenti da Interlaken',
    periodo: 'tutto l\'anno, con orari e frequenze diversi fra alta e bassa stagione; di solito le mattine sono più serene',
    costo: 'circa 224-261 CHF A/R da Interlaken Ost secondo la stagione (prezzo indicativo, viene aggiornato spesso)',
    comePrenotare: 'online sul sito ufficiale delle Jungfrau Railways; nei weekend di alta stagione conviene farlo',
    cosaPortare: 'giacca a vento e strati anche in piena estate: in quota fa freddo qualunque sia la stagione a valle',
    perChiEAdatta: 'chiunque, senza bisogno di allenamento: tutto il dislivello lo fa il treno',
    giudizio: 'da-verificare',
    alternative: ['Schilthorn (più economico, panorama a 360° invece del ghiacciaio)', 'First con il Bachalpsee (molto più economico, richiede una camminata)'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Un treno a cremagliera rosso e giallo della Jungfraubahn fermo in stazione, sotto le pareti innevate dell\'Eiger',
    immagine: '/images/svizzera/jungfraujoch-top-of-europe.jpg',
  },
  {
    slug: 'via-ferrata-muerren-gimmelwald',
    paeseSlug: 'svizzera',
    destinazioneSlug: 'muerren-schilthorn',
    nome: 'Via ferrata Mürren-Gimmelwald',
    localita: 'Mürren',
    cosE:
      'Un percorso attrezzato di circa 2,2 km che, cosa insolita, va in discesa: scende lungo le pareti della valle di Lauterbrunnen da Mürren al vicino villaggio di Gimmelwald. Il tratto più forte è un ponte sospeso di 90 metri sopra la cascata del Mürrenbach.',
    percheFarla:
      'È l\'unica via ferrata di questa guida e uno dei pochi percorsi attrezzati delle Alpi pensati per la discesa: l\'esposizione si fa ricordare, e non c\'è dislivello da salire.',
    durata: '2-3 ore',
    periodo: 'da giugno a fine ottobre',
    costo: 'gratuita come percorso; noleggio kit da ferrata sul posto a pagamento',
    comePrenotare: 'nessuna prenotazione necessaria per il percorso; guida alpina consigliata per chi non ha esperienza',
    cosaPortare: 'kit da ferrata omologato con dissipatore, casco, scarpe da montagna',
    perChiEAdatta: 'escursionisti con esperienza di via ferrata; difficoltà K3-K4 sulla scala Hüsler, media-alta',
    giudizio: 'da-verificare',
    alternative: ['Sentiero normale Mürren-Gimmelwald a piedi, senza attrezzatura da ferrata'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Le pareti a strapiombo e le cime dell\'Oberland bernese tra le nuvole, viste dal bordo della rupe di Mürren',
    immagine: '/images/svizzera/via-ferrata-muerren-gimmelwald.jpg',
  },
  {
    slug: 'giro-battello-laghi-thun-brienz',
    paeseSlug: 'svizzera',
    destinazioneSlug: 'interlaken',
    nome: 'Giro in battello sui laghi di Thun e Brienz',
    localita: 'Interlaken',
    cosE:
      'Una traversata in battello su uno o su entrambi i laghi turchesi e lattiginosi che danno il nome a Interlaken, con fermate nei villaggi della riva come Iseltwald e Oberhofen. Su alcune tratte navigano ancora battelli storici a vapore.',
    percheFarla:
      'È il modo più rilassante di vedere le Alpi Bernesi dal basso, senza dislivello, e costa molto meno di qualunque funivia di questa guida.',
    durata: 'da 1 a 3 ore secondo la tratta scelta',
    periodo: 'da primavera ad autunno, con servizio ridotto fuori stagione',
    costo: 'circa 20-30 CHF a tratta singola; l\'abbonamento giornaliero per entrambi i laghi più treni e bus locali costa 83 CHF in seconda classe (prezzi indicativi, vengono aggiornati spesso)',
    comePrenotare: 'biglietti a bordo o alle biglietterie degli imbarcaderi, senza bisogno di prenotare',
    cosaPortare: 'una giacca: sul lago il vento rinfresca anche nelle giornate calde',
    perChiEAdatta: 'chiunque, bambini e anziani compresi: niente dislivello e niente sforzo fisico',
    giudizio: 'da-verificare',
    alternative: ['Passeggiata a piedi lungo l\'Höheweg di Interlaken, gratuita ma senza la prospettiva dal lago'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Un battello di linea che naviga sulle acque turchesi del Lago di Brienz, con le montagne innevate sullo sfondo',
    immagine: '/images/svizzera/giro-battello-laghi-thun-brienz.jpg',
  },
  {
    slug: 'trummelbachfalle',
    paeseSlug: 'svizzera',
    destinazioneSlug: 'lauterbrunnen',
    nome: 'Trümmelbachfälle',
    localita: 'Lauterbrunnen',
    cosE:
      'Dieci cascate glaciali che si vedono da gallerie e ascensori scavati nella roccia della montagna. È l\'unico posto al mondo dove si osserva da vicino tutto il disgelo del massiccio della Jungfrau che si incanala in una sola gola.',
    percheFarla:
      'Interessa più il geologo che il fotografo, è diversa da tutte le altre cascate della guida e costa poco rispetto alle altre attrazioni della regione.',
    durata: '1-1,5 ore',
    periodo: 'da inizio aprile a inizio novembre, chiuso il resto dell\'anno',
    costo: '18 CHF adulti, 8 CHF bambini 6-15 anni (prezzi indicativi, vengono aggiornati spesso)',
    comePrenotare: 'nessuna prenotazione necessaria, si paga all\'ingresso',
    cosaPortare: 'scarpe con buona aderenza, perché le gallerie sono umide e scivolose, e una giacca leggera per l\'umidità',
    perChiEAdatta: 'chiunque, famiglie con bambini comprese: il percorso ha passerelle e ascensore',
    giudizio: 'da-verificare',
    alternative: ['La cascata Staubbach, visibile gratuitamente dal centro di Lauterbrunnen, ma senza l\'accesso dentro la montagna'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'L\'acqua glaciale delle Trümmelbachfälle che scorre in una gola scavata nella roccia, vista da una galleria illuminata, Lauterbrunnen',
    immagine: '/images/svizzera/trummelbachfalle.jpg',
  },
]
