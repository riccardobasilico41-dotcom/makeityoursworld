import type { Paese } from '@/lib/types'

// Le Maldive entrano nell'archivio con una guida modulare (maldive-guida):
// stagioni, atolli, isole locali e resort, escursioni, siti dei grandi animali
// e liveaboard, con un itinerario d'esempio di 10 giorni. Nessuna esperienza
// vissuta in questa fase: i ricordi dell'autore si aggiungono dal diario.
// Fatti verificati a ottobre 2026, da riverificare prima della partenza.

export const maldive: Paese = {
  slug: 'maldive',
  nome: 'Maldive',
  continente: 'Asia',
  titolo: 'Maldive: isole locali, resort e i grandi animali dell\'Oceano Indiano',
  descrizione:
    'Ventisei atolli e circa 1.200 isole coralline nell\'Oceano Indiano, tra i mari migliori al mondo per vedere mante, squali balena, squali martello e tartarughe anche solo con maschera e pinne. Dal 2009 si può dormire anche sulle isole abitate, nelle guesthouse dei villaggi, spendendo una frazione di quanto costa un resort. La guida spiega come combinare le due cose, quale atollo scegliere in quale stagione e come organizzarsi.',
  periodoMigliore:
    'dicembre-aprile per il tempo secco e la visibilità; agosto-ottobre per le mante della baia di Hanifaru (atollo di Baa); squali balena ad Ari Sud tutto l\'anno',
  durataConsigliata: '8-14 giorni, una settimana in liveaboard per i subacquei',
  budgetIndicativo:
    '80-150 € al giorno a persona sulle isole locali, 200-400 € combinando isola locale e resort, da 400 € in su solo resort; voli intercontinentali esclusi',
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità. Visto turistico gratuito di 30 giorni all\'arrivo, con biglietto di ritorno, prenotazione dell\'alloggio e mezzi sufficienti. La dichiarazione online IMUGA (Traveller Declaration) è obbligatoria nelle 96 ore prima dell\'arrivo e prima della partenza. È vietato importare alcol, carne di maiale, droghe, materiale pornografico e oggetti di culto destinati all\'esposizione. Conviene controllare la scheda Maldive di Viaggiare Sicuri.',
    valuta:
      'Rufiyaa maldiviana (MVR), circa 15,4 per un dollaro. Il dollaro USA è accettato ovunque nel turismo, ma solo banconote in buono stato e stampate dal 2013 in poi.',
    pagamenti:
      'Le carte si usano nei resort, negli hotel di Malé e Hulhumalé e in molte guesthouse, spesso con una commissione del 3-5%. Contanti per traghetti, piccoli operatori, mance e negozi delle isole. ATM a Malé, Hulhumalé e nelle isole più grandi. Sul soggiorno si pagano green tax (6 $ a persona a notte nelle guesthouse, 12 $ nei resort e sulle barche safari), TGST del 17% e di solito il 10% di servizio.',
    connettivita:
      'Dhiraagu e Ooredoo, SIM turistiche in aeroporto. 4G buono sulle isole abitate e nei resort; wifi in quasi tutte le guesthouse.',
    salute:
      'Nessuna vaccinazione obbligatoria, salvo febbre gialla per chi arriva da paesi a rischio. Sulle isole abitate c\'è la dengue: serve il repellente. Il sole è molto forte: meglio lycra e crema solare minerale. Fuori da Malé le strutture sanitarie sono limitate e le camere iperbariche poche, quindi è indispensabile un\'assicurazione sanitaria che copra immersioni ed evacuazione.',
    sicurezza:
      'Per i turisti è un paese tranquillo, con criminalità bassa nelle isole e nei resort. A Malé possono esserci manifestazioni politiche: meglio tenersi a distanza. Il rischio vero è in acqua: le correnti nei canali (kandu) tra atolli e oceano possono essere più forti di un buon nuotatore, e le barche passano veloci nelle lagune. Le leggi sono severe su droga, alcol fuori dai luoghi autorizzati e comportamenti considerati offensivi verso l\'islam.',
    trasportiInterni:
      'Speedboat condivisi per le isole vicine a Malé (25-70 $ a tratta secondo la distanza); traghetti pubblici MTCC lenti ed economici (2-6 $), con partenze poco frequenti sulle tratte lunghe e niente servizio il venerdì; idrovolanti Trans Maldivian Airways per i resort lontani, solo di giorno (500-1.200 $ andata e ritorno); voli interni Maldivian e Manta Air per Baa, Ari Sud, Laamu, Fuvahmulah e Addu, seguiti da una barca.',
    costoVita:
      'Su due livelli. Sulle isole locali una guesthouse costa 60-150 $ a notte con colazione, un pasto 8-20 $, un\'escursione 40-130 $. Nei resort i prezzi partono da 300-400 $ a notte, con pasti e attività cari.',
    lingua: 'Dhivehi; l\'inglese è parlato ovunque nel turismo.',
    elettricita: '230V, 50Hz, prese di tipo G (britanniche) e a volte D: serve un adattatore.',
    fusoOrario:
      'UTC+5: 3 ore avanti rispetto all\'Italia con l\'ora legale, 4 in inverno. Alcuni resort usano un\'«ora dell\'isola» spostata di un\'ora.',
    clima:
      'Tropicale, 27-31 °C tutto l\'anno, acqua a 27-29 °C. Monsone di nord-est (Iruvai, dicembre-aprile): secco, mare calmo, visibilità ottima. Monsone di sud-ovest (Hulhangu, maggio-novembre): più vento, onde e piogge a scrosci, alternate a giornate di sole, con il picco tra giugno e luglio.',
    festivita:
      'Il venerdì è il giorno di festa: negozi chiusi a metà giornata per la preghiera e niente traghetti sulle tratte lunghe. Durante il Ramadan (nel 2027 indicativamente dall\'8 febbraio al 9 marzo) sulle isole locali molti locali chiudono di giorno. Festa dell\'indipendenza il 26 luglio.',
    emergenze:
      'Polizia 119, ambulanza 102, guardia costiera 191. L\'Italia non ha un\'ambasciata residente alle Maldive: è competente l\'Ambasciata d\'Italia a Colombo (Sri Lanka). Prima di partire conviene registrarsi su Dove Siamo nel Mondo.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['mare', 'snorkeling', 'immersioni', 'isole locali', 'resort'],
  heroImage: '/images/maldive/hero-atollo.jpg',
  heroImageAlt: 'Un\'isola corallina delle Maldive vista dall\'alto, con la laguna turchese e la barriera che scende nel blu',
  tripPrincipaleSlug: 'maldive-guida',
}
