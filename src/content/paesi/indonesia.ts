import type { Paese } from '@/lib/types'

// L'Indonesia ha ora il suo primo viaggio-diario combinato: "Indonesia in 30
// giorni" (src/content/viaggi/48-indonesia-itinerario.md, dati in
// src/content/viaggi-dati/indonesia-itinerario.ts), tripPrincipaleSlug
// 'indonesia-itinerario' qui sotto. Sette delle otto isole sono collegate al
// viaggio (Raja Ampat esclusa per incompatibilità di stagione, vedi la sua
// scheda). Mancano ancora le foto: verranno caricate in un secondo momento,
// in un task separato da questo primo itinerario testuale.

export const indonesia: Paese = {
  slug: 'indonesia',
  nome: 'Indonesia',
  continente: 'Asia',
  titolo: 'Indonesia isola per isola: da Sumatra a Raja Ampat',
  descrizione:
    'Otto isole molto diverse tra loro (Sumatra, Giava, Bali, Sulawesi, Lombok e le Gili, Komodo, Flores, Raja Ampat), che per ora racconto come guida pratica isola per isola. Gli itinerari che combinano più isole in un unico viaggio arriveranno appena saranno pronti gli aneddoti e le foto.',
  periodoMigliore:
    'in generale aprile-ottobre (stagione secca) per la maggior parte dell\'arcipelago; Raja Ampat fa eccezione con la finestra migliore tra ottobre e aprile',
  durataConsigliata:
    'variabile: 5-7 giorni a isola per una visita approfondita, oppure 3-4 settimane per combinarne più di una in un unico giro',
  budgetIndicativo:
    'cambia molto da isola a isola: si va dal budget contenuto di Sumatra e Flores ai costi più alti di Raja Ampat, per via della logistica e del permesso obbligatorio',
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua e in buone condizioni. Per turismo serve il visto on arrival: si può ottenere all\'arrivo in aeroporto oppure, meglio, richiedere online l\'e-VOA su evisa.imigrasi.go.id almeno una settimana prima. Costa circa 500.000 IDR (35 € circa) e dà diritto all\'autogate. Da ottobre 2025 è obbligatoria anche la All Indonesia Arrival Card, un modulo elettronico da compilare prima dell\'arrivo.',
    valuta: 'Rupia indonesiana (IDR), indicativamente 1 € = 17.000-18.000 IDR. Si maneggiano cifre con molti zeri: attenzione a non confondere i tagli da 10.000 e 100.000.',
    pagamenti:
      'Carte accettate a Bali, nelle grandi città di Giava e nei resort; fuori da lì servono contanti. I bancomat sono diffusi a Bali e Giava, rari o assenti a Raja Ampat, nell\'interno di Flores e sulle isole minori: conviene arrivarci già riforniti.',
    connettivita:
      'Telkomsel ha la copertura migliore soprattutto nelle isole remote; XL Axiata e Indosat sono alternative valide nelle zone più popolate. La SIM va registrata con il passaporto. A Raja Ampat e in alcune zone di Flores il segnale è assente anche con l\'operatore migliore.',
    salute:
      'Nessuna vaccinazione obbligatoria salvo febbre gialla per chi proviene da paesi a rischio. Consigliate epatite A e B, tifo, e la valutazione della profilassi antimalarica per la Papua occidentale (Raja Ampat) e alcune zone orientali. Acqua sempre in bottiglia; mettere in conto la "Bali belly" nei primi giorni.',
    sicurezza:
      'Il paese è nel complesso tranquillo per i viaggiatori. I rischi sono altri: gli incidenti in scooter sono la prima causa di guai per i turisti a Bali e Lombok, le correnti marine di alcune spiagge sono insidiose e i vulcani attivi possono chiudere aeroporti con poco preavviso. Attenzione anche ai contratti di noleggio scooter con danni contestati alla riconsegna.',
    trasportiInterni:
      'Con un arcipelago di queste dimensioni i voli interni sono la spina dorsale degli spostamenti (Garuda, Lion Air, Citilink, Wings Air), affiancati da traghetti e barche locali. A Bali e Giava Grab e Gojek sono comodi ed economici. Sulle Gili non circolano veicoli a motore: solo cidomo e biciclette.',
    costoVita:
      'Tra le mete più economiche del sud-est asiatico per alloggi e cibo, con l\'eccezione di Raja Ampat, dove logistica e permesso del parco marino alzano parecchio il conto.',
    lingua: 'Bahasa indonesiano, affiancato da centinaia di lingue locali. L\'inglese è diffuso a Bali e nei contesti turistici, molto meno altrove.',
    elettricita: '230V, 50Hz, prese di tipo C e F: sono le stesse italiane, quindi non serve l\'adattatore. È una delle poche mete dove capita.',
    fusoOrario:
      'Tre fusi orari diversi: WIB (UTC+7) per Sumatra e Giava, WITA (UTC+8) per Bali, Lombok, Sulawesi, Komodo e Flores, WIT (UTC+9) per la Papua e Raja Ampat. Conviene tenerne conto quando si incastrano i voli interni.',
    clima:
      'Stagione secca indicativamente da aprile a ottobre per gran parte dell\'arcipelago. Raja Ampat fa eccezione, con la finestra migliore tra ottobre e aprile: è l\'errore di pianificazione più comune di chi prova a unire Raja Ampat al resto del paese in un unico viaggio.',
    festivita:
      'Il Nyepi, il capodanno balinese (marzo, data variabile), è il "giorno del silenzio": a Bali si fermano tutte le attività per 24 ore, l\'aeroporto chiude e non si può uscire dall\'alloggio. Va saputo in anticipo, perché può bloccare un itinerario.',
    emergenze: 'Numero unico 112. L\'Ambasciata d\'Italia è a Giacarta, con un consolato onorario a Denpasar (Bali).',
    primaDiPartire: {
      documento: 'Passaporto con almeno 6 mesi di validità all\'ingresso, due pagine libere e perfettamente integro: per strappi o scollature si viene respinti.',
      visto: 'Visto all\'arrivo (e-VOA) per 30 giorni, 500.000 IDR, rinnovabile una volta; online almeno una settimana prima. Dichiarazione All Indonesia nelle 72 ore prima. UK: uguale.',
      vaccini: 'Febbre gialla obbligatoria da 9 mesi in su se si arriva da paesi a rischio. Consigliate: epatite A e B, tifo. Malaria nell\'est (anche Komodo) e in zone rurali.',
      prese: '230V, 50Hz, prese di tipo C e F: le spine italiane a due poli tondi e le Schuko entrano, per la tripolare serve un adattatore.',
      sim: 'SIM in vendita ai banchi degli operatori in aeroporto, da registrare col passaporto.',
      pagamenti: 'Carte accettate nei luoghi turistici, molto usati i pagamenti da app e contactless. L\'euro si cambia poco fuori dalle zone turistiche. Bali: tassa turistica di 150.000 IDR.',
      lingua: 'Indonesiano (bahasa Indonesia).',
      frasi: [
        { frase: 'Selamat pagi', pronuncia: 'se-là-mat pà-ghi', significato: 'Buongiorno' },
        { frase: 'Terima kasih', pronuncia: 'te-rì-ma kà-si', significato: 'Grazie' },
        { frase: 'Tolong', pronuncia: 'tò-long', significato: 'Per favore (quando si chiede qualcosa)' },
        { frase: 'Permisi', pronuncia: 'per-mì-si', significato: 'Permesso, mi scusi' },
        { frase: 'Berapa harganya?', pronuncia: 'be-rà-pa har-gà-nia', significato: 'Quanto costa?' },
      ],
      avvisi: 'https://www.viaggiaresicuri.it/find-country/country/IDN',
    },
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['natura', 'avventura', 'isole', 'diving'],
  heroImageAlt: 'Il cratere del Bromo che fuma nella caldera piena di nebbia alla luce dell\'alba, Giava, Indonesia',
  heroImage: '/images/indonesia/bromo-alba-drone-riccardo.jpg',
  tripPrincipaleSlug: 'indonesia-itinerario',
}
