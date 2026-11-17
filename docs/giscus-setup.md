# Commenti Giscus sotto i viaggi: come accenderli

In fondo a ogni pagina viaggio c'è la sezione «Domande e commenti» (EN «Questions and comments», ES «Preguntas y comentarios»). Usa [Giscus](https://giscus.app): i commenti sono discussioni di GitHub, chi commenta entra con il suo account GitHub. Finché le quattro variabili qui sotto non sono impostate, la sezione non compare.

Come funziona nel codice:

- configurazione in `src/lib/site-config.ts` (`giscus`, letto dalle variabili `NEXT_PUBLIC_GISCUS_*`, e `giscusAttivo`);
- componente `src/components/CommentiGiscus.tsx`: lo script di giscus.app si carica solo quando la sezione sta per entrare nello schermo;
- un solo thread per viaggio in tutte le lingue: il thread non è legato all'indirizzo ma a un termine fisso, `viaggi/<slug italiano>` (es. `viaggi/giappone-itinerario`), quindi IT, EN ed ES dello stesso viaggio condividono la stessa discussione. L'interfaccia di Giscus segue la lingua della pagina;
- tema: `public/giscus/tema.css` (panna, nero, rosso del sito). Giscus lo carica dal dominio pubblico, quindi si vede online; in locale resta il tema chiaro standard.

## Prima di tutto: quale repository

Giscus funziona solo con un repository **pubblico**. Il repository del sito (`riccardobasilico41-dotcom/makeityoursworld`) contiene tutto il codice, gli appunti e le note di redazione: **se è privato, e deve restarlo, crea un repository pubblico separato solo per i commenti**, per esempio `riccardobasilico41-dotcom/makeityoursworld-commenti`. È la scelta consigliata: dentro non c'è niente se non le discussioni.

## Passi

1. **Crea il repository dei commenti** su GitHub: New repository → nome `makeityoursworld-commenti` → **Public** → spunta «Add a README» → Create.
2. **Accendi le Discussions**: nel repository, Settings → General → sezione Features → spunta **Discussions**.
3. **Crea una categoria** per i commenti: tab Discussions → icona matita accanto a Categories → New category → nome «Commenti viaggi», formato **Announcement** (così solo Giscus e tu create le discussioni, i lettori rispondono) → Create.
4. **Installa l'app Giscus**: vai su <https://github.com/apps/giscus> → Install → scegli «Only select repositories» → seleziona `makeityoursworld-commenti` → Install.
5. **Prendi gli ID** su <https://giscus.app/it>:
   - nel campo Repository scrivi `riccardobasilico41-dotcom/makeityoursworld-commenti` (deve comparire la spunta verde: repository pubblico, app installata, Discussions attive);
   - «Mappatura pagina ↔ discussione»: va bene qualunque scelta, il sito usa comunque il termine fisso;
   - «Categoria»: scegli «Commenti viaggi»;
   - più in basso, nel blocco `<script>` generato, copia i valori di `data-repo`, `data-repo-id`, `data-category` e `data-category-id`.
6. **Imposta le variabili su Vercel**: progetto → Settings → Environment Variables, per Production (e Preview se vuoi vederli anche lì):

   | Nome | Valore (esempio) |
   |---|---|
   | `NEXT_PUBLIC_GISCUS_REPO` | `riccardobasilico41-dotcom/makeityoursworld-commenti` |
   | `NEXT_PUBLIC_GISCUS_REPO_ID` | `R_kgDO…` |
   | `NEXT_PUBLIC_GISCUS_CATEGORY` | `Commenti viaggi` |
   | `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | `DIC_kwDO…` |

7. **Ripubblica il sito** (Deployments → Redeploy): le variabili `NEXT_PUBLIC_` entrano nel codice al momento della build, quindi serve una build nuova.
8. **Controlla** una pagina viaggio online: in fondo c'è «Domande e commenti» con il riquadro di Giscus. Il primo commento crea la discussione `viaggi/<slug>` nel repository.

Per provarli in locale, metti le stesse quattro righe in `.env.local` e riavvia `npm run dev`.

## Da sapere

- I commenti sono pubblici e stanno su GitHub: la moderazione (nascondere, cancellare, bloccare utenti) si fa dalla tab Discussions del repository.
- Giscus carica uno script e un iframe da `giscus.app` e GitHub solo quando la sezione entra nello schermo. Vanno citati nella privacy e nella cookie policy (servizio di terze parti, account GitHub di chi commenta): da aggiornare prima di accendere le variabili.
- Il modulo «Fai una domanda» già presente sotto i viaggi è un'altra cosa e resta com'è.
- Per spegnere i commenti basta togliere una delle quattro variabili e ripubblicare.
