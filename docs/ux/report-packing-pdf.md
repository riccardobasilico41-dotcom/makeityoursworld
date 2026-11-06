# Report packing list e PDF — 6 novembre 2026

Verifiche eseguite: `npx tsc --noEmit`, `npx eslint` sui file toccati, `node tools/controlla-guide-pdf.mjs`, `pdfinfo`/`pdftotext` sui 25 PDF, curl sui link Amazon. Checkbox, stampa e lettori di schermo da provare nel browser.

## Packing list (`/attrezzatura/<slug>`)
- Prima: voci solo link, nessuno stato; avviso «Contiene link affiliati Amazon» falso (tag Amazon vuoti in `src/lib/affiliazioni.ts`).
- Ora (`src/components/attrezzatura/ChecklistValigia.tsx`): checkbox native con label, «N di M pronti» in `aria-live`, «Azzera», «Stampa», salvataggio `localStorage` `miy-valigia:<slug>` (try/catch, sincronizzazione tra schede, id dal nome italiano), CSS di stampa con sola lista.
- Livelli (`livello` in `src/content/attrezzatura.ts`) solo dove il testo lo dice: essenziale (sacco lenzuolo TMB, kit ferrata, imbrago, catene, ARTVA/pala/sonda, maschera antigas Ijen), noleggiabile (casco da sci, maschera e boccaglio), opzionale (boa da snorkeling); il resto «consigliato».
- Avviso affiliati condizionato al tag della lingua; senza tag: «ricerca generica senza affiliazione», rel `nofollow noopener noreferrer`; pulsante «Cerca su Amazon».
- Link Amazon: 367 URL di ricerca (non pagine prodotto); 309 con risultati, 58 amazon.it non verificabili per blocco anti-bot; nessun link morto accertato.

## PDF delle guide
- 25 PDF in `public/guide-pdf` (63 MB) = 25 voci in `src/content/guide-pdf.json`, dimensioni identiche; tutti in italiano, A5, 20–60 pagine, nessuno vuoto.
- Bug copertina: contava le schede invece dei giorni. Disallineati: california-road-trip (9 vs 19 g), canada-itinerario (9 vs 16), peru-itinerario (20 vs 31). Codice corretto in `src/app/[lang]/guide/[slug]/stampa/page.tsx`; i 3 PDF vanno rigenerati (serve `next dev`, poi `node tools/guida-pdf.cjs <slug> "<Nome>"`).
- `ScaricaGuida.tsx`: dichiara lingua e dimensione reali («PDF in Italian · 2.7 MB»), `hrefLang="it"`, `type="application/pdf"`; compare solo se il PDF esiste.
- Nuovo `tools/controlla-guide-pdf.mjs`: elenco ↔ file, dimensioni, orfani, file troppo piccoli.
- Guide senza PDF (pulsante nascosto): costiera-e-isole, dolomiti-roadtrip, eolie-in-vela, firenze-3-giorni, grandi-citta-italia, milano-e-i-laghi, napoli-3-giorni, sicilia-completa, sicilia-itinerario, venezia-3-giorni, normandia-bretagna, bordeaux-e-vigneti, malesia-singapore, indonesia-itinerario, messico-beach-life, messico-dia-de-los-muertos, egitto-mare-luxor-cairo, egitto-completo.
