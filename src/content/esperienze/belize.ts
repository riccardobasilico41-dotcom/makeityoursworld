import type { Esperienza } from '@/lib/types'

// Paese non ancora visitato: miaEsperienza assente e giudizio 'da-verificare'
// ovunque. Prezzi e modalità sono indicativi, da riverificare prima di
// prenotare.

export const esperienzeBelize: Esperienza[] = [
  {
    slug: 'hol-chan-shark-ray-alley',
    immagine: '/images/belize/hol-chan-shark-ray-alley.jpg',
    paeseSlug: 'belize',
    destinazioneSlug: 'caye-caulker',
    nome: 'Snorkeling a Hol Chan e Shark Ray Alley',
    localita: 'Hol Chan Marine Reserve, tra Caye Caulker e Ambergris Caye',
    cosE:
      'Un\'uscita in barca di mezza giornata (o di una giornata intera) con più soste di snorkeling: il canale naturale di Hol Chan, dove la barriera si apre e si radunano pesci di ogni taglia, tartarughe e barracuda, e Shark Ray Alley, dove da decenni squali nutrice e razze si avvicinano alle barche.',
    percheFarla:
      'È il modo più diretto ed economico per capire perché la barriera corallina del Belize è patrimonio UNESCO: in poche ore si nuota accanto a squali nutrice, razze, tartarughe e, con un po\' di fortuna, lamantini.',
    durata: 'mezza giornata (3-4 ore) o giornata intera con più soste',
    periodo: 'tutto l\'anno, con visibilità migliore nella stagione secca (dicembre-aprile)',
    costo: 'indicativamente 60-100 BZD a persona per il tour di mezza giornata, più le tasse d\'ingresso al parco marino, spesso escluse dal prezzo pubblicizzato',
    comePrenotare: 'Con gli operatori sull\'isola, anche il giorno prima; meglio scegliere barche con gruppi piccoli.',
    cosaPortare: 'Crema solare reef-safe (le altre sono vietate in diverse aree protette), una maglietta a maniche lunghe da mare e, per chi vuole fare foto, una macchina subacquea.',
    perChiEAdatta: 'Adatta anche a chi non è esperto: si nuota in superficie e il giubbotto c\'è, ma bisogna sentirsi a proprio agio in mare aperto.',
    giudizio: 'da-verificare',
    alternative: ['Immersione con bombole sugli stessi siti per chi è brevettato'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Uno squalo nutrice nuota sopra il reef di coralli e gorgonie al largo di Ambergris Caye',
  },
  {
    slug: 'grotta-atm',
    immagine: '/images/viaggi/centro-america-itinerario/giorno-14-atm-cave.jpg',
    paeseSlug: 'belize',
    destinazioneSlug: 'san-ignacio-cayo',
    nome: 'Grotta ATM (Actun Tunichil Muknal)',
    localita: 'Tapir Mountain Nature Reserve, distretto del Cayo',
    cosE:
      'Un\'escursione di una giornata in una grotta che i maya usavano per i riti. Ci si arriva con una camminata nella giungla e tre guadi, si entra a nuoto e si va avanti per ore fra passaggi stretti e camere allagate, fino alle sale dove ceramiche e resti umani sono rimasti dove furono lasciati oltre mille anni fa, compresa la famosa «Crystal Maiden».',
    percheFarla:
      'È una delle poche grotte archeologiche al mondo dove si vedono i reperti ancora in situ, senza vetrine né ricostruzioni. È archeologia e fatica insieme, e molti la ricordano come il momento più forte del viaggio in Belize.',
    durata: 'giornata intera, circa 7-8 ore incluso il trasporto',
    periodo: 'tutto l\'anno, con possibili chiusure dopo piogge intense per il livello dell\'acqua nella grotta',
    costo: 'indicativamente 100-140 USD a persona, con trasporto, guida, ingresso e pranzo inclusi',
    comePrenotare:
      'Solo con operatori che hanno la licenza per la grotta: gli accessi sono contingentati e senza una guida autorizzata non si entra. Meglio prenotare qualche giorno prima.',
    cosaPortare:
      'Vestiti che si possono bagnare del tutto, scarpe chiuse con buona presa da usare anche in acqua, calzini (nelle sale coi reperti si cammina senza scarpe, in calzini). Sono vietate le macchine fotografiche di ogni tipo, telefoni compresi.',
    perChiEAdatta:
      'Bisogna saper nuotare e stare tranquilli in spazi stretti e al buio: in certi passaggi si va avanti con l\'acqua fino al petto e certe fessure si passano di lato. Non adatta a chi soffre di claustrofobia.',
    giudizio: 'da-verificare',
    alternative: ['Cave tubing lungo il fiume Caves Branch, molto più leggero e senza componente archeologica'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Formazioni calcaree e stalagmiti riflesse nell\'acqua della grotta Actun Tunichil Muknal',
  },
]
