import type { Esperienza } from '@/lib/types'

// Prima uscita estone dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/estonia.ts). Prezzi e orari cambiano nel tempo e
// vanno riverificati sui canali ufficiali prima di partire.

export const esperienzeEstonia: Esperienza[] = [
  {
    slug: 'tallinn-kadriorg-kumu',
    paeseSlug: 'estonia',
    destinazioneSlug: 'tallinn',
    nome: 'Il Parco di Kadriorg e il museo KUMU',
    localita: 'Kadriorg, Tallinn',
    cosE:
      'Una visita al Parco di Kadriorg, fatto costruire nel 1718 da Pietro il Grande per la moglie Caterina I su progetto dell\'architetto italiano Niccolò Michetti, con il Palazzo barocco (oggi museo d\'arte straniera) e i giardini geometrici. Poi una tappa al KUMU, il museo d\'arte estone in un edificio contemporaneo a pochi passi, Museo Europeo dell\'Anno nel 2008.',
    percheFarla:
      'Mostra una Tallinn diversa dalla Città Vecchia medievale: quella imperiale russa del Settecento, con un parco da reggia, e accanto l\'arte estone del Novecento e contemporanea raccolta nel KUMU. Il salto dall\'una all\'altra è di pochi minuti a piedi.',
    durata: 'circa 1 ora per il solo parco, 2-3 ore con una visita completa al KUMU',
    periodo: 'il parco tutto l\'anno, con i giardini più belli da maggio a settembre; il museo è al chiuso, quindi va bene anche con la pioggia',
    costo: 'parco gratuito; ingresso al KUMU indicativamente 12-16€ secondo la mostra in corso; il Palazzo di Kadriorg ha un biglietto separato, di solito pochi euro',
    comePrenotare: 'Per il parco non serve prenotare; i biglietti del KUMU si comprano in loco o sul sito del museo, utile quando ci sono mostre temporanee molto richieste.',
    cosaPortare: 'Nessuna attrezzatura particolare; conviene controllare prima il giorno di chiusura settimanale del museo.',
    perChiEAdatta: 'Per chi ama i parchi storici e l\'arte; il KUMU in particolare è per chi vuole capire l\'Estonia oltre il centro medievale.',
    giudizio: 'da-verificare',
    alternative: ['Solo il giro nel parco e nei giardini, per chi preferisce restare all\'aperto senza visitare il museo'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il Palazzo barocco di Kadriorg a Tallinn con il giardino all\'italiana e la fontana in primo piano',
    immagine: '/images/estonia/tallinn-kadriorg-kumu.jpg',
  },
  {
    slug: 'tallinn-telliskivi-creative-city',
    paeseSlug: 'estonia',
    destinazioneSlug: 'tallinn',
    nome: 'Telliskivi Creative City',
    localita: 'Telliskivi, Tallinn',
    cosE:
      'Un giro tra i capannoni dell\'ex complesso industriale e ferroviario sovietico di Telliskivi, che dal 2009 è diventato il quartiere creativo più vivo della città: negozi indipendenti, studi di design, gallerie, street art sulle facciate dei vecchi edifici in mattoni e tanti bar e ristoranti, in tutt\'altro registro rispetto alla Città Vecchia medievale.',
    percheFarla:
      'È il modo più diretto per vedere l\'altra Tallinn, quella della scena tech e creativa che ha reso l\'Estonia un caso internazionale nel digitale (qui è nato Skype). La si incontra nell\'architettura industriale sovietica riconvertita, senza bisogno di un museo.',
    durata: 'un\'ora e mezza-due ore per girare con calma fra negozi e street art, con una sosta in un locale',
    periodo: 'tutto l\'anno; i mercati alimentari e gli eventi all\'aperto del quartiere sono più frequenti da maggio a settembre',
    costo: 'l\'accesso al quartiere è libero; si spende per quello che si mangia o si compra, con prezzi nella media di Tallinn',
    comePrenotare: 'Non serve prenotare: dalla Città Vecchia ci si arriva a piedi o con un breve tratto di tram.',
    cosaPortare: 'Nessuna attrezzatura particolare.',
    perChiEAdatta: 'Per chi cerca un contrappunto contemporaneo al centro medievale; meno indicata per chi ha tempo solo per la Città Vecchia.',
    giudizio: 'da-verificare',
    alternative: ['Un giro dedicato ai mercati del weekend, quando il quartiere è più animato e tra i capannoni aprono i banchi gastronomici temporanei'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'L\'ex fabbrica in mattoni del quartiere di Telliskivi a Tallinn, con i graffiti colorati lungo la base della facciata',
    immagine: '/images/estonia/tallinn-telliskivi-creative-city.jpg',
  },
]
