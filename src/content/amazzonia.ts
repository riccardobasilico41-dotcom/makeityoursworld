import type { Lingua } from '@/lib/i18n/config'

/*
 * Sezione «Amazzonia» (/amazzonia): il ricordo di Rick (Iquitos con Ruth Amazon Expedition,
 * il consiglio su Off Roads Travel e sulla sicurezza), le porte d'ingresso per Paese e la
 * traversata in barca lenta Perù–Colombia–Brasile. Rick la traversata l'ha fatta molti anni
 * fa: i dati pratici vengono dalla ricerca con fonti in docs/amazzonia/ricerca.md
 * (novembre 2026) e vanno ricontrollati periodicamente. Le copie en/es sono traduzioni.
 */

export type PortaAmazzonia = {
  id: string
  nome: string
  paese: string
  /** Scheda del sito, in forma canonica (/destinazioni/…), se esiste. */
  href?: string
  immagine?: string
  imageAlt?: string
  perChi: string
  comeArrivare: string
  giorni: string
  costo: string
  attenzione?: string
}

export type TrattaFiume = { tratta: string; come: string; durata: string; costo: string; note: string }

export type ContenutoAmazzonia = {
  seoTitle: string
  seoDescription: string
  eyebrow: string
  titolo: string
  lead: string
  heroAlt: string
  inBreve: { label: string; value: string }[]
  ricordo: string
  sicurezza: { titolo: string; testo: string; agenzie: { nome: string; testo: string; url?: string; fatta: boolean }[] }
  porte: { titolo: string; intro: string; voci: PortaAmazzonia[]; vediScheda: string }
  traversata: {
    titolo: string
    intro: string
    avvertenza: string
    tratte: TrattaFiume[]
    documentiTitolo: string
    documenti: string[]
    portareTitolo: string
    portare: string[]
    truffeTitolo: string
    truffe: string[]
    zoneTitolo: string
    zone: string[]
    fonti: string
  }
  faq: { domanda: string; risposta: string }[]
  etichette: { perChi: string; comeArrivare: string; giorni: string; costo: string; attenzione: string; durata: string; come: string; note: string; tratta: string; nonFatta: string; fatta: string; sitoUfficiale: string; faqTitolo: string }
}

