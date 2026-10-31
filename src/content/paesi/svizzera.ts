import type { Paese } from '@/lib/types'

// La Svizzera è un viaggio fatto da Rick, raccontato in "Svizzera in van"
// (svizzera-alpi-van): tutte le destinazioni collegate hanno
// visitataPersonalmente: true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore (vedi il commento in
// src/content/destinazioni/svizzera.ts). Prezzi, vignetta, regole di campeggio
// in van e aperture stagionali dei passi cambiano ogni stagione e da un
// cantone all'altro: vanno riverificati prima di partire.

export const svizzera: Paese = {
  slug: 'svizzera',
  nome: 'Svizzera',
  continente: 'Europa',
  titolo: 'Svizzera in van: le Alpi Bernesi tra laghi, ghiacciai e prezzi da sapere prima di partire',
  descrizione:
    'Un paese piccolo, di montagna e sempre fra i più cari d\'Europa: conviene arrivarci con un budget già fatto, invece di scoprirlo sul posto. Questa sezione è dedicata alle Alpi Bernesi, la regione di Interlaken e della Jungfrau, il cuore alpino del paese e il più comodo da girare in van. Ci sono due laghi turchesi, una valle di settantadue cascate, un treno che sale dentro la montagna fino a 3.454 metri e, per chi ha una settimana, una strada di passi che arriva ai piedi del Cervino.',
  periodoMigliore:
    'da giugno a settembre per la montagna; luglio e agosto sono i mesi più sicuri per i passi d\'alta quota, chiusi il resto dell\'anno. A giugno e a settembre c\'è meno gente e i campeggi costano un po\' meno, ma a inizio giugno sui passi più alti può esserci ancora neve.',
  durataConsigliata:
    'un weekend lungo di 3-4 giorni per il cuore della Jungfrau Region (Interlaken, Lauterbrunnen, Grindelwald), una settimana per aggiungere Mürren-Schilthorn, la strada dei passi Grimsel-Furka e un\'estensione fino a Zermatt.',
  budgetIndicativo:
    'alto, sempre sopra Italia e Francia. Fra vignetta autostradale, carburante, campeggi e anche solo un paio di funivie o treni di montagna, per due persone in van il budget giornaliero di rado scende sotto i 150-200 CHF, vignetta esclusa. Per contenerlo ci sono pochi modi, ma funzionano: fare la spesa al supermercato invece di mangiare al ristorante, scegliere un solo biglietto importante (di solito il Jungfraujoch) invece di sommare più funivie e usare gli sconti del mattino dove ci sono (per esempio il Good Morning Ticket del Jungfraujoch).',
  stileViaggio: ['montagna', 'vanlife', 'roadtrip', 'trekking', 'laghi'],
  scheda: {
    documenti:
      'La Svizzera è nell\'area Schengen ma **non fa parte dell\'Unione Europea**: ai cittadini italiani basta la carta d\'identità valida per l\'espatrio, senza visto. Per chi viaggia in van conta che **il confine resta una dogana vera**, anche senza controlli sistematici dei documenti. Dal 2025 la franchigia per le merci portate con sé è scesa a metà, **150 CHF a persona** (600 CHF per una famiglia di quattro): oltre quella soglia si dichiara l\'intero valore, non solo l\'eccedenza. La patente italiana è valida.',
    valuta:
      'Franco svizzero (CHF). Il cambio è da sempre sfavorevole all\'euro, e ogni prezzo sembra ancora più alto. Alcuni negozi turistici accettano euro in contanti, ma danno il resto in franchi a un cambio svantaggioso: conviene prelevare o pagare in CHF.',
    pagamenti:
      'Carte e contactless sono accettati quasi ovunque, anche nei piccoli negozi, nei parcheggi e in molte aree di sosta camper. **Conviene comunque avere un po\' di franchi in contanti** per le aree di sosta più spartane e per alcune casse automatiche dei parcheggi di montagna che non sempre accettano carte estere.',
    connettivita:
      'La Svizzera **non è nell\'Unione Europea né nello Spazio economico europeo**, quindi il roaming «come a casa» degli operatori italiani non vale in automatico. Alcuni operatori (Vodafone, Fastweb) lo includono comunque nelle tariffe, altri (TIM, Iliad) vendono un\'opzione a pochi euro al mese; per chi usa molti dati, una eSIM locale è un\'alternativa economica. Copertura ottima nelle valli principali, più debole in quota e nelle gole strette come Lauterbrunnen.',
    salute:
      'La tessera europea di assicurazione malattia (TEAM) vale in Svizzera grazie all\'accordo bilaterale con l\'UE, ma il sistema svizzero funziona ad **assistenza indiretta**: quasi sempre si paga prima e si chiede il rimborso dopo, mentre negli altri paesi UE l\'assistenza è diretta. Un\'assicurazione di viaggio è consigliata, soprattutto per chi fa attività in quota. Nessuna vaccinazione richiesta; la sanità è di livello molto alto.',
    sicurezza:
      'Paese molto sicuro anche per gli standard europei, con pochissima criminalità. I rischi sono quelli della montagna: **temporali estivi nel pomeriggio**, sbalzi di temperatura in quota anche in piena estate e vie ferrate che richiedono kit omologato ed esperienza. **In Svizzera il soccorso in montagna si paga**: un intervento in elicottero della Rega costa in media alcune migliaia di franchi. La Rega vende una tessera annuale di sostegno (circa 40 CHF a persona) che copre gratis gli interventi per chi la possiede: è la spesa più sensata prima di qualunque escursione in quota.',
    trasportiInterni:
      'Strade ottime, ma per autostrade e semiautostrade **serve la vignetta annuale** (circa 40 CHF), anche per una sola settimana: non esistono vignette giornaliere o settimanali. Treni e funivie di montagna sono puntuali e frequenti, ma fra i più cari d\'Europa; chi non viaggia in van può valutare uno Swiss Travel Pass, che copre più giorni consecutivi di trasporti e dà sconti sulle funivie. **Zermatt è chiusa al traffico privato dal 1961**: il van si lascia nel parcheggio di Täsch e si prosegue col treno navetta.',
    costoVita:
      'Fra i più alti d\'Europa in ogni voce: carburante, ristoranti, campeggi, funivie. Un pasto semplice fuori di rado costa meno di 25-30 CHF a persona; per chi cucina nel van la spesa da Coop e Migros resta la soluzione più economica.',
    lingua:
      'Tedesco nelle Alpi Bernesi e a Zermatt (nel parlato domina lo svizzero-tedesco, molto diverso dal tedesco standard scritto); francese nel Vallese occidentale. L\'inglese è diffuso nelle zone turistiche e fra il personale di funivie e stazioni.',
    elettricita:
      '230V, 50Hz, **prese di tipo J**, usate solo in Svizzera e in Liechtenstein: tre pin rotondi disposti a triangolo stretto. Le spine europee a due poli (tipo C, come quelle italiane senza terra) entrano quasi sempre; le **spine Schuko con terra (tipo F) spesso no**, per la forma della presa. Basta un adattatore, da portare o da comprare sul posto.',
    fusoOrario: 'UTC+1, UTC+2 in ora legale. Stesso fuso dell\'Italia.',
    clima:
      'Alpino, molto diverso secondo la quota: a Interlaken (568 m) le estati sono miti; più in alto il tempo cambia in fretta e sopra i 2.500-3.000 metri può nevicare anche in piena estate. **D\'estate i temporali del pomeriggio sono frequenti**: le attività in quota vanno fatte al mattino.',
    festivita:
      'La festa nazionale è il **1° agosto**. Le altre festività sono quasi tutte cantonali e cambiano da regione a regione, quindi chi guarda solo il calendario nazionale può trovare chiusure inattese. Il problema più concreto però è settimanale: **la domenica quasi tutti i negozi sono chiusi per legge**, tranne quelli nelle grandi stazioni, negli aeroporti e in alcune aree di servizio autostradali. La spesa grossa va fatta il sabato.',
    emergenze:
      'Numero unico europeo **112**. In alternativa: 117 polizia, 118 vigili del fuoco, 144 ambulanza, **1414 Rega** (soccorso aereo in montagna).',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La valle di Lauterbrunnen in estate, con le pareti di roccia verticali, i boschi e il villaggio sul fondovalle, Alpi Bernesi',
  heroImage: '/images/svizzera/svizzera-paese.jpg',
  tripPrincipaleSlug: 'svizzera-alpi-van',
}
