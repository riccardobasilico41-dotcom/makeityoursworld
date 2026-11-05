# Secondo giro di verifica: solo cose sicure

Rick: «pubblichiamo solo cose sicure». Una mini guida va online solo quando **ogni** dato è
confermato da una fonte, oppure è stato tolto. Leggi prima `docs/mini-guide/VERIFICA.md` e il
resoconto del primo giro del tuo gruppo in `docs/mini-guide/verifica-<gruppo>.md`.

## Come lavorare
- Le ricerche web (WebSearch) sono poche e condivise con altri agenti: usale solo quando non sai
  dove cercare. Per il resto usa **WebFetch** sulle fonti dirette: sito ufficiale del luogo o
  dell'ente (parco, museo, ministero, comune), pagina di Wikipedia per date e misure storiche,
  avvisi di viaggio ufficiali (gov.uk, travel.state.gov) per sicurezza e truffe.
- Controlla **tutti** i luoghi del tuo gruppo, anche quelli già toccati nel primo giro, campo per
  campo: `testo` (fatti, numeri, date), `come`, `quando`, `tempo`, `costo`, `url`, `consiglio`;
  poi `programmi` (tappe che esistono e ordine sensato), `zone`, `sapori`, `attenzioni`.
- **Regola senza eccezioni:** se un dato preciso non trova conferma, toglilo o riformulalo in modo
  generico e vero («orari sul sito ufficiale»). Mai lasciare un numero, una data, un orario, un
  prezzo o una regola non confermati.
- Non toccare i ricordi di Rick (prima persona, `miaEsperienza`, `consigliati.ts`).
- Ogni modifica in it, en ed es.
- Alla fine `node --check` e `npx tsc --noEmit`. Niente git, niente server.

## Stato da consegnare
Scrivi `docs/mini-guide/stato-<gruppo>.md` con una riga per Paese:
`<slug-paese>: COMPLETO` se hai controllato ogni luogo e ogni dato rimasto ha una fonte,
altrimenti `<slug-paese>: INCOMPLETO — <cosa manca>`. Sii severo: COMPLETO solo se lo è davvero.
