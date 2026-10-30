import type { Esperienza } from '@/lib/types'

// Prima uscita lettone dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/lettonia.ts). Prezzi e orari cambiano nel tempo e
// vanno riverificati sui canali ufficiali prima di partire.

export const esperienzeLettonia: Esperienza[] = [
  {
    slug: 'riga-art-nouveau-passeggiata',
    paeseSlug: 'lettonia',
    destinazioneSlug: 'riga',
    nome: 'Passeggiata tra le facciate Art Nouveau di Alberta iela',
    localita: 'Quartiere Art Nouveau, Riga',
    cosE:
      'Un giro a piedi, da soli o con una guida, lungo Alberta iela, Elizabetes iela e le vie intorno. Qui si concentra una delle densità di architettura Art Nouveau (Jugendstil) più alte al mondo: si stima che circa un terzo degli edifici del centro di Riga sia in questo stile. Sono centinaia di facciate con maschere, volti scolpiti, motivi floreali e vetrate colorate, molte dell\'architetto Mihails Eizenšteins, padre del regista sovietico Sergej Ėjzenštejn.',
    percheFarla:
      'È un lato di Riga diverso dalla Città Vecchia medievale e spesso sottovalutato. Una volta imparato a distinguere lo stile decorativo di Eizenšteins da quello più sobrio di altri architetti dell\'epoca, si guarda tutta la città con occhi diversi per il resto del viaggio.',
    durata: 'un\'ora e mezza-due ore da soli e con calma; i tour guidati durano in genere circa 2 ore',
    periodo: 'tutto l\'anno: si sta quasi sempre all\'aperto, ma senza fatica fisica',
    costo: 'gratis da soli; i tour guidati a piedi partono da circa 15-20€ a persona; il Museo dell\'Art Nouveau di Alberta iela 12 ha un biglietto a parte, sui 6-10€',
    comePrenotare: 'Per il giro da soli non serve prenotare. I tour guidati si prenotano online o presso gli operatori del centro storico. Il Museo dell\'Art Nouveau ha un suo sito con orari e biglietti.',
    cosaPortare: 'Niente di particolare; un binocolo leggero o uno zoom aiutano a fotografare i dettagli delle facciate più alte.',
    perChiEAdatta: 'Per tutti, e in particolare per chi ama l\'architettura e la fotografia urbana.',
    giudizio: 'da-verificare',
    alternative: ['Il Museo dell\'Art Nouveau di Alberta iela 12, che ricostruisce un appartamento borghese d\'epoca dentro uno degli edifici più decorati della via: per chi vuole vedere anche gli interni'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Una facciata Art Nouveau color crema a Riga, con finestre ad arco decorate da stucchi e un balcone in ferro battuto',
    immagine: '/images/lettonia/riga-art-nouveau-passeggiata.jpg',
  },
  {
    slug: 'riga-mercato-centrale-tour',
    paeseSlug: 'lettonia',
    destinazioneSlug: 'riga',
    nome: 'Giro gastronomico al Mercato Centrale di Riga',
    localita: 'Centrāltirgus, Riga',
    cosE:
      'Un giro, da soli o con una guida, nei cinque padiglioni del Mercato Centrale di Riga, con soste per assaggiare dai produttori pesce affumicato del Baltico, formaggi locali, miele e pane di segale nero (rupjmaize). I padiglioni erano hangar tedeschi per dirigibili della Prima guerra mondiale; sono diventati mercato nel 1930, e allora era il più grande e moderno d\'Europa.',
    percheFarla:
      'Dal 1998 il mercato fa parte del sito UNESCO insieme alla Città Vecchia, ma è ancora un mercato vero, frequentato ogni giorno da circa 80.000 persone. Per assaggiare i prodotti lettoni è probabilmente il modo più economico e genuino.',
    durata: 'un\'ora per un giro veloce da soli, fino a 2-3 ore con un tour guidato con assaggi in più tappe',
    periodo: 'tutto l\'anno; la mattina, prima di mezzogiorno, c\'è più scelta e più vita locale',
    costo: 'l\'ingresso al mercato è libero; da soli si spende quanto si compra (pochi euro a porzione); i tour gastronomici guidati partono da circa 30-45€ a persona',
    comePrenotare: 'Per il giro da soli non serve prenotare. I tour gastronomici guidati si prenotano online con qualche giorno di anticipo, soprattutto nel weekend.',
    cosaPortare: 'Contanti di piccolo taglio per i banchi più informali, anche se ormai quasi tutti accettano carte e contactless.',
    perChiEAdatta: 'Per chi ama i mercati alimentari. Meno adatta a chi ha poco tempo e vuole vedere solo gli hangar da fuori.',
    giudizio: 'da-verificare',
    alternative: ['Un giro veloce degli esterni e del padiglione principale, per chi vuole vedere l\'architettura senza fermarsi agli assaggi'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'L\'interno di un padiglione del Mercato Centrale di Riga, con i banchi di frutta e verdura sotto la volta ad arco degli ex hangar',
    immagine: '/images/lettonia/riga-mercato-centrale-tour.jpg',
  },
  {
    slug: 'jurmala-spiaggia-ville-liberty',
    paeseSlug: 'lettonia',
    destinazioneSlug: 'jurmala',
    nome: 'Giornata a Jūrmala: spiaggia e ville liberty',
    localita: 'Jūrmala, circa 20 km da Riga',
    cosE:
      'Una giornata, o mezza, sulla lunga spiaggia di sabbia bianca di Jūrmala, con un giro a piedi tra le ville di legno Art Nouveau e Art Déco nelle vie residenziali di Majori e Dzintari. Molte risalgono all\'epoca zarista e sovietica, quando la città era la meta balneare dell\'élite della regione.',
    percheFarla:
      'È la gita al mare più semplice di tutto l\'itinerario, a mezz\'ora di treno da Riga. In un viaggio di capitali porta il mare, che altrimenti manca, e un patrimonio di architettura in legno che nel Baltico non si vede altrove.',
    durata: 'mezza giornata per la spiaggia e la via principale; una giornata intera per girare più a fondo le vie residenziali e restare di più in spiaggia',
    periodo: 'giugno-agosto per fare il bagno; maggio e settembre vanno bene per la passeggiata, ma l\'acqua è troppo fredda per quasi tutti',
    costo: 'treno da Riga circa 2€ a tratta; spiaggia gratuita; pasto in un caffè del lungomare 8-15€',
    comePrenotare: 'Non serve prenotare: si prende il treno regionale dalla stazione centrale di Riga verso Majori, con partenze frequenti tutto il giorno.',
    cosaPortare: 'In stagione costume e telo; scarpe comode per le vie residenziali; una felpa leggera, perché il vento dal golfo rinfresca anche nelle giornate calde.',
    perChiEAdatta: 'Per chi cerca una pausa di mare dentro un itinerario di città. Meno adatta fuori stagione, quando la vita balneare si ferma quasi del tutto.',
    giudizio: 'da-verificare',
    alternative: ['Un giro solo tra le ville Art Nouveau, per chi ci va fuori stagione o non vuole fare il bagno'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'La spiaggia di sabbia chiara di Jūrmala con le cabine colorate in fila e il Baltic Beach Hotel tra i pini',
    immagine: '/images/lettonia/jurmala-spiaggia-ville-liberty.jpg',
  },
]
