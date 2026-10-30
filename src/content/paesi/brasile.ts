import type { Paese } from '@/lib/types'

// Scheda Paese costruita con ricerca documentale (ottobre 2026), senza un
// viaggio dell'autore alle spalle: tutte le destinazioni collegate hanno
// visitataPersonalmente: false e nessuna ha il campo miaEsperienza (vedi
// src/content/destinazioni/brasile.ts). Prezzi, regole dei parchi e
// requisiti sanitari vanno riverificati prima di partire.

export const brasile: Paese = {
  slug: 'brasile',
  nome: 'Brasile',
  continente: 'Sud America',
  titolo: 'Brasile: Rio, cascate, dune piene d\'acqua e due porte verso Pantanal e Amazzonia',
  descrizione:
    'Un paese grande quanto l\'Europa, che in tre settimane si può solo assaggiare. Questa sezione mette in fila Rio de Janeiro, la Costa Verde di Paraty e Ilha Grande, le cascate di Iguazú, Salvador e la Chapada Diamantina, fino alle lagune tra le dune dei Lençóis Maranhenses, con due estensioni per i giaguari del Pantanal e per l\'Amazzonia da Manaus.',
  periodoMigliore:
    'luglio-agosto per unire le lagune piene dei Lençóis Maranhenses (giugno-settembre), la stagione secca della Chapada Diamantina e l\'inizio della stagione dei giaguari nel Pantanal (luglio-ottobre). Rio e Iguazú vanno bene quasi tutto l\'anno; dicembre-marzo è estate piena, calda e piovosa, con Carnevale a febbraio.',
  durataConsigliata:
    '3 settimane per Rio, Costa Verde, Iguazú, Salvador, Chapada e Lençóis Maranhenses; 4 settimane con una delle estensioni (Pantanal o Amazzonia).',
  budgetIndicativo:
    'medio: 350-500 R$ al giorno a persona viaggiando economici, 700-1.100 R$ nella fascia media, voli intercontinentali esclusi. Le voci che pesano di più sono i voli interni (indispensabili) e le estensioni nella natura, in particolare il Pantanal, dove i pacchetti completi superano facilmente i 9.000 R$ per 3-4 notti.',
  stileViaggio: ['natura', 'mare', 'cascate', 'città', 'fauna'],
  scheda: {
    documenti:
      'Per i cittadini italiani nessun visto per turismo fino a 90 giorni. Passaporto con validità residua di almeno 6 mesi consigliata. Chi prosegue via terra o fiume verso Colombia o Perù deve fare i timbri di uscita alla Polícia Federal (per esempio a Tabatinga) prima di partire. Consigliata l\'iscrizione a Dove Siamo nel Mondo.',
    valuta:
      'Real brasiliano (BRL, R$), indicativamente 1 € = 6-6,5 R$ nel 2026. Conviene prelevare in reais da sportelli dentro banche o centri commerciali invece di cambiare euro in contanti.',
    pagamenti:
      'Carte e contactless accettati quasi ovunque, anche in molti chioschi di spiaggia. Il Pix, il pagamento istantaneo locale, è diffusissimo, ma richiede un conto brasiliano. Contanti utili per barche, mercati, paesi piccoli e mance.',
    connettivita:
      'SIM di Claro, Vivo o TIM acquistabili con passaporto nei negozi degli operatori, oppure eSIM attivata prima della partenza. Copertura buona in città e sulla costa, scarsa o assente nei parchi (Lençóis Maranhenses, Chapada, Pantanal) e nei lodge amazzonici.',
    salute:
      'Vaccinazione contro la febbre gialla raccomandata per molte zone (Iguazú, Chapada Diamantina, Pantanal, Amazzonia), da fare almeno 10 giorni prima; il certificato può essere richiesto entrando in Colombia o Perù dalla frontiera amazzonica. Dengue diffusa: repellente e maniche lunghe al tramonto. Acqua in bottiglia, crema solare alta. Assicurazione sanitaria con rimpatrio molto consigliata.',
    sicurezza:
      'Nelle grandi città (Rio, Salvador, São Paulo) il rischio concreto è la criminalità di strada: furti di telefoni, scippi anche da moto o bicicletta, rapine nelle zone deserte la sera. Prudenza costante: telefono in tasca, niente gioielli, poco contante, app invece di camminare di notte, nessuna visita alle favelas senza guide della comunità. Le zone naturali e i piccoli centri turistici sono in genere tranquilli. Leggere la scheda aggiornata di Viaggiare Sicuri prima di partire.',
    trasportiInterni:
      'Le distanze impongono i voli interni (LATAM, GOL, Azul), molto più economici se prenotati presto e spesso con scalo a São Paulo o Brasília. Bus a lunga percorrenza comodi sulle tratte medie. Nei Lençóis Maranhenses solo 4x4 con autista; nel Pantanal auto alta o pacchetti con transfer; in Amazzonia aereo o barca. Taxi ufficiali e app (Uber, 99) in città.',
    costoVita:
      'Medio rispetto all\'Italia: si mangia bene con poco nei locali a peso (por quilo) e nei botecos; alloggi e tour costano di più nelle località più turistiche e in alta stagione (dicembre-febbraio, luglio).',
    lingua: 'Portoghese. Inglese poco diffuso fuori da hotel e agenzie; lo spagnolo aiuta a farsi capire.',
    elettricita:
      '127 V o 220 V secondo la città (127 V a Rio e Foz do Iguaçu, 220 V in gran parte del Nordeste), 60 Hz, prese di tipo N. Le spine italiane da 10 A spesso entrano; adattatore utile, caricatori 100-240 V.',
    fusoOrario:
      'Più fusi: Rio, São Paulo, Salvador, Foz do Iguaçu e São Luís su UTC-3; Manaus e Cuiabá su UTC-4. Niente ora legale dal 2019.',
    clima:
      'Tropicale nella maggior parte del paese. Al sud-est (Rio) estate calda e piovosa da dicembre a marzo, inverno mite da giugno a settembre. Nel Nordeste caldo tutto l\'anno, con piogge più forti in autunno australe (aprile-giugno a Salvador, febbraio-maggio nel Maranhão). Nel Pantanal stagione secca da luglio a ottobre. In Amazzonia piove tutto l\'anno, con acque alte da aprile a luglio.',
    festivita:
      'Carnevale a febbraio o inizio marzo (Rio, Salvador, Olinda), con prezzi raddoppiati e alloggi esauriti; Capodanno a Copacabana; feste juninas a giugno nel Nordeste; il Bumba-meu-boi a São Luís tra giugno e luglio.',
    emergenze: 'Polizia 190, ambulanza (SAMU) 192, vigili del fuoco 193. Ambasciata d\'Italia a Brasília, consolati a Rio de Janeiro, São Paulo e in altre città.',
    aggiornatoAl: 'ottobre 2026',
  },
  heroImageAlt: 'Le lagune d\'acqua piovana tra le dune bianche dei Lençóis Maranhenses',
  heroImage: '/images/copertine/brasile-itinerario.jpg',
  tripPrincipaleSlug: 'brasile-itinerario',
}
