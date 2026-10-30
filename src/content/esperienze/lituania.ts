import type { Esperienza } from '@/lib/types'

// Prima uscita lituana dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/lituania.ts). Prezzi e orari cambiano nel tempo e
// vanno riverificati sui canali ufficiali prima di partire.

export const esperienzeLituania: Esperienza[] = [
  {
    slug: 'uzupis-repubblica-passeggiata',
    paeseSlug: 'lituania',
    destinazioneSlug: 'vilnius',
    nome: 'Passeggiata nella Repubblica di Užupis',
    localita: 'Užupis, Vilnius',
    cosE:
      'Un giro a piedi, da soli o con una guida, nel quartiere che il primo aprile 1997 si è proclamato "Repubblica Indipendente di Užupis". Ha una bandiera, un presidente onorario, un piccolo esercito simbolico (circa dodici persone) e una costituzione di 41 articoli, molti surreali o poetici ("ognuno ha diritto a essere frainteso", "ognuno ha diritto di amare e prendersi cura del gatto"), incisa su targhe in decine di lingue lungo il Muro della Costituzione, in via Paupio.',
    percheFarla:
      'È una delle trovate più originali e meno "da cartolina" del Baltico. Dietro la leggerezza c\'è una storia artistica vera: il quartiere era la zona più degradata della Vilnius sovietica e negli anni Novanta l\'hanno ripopolato gli artisti. Serve un\'ora abbondante di passeggiata, e una visita di corsa non gli rende giustizia.',
    durata: 'un\'ora e mezza-due ore per un giro con calma, compresi il Muro della Costituzione e le gallerie d\'arte',
    periodo: 'tutto l\'anno; il 1° aprile, giorno dell\'"indipendenza", nel quartiere ci sono eventi e feste speciali',
    costo: 'gratis da soli; i tour guidati a piedi partono da circa 15-20€ a persona',
    comePrenotare: 'Per il giro da soli non serve prenotare. I tour guidati si prenotano online o sul posto presso gli operatori del centro storico.',
    cosaPortare: 'Niente di particolare; scarpe comode, perché alcune vie hanno il selciato irregolare.',
    perChiEAdatta: 'Per tutti, e in particolare per chi ama l\'arte di strada, le gallerie indipendenti e le storie fuori dal comune.',
    giudizio: 'da-verificare',
    alternative: ['Un tour guidato a piedi sulla storia artistica del quartiere, per chi vuole più contesto del giro da soli'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'La statua dell\'Angelo di Užupis che suona la tromba in cima alla colonna, tra le facciate della piazza principale di Užupis a Vilnius',
    immagine: '/images/lituania/uzupis-repubblica-passeggiata.jpg',
  },
  {
    slug: 'trakai-castello-lago-galve',
    paeseSlug: 'lituania',
    destinazioneSlug: 'trakai',
    nome: 'Visita al Castello dell\'Isola di Trakai e giro in barca sul lago Galvė',
    localita: 'Trakai, circa 28 km a ovest di Vilnius',
    cosE:
      'La visita al Museo Storico dentro il Castello dell\'Isola di Trakai e poi un giro in barca a remi o in pedalò sul lago Galvė, per vedere il castello dall\'acqua. È l\'inquadratura più fotografata e, per molti visitatori, quella che dà l\'idea di un castello "che galleggia" su un\'isola.',
    percheFarla:
      'In poche ore si vedono un castello gotico medievale, ricostruito nel Novecento con cura filologica sui resti originali, e un lago: a Vilnius, che non ha acque paragonabili, un\'esperienza così non c\'è.',
    durata: 'circa 1-1,5 ore per il museo, più 30-60 minuti di barca o pedalò secondo quanto si resta sul lago; mezza giornata in tutto, compresi i trasporti da Vilnius',
    periodo: 'tutto l\'anno per il museo; la barca soprattutto da aprile a ottobre, quando i noleggi sul lago sono aperti',
    costo: 'museo 12€ in bassa stagione (ottobre-marzo), 14€ in alta stagione (aprile-settembre); barca o pedalò sui 8-15€ l\'ora secondo il mezzo',
    comePrenotare: 'Il museo si visita liberamente, con biglietto sul posto o online. Le barche si noleggiano ai chioschi sul lungolago vicino al ponte pedonale; fuori dai weekend di alta stagione non serve prenotare.',
    cosaPortare: 'Scarpe comode per il tratto a piedi dalla stazione. Se si va in barca, uno strato in più anche d\'estate: sul lago il vento rinfresca più che in città.',
    perChiEAdatta: 'Per quasi tutti, famiglie comprese. L\'unica fatica da mettere in conto è il tratto a piedi dalla stazione (circa 30-40 minuti).',
    giudizio: 'da-verificare',
    alternative: ['Solo la visita al castello, per chi ha meno tempo o non vuole andare in barca'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'La lunga passerella di legno che attraversa il lago Galvė verso il Castello dell\'Isola di Trakai',
    immagine: '/images/lituania/trakai-castello-lago-galve.jpg',
  },
]
