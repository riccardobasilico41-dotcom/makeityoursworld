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
    'Istanbul fra due continenti, i camini delle fate della Cappadocia visti dalla mongolfiera, le vasche bianche di Pamukkale, le città greco-romane di Efeso e Afrodisia e il mare turchese della costa licia fra Fethiye, Kaş e Antalya.',
  periodoMigliore: 'da aprile a giugno e da settembre a ottobre',
  durataConsigliata: '12-16 giorni',
  budgetIndicativo:
    'indicativamente 80-130 € al giorno a persona in fascia media, esclusi voli; i musei principali si pagano in euro e sono cari (Santa Sofia 25 €, Topkapı con harem intorno ai 50 €), la mongolfiera da sola costa 180-350 €',
  scheda: {
    documenti:
      'Ai cittadini italiani non serve il visto per soggiorni turistici fino a 90 giorni su 180. Si entra col passaporto o con la carta d\'identità valida per l\'espatrio, in tutti e due i casi con almeno 150 giorni di validità residua dalla data d\'ingresso. La carta d\'identità cartacea o con timbro di proroga può dare problemi: meglio il passaporto o la carta elettronica.',
    valuta:
      'Lira turca (TRY), con un\'inflazione molto alta: a fine 2026 indicativamente oltre 50 lire per un euro, e i prezzi locali cambiano di mese in mese. Musei statali, mongolfiere, hotel e molti tour hanno i prezzi direttamente in euro.',
    pagamenti:
      'Carte accettate quasi ovunque, anche nei piccoli negozi; sui mezzi si paga con l\'Istanbulkart ricaricabile. Contanti in lire per mercati, dolmuş, mance e bagni pubblici. Al POS meglio rifiutare sempre il pagamento in euro (la conversione dinamica è sfavorevole) e scegliere la lira.',
    connettivita:
      'SIM Turkcell, Vodafone e Türk Telekom in vendita in aeroporto col passaporto, più care che nei negozi in città; i telefoni stranieri con SIM locale vengono bloccati dopo 120 giorni. Le eSIM turistiche sono la soluzione più semplice. Copertura buona anche lungo la costa e in Cappadocia.',
    salute:
      'Nessuna vaccinazione obbligatoria. La sanità privata è buona nelle città e nelle località turistiche, ma senza assicurazione costa: la polizza sanitaria è consigliata. Meglio non bere l\'acqua del rubinetto; d\'estate fa molto caldo sia sulla costa sia all\'interno.',
    sicurezza:
      'Le zone turistiche di Istanbul, Cappadocia, Egeo e Mediterraneo si visitano con normale prudenza. Viaggiare Sicuri sconsiglia le aree vicine al confine con la Siria e raccomanda attenzione a manifestazioni e luoghi affollati per il rischio terrorismo, presente in tutto il Paese. La Turchia è zona sismica. I rischi concreti per il turista sono le piccole truffe (bar con conto gonfiato, lustrascarpe, taxi) e il traffico.',
    trasportiInterni:
      'Voli interni economici (Turkish Airlines, AJet, Pegasus, SunExpress) fra Istanbul, Kayseri o Nevşehir per la Cappadocia, Denizli, Izmir, Dalaman e Antalya. Bus a lunga percorrenza comodi ed economici, anche notturni. Sulla costa licia l\'auto a noleggio è indispensabile; il noleggiatore include il dispositivo HGS per i pedaggi. A Istanbul metro, tram, traghetti e BiTaksi.',
    costoVita:
      'Cibo di strada e trasporti costano poco; ristoranti e hotel nelle zone turistiche sono ormai ai livelli dell\'Italia; gli ingressi dei musei statali sono cari e in euro.',
    lingua: 'Turco. Inglese diffuso nelle zone turistiche; sulla costa molti operatori parlano anche tedesco e russo.',
    elettricita: '230V, 50Hz, prese di tipo C e F: le spine italiane a due poli entrano, le tripolari no.',
    fusoOrario: 'UTC+3 tutto l\'anno, senza ora legale: 2 ore avanti rispetto all\'Italia d\'inverno, 1 ora in estate.',
    clima:
      'Mediterraneo sulla costa (estati calde e secche, inverni miti e piovosi), continentale in Cappadocia (estati calde, inverni freddi con neve), umido e variabile a Istanbul.',
    festivita:
      'Durante il Ramadan (indicativamente dall\'8 febbraio al 9 marzo 2027) i musei restano aperti; le due feste religiose nazionali (Ramazan Bayramı e Kurban Bayramı) riempiono bus, voli e località di mare, e tutto richiede più tempo.',
    emergenze: 'Numero unico 112. Ambasciata d\'Italia ad Ankara, Consolato generale a Istanbul, Consolato a Smirne.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['città', 'cultura', 'archeologia', 'mare', 'road trip'],
  heroImageAlt: 'Le valli di tufo della Cappadocia viste dall\'alto da una mongolfiera',
  heroImage: '/images/copertine/turchia-itinerario.jpg',
  tripPrincipaleSlug: 'turchia-itinerario',
}
