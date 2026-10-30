import type { Paese } from '@/lib/types'

// Scheda Paese costruita su ricerca documentale (Viaggiare Sicuri, Bureau of
// Immigration, Department of Tourism, compagnie aeree e di traghetti, guide recenti).
// Nessuna esperienza diretta: il viaggio collegato è una guida in lavorazione.

export const filippine: Paese = {
  slug: 'filippine',
  nome: 'Filippine',
  continente: 'Asia',
  titolo: 'Filippine: Palawan, Visayas e Siargao',
  descrizione:
    'Settemila isole: le lagune di roccia calcarea di El Nido, i laghi e i relitti di Coron, le sardine e le tartarughe di Moalboal, le Chocolate Hills di Bohol e le onde di Siargao. È un viaggio di mare, barche e voli brevi, da organizzare tenendo conto della stagione dei tifoni.',
  periodoMigliore: 'da dicembre a maggio, con gennaio-aprile come finestra più asciutta',
  durataConsigliata: '2-3 settimane',
  budgetIndicativo:
    'indicativamente 60-110 € al giorno a persona in fascia media, esclusi voli internazionali; i voli interni e le escursioni in barca sono le voci che pesano di più',
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. I cittadini italiani entrano senza visto per turismo fino a 30 giorni, prorogabili negli uffici del Bureau of Immigration; serve un biglietto di uscita dal Paese entro il periodo consentito, che le compagnie aeree controllano all\'imbarco. La registrazione sul portale ufficiale eTravel (etravel.gov.ph) è obbligatoria e gratuita, va fatta nelle 72 ore prima dell\'arrivo e dà un QR code da mostrare in aeroporto: attenzione ai siti che la fanno pagare.',
    valuta:
      'Peso filippino (PHP), indicativamente 63-67 pesos per un euro (fine 2026).',
    pagamenti:
      'Carte accettate negli hotel, nei ristoranti delle città e nei resort; tra i filippini sono diffusissimi GCash e Maya. Sulle isole i contanti sono indispensabili, per le escursioni in barca, i tricycle e le tasse ambientali: a El Nido, Coron e Siargao gli ATM sono pochi, a volte vuoti, e prendono commissioni di 250-500 PHP a prelievo. Conviene arrivare a Palawan e Siargao già con i contanti.',
    connettivita:
      'SIM Smart, Globe e DITO in aeroporto, con il passaporto (la registrazione è obbligatoria); le eSIM turistiche sono diffuse. Copertura buona nelle città, debole o assente su molte isole e in barca.',
    salute:
      'Arrivando dall\'Italia nessuna vaccinazione è obbligatoria; consigliate epatite A e tifo. La dengue c\'è tutto l\'anno, di più nella stagione delle piogge: repellente e maniche lunghe al tramonto. Acqua solo in bottiglia. Indispensabile un\'assicurazione sanitaria con rimpatrio, specifica per chi fa immersioni.',
    sicurezza:
      'Le mete turistiche di Palawan, Visayas e Siargao si visitano con la normale prudenza. Viaggiare Sicuri sconsiglia le zone occidentali e centrali di Mindanao e l\'arcipelago di Sulu per terrorismo e rapimenti; a Manila serve attenzione a borseggi e truffe. Il rischio più concreto è quello naturale: tifoni da giugno a novembre, terremoti e vulcani attivi. Con il mare grosso le barche si fermano, e durante le allerte la guardia costiera sospende le partenze.',
    trasportiInterni:
      'Voli interni Cebu Pacific, Philippine Airlines e AirSwift (El Nido) tra Manila, Cebu, Puerto Princesa, Busuanga (Coron), Tagbilaran (Bohol) e Siargao; il bagaglio spesso si paga a parte. Traghetti veloci OceanJet tra Cebu e Bohol, fast craft tra El Nido e Coron. Van tra Puerto Princesa ed El Nido, bus Ceres a Cebu, tricycle e scooter sulle isole. A Manila, Grab per auto e taxi.',
    costoVita:
      'Basso per il cibo locale e i trasporti via terra (un pasto in una carinderia costa 2-4 €), medio per alloggi e ristoranti turistici, che a El Nido e Siargao sono saliti molto. Le escursioni in barca costano 20-40 € a persona, più le tasse ambientali.',
    lingua: 'Filippino (tagalog) e inglese, entrambe ufficiali: l\'inglese si parla quasi ovunque. Nelle Visayas si parla cebuano.',
    elettricita: '220V, 60Hz, prese di tipo A, B e C: serve un adattatore per le spine italiane a tre poli e spesso anche per quelle a due.',
    fusoOrario: 'UTC+8 tutto l\'anno: 7 ore avanti rispetto all\'Italia d\'inverno, 6 in estate.',
    clima:
      'Tropicale. Stagione secca (amihan) da dicembre a maggio, calda da marzo a maggio; stagione delle piogge (habagat) da giugno a novembre, con tifoni più frequenti tra agosto e ottobre, soprattutto a Luzon e nelle Visayas orientali. Mare a 27-30 °C tutto l\'anno.',
    festivita:
      'La Settimana Santa (Pasqua) e il periodo di Natale-Capodanno riempiono voli, traghetti e resort: conviene prenotare con mesi di anticipo. A gennaio ci sono il Sinulog a Cebu e l\'Ati-Atihan a Kalibo.',
    emergenze: 'Numero unico 911. Ambasciata d\'Italia a Manila (Makati).',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['mare', 'island hopping', 'immersioni', 'snorkeling', 'surf'],
  heroImageAlt: 'Isole calcaree e acqua turchese nell\'arcipelago delle Calamian, attorno a Coron',
  heroImage: '/images/copertine/filippine-itinerario.jpg',
  tripPrincipaleSlug: 'filippine-itinerario',
}
