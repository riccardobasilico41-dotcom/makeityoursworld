import type { Paese } from '@/lib/types'

// A differenza di Emirati e Qatar, trattati soprattutto come stopover,
// l\'Arabia Saudita ha un itinerario completo: è un paese che si apre al
// turismo dal 2019 e che richiede giorni, non ore. Nessun nome di hotel,
// ristorante o operatore è stato inventato. Le regole di ingresso e di
// comportamento in Arabia Saudita sono cambiate molto e in fretta negli ultimi
// anni: vanno riverificate sui canali ufficiali prima di partire, comprese
// quelle sull\'abbigliamento e sulle aree vietate ai non musulmani.

export const arabiaSaudita: Paese = {
  slug: 'arabia-saudita',
  nome: 'Arabia Saudita',
  continente: 'Medio Oriente',
  titolo: 'Arabia Saudita: il paese che fino al 2019 non si poteva visitare',
  descrizione:
    'Fino al 2019 il visto turistico non esisteva: si entrava per lavoro, per affari o per il pellegrinaggio, e basta. Oggi lo si ottiene online in pochi minuti, e si trova un paese diverso da tutti i vicini del Golfo. Ci sono le tombe nabatee di Hegra, gemelle di Petra e senza nessuno davanti, il centro storico di corallo di Jeddah, le montagne verdi dell\'Asir, che smentiscono l\'idea di un\'Arabia tutta deserto, e una società che cambia in fretta, piena di contraddizioni.',
  periodoMigliore:
    'da novembre a marzo per tutto il paese; AlUla e il deserto danno il meglio tra dicembre e febbraio. D\'estate nell\'interno si superano i 45-50 gradi e a Jeddah l\'umidità rende la costa insopportabile. Fanno eccezione le montagne dell\'Asir, fresche anche d\'estate.',
  durataConsigliata:
    '12-14 giorni per Jeddah, AlUla, Riyadh con Diriyah e le montagne dell\'Asir; 8-9 giorni per il nucleo Jeddah-AlUla-Riyadh; 4 giorni per chi arriva con un visto stopover e vuole vedere almeno AlUla.',
  budgetIndicativo:
    'più alto di quanto ci si aspetti. Ad AlUla gli alloggi sono pochi e cari, i voli interni sono indispensabili e con distanze così l\'auto a noleggio è quasi obbligatoria. La benzina invece costa pochissimo. Il visto elettronico costa intorno ai 130€, assicurazione sanitaria compresa.',
  stileViaggio: ['archeologia', 'deserto', 'montagna', 'paese in trasformazione'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. I cittadini italiani chiedono il **visto turistico elettronico** sul portale ufficiale visa.visitsaudi.com: costa circa 535 riyal (intorno ai 130 euro, con l\'assicurazione sanitaria obbligatoria compresa), di solito arriva in poche ore o giorni e vale **un anno con ingressi multipli**, con soggiorni fino a 90 giorni ciascuno. C\'è anche una strada gratuita: il **visto stopover** per chi vola con Saudia o flynas, valido 4 giorni e legato all\'acquisto del biglietto. Se ne parla in dettaglio nel confronto sui programmi stopover del Golfo.',
    valuta: 'Riyal saudita (SAR), agganciato al dollaro USA.',
    pagamenti:
      'Il paese si è digitalizzato in fretta: in città carte e contactless funzionano ovunque, anche in taxi e in molti piccoli negozi. I contanti servono nei souq e nei villaggi dell\'interno. Gli sportelli bancomat sono diffusi e accettano le carte estere senza problemi.',
    connettivita:
      'Ottima copertura 4G e 5G, anche nel deserto lungo le strade principali. In aeroporto si comprano SIM turistiche con il passaporto, a prezzi bassi. A differenza di Emirati e Qatar, le chiamate VoIP non sono bloccate: WhatsApp funziona normalmente.',
    salute:
      'Per il turismo non ci sono vaccinazioni obbligatorie (per il pellegrinaggio valgono altre regole, con l\'obbligo dell\'antimeningococcica). Il visto elettronico comprende un\'assicurazione sanitaria di base: conviene aggiungerne una propria. Il rischio principale è il caldo: d\'estate nell\'interno si superano i 50 gradi e ci si disidrata in pochissimo. L\'acqua del rubinetto non si beve.',
    sicurezza:
      'La criminalità comune è molto bassa e si viaggia tranquilli. Le cose da sapere sono altre. **L\'alcol è vietato in tutto il paese**, senza eccezioni né zone franche negli hotel, e introdurlo è un reato serio. **La Mecca e Medina sono vietate ai non musulmani**: sulle autostrade i cartelli indicano le deviazioni obbligatorie, e non è una formalità. A tutti si chiede un abbigliamento sobrio. Dal 2019 le donne straniere non devono portare l\'abaya né coprirsi il capo, ma servono braccia e gambe coperte e abiti non aderenti; gli uomini non vanno in giro in pantaloncini corti. Niente effusioni in pubblico. Fotografare persone, soprattutto donne, senza un permesso esplicito è un problema serio, più che altrove nella regione. Infine vanno controllati gli avvisi ufficiali per le zone di confine con lo Yemen, sconsigliate.',
    trasportiInterni:
      'Le distanze sono enormi: da Jeddah ad AlUla sono oltre 700 km, da Riyadh a Jeddah quasi 950. **Di solito ci si sposta in aereo**, con Saudia e flynas che collegano tutto a prezzi bassi. C\'è una linea ad alta velocità, l\'Haramain, che unisce in poco tempo Jeddah, La Mecca e Medina; le due città sante però restano vietate ai non musulmani, quindi a un turista serve soprattutto la tratta Jeddah-Medina. Per AlUla e l\'Asir conviene l\'auto a noleggio: le strade principali sono ottime e la benzina costa pochissimo. In città Uber e Careem funzionano bene e costano poco.',
    costoVita:
      'Più caro di quanto si immagini: AlUla ha poche strutture e prezzi alti, Riyadh e Jeddah hotel da capitale. In compenso benzina, trasporti urbani e cibo di quartiere costano pochissimo, e la voce alcol non esiste, perché l\'alcol non c\'è.',
    lingua:
      'Arabo. In città, negli hotel e nei siti turistici l\'inglese è diffuso, molto più di quanto ci si aspetti, ma nell\'interno e nei villaggi cala in fretta. Un traduttore sul telefono e qualche parola di arabo aiutano parecchio.',
    elettricita: '230V, prese britanniche di tipo G a tre poli, come nel resto del Golfo.',
    fusoOrario: 'UTC+3: 1 ora avanti rispetto all\'Italia con l\'ora legale, 2 in inverno.',
    clima:
      'Tre paesi in uno. L\'interno desertico ha inverni miti con notti fredde ed estati oltre i 50 gradi. La costa del Mar Rosso, a Jeddah, è calda e umidissima quasi tutto l\'anno. Le montagne dell\'Asir, intorno ad Abha, superano i 2.000 metri: clima fresco, nebbie, piogge estive e campi a terrazze. È la parte del paese che smentisce ogni aspettativa.',
    festivita:
      'Qui il **Ramadan** è più rigido che nel resto del Golfo: di giorno quasi tutto chiude, mangiare e bere in pubblico alla luce del sole è vietato a tutti, anche ai non musulmani, e la vita si sposta di notte. Nei giorni di **Eid al-Fitr** e **Eid al-Adha** il paese si ferma e i trasporti sono presi d\'assalto. Durante l\'Hajj masse enormi di persone si spostano verso l\'ovest del paese e i prezzi salgono. La Festa Nazionale è il 23 settembre, quella della Fondazione il 22 febbraio.',
    emergenze: 'Polizia 999, ambulanza 997, vigili del fuoco 998; nelle città principali è attivo anche il numero unico 911. L\'Ambasciata d\'Italia è a Riyadh, e a Jeddah c\'è un Consolato generale.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Le case storiche in pietra corallina con le finestre a graticcio in legno nel quartiere di Al-Balad, Jeddah',
  heroImage: '/images/arabia-saudita/arabia-saudita-paese.jpg',
  tripPrincipaleSlug: 'arabia-saudita-itinerario',
}
