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
    'Settemila isole tra lagune di roccia calcarea a El Nido, laghi e relitti a Coron, sardine e tartarughe a Moalboal, le Chocolate Hills di Bohol e le onde di Siargao: un viaggio di mare, barche e voli brevi, da organizzare intorno alla stagione dei tifoni.',
  periodoMigliore: 'da dicembre a maggio, con gennaio-aprile come finestra più asciutta',
  durataConsigliata: '2-3 settimane',
  budgetIndicativo:
    'indicativamente 60-110 € al giorno a persona in fascia media, esclusi voli internazionali; i voli interni e le escursioni in barca sono le voci che pesano di più',
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. Per i cittadini italiani ingresso senza visto per turismo fino a 30 giorni, prorogabile presso gli uffici del Bureau of Immigration; serve un biglietto di uscita dal Paese entro il periodo consentito, che le compagnie aeree controllano all\'imbarco. Registrazione obbligatoria e gratuita sul portale ufficiale eTravel (etravel.gov.ph) entro le 72 ore precedenti all\'arrivo, con QR code da mostrare in aeroporto: attenzione ai siti che la fanno pagare.',
    valuta:
      'Peso filippino (PHP), indicativamente 63-67 pesos per un euro (fine 2026, indicativo).',
    pagamenti:
      'Carte accettate negli hotel, nei ristoranti delle città e nei resort; GCash e Maya diffusissimi tra i locali. Contanti indispensabili sulle isole, per le escursioni in barca, i tricycle e le tasse ambientali: gli ATM a El Nido, Coron e Siargao sono pochi, a volte vuoti, e applicano commissioni di 250-500 PHP a prelievo. Conviene arrivare a Palawan e Siargao già con i contanti.',
    connettivita:
      'SIM Smart, Globe e DITO in aeroporto con il passaporto (registrazione obbligatoria); eSIM turistiche diffuse. Copertura buona nelle città, debole o assente su molte isole e in barca.',
    salute:
      'Nessuna vaccinazione obbligatoria arrivando dall\'Italia; consigliate epatite A e tifo. Rischio di dengue tutto l\'anno, maggiore nella stagione delle piogge: repellente e maniche lunghe al tramonto. Acqua solo in bottiglia. Assicurazione sanitaria con rimpatrio indispensabile, specifica per chi fa immersioni.',
    sicurezza:
      'Le mete turistiche di Palawan, Visayas e Siargao si visitano con normale prudenza. Viaggiare Sicuri sconsiglia le zone occidentali e centrali di Mindanao e l\'arcipelago di Sulu per terrorismo e rapimenti; Manila richiede attenzione per borseggi e truffe. Il rischio naturale è il più concreto: tifoni da giugno a novembre, terremoti e vulcani attivi. Le barche si fermano con il mare grosso e la guardia costiera sospende le partenze durante le allerte.',
    trasportiInterni:
      'Voli interni Cebu Pacific, Philippine Airlines e AirSwift (El Nido) tra Manila, Cebu, Puerto Princesa, Busuanga (Coron), Tagbilaran (Bohol) e Siargao; bagaglio spesso a pagamento a parte. Traghetti veloci OceanJet tra Cebu e Bohol, fast craft tra El Nido e Coron. Van tra Puerto Princesa ed El Nido, bus Ceres a Cebu, tricycle e scooter sulle isole. A Manila Grab per auto e taxi.',
    costoVita:
      'Basso per cibo locale e trasporti via terra (un pasto in una carinderia costa 2-4 €), medio per alloggi e ristoranti turistici, che a El Nido e Siargao sono saliti molto. Le escursioni in barca costano 20-40 € a persona, più le tasse ambientali.',
    lingua: 'Filippino (tagalog) e inglese, entrambe ufficiali: l\'inglese è parlato quasi ovunque. Nelle Visayas si parla cebuano.',
    elettricita: '220V, 60Hz, prese di tipo A, B e C: serve un adattatore per le spine italiane a tre poli e spesso anche per quelle a due.',
    fusoOrario: 'UTC+8 tutto l\'anno: 7 ore avanti rispetto all\'Italia d\'inverno, 6 in estate.',
    clima:
      'Tropicale. Stagione secca (amihan) da dicembre a maggio, calda da marzo a maggio; stagione delle piogge (habagat) da giugno a novembre, con tifoni più frequenti tra agosto e ottobre, soprattutto a Luzon e nelle Visayas orientali. Mare a 27-30 °C tutto l\'anno.',
    festivita:
      'La Settimana Santa (Pasqua) e il periodo di Natale-Capodanno riempiono voli, traghetti e resort: prenotare con mesi di anticipo. A gennaio il Sinulog a Cebu e l\'Ati-Atihan a Kalibo.',
    emergenze: 'Numero unico 911. Ambasciata d\'Italia a Manila (Makati).',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['mare', 'island hopping', 'immersioni', 'snorkeling', 'surf'],
  heroImageAlt: 'Lagune di acqua turchese tra falesie calcaree a El Nido, Palawan',
  tripPrincipaleSlug: 'filippine-itinerario',
}
