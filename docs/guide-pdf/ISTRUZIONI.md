# Guide PDF degli itinerari: istruzioni per chi le scrive

Sito: /Users/riccardobasilico/Desktop/CLAUDE/CliniMotion (Next.js 16). Leggi `AGENTS.md`. Il dev server gira sulla porta 3000: non avviarne un altro (se non risponde, aspetta e riprova).

## Modello
Le guide complete da imitare sono `src/content/guide/giordania-itinerario.ts`, `giappone-itinerario.ts`, `peru-itinerario.ts`, `sri-lanka-2023.ts`, `thailandia.ts` (tipi in `src/content/guide/types.ts`). La pagina di stampa `src/app/guide/[slug]/stampa/page.tsx` è generica: non modificarla, né i tipi. Se ti serve un campo nuovo, segnalalo nel rapporto.

La guida deve dare PIÙ del sito: per ogni giorno indirizzi, orari, prezzi e contatti (telefono, sito, email) di operatori, tour, trasporti e luoghi; numeri d'emergenza, ambasciata o consolato d'Italia, ospedali, frasario nella lingua locale (per l'Italia: numeri utili, trasporti, ZTL e prenotazioni ufficiali al posto di ambasciata e frasario), checklist, QR verso il sito.

## Per ogni viaggio
1. Dati in `src/content/guide/<slug>.ts` (una costante `Guida`). Fonti: l'articolo `src/content/viaggi/*<slug>.md`, `src/content/viaggi-dati/<slug>.ts`, le schede `src/content/{paesi,destinazioni,esperienze}/<paese>.ts`.
2. Dati aggiunti **verificati**: con WebSearch finché funziona; quando il budget di ricerche finisce, con `curl` sui siti ufficiali di cui conosci l'indirizzo (Viaggiare Sicuri, ambasciate, ferrovie, monumenti, parchi, uffici del turismo). Fonte in un campo o commento, come nei modelli. Coordinate: `src/content/mappe/coordinate.ts`; distanze e tempi: OSRM.
3. **Mai inventare** telefoni, email, prezzi, orari, nomi di operatori: un dato non verificato non si scrive, oppure diventa «conviene controllare su <sito ufficiale>».
4. Le parti di Paese (ingresso, emergenze, ambasciata, frasario, prese) si possono riusare fra viaggi dello stesso Paese, copiandole: ogni guida sta in piedi da sola.
5. Registra la guida nel file del tuo lotto `src/content/guide/lotti/<lotto>.ts` (chiave = slug). Non toccare `index.ts` né gli altri lotti.
6. PDF: `node tools/guida-pdf.cjs <slug> "<Nome breve>"` (es. «Roma in 4 giorni»): finisce nella cartella «Make It Yours - Guide PDF» sulla SanDisk e in `public/guide-pdf/<slug>.pdf`.
7. Controlla il PDF: pagine (`pdfinfo` o `pdftoppm`), provino di almeno 4 pagine (`pdftoppm -r 40 -png` in una cartella temporanea), niente pagine vuote, testo tagliato o mappa illeggibile.

## Stile
Prima persona dove si racconta il viaggio di Rick, che ha viaggiato **con amici** («siamo arrivati»); consigli impersonali. Carica le skill `scrittura-italiana` e `humanizer`. Niente trattini lunghi a raffica, aggettivi da dépliant, aneddoti o emozioni inventati.

## Limiti
Un viaggio alla volta, PDF subito dopo. File temporanei in `/Volumes/SanDisk 1TB/GUIDE-TMP/` o nella cartella temporanea dello script. Niente commit, niente `npm install`. `npx tsc --noEmit -p .` (ignora PageProps/LayoutProps).

## Rapporto finale (breve)
Per ogni guida: slug, pagine, dati non trovati. Viaggi non fatti.
