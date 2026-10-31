import type { Esperienza } from '@/lib/types'

// Prima uscita portoghese dell'archivio: è un viaggio fatto da Rick. giudizio
// resta 'da-verificare' finché non arriva la sua valutazione e il campo
// miaEsperienza resta assente finché non arriva un ricordo dell'autore (vedi
// il commento in src/content/destinazioni/portogallo.ts). Prezzi, orari e
// regole di prenotazione, soprattutto quelli di Sintra, cambiano spesso e
// vanno riverificati sui canali ufficiali prima di prenotare.

export const esperienzePortogallo: Esperienza[] = [
  {
    slug: 'tram-28-alfama',
    paeseSlug: 'portogallo',
    destinazioneSlug: 'lisbona',
    nome: 'Tram 28 e passeggiata nell\'Alfama',
    localita: 'Alfama e colline centrali di Lisbona',
    cosE:
      'Lo storico tram numero 28, in servizio dal primo Novecento su vagoni in legno d\'epoca (in gran parte ancora quelli di allora, restaurati). Collega Martim Moniz, l\'Alfama, la Baixa, Estrela e Campo de Ourique passando per alcune delle salite e delle curve più strette della città. Spesso lo si abbina a una passeggiata nei vicoli dell\'Alfama, il quartiere più antico.',
    percheFarla:
      'È un mezzo pubblico vero e insieme un\'attrazione turistica: curve strettissime fra case a un braccio di distanza e salite ripidissime, cose che in Europa non si trovano altrove. Per lo stesso motivo è anche il posto con più borseggiatori della città, e bisogna salirci sapendolo.',
    durata: 'il percorso completo dura circa 40-45 minuti, ma quasi tutti scendono e risalgono più volte; con la passeggiata nell\'Alfama si arriva facilmente a mezza giornata',
    periodo: 'tutto l\'anno; nelle ore centrali dell\'alta stagione la calca lo rende quasi impraticabile',
    costo: 'il biglietto singolo comprato a bordo costa più del previsto (circa 3€); conviene molto di più la carta Viva Viagem/Navegante ricaricata o un pass giornaliero, validi su tutta la rete pubblica',
    comePrenotare: 'Non si prenota: si sale alla fermata come su qualsiasi tram. Conta solo l\'orario: il prima possibile la mattina, per evitare la ressa.',
    cosaPortare: 'Solo l\'essenziale, tenuto davanti a sé: è il mezzo con più borseggi della città.',
    perChiEAdatta: 'Per tutti. Chi cerca un giro tranquillo, e non una lotta con la calca, eviti le ore di punta di metà giornata.',
    giudizio: 'da-verificare',
    alternative: ['Fare lo stesso percorso a piedi: più lento, ma senza code né borseggiatori, fermandosi quando si vuole ai miradouros lungo la salita'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Un tram giallo della linea 28 diretto a Martim Moniz tra i palazzi del centro di Lisbona',
    immagine: '/images/portogallo/tram-28-alfama.jpg',
  },
  {
    slug: 'pasteis-de-belem',
    paeseSlug: 'portogallo',
    destinazioneSlug: 'lisbona',
    nome: 'Pastéis de nata alla Pastéis de Belém',
    localita: 'Rua de Belém 84-92, quartiere di Belém, Lisbona',
    cosE:
      'La pasticceria storica aperta nel 1837 accanto al Mosteiro dos Jerónimos. Custodisce la ricetta originale del pastel de nata (qui si chiama pastel de Belém, un nome protetto che può usare solo questo locale), tramandata dai monaci del monastero prima della soppressione degli ordini religiosi nel 1834. Ogni giorno escono ancora migliaia di sfoglie, servite calde, con cannella e zucchero a velo a richiesta.',
    percheFarla:
      'È l\'origine documentata di uno dei dolci più noti del Portogallo, non una delle tante rivendicazioni turistiche. E la differenza tra la sfoglia calda appena sfornata e le versioni da bar del resto della città, che restano buone, si sente.',
    durata: '30-60 minuti, compresa la coda nelle ore di punta',
    periodo: 'tutto l\'anno, aperto tutti i giorni',
    costo: 'pochi euro a pasticcino (con 2-3 pezzi si resta facilmente sotto i 5€)',
    comePrenotare: 'Non si prenota. O si fa la coda alla porta, spesso lunga, o, più in fretta, ci si siede nella sala interna più grande sul retro, che chi passa davanti alla vetrina spesso non conosce.',
    cosaPortare: 'Niente di particolare. Utile sapere che il locale ha più sale e che quella sul retro smaltisce la fila meglio dell\'ingresso principale.',
    perChiEAdatta: 'Per tutti; l\'unico limite è la pazienza per la coda nelle ore centrali.',
    giudizio: 'da-verificare',
    alternative: ['Una qualsiasi pasticceria di quartiere in centro: a Lisbona il pastel de nata "normale" è ottimo quasi ovunque, e senza fila'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Un pastel de nata con la crema caramellata a chiazze scure e la sfoglia croccante, servito in un caffè storico di Lisbona',
    immagine: '/images/portogallo/pasteis-de-belem.jpg',
  },
  {
    slug: 'sintra-giornata-da-lisbona',
    paeseSlug: 'portogallo',
    destinazioneSlug: 'sintra',
    nome: 'Gita di un giorno a Sintra',
    localita: 'Sintra, circa 30 km a nord-ovest di Lisbona',
    cosE:
      'La gita fuori porta più classica da Lisbona: treno da Rossio fino a Sintra e visita a palazzi e giardini, soprattutto il Palácio Nacional da Pena e la Quinta da Regaleira, dove nelle ore centrali le code sono spesso lunghe.',
    percheFarla:
      'In una zona collinare piccola Sintra concentra palazzi romantici e giardini esoterici come nessun altro posto in Portogallo. Per un soggiorno a Lisbona di più di due giorni è la gita che quasi tutti fanno.',
    durata: 'una giornata intera, dalla mattina presto al tardo pomeriggio',
    periodo: 'tutto l\'anno; conta la folla più del clima, e giugno-agosto porta le code più lunghe',
    costo: 'treno circa 5€ a tratta da Rossio; Palácio da Pena circa 20-25€, Quinta da Regaleira circa 15€, con sconti sui biglietti combinati; bus locale 434 pochi euro',
    comePrenotare:
      'Gli ingressi ai palazzi si comprano online, a fascia oraria. Conviene prenotare in anticipo, soprattutto per il Palácio da Pena in alta stagione, quando gli orari della mattina finiscono. Il treno non si prenota: basta il biglietto o la carta contactless.',
    cosaPortare: 'Scarpe comode per le salite e i lunghi tratti a piedi fra un sito e l\'altro; una giacca leggera, perché a Sintra il clima è più fresco e umido che a Lisbona.',
    perChiEAdatta:
      'Per chi accetta una giornata di code e camminate in salita. Meno adatta a chi ha mobilità ridotta o vuole visitare con calma, vista la pressione turistica.',
    giudizio: 'da-verificare',
    alternative: ['Un tour organizzato da Lisbona con transfer in minivan e ingresso prioritario compreso (c\'è il confronto nella scheda della destinazione Lisbona)'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Le mura merlate e la torre gialla dell\'orologio del Palácio da Pena a Sintra, tra le rocce e la vegetazione',
    immagine: '/images/portogallo/sintra-giornata-da-lisbona.jpg',
  },
]
