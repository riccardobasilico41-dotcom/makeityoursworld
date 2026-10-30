import type { Paese } from '@/lib/types'

// Scheda Paese costruita su ricerca documentale (Viaggiare Sicuri, Ministero della
// Cultura e del Turismo turco, siti di musei e trasporti, guide recenti). Nessuna
// esperienza diretta: il viaggio collegato è una guida in lavorazione.

export const turchia: Paese = {
  slug: 'turchia',
  nome: 'Turchia',
  continente: 'Medio Oriente',
  titolo: 'Turchia: Istanbul, Cappadocia e la costa licia',
  descrizione:
    'Istanbul a cavallo tra due continenti, i camini delle fate della Cappadocia visti dalla mongolfiera, le vasche bianche di Pamukkale, le città greco-romane di Efeso e Afrodisia e il mare turchese della costa licia tra Fethiye, Kaş e Antalya.',
  periodoMigliore: 'da aprile a giugno e da settembre a ottobre',
  durataConsigliata: '12-16 giorni',
  budgetIndicativo:
    'indicativamente 80-130 € al giorno a persona in fascia media, esclusi voli; i musei principali si pagano in euro e sono cari (Santa Sofia 25 €, Topkapı con harem intorno ai 50 €), la mongolfiera da sola costa 180-350 €',
  scheda: {
    documenti:
      'Per i cittadini italiani nessun visto per soggiorni turistici fino a 90 giorni in un periodo di 180. Si entra con passaporto oppure con carta d\'identità valida per l\'espatrio, in entrambi i casi con almeno 150 giorni di validità residua dalla data di ingresso. La carta d\'identità cartacea o con timbro di proroga può dare problemi: meglio il passaporto o la carta elettronica.',
    valuta:
      'Lira turca (TRY), soggetta a inflazione molto alta: a fine 2026 indicativamente oltre 50 lire per un euro, con prezzi locali che cambiano di mese in mese. Musei statali, mongolfiere, hotel e molti tour sono quotati direttamente in euro.',
    pagamenti:
      'Carte accettate quasi ovunque, anche nei piccoli negozi e sui mezzi tramite Istanbulkart ricaricabile. Contanti in lire per mercati, dolmuş, mance e bagni pubblici. Rifiutare sempre il pagamento in euro al POS (conversione dinamica sfavorevole) e scegliere la lira.',
    connettivita:
      'SIM Turkcell, Vodafone e Türk Telekom acquistabili in aeroporto col passaporto, care rispetto ai negozi in città; i telefoni stranieri con SIM locale vengono bloccati dopo 120 giorni. Le eSIM turistiche sono l\'opzione più semplice. Copertura buona anche lungo la costa e in Cappadocia.',
    salute:
      'Nessuna vaccinazione obbligatoria. Sanità privata buona nelle città e nelle località turistiche, cara senza assicurazione: polizza sanitaria consigliata. Acqua del rubinetto da evitare da bere; caldo forte in estate sulla costa e all\'interno.',
    sicurezza:
      'Le zone turistiche di Istanbul, Cappadocia, Egeo e Mediterraneo si visitano con normale prudenza. Viaggiare Sicuri sconsiglia le aree vicine al confine con la Siria e raccomanda attenzione a manifestazioni e luoghi affollati per il rischio terrorismo, presente in tutto il Paese. La Turchia è zona sismica. I rischi concreti per il turista sono le piccole truffe (bar con conto gonfiato, lustrascarpe, taxi) e il traffico.',
    trasportiInterni:
      'Voli interni economici (Turkish Airlines, AJet, Pegasus, SunExpress) tra Istanbul, Kayseri o Nevşehir per la Cappadocia, Denizli, Izmir, Dalaman e Antalya. Rete di bus a lunga percorrenza comoda ed economica, con notturni. Auto a noleggio indispensabile sulla costa licia, con dispositivo HGS per i pedaggi incluso dal noleggiatore. A Istanbul metro, tram, traghetti e BiTaksi.',
    costoVita:
      'Cibo da strada e trasporti economici, ristoranti e hotel nelle zone turistiche ormai su livelli simili all\'Italia; ingressi dei musei statali cari e in euro.',
    lingua: 'Turco. Inglese diffuso nelle zone turistiche; sulla costa molti operatori parlano anche tedesco e russo.',
    elettricita: '230V, 50Hz, prese di tipo C e F: le spine italiane a due poli entrano, le tripolari no.',
    fusoOrario: 'UTC+3 tutto l\'anno, senza ora legale: 2 ore avanti rispetto all\'Italia d\'inverno, 1 ora in estate.',
    clima:
      'Mediterraneo sulla costa (estati calde e secche, inverni miti e piovosi), continentale in Cappadocia (estati calde, inverni freddi con neve), umido e variabile a Istanbul.',
    festivita:
      'Durante il Ramadan (indicativamente dall\'8 febbraio al 9 marzo 2027) i musei restano aperti; le due feste nazionali religiose (Ramazan Bayramı e Kurban Bayramı) riempiono bus, voli e località di mare e allungano i tempi.',
    emergenze: 'Numero unico 112. Ambasciata d\'Italia ad Ankara, Consolato generale a Istanbul, Consolato a Smirne.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['città', 'cultura', 'archeologia', 'mare', 'road trip'],
  heroImageAlt: 'Mongolfiere sopra i camini delle fate della Cappadocia all\'alba',
  tripPrincipaleSlug: 'turchia-itinerario',
}