const it: ContenutoAmazzonia = {
  seoTitle: 'Amazzonia: da dove entrare e la traversata in barca lenta',
  seoDescription:
    'Iquitos, Leticia, Manaus, Ecuador e Bolivia a confronto, e la traversata in barca lenta Perù-Colombia-Brasile: tratte, costi, documenti, truffe e zone a rischio.',
  eyebrow: 'Perù · Colombia · Brasile · Ecuador · Bolivia',
  titolo: 'Amazzonia: quale porta scegliere e come attraversarla',
  lead: 'La foresta più grande del pianeta si visita da sei porte diverse, e ognuna è un viaggio a sé. Qui trovi la mia esperienza, quale scegliere e, per i più temerari, la traversata in barca lenta dal Perù al Brasile.',
  heroAlt: "Il fiume all'alba visto dal drone, con una barca tra le nuvole basse, nell'Amazzonia peruviana",
  inBreve: [
    { label: 'Giorni', value: '3-4 per un lodge, 5-7 per una spedizione vera, 10-14 per la traversata in barca' },
    { label: 'Periodo', value: "tutto l'anno: con l'acqua alta si naviga nella foresta allagata, con l'acqua bassa si cammina di più" },
    { label: 'Costi', value: 'i tour con guide locali non costano tanto; la barca lenta costa poco, il tempo che richiede tanto' },
    { label: 'La regola', value: 'sicurezza prima di tutto: agenzie con guide locali esperte, niente improvvisazione' },
  ],
  ricordo:
    "L'Amazzonia peruviana l'ho fatta da Iquitos con Ruth Amazon Expedition: fantastica, fuori dai percorsi battuti e autentica. Dormire in tenda in mezzo alla foresta però non è per tutti, e va valutato bene prima di partire.",
  sicurezza: {
    titolo: 'Prima la sicurezza, poi tutto il resto',
    testo:
      "In generale questi tour non costano tanto, ma la priorità è la sicurezza: affidati ad agenzie con guide locali esperte, perché in Amazzonia l'imprevisto è dietro l'angolo e le distanze si fanno molto più lunghe di quanto sembrino sulla mappa.",
    agenzie: [
      {
        nome: 'Ruth Amazon Expedition (Iquitos, Perù)',
        testo: "È quella con cui sono andato io: spedizioni da Iquitos, anche in tenda nella riserva Pacaya-Samiria. Non ha un sito ufficiale: la si trova su TripAdvisor e si contatta da lì.",
        fatta: true,
      },
      {
        nome: 'Off Roads Travel (Brasile e Colombia)',
        testo: "La consiglio per la parte brasiliana e colombiana: hanno vari tour da Manaus e da Leticia, oltre che da Iquitos e Puerto Maldonado. Io con loro non ci sono stato.",
        url: 'https://offroadstravel.com/',
        fatta: false,
      },
    ],
  },
  porte: {
    titolo: 'Da quale porta entrare',
    intro: "Ogni porta cambia giorni, costi, fatica e persino gli animali che si vedono. Scegliere senza conoscere le altre è il modo più comune di restare delusi.",
    vediScheda: 'Apri la scheda',
    voci: [
      {
        id: 'iquitos',
        nome: 'Iquitos e Pacaya-Samiria',
        paese: 'Perù',
        href: '/destinazioni/peru/amazzonia-peruviana',
        immagine: '/images/amazzonia/fiume-foresta.jpg',
        imageAlt: "Il fiume dritto nella foresta sotto il cielo azzurro, nell'Amazzonia peruviana, visto dal drone",
        perChi: "Chi vuole il fiume come protagonista e un'Amazzonia ancora selvaggia, anche dormendo in tenda.",
        comeArrivare: 'Solo in aereo da Lima o risalendo il fiume: è la città più grande al mondo senza strade che la colleghino.',
        giorni: '5-7 giorni per avere senso',
        costo: 'spedizioni con guide locali dai prezzi contenuti; le crociere fluviali costano molto di più',
      },
      {
        id: 'puerto-maldonado',
        nome: 'Puerto Maldonado, Tambopata e Manu',
        paese: 'Perù',
        href: '/destinazioni/peru/amazzonia-peruviana',
        immagine: '/images/amazzonia/villaggio-fiume.jpg',
        imageAlt: "Un villaggio con il campo da calcio sulla riva del fiume, nell'Amazzonia peruviana, visto dal drone",
        perChi: "Chi ha pochi giorni e vuole tanta fauna, con le pareti d'argilla dove si radunano le ara.",
        comeArrivare: 'Volo breve da Cusco o da Lima, poi barca verso i lodge; il Manu si raggiunge anche via terra da Cusco.',
        giorni: '3-4 giorni a Tambopata, 6-8 per il Manu',
        costo: 'Tambopata da circa 400 USD per 3 giorni; il Manu diverse migliaia per 8 giorni',
      },
      {
        id: 'leticia',
        nome: 'Leticia e Puerto Nariño',
        paese: 'Colombia',
        immagine: '/images/amazzonia/leticia.jpg',
        imageAlt: "Ninfee giganti Victoria amazonica su uno specchio d'acqua scura ai margini della foresta a Leticia, nell'Amazzonia colombiana",
        perChi: 'Chi vuole una base semplice alla triplice frontiera e le comunità tikuna lungo il Rio delle Amazzoni.',
        comeArrivare: 'In aereo da Bogotá o in barca dal Perù; da Leticia lance rapide per Puerto Nariño in circa 2 ore.',
        giorni: '3-5 giorni',
        costo: 'tour con agenzia da circa 325 EUR; all\'aeroporto si paga una tassa turistica (importo da verificare)',
      },
      {
        id: 'manaus',
        nome: 'Manaus, Rio Negro e Anavilhanas',
        paese: 'Brasile',
        href: '/destinazioni/brasile/amazzonia-manaus',
        immagine: '/images/brasile/manaus-stock.jpg',
        perChi: "Chi vuole l'Amazzonia più facile da raggiungere, con lodge e piccole crociere per ogni budget.",
        comeArrivare: "Voli diretti dalle grandi città brasiliane; l'Incontro delle acque si fa in mezza giornata in barca.",
        giorni: '3-5 giorni',
        costo: 'tour con agenzia da circa 270 EUR per 3 giorni',
      },
      {
        id: 'ecuador',
        nome: 'Amazzonia ecuadoriana: Cuyabeno, Yasuní, Tena',
        paese: 'Ecuador',
        immagine: '/images/amazzonia/ecuador-cuyabeno.jpg',
        imageAlt: "Tramonto arancione sulla laguna della Riserva del Cuyabeno, con palme e alberi in controluce riflessi nell'acqua, nell'Amazzonia ecuadoriana",
        perChi: "Chi cerca un'Amazzonia meno turistica ma incredibile, a poche ore da Quito.",
        comeArrivare: 'Cuyabeno da Lago Agrio (bus o volo da Quito, poi canoa); Yasuní da Coca in canoa a motore; Tena e Misahuallí in bus da Quito.',
        giorni: '3-5 giorni',
        costo: 'Cuyabeno 279-499 USD per 4 giorni nei lodge comunitari (2026), più il transfer; Yasuní nei lodge di fascia alta circa 1.500 USD',
        attenzione:
          "Lago Agrio è nella fascia di 20 km dal confine colombiano che il Regno Unito sconsiglia: per Cuyabeno e il fiume Napo servono guide ufficiali e spostamenti di giorno. Chi entra in Ecuador da Colombia, Perù, Brasile o Bolivia deve avere il certificato di vaccinazione contro la febbre gialla.",
      },
      {
        id: 'rurrenabaque',
        nome: 'Rurrenabaque, Madidi e pampas',
        paese: 'Bolivia',
        href: '/destinazioni/bolivia/rurrenabaque-madidi',
        immagine: '/images/bolivia/rurrenabaque-madidi.jpg',
        perChi: 'Chi ha un budget stretto e vuole unire la foresta del Madidi alle pampas, dove gli animali si vedono più facilmente.',
        comeArrivare: 'Volo breve da La Paz (oppure molte ore di strada).',
        giorni: '3-5 giorni',
        costo: 'pampas 3 giorni circa 200-300 USD, più il volo',
      },
    ],
  },
  traversata: {
    titolo: 'Per i più temerari: la traversata in barca lenta Perù–Colombia–Brasile',
    intro:
      "Si attraversa l'Amazzonia dormendo in amaca sui ponti delle barche merci e passeggeri, da Yurimaguas o Pucallpa fino a Iquitos, poi giù per il Rio delle Amazzoni fino alla triplice frontiera e a Manaus. Io l'ho fatta tanti anni fa e i miei ricordi non sarebbero più attendibili: le informazioni qui sotto vengono da fonti recenti (2024-2026) e vanno ricontrollate prima di partire.",
    avvertenza:
      "Attenzione: il Regno Unito sconsiglia i viaggi non essenziali sul Rio delle Amazzoni (Solimões) a ovest di Codajás, cioè su gran parte della tratta Tabatinga–Manaus, per la presenza di pirati e narcotrafficanti; a settembre 2026 un traghetto con oltre 200 passeggeri è stato assaltato di notte. Se vuoi comunque vedere il fiume, la tratta peruviana fino alla triplice frontiera è la più sensata, e da Tabatinga a Manaus si può volare. Controlla sempre viaggiaresicuri.it prima di partire.",
    tratte: [
      {
        tratta: 'Yurimaguas o Pucallpa → Iquitos',
        come: 'barca lenta (lancha) con ponte per le amache e qualche cabina',
        durata: '3-5 giorni da Yurimaguas, 4-6 da Pucallpa',
        costo: 'circa 80-150 PEN in amaca, 150-200 PEN in cabina, pasti inclusi',
        note: 'Il biglietto si compra al porto, non online; le partenze slittano spesso. Prezzi da resoconti 2014-2023.',
      },
      {
        tratta: 'Iquitos → Santa Rosa (triplice frontiera)',
        come: 'barca lenta da Puerto Masusa, oppure «rápido»',
        durata: 'lenta circa 3 giorni; rápido 16-20 ore',
        costo: 'lenta 80-95 PEN in amaca, circa 200 PEN in cabina con chiave, 3 pasti; rápido circa 120 PEN',
        note: 'La lenta parte ogni giorno tranne la domenica verso le 18-19; il rápido più economico (Zoe Alexa) parte martedì, giovedì e sabato alle 17 da Puerto Ganzo Azul. Niente vendita online (dati agosto 2026).',
      },
      {
        tratta: 'Santa Rosa → Leticia → Tabatinga',
        come: 'barchetta fino a Leticia, poi a piedi',
        durata: '10 minuti di barca',
        costo: 'circa 5 PEN',
        note: 'Tra Leticia e Tabatinga non c’è una frontiera fisica, ma i timbri servono (vedi documenti).',
      },
      {
        tratta: 'Tabatinga → Manaus',
        come: 'barco recreio (lento) dal terminal Portobrás, oppure lancha veloce',
        durata: 'lento circa 4 giorni e 3 notti; veloce circa 30 ore',
        costo: 'lento circa 290 BRL in amaca, 3 pasti e acqua; veloce circa 1.010 BRL (aprile 2026)',
        note: 'Il lento non parte tutti i giorni; il veloce ogni giorno alle 10. A bordo ci sono controlli di polizia con cani antidroga. È la tratta sconsigliata dal Regno Unito (vedi sopra).',
      },
    ],
    documentiTitolo: 'Timbri e documenti',
    documenti: [
      "Uscita dal Perù all'ufficio Migraciones di Santa Rosa, vicino al molo.",
      "Ingresso in Colombia all'ufficio galleggiante davanti al porto di Leticia o all'aeroporto; l'uscita dalla Colombia si timbra all'aeroporto di Leticia.",
      'Ingresso in Brasile alla Polícia Federal di Tabatinga entro 24 ore dall’uscita dalla Colombia: nel 2026 l’ufficio aveva poco personale, mettici tempo.',
      'Febbre gialla: il vaccino è raccomandato per tutta l’Amazzonia e conviene avere il certificato internazionale; l’Ecuador lo chiede a chi arriva da Perù, Colombia, Brasile e Bolivia.',
      'A Leticia si paga una tassa turistica in aeroporto: le fonti danno importi diversi, verificala sul posto.',
      'Orari e sedi degli uffici cambiano spesso: chiedi conferma appena arrivi.',
    ],
    portareTitolo: 'Cosa portare',
    portare: [
      "L'amaca e due corde da circa 2 metri (non le danno a bordo).",
      'Passaporto, soldi e telefono sempre addosso, anche quando dormi o vai in bagno; una borsa con lucchetto per il resto.',
      'Piatto, tazza e posate, acqua, snack e frutta per le soste lunghe.',
      'Repellente, carta igienica, uno strato caldo per le notti ventose sul fiume.',
      'Una prolunga: le prese sono poche e in comune.',
      'Contanti nella valuta del Paese prima di imbarcarti: in Brasile non accettano pesos colombiani e con la carta si paga di più.',
    ],
    truffeTitolo: 'Truffe e rischi a bordo',
    truffe: [
      'Agli stranieri capita di sentirsi chiedere di più: confronta i prezzi e tratta.',
      'Compra il biglietto solo in biglietteria al porto o direttamente dalla compagnia.',
      'Agli arrivi in Perù ci sono finti taxi e finti tour operator: per verificare un operatore si può chiedere a iPerú.',
      'Non accettare mai di portare bagagli o pacchi di altri: a bordo ci sono controlli antidroga.',
      "Ayahuasca: le cerimonie per turisti non sono regolamentate e ci sono stati malori gravi, morti e violenze sessuali. Se proprio, mai da soli e mai con chi la propone per strada.",
    ],
    zoneTitolo: 'Zone da evitare',
    zone: [
      'Perù: il confine con la Colombia lungo il fiume Putumayo (Regno Unito: viaggi non essenziali sconsigliati entro 20 km; Stati Uniti: livello 4). Il Rio delle Amazzoni e la zona da Caballococha a Santa Rosa sono esclusi dall’avviso britannico.',
      'Perù: Putumayo, Mariscal Ramón Castilla e i distretti Torres Causana e Napo sono in stato di emergenza (prorogato a ottobre 2026): pesa anche sulla rotta Ecuador–Iquitos lungo il Napo.',
      'Brasile: Solimões e affluenti a ovest di Codajás, il Vale do Javari (terra indigena con accesso regolato) e il Rio Negro a nord di Barcelos.',
      'Colombia: diversi comuni del dipartimento di Putumayo; Leticia e il dipartimento di Amazonas non sono negli avvisi britannici.',
      'Ecuador: la fascia di 20 km dal confine colombiano, Lago Agrio compreso.',
    ],
    fonti: 'Fonti: avvisi di viaggio del Regno Unito (FCDO), Stati Uniti e Svizzera, decreti del governo peruviano, resoconti di viaggio 2024-2026. Aggiornato a novembre 2026.',
  },
  faq: [
    { domanda: "Qual è la porta migliore per l'Amazzonia?", risposta: "Dipende da giorni e budget: Puerto Maldonado per 3-4 giorni con tanta fauna, Iquitos per una spedizione fluviale di 5-7 giorni, Manaus per la logistica più semplice, l'Ecuador per un'Amazzonia meno turistica vicino a Quito, Rurrenabaque per il budget più basso." },
    { domanda: "È sicuro viaggiare in Amazzonia?", risposta: "Le porte turistiche sì, con agenzie e guide locali esperte. Vanno evitate le zone di confine segnalate dagli avvisi ufficiali (Putumayo, Vale do Javari, il Solimões a ovest di Codajás) e controllato viaggiaresicuri.it prima di partire." },
    { domanda: "Quanto dura la traversata in barca da Iquitos a Manaus?", risposta: "Circa una settimana di navigazione: 3 giorni da Iquitos alla triplice frontiera in barca lenta e circa 4 giorni da Tabatinga a Manaus, più i tempi per i timbri e le attese delle partenze." },
    { domanda: "Serve il vaccino contro la febbre gialla?", risposta: "È raccomandato per tutta l'Amazzonia e conviene portare il certificato internazionale; l'Ecuador lo chiede a chi arriva da Perù, Colombia, Brasile e Bolivia." },
  ],
  etichette: {
    perChi: 'Per chi',
    comeArrivare: 'Come si arriva',
    giorni: 'Giorni',
    costo: 'Costo indicativo',
    attenzione: 'Attenzione',
    durata: 'Durata',
    come: 'Come',
    note: 'Da sapere',
    tratta: 'Tratta',
    nonFatta: 'Non l’ho fatta di persona',
    fatta: 'L’ho fatta io',
    sitoUfficiale: 'Sito ufficiale',
    faqTitolo: 'Domande frequenti',
  },
}

// en ed es: traduzioni di `it` (stessa struttura), in amazzonia-en.ts e amazzonia-es.ts
import { en } from './amazzonia-en'
import { es } from './amazzonia-es'

export const AMAZZONIA: Record<Lingua, ContenutoAmazzonia> = { it, en, es }
