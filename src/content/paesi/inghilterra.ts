import type { Paese } from '@/lib/types'

// Scheda verificata a novembre 2026 su gov.uk (ETA, ingresso dei cittadini UE, patente,
// limiti alcol), nhs.uk (TEAM), visitbritain.com (prese), tfl.gov.uk (Congestion Charge).

export const inghilterra: Paese = {
  slug: 'inghilterra',
  nome: 'Inghilterra',
  continente: 'Europa',
  tipo: 'regione',
  stato: 'Regno Unito',
  titolo: 'Inghilterra: Londra, le Cotswolds, il nord di Manchester e Liverpool, Brighton',
  descrizione:
    'Londra con i musei gratuiti, il Tamigi e i quartieri a piedi, poi la campagna inglese: i villaggi di pietra dorata delle Cotswolds, i college di Oxford e le terme romane di Bath. Al nord Manchester e Liverpool, con la Premier League, e i parchi del Peak District e del Lake District; a sud Richmond Park, Brighton e le scogliere delle Seven Sisters. Un Paese facile in treno, con l\'auto solo per i borghi e i parchi.',
  periodoMigliore: 'da maggio a settembre per le giornate lunghe; aprile e ottobre sono più tranquilli',
  durataConsigliata: '7-8 giorni',
  budgetIndicativo: 'alto: Londra è tra le città più care d\'Europa per dormire',
  scheda: {
    documenti:
      'Il Regno Unito non è nell\'Unione Europea. Dal 2 aprile 2025 i cittadini italiani hanno bisogno dell\'ETA, l\'autorizzazione elettronica di viaggio: si chiede online su gov.uk o con l\'app ufficiale UK ETA, costa 20 sterline (2026), vale 2 anni o fino alla scadenza del passaporto e copre più viaggi fino a 6 mesi ciascuno. Va evitato chi la vende a prezzo più alto con siti che imitano quello del governo. Serve il passaporto: la carta d\'identità è accettata solo in casi particolari, per esempio per chi ha lo status di residente.',
    valuta: 'Sterlina britannica (GBP).',
    pagamenti:
      'Carte e pagamenti contactless funzionano quasi ovunque, anche per piccole spese, sui bus e nella metropolitana di Londra. Un po\' di contante serve nei villaggi e nei mercati.',
    connettivita:
      'Il Regno Unito non è nell\'UE: il roaming «come a casa» non è garantito. Prima di partire va controllata l\'offerta del proprio operatore.',
    salute:
      'La TEAM, la tessera sanitaria europea, copre le cure che diventano necessarie durante il soggiorno nel servizio pubblico NHS. Non copre il rientro sanitario né le cure private: un\'assicurazione di viaggio resta consigliata. Nessuna vaccinazione richiesta.',
    sicurezza:
      'Paese sicuro. A Londra attenzione ai borseggi nelle zone affollate e in metropolitana. Si guida a sinistra, e il limite di alcol alla guida in Inghilterra è di 80 mg per 100 ml di sangue, più alto che in Scozia. Il consiglio di Rick è uno solo: chi guida non beve.',
    trasportiInterni:
      'A Londra metropolitana e bus, pagando con la carta contactless o con la Oyster. L\'auto in città non serve: in centro si paga la Congestion Charge, 18 sterline al giorno (2026), più la ULEZ per i veicoli più inquinanti. Per Oxford, le Cotswolds e Bath ci sono i treni da Paddington; per girare i villaggi l\'auto è la soluzione più comoda. La patente italiana vale senza permesso internazionale.',
    costoVita:
      'Caro, soprattutto per dormire a Londra. I grandi musei nazionali, come il British Museum e il Natural History Museum, sono gratuiti.',
    lingua: 'Inglese.',
    elettricita: '230V, 50Hz, prese di tipo G a tre poli rettangolari: serve un adattatore.',
    fusoOrario: 'Un\'ora indietro rispetto all\'Italia, tutto l\'anno (anche il Regno Unito ha l\'ora legale).',
    clima:
      'Temperato e variabile: può piovere in qualunque mese, e nella stessa giornata si passa dal sole alle nuvole. D\'estate di solito fa caldo ma raramente troppo. Conviene vestirsi a strati e tenere una giacca impermeabile.',
    emergenze: 'Numero di emergenza 999. L\'Ambasciata d\'Italia si trova a Londra.',
    aggiornatoAl: 'novembre 2026',
  },
  stileViaggio: ['città', 'campagna', 'treno', 'musei'],
  heroImageAlt: 'Tower Bridge illuminato sul Tamigi al tramonto, con il cielo rosa sopra Londra',
  heroImage: '/images/viaggi/londra-cotswolds/giorno-03-tower-bridge.webp',
  tripPrincipaleSlug: 'londra-cotswolds',
}
