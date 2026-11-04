import type { Paese } from '@/lib/types'

// Scheda Paese costruita su ricerca documentale (portale eVisa e linee guida
// dell'Immigrazione tanzaniana, tariffe ufficiali NCAA, avviso dell'Ambasciata
// d'Italia a Dar es Salaam sull'assicurazione di Zanzibar, tariffe TANAPA come
// riportate dagli operatori). Rick ha fatto Serengeti, Ngorongoro, Tarangire,
// lago Manyara e Zanzibar, con il safari di Suricata Safaris. Non c'è un viaggio
// in src/content/viaggi: tripPrincipaleSlug resta vuoto e la pagina Paese
// rimanda a /viaggi e usa la scheda pratica.

export const tanzania: Paese = {
  slug: 'tanzania',
  nome: 'Tanzania',
  continente: 'Africa',
  titolo: 'Tanzania: safari nel nord e mare a Zanzibar',
  descrizione:
    "Il circuito nord dei parchi, con Serengeti, il cratere di Ngorongoro, Tarangire e il lago Manyara, e poi Zanzibar, tra i vicoli di Stone Town e le spiagge bianche dell'oceano Indiano. Io il safari l'ho fatto con Suricata Safaris. Qui trovi come organizzarlo: visto, park fee, stagioni della Grande Migrazione e voli interni.",
  periodoMigliore: 'da giugno a ottobre per i safari nella stagione secca; da dicembre a marzo per le nascite degli gnu nel Serengeti meridionale',
  durataConsigliata: '4-7 giorni di safari nel circuito nord, più 4-5 giorni a Zanzibar',
  budgetIndicativo:
    "il safari è la voce più pesante: i park fee si pagano a persona e a giornata (circa 71-83 $ nel Serengeti, 70,80 $ a Ngorongoro) e la discesa nel cratere costa 295 $ a veicolo; un safari di gruppo di 4 giorni con Suricata parte da circa 858 $ a persona (indicativo)",
  scheda: {
    documenti:
      "Serve il passaporto con almeno 6 mesi di validità residua e una pagina libera. Il visto turistico (Ordinary Visa, ingresso singolo) costa 50 $ e vale fino a 90 giorni: si richiede online solo sul portale ufficiale visa.immigration.go.tz, con pagamento con carta, e l'esame richiede fino a dieci giorni, quindi conviene farlo con anticipo. All'arrivo va mostrato il biglietto di ritorno. Lo stesso visto vale per il continente e per Zanzibar. Per Zanzibar c'è in più un'assicurazione di viaggio obbligatoria dal 1° ottobre 2024: 44 $ a persona, valida 92 giorni, venduta solo dalla Zanzibar Insurance Corporation (si compra su visitzanzibar.go.tz o all'arrivo) e da pagare anche se si ha già un'altra polizza.",
    valuta:
      "Scellino tanzaniano (TZS). Safari, park fee, voli interni e molti hotel ragionano in dollari: conviene portare dollari in banconote recenti e in buono stato, perché quelle vecchie o rovinate vengono spesso rifiutate.",
    pagamenti:
      "Nei safari organizzati i park fee li paga l'operatore e di solito sono già nel prezzo del pacchetto. Carte accettate negli hotel e nei lodge di fascia media e alta, contanti per mercati, piccoli ristoranti, taxi e mance (a guide, autisti e personale dei campi la mancia è un'abitudine).",
    connettivita:
      'SIM locali (Vodacom e Airtel sono le reti più diffuse) acquistabili in aeroporto e in città col passaporto. Copertura buona ad Arusha e a Zanzibar, scarsa o assente in molte zone dei parchi: nei campi tendati spesso non c\'è campo.',
    salute:
      "Il certificato di vaccinazione contro la febbre gialla è richiesto solo a chi arriva da un Paese a rischio di trasmissione, compresi gli scali di più di 12 ore in un aeroporto di quei Paesi (per esempio Nairobi o Addis Abeba): chi vola dall'Italia con scalo in Europa o nel Golfo di norma non ne ha bisogno, ma va controllato in base alla rotta. La malaria è presente: profilassi e repellenti vanno decisi prima con un centro di medicina dei viaggi. Acqua solo in bottiglia.",
    sicurezza:
      "Le mete turistiche del nord e Zanzibar si visitano con la normale prudenza. Dal 2019 in Tanzania sono vietati i sacchetti di plastica, anche nel bagaglio: meglio non portarne. A Stone Town, città a maggioranza musulmana, fuori dalle spiagge si gira con spalle e ginocchia coperte. Prima di partire va controllata la scheda aggiornata su viaggiaresicuri.it e conviene registrarsi su Dove siamo nel mondo.",
    trasportiInterni:
      "Per il circuito nord si arriva al Kilimanjaro International Airport (JRO), tra Arusha e Moshi; l'aeroporto di Arusha (ARK) serve i voli interni e quelli verso le piste nei parchi. Per Zanzibar c'è l'aeroporto di Unguja (ZNZ), collegato con voli diretti da Arusha e dal Kilimanjaro, oppure il traghetto veloce da Dar es Salaam. Nei parchi ci si muove in fuoristrada con autista-guida: le distanze sono lunghe e da Arusha al Serengeti centrale servono buona parte di una giornata di strada.",
    costoVita:
      "Il safari costa più del resto del viaggio, soprattutto per i park fee giornalieri: nel Serengeti l'ingresso è di circa 83 $ a persona in alta stagione e 71 $ in bassa, più la tassa di pernottamento nei campi; a Ngorongoro 70,80 $ a persona ogni 24 ore più 295 $ a veicolo per scendere nel cratere. Il campeggio costa molto meno dei lodge, e la differenza si sente. A Zanzibar cibo e trasporti sono economici, i resort sulla spiaggia molto meno.",
    lingua: "Swahili e inglese. Nei parchi, negli hotel e con le guide l'inglese basta; qualche parola di swahili («jambo», «asante») fa sempre piacere.",
    elettricita: '230V, 50Hz, prese di tipo G (inglese) e D: serve un adattatore universale.',
    fusoOrario: "UTC+3 tutto l'anno: due ore avanti rispetto all'Italia d'inverno, un'ora durante la nostra ora legale.",
    clima:
      "Tropicale, mitigato dall'altitudine nel nord: di giorno caldo, di notte e all'alba fresco, e sul bordo del cratere di Ngorongoro fa proprio freddo. Stagione secca da giugno a ottobre, la migliore per vedere gli animali; piogge lunghe da marzo a maggio e piogge brevi tra novembre e dicembre. A Zanzibar caldo umido tutto l'anno.",
    festivita:
      "Zanzibar è a maggioranza musulmana: durante il Ramadan (indicativamente dall'8 febbraio al 9 marzo 2027) a Stone Town molti locali restano chiusi di giorno e i ritmi rallentano. Natale, Capodanno e luglio-agosto sono l'altissima stagione dei safari: lodge e campi migliori vanno prenotati mesi prima.",
    emergenze: "Ambasciata d'Italia a Dar es Salaam. Nei parchi il primo riferimento è l'operatore del safari: conviene avere sempre con sé il suo numero e quello dell'assicurazione sanitaria.",
    aggiornatoAl: 'novembre 2026',
  },
  stileViaggio: ['safari', 'natura', 'campeggio', 'mare'],
  heroImageAlt: 'Un\'acacia solitaria nella savana del Serengeti al tramonto, con le colline all\'orizzonte',
  heroImage: '/images/tanzania/serengeti-savana.jpg',
  tripPrincipaleSlug: '',
}
