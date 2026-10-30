import type { Paese } from '@/lib/types'

// Primo ingresso del Portogallo nell'archivio: un solo itinerario, un
// weekend lungo a Lisbona con gita di un giorno a Sintra (4 giorni), stesso
// filone "weekend lunghi in Europa" di Cracovia, Parigi, Amsterdam. Porto e
// il resto del paese restano fuori di proposito: meritano un itinerario a sé.
//
// Nessuno ha ancora messo piede a Lisbona per conto di questo sito: le
// destinazioni (Lisbona e Sintra, voci separate) restano entrambe
// visitataPersonalmente: false e senza il campo miaEsperienza, facoltativo
// nel tipo Destinazione apposta per questo caso (vedi src/lib/types.ts e lo
// stesso trattamento in src/content/paesi/polonia.ts). Scheda di ricerca,
// non un diario: fatti verificabili, senza episodi in prima persona.

export const portogallo: Paese = {
  slug: 'portogallo',
  nome: 'Portogallo',
  continente: 'Europa',
  titolo: 'Portogallo: Lisbona e Sintra in quattro giorni, tra colline, fado e palazzi da favola',
  descrizione:
    'Per ora sul sito c\'è una sola meta portoghese, la più naturale per cominciare: Lisbona, la capitale sulle sette colline affacciata sul Tago. Il tram 28 attraversa l\'Alfama, il monastero di Jerónimos e la Torre di Belém ricordano l\'epoca delle scoperte. A meno di un\'ora di treno c\'è Sintra, la cittadina dei palazzi romantici come il Palácio da Pena, fotogenica quanto affollata. Porto e il resto del Portogallo qui non ci sono: quattro giorni bastano appena per Lisbona e la sua gita fuori porta più classica.',
  periodoMigliore:
    'aprile-maggio e settembre-ottobre: clima mite, meno turisti e temperature più adatte a camminare su e giù per le colline. Giugno-agosto è alta stagione, con caldo forte, tram 28 e Sintra pieni e code lunghe ovunque. Novembre-marzo è mite per gli standard europei, ma piovoso e con giornate più corte.',
  durataConsigliata:
    '4 giorni, uno dei quali tutto per la gita a Sintra. L\'itinerario non arriva a Porto né al resto del Portogallo.',
  budgetIndicativo:
    'Lisbona è ancora tra le capitali più economiche dell\'Europa occidentale, anche se negli ultimi anni i prezzi sono saliti per la pressione turistica. Le voci fisse sono gli ingressi di Sintra (Palácio da Pena circa 20-25€, Quinta da Regaleira circa 15€) e il treno da Lisbona (circa 5€ a tratta).',
  stileViaggio: ['città', 'storia', 'mare', 'gastronomia'],
  scheda: {
    documenti:
      'Il Portogallo è nell\'Unione Europea e nell\'area Schengen: ai cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Euro (€), come in Italia: non serve cambiare.',
    pagamenti:
      'Carte e contactless funzionano ovunque, anche nei piccoli negozi e nei chioschi del centro. Qualche contante fa comodo per i venditori ambulanti e i piccoli caffè di quartiere.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. In città la copertura 4G/5G è buona; può calare un po\' sulle colline boscose intorno a Sintra.',
    salute:
      'La tessera europea di assicurazione malattia (TEAM) è valida. Non sono richieste vaccinazioni. A Lisbona l\'acqua del rubinetto è potabile.',
    sicurezza:
      'Per gli standard europei Lisbona è sicura, ma nei punti più turistici i borseggi sono frequenti. Il bersaglio più segnalato è il tram 28, spesso pieno fino all\'inverosimile; seguono le stazioni delle funicolari (Elevador da Glória, Elevador da Bica) e Baixa, Chiado e Alfama nelle ore di punta serali. La regola è quella solita (borsa davanti, tasche chiuse, attenzione in più sul tram 28), e qui conviene ripeterla perché è il caso più frequente.',
    trasportiInterni:
      'Il centro si visita bene a piedi, ma Lisbona sta su sette colline e le salite sono tante e vere. Per questo ci sono i tram storici (il 28 su tutti), le funicolari (elevadores) e un ascensore panoramico, l\'Elevador de Santa Justa, oltre a metro, autobus e treni suburbani, che si pagano quasi sempre con la carta contactless Viva Viagem/Navegante. Per Sintra il modo più semplice ed economico è il treno regionale dalla stazione di Rossio, circa 40 minuti. Per un soggiorno tra Lisbona e Sintra l\'auto a noleggio non serve.',
    costoVita: 'Medio-basso per gli standard dell\'Europa occidentale: pranzo semplice 10-12€, cena normale 15-20€ a testa, un caffè (bica) con un pastel de nata spesso sotto i 3€.',
    lingua: 'Portoghese. L\'inglese è diffuso nel centro storico, negli hotel e tra i più giovani; qualche parola di portoghese (bom dia, obrigado/a) fa sempre piacere.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi, per quelle a tre poli con messa a terra può servire un adattatore.',
    fusoOrario: 'UTC+0 (WET): un\'ora indietro rispetto all\'Italia tutto l\'anno, anche con l\'ora legale. Alle 12:00 in Italia a Lisbona sono le 11:00.',
    clima:
      'Mediterraneo con influenza atlantica. Le estati, da giugno ad agosto, sono calde e asciutte, ma il vento le rende meno afose che nel Mediterraneo interno. Gli inverni, da novembre a marzo, sono miti e piovosi, di rado sotto i 5°C. Per camminare tutto il giorno tra le colline le stagioni migliori sono primavera e autunno.',
    festivita:
      'Giugno è il mese delle Festas de Lisboa, che culminano nella notte di Santo António (12-13 giugno): sardine alla griglia per strada, musica e feste di quartiere in tutta l\'Alfama. Sono belle da vivere, ma la città è molto più affollata del solito. Il 10 giugno è la Festa nazionale del Portogallo.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Lisbona.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImage: '/images/portogallo/portogallo-paese.jpg',
  heroImageAlt: 'Il Miradouro de Santa Luzia a Lisbona con le azulejos, i tetti dell\'Alfama e il fiume Tago sullo sfondo',
  tripPrincipaleSlug: 'lisbona-weekend',
}
