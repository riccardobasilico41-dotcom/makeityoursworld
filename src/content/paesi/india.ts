import type { Paese } from '@/lib/types'

// L'India entra nell'archivio con tre itinerari, tutti fatti dall'autore:
// Rajasthan in 10 giorni (india-rajasthan-10-giorni), Rajasthan con
// Varanasi (india-rajasthan-varanasi) e il Sud con il salto ad Agra
// (india-sud-taj-mahal). Una sola scheda Paese per tutti e tre: visto,
// stagioni, treni e truffe valgono ovunque, cambia solo il clima tra Nord e Sud.
//
// tripPrincipaleSlug punta al Rajasthan in 10 giorni: è il primo viaggio in
// India più richiesto da un pubblico italiano (Taj Mahal, forti, palazzi) e il
// più facile da organizzare in autonomia. I fatti pratici sono verificati
// (ottobre 2026) e vanno riverificati prima della partenza.

export const india: Paese = {
  slug: 'india',
  nome: 'India',
  continente: 'Asia',
  titolo: 'India: il Rajasthan dei forti, la Varanasi dei ghat e il Sud dei templi e delle backwaters',
  descrizione:
    'Un paese grande come un continente, che si visita a pezzi. Al Nord il triangolo d\'oro Delhi-Agra-Jaipur e il Rajasthan dei maharaja, con i forti sul deserto e i palazzi sui laghi; lungo il Gange Varanasi, la città sacra dei ghat e delle cremazioni a cielo aperto; al Sud il Kerala delle backwaters e delle piantagioni di tè e il Tamil Nadu dei grandi templi dravidici. Tre itinerari pensati per un primo o un secondo viaggio, con treni, voli interni e autista dove serve.',
  periodoMigliore:
    'da ottobre a marzo per quasi tutto il paese: al Nord novembre-febbraio è secco e mite (mattine fredde e nebbia tra dicembre e gennaio), al Sud dicembre-marzo. Da evitare aprile-giugno al Nord (oltre 40-45 °C in Rajasthan) e il monsone di sud-ovest (giugno-settembre) in Kerala',
  durataConsigliata: '10-12 giorni per il Rajasthan, 15-18 con Varanasi, 14-16 per il Sud con il Taj Mahal',
  budgetIndicativo:
    'molto variabile: 35-50 € al giorno a persona in fascia economica, 80-130 € in fascia media con autista e hotel heritage, da 250 € in su nei palazzi-hotel di lusso; voli intercontinentali esclusi',
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità dalla data di arrivo e due pagine libere. Serve il visto: per turismo il più comodo è l\'e-Tourist Visa, da richiedere solo sul portale ufficiale indianvisaonline.gov.in almeno 4 giorni prima (meglio 2-3 settimane). Tariffe governative indicative 2026 per i cittadini italiani: 25 $ per 30 giorni con doppio ingresso (10 $ se si entra tra aprile e giugno), 40 $ per un anno, 80 $ per cinque anni, più circa il 3% di commissione bancaria. Con il visto annuale e quinquennale ogni soggiorno non può superare i 90 giorni. I siti che chiedono 70-150 $ sono intermediari, non il governo. Dal 1° aprile 2026 è obbligatoria anche la e-Arrival Card, gratuita, da compilare online nelle 72 ore prima dell\'arrivo. Controllare sempre la scheda India di Viaggiare Sicuri (Farnesina) prima di partire.',
    valuta:
      'Rupia indiana (INR), indicativamente 95-105 rupie per un euro (ottobre 2026). L\'importazione ed esportazione di rupie in contanti è vietata ai non residenti: si preleva o si cambia all\'arrivo. Conviene tenere banconote da 100, 200 e 500: il resto per quelle da 500 è spesso un problema in tuk-tuk, chioschi e templi.',
    pagamenti:
      'Carte accettate in hotel, ristoranti di città, negozi a prezzo fisso e biglietterie online dei monumenti (ASI). Ovunque altrove si paga in contanti o con UPI, il sistema di pagamento con QR che in India usano tutti: per i turisti esistono app con UPI One World ricaricabili con il passaporto, comode ma non indispensabili. Gli ATM delle grandi banche (SBI, HDFC, ICICI, Axis) funzionano con le carte italiane, spesso con limite di 10.000 rupie per prelievo e una commissione locale. Mance: 10% al ristorante se il servizio non è incluso, 300-500 rupie al giorno all\'autista, qualcosa alle guide.',
    connettivita:
      'Airtel e Jio sono i due operatori con la copertura migliore; la SIM turistica si compra in aeroporto a Delhi, Mumbai o Kochi con passaporto, visto e una foto, e l\'attivazione può richiedere qualche ora. In alternativa eSIM internazionali, più care ma pronte all\'atterraggio. Copertura 4G/5G buona in città e lungo le strade principali, scarsa nel deserto del Thar e in alcune vallate del Kerala.',
    salute:
      'Nessuna vaccinazione obbligatoria, salvo la febbre gialla per chi arriva da un paese a rischio. Consigliate epatite A e B, tifo e antitetanica aggiornata; la rabbia va valutata per viaggi lunghi (cani randagi e scimmie nei templi). Dengue presente soprattutto dopo il monsone: repellente all\'alba e al tramonto. La malaria è a basso rischio nei circuiti di questi itinerari, ma va sentito il proprio medico o un centro di medicina dei viaggi. Il disturbo più probabile è intestinale: acqua solo in bottiglia sigillata o filtrata, niente ghiaccio di origine incerta, frutta solo sbucciata da sé, street food solo dove c\'è ricambio e la cottura avviene davanti a te. A Delhi e Agra tra novembre e gennaio l\'inquinamento dell\'aria è spesso pessimo: chi soffre di asma porti i farmaci e una mascherina FFP2. Assicurazione sanitaria con rimpatrio indispensabile.',
    sicurezza:
      'Lungo i circuiti turistici di questi itinerari i rischi principali sono la strada e le truffe, più della criminalità. Viaggiare Sicuri sconsiglia le aree di confine con Pakistan e Myanmar, alcune zone del Jammu e Kashmir e del Manipur: nessuna è toccata da questi itinerari, ma la situazione va verificata prima di partire. Le truffe più comuni: il tassista o il tuk-tuk che dice che il tuo hotel è chiuso, pieno o bruciato e ti porta in un altro (prende la commissione); i finti uffici del turismo vicino alla stazione di New Delhi e a Connaught Place, che fingono di essere ufficiali e vendono pacchetti cari; chi alla stazione dice che la biglietteria per stranieri è chiusa o al piano di sopra; le visite «gratuite» che finiscono in negozi di tappeti, gemme e tessuti (a Jaipur la truffa delle gemme da esportare in Italia con «guadagno» assicurato è un classico); le finte guide all\'ingresso del Taj Mahal; i fiori e la benedizione «in regalo» sui ghat di Pushkar e Varanasi, seguiti dalla richiesta di denaro; le «offerte per la legna» al ghat delle cremazioni di Varanasi. Regola generale: prenotare gli hotel in anticipo, confermare il prezzo prima di salire su qualsiasi mezzo, usare Uber, Ola o i taxi prepagati in aeroporto, comprare i biglietti solo ai banchi ufficiali o online.',
    trasportiInterni:
      'Treni: sono il modo migliore di muoversi tra le grandi città. Si prenotano su IRCTC (irctc.co.in) con un account per stranieri, verificato via OTP sul numero italiano e pagato con carta internazionale, oppure tramite app autorizzate come ConfirmTkt o ixigo; esiste una quota riservata ai turisti stranieri (Foreign Tourist Quota) sui treni principali, prenotabile online o agli International Tourist Bureau delle stazioni di New Delhi, Mumbai e Chennai. Le classi utili: CC ed EC (posti a sedere con aria condizionata) sui treni diurni veloci come Vande Bharat, Shatabdi e Gatimaan; 2A e 3A (cuccette con aria condizionata, due o tre livelli) sui notturni; 1A è la prima classe con scompartimenti chiusi. Sleeper (SL) e General sono economiche ma affollate e senza aria condizionata. Si prenota con anticipo: i treni più richiesti finiscono in lista d\'attesa (WL) settimane prima, e un biglietto in WL non garantisce il posto. Voli interni: IndiGo e Air India coprono quasi tutto a prezzi bassi (30-80 €) se prenotati presto, e fanno risparmiare giorni sulle tratte lunghe. Auto con autista: la soluzione più diffusa in Rajasthan, indicativamente 2.800-4.000 rupie al giorno per una berlina o un SUV, carburante e autista inclusi, pedaggi e parcheggi da chiarire nel contratto. Guidare da sé è sconsigliato. In città Uber, Ola e i tuk-tuk (prezzo da fissare prima).',
    costoVita:
      'Economico per chi viaggia semplice, caro più di quanto ci si aspetti nel lusso. Un pasto in un ristorante locale costa 200-500 rupie, in un ristorante per turisti 800-2.000; un thali di strada anche meno di 150. Camera doppia: 1.500-3.000 rupie in guesthouse, 4.000-9.000 in un buon hotel heritage, oltre 25.000 nei palazzi dei grandi gruppi (Taj, Oberoi). Gli ingressi ai monumenti per stranieri costano molto più che per gli indiani: 500-1.300 rupie per i siti principali.',
    lingua:
      'Hindi e inglese sono le lingue ufficiali dell\'Unione, affiancate da 22 lingue riconosciute: al Nord si parla hindi (e rajasthani), in Kerala malayalam, in Tamil Nadu tamil, in Karnataka kannada. L\'inglese si usa senza problemi in hotel, stazioni, agenzie e con gli autisti; meno nei villaggi.',
    elettricita:
      '230V, 50Hz, prese di tipo C, D e M. Le spine italiane sottili a due poli entrano quasi sempre nelle prese C e D, le Schuko no: un adattatore universale è utile. Blackout brevi frequenti fuori dalle città.',
    fusoOrario: 'UTC+5:30 tutto l\'anno: 3 ore e mezza avanti rispetto all\'Italia con l\'ora legale, 4 ore e mezza in inverno.',
    clima:
      'Tre stagioni al Nord: fresca e secca da ottobre a marzo (la migliore, con notti fredde nel deserto e nebbie a Delhi, Agra e Varanasi tra dicembre e gennaio che ritardano treni e voli), torrida da aprile a giugno, monsonica da luglio a settembre. Al Sud il monsone di sud-ovest colpisce il Kerala da giugno ad agosto con piogge forti; il monsone di nord-est porta pioggia sulla costa del Tamil Nadu (Chennai, Mamallapuram) tra ottobre e dicembre, con rischio di cicloni. Dicembre-marzo è la finestra migliore per tutto il Sud.',
    festivita:
      'Diwali (ottobre-novembre: nel 2026 l\'8 novembre) e Holi (marzo: nel 2027 il 22 marzo) sono le feste più spettacolari ma anche quelle con treni pieni, prezzi alti e, per Holi, una giornata in cui conviene sapere a cosa si va incontro (colori ovunque, molestie possibili verso le donne nelle zone affollate). Dev Deepawali a Varanasi (luna piena di Kartik, nel 2026 il 24 novembre) illumina tutti i ghat con migliaia di lampade. La fiera dei cammelli di Pushkar cade intorno alla luna piena di Kartik (fine ottobre-novembre). Le date delle feste seguono il calendario lunare e cambiano ogni anno.',
    emergenze:
      'Numero unico di emergenza 112 (polizia 100, ambulanza 108). Ambasciata d\'Italia a New Delhi (Chanakyapuri), Consolati generali a Mumbai e Calcutta. Prima di partire conviene registrare il viaggio su Dove Siamo nel Mondo della Farnesina.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['cultura', 'treni', 'on the road', 'spiritualità', 'cibo di strada'],
  heroImage: '/images/india/agra-taj-mahal-portale-riccardo.jpg',
  heroImageAlt: 'Il Taj Mahal incorniciato dall\'arco scuro del portale d\'ingresso, sagome di visitatori in controluce, India',
  tripPrincipaleSlug: 'india-rajasthan-10-giorni',
}
