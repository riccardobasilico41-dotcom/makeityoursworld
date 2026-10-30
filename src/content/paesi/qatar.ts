import type { Paese } from '@/lib/types'

// Come per gli Emirati, il Qatar è trattato soprattutto come destinazione da
// stopover: il confronto tra i programmi delle compagnie del Golfo sta nella
// scheda Dubai, quello sulla durata della sosta nella scheda Doha. Nessun nome
// di hotel o ristorante è inventato.

export const qatar: Paese = {
  slug: 'qatar',
  nome: 'Qatar',
  continente: 'Medio Oriente',
  titolo: 'Qatar: lo stopover che costa quattordici dollari',
  descrizione:
    'Una penisola più piccola dell\'Abruzzo con uno dei programmi stopover più convenienti al mondo: Qatar Airways offre hotel a quattro e cinque stelle a Doha a cifre che altrove non coprono nemmeno la colazione. In quindici anni Doha da scalo anonimo è diventata la città del museo di Jean Nouvel, di quello di I.M. Pei e di un souq restaurato che, a differenza di molti nella regione, funziona ancora come mercato.',
  periodoMigliore:
    'da novembre a marzo. L\'estate qatariota è tra le più dure del pianeta: si superano i 45 gradi, con un\'umidità costiera che rende impossibile stare fuori, e in certi quartieri perfino i marciapiedi sono climatizzati.',
  durataConsigliata:
    '12-24 ore per uno stopover essenziale, 2-3 giorni per Doha con calma più il deserto e il nord. Oltre i quattro giorni il paese finisce.',
  budgetIndicativo:
    'lo stopover con Qatar Airways ribalta il conto: hotel a quattro stelle da circa 14 dollari a persona a notte e cinque stelle da 20-30, una frazione dei prezzi normali di Doha. Fuori dal programma gli alloggi costano come in una capitale europea. Musei e souq costano poco o niente.',
  stileViaggio: ['stopover', 'musei', 'architettura', 'deserto'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. Ai cittadini italiani il visto viene rilasciato gratis all\'arrivo all\'aeroporto di Doha, con biglietto di ritorno confermato: di norma vale 30 giorni, estendibili fino a 90 pagando l\'assicurazione sanitaria. Non serve nessuna pratica prima di partire, ed è per questo che il programma stopover funziona senza complicazioni.',
    valuta: 'Riyal qatariota (QAR), agganciato al dollaro USA.',
    pagamenti: 'Carte accettate ovunque. Il contante serve solo per i taxi più vecchi e nel souq, dove pagare in contanti aiuta a trattare.',
    connettivita:
      'Copertura totale, Wi-Fi diffuso, eSIM turistiche economiche. Come negli Emirati, sulle reti locali alcune chiamate VoIP sono limitate: i messaggi passano, le chiamate no. Per una sosta breve basta una eSIM estera in roaming.',
    salute: 'Sanità di altissimo livello e nessuna vaccinazione richiesta. Anche qui il problema è il caldo: tra giugno e settembre stare al sole nelle ore centrali è pericoloso. Assicurazione sanitaria indispensabile.',
    sicurezza:
      'Tra i paesi con i tassi di criminalità più bassi al mondo. Valgono le stesse cautele legali degli Emirati: alcol solo nei locali autorizzati e negli hotel, tolleranza zero per l\'ubriachezza in pubblico, pene severissime per la droga, discrezione nelle effusioni. Nei luoghi pubblici l\'abbigliamento richiesto è più conservativo che a Dubai: spalle e ginocchia coperte per tutti, anche fuori dalle moschee.',
    trasportiInterni:
      'La metropolitana di Doha è recente, velocissima ed economica, e collega aeroporto, souq, Corniche e i quartieri principali. Per il resto ci sono Karwa Taxi e Uber, a prezzi bassi. Per il deserto di Khor Al Adaid e per il nord del paese servono un 4x4 o un tour: si viaggia sulla sabbia, senza strada.',
    costoVita:
      'Alto per gli alloggi fuori dal programma stopover e per l\'alcol, che si trova quasi solo negli hotel ed è tassato pesantemente. Trasporti, musei e cibo di quartiere costano poco. Il souq Waqif ha ristoranti per tutte le tasche.',
    lingua: 'L\'arabo è la lingua ufficiale, ma nei fatti si parla inglese: come negli Emirati, i qatarioti sono una minoranza nel proprio paese e la maggior parte dei residenti è straniera.',
    elettricita: '240V, prese di tipo G britanniche a tre poli: stesso adattatore degli Emirati.',
    fusoOrario: 'UTC+3: 1 ora avanti rispetto all\'Italia in ora legale, 2 in inverno.',
    clima:
      'Desertico e costiero. Da novembre a marzo è la stagione buona, con 20-28 gradi; ad aprile la temperatura comincia a salire, e tra giugno e settembre si superano i 45 con umidità altissima. In primavera ci possono essere tempeste di sabbia. Piove pochissimo, e quasi solo in inverno.',
    festivita:
      'Durante il **Ramadan** valgono le stesse regole degli Emirati, applicate in genere in modo più stretto: molti ristoranti chiusi di giorno, meglio non mangiare né bere in pubblico alla luce del sole, e la vita che si sposta tutta di notte. La Festa Nazionale è il 18 dicembre.',
    emergenze: 'Numero unico per le emergenze 999. L\'Ambasciata d\'Italia è a Doha.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Lo skyline di Doha e una barca a vela sulla Corniche al tramonto, Qatar',
  heroImage: '/images/qatar/qatar-paese.jpg',
  tripPrincipaleSlug: 'stopover-golfo',
}
