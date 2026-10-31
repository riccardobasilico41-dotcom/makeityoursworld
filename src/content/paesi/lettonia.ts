import type { Paese } from '@/lib/types'

// Seconda tappa dell'itinerario combinato "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md), viaggio fatto da Rick. Stesso trattamento
// delle altre due schede baltiche: visitataPersonalmente è true ovunque e
// miaEsperienza resta assente finché non arriva un ricordo dell'autore. tripPrincipaleSlug punta all'itinerario combinato, come su
// lituania.ts ed estonia.ts: vedi la nota lì per il perché paeseSlug del
// TripMeta è invece impostato sulla sola Lituania.

export const lettonia: Paese = {
  slug: 'lettonia',
  nome: 'Lettonia',
  continente: 'Europa',
  titolo: 'Lettonia: Riga, la capitale con più Art Nouveau d\'Europa, e la spiaggia di Jūrmala',
  descrizione:
    'Riga è la più grande delle tre capitali baltiche. Ha un centro storico medievale patrimonio UNESCO e, appena fuori dalle mura, una delle concentrazioni di architettura Art Nouveau più alte al mondo: centinaia di facciate liberty, molte firmate dal padre del regista Sergej Ėjzenštejn. Il Mercato Centrale, cinque hangar per dirigibili trasformati in mercato coperto negli anni Trenta, è ancora oggi il più grande bazar d\'Europa. A mezz\'ora di treno c\'è Jūrmala, con la sua lunga spiaggia di sabbia bianca, la meta balneare storica della regione. Sul sito la Lettonia è la seconda tappa dell\'itinerario combinato delle tre capitali baltiche, tra Vilnius e Tallinn.',
  periodoMigliore:
    'maggio-settembre. Giugno-agosto è il periodo più caldo, buono anche per un bagno a Jūrmala, ma è il più affollato; maggio e settembre restano miti e la Città Vecchia ha meno turisti. Da novembre a marzo il freddo è pungente e spesso ventoso, perché la città sta sul Golfo di Riga.',
  durataConsigliata:
    '3 giorni per Riga (Città Vecchia, quartiere Art Nouveau, Mercato Centrale) e la gita a Jūrmala, come tappa intermedia di un itinerario più ampio tra Vilnius e Tallinn.',
  budgetIndicativo:
    'economica per gli standard dell\'Europa occidentale, anche se è nell\'eurozona: pasto normale 8-16€, biglietto della torre panoramica della Chiesa di San Pietro 9€, treno per Jūrmala circa 2€ a tratta.',
  stileViaggio: ['città', 'architettura', 'mare', 'gastronomia'],
  scheda: {
    documenti:
      'La Lettonia è nell\'Unione Europea, nell\'area Schengen e nell\'eurozona: ai cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i novanta giorni.',
    valuta: 'Euro, dal 2014. È stata la seconda delle tre capitali baltiche ad adottarlo, dopo l\'Estonia (2011) e prima della Lituania (2015).',
    pagamenti:
      'Carta e contactless funzionano quasi ovunque, anche sui mezzi pubblici. I contanti servono per le bancarelle del Mercato Centrale e i piccoli acquisti a Jūrmala.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. La copertura 4G/5G è buona a Riga e sulla costa e cala nelle zone rurali dell\'interno, che questo itinerario non tocca.',
    salute: 'La tessera europea di assicurazione malattia (TEAM) è valida. Non sono richieste vaccinazioni. A Riga l\'acqua del rubinetto è potabile.',
    sicurezza:
      'Per gli standard europei Riga è una capitale sicura: basta la normale attenzione ai borseggi nelle zone turistiche e, nei weekend, nella vita notturna della Città Vecchia. Come la Lituania, la Lettonia confina a est con la Russia e a sud-est con la Bielorussia. Quelle zone di confine restano fuori da questo itinerario, che si concentra su Riga, sulla costa di Jūrmala e sul collegamento in bus con le altre due capitali.',
    trasportiInterni:
      'Il centro storico si gira tutto a piedi. Tram, filobus e bus della rete Rīgas satiksme collegano il resto della città, con biglietti a tempo economici. Per Jūrmala c\'è il treno regionale dalla stazione centrale (Rīga Centrālā stacija): circa 30 minuti, con partenze almeno ogni mezz\'ora. L\'auto a noleggio non serve.',
    costoVita:
      'Basso per gli standard dell\'Europa occidentale e nordica: un pasto in un locale tradizionale costa pochi euro, una cena normale 10-16€ a testa. Molto più economica delle capitali nordiche presenti altrove sul sito (Oslo, Stoccolma, Reykjavík), in linea con Vilnius e Tallinn.',
    lingua:
      'Lettone, una lingua baltica lontana parente del lituano. Le due lingue si sono separate secoli fa e oggi chi parla lettone non capisce il lituano, e viceversa. L\'alfabeto è latino, con segni diacritici propri (ā, č, ģ, ī, ķ, ļ, ņ, š, ž). A Riga l\'inglese è diffuso tra i più giovani e nel turismo; il russo è ancora molto parlato dalla consistente minoranza russofona del paese.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi.',
    fusoOrario: 'UTC+2 in inverno, UTC+3 in estate (EET/EEST): un\'ora avanti rispetto all\'Italia tutto l\'anno, come la Lituania e l\'Estonia.',
    clima:
      'Continentale umido, mitigato dal Mar Baltico. Gli inverni sono freddi e ventosi, spesso sotto zero da dicembre a febbraio; le estati sono miti e luglio-agosto è la stagione balneare a Jūrmala. Per girare la città a piedi le stagioni di mezzo sono le più equilibrate.',
    festivita:
      'Il Festival della Canzone e della Danza lettone (Dziesmu un deju svētki), patrimonio culturale immateriale UNESCO, si tiene ogni cinque anni con decine di migliaia di partecipanti: se le date coincidono, affollamento e prezzi cambiano di molto. A dicembre in Piazza del Duomo, nella Città Vecchia, c\'è uno dei mercatini di Natale più fotografati del Baltico.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Riga.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La facciata Art Nouveau di un palazzo di Riga, con volti scolpiti, lesene colorate e decorazioni sotto il cornicione',
  heroImage: '/images/lettonia/lettonia-paese.jpg',
  tripPrincipaleSlug: 'capitali-baltiche',
}
