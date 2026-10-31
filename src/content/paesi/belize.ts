import type { Paese } from '@/lib/types'

// Paese visitato di persona: i ricordi stanno nelle destinazioni, qui solo
// informazioni pratiche (documenti, costi, trasporti).
// tripPrincipaleSlug punta all'itinerario combinato del Centro America
// (src/content/viaggi/51-centro-america-itinerario.md), che copre Belize
// nella Parte 1 insieme al Guatemala.

export const belize: Paese = {
  slug: 'belize',
  nome: 'Belize',
  continente: 'America Centrale',
  titolo: 'Belize: la seconda barriera corallina del mondo, il Blue Hole e le grotte maya',
  descrizione:
    'L\'unico paese del Centro America dove si parla inglese, e quello col mare più bello: la seconda barriera corallina del pianeta, il Great Blue Hole, isole senza auto dove si va «go slow» e, nell\'entroterra, una delle grotte archeologiche più impressionanti al mondo.',
  periodoMigliore:
    'dicembre-aprile, stagione secca e mare più limpido; da giugno a novembre stagione delle piogge e degli uragani, con prezzi più bassi',
  durataConsigliata: '7-10 giorni per unire le isole (cayes) e l\'entroterra del Cayo',
  budgetIndicativo:
    'il paese più caro della regione: il dollaro del Belize è agganciato 2:1 al dollaro USA e i prezzi sono più vicini ai Caraibi che al Centro America (immersioni al Blue Hole 300-400$, grotta ATM 100-140$)',
  scheda: {
    documenti:
      'Passaporto valido; la maggior parte dei visitatori, italiani compresi, entra senza visto per soggiorni turistici fino a 30 giorni. Possono chiedere il biglietto di ritorno e la prova di avere fondi sufficienti. All\'uscita c\'è una tassa di partenza, di solito già compresa nel biglietto aereo, che invece si paga a parte se si esce via terra verso Guatemala o Messico.',
    valuta:
      'Dollaro del Belize (BZD), agganciato al dollaro USA con cambio fisso 2:1. I dollari americani sono accettati quasi ovunque: si può viaggiare con USD in contanti senza cambiare nulla, e spesso il resto arriva in BZD.',
    pagamenti:
      'Ci sono bancomat in tutte le principali località turistiche e nelle città. Le strutture turistiche accettano le carte, spesso con un supplemento del 3-5%; per tour, taxi, piccoli ristoranti e water taxi servono i contanti.',
    connettivita:
      'Rete GSM con due operatori principali, Digi (ex BTL) e Smart. Copertura buona nei centri abitati e sulle isole maggiori, molto più irregolare nell\'interno e nelle zone remote. Per soggiorni brevi una eSIM è comoda.',
    salute:
      'Nessuna vaccinazione obbligatoria, salvo la febbre gialla per chi arriva da paesi a rischio. Consigliate le profilassi di routine più epatite A e tifo. Acqua in bottiglia fuori dalle strutture principali e molto repellente: ci sono dengue e zika.',
    sicurezza:
      'Le zone turistiche (le cayes, San Ignacio, Placencia, Hopkins) sono considerate tranquille e il rischio si limita ai piccoli furti. A Belize City serve più attenzione, soprattutto dopo il tramonto: il consiglio ricorrente è usare i taxi invece di girare a piedi la sera.',
    trasportiInterni:
      'Bus lungo le highway principali (economici ma lenti), water taxi dal terminal di Belize City per Caye Caulker e Ambergris Caye e voli interni con Tropic Air e Maya Island Air: cari, ma sulle lunghe distanze, viste le strade, risolvono. Si guida a destra.',
    costoVita:
      'Il paese più caro del Centro America, con prezzi più vicini ai Caraibi che ai paesi confinanti: si ragiona in dollari, soprattutto sulle isole e per le attività subacquee.',
    lingua:
      'Inglese, unica lingua ufficiale: è l\'ex Honduras Britannico e l\'unico paese anglofono della regione. Sono diffusi anche il creolo belizeano, lo spagnolo, il garifuna e alcune lingue maya.',
    elettricita: '110-120V, 60Hz, prese di tipo A e B (standard nordamericano): serve un adattatore dall\'Italia.',
    fusoOrario: 'UTC-6 tutto l\'anno, senza ora legale: 7 ore indietro rispetto all\'Italia in ora legale, 8 in inverno.',
    clima:
      'La stagione secca, da dicembre ad aprile, è la migliore per il mare limpido e la visibilità sott\'acqua. Da giugno a novembre è la stagione delle piogge, che coincide con quella degli uragani: prezzi più bassi, ma si rischia sul serio di perdere giornate o di trovare chiusure (la grotta ATM può chiudere dopo piogge intense).',
    festivita:
      'Il Garifuna Settlement Day, il 19 novembre, è la festa più sentita della costa sud (Dangriga, Hopkins) e celebra l\'arrivo del popolo garifuna. A settembre le September Celebrations, fra il 10 (Battle of St. George\'s Caye) e il 21 (indipendenza), coinvolgono tutto il paese.',
    emergenze:
      'Numero unico 911. In Belize non c\'è una rappresentanza diplomatica italiana residente: l\'assistenza consolare fa capo alla sede competente per l\'area, che conviene controllare su Viaggiare Sicuri prima di partire.',
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['mare', 'diving', 'grotte', 'cultura maya'],
  heroImageAlt: 'Pontile di legno con una barca e una goletta a vela sul mare dei Caraibi a Caye Caulker, Belize',
  heroImage: '/images/belize/belize-paese.jpg',
  tripPrincipaleSlug: 'centro-america-itinerario',
}
