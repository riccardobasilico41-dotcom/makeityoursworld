# Testi di contenuto in italiano nelle versioni EN/ES (6 novembre 2026)

Trovati con la scansione del sito live (tutte le 1738 pagine EN/ES della sitemap, `tools/test/i18n-italiano.mjs` e una
scansione di parole italiane) e con il confronto dei titoli `##`/`###` tra `src/content/viaggi/*.md` e le traduzioni.
Sono **testi di contenuto**: non li ho toccati, li corregge l'agente dei contenuti. Le etichette dei dati (stili, tag,
tipologie) invece le traduce il dizionario `src/lib/i18n/etichette-dati.ts`: vedi `docs/ux/report-i18n.md`.

## Titoli di sezione non tradotti (visibili in pagina)

| Lingua | File | Campo | Testo italiano | Pagina live |
|---|---|---|---|---|
| es | `src/content/i18n/es/viaggi/52-svizzera-alpi-van.md` | titolo `##` (riga 102) | Dove dormire | /es/viajes/suiza-alpes-furgoneta |
| es | `src/content/i18n/es/viaggi/52-svizzera-alpi-van.md` | titolo `##` (riga 105) | Dove mangiare | /es/viajes/suiza-alpes-furgoneta |
| es | `src/content/i18n/es/viaggi/71-egitto-mare-luxor-cairo.md` | titolo `##` (riga 173) | Dove dormire | /es/viajes/egipto-mar-luxor-el-cairo |
| es | `src/content/i18n/es/viaggi/71-egitto-mare-luxor-cairo.md` | titolo `##` (riga 179) | Dove mangiare | /es/viajes/egipto-mar-luxor-el-cairo |
| es | `src/content/i18n/es/viaggi/72-egitto-completo.md` | titolo `##` (riga 276) | Dove dormire | /es/viajes/egipto-completo |
| es | `src/content/i18n/es/viaggi/72-egitto-completo.md` | titolo `##` (riga 287) | Dove mangiare | /es/viajes/egipto-completo |
| es | `src/content/i18n/es/viaggi/30-milano-e-i-laghi.md` | titolo `##` (riga 59) | La versione da un giorno | /es/viajes/milan-y-los-lagos |
| es | `src/content/i18n/es/viaggi/21-stopover-golfo.md` | titolo `##` (riga 100) | Estensioni possibili | /es/viajes/escala-golfo |
| en | `src/content/i18n/en/viaggi/79-maldive-guida.md` | titolo `##` (righe 182, 190) | Dove dormire / Dove mangiare | /trips/maldives-guide |
| en | `src/content/i18n/en/viaggi/83-peru-due-settimane.md` | titolo `##` (riga 90) | Se hai 3-4 giorni in più | /trips/peru-2-weeks-itinerary |

Traduzioni proposte: «Dónde dormir» / «Dónde comer» / «La versión de un día» / «Extensiones posibles»;
«Where to sleep» / «Where to eat» / «If you have 3–4 more days».

Non vanno tradotti (titoli di servizio letti dal codice, mai mostrati): `Apertura personale`, `Scheda pratica`,
`Itinerario giorno per giorno`, `Chiusura personale`, `Tag`, `Dove abbiamo dormito`, `Dove abbiamo mangiato`.
I `###` `Bali`, `Sumatra`, `Sulawesi`, `Raja Ampat` di `86-indonesia-isola-per-isola.md` sono nomi propri: vanno bene.

## Etichette italiane dentro i file tradotti (non visibili dopo la correzione, da riallineare)

Le etichette nei dati fanno da chiave e restano in italiano per scelta (le traduce `etichetta()` quando si mostrano).
Però alcuni file tradotti le hanno in italiano e altri già in inglese, e non sono coerenti:

| File | Campo | Valori |
|---|---|---|
| `src/content/i18n/es/paesi/cina.ts` | `stileViaggio` | 'treni ad alta velocità', 'grandi classici', 'paesaggi', 'megalopoli' (italiano) |
| `src/content/i18n/es/viaggi-dati/egitto-completo.ts` | `stile` | 'archeologia', 'deserto', 'crociera sul nilo', 'immersioni', 'avventura' (italiano) |
| `src/content/i18n/en/paesi/*.ts` | `stileViaggio` | già in inglese (sea, nature, great classics…) |

Suggerimento: nei file tradotti lasciare le chiavi italiane (come nell'originale) oppure tradurre tutto, ma in modo
uniforme. Oggi le pagine si vedono giuste in entrambi i casi, perché `etichetta()` lascia stare un valore già tradotto.

## Nomi propri italiani (non sono errori)

Piazza della Signoria, Sentiero degli Dei, Valle delle Ferriere, Scoglio delle Sirene, Pio Monte della Misericordia,
Santa Maria della Salute, «Dove siamo nel mondo» (servizio della Farnesina) ecc.: compaiono nelle pagine EN/ES ma sono
nomi di luoghi o servizi e restano così.
