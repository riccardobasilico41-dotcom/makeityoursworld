# Traduzione dei nuovi itinerari combo (en ed es)

Segui docs/i18n/ISTRUZIONI-TRADUZIONE.md (lingua indicata nel tuo compito). Da tradurre dall'ITALIANO:

1. `src/content/viaggi/81-giava-bali-gili.md`, `82-sumatra-mentawai.md`, `83-peru-due-settimane.md`
   → `src/content/i18n/<lingua>/viaggi/<stesso nome>` (giorni: en `### Day N — …`, es `### Día N — …`;
   titoli fissi «Cosa vedere…» → en `What to see…` / es `Qué ver…`, «Consigli pratici…» → en
   `Practical tips…` / es `Consejos prácticos…`; etichette dei metadati e altri `##` fissi restano in italiano).
2. `src/content/viaggi-dati/giava-bali-gili.ts`, `sumatra-mentawai.ts`, `peru-due-settimane.ts`
   → `src/content/i18n/<lingua>/viaggi-dati/<stesso nome>` (stessa struttura delle copie già presenti
   in quella cartella; `titoloGiorno` identico ai titoli dei giorni del tuo .md; `stile` resta in italiano).
3. In `src/content/i18n/<lingua>/destinazioni/indonesia.ts`: aggiungi la destinazione `mentawai`
   (tradotta da `src/content/destinazioni/indonesia.ts`, stessa posizione), aggiorna i `tripSlugs` di
   sumatra, giava, bali, lombok-gili come nell'originale, e traduci il nuovo `comeSpostarsi` di `sulawesi`
   (consiglio Wale Adventure). In `src/content/i18n/<lingua>/destinazioni/peru.ts` aggiorna i `tripSlugs`
   come nell'originale.
4. In `src/content/i18n/<lingua>/viaggi/48-indonesia-itinerario.md` aggiungi, nello stesso punto
   dell'originale (Giorno 33), il paragrafo su Wale Adventure.
5. In `src/content/i18n/<lingua>/viaggi-editorial.ts` aggiungi le tre voci nuove (tradotte da
   `src/content/viaggi-editorial.ts`): en con le parole cercate negli USA («Indonesia itinerary 2 weeks»,
   «Peru itinerary 2 weeks», «Sumatra and Mentawai»), es come cercherebbe uno spagnolo; titolo ≤ 60,
   descrizione 70-155. In `src/content/i18n/<lingua>/viaggi-copertine.ts` le due voci nuove (solo `imageAlt`).
6. Scrivi `src/content/i18n/<lingua>/slug/g29.json`: `{ "viaggi": {"giava-bali-gili": "...",
   "sumatra-mentawai": "...", "peru-due-settimane": "..."}, "destinazioni": {"indonesia/mentawai": "mentawai"} }`
   con slug a-z 0-9 e trattini.
7. `node --check` su ogni .ts. Mai fatti nuovi, mai togliere avvertenze. Niente git.
