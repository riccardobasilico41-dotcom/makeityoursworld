import type { Destinazione } from '@/lib/types'

// Destinazioni delle Filippine per la guida "filippine-itinerario" (74), costruite su
// ricerca documentale; tutte visitate dall'autore. miaEsperienza resta assente.
// Prezzi indicativi a ottobre 2026, in pesos filippini (PHP).

export const destinazioniFilippine: Destinazione[] = [
  {
    slug: 'el-nido',
    paeseSlug: 'filippine',
    ordine: 1,
    nome: 'El Nido',
    tipologia: ['mare', 'island hopping', 'lagune'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Nel nord di Palawan, una baia chiusa da falesie di calcare nero e l\'arcipelago di Bacuit, con lagune interne, spiagge e grotte raggiungibili solo in barca.',
    percheAndarci: 'Per le lagune di Miniloc, le isole di Bacuit e spiagge come Nacpan, tra i paesaggi marini più famosi dell\'Asia.',
    cosaVedere: [
      'Big Lagoon e Small Lagoon a Miniloc (Tour A)',
      'Hidden Beach, Secret Beach e Matinloc Shrine (Tour C)',
      'La spiaggia di Nacpan e Twin Beach',
      'Il belvedere del Taraw Cliff',
    ],
    cosaFare: [
      'Island hopping con i tour A, B, C e D',
      'Kayak all\'interno delle lagune',
      'Spedizione in barca di più giorni fino a Coron',
    ],
    doveDormire:
      'Il paese (El Nido town) per prezzi e ristoranti, Corong-Corong per i tramonti e la calma, Nacpan e Lio per spiagge più tranquille. Economiche: ostelli e guesthouse in paese · fascia media: hotel a Corong-Corong · lusso: i resort privati di El Nido sulle isole.',
    doveMangiare: 'Pesce alla griglia e kinilaw (pesce crudo marinato nell\'aceto) in paese; adobo, sinigang e lechon nelle carinderie.',
    comeArrivare:
      'Volo AirSwift da Manila sull\'aeroporto di Lio (caro), oppure volo su Puerto Princesa e van di 5-6 ore; fast craft da Coron (3,5-4 ore).',
    comeSpostarsi: 'Tricycle e scooter a noleggio; barche dei tour dal porto e da Corong-Corong.',
    periodoMigliore: 'da gennaio ad aprile; tra luglio e ottobre molti tour vengono annullati per il mare',
    costi:
      'Tassa ambientale (ETDF) 400 PHP valida 10 giorni; tour di island hopping indicativamente 1.400-1.900 PHP a persona con pranzo, più gli ingressi dei siti (Big Lagoon a numero chiuso, 200-300 PHP); kayak a parte (prezzi indicativi).',
    erroriDaEvitare: [
      'Prenotare il Tour A all\'ultimo in alta stagione: gli ingressi alla Big Lagoon sono a fasce orarie limitate',
      'Arrivare senza contanti: gli ATM sono pochi e spesso vuoti',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Falesie calcaree e acqua turchese nell\'arcipelago di Bacuit, El Nido',
    immagine: '/images/viaggi/filippine-itinerario/giorno-03-el-nido.jpg',
  },
  {
    slug: 'coron',
    paeseSlug: 'filippine',
    ordine: 2,
    nome: 'Coron',
    tipologia: ['mare', 'relitti', 'laghi'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola di Coron e quella di Busuanga, a nord di Palawan: laghi d\'acqua dolce tra rocce calcaree, isolotti di sabbia bianca e una baia piena di relitti giapponesi del 1944.',
    percheAndarci: 'Per il lago Kayangan e il Barracuda, le Twin Lagoon e per le immersioni sui relitti della Seconda guerra mondiale.',
    cosaVedere: [
      'Il lago Kayangan e il suo belvedere',
      'Il lago Barracuda, con l\'acqua che cambia temperatura in profondità',
      'Le Twin Lagoon',
      'Le isole di Malcapuya, Banana e Bulog Dos',
      'Il monte Tapyas al tramonto',
    ],
    cosaFare: [
      'Immersioni sui relitti di Coron Bay (Okikawa Maru, Akitsushima, Irako)',
      'Snorkeling sul relitto Skeleton Wreck',
      'Le sorgenti calde di Maquinit la sera',
    ],
    doveDormire: 'Coron town per comodità; resort su isole private per chi vuole spendere.',
    comeArrivare: 'Voli su Busuanga (aeroporto di Francisco B. Reyes, 40 minuti da Coron town) da Manila e Cebu; fast craft da El Nido.',
    comeSpostarsi: 'Tricycle in paese, barche dei tour dal porto.',
    periodoMigliore: 'da dicembre a maggio',
    costi:
      'Tour di island hopping indicativamente 1.500-2.500 PHP a persona con pranzo, più gli ingressi di ciascun sito (Kayangan intorno ai 300-400 PHP); due immersioni sui relitti indicativamente 4.000-5.500 PHP (prezzi indicativi).',
    erroriDaEvitare: [
      'Andare al Kayangan a metà mattina, quando arrivano tutte le barche insieme',
      'Fare immersioni nei relitti interni senza brevetto e formazione adeguati',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Le scogliere calcaree dell\'isola di Coron che scendono nell\'acqua turchese',
    immagine: '/images/viaggi/filippine-itinerario/giorno-06-coron.jpg',
  },
  {
    slug: 'cebu-moalboal',
    paeseSlug: 'filippine',
    ordine: 3,
    nome: 'Cebu e Moalboal',
    tipologia: ['mare', 'immersioni', 'canyoning'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La costa sud-occidentale dell\'isola di Cebu, con la barriera di Panagsama Beach a Moalboal, le cascate di Kawasan a Badian e la città di Cebu come snodo dei voli.',
    percheAndarci:
      'Per nuotare in mezzo a un banco di milioni di sardine a pochi metri dalla riva, per le tartarughe marine e per il canyoning nelle gole di Kawasan.',
    cosaVedere: [
      'Il banco di sardine di Panagsama Beach',
      'Pescador Island, in barca',
      'Le cascate di Kawasan',
      'White Beach a Moalboal',
    ],
    cosaFare: [
      'Snorkeling dalla riva con le sardine e le tartarughe',
      'Canyoning nelle gole di Kawasan',
      'Immersioni sul muro di Pescador',
    ],
    doveDormire: 'Panagsama Beach a Moalboal, con guesthouse e resort piccoli direttamente sul reef.',
    comeArrivare: 'Aeroporto di Mactan-Cebu, poi 3 ore in auto privata o 4 in bus Ceres dal South Bus Terminal.',
    comeSpostarsi: 'Tricycle e scooter; barche per Pescador.',
    periodoMigliore: 'da dicembre a maggio',
    costi: 'Canyoning a Kawasan indicativamente 1.500-2.500 PHP con guida; snorkeling dalla riva gratuito o con piccola tassa; immersione 1.500-2.000 PHP (prezzi indicativi).',
    erroriDaEvitare: [
      'Andare a Oslob a nuotare con gli squali balena: gli animali vengono nutriti per tenerli sul posto, e i biologi marini criticano questa pratica',
      'Toccare le tartarughe o inseguirle in acqua',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'L\'isolotto di Pescador davanti a Moalboal, circondato dal reef',
    immagine: '/images/viaggi/filippine-itinerario/giorno-08-cebu-moalboal.jpg',
  },
  {
    slug: 'bohol',
    paeseSlug: 'filippine',
    ordine: 4,
    nome: 'Bohol e Panglao',
    tipologia: ['paesaggio', 'mare', 'natura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola delle Visayas centrali con le colline coniche delle Chocolate Hills, i tarsi nella foresta e l\'isola di Panglao, collegata da un ponte, con le spiagge e i reef di Balicasag.',
    percheAndarci: 'Per le Chocolate Hills, il tarsio delle Filippine, il fiume Loboc e lo snorkeling a Balicasag.',
    cosaVedere: [
      'Le Chocolate Hills dal belvedere di Carmen',
      'Il Philippine Tarsier Sanctuary di Corella',
      'Il fiume Loboc',
      'Le chiese coloniali di Baclayon e Loboc',
      'Balicasag e Virgin Island in barca da Panglao',
    ],
    cosaFare: ['Giro dell\'isola in scooter o con autista', 'Snorkeling o immersioni a Balicasag', 'Uscita all\'alba per i delfini'],
    doveDormire: 'Panglao, ad Alona Beach o nelle baie più tranquille di Dumaluan e Doljo.',
    comeArrivare: 'Traghetto veloce OceanJet da Cebu a Tagbilaran (2 ore), oppure volo sull\'aeroporto di Panglao.',
    comeSpostarsi: 'Scooter, tricycle o auto con autista per la giornata.',
    periodoMigliore: 'da dicembre a maggio',
    costi:
      'Chocolate Hills e santuario dei tarsi indicativamente 100-200 PHP ciascuno; auto con autista per il giro dell\'isola 2.500-3.500 PHP; uscita a Balicasag 1.500-2.500 PHP a barca (prezzi indicativi).',
    erroriDaEvitare: [
      'Visitare i tarsi nei finti «santuari» lungo la strada: sono animali notturni e le visite li stressano; il centro di Corella è quello gestito dalla fondazione',
      'Usare il flash con i tarsi',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Le Chocolate Hills di Bohol, colline coniche coperte d\'erba',
    immagine: '/images/viaggi/filippine-itinerario/giorno-11-bohol.jpg',
  },
  {
    slug: 'siargao',
    paeseSlug: 'filippine',
    ordine: 5,
    nome: 'Siargao',
    tipologia: ['surf', 'mare', 'isole'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola a forma di lacrima affacciata sull\'oceano Pacifico, al largo di Mindanao nord-orientale: palmeti, lagune, isolotti di sabbia e l\'onda di Cloud 9.',
    percheAndarci: 'Per il surf, l\'island hopping tra Naked, Daku e Guyam, la laguna di Sugba e l\'aria rilassata da isola di surfisti.',
    cosaVedere: [
      'La passerella di Cloud 9 a General Luna',
      'Le isole di Naked, Daku e Guyam',
      'La laguna di Sugba a Del Carmen',
      'Le piscine di roccia di Magpupungko con la bassa marea',
      'La strada tra i palmeti di Coconut Road',
    ],
    cosaFare: ['Lezioni di surf per principianti', 'Giro dell\'isola in scooter', 'Paddle board nella laguna di Sugba'],
    doveDormire: 'General Luna, lungo la Tourism Road e verso Cloud 9; Pacifico per chi cerca un villaggio più tranquillo.',
    doveMangiare: 'Locali internazionali a General Luna, pesce alla griglia e carinderie fuori dal centro.',
    comeArrivare: 'Voli diretti da Manila e Cebu sull\'aeroporto di Sayak, poi 45 minuti fino a General Luna.',
    comeSpostarsi: 'Scooter a noleggio o habal-habal (moto-taxi); van condivisi per l\'aeroporto.',
    periodoMigliore: 'da marzo a ottobre per il mare calmo; surf con onde grosse da settembre a novembre; da dicembre a febbraio vento e pioggia',
    costi:
      'Island hopping indicativamente 1.500-2.000 PHP a persona; lezione di surf 500-1.000 PHP con istruttore e tavola; scooter 350-500 PHP al giorno (prezzi indicativi).',
    erroriDaEvitare: [
      'Guidare lo scooter senza esperienza, o di notte: gli incidenti sono il primo problema dei turisti sull\'isola',
      'Andare a Magpupungko con l\'alta marea, quando le piscine non si vedono',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'La passerella e la torre di legno sul reef di Cloud 9, lo spot di surf di Siargao',
    immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg',
  },
]
