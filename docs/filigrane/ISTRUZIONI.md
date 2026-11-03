# Filigrane iconiche per Paese

Ogni Paese ha due filigrane (`a` in alto a sinistra, `b` in basso a destra), enormi e trasparenti
ai bordi delle sue pagine. Richiesta di Rick: **le cose iconiche di ogni Paese**, un po' da
cartolina ma senza esagerare (Perù = lama e Machu Picchu, Messico = Chichén Itzá e Catrina,
Italia = pizza e Colosseo, Francia = vino e Tour Eiffel…). Le piante vanno bene solo se sono
davvero un simbolo (i tulipani olandesi, i ciliegi giapponesi), non come riempitivo.

## Dove sono i dati
- `src/content/filigrane/europa.ts`, `asia.ts`, `altri.ts`: un oggetto per Paese con `a` e `b`
  (`src`, `cosa`, `fonte: { titolo, autore, anno, url, licenza }`). Leggi il file per vedere il formato.
- Immagini in `public/images/filigrane/<paese>-a.webp` e `<paese>-b.webp`.
- Strumento: `"/Volumes/SanDisk 1TB/VIAGGI/sito/.venv/bin/python" tools/filigrana.py <sorgente> public/images/filigrane/<paese>-<a|b>.webp`
  (toglie la carta e la rende trasparente; opzioni `--desatura`, `--soglia`). Leggi l'intestazione del file.

## Regole sulle immagini (obbligatorie)
- **Solo pubblico dominio o CC0**, verificato sulla pagina del file (Wikimedia Commons, musei con
  Open Access tipo Cleveland Museum of Art, Met, Rijksmuseum, Library of Congress «No known restrictions»).
  Niente CC BY, CC BY-SA, «editorial use». Il campo `licenza` resta `'Pubblico dominio'` o `'CC0'`.
- **Opere su carta**: stampe, litografie, incisioni, acquerelli, tavole illustrate, manifesti antichi.
  Rendono bene perché lo sfondo chiaro diventa trasparente. Evita fotografie con cielo pieno e dipinti
  a olio scuri: vengono macchie grigie.
- Scarica una versione **al massimo 2500 px** (per Commons usa l'URL della miniatura
  `.../thumb/.../2500px-<nome>`), mai i TIFF da 100 MB: il disco del Mac è quasi pieno.
  Cancella i file sorgente dopo la conversione (tienili in una cartella della scratchpad, non nel progetto).
- Dopo la conversione **guarda il webp** (Read sul file): deve vedersi il soggetto, senza bordi,
  cornici, scritte o firme grandi (ritaglia prima con Pillow se serve, e scrivilo in `cosa`).
- Niente persone riconoscibili in primo piano fotografate (le figure nelle stampe vanno bene).
- Se per un soggetto non trovi nulla che rispetti le regole, **lascia quello che c'è** (o scegli
  un altro simbolo vero del Paese) e scrivilo nel resoconto. Mai inventare la fonte.

## Cosa cambiare (✓ = già iconico, resta)
Tieni conto che `cosa` lo legge solo chi mantiene il sito: scrivi in italiano cosa rappresenta.

**Europa**
- italia: a pizza (es. un pizzaiolo napoletano in una stampa ottocentesca) · b ✓ Colosseo
- francia: a Tour Eiffel (stampa/manifesto 1889-1900) · b vino (vendemmia, bottiglie, uva in una stampa o manifesto d'epoca)
- spagna: a ballerina di flamenco · b l'Alhambra (es. David Roberts, Owen Jones)
- portogallo: a azulejos o caravella · b ✓ Torre di Belém
- svizzera: a mucca alpina con campanaccio (stampa) · b ✓ Cervino
- austria: a duomo di Santo Stefano a Vienna · b Castello di Schönbrunn
- germania: a ✓ Lepre di Dürer · b Porta di Brandeburgo o Neuschwanstein
- paesi-bassi: ✓ ✓
- danimarca: a Castello di Kronborg o Nyhavn · b nave vichinga
- svezia: a nave Vasa o Stoccolma (Gamla stan) · b alce
- norvegia: a nave vichinga (drakkar) · b ✓ stavkirke
- islanda: a ✓ pulcinelle · b il Geysir in eruzione (stampa ottocentesca)
- estonia: a Tallinn vecchia città (stampa) · b ✓ fiordaliso
- lettonia: a Riga vecchia città (stampa) · b ✓ margherita
- lituania: ✓ ✓
- polonia: a Cracovia, piazza del mercato e Sukiennice · b ✓ Wawel
- repubblica-ceca: ✓ ✓
- ungheria: a ✓ paprika · b Parlamento di Budapest o Ponte delle catene
- croazia: a ✓ olivo · b Dubrovnik e le mura
- montenegro: a Kotor e le Bocche · b ✓ Perast
- bulgaria: ✓ ✓
- transilvania: a Castello di Bran · b ✓ Hunedoara

**Asia**
- giappone: ✓ ✓
- cina: a la Grande Muraglia (es. Thomas Allom) · b ✓ pagoda
- corea-del-sud: a un palazzo di Seul (Gyeongbokgung) o figure in hanbok · b ✓ monte Inwang
- india: a elefante indiano bardato · b ✓ Taj Mahal
- sri-lanka: a elefante o Sigiriya · b ✓ picco d'Adamo
- thailandia: a elefante thai o un tempio (Wat Arun) · b ✓ Bangkok dal fiume
- indonesia: a ✓ Rafflesia · b Borobudur
- malesia: ✓ ✓
- borneo: a orango · b ✓ buceri
- singapore: ✓ ✓
- filippine: a ✓ sampaguita · b risaie a terrazze di Banaue o carabao
- maldive: ✓ ✓

**Medio Oriente e Africa**
- giordania, egitto, turchia, qatar: ✓ ✓
- marocco: a la Koutoubia di Marrakech o una teiera e bicchieri da tè · b ✓ porta di Fès
- arabia-saudita: a ✓ cavallo arabo · b le tombe nabatee di Hegra (Mada'in Salih) o dromedari nel deserto
- emirati-arabi-uniti: a ✓ falco · b dromedario o un dau

**Americhe**
- canada: ✓ ✓
- new-york: a la Statua della Libertà (stampa 1880-1900) · b ✓ ponte di Brooklyn
- florida: a alligatore · b ✓ fenicottero
- california: a sequoie giganti o il Golden Gate (solo se PD) · b ✓ Half Dome
- messico: a Chichén Itzá (es. Frederick Catherwood) · b ✓ Catrina
- guatemala, belize, panama: ✓ ✓
- costa-rica: a ✓ colibrì · b la carreta dipinta (carro di buoi) se trovi una stampa PD, altrimenti ✓
- peru: a Machu Picchu (stampa o foto d'epoca chiara, es. 1911-1915, se PD) · b ✓ lama
- bolivia: a ✓ condor · b il lago Titicaca con le barche di totora, o Potosí
- brasile: a il Cristo Redentore (solo se trovi un'opera davvero PD/CC0; altrimenti il Pan di Zucchero
  di Rio in una stampa ottocentesca) · b ✓ ara giacinto (togli l'araçari)

## Alla fine
- Aggiorna solo le voci del tuo gruppo nel file della tua area. `node --check` sul file.
- Resoconto breve: Paese → soggetto nuovo, fonte, licenza; cosa non hai trovato.
