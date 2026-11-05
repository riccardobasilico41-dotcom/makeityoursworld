# P2 · SEO tecnico e prestazioni

Data: 5 novembre 2026. Il «prima» è misurato sul sito live (https://makeityoursworld.vercel.app, con P0 e P1). Il «dopo» è verificato sul server di sviluppo locale (`next dev -p 3301`), perché in questa fase non si poteva fare `npm run build`. Lighthouse non è stato usato, quindi qui non ci sono punteggi Lighthouse.

## Strumenti e condizioni

- **Crawl SEO:** script Node (`fetch`) su tutte le 2.412 URL della sitemap live. Controlla stato HTTP senza seguire i redirect, title, description, canonical, hreflang, og:image, numero di `<h1>` e JSON-LD.
- **Prestazioni:** Playwright con chrome-headless-shell (quello di remotion-video), cache disabilitata via CDP, PerformanceObserver per LCP e CLS, CDP `Network.*` per byte e richieste. Si misura 10 s dopo `load` (15 s con throttling). Il telefono è 390×844 a DPR 3 con UA Android, il desktop è 1440×900. Ci sono due casi: «salta» (`sessionStorage['intro-vista']='1'`) e «con» (prima visita, con l'apertura a filigrane).
- **Throttling:** CDP con latenza 562,5 ms, 180 KB/s in download, 84 KB/s in upload e CPU 4×. **Avvertenza:** con chrome-headless-shell il throttling CDP non frena le richieste del video. Sul desktop sono passati 9,6 MB di video in 15 s, che a 180 KB/s è impossibile. I byte di video sotto throttling vanno quindi letti come un limite inferiore del problema reale.
- **Avvertenza sul loop:** con la cache disabilitata il video in loop viene richiesto di nuovo a ogni giro. Per questo i «Media» del telefono (6,7 MB in 10 s) superano la dimensione del file (4,4 MB). Con la cache normale il secondo giro non si riscarica.

## Misure prima (live, rete normale, 10 s dopo load)

| Pagina | Dispositivo | Apertura | Richieste | Totale | Video | Immagini | LCP | Elemento LCP | CLS |
|---|---|---|---|---|---|---|---|---|---|
| /it | telefono | salta | 83 | 8.035 KB | 6.683 KB (mobile-40s) | 786 KB | 1,5 s nella 1ª misura, non registrato nella 2ª | poster del video | 0 |
| /it | telefono | con | 82 | 8.699 KB | 7.348 KB | 786 KB | 1,3 s | poster del video | 0 |
| /it | desktop | salta | 92 | 9.797 KB | 8.634 KB (1600) | 543 KB | 1,6 s | poster del video | 0,004 |
| /it | desktop | con | 91 | 10.541 KB | 9.379 KB | 543 KB | 1,4 s | poster del video | 0 |
| /it/viaggi | telefono | salta | 73 | 1.494 KB | — | 882 KB | **6,8 s** | 1ª card (Sigiriya) | 0 |
| /it/viaggi | desktop | salta | 105 | 1.721 KB | — | 890 KB | 1,7 s | testo del lead | 0,004 |
| /it/viaggi/giappone-itinerario | telefono | salta | 76 | 5.124 KB | 3.580 KB | 846 KB | 1,8 s | H1 | 0 |
| /it/viaggi/giappone-itinerario | desktop | salta | 91 | 5.295 KB | 3.580 KB | 882 KB | 1,9 s | poster del video | 0,004 |

Con throttling (Fast 3G e CPU 4×, 15 s):

| Pagina | Dispositivo | FCP | LCP | Elemento LCP | Totale |
|---|---|---|---|---|---|
| /it (salta) | telefono | 5,5 s | non registrato | — | 4.305 KB, di cui 2.953 di video |
| /it (con) | telefono | 4,5 s | 5,7 s | poster | 4.814 KB |
| /it (salta) | desktop | 4,1 s | 7,0 s | poster | 10.705 KB, di cui 9.586 di video |
| /it/viaggi | telefono | 2,3 s | **18,9 s** | 1ª card | 1.209 KB |
| /it/viaggi/giappone-itinerario | telefono | 4,9 s | 6,6 s | H1 | 4.572 KB, di cui 3.028 di video |

Il CLS resta intorno a 0 ovunque (massimo 0,0067).

### Cosa è emerso

1. **Video della Home.** Il file desktop `runaway-hero-1600.mp4` pesa 54,6 MB, quello mobile `runaway-hero-mobile-40s.mp4` 4,4 MB. La sorgente mobile è già scelta bene (`media="(max-width: 900px)"`). Però `preload="auto"` e il `play()` lanciato all'idratazione fanno partire il download insieme a poster, font e JS. Il file da 1600 px poi continua a scaricarsi per tutta la visita, anche a pagina scorsa: 8,6 MB in 10 s.
2. **36 `<link rel="preload" as="image">` in ogni pagina** per le miniature dell'apertura (`IntroFiligrane`, montata nel layout). React li genera per ogni `<img>` non lazy. Stavano nell'`<head>` prima del poster LCP e venivano scaricati anche con l'apertura già nascosta (`display:none`), cioè a ogni pagina e non solo in Home.
3. **Video delle testate (viaggi, meraviglie).** Con `autoPlay` partono subito, 3,6 MB su giappone-itinerario. Il poster non veniva preparato in anticipo.
4. **Archivio /viaggi sul telefono.** La prima card è l'elemento LCP ma era lazy e a priorità bassa: LCP 6,8 s su rete normale, 18,9 s con throttling.
5. **SEO, crawl completo (2.412 URL):** 0 errori, 0 redirect, 0 URL non 200, 0 canonical diversi dalla pagina, 0 pagine con più o meno di un h1, 0 title o description duplicati, hreflang completi (it/en/es/x-default) e tutti presenti nella sitemap. L'archivio con query (`/trips?paese=giappone`, `/it/viaggi?paese=giappone&durata=10-15`) ha già il canonical senza query. Problemi trovati:
   - **66 pagine senza og:image**: /viaggi, /destinazioni, /meraviglie, /aree/*, /attrezzatura/*, chi-sono, amazzonia, trasparenza, lavoriamo-insieme e come-lavoro, nelle 3 lingue. Quando una pagina imposta `openGraph` nei metadata, perde l'immagine del layout.
   - **og:image inglesi con doppio redirect e in italiano.** Next scriveva l'indirizzo interno `/en/viaggi/<slug>/opengraph-image`, che faceva 308 su `/viaggi/…` e poi 308 su `/it/viaggi/…`: l'anteprima inglese di viaggi, Paesi e destinazioni arrivava in italiano dopo due redirect.
   - JSON-LD `Blog` del layout: `author` sempre nella versione italiana e `url` sempre la radice inglese.
   - /viaggi, /destinazioni e /meraviglie avevano le briciole visibili ma non la `BreadcrumbList`.
   - Sitemap: `lastModified` era la data della build, uguale per tutte le 2.412 URL.
   - 7 title di esperienze superano i 65 caratteri (fino a 74). È il nome dell'esperienza da solo, quando nessuna variante sta nei 60.

## Correzioni

### SEO

- `src/lib/seo.ts`: `pageMetadata` scrive sempre `og:image` e `twitter:image`. Di default è l'immagine del sito nella lingua (`/opengraph-image`, `/it/…`, `/es/…`, 1200×630). Con la nuova opzione `ogPropria: true` è l'opengraph-image della pagina, all'indirizzo pubblico localizzato (`/trips/japan-itinerary/opengraph-image`, `/es/destinos/japon/tokio/opengraph-image`), con il titolo social come alt. Così niente redirect e lingua giusta. In questa versione di Next un `openGraph.images` scritto nei metadata prende il posto dell'immagine del file, per questo serve dirlo esplicitamente.
- `ogPropria: true` in viaggi/[slug], destinazioni/[paese], destinazioni/[paese]/[slug], esperienze/[paese]/[slug] e meraviglie/[slug].
- `src/proxy.ts`: `/en/…/opengraph-image` si serve direttamente invece di fare 308. Copre gli indirizzi interni che Next scrive ancora: la Home usa l'opengraph-image di `[lang]`. Nessuna route pubblica cambia.
- `src/app/[lang]/layout.tsx`: il JSON-LD `Blog` usa `autore(lingua)` e la home della lingua.
- /viaggi, /destinazioni e /meraviglie: aggiunta la `BreadcrumbList` con le stesse briciole visibili. Le briciole di viaggio (Home › Viaggi › Area › Paese › viaggio), Paese, destinazione e area erano già coerenti con quelle visibili e non sono state toccate. `BlogPosting` (viaggi), `Country`, `TouristDestination` e `FAQPage` restano invariati: non ho aggiunto TouristTrip o date.
- `src/app/sitemap.ts`: tolto `lastModified`. Va rimesso solo quando ci sarà una data vera per ogni pagina.

Verificato su dev: /trips, /it/viaggi, /es/viajes, /regions/asia e /it/meraviglie ora hanno og:image e twitter:image. /trips/japan-itinerary punta a `/trips/japan-itinerary/opengraph-image`, che risponde 200 con l'immagine inglese (74.835 byte, uguale a quella interna `/en/…`). /es/viajes/…, /destinations/japan e /es/destinos/japon/tokio rispondono 200 image/jpeg. La sitemap ha 2.412 `<loc>` e 0 `lastmod`. La `BreadcrumbList` compare sulle tre pagine indice.

### Prestazioni

- `IntroFiligrane.tsx`: le miniature sono `loading="lazy"`, `decoding="async"` e `fetchPriority="low"`. I 36 preload spariscono dall'`<head>` di tutte le pagine (verificato su dev: Home, viaggio e archivio non hanno più preload `/images/intro/*`). Con l'apertura nascosta le miniature non si scaricano più. Nella prima visita, l'overlay fisso è nel viewport e le carica comunque.
- Nuovo `src/lib/video-differito.ts`: avvio dopo `load`, niente avvio automatico con «Risparmio dati» o `effectiveType` 2G/3G, pausa con IntersectionObserver fuori dallo schermo e ripresa al ritorno (solo se non l'ha messo in pausa l'utente).
- `HeroVideo.tsx` (Home): `preload="metadata"` al posto di `"auto"`, avvio dopo `load` (prima arrivano poster, testo, font e JS), pausa fuori vista, pulsante sincronizzato con lo stato reale (`onPlay`/`onPause`). Su rete lenta resta il poster con il pulsante play. Sorgenti e salto del titolo «WORLD» sul desktop restano come prima.
- `HeaderMedia.tsx` e `MeravigliaHeroMedia.tsx`: niente `autoPlay`, `preload="none"`, avvio differito con lo stesso hook e poster preparato in anticipo nell'`<head>` con `fetchPriority: 'high'`, perché è l'elemento LCP della testata.
- `TripCard.tsx` e `TripFilters.tsx`: nuova prop `subito`. La prima card della prima griglia è eager con `fetchPriority="high"`, le altre restano lazy. Su dev compare il suo preload in `<head>`.

Misure dopo, **solo su dev**: tempi e JS non sono confrontabili con la produzione, perché il server di sviluppo era carico e compilava al volo, con FCP fino a 50 s. Valgono solo il comportamento e i byte di video e immagini:

- Viaggio giappone-itinerario, telefono: **0 KB di video** nei 10 s dopo `load` (prima 3.580 KB). Il video è sotto la piega del telefono e parte solo quando entra nello schermo. Le richieste sono passate da 76 a 31.
- Viaggio, desktop: il video resta fermo fino al `load`, poi parte da solo (controllato con Playwright: `play()` chiamato dopo `load`, `paused:false`).
- Home desktop: in pausa a pagina scorsa, riparte tornando su (Playwright: `paused:true` dopo lo scroll, `paused:false` al ritorno).
- Home, telefono e desktop: 0 preload delle miniature dell'apertura. Immagini 501 KB invece di 786 KB sul telefono e 284 KB invece di 543 KB sul desktop, con l'apertura saltata.

**Da rifare dopo il deploy:** la tabella «prima» sul live, con lo stesso script (`scratchpad/p2b/perf.mjs`, `node perf.mjs <url> etichetta [1]`) e il crawl (`crawl-seo.mjs`), per avere LCP e pesi veri in produzione.

## Cosa resta e proposte

- **Video desktop più leggero (non fatto: niente ricodifiche senza ok, il disco è quasi pieno).** 54,6 MB per un hero sono troppi anche con l'avvio differito, perché chi resta in cima alla Home lo scarica tutto. Proposta: una versione 1280 px H.264 CRF 28 o un AV1/WebM da 8-12 MB, oppure accorciarlo a 40 s come quello mobile (4,4 MB), più una `<source>` intermedia `media="(max-width: 1440px)"`.
- **Video delle testate (144 MB in public/videos/trips).** Non esiste una versione mobile: sul telefono si scarica il file da 1280 px, 3-5 MB. Proposta: versioni da 640 px, circa 1 MB, con `<source media>`.
- **Apertura a filigrane:** l'overlay copre la pagina per 1,2-3,5 s, quindi nella prima visita l'LCP reale viene dopo la sua uscita. È una scelta di design: segnalata, non toccata.
- **Prefetch dei link:** 85-256 KB di richieste RSC (`Fetch`) nei primi secondi, per i `<Link>` visibili. Si può limitare con `prefetch={false}` sui link meno usati (footer, mappa), ma va valutato con chi cura la UX.
- **Title lunghi** di 7 esperienze (praga-castello-biglietto, trakai-castello-lago-galve, flamenco-triana, norte-ibiza-calas): serve un nome breve per il title, è contenuto.
- **«Pagina aggiornata il»** nella pagina viaggio mostra la data della build (`new Date()`), non una data reale. Per questo non l'ho messa in `dateModified` del `BlogPosting`. Se si aggiunge una data vera nei dati del viaggio, va usata in entrambi i posti e nella sitemap.
- L'`alt` dell'opengraph-image dei viaggi (`export const alt`) è in italiano anche in inglese e spagnolo. Il nuovo `og:image:alt` scritto da `pageMetadata` è nella lingua giusta.
- `IntroFiligrane.tsx:48` ha un errore ESLint (`react-hooks/set-state-in-effect`) che c'era già prima di queste modifiche. Non l'ho toccato perché riguarda la logica del componente.
