import type { Paese } from '@/lib/types'

// Paese visitato di persona: i ricordi stanno nelle destinazioni, qui solo
// informazioni pratiche (documenti, costi, trasporti).
// tripPrincipaleSlug punta all'itinerario combinato del Centro America
// (src/content/viaggi/51-centro-america-itinerario.md), che copre il
// Guatemala nella Parte 1 insieme al Belize; è anche il Paese scelto come
// paeseSlug canonico del TripMeta (vedi la nota in viaggi-dati/centro-america-itinerario.ts).

export const guatemala: Paese = {
  slug: 'guatemala',
  nome: 'Guatemala',
  continente: 'America Centrale',
  titolo: 'Guatemala: Antigua, il lago Atitlán, Tikal e i vulcani da scalare',
  descrizione:
    'Il paese più pieno del Centro America: una capitale coloniale fra tre vulcani, un lago vulcanico con villaggi maya raggiungibili solo in barca, le piramidi di Tikal che spuntano dalla giungla del Petén e la possibilità di dormire davanti a un vulcano in eruzione.',
  periodoMigliore:
    'novembre-aprile, stagione secca; da maggio a ottobre piove quasi ogni pomeriggio, con strade di montagna più difficili',
  durataConsigliata: '10-14 giorni per Antigua, Atitlán, Semuc Champey e Tikal senza correre',
  budgetIndicativo:
    'tra i paesi più economici della regione: ostelli e comedor a pochi euro, shuttle turistici tra le tappe principali sui 15-30€ a tratta, trekking all\'Acatenango sui 60-120€',
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua dall\'ingresso. Per i cittadini italiani e UE nessun visto per soggiorni turistici fino a 90 giorni. Il vaccino contro la febbre gialla è obbligatorio solo per chi arriva da un paese a rischio di trasmissione.',
    valuta:
      'Quetzal guatemalteco (GTQ), indicativamente 1€ = 8-9 GTQ. Attenzione a una regola poco nota: non si possono portare nel paese più di 10.000 dollari USA (o l\'equivalente) in contanti, e chi la viola rischia pene severe.',
    pagamenti:
      'Bancomat nelle città e nelle località turistiche: di solito sono il modo più semplice per avere quetzales. Hotel e ristoranti turistici accettano le carte, ma per mercati, lance sul lago Atitlán, tuk tuk e villaggi servono i contanti. Conviene tenere sempre tagli piccoli.',
    connettivita:
      'Tre operatori: Tigo (la copertura migliore), Claro e Movistar. La SIM prepagata costa indicativamente 20-50 GTQ e si registra col passaporto; i pacchetti dati partono da circa 30 GTQ. Una eSIM evita la registrazione sul posto.',
    salute:
      'Nessuna vaccinazione obbligatoria, salvo la febbre gialla per chi arriva da paesi a rischio. Consigliate le profilassi di routine più epatite A e tifo. Non bere l\'acqua del rubinetto. La profilassi antimalarica riguarda solo alcune zone di bassa quota, il Petén in particolare: va valutata con un centro di medicina dei viaggi.',
    sicurezza:
      'La criminalità è alta nelle zone urbane più povere, mentre gli itinerari turistici classici sono di solito tranquilli. I consigli ricorrenti: attenzione alle proprie cose nella capitale e sui mezzi pubblici, shuttle turistici invece dei bus di linea quando si hanno i bagagli, niente spostamenti di notte fuori città.',
    trasportiInterni:
      'Gli shuttle turistici collegano tutte le tappe principali (Antigua, Atitlán, Lanquín, Flores) e quasi tutti i viaggiatori usano quelli. I chicken bus costano pochissimo ma sono scomodi, poco adatti coi bagagli. Per il Petén conviene il volo interno da Città del Guatemala a Flores. Le strade sterrate sono spesso in cattivo stato e i tempi reali superano quasi sempre quelli delle mappe.',
    costoVita:
      'Fra i paesi più economici del Centro America: un letto in ostello e i pasti nei comedor costano pochi euro, gli shuttle fra le tappe principali sui 15-30€ a tratta.',
    lingua: 'Spagnolo, affiancato da oltre venti lingue maya ancora vive (k\'iche\', kaqchikel, q\'eqchi\', tz\'utujil e altre). L\'inglese è diffuso solo nei contesti turistici.',
    elettricita: '120V, 60Hz, prese di tipo A e B (standard nordamericano): serve un adattatore dall\'Italia.',
    fusoOrario: 'UTC-6 tutto l\'anno, senza ora legale: 7 ore indietro rispetto all\'Italia in ora legale, 8 in inverno.',
    clima:
      'La stagione secca, da novembre ad aprile, è la migliore per viaggiare; da maggio a ottobre piove quasi ogni pomeriggio, le strade di montagna sono più difficili e a Semuc Champey l\'acqua è meno limpida. Il clima cambia molto con la quota: Antigua e Atitlán sono fresche la sera, il Petén è caldo e umido tutto l\'anno.',
    festivita:
      'La Semana Santa di Antigua, con i tappeti di segatura e le processioni, è fra le più celebri dell\'America Latina: bellissima, ma con prezzi e folla molto più alti. Il 1° novembre, a Sumpango e Santiago Sacatepéquez, si tiene la festa degli aquiloni giganti per il Día de Todos los Santos.',
    emergenze:
      'Numeri utili: 110 per la polizia nazionale, 1500 per la polizia turistica (Asistur), 122/123 per vigili del fuoco e ambulanza. L\'Ambasciata d\'Italia si trova a Città del Guatemala.',
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['vulcani', 'cultura maya', 'natura', 'on the road'],
  heroImageAlt: 'Tramonto sul lago Atitlán con i vulcani all\'orizzonte visto da San Marcos, Guatemala',
  heroImage: '/images/guatemala/guatemala-paese.jpg',
  tripPrincipaleSlug: 'centro-america-itinerario',
}
