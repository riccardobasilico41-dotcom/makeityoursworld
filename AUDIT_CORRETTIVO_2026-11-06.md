# Audit correttivo — 6 novembre 2026

Sito: Make It Yours World (Next.js 16.3.1, it/en/es). Brief: `docs/ux/BRIEF-2026-11-06.md`.
Fonti di questo documento: i report in `docs/ux/` (AUDIT.md, P2-accessibilita.md, P2-seo-prestazioni.md, report-i18n.md,
report-autenticita-periodi.md, report-contatti-privacy.md, report-meraviglie.md, report-packing-pdf.md) e i test eseguiti oggi
sulla build di produzione locale (`npm run build`, poi `npx next start -p 3100`). Niente git, niente deploy.

Condizioni dei test di oggi: MacBook con disco al 90 % (circa 10 GB liberi), memoria quasi esaurita e carico medio molto alto
(load average fino a 229, con altre applicazioni attive). I tempi assoluti di crawler e misure ne risentono; gli esiti
(stato HTTP, testi, violazioni) no.

Due build: **build 1** (circa 13:05, con le correzioni di §2 tranne la legenda della mappa e il testo della 404) e **build finale**
(circa 15:25). Tra le due, alle 14:40-14:42, file di contenuto sono stati modificati da fuori da questa sessione
(`src/content/consigliati.ts`, `paesi/peru.ts`, `destinazioni/{arabia-saudita,borneo,emirati-arabi-uniti,peru,thailandia}.ts`,
`viaggi/50-peru-itinerario.md`, `viaggi/83-peru-due-settimane.md` e le copie en/es): «Proyecto Cusimaky» con link Instagram e
le schede senza viaggio riscritte («È un'estensione possibile del viaggio che ho fatto io…»). Non le ho toccate; sono nella build
finale e coperte dai test rifatti su di essa (§5).

## 1. Voci per URL / template

Gravità: P0 = blocca l'uso o dice il falso; P1 = problema serio di contenuto, navigazione o conformità; P2 = rifinitura.
Stato: **risolto** (corretto e verificato), **verificato** (era già a posto e il test lo conferma), **documentato** (non corretto, motivo
indicato), **in sospeso** (servono dati da Rick).

| # | URL / template | Problema | Grav. | Causa | Correzione | Stato | Test eseguito | Residui |
|---|---|---|---|---|---|---|---|---|
| 1 | Pagine EN (selettore lingua) | Link `/it/en/…`, `/es/en/…` (404) nell'HTML delle pagine inglesi | P0 | `canonico()` non toglieva `/en` della rotta interna | `src/lib/i18n/percorsi.ts`, `src/proxy.ts`, `SelettoreLingua.tsx` (report-i18n) | risolto | i18n-selettore 279/291 (i 12 errori sono solo sulle 404, vedi #20), i18n-selettore-click 22/22 sulla build finale | — |
| 2 | Pagine EN/ES (Cina, Giappone, Egitto, Indonesia…) | Etichette italiane («sakura · cultura · cibo») | P1 | `stile` non tradotto in `CountryHero` e scheda Paese; dizionario incompleto | `etichette(…, lingua)`, indice senza maiuscole, 33 voci (report-i18n) | risolto | i18n-italiano 1737/1738: l'unico «errore» è un falso positivo (§5) | testi di contenuto in `docs/ux/i18n-contenuti-da-tradurre.md` |
| 3 | Tutte le pagine viaggio, Paese, destinazione | Frasi che negavano i viaggi («non l'ha fatto Rick», «itinerario d'esempio», «non ci sono ancora stato» sul Kalimantan…) | P0 | testi editoriali vecchi | riscritture it/en/es, `provenienza` journey/combined in TripMeta (report-autenticita-periodi) | risolto | coerenza-dati (build finale): 0 negazioni su 2607 pagine; 5 avvisi su frasi in sospeso (§5) | Churchill, Amazzonia, conferma delle schede senza viaggio: decide Rick |
| 4 | Viaggi: «Periodo del viaggio» | Stagioni consigliate scritte come periodo reale | P1 | campo unico per due informazioni | periodo reale svuotato in 73 viaggi, consiglio in «Quando andare», `mesiConsigliati` in 95 TripMeta | risolto | finder-filtri 30/30 (95 viaggi, 86 con mesi consigliati, 13 con mese reale) | periodi reali dei 73 viaggi da Rick |
| 5 | Lavoriamo insieme, Privacy, Trasparenza | «[email da inserire]», pulsanti senza destinazione | P0 | contatti non ancora disponibili | `src/lib/site-config.ts` con `contactEnabled: false`, frase «I contatti saranno disponibili a breve» (report-contatti-privacy) | risolto | coerenza-dati: 0 segnaposto; link-interni: 0 `href="#"`, vuoti, `javascript:` o mailto vuoti | dati del titolare da Rick |
| 6 | Domande sotto i viaggi | Modulo che raccoglie dati personali senza titolare | P1 | informativa incompleta | `domandeAttive` spento finché manca il titolare | risolto | verificato nel codice (report-contatti-privacy) | si riapre con i dati del titolare |
| 7 | Meraviglie (7 schede) | Prezzi, regole e orari non verificati (Machu Picchu, Colosseo, Petra, Chichén Itzá, Taj Mahal…) | P1 | dati vecchi | fact check su fonti ufficiali, `fonti`, `verificataIl`, `statoVerifica` (report-meraviglie) | risolto (4 verificate, 3 parziali) | axe Machu Picchu 0 violazioni; date dalla fonte, non `new Date()` | prezzi Machu Picchu, Petra by Night, van del Cristo, Muraglia per sezione |
| 8 | `/attrezzatura/<lista>` | Liste non usabili come strumento; avviso affiliati falso | P1 | voci solo link, tag Amazon vuoti | `ChecklistValigia.tsx` (checkbox, contatore `aria-live`, Azzera, Stampa, localStorage) (report-packing-pdf) | risolto | tastiera: Spazio spunta, «0 di 19 → 1 di 19 pronti», resta dopo il ricaricamento, Azzera da tastiera; axe 0 | — |
| 9 | PDF california-road-trip, canada-itinerario, peru-itinerario | Copertina con i giorni sbagliati (9 invece di 19, 9 invece di 16, 20 invece di 31) | P1 | la copertina contava le schede, non i giorni | codice già corretto in `guide/[slug]/stampa/page.tsx`; oggi i 3 PDF rigenerati | risolto | controlla-guide-pdf 25/25; `pdftotext`: «19 / 16 / 31 giorni»; prima pagina e seconda pagina del Perù guardate a vista | — |
| 10 | `/it/viaggi/roma-4-giorni` e ogni viaggio con una sola tappa | Accanto alla mappa «La linea tratteggiata segue le tappe…» ma la linea non c'è | P2 | testo fisso in `MappaAtlante.tsx` | nuovo testo `toccaSenzaLinea` (it/en/es) quando il percorso è vuoto (meno di 2 punti); anche la voce «Percorso, in ordine di tappa» della legenda ora compare solo se la linea c'è | risolto | Playwright sulla build finale: roma-4-giorni mostra «Tocca un punto per avvicinarti…» e la legenda senza «Percorso» (screenshot roma-mappa-390/1440); giappone-itinerario (IT ed EN) mantiene la frase sulla linea | — |
| 11 | Pagina viaggio (`viaggi/[slug]/page.tsx`) | «Pagina aggiornata il …» con `new Date()`: data finta (data della build) | P1 | nessuna data reale nei dati | tolta la riga (e l'import `LOCALE`); resta «Viaggio effettuato nel periodo: …» solo quando c'è il periodo reale | risolto | curl su roma-4-giorni: nessuna «Pagina aggiornata»; tsc ed eslint puliti | se Rick vuole una data, va aggiunta ai dati (anche in `dateModified` e sitemap) |
| 12 | 404 (`/it/pagina-inesistente`, `/trips/nope`…) | La card «Tutti i viaggi» diceva «Ottanta itinerari» (sono 95) | P2 | numero scritto a mano | testo senza numero in it/en/es (`not-found.tsx`) | risolto | curl sulla build finale: «Tutti gli itinerari giorno per giorno» | — |
| 13 | 404 (tutte) | L'HTML del server arriva senza `lang`, senza header/footer e senza testo (`<html id="__next_error__">`); il contenuto compare solo dopo il JavaScript | P1 | vedi §3 | non corretto | documentato | riprodotto su build (3100) e su `next dev` (3201) | da affrontare con `global-not-found` o aggiornamento di Next, §3 |
| 14 | `MappaAtlante.tsx`, `IntroFiligrane.tsx` | 4 errori ESLint `react-hooks/set-state-in-effect` | P2 | setState sincrono negli effetti | vedi §2 (stesso comportamento) | risolto | `npx eslint src`: 0 errori, 1 avviso preesistente | — |
| 15 | Header | Mancava il link a «Viaggi» e «Destinazioni» | P0 | (AUDIT.md) | voci fisse in `Header.tsx` | verificato | link-interni 2817/2817 | — |
| 16 | `/viaggi` (Travel Finder) | Filtri non nell'URL, Paese da `categorie[1]`, stato vuoto senza uscita | P0 | (AUDIT.md) | filtri in URL (`useSearchParams`), `paesiDelViaggio`, «Azzera filtri» | verificato | finder-filtri 30/30; tastiera: `?area=asia` 12 viaggi su 46 link; dialog filtri con focus, Esc | — |
| 17 | Viaggio Giappone, Centro America | Numeri giganti dei giorni al 20 % (axe color-contrast 12 e 32 nodi) | P2 | filigrana decorativa `aria-hidden` | non toccati per scelta (eccezione «pura decorazione» 1.4.3, P2-accessibilita) | documentato | axe 390/1280 | se si vuole axe a zero |
| 18 | `/it/viaggi` telefono | LCP 4,8 s (locale) sulla prima card | P2 | foto della prima card | già `subito` (eager + fetchPriority high) dal P2 | documentato | perf.mjs | da rimisurare sul live |
| 19 | Home desktop | Video hero `runaway-hero-1600.mp4` 54,6 MB, 9,5 MB scaricati in 10 s | P1 | file troppo pesante | non ricodificato (serve ok e spazio disco) | documentato | perf.mjs | proposta in P2-seo-prestazioni |
| 20 | 404: selettore lingua nell'HTML del server | 12 controlli statici falliti: senza header non ci sono i link delle lingue | P2 | conseguenza di #13 | — | documentato | i18n-selettore; nel browser (dopo JS) il selettore porta alla home della lingua: i18n-selettore-click 3/3 casi 404 ok | si risolve con #13 |
| 21 | Mini guide (link esterni) | `https://catedraldegranada.com/` non risponde (timeout 40 s) | P2 | sito ufficiale lento o giù | non tolto (sito ufficiale) | documentato | controlla-url-guide: 386 link, 1 morto; curl di conferma: timeout | ricontrollare |
| 22 | Title SEO | 15 title oltre 65 caratteri (es. `/it/viaggi/okinawa-estate` 75) | P2 | titolo lungo del contenuto | non toccato (contenuto) | documentato | crawl-seo | servono titoli brevi |
| 23 | Video in loop senza pausa (`HeaderMedia`, `MeravigliaHeroMedia`, `TripOpener`) | WCAG 2.2.2 | P2 | (P2-accessibilita) | — | documentato | — | serve un pulsante pausa come in `HeroVideo` |

## 2. Changelog di oggi

- `src/components/MappaAtlante.tsx`: testo `toccaSenzaLinea` (it/en/es) quando il viaggio ha una sola tappa; lint:
  `dettaglio` si aggiorna durante il render (prima in un effetto), la fase del percorso si ricava da `useSyncExternalStore`
  (`percorsoAnimabile()`: IntersectionObserver e niente movimento ridotto) più lo stato `visto` impostato nel callback
  dell'IntersectionObserver. Sul server e nell'idratazione resta «ssr» come prima, poi «attesa» e «visto».
- `src/components/IntroFiligrane.tsx`: lint: la variante forzata `?intro=colore|bn` si legge con `useSyncExternalStore`
  (sul server vale la prop, come prima); quando l'apertura va saltata, lo script in linea la nasconde già prima del primo
  disegno e il componente si toglie dal DOM in un `setTimeout(0)` invece che con un setState sincrono.
- `src/app/[lang]/viaggi/[slug]/page.tsx`: tolta «Pagina aggiornata il …» (`new Date()`); il periodo reale resta.
- `src/app/[lang]/not-found.tsx`: tolto «Ottanta» / «Eighty» / «Ochenta».
- `src/components/MappaAtlante.tsx`: la voce di legenda «Percorso, in ordine di tappa» compare solo se la linea c'è.
- `tools/guida-pdf.cjs`: aspetta solo le immagini della guida (non le miniature lazy dell'apertura, che bloccavano l'attesa),
  imposta `intro-vista` per non stampare l'apertura, timeout da 10 a 40 minuti.
- `tools/test/i18n-selettore-click.mjs`: il caso `/regions` → `/es/regiones` aspettava una pagina che non esiste (`/regions`
  non ha indice, è un 404 voluto); ora prova `/regions/asia` → `/es/regiones/asia`.
- Nuovi test: `tools/test/link-interni.mjs` (crawler dei link interni) e `tools/test/coerenza-dati.mjs` (negazioni,
  segnaposto, conteggi, destinazioni orfane; frasi in sospeso di Rick come avvisi).
- PDF: vedi §4.

## 3. 404 senza lang né testo nell'HTML (non corretto)

Riprodotto: `curl /it/pagina-inesistente` → HTTP 404, `<html id="__next_error__">`, `<body>` vuoto; il testo («Questa strada…»)
c'è solo nel payload RSC e compare dopo l'idratazione. Uguale su `/trips/nope`, `/it/viaggi/nope`, `/es/no-existe`, e in `next dev`.
Prove fatte (in `next dev`, poi ripristinate): `not-found.tsx` ridotto a un solo `<p>` → stesso shell; `notFound()` del layout
tolto e `lang()` registrato → il layout riceve `"it"` e non lancia: l'errore `NEXT_HTTP_ERROR_FALLBACK;404` arriva al
recupero d'errore del rendering HTML (`app-render.js`, «renderToStream errorRecovery») e Next manda lo shell d'errore.
Il layout radice è `[lang]/layout.tsx` (segmento dinamico, root params): è il caso che la documentazione di Next 16
(`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/not-found.md`, `global-not-found.js`) indica come
difficile da comporre. Una correzione richiede `experimental.globalNotFound` + `app/global-not-found.tsx` (pagina senza layout,
con font e CSS propri e lingua da ricavare dall'URL) o un cambio di struttura delle route: non è «semplice e sicura», quindi
non l'ho fatta. Effetti: i motori vedono 404 + noindex (corretto); chi non ha JavaScript vede una pagina bianca.

## 4. PDF

Rigenerati con `node tools/guida-pdf.cjs <slug> "<Nome>" 3201` su `next dev -p 3201` (la pagina di stampa esiste solo in
sviluppo: in produzione dà `notFound()`), nomi uguali ai file già sul disco esterno.

| Guida | Pagine | Byte (elenco = file) | Copertina | Prima |
|---|---|---|---|---|
| california-road-trip | 31 | 3.373.610 | «Guida pratica · 19 giorni» | 2.706.616 byte, «9 giorni» |
| canada-itinerario | 28 | 4.855.781 | «Guida pratica · 16 giorni» | 2.372.569 byte, «9 giorni» |
| peru-itinerario | 60 | 7.962.202 | «Guida pratica · 31 giorni» | 4.858.204 byte, «20 giorni» |

`node tools/controlla-guide-pdf.mjs`: «OK: 25 PDF, elenco e file allineati». `public/guide-pdf` ora 69 MB. Il pulsante del Perù
sulla build finale dichiara «8,0 MB».
Due problemi dello script trovati e corretti: (1) attendeva tutte le `<img>`, comprese le 160 miniature `loading="lazy"`
dell'apertura a filigrane montata nel layout, che con l'apertura nascosta non si caricano mai: l'attesa non finiva e Playwright
andava in timeout (prima prova: 3 timeout); ora aspetta solo le immagini fuori da `#intro-filigrane`; (2) ora imposta
`sessionStorage['intro-vista']='1'`, così l'apertura non può finire nel PDF. Timeout portato a 40 minuti.
I PDF sono più pesanti di prima (+25-65 %): non ho indagato la causa (probabilmente immagini servite da `next dev`); se serve
si possono ricomprimere con `tools/comprimi-guide.py`.

## 5. Risultati di tutti i test (eseguiti davvero)

| Test | Dove | Risultato |
|---|---|---|
| `npm run build` | build 1 e build finale | passata entrambe (4 min 14 s e 5 min 7 s) |
| `npx tsc --noEmit` | codice finale | 0 errori |
| `npx eslint src` | codice finale | 0 errori, 1 avviso preesistente (`motion-primitives/text-effect.tsx:183`, variabile `_` non usata). Prima: 4 errori `set-state-in-effect` (3 in MappaAtlante, 1 in IntroFiligrane) |
| `tools/test/i18n-percorsi.mjs` | build 1 e finale | 5214/5214 ok |
| `tools/test/i18n-sitemap-200.mjs` | build 1 e finale | 2607/2607 ok (200, niente redirect, `lang` giusto) |
| `tools/test/i18n-selettore.mjs` | build 1 e finale | 279/291: i 12 errori sono tutti sulle 6 pagine 404 (link delle altre lingue assenti nell'HTML del server, conseguenza di #13); 0 errori sulle 31 pagine × 3 lingue |
| `tools/test/i18n-selettore-click.mjs` | build 1: 21/22 · finale: **22/22** | l'errore era il caso `/regions` del test (pagina inesistente), corretto il test |
| `tools/test/i18n-italiano.mjs` | build 1 e finale | 1737/1738: l'unico caso è un falso positivo su `/es/destinos/borneo/kota-kinabalu` (la finestra di 40 caratteri del test spezza «Monte Kinabalu · GetYourGuide» e legge «kinabalu» da solo; il testo è già spagnolo) |
| `tools/test/finder-filtri.mjs` | senza server | 30/30 (95 viaggi, 86 con mesi consigliati, 13 con mese reale, 9 con budget, 57 Paesi nel filtro) |
| `tools/test/link-interni.mjs` (nuovo) | build 1 e finale | 2.607 pagine lette, 2.817 destinazioni interne: 2.770 rispondono 200, 47 con redirect verso 200, 0 rotte; 0 `href` vuoti, `#`, `javascript:` o mailto/tel vuoti; 0 `<button>` senza type né attributi d'azione |
| `tools/test/coerenza-dati.mjs` (nuovo) | build finale | 3759/3759 ok: 0 negazioni, 0 segnaposto di contatto, conteggi uguali in it/en/es (95 viaggi, 53 Paesi tra home, archivio e destinazioni), 1.149 destinazioni senza orfani (Paese in sitemap e link dalla pagina del Paese). 5 avvisi in sospeso: Churchill (it/en/es) e Amazzonia «con loro non ci sono stato» riferito agli operatori (it/es). Sulla build 1 gli avvisi erano 15 (c'erano anche le 4 schede senza viaggio, poi riscritte da fuori) |
| `node tools/controlla-link-destinazioni.mjs` | senza server | 5.961 link, 0 rotti |
| `node tools/controlla-guide-pdf.mjs` | prima e dopo i PDF | OK: 25 PDF, elenco e file allineati |
| `python3 tools/controlla-md-i18n.py en` / `es` | senza server | 0 file con avvisi / 0 file con avvisi |
| `python3 tools/controlla-url-guide.py` | rete | 386 link, 1 morto: `https://catedraldegranada.com/` (timeout; confermato con curl, 40 s senza risposta). Non tolto: è il sito ufficiale |
| axe-core | build 1 | vedi §7 (0 violazioni ovunque tranne i numeri decorativi dei giorni) |
| Tastiera (Playwright) | build finale | 11/11 (build 1: 10/11 per un errore dello script, che cliccava il link della lingua nascosto del menu mobile) |
| Responsive | build 1 (4 pagine × 7 larghezze) + finale (roma) | 30/30 senza scroll orizzontale |
| crawl SEO | build 1 e finale | uguale, vedi §6 |
| perf.mjs | build 1 | vedi §8 |

Artefatto noto, escluso dagli errori: sul server locale le richieste di prefetch `_rsc` verso le pagine delle altre lingue rispondono
404 (sul live rispondono 200). Nessun test sopra conta quelle richieste.
Non eseguiti: Lighthouse, screen reader reale, axe e responsive rifatti sulla build finale (le modifiche fra le due build non
toccano layout o ARIA, a parte la voce di legenda tolta sui viaggi a una tappa).

## 6. SEO (crawl-seo.mjs, build locale, 2.607 URL della sitemap)

Script: `scratchpad/p2b/crawl-seo.mjs` adattato per leggere da `http://localhost:3100` tenendo come riferimento gli URL
pubblici della sitemap (canonical e hreflang puntano a makeityoursworld.vercel.app).

| Controllo | Risultato |
|---|---|
| Errori di fetch | 0 |
| Canonical diverso dalla pagina | 0 |
| Pagine con h1 ≠ 1 | 0 |
| Senza og:image | 0 |
| Senza hreflang completi (it/en/es/x-default) | 0 |
| hreflang verso URL fuori sitemap | 0 |
| noindex in sitemap | 0 |
| Title duplicati / description duplicate | 0 / 0 |
| Senza description | 0 |
| Title oltre 65 caratteri | 15 (es. `/it/viaggi/okinawa-estate` 75, `/es/viajes/okinawa-verano` 74, `/it/viaggi/classic-japan` 72, `/it/lavoriamo-insieme` 68) |

Sitemap: 2.607 URL (i18n-sitemap-200: tutte 200 senza redirect e con `<html lang>` giusto).

## 7. Accessibilità (axe-core 4.13.0 del progetto + Playwright, build locale)

Regole wcag2a/aa, wcag21a/aa, wcag22aa, best-practice; `prefers-reduced-motion: reduce`, apertura saltata, pagina scorsa fino in fondo.

| Pagina | 390 px | 1280 px | h1 |
|---|---|---|---|
| /it | 0 | 0 | 1 |
| /it/viaggi | 0 | 0 | 1 |
| /it/viaggi?area=asia&durata=10-15 | 0 | 0 | 1 |
| /it/viaggi (telefono, dialog dei filtri aperto) | 0 | — | — |
| /it/viaggi/giappone-itinerario | color-contrast 12 | color-contrast 12 | 1 |
| /it/viaggi/centro-america-itinerario | color-contrast 32 | color-contrast 32 | 1 |
| /es/viajes/giappone-itinerario | color-contrast 12 | color-contrast 12 | 1 |
| /it/destinazioni/giappone (Paese) | 0 | 0 | 1 |
| /it/destinazioni/costa-rica/uvita (destinazione) | 0 | 0 | 1 |
| /it/meraviglie/machu-picchu | 0 | 0 | 1 |
| /it/attrezzatura/islanda-in-tenda | 0 | 0 | 1 |
| /it/lavoriamo-insieme | 0 | 0 | 1 |
| /it/privacy | 0 | 0 | 1 |
| /trips | 0 | 0 | 1 |

Tutti i nodi color-contrast sono i numeri decorativi dei giorni («01», «02»…, `aria-hidden`, `text-alpine/20`), vedi #17.

Tastiera (Playwright, build finale, 11/11): primo Tab = «Vai al contenuto»; menu mobile si apre con Invio, Esc lo chiude e
riporta il focus al pulsante; selettore lingua con Invio porta da `/it/viaggi/giappone-itinerario` a `/trips/japan-itinerary`
(`lang=en`); dialog dei filtri: Invio apre con il focus dentro, Esc chiude e torna su «Filtri»; tab di QuestoMese: Freccia destra
seleziona la scheda successiva («Dove andare a novembre» → «Dove ero a novembre»); checklist: Spazio, contatore, salvataggio,
ricaricamento, Azzera.
Limiti: niente screen reader reale (VoiceOver/NVDA), niente controllo manuale del contrasto sopra le foto in questa passata
(l'ultima misura è in P2-accessibilita, fatta su `next dev`).

## 8. Performance (misure LOCALI)

Strumento: `scratchpad/p2b/perf.mjs` (Playwright + chrome-headless-shell di remotion-video, cache disabilitata via CDP,
PerformanceObserver per LCP/CLS, byte da CDP Network), su `next start -p 3100` in locale, rete non limitata, misura 10 s dopo
`load`, apertura saltata. Telefono 390×844 DPR 3 UA Android; desktop 1440×900. Valgono come confronto, non come Core Web Vitals
reali: niente rete vera, niente CDN, macchina sotto carico.

| Pagina | Disp. | Richieste | Totale KB | Video KB | Immagini KB | JS KB | FCP ms | LCP ms | Elemento LCP | CLS | load ms |
|---|---|---|---|---|---|---|---|---|---|---|---|
| /it | telefono | 87 | 5.346 | 3.904 | 847 | 276 | 840 | 1.248 | video (poster) mobile-40s | 0 | 3.415 |
| /it/viaggi | telefono | 74 | 1.512 | 0 | 886 | 332 | 724 | 4.812 | 1ª card (Sigiriya) | 0 | 2.458 |
| /it/viaggi/giappone-itinerario | telefono | 76 | 1.560 | 0 | 850 | 334 | 828 | 1.632 | H1 | 0 | 2.603 |
| /it | desktop | 57 | 10.538 | 9.486 | 388 | 276 | 532 | 1.232 | video runaway-hero-1600 | 0,0039 | 1.857 |
| /it/viaggi | desktop | 78 | 1.576 | 0 | 763 | 337 | 636 | 900 | testo del lead | 0,0009 | 1.778 |
| /it/viaggi/giappone-itinerario | desktop | 56 | 5.161 | 3.578 | 743 | 340 | 392 | 1.308 | video giappone-360 | 0,0009 | 2.368 |

Lighthouse non usato. Da rifare sul live dopo il deploy con lo stesso script.

## 9. Responsive (Playwright, build locale)

Home, /it/viaggi, /it/viaggi/giappone-itinerario, /it/destinazioni/giappone a 320, 375, 390, 430, 768, 1024, 1440 px: nessuno
scroll orizzontale (`scrollWidth = clientWidth` in tutte le 28 combinazioni), più roma-4-giorni a 390 e 1440.
Screenshot in `/private/tmp/claude-501/-Users-riccardobasilico-Desktop/e057dc1b-1c4b-4bb2-a96f-1a962467a734/scratchpad/qa/`.

## 10. Questioni in sospeso (solo dati che servono da Rick)

1. **Contatti**: email pubblica, eventuale pagina di prenotazione, social (poi `contactEnabled: true` in `src/lib/site-config.ts`).
2. **Titolare privacy**: nome, recapito privacy, indirizzo o sede, conferma «persona fisica a titolo personale» o P.IVA;
   regione dello store Vercel Blob. Le domande sotto i viaggi si riaprono solo dopo.
3. **Periodi reali dei 73 viaggi** oggi senza periodo (più Florida e Beach Life), e le date del viaggio Día de los Muertos.
4. **Cusimaky**: dopo la modifica esterna delle 14:40 il sito scrive «Proyecto Cusimaky» con il profilo Instagram
   `instagram.com/cusimakycusco`; Rick conferma grafia e link (o un sito ufficiale).
5. **Churchill (Canada)**: se resta «questa parte non l'ho fatta io» (it/en/es).
6. **Schede senza viaggio** (Danum Valley, Gunung Mulu, Liwa/Al Ain, Umluj e le altre del report autenticità): sulla build
   finale non dicono più «non ci sono ancora stato» (modifica esterna: «È un'estensione possibile del viaggio che ho fatto io»);
   Rick conferma che la frase è vera per ognuna.
8. **Amazzonia**: «Io con loro non ci sono stato» (it/es, riferito agli operatori): resta così? In inglese la frase non c'è.
7. **Foto senza origine documentata**: elenco in `docs/ux/foto-senza-origine.md`; riconferma delle qualifiche in «Chi sono».

## 11. Riepilogo P0 / P1 / P2 (voci della tabella §1)

| Gravità | Voci | Risolte o verificate | Documentate, non corrette | Dettaglio |
|---|---|---|---|---|
| P0 | 5 | 5 | 0 | #1, #3, #5 risolte (con i report del 6/11) · #15, #16 verificate |
| P1 | 9 | 7 | 2 | risolte #2, #4, #6, #7 (con residui sulle fonti), #8, #9, #11 · documentate #13 (404 senza HTML), #19 (video 54,6 MB) |
| P2 | 9 | 3 | 6 | risolte #10, #12, #14 · documentate #17, #18, #20, #21, #22, #23 |
| **Totale** | **23** | **15** | **8** | |

Screenshot principali (build locale, apertura saltata): `home-390.png`, `viaggi-390.png`, `viaggio-1440.png`, `paese-390.png`,
`roma-mappa-390.png`, `roma-mappa-1440.png` in
`/private/tmp/claude-501/-Users-riccardobasilico-Desktop/e057dc1b-1c4b-4bb2-a96f-1a962467a734/scratchpad/qa/`; script dei test
browser in `scratchpad/qa/qa.cjs`, risultati grezzi (`*.txt`, `*.json`) nella stessa cartella.
