/**
 * Liste pronte di cosa mettere in valigia, una per tipo di viaggio. Le voci
 * vengono dai «Consigli pratici» e dalle schede pratiche degli itinerari in
 * src/content/viaggi: qui non si inventa niente che gli articoli non dicano.
 *
 * `ricerca` è la query per Amazon.it (generica, senza marche): il link si
 * costruisce con `link.amazon()` in src/lib/affiliazioni.ts.
 * `viaggi` sono gli slug degli itinerari a cui la lista si adatta: ogni
 * viaggio compare al massimo in una lista.
 */

export type VoceAttrezzatura = { nome: string; perche: string; ricerca: string }
export type SezioneAttrezzatura = { titolo: string; voci: VoceAttrezzatura[] }
export type ListaAttrezzatura = {
  slug: string
  titolo: string
  sottotitolo: string
  intro: string
  sezioni: SezioneAttrezzatura[]
  viaggi: string[]
}

export const listeAttrezzatura: ListaAttrezzatura[] = [
  {
    slug: "islanda-in-tenda",
    titolo: "Islanda in tenda",
    sottotitolo: "Ring Road in campeggio, tra vento, umidità e notti vicine allo zero",
    intro:
      "In estate in Islanda si sta tra 10 e 20 °C di giorno, ma di notte si scende vicino a 0 °C con molta umidità, e il vento è così forte che l'ombrello non serve a niente. Questa è la lista del giro in tenda sulla Ring Road: si dorme in campeggio, si ricarica il telefono una volta al giorno e si lava poco.",
    sezioni: [
      {
        titolo: "Per dormire in campeggio",
        voci: [
          {
            nome: "Sacco a pelo con comfort vicino a 0 °C",
            perche: "Di notte la temperatura arriva vicino allo zero, anche a luglio.",
            ricerca: "sacco a pelo mummia temperatura comfort 0 gradi",
          },
          {
            nome: "Materassino autogonfiante",
            perche: "Isola dal terreno umido dei campeggi: senza, il freddo sale da sotto.",
            ricerca: "materassino autogonfiante campeggio",
          },
          {
            nome: "Cuscino da campeggio gonfiabile",
            perche: "Occupa pochissimo nello zaino e serve tutte le notti del giro.",
            ricerca: "cuscino gonfiabile campeggio",
          },
          {
            nome: "Tazza da campeggio",
            perche: "Per caffè e zuppe nelle cucine comuni dei campeggi.",
            ricerca: "tazza campeggio acciaio",
          },
          {
            nome: "Coltellino multiuso",
            perche: "Per la spesa al supermercato e i pranzi fuori dall'auto. Va in stiva, non in cabina.",
            ricerca: "coltellino multiuso tascabile",
          },
        ],
      },
      {
        titolo: "Vestiti contro vento e umidità",
        voci: [
          {
            nome: "Intimo termico",
            perche: "Primo strato per le sere in tenda e le escursioni con il cielo coperto.",
            ricerca: "intimo termico uomo donna maglia calzamaglia",
          },
          {
            nome: "Giacca impermeabile con cappuccio",
            perche: "Il vento è troppo forte per l'ombrello: serve un guscio vero, con cappuccio.",
            ricerca: "giacca impermeabile antivento con cappuccio trekking",
          },
          {
            nome: "Scaldacollo",
            perche: "Sulle cascate e sulle spiagge nere il vento entra dal collo prima che da ogni altra parte.",
            ricerca: "scaldacollo pile",
          },
          {
            nome: "Berretto e guanti leggeri",
            perche: "Servono anche d'estate, soprattutto la sera e sulle barche del whale watching.",
            ricerca: "berretto guanti pile set",
          },
          {
            nome: "Calzini alti e spessi",
            perche: "Si cammina parecchio con scarpe che a volte restano umide: meglio averne più paia.",
            ricerca: "calze trekking lana merino alte",
          },
          {
            nome: "Costume da bagno che non temi di rovinare",
            perche: "Le acque geotermali della Blue Lagoon rovinano i tessuti se non si sciacquano subito.",
            ricerca: "costume da bagno sportivo",
          },
        ],
      },
      {
        titolo: "Zaini e bagagli",
        voci: [
          {
            nome: "Zaino da 50-60 litri",
            perche: "Meglio del trolley su campeggi e sterrati, da imbarcare in stiva con le low cost.",
            ricerca: "zaino trekking 60 litri",
          },
          {
            nome: "Zainetto da escursione",
            perche: "Il bagaglio grande resta in auto, per le camminate basta uno zaino piccolo.",
            ricerca: "zaino escursionismo 20 litri",
          },
          {
            nome: "Custodia impermeabile per il telefono",
            perche: "Per le uscite bagnate, come il whale watching e le cascate da vicino.",
            ricerca: "custodia impermeabile telefono",
          },
          {
            nome: "Scarpe da trekking impermeabili",
            perche: "Le scarpe principali del viaggio: l'articolo consiglia di portarne anche un paio di riserva.",
            ricerca: "scarpe trekking impermeabili",
          },
        ],
      },
      {
        titolo: "Utili tutti i giorni",
        voci: [
          {
            nome: "Borraccia",
            perche: "L'acqua del rubinetto islandese è ottima: comprarla in bottiglia non ha senso.",
            ricerca: "borraccia acciaio 1 litro",
          },
          {
            nome: "Power bank capiente",
            perche: "Nei campeggi si riesce a ricaricare solo una volta al giorno.",
            ricerca: "power bank 20000 mAh",
          },
          {
            nome: "Kit di primo soccorso",
            perche: "Tra un paese e l'altro passano ore di strada: un kit personale e uno da condividere.",
            ricerca: "kit primo soccorso da viaggio",
          },
          {
            nome: "Moka da viaggio",
            perche: "In Islanda caffè e moka sono carissimi e difficili da trovare: meglio portarli da casa.",
            ricerca: "moka caffettiera 3 tazze",
          },
        ],
      },
    ],
    viaggi: ["islanda-2024"],
  },
  {
    slug: "inverno-artico",
    titolo: "Inverno artico",
    sottotitolo: "Lapponia svedese e Tromsø, tra aurora, husky e notte polare",
    intro:
      "Ad Abisko e Kiruna le temperature restano ben sotto lo zero per tutta la settimana, a Tromsø il problema è il vento sul lungomare e durante le uscite in slitta. Le escursioni si fanno di sera e di notte, spesso ferme ad aspettare l'aurora. Molti operatori forniscono tute termiche, ma tutto quello che sta sotto va portato da casa.",
    sezioni: [
      {
        titolo: "Gli strati",
        voci: [
          {
            nome: "Intimo termico in lana merino",
            perche: "È lo strato che si tiene addosso tutto il giorno, anche sotto la tuta degli operatori.",
            ricerca: "intimo termico lana merino",
          },
          {
            nome: "Pile o strato intermedio",
            perche: "Si toglie e si rimette tra il freddo fuori e il caldo di treni, rifugi e ristoranti.",
            ricerca: "giacca pile pesante",
          },
          {
            nome: "Piumino caldo",
            perche: "Per le ore ferme ad aspettare l'aurora, quando non ci si muove per riscaldarsi.",
            ricerca: "piumino invernale caldo",
          },
          {
            nome: "Pantaloni imbottiti da neve",
            perche: "Per le uscite in slitta con gli husky e le serate sul monte Nuolja.",
            ricerca: "pantaloni da neve imbottiti",
          },
        ],
      },
      {
        titolo: "Mani, testa e piedi",
        voci: [
          {
            nome: "Moffole e sottoguanti",
            perche: "Il sottoguanto permette di usare telefono e macchina fotografica senza scoprire la pelle.",
            ricerca: "moffole invernali sottoguanti touch",
          },
          {
            nome: "Berretto che copre le orecchie",
            perche: "Con il vento del lungomare di Tromsø le orecchie sono la prima cosa che si gela.",
            ricerca: "berretto invernale foderato pile",
          },
          {
            nome: "Passamontagna o scaldacollo",
            perche: "Protegge il viso in slitta, quando si va contro vento.",
            ricerca: "passamontagna termico",
          },
          {
            nome: "Calze in lana spesse",
            perche: "Con temperature sotto zero tutta la settimana, i piedi decidono quanto si resiste fuori.",
            ricerca: "calze lana merino spesse invernali",
          },
          {
            nome: "Scarponi da neve",
            perche: "Si cammina molto su neve e ghiaccio, tra stazione, paese e punti di osservazione.",
            ricerca: "scarponi da neve impermeabili",
          },
          {
            nome: "Ramponcini da scarpa",
            perche: "Si infilano sugli scarponi nei tratti ghiacciati e occupano poco in valigia.",
            ricerca: "ramponcini antiscivolo scarpe",
          },
        ],
      },
      {
        titolo: "Per l'aurora e la notte polare",
        voci: [
          {
            nome: "Scaldamani",
            perche: "Una bustina in tasca o nei guanti aiuta nelle lunghe attese all'aperto.",
            ricerca: "scaldamani monouso",
          },
          {
            nome: "Torcia frontale con luce rossa",
            perche: "Con la notte polare la luce del giorno dura pochissimo, e la luce rossa non disturba le foto.",
            ricerca: "torcia frontale luce rossa",
          },
          {
            nome: "Treppiede da viaggio",
            perche: "Per fotografare l'aurora servono pose lunghe: a mano libera non si riesce.",
            ricerca: "treppiede fotografico da viaggio leggero",
          },
          {
            nome: "Power bank",
            perche: "Al freddo le batterie si scaricano molto più in fretta del solito.",
            ricerca: "power bank compatto 10000 mAh",
          },
          {
            nome: "Thermos",
            perche: "Una bevanda calda durante le serate fuori città cambia l'attesa.",
            ricerca: "thermos acciaio 500 ml",
          },
        ],
      },
    ],
    viaggi: ["lapponia-svedese-abisko", "tromso"],
  },
  {
    slug: "snorkeling-mari-tropicali",
    titolo: "Snorkeling nei mari caldi",
    sottotitolo: "Maldive, Filippine e Mar Rosso: maschera propria, sole e reef",
    intro:
      "Alle Maldive, a El Nido e Moalboal, sui reef di Marsa Alam si sta in acqua tutti i giorni, spesso partendo dalla riva. Gli articoli tornano sempre sulle stesse cose: maschera propria, protezione dal sole che non rovini il corallo, scarpe da scoglio e una sacca impermeabile per le barche. Tra dicembre e marzo, nel Mar Rosso, si aggiunge la muta.",
    sezioni: [
      {
        titolo: "In acqua",
        voci: [
          {
            nome: "Maschera e boccaglio",
            perche: "Alle Filippine si usano ogni giorno, e una maschera propria calza meglio di quelle a noleggio.",
            ricerca: "set maschera boccaglio snorkeling adulto",
          },
          {
            nome: "Pinne corte da snorkeling",
            perche: "Per nuotare tra le sardine di Moalboal e lungo le house reef delle Maldive.",
            ricerca: "pinne corte snorkeling",
          },
          {
            nome: "Muta corta",
            perche: "Nel Mar Rosso tra dicembre e marzo l'acqua scende a 22-23 °C e soffia vento forte.",
            ricerca: "muta corta 3 mm",
          },
          {
            nome: "Boa da snorkeling",
            perche: "Alle Maldive si consiglia una boa o un giubbotto sulla house reef a chi non è un nuotatore forte.",
            ricerca: "boa segnalazione snorkeling",
          },
          {
            nome: "Antiappannante per maschera",
            perche: "Una goccia prima di entrare evita di risalire ogni cinque minuti a svuotare la maschera.",
            ricerca: "antiappannante maschera sub",
          },
        ],
      },
      {
        titolo: "Sole e reef",
        voci: [
          {
            nome: "Maglia in lycra a maniche lunghe",
            perche: "Facendo snorkeling la schiena si brucia in mezz'ora: la lycra protegge più di qualsiasi crema.",
            ricerca: "maglia lycra rash guard maniche lunghe",
          },
          {
            nome: "Crema solare minerale reef safe",
            perche: "All'ossido di zinco, senza ossibenzone: in alcuni siti di Palawan le creme tradizionali sono vietate.",
            ricerca: "crema solare minerale reef safe ossido di zinco",
          },
          {
            nome: "Cappello a tesa larga",
            perche: "Sulle barche e su isolotti come Naked Island non c'è ombra.",
            ricerca: "cappello pescatore tesa larga UPF",
          },
          {
            nome: "Occhiali da sole polarizzati",
            perche: "L'acqua riflette il sole tutto il giorno, sulle barche come in spiaggia.",
            ricerca: "occhiali da sole polarizzati",
          },
        ],
      },
      {
        titolo: "Barche e spiagge",
        voci: [
          {
            nome: "Scarpe da scoglio",
            perche: "Per entrare dalla riva e scendere dalle barche sulle spiagge di corallo.",
            ricerca: "scarpe da scoglio uomo donna",
          },
          {
            nome: "Sacca impermeabile",
            perche: "Sui giri in barca e nei traghetti delle Filippine tiene asciutti telefono e documenti.",
            ricerca: "sacca impermeabile dry bag 20 litri",
          },
          {
            nome: "Custodia impermeabile per il telefono",
            perche: "Per tenerlo addosso in barca senza paura degli schizzi.",
            ricerca: "custodia impermeabile smartphone",
          },
          {
            nome: "Telo in microfibra",
            perche: "Si asciuga in fretta e occupa poco nella sacca delle uscite in barca.",
            ricerca: "telo mare microfibra",
          },
          {
            nome: "Repellente per zanzare",
            perche: "Sulle isole locali delle Maldive c'è la dengue.",
            ricerca: "repellente zanzare tropicale",
          },
        ],
      },
    ],
    viaggi: ["maldive-guida", "filippine-itinerario", "egitto-mare-luxor-cairo", "egitto-completo"],
  },
  {
    slug: "ande-alta-quota",
    titolo: "Ande in alta quota",
    sottotitolo: "Perù e Bolivia, sopra i 3.400 metri con giornate miti e notti gelide",
    intro:
      "Cusco sta a 3.400 metri, La Paz a circa 3.640, il Sud Lípez sale quasi a 4.800. All'alba ai geyser Sol de Mañana si arriva a venti gradi sotto zero, poche ore dopo si cammina al sole. In Perù il trek di Santa Cruz porta tre notti in tenda, e in entrambi i viaggi c'è un pezzo di Amazzonia: la valigia deve tenere insieme freddo di quota e caldo umido.",
    sezioni: [
      {
        titolo: "Freddo di quota",
        voci: [
          {
            nome: "Piumino leggero comprimibile",
            perche: "Per le partenze col buio e le notti in alloggi senza riscaldamento, come sull'Isola del Sole.",
            ricerca: "piumino leggero comprimibile",
          },
          {
            nome: "Intimo termico",
            perche: "Ai geyser del Sud Lípez all'alba si arriva a venti gradi sotto zero.",
            ricerca: "intimo termico maglia calzamaglia",
          },
          {
            nome: "Berretto e guanti",
            perche: "Sopra i quattromila metri, appena il sole cala, la temperatura crolla.",
            ricerca: "berretto guanti invernali set",
          },
          {
            nome: "Sacco a pelo per notti fredde",
            perche: "Per le tre notti in tenda del trek di Santa Cruz, in Cordillera Blanca.",
            ricerca: "sacco a pelo invernale comprimibile",
          },
        ],
      },
      {
        titolo: "Trekking",
        voci: [
          {
            nome: "Scarpe da trekking",
            perche: "Laguna 69, Santa Cruz, la salita a piedi a Machu Picchu: servono scarpe comode, sempre.",
            ricerca: "scarpe trekking impermeabili",
          },
          {
            nome: "Bastoncini da trekking",
            perche: "Con il fiato corto della quota alleggeriscono ogni salita e le discese sulle ginocchia.",
            ricerca: "bastoncini trekking pieghevoli",
          },
          {
            nome: "Zaino da giornata",
            perche: "Per le escursioni di acclimatamento come la laguna Churup e la Rainbow Mountain.",
            ricerca: "zaino escursionismo 25 litri",
          },
          {
            nome: "Torcia frontale",
            perche: "Ai geyser e al primo turno di Machu Picchu si parte quando è ancora buio.",
            ricerca: "torcia frontale ricaricabile",
          },
          {
            nome: "Borraccia con filtro",
            perche: "Sui trek di più giorni non ci sono negozi e il segnale è scarso o nullo.",
            ricerca: "borraccia con filtro acqua",
          },
        ],
      },
      {
        titolo: "Sole forte e Amazzonia",
        voci: [
          {
            nome: "Crema solare ad alta protezione",
            perche: "In quota il sole brucia anche quando l'aria è fredda, sul Titicaca come sul Salar.",
            ricerca: "crema solare spf 50",
          },
          {
            nome: "Occhiali da sole",
            perche: "Il bianco del Salar de Uyuni e i ghiacciai della Cordillera riflettono moltissima luce.",
            ricerca: "occhiali da sole sportivi categoria 3",
          },
          {
            nome: "Burrocacao con protezione solare",
            perche: "L'aria secca di quota spacca le labbra in pochi giorni.",
            ricerca: "burrocacao protezione solare spf",
          },
          {
            nome: "Repellente per zanzare",
            perche: "Per i lodge di Puerto Maldonado e delle pampas di Rurrenabaque.",
            ricerca: "repellente zanzare tropicale",
          },
          {
            nome: "Pantaloni e camicia leggeri a maniche lunghe",
            perche: "In Amazzonia coprono dalle punture e asciugano in fretta con il caldo umido.",
            ricerca: "pantaloni trekking leggeri asciugatura rapida",
          },
        ],
      },
      {
        titolo: "Soldi e prese",
        voci: [
          {
            nome: "Portasoldi da tenere sotto i vestiti",
            perche: "Fuori dalle città si paga quasi tutto in contanti, e a Cusco i borseggi sono frequenti.",
            ricerca: "marsupio portasoldi sottovestiti",
          },
          {
            nome: "Adattatore universale",
            perche: "Prese di tipo A e C: le spine italiane a due poli entrano quasi sempre, ma non tutte.",
            ricerca: "adattatore universale da viaggio",
          },
        ],
      },
    ],
    viaggi: ["peru-itinerario", "bolivia-itinerario"],
  },
  {
    slug: "trekking-rifugi-alpi",
    titolo: "Trekking di rifugio sulle Alpi",
    sottotitolo: "Tour du Mont Blanc e Dolomiti, tra dislivelli, rifugi e temporali del pomeriggio",
    intro:
      "Sul Tour du Mont Blanc tappe da 800-900 metri di dislivello sono la norma, e nelle Dolomiti si conta in metri di salita, non in chilometri. In estate i temporali arrivano quasi ogni pomeriggio, quindi si parte presto. Per dormire nei rifugi del TMB il sacco lenzuolo è obbligatorio.",
    sezioni: [
      {
        titolo: "Per camminare",
        voci: [
          {
            nome: "Scarponcini da trekking",
            perche: "Per giorni di sentiero di fila serve una scarpa già rodata, con suola che tiene sui sassi.",
            ricerca: "scarponcini trekking uomo donna",
          },
          {
            nome: "Bastoncini telescopici",
            perche: "Con 800-900 metri di dislivello al giorno salvano le ginocchia in discesa.",
            ricerca: "bastoncini trekking telescopici",
          },
          {
            nome: "Zaino da 30-40 litri",
            perche: "Ci deve stare tutto per più giorni da un rifugio all'altro, senza diventare pesante.",
            ricerca: "zaino trekking 35 litri",
          },
          {
            nome: "Calze da trekking",
            perche: "Un paio buono a tappa evita le vesciche, che su un giro lungo pesano più della fatica.",
            ricerca: "calze trekking merino",
          },
        ],
      },
      {
        titolo: "Meteo di montagna",
        voci: [
          {
            nome: "Giacca impermeabile",
            perche: "I temporali del pomeriggio sono regolari: il guscio sta sempre in cima allo zaino.",
            ricerca: "giacca impermeabile traspirante trekking",
          },
          {
            nome: "Pile leggero",
            perche: "Nei rifugi in quota la sera fa fresco anche ad agosto.",
            ricerca: "pile leggero trekking",
          },
          {
            nome: "Coprizaino impermeabile",
            perche: "Se il temporale arriva prima del rifugio, tiene asciutto il cambio per la sera.",
            ricerca: "coprizaino impermeabile",
          },
          {
            nome: "Crema solare e occhiali da sole",
            perche: "Sopra i duemila metri il sole brucia anche con l'aria fresca.",
            ricerca: "crema solare montagna spf 50",
          },
        ],
      },
      {
        titolo: "Per i rifugi",
        voci: [
          {
            nome: "Sacco lenzuolo",
            perche: "È obbligatorio in tutti i rifugi del Tour du Mont Blanc.",
            ricerca: "sacco lenzuolo rifugio",
          },
          {
            nome: "Torcia frontale",
            perche: "Per muoversi in camerata e per le partenze presto, prima del caldo e dei temporali.",
            ricerca: "torcia frontale leggera",
          },
          {
            nome: "Tappi per le orecchie",
            perche: "Nelle camerate dei rifugi si dorme in tanti.",
            ricerca: "tappi per orecchie dormire",
          },
          {
            nome: "Asciugamano in microfibra",
            perche: "Leggero e veloce ad asciugare, da un rifugio all'altro.",
            ricerca: "asciugamano microfibra viaggio",
          },
          {
            nome: "Borraccia",
            perche: "Sulle tappe lunghe tra un rifugio e l'altro l'acqua si trova solo ai punti segnati.",
            ricerca: "borraccia trekking 1 litro",
          },
        ],
      },
      {
        titolo: "Vie ferrate",
        voci: [
          {
            nome: "Kit da ferrata omologato con dissipatore",
            perche: "Nelle Dolomiti è la condizione minima per salire su una ferrata, con una guida alpina la prima volta.",
            ricerca: "set da ferrata omologato dissipatore",
          },
          {
            nome: "Casco da arrampicata",
            perche: "Sulle ferrate i sassi smossi da chi sta sopra sono il rischio più frequente.",
            ricerca: "casco arrampicata",
          },
          {
            nome: "Imbrago",
            perche: "Va con il kit da ferrata: senza imbrago il dissipatore non serve.",
            ricerca: "imbrago arrampicata ferrata",
          },
          {
            nome: "Guanti da ferrata",
            perche: "Proteggono le mani dal cavo d'acciaio per tutta la via.",
            ricerca: "guanti da ferrata",
          },
        ],
      },
    ],
    viaggi: ["tour-du-mont-blanc", "dolomiti-roadtrip"],
  },
  {
    slug: "settimana-bianca",
    titolo: "Settimana bianca",
    sottotitolo: "Sci in Italia, in Francia e a Bansko: cosa portare e cosa noleggiare",
    intro:
      "Il noleggio di sci e scarponi costa 25-45 € al giorno ed è comodo prenotarlo online. Quello che conviene avere di proprio è ciò che si porta addosso: strati, casco, maschera. In Italia catene o gomme invernali sono obbligatorie per legge su gran parte delle strade di montagna, e chi esce dal battuto deve avere ARTVA, pala e sonda e saperli usare.",
    sezioni: [
      {
        titolo: "In auto",
        voci: [
          {
            nome: "Catene da neve",
            perche: "Sono obbligatorie per legge su gran parte della rete montana, se non si hanno le gomme invernali.",
            ricerca: "catene da neve auto",
          },
          {
            nome: "Raschietto per il ghiaccio",
            perche: "La mattina l'auto parcheggiata in paese è spesso coperta di brina.",
            ricerca: "raschietto ghiaccio auto con guanto",
          },
          {
            nome: "Borsa porta scarponi",
            perche: "Tiene insieme scarponi, casco e guanti, e salva il bagagliaio dalla neve sciolta.",
            ricerca: "borsa porta scarponi sci",
          },
        ],
      },
      {
        titolo: "In pista",
        voci: [
          {
            nome: "Casco da sci",
            perche: "Si può noleggiare, ma un casco proprio calza meglio e non va restituito a fine giornata.",
            ricerca: "casco da sci adulto",
          },
          {
            nome: "Maschera da sci",
            perche: "Con la luce piatta delle giornate coperte di gennaio fa la differenza sulla visibilità.",
            ricerca: "maschera da sci lente intercambiabile",
          },
          {
            nome: "Guanti da sci impermeabili",
            perche: "In seggiovia, a gennaio, le mani sono le prime a cedere al freddo.",
            ricerca: "guanti da sci impermeabili",
          },
          {
            nome: "Sottocasco",
            perche: "Toglie il freddo dalle orecchie senza fare spessore sotto il casco.",
            ricerca: "sottocasco sci termico",
          },
          {
            nome: "Zaino piccolo da sci",
            perche: "Per acqua, crema e uno strato in più quando si gira il comprensorio tutto il giorno, come sul Sellaronda.",
            ricerca: "zaino sci 15 litri",
          },
        ],
      },
      {
        titolo: "Strati e protezione",
        voci: [
          {
            nome: "Intimo termico",
            perche: "Gennaio dopo l'Epifania è la finestra migliore per i prezzi, ma porta freddo intenso.",
            ricerca: "intimo termico sci",
          },
          {
            nome: "Calze da sci",
            perche: "Alte e senza cuciture, per non avere punti di pressione nello scarpone.",
            ricerca: "calze da sci lunghe",
          },
          {
            nome: "Scaldacollo",
            perche: "In seggiovia e sulle piste esposte al vento protegge il viso.",
            ricerca: "scaldacollo sci pile",
          },
          {
            nome: "Crema solare per la neve",
            perche: "A marzo le giornate sono lunghe e soleggiate, e la neve riflette.",
            ricerca: "crema solare neve spf 50 stick",
          },
          {
            nome: "Burrocacao con filtro solare",
            perche: "Freddo e sole in quota seccano le labbra in un giorno.",
            ricerca: "burrocacao spf montagna",
          },
        ],
      },
      {
        titolo: "Fuoripista",
        voci: [
          {
            nome: "Kit ARTVA, pala e sonda",
            perche: "Fuori dal battuto non si va senza, e senza aver letto il bollettino valanghe.",
            ricerca: "kit artva pala sonda",
          },
          {
            nome: "Zaino da scialpinismo",
            perche: "Ha la tasca dedicata per pala e sonda, sempre a portata di mano.",
            ricerca: "zaino scialpinismo 30 litri",
          },
        ],
      },
    ],
    viaggi: ["settimana-bianca", "settimana-bianca-francia", "bulgaria-bansko-rila"],
  },
  {
    slug: "weekend-in-citta",
    titolo: "Weekend in città",
    sottotitolo: "Capitali europee con il bagaglio a mano: Praga, Vienna, Lisbona, Amsterdam e le altre",
    intro:
      "Nelle capitali di questi weekend il centro si gira a piedi, i mezzi si pagano con la carta contactless e i borseggi si concentrano su poche linee affollate: il tram 22 a Praga, la U3 a Vienna, il tram 28 a Lisbona. Il clima va da piovoso e ventoso a freddo secco. Basta un bagaglio a mano fatto bene.",
    sezioni: [
      {
        titolo: "Bagaglio",
        voci: [
          {
            nome: "Zaino da cabina per le low cost",
            perche: "Per un weekend lungo basta uno zaino nelle misure del bagaglio a mano.",
            ricerca: "zaino bagaglio a mano 40x30x20",
          },
          {
            nome: "Cubi organizer",
            perche: "In uno zaino piccolo tengono in ordine i cambi di tre o quattro giorni.",
            ricerca: "organizer valigia cubi",
          },
          {
            nome: "Zainetto pieghevole",
            perche: "Ad Auschwitz-Birkenau c'è un limite alle dimensioni degli zaini, con deposito a pagamento per quelli grandi.",
            ricerca: "zaino pieghevole leggero",
          },
          {
            nome: "Bilancia pesa bagagli",
            perche: "Evita sorprese al gate, dove il sovrappeso costa più che online.",
            ricerca: "bilancia pesa valigie digitale",
          },
        ],
      },
      {
        titolo: "Per camminare tutto il giorno",
        voci: [
          {
            nome: "Sneakers comode",
            perche: "I centri storici si girano a piedi, e a Lisbona ci sono anche le colline.",
            ricerca: "sneakers da camminata",
          },
          {
            nome: "Giacca antipioggia leggera",
            perche: "Ad Amsterdam piove spesso anche d'estate, e il vento sui canali si sente.",
            ricerca: "giacca antipioggia leggera tascabile",
          },
          {
            nome: "Ombrello pieghevole",
            perche: "A Lisbona da novembre a marzo il clima è mite ma piovoso.",
            ricerca: "ombrello pieghevole antivento",
          },
          {
            nome: "Strato caldo leggero",
            perche: "Il vento del Baltico raffredda le sere anche in estate, e d'inverno a Praga e Cracovia il freddo è vero.",
            ricerca: "piumino leggero ultracompatto",
          },
        ],
      },
      {
        titolo: "Soldi e sicurezza",
        voci: [
          {
            nome: "Borsello antifurto",
            perche: "Contro i borseggi sul tram 22 di Praga, sulla U3 di Vienna e sul tram 28 di Lisbona.",
            ricerca: "borsello antifurto tracolla",
          },
          {
            nome: "Portafoglio con protezione RFID",
            perche: "Ad Amsterdam e in Estonia si paga quasi solo con la carta, che resta sempre in tasca.",
            ricerca: "portafoglio sottile rfid",
          },
          {
            nome: "Power bank compatto",
            perche: "Mappe, biglietti e prenotazioni stanno tutti sul telefono.",
            ricerca: "power bank compatto",
          },
          {
            nome: "Borraccia pieghevole",
            perche: "Si riempie in hotel e, vuota, non occupa spazio nello zaino.",
            ricerca: "borraccia pieghevole silicone",
          },
        ],
      },
    ],
    viaggi: [
      "cracovia-weekend",
      "praga-weekend",
      "vienna-weekend",
      "budapest-weekend",
      "berlino-weekend",
      "amsterdam-weekend",
      "lisbona-weekend",
      "capitali-nordiche",
      "capitali-baltiche",
    ],
  },
  {
    slug: "zaino-tropici",
    titolo: "Zaino ai tropici",
    sottotitolo: "Viaggi lunghi in Asia e in Centro America, tra templi, foresta e caldo umido",
    intro:
      "Sri Lanka, Thailandia, Indonesia, Malesia, Borneo, Costa Rica e Centro America: settimane di spostamenti tra bus, barche e voli interni, con lo zaino al posto del trolley. Nei templi servono spalle e ginocchia coperte, nella foresta repellente e calze antisanguisughe, e con l'umidità i vestiti stesi non sempre si asciugano.",
    sezioni: [
      {
        titolo: "Zaino e organizzazione",
        voci: [
          {
            nome: "Zaino da 40-60 litri",
            perche: "Su van, barche e bus locali uno zaino morbido si sistema dove un trolley non entra.",
            ricerca: "zaino da viaggio 50 litri",
          },
          {
            nome: "Zainetto da giornata",
            perche: "Lo zaino grande resta in hotel come deposito, quello piccolo si riempie ogni mattina.",
            ricerca: "zaino da giorno 20 litri",
          },
          {
            nome: "Cubi organizer",
            perche: "Con cambi di alloggio quasi ogni due giorni, rifare lo zaino diventa veloce.",
            ricerca: "organizer valigia cubi",
          },
          {
            nome: "Sacca impermeabile",
            perche: "Per le barche alle Gili, sul Kinabatangan e tra gli isolotti di Bocas del Toro.",
            ricerca: "sacca impermeabile dry bag",
          },
          {
            nome: "Lucchetto con combinazione",
            perche: "Per gli armadietti degli ostelli e per chiudere lo zaino nei bus notturni.",
            ricerca: "lucchetto combinazione tsa",
          },
        ],
      },
      {
        titolo: "Templi e caldo",
        voci: [
          {
            nome: "Sarong o pareo",
            perche: "In Sri Lanka serve in quasi tutti i templi, da Mihintale al Tempio del Dente.",
            ricerca: "sarong pareo cotone",
          },
          {
            nome: "Pantaloni lunghi leggeri",
            perche: "Coprono le ginocchia nei templi thailandesi e reggono il dress code dei rooftop di Bangkok.",
            ricerca: "pantaloni lino leggeri",
          },
          {
            nome: "Magliette ad asciugatura rapida",
            perche: "Con l'umidità costante i capi di cotone stesi la sera sono ancora bagnati la mattina.",
            ricerca: "maglietta tecnica asciugatura rapida",
          },
          {
            nome: "Felpa leggera",
            perche: "In cima all'Adam's Peak si sta tra 3 e 6 °C, con il vento.",
            ricerca: "felpa pile leggera",
          },
          {
            nome: "Asciugamano in microfibra",
            perche: "Si asciuga in fretta anche con l'umidità, e occupa la metà di un telo normale.",
            ricerca: "asciugamano microfibra grande",
          },
        ],
      },
      {
        titolo: "Foresta e animali",
        voci: [
          {
            nome: "Repellente per zanzare tropicale",
            perche: "In Malesia la dengue c'è tutto l'anno, anche in città: il repellente è la profilassi vera.",
            ricerca: "repellente zanzare tropicale alta protezione",
          },
          {
            nome: "Calze antisanguisughe",
            perche: "Nel Borneo servono in ogni trekking in foresta, e a Taman Negara nella stagione umida.",
            ricerca: "calze antisanguisughe",
          },
          {
            nome: "Binocolo compatto",
            perche: "Sul Kinabatangan è l'attrezzatura più utile del viaggio: gli animali stanno a venti o trenta metri.",
            ricerca: "binocolo compatto 10x25",
          },
          {
            nome: "Torcia frontale",
            perche: "Per le night walk nella foresta e le salite all'alba, come quella al Kawah Ijen.",
            ricerca: "torcia frontale ricaricabile",
          },
          {
            nome: "Guscio antipioggia leggero",
            perche: "Per la vetta del Kinabalu e le giornate di foresta, dove l'umidità è costante.",
            ricerca: "giacca antipioggia ultraleggera",
          },
          {
            nome: "Maschera con filtri per gas",
            perche: "Al Kawah Ijen è obbligatoria: i fumi di zolfo sono pericolosi sul serio.",
            ricerca: "maschera antigas con filtri",
          },
        ],
      },
      {
        titolo: "Prese e salute",
        voci: [
          {
            nome: "Adattatore universale",
            perche: "Si passa dal tipo G di Malesia e Singapore al BS546 dello Sri Lanka, fino al tipo A e B del Centro America.",
            ricerca: "adattatore universale da viaggio usb",
          },
          {
            nome: "Kit di primo soccorso",
            perche: "Con settimane di spostamenti tra isole e foresta, conviene avere con sé il necessario di base.",
            ricerca: "kit primo soccorso da viaggio",
          },
          {
            nome: "Power bank",
            perche: "Tra traghetti, bus notturni e lodge sul fiume la corrente non è sempre disponibile.",
            ricerca: "power bank 20000 mAh",
          },
          {
            nome: "Crema solare ad alta protezione",
            perche: "Tra spiagge, barche e salite all'alba il sole picchia ogni giorno.",
            ricerca: "crema solare spf 50 viso corpo",
          },
        ],
      },
    ],
    viaggi: [
      "sri-lanka-2023",
      "thailandia",
      "indonesia-itinerario",
      "malesia-singapore",
      "borneo-itinerario",
      "costa-rica-itinerario",
      "centro-america-itinerario",
    ],
  },
]

export function listaPerViaggio(slug: string): ListaAttrezzatura | undefined {
  return listeAttrezzatura.find((l) => l.viaggi.includes(slug))
}

export function getListaAttrezzatura(slug: string): ListaAttrezzatura | undefined {
  return listeAttrezzatura.find((l) => l.slug === slug)
}
