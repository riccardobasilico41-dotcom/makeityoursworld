import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Maldive: guida completa tra isole
// locali, resort, mante e squali balena". Il testo narrativo resta nel
// markdown (src/content/viaggi/79-maldive-guida.md). La guida è modulare
// (stagioni, atolli, isole locali e resort, escursioni, liveaboard), ma
// contiene un itinerario d'esempio di 10 giorni: `giorni[]` segue quelle
// intestazioni "### Giorno N — ...", che devono combaciare esattamente.
//
// Guida non vissuta in prima persona: pernottamenti 'consigliato', nessuna
// esperienza personale. `immagine` omesso: le foto si recuperano dopo.

export const maldiveGuidaMeta: TripMeta = {
  tripSlug: 'maldive-guida',
  paeseSlug: 'maldive',
  ritmo:
    'Lento e costruito sul mare: un\'escursione al giorno nei primi giorni su un\'isola locale, poi giornate libere in resort. Gli unici vincoli sono gli orari fissi di speedboat e idrovolanti e le condizioni del mare.',
  trasporti:
    'Speedboat condivisi tra Malé e le isole locali, transfer del resort in speedboat o idrovolante (solo di giorno), traghetti pubblici MTCC per chi ha tempo, voli interni per Baa, Fuvahmulah e gli atolli del Sud; escursioni in barca organizzate da guesthouse e centri diving.',
  stile: ['mare', 'snorkeling', 'immersioni', 'isole locali', 'resort'],
  adattoA: [
    'chi ama il mare più del lusso e vuole vedere squali balena, mante e tartarughe anche solo con maschera e pinne',
    'chi vuole le Maldive spendendo meno, dormendo su un\'isola locale e chiudendo con qualche notte in resort',
    'chi accetta le regole di un villaggio musulmano: niente alcol, bikini solo sulla bikini beach, venerdì e Ramadan',
    'subacquei che cercano grandi animali e valutano un liveaboard',
  ],
  puntiForti: [
    'Lo squalo balena lungo la barriera di Ari Sud, presente tutto l\'anno',
    'Le mante della baia di Hanifaru tra agosto e ottobre',
    'La vita di un villaggio di pescatori sulle isole locali, a una frazione del prezzo di un resort',
    'La scelta dell\'atollo spiegata stagione per stagione e animale per animale',
    'Il liveaboard per vedere gli atolli lontani, dalla rotta centrale al Sud profondo',
  ],
  criticita: [
    'Le correnti dei canali (kandu) sono il pericolo principale: mai nuotare oltre il bordo della barriera da soli',
    'Sulle isole locali niente alcol, bikini solo sulla bikini beach, negozi chiusi il venerdì a metà giornata e vita ridotta di giorno durante il Ramadan',
    'Tasse sul soggiorno pesanti: green tax 6-12 $ a persona a notte, TGST 17% e servizio 10%',
    'Idrovolanti solo di giorno e speedboat condizionati dal mare: serve una notte di margine vicino all\'aeroporto',
    'Da maggio a novembre più vento, onde e piogge, con trasferimenti in mare più mossi',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'guida pensata per viaggiare in autonomia, in coppia o con amici, prenotando guesthouse, speedboat ed escursioni direttamente',
    treEsperienzePiuBelle:
      'Lo squalo balena ad Ari Sud, le mante nelle stazioni di pulizia o a Hanifaru, la house reef di un resort al tramonto',
    aChiLoConsiglio: 'a chi vuole un viaggio di mare con grandi animali, spendendo meno di quanto si immagina',
  },
  tappeMappa: [
    { nome: 'Malé e Hulhumalé', destinazioneSlug: 'male-hulhumale' },
    { nome: 'Ari Sud (Dhigurah)', destinazioneSlug: 'ari-sud' },
    { nome: 'Resort in Ari Sud' },
    { nome: 'Rientro a Hulhumalé', destinazioneSlug: 'male-hulhumale' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Malé e speedboat per Dhigurah', tratta: 'Aeroporto Velana → Dhigurah, speedboat condiviso 1h30-2h', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Speedboat 50-70 $ a persona a tratta', destinazioneSlug: 'ari-sud' },
    { titoloGiorno: 'Giorno 2 — Dhigurah: lo squalo balena sulla barriera di Ari Sud', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Escursione squalo balena 60-120 $ a persona', destinazioneSlug: 'ari-sud' },
    { titoloGiorno: 'Giorno 3 — Snorkeling con le mante e una sandbank', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Mante e sandbank 70-130 $ a persona', destinazioneSlug: 'ari-sud' },
    { titoloGiorno: 'Giorno 4 — La vita del villaggio e la pesca al tramonto', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Pesca al tramonto 30-50 $ a persona', destinazioneSlug: 'ari-sud' },
    { titoloGiorno: 'Giorno 5 — Ultima mattina ad Ari e un\'immersione', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Immersione 50-80 $; prova subacquea 100-150 $', destinazioneSlug: 'ari-sud' },
    { titoloGiorno: 'Giorno 6 — Dall\'isola locale al resort', tratta: 'Dhigurah → resort, speedboat del resort (o via Malé e idrovolante)', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Idrovolante 500-1.200 $ a persona andata e ritorno se non incluso' },
    { titoloGiorno: 'Giorno 7 — Resort: la house reef e un\'escursione', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Escursioni dal resort 80-150 $' },
    { titoloGiorno: 'Giorno 8 — Resort: una giornata di riposo', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'leggero' },
    { titoloGiorno: 'Giorno 9 — Resort e trasferimento a Hulhumalé', tratta: 'Resort → Hulhumalé, speedboat o idrovolante', pernottamento: 'Hulhumalé, hotel vicino all\'aeroporto', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'male-hulhumale' },
    { titoloGiorno: 'Giorno 10 — Malé e partenza', tratta: 'Hulhumalé → Malé → aeroporto Velana, traghetto 10 minuti', pernottamento: 'Volo di rientro', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Traghetto Malé-aeroporto 1-2 $', destinazioneSlug: 'male-hulhumale' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: 'Italia-Malé indicativamente 600-1.200 € andata e ritorno con uno scalo' },
    { etichetta: 'Guesthouse su isola locale', valore: '60-150 $ a notte la doppia con colazione, più tasse' },
    { etichetta: 'Resort', valore: 'da 300-400 $ a notte in fascia media, molto di più in fascia alta' },
    { etichetta: 'Tasse sul soggiorno', valore: 'green tax 6 $ (guesthouse) o 12 $ (resort) a persona a notte, TGST 17%, servizio 10%' },
    { etichetta: 'Trasferimenti', valore: 'speedboat 25-70 $ a tratta; idrovolante 500-1.200 $ andata e ritorno; traghetti MTCC 2-6 $' },
    { etichetta: 'Escursioni', valore: 'squalo balena 60-120 $, mante e sandbank 70-130 $, pesca al tramonto 30-50 $' },
    { etichetta: 'Immersioni', valore: '50-80 $ dai centri delle isole locali, 100-150 $ nei resort; Open Water 500-800 $' },
    { etichetta: 'Liveaboard (alternativa)', valore: '1.500-3.500 $ a persona per una settimana, più tasse, parchi, mance e attrezzatura' },
  ],
}
