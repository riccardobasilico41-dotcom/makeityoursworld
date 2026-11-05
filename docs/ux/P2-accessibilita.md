# P2 · Accessibilità, design system, microinterazioni

Data: 5 novembre 2026. Obiettivo WCAG 2.2 AA. Pagine controllate a 390 e 1280 px: home, `/it/viaggi`, `/it/viaggi/giappone-itinerario`, `/it/destinazioni/giappone`, `/it/destinazioni/costa-rica/uvita`, `/it/aree/europa`, `/it/meraviglie`, `/it/chi-sono`.

Fuori perimetro (lo segue l'altro agente): metadata, sitemap, robots, hreflang, JSON-LD, `next.config`, `src/lib/seo.ts`, `src/lib/structured-data.ts`, `sizes`/`priority`/`loading` delle immagini, caricamento dei video.

## Strumenti usati davvero

- **axe-core 4.13.0** (quello già in `node_modules/axe-core` del progetto), iniettato con Playwright (`playwright-core` e `chrome-headless-shell` di `remotion-video`). Regole: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`, `best-practice`. `@axe-core/cli` non è stato installato.
- **Script Playwright** in `scratchpad/p2a/` (fuori dal repo):
  - `axe.cjs`: axe, numero di `h1`, salti nella gerarchia dei titoli, presenza dello skip link, controlli sotto 24×24 px;
  - `foto.cjs`: contrasto dei testi sopra foto e video, che axe non misura (li mette tra gli «incomplete»). Nasconde il testo, fotografa il suo riquadro, prende il 90° percentile di luminanza dello sfondo (il caso peggiore realistico) e lo confronta col colore del testo, trasparenza compresa;
  - `tastiera.cjs`: primo Tab, focus visibile sui primi 60 elementi col Tab, tendina desktop, menu mobile, ricerca, dialog dei filtri, skip link.
- **Prima** = la build già pronta (`next start -p 3300`), cioè il codice prima di queste modifiche. **Dopo** = `next dev -p 3301`, che scrive in `.next/dev` e non tocca la build. Non è stato lanciato `npm run build`.
- In tutte le prove `prefers-reduced-motion: reduce` è attivo, così le animazioni d'ingresso non nascondono il contenuto.

## Risultati axe (violazioni, numero di nodi)

| Pagina | Prima 390 | Prima 1280 | Dopo 390 | Dopo 1280 |
|---|---|---|---|---|
| home | target-size 13 | target-size 13 | 0 | 0 |
| /viaggi | 0 | 0 | 0 | 0 |
| viaggio Giappone | color-contrast 13 | color-contrast 13 | color-contrast 12 (decorativi, vedi sotto) | color-contrast 12 |
| Paese Giappone | 0 | 0 | 0 | 0 |
| Uvita | definition-list 5, dlitem 30 | definition-list 5, dlitem 30 | 0 | 0 |
| /aree/europa | 0 | 0 | 0 | 0 |
| /meraviglie | 0 | 0 | 0 | 0 |
| /chi-sono | 0 | 0 | 0 | 0 |
| **Totale nodi** | **61** | **61** | **12** | **12** |

Un solo `h1` e nessun salto di livello nei titoli visibili su tutte le 16 combinazioni pagina × larghezza, sia prima sia dopo. Skip link: assente prima, presente dopo su tutte. I numeri «dopo» vengono da due passate: la prima (tutte le pagine tranne `/viaggi`, che in `next dev` era andata in timeout) aveva trovato i due nodi `aria-prohibited-attr` e `region` descritti sotto. Dopo la correzione ho rifatto home, `/viaggi` e viaggio Giappone: home e `/viaggi` a 0, Giappone con i soli 12 nodi decorativi.

Note:
- `target-size` (13 nodi in home): erano i link «Il Paese» delle card dei viaggi top, alti 20 px e attaccati al link della card. Ora sono alti 44 px e hanno un nome completo («Il Paese: Giappone»).
- `definition-list` + `dlitem` (5 + 30 su Uvita): l'icona e un `div` in più spezzavano `dl > div > dt + dd` in `MiniGuida`. Ora l'icona sta dentro il `dt`.
- `color-contrast` sul viaggio Giappone: «3,3 MB» al 80 % di panna sul rosso (4,06:1) ora è al 100 %. Restano 12 nodi: i numeri giganti dei giorni («01», «02»…) in `DayTimelineSignature`, al 20 % di nero. Sono decorativi (`aria-hidden`), il numero del giorno è ripetuto nel testo «Giorno 1» subito accanto: rientrano nell'eccezione «pura decorazione» di 1.4.3 e li ho lasciati come filigrana.
- `aria-prohibited-attr` (solo in «dopo», home): il segnaposto di `MappaMondoDifferita` aveva `aria-label` su un `div` senza ruolo. Compare in sviluppo perché la mappa arriva più tardi; ora è `role="status"` con il testo in `sr-only`.
- `region` (solo in «dopo»): il primo skip link stava fuori da ogni landmark. Spostato dentro `<header>`.

## Testi sopra le foto (script `foto.cjs`, 390 px)

| | Prima | Dopo |
|---|---|---|
| Testi su foto misurati | 211 | 212 (390 px) · 223 (1280 px) |
| Sotto soglia (4,5:1, o 3:1 per i testi grandi) | 97 a 390 px | 1 a 390 px · 3 a 1280 px |

Prima, per pagina: `/aree/europa` 61, `/viaggi` 26, Paese Giappone 3, Uvita 2, home 2, `/meraviglie` 2, viaggio Giappone 1. Ho escluso dal conto le misure a 1,00:1 (10 prima, 11 dopo): sono card fuori vista nei binari orizzontali, dove la foto non c'è ancora.

I 3 casi rimasti a 1280 sono i chip di durata nel finder della home: lo script mette nel riquadro anche il loro bordo panna, e quello pesa sul percentile. A vista sono leggibili (panna su nero al 70 % sopra il video). Il caso a 390 («Sri Lanka», 3,50:1) è un cartellino nero su una card che lo script ha fotografato a metà scorrimento. Dato che è testo panna su `bg-ink` pieno, il contrasto reale è circa 15:1.

## Tastiera (script `tastiera.cjs`, dopo)

- Primo Tab su tutte le 16 combinazioni: «Vai al contenuto». Invio porta il focus su `#contenuto`.
- Focus visibile (outline o anello) su tutti i primi 40 elementi col Tab, in tutte le pagine. Gli unici senza sono i pulsanti dell'overlay di sviluppo di Next (`nextjs-portal`), che in produzione non ci sono.
- Tendina «Destinazioni» (1280): Invio apre, Esc chiude e riporta il focus alla freccia, Tab oltre l'ultima voce chiude.
- Menu mobile (390): si apre, Esc lo chiude e riporta il focus al pulsante «Menu».
- Ricerca: `/` apre e mette il focus nel campo, il Tab resta nel dialog, Esc chiude e riporta il focus al pulsante. A 1280 «giappone» dà 20 risultati. A 390 l'indice in `next dev` non era ancora arrivato dopo 1,5 s (0 risultati): è un tempo dello sviluppo, non un errore.
- Dialog dei filtri (390): si apre col focus dentro, Esc lo chiude e riporta il focus su «Filtri».
- `BinarioCard`: la fila ora mostra il focus (filo rosso interno) e scorre con le frecce della tastiera. I pulsanti Indietro/Avanti sono da 44 px.

## Problemi per pagina

### Tutte le pagine (layout, testata, piede)
- **Mancava lo skip link.** Aggiunto «Vai al contenuto» / «Skip to content» / «Ir al contenido» come primo elemento della testata (`Header.tsx`). Compare solo col Tab e porta a `<main id="contenuto" tabIndex={-1}>`. Corretto.
- **Focus visibile non uniforme.** Molti link e `summary` usavano solo il contorno del browser, la regione `BinarioCard` aveva `focus-visible:outline-none` senza sostituto. Ora c'è una regola di base in `globals.css`: filo rosso di 2 px staccato di 2 px, che diventa panna sui fondi neri e rossi, dove il rosso arriva sotto 3:1. Chi aveva già un anello (`focus-visible:ring-…`) lo tiene. Corretto.
- **Tendine del menu desktop.** Esc chiudeva il pannello ma il focus restava su un elemento nascosto, e col Tab si usciva dal pannello lasciandolo aperto. Ora Esc riporta il focus alla freccia che l'aveva aperto e uscire col Tab chiude il pannello. Il menu mobile si chiude quando il focus esce col Tab. Corretto.
- **Il punto del marchio lampeggiava all'infinito** in ogni pagina (WCAG 2.2.2). Ora fa quattro lampeggi, meno di 5 secondi, poi resta acceso. Con `prefers-reduced-motion` resta fermo, come prima. Corretto.
- **`prefers-reduced-motion`.** Prima era gestito componente per componente. Ora c'è anche una rete di sicurezza globale (animazioni e transizioni a 1 ms, niente `scroll-behavior: smooth`, niente zoom lento). `BinarioCard` e `MeraviglieScorrimento` usano `motion-safe:scroll-smooth` e lo scorrimento delle frecce rispetta la preferenza. Corretto.
- Ricerca (dialog): era già corretta (focus intrappolato, Esc, ritorno al pulsante, combobox con `aria-activedescendant`). Aggiunto solo un segnale di focus sul campo: il filo sotto il campo diventa rosso.

### Home
- Link «Il Paese» delle card top: 69×20 px, nome ambiguo. Ora 44 px d'altezza, `aria-label` «Il Paese: …». Corretto.
- Etichetta del Paese sulla foto delle card top: panna su sfumatura nera al 55 %, sotto 4,5:1 sulle foto chiare. Ora è un cartellino nero. Corretto.
- Chip di durata e interessi nel finder sopra il video: fondo nero al 40 %, ora al 70 %. «Altri interessi» passa dal 90 % al 100 % di panna con ombra del testo. Corretto.
- Pulsante pausa del video: da 40 a 44 px; tolto il `backdrop-blur`. Corretto.
- Bottoni del mappamondo (zoom, chiudi scheda, link della scheda): da 36-40 a 44 px; icone `aria-hidden`; il pin col focus ora diventa più grande e con il bordo nero, invece di un bordo panna di 3 px quasi invisibile. Corretto.

### /viaggi
- Etichetta del Paese sulle foto di `TripCard`: panna al 70 % su sfumatura leggera. Nella misura «prima» erano sotto soglia 26 card visibili a 390 px. Ora è un cartellino nero, sempre sopra 4,5:1. Corretto.
- Barra sticky dei filtri: tolto `bg-cream/95 backdrop-blur` (effetto vetro), ora fondo panna pieno. «Mostra altri», «Applica» e «Azzera» usano i bottoni comuni. Corretto.
- Chip dei filtri attivi: l'etichetta al `stone/85` diventava illeggibile al passaggio (testo grigio su nero). Ora eredita il colore con opacità 80 %. Corretto.

### Viaggio Giappone
- «3,3 MB» nel bottone «Scarica la guida»: 4,06:1, ora panna piena. Corretto.
- Numeri giganti dei giorni al 20 %: lasciati (decorativi, vedi sopra). Non corretto, per scelta.
- I link della barra dei giorni e delle tappe (circa 20 px d'altezza) passano il criterio 2.5.8 per spaziatura: axe non li segnala. Non portati a 44 px per non allungare la colonna.

### Paese Giappone e destinazione Uvita (apertura con foto piena)
- Briciole, sottotitolo e lead in panna all'80-90 % sopra foto con cielo chiaro: il titolo «Giappone» misurava 1,46:1 sul cielo e il lead 1,88:1. Ora il velo dietro il testo va dal nero all'85 % in basso al 25 % in alto, i testi sono al 100 % e il blocco ha un'ombra del testo leggera. Corretto (vedi tabella sopra).
- Etichette tipologia sulle foto di `DestinationCard`: come le card dei viaggi, ora cartellino nero. Corretto.
- Uvita: lista di definizioni non valida nella mini guida. Corretto.

### /aree/europa
- «Apri il Paese →» alto 20 px, ripetuto 13 volte con lo stesso nome. Ora 44 px, `aria-label` «Apri il Paese: Francia» e freccia `aria-hidden`. Corretto.
- Chip dei Paesi da 36 a 44 px, con lo stile comune `chip`. Corretto.

### /meraviglie, /chi-sono
- axe senza violazioni già prima. Etichetta del Paese sulle foto di `MeravigliaCard` (panna al 70 %): ora cartellino nero. Corretto.

### Componenti non in queste pagine ma toccati
- `GeographyIndex`, `FieldDossier`, `TripOpener`: testi in panna al 40-60 % su fondo scuro, portati al 75 %. `ModuloDomanda`: placeholder dal 60 % all'85 % di `stone`. `MappaPaese` e `MappaAtlante`: filtri e bottoni da 40 a 44 px.

## Design system (in `src/app/globals.css`)

Pochi strumenti, solo dove le classi si ripetevano uguali in più file:

| Utility | Cosa fa | Dove |
|---|---|---|
| `btn` + `btn-primario` | rosso pieno, 48 px, angoli vivi, pressione di 1 px | home, `PageHeader`, `FeaturedJourney`, `SalvatiElenco`, `ScaricaGuida`, `error.tsx`, `lavoriamo-insieme`, `TripFilters` |
| `btn` + `btn-secondario` | bordo nero 2 px, al passaggio si riempie di nero; il fondo lo decide il contesto | «Mostra altri» in `TripFilters` |
| `chip` | filo leggero, 44 px, al passaggio nero pieno | salti per area in `/viaggi`, Paesi in `/aree/…`, aree del mappamondo |
| `scheda` | bordo nero 2 px + ombra rossa 6 px sfalsata | `DestinationCard`, card top, home, stato vuoto dei filtri, `Blocchi`, `FeaturedJourney` |
| `scheda-link` | al passaggio o al focus l'ombra passa a 9 px; solo se il movimento è consentito la scheda sale di 2 px; alla pressione torna giù | `DestinationCard`, card top, link «Tutti i viaggi in …» delle aree |
| `sezione` | spaziatura verticale delle sezioni, quella prevalente (`py-14 sm:py-20`) | 32 sezioni in 24 file: prima c'erano 7 varianti (`py-16 sm:py-24`, `py-20 sm:py-28`, `py-24 sm:py-32`…) |

Nessun gradiente, vetro o ombra nuova. I colori restano crema, nero, rosso; le filigrane non sono state toccate. Gli altri bottoni secondari (bordo nero 2 px, fondo crema o bianco, al passaggio nero) erano già coerenti e sono rimasti com'erano. `TripCard` (archivio) tiene il suo filo sottile senza ombra: con 83 card l'ombra rossa sarebbe troppo pesante.

## Microinterazioni

- Tenute: cambio colore al passaggio (120-150 ms), ombra delle schede che si allunga, freccia che si sposta di 2-4 px, zoom lento delle foto al passaggio. Tutto fermo con `prefers-reduced-motion`.
- Aggiunte: pressione di 1 px sui bottoni e sulle frecce di `BinarioCard`; il filo del campo di ricerca diventa rosso col focus.
- Tolte o ridotte: lampeggio infinito del marchio (ora 4 volte); `backdrop-blur` della barra dei filtri e del pulsante pausa; il sollevamento delle schede ora parte solo se il movimento è consentito (prima solo la scala alla pressione era protetta).
- `FeaturedBorderTrail` (scia animata all'infinito sul bordo) non viene mai mostrata: `TripCard` non riceve mai `featured`. L'ho lasciata, ma se torna in uso va limitata a meno di 5 secondi (2.2.2).

## Cosa resta

- **Video in loop senza pausa** in `HeaderMedia`, `MeravigliaHeroMedia` e `TripOpener` (2.2.2). Solo `HeroVideo` in home ha il pulsante pausa. Con `prefers-reduced-motion` i video non partono. Non toccati perché il caricamento dei video lo segue l'altro agente: serve un pulsante pausa come quello di `HeroVideo`.
- Numeri decorativi dei giorni al 20 % (12 nodi axe sul viaggio Giappone): scelta voluta, da rivedere solo se si vuole axe a zero.
- Briciole (16 px d'altezza) e link nelle righe di testo: passano 2.5.8 (spaziatura) ma non arrivano a 44 px.
- Il menu mobile non è un dialog modale: col Tab si chiude uscendo, ma la pagina sotto resta raggiungibile con lo screen reader in modalità lettura.
- `MappaAtlante.tsx` ha due errori ESLint `react-hooks/set-state-in-effect` (righe 393 e 508) che c'erano già: non toccati.
- Va rifatta una passata axe e `foto.cjs` sulla build di produzione dopo il prossimo `npm run build`: i numeri «dopo» vengono da `next dev`.
