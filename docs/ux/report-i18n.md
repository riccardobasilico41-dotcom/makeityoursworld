# Report multilingua — 6 novembre 2026

## 1. Selettore lingua (/it/en, /es/en)
Riprodotto sul live: dalle pagine EN l'HTML conteneva link come `/it/en`, `/es/en`, `/it/en/viaggi/…` (404) e `/en/viaggi` (che finiva in italiano). Pagine IT ed ES corrette.
Causa: il proxy riscrive su `/[lang]/<canonico>`; sul server `usePathname()` dà la rotta interna `/en/…`; `canonico()` toglieva solo it/es, quindi `localizza()` aggiungeva un secondo prefisso. Il clic normale dopo l'idratazione funzionava, ma l'`href` restava sbagliato (nuova scheda, copia link, crawler, senza JS).
Correzione: `src/lib/i18n/percorsi.ts` (canonico toglie anche `/en` e riconosce la rotta interna); `src/proxy.ts` (308 da `/en/…` alla pagina inglese e dai prefissi doppi); `SelettoreLingua.tsx` (query e ancora sempre, fallback alla home sulla 404, lista accessibile con nomi delle lingue, aria-current, hreflang, focus); `src/lib/i18n/NonTrovata.tsx` + `not-found.tsx`.

## 2. Stringhe italiane in EN/ES
Riprodotto su 131 di 1738 pagine (Cina, Giappone, Egitto, Indonesia e ~50 etichette). Cause: `CountryHero.tsx` e la riga «Stile» della pagina Paese non traducevano `stile`; dizionario `etichette-dati.ts` con ricerca sensibile alle maiuscole e 31 voci mancanti. Correzione: uso di `etichette(…, lingua)`, indice senza maiuscole, 33 voci nuove. Testi di contenuto rimasti → `docs/ux/i18n-contenuti-da-tradurre.md`.
Fuori perimetro: `guide/[slug]/stampa` usa `toLocaleString('it-IT')`; la pagina viaggio mostrava `new Date()` come data di aggiornamento; le 404 arrivano dal server senza `lang` né testo (`__next_error__`).

## 3. Test (tools/test/, BASE di default http://localhost:3100, `--base=URL`)
- `i18n-percorsi.mjs` (senza server), `i18n-sitemap-200.mjs`, `i18n-selettore.mjs`, `i18n-selettore-click.mjs` (Playwright), `i18n-italiano.mjs`.

Risultati PRIMA (live, 6/11):
| Test | Risultato |
|---|---|
| i18n-sitemap-200 (2607 URL) | 2607/2607 ok |
| i18n-selettore (31 pagine × 3 lingue + 404) | 186/291, 105 errori (tutti dalle pagine EN) |
| i18n-selettore-click (21 clic + tastiera) | 10/22, 12 errori |
| i18n-percorsi (869 × 3) | col codice nuovo 5214/5214 ok |
| i18n-italiano (1738 pagine EN/ES) | 1607/1738 ok, 131 con errori |

Risultati DOPO: da eseguire sulla build locale (vedi AUDIT_CORRETTIVO_2026-11-06.md).
