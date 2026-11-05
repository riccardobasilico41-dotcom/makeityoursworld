# Passaggio di verifica delle mini guide

Le mini guide (campi `luoghi`, `programmi`, `zone`, `sapori`, `attenzioni` in
`src/content/destinazioni/<paese>.ts` e copie `src/content/i18n/en|es/destinazioni/<paese>.ts`)
sono state scritte in parte a memoria. Questo passaggio le rende affidabili.

## Strumenti
Usa davvero **WebSearch** e **WebFetch** (o l'agente web-fetch) per ogni dato da controllare.
Se non hai accesso alla ricerca web, fermati subito e scrivilo nel resoconto: non continuare a memoria.

## Cosa controllare, luogo per luogo
1. **Giorni di chiusura e orari** (`quando`): verifica sul sito ufficiale o su una fonte seria recente
   (2025-2026). Se è giusto, lascia. Se è sbagliato, correggi. Se non si trova conferma, togli il
   dettaglio preciso e scrivi «orari e giorni di chiusura sul sito ufficiale».
2. **Prezzi** (`costo`): aggiungi i biglietti per stranieri che trovi su fonte ufficiale, con l'anno
   («18 €, 2026»). Correggi quelli superati. Togli quelli non verificabili.
3. **Fatti precisi** nel `testo` (date storiche, altezze, misure, numeri, «primo sito UNESCO», ecc.):
   verificali; se non trovi conferma, riformula senza il numero.
4. **Trasporti e tempi** (`come`, `tempo`): linee, durate, prenotazioni obbligatorie (es. Yosemite,
   Città Proibita, Alhambra): verifica le regole attuali.
5. **`url`**: deve essere la pagina ufficiale del luogo o dell'ente. Aprilo. Se non funziona o non
   è ufficiale, toglilo o sostituiscilo con quello giusto.
6. **Attenzioni e truffe**: devono essere reali e attuali (avvisi ufficiali, forum recenti).

## Arricchire le schede corte
Dove un luogo ha `testo` o `consiglio` di una sola frase generica, portalo a 2-4 frasi concrete
(cosa si vede, perché merita, il dettaglio che fa la differenza). Nelle destinazioni grandi con meno
di 5 luoghi, aggiungi i luoghi importanti che mancano (sempre verificati).

## Regole
- Non toccare i ricordi di Rick (prima persona già presente, `miaEsperienza`, `consigliati.ts`).
- Ogni correzione va fatta in italiano **e** nelle copie en ed es (stessi dati, testo tradotto).
- Italiano naturale, frasi brevi, niente tic da AI.
- Alla fine `node --check` sui file e `npx tsc --noEmit` pulito. Niente git, niente server.
- Scrivi `docs/mini-guide/verifica-<gruppo>.md`: per Paese, cosa hai corretto, cosa hai tolto,
  cosa hai aggiunto, e le fonti principali (URL).
