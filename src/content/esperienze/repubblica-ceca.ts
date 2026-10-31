import type { Esperienza } from '@/lib/types'

// Prima uscita ceca dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/repubblica-ceca.ts). Prezzi, orari e regole di
// prenotazione cambiano spesso e vanno riverificati sui canali ufficiali
// prima di prenotare.

export const esperienzeRepubblicaCeca: Esperienza[] = [
  {
    slug: 'praga-castello-biglietto',
    paeseSlug: 'repubblica-ceca',
    destinazioneSlug: 'praga',
    nome: 'Percorso dei visitatori del Castello di Praga e Cattedrale di San Vito',
    localita: 'Hradčany, colle del Castello, Praga',
    cosE:
      'Il "Circuito A" (Main Visitor Route) è il biglietto che copre le principali attrazioni del complesso: l\'interno della Cattedrale di San Vito, il Vecchio Palazzo Reale, la Basilica di San Giorgio e il Vicolo d\'Oro con la Torre Daliborka. I cortili del Castello e la navata esterna della Cattedrale restano gratuiti; il biglietto serve solo per le sale interne.',
    percheFarla:
      'Il Castello di Praga è tra i complessi castellani chiusi più grandi al mondo, e la Cattedrale di San Vito, al suo interno, è il monumento gotico più importante del paese. Senza biglietto si vedono solo l\'esterno e i cortili, e si perdono interni, cripte reali e vetrate.',
    durata: 'mezza giornata (3-4 ore) per il percorso completo con code incluse in alta stagione',
    periodo: 'tutto l\'anno; l\'estate porta code più lunghe agli ingressi, l\'inverno un clima più rigido ma meno folla',
    costo: 'biglietto del Circuito A attorno ai 450 CZK per adulto (circa 18-20€); la salita alla Grande Torre Sud della Cattedrale ha un biglietto separato, attorno ai 200 CZK',
    comePrenotare: 'Si compra online sul sito ufficiale del Castello o sul posto alle biglietterie; nei weekend e in alta stagione conviene comprarlo prima online per saltare la coda.',
    cosaPortare: 'Scarpe comode: il percorso comprende molti scalini, sia nella cattedrale sia nel Vicolo d\'Oro.',
    perChiEAdatta: 'Va bene quasi per tutti; nei mesi centrali dell\'estate le code più lunghe (soprattutto per entrare nella Cattedrale) rendono la visita più faticosa con i bambini piccoli.',
    giudizio: 'da-verificare',
    alternative: ['Visitare solo i cortili esterni e la navata della Cattedrale, gratuiti, per chi ha poco tempo o budget limitato'],
    tripSlugs: ['praga-weekend'],
    imageAlt: 'La navata gotica della Cattedrale di San Vito al Castello di Praga, con le volte a costoloni e le vetrate colorate in fondo al coro',
    immagine: '/images/repubblica-ceca/praga-castello-biglietto.jpg',
  },
  {
    slug: 'praga-josefov-jewish-town',
    paeseSlug: 'repubblica-ceca',
    destinazioneSlug: 'praga',
    nome: 'Jewish Town Ticket: il quartiere ebraico di Josefov',
    localita: 'Josefov, Staré Město, Praga',
    cosE:
      'Il biglietto unico del Museo Ebraico di Praga che dà accesso a sei siti storici di Josefov: la Sinagoga Vecchia-Nuova (Staronová synagoga, la più antica sinagoga attiva d\'Europa, con biglietto separato), l\'Antico Cimitero Ebraico con le sue migliaia di lapidi sovrapposte, e le sinagoghe Pinkas, Maisel, Klausen e Spagnola, ciascuna oggi sede di un\'esposizione diversa sulla storia della comunità ebraica ceca.',
    percheFarla:
      'Josefov, nel cuore di Staré Město, conserva una delle collezioni di sinagoghe storiche meglio preservate d\'Europa. Paradossalmente si è salvata perché i nazisti la vollero conservare come "museo di una razza estinta", ed è questo a dare al quartiere un peso storico che una passeggiata tra le sue eleganti vie di oggi non trasmette.',
    durata: 'circa 2-3 ore per visitare tutti i siti inclusi nel biglietto con calma',
    periodo: 'tutto l\'anno; alcuni siti chiudono per le festività ebraiche e il sabato (Shabbat), quindi conviene controllare prima',
    costo: 'Jewish Town Ticket attorno ai 600 CZK per adulto; la Sinagoga Vecchia-Nuova richiede un biglietto a parte',
    comePrenotare: 'Si compra online sul sito del Museo Ebraico di Praga o alle biglietterie delle sinagoghe Spagnola, Klausen o Pinkas; fuori dai weekend di alta stagione non serve prenotare con largo anticipo.',
    cosaPortare: 'Nessuna attrezzatura particolare; abbigliamento rispettoso per l\'ingresso nei luoghi di culto.',
    perChiEAdatta: 'A chi vuole capire la storia della comunità ebraica praghese, oltre la superficie del quartiere; meno a chi ha solo mezza giornata e vuole vedere anche il resto di Staré Město.',
    giudizio: 'da-verificare',
    alternative: ['Un tour guidato a piedi del quartiere ebraico, con biglietti d\'ingresso inclusi, per chi preferisce un racconto guidato invece della sola visita autonoma'],
    tripSlugs: ['praga-weekend'],
    imageAlt: 'Le lapidi antiche e fitte, coperte di muschio, dell\'Antico Cimitero Ebraico di Josefov a Praga, con la tomba di Mordechai Maisel',
    immagine: '/images/repubblica-ceca/praga-josefov-jewish-town.jpg',
  },
  {
    slug: 'praga-degustazione-birra',
    immagine: '/images/repubblica-ceca/praga-degustazione-birra.jpg',
    paeseSlug: 'repubblica-ceca',
    destinazioneSlug: 'praga',
    nome: 'Degustazione di birra ceca in un hospoda tradizionale',
    localita: 'Fuori dal centro più turistico: Žižkov, Vinohrady o Holešovice, Praga',
    cosE:
      'Una serata (o un tour guidato) tra due o tre hospoda, i pub tradizionali cechi, per assaggiare diverse birre alla spina, dalle pilsner più note ai marchi locali meno esportati, nei locali frequentati soprattutto dai residenti e lontano dai prezzi gonfiati del centro storico.',
    percheFarla:
      'La Repubblica Ceca ha il consumo di birra pro capite più alto al mondo, e la cultura dell\'hospoda fa parte dell\'identità nazionale quanto i monumenti. Viverla da dentro, in un locale di quartiere, racconta Praga meglio di molte tappe turistiche.',
    durata: 'circa 2-3 ore, in genere in tardo pomeriggio o serata',
    periodo: 'tutto l\'anno, perché si sta quasi sempre al chiuso',
    costo: 'un mezzo litro di birra alla spina in un pub di quartiere costa indicativamente 55-80 CZK; un tour guidato con più tappe e assaggi costa sui 30-50€ a persona',
    comePrenotare: 'I tour tematici si prenotano sulle piattaforme di tour online; da soli non serve prenotare, basta scegliere pub fuori dall\'asse più turistico.',
    cosaPortare: 'Nessuna attrezzatura particolare.',
    perChiEAdatta: 'A chi vuole un\'esperienza autentica senza pagare prezzi da zona turistica; meno a chi non beve alcolici, che però negli hospoda trova comunque il cibo.',
    giudizio: 'da-verificare',
    alternative: ['Un birrificio artigianale con visita e degustazione, per chi cerca qualcosa di più strutturato di una semplice serata al pub'],
    tripSlugs: ['praga-weekend'],
    imageAlt: 'Un bicchiere di birra scura alla spina sul bancone di legno della birreria U Medvídků a Praga',
  },
]
