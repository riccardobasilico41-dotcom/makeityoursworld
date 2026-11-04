# Schede destinazione come mini guide

Richiesta di Rick: le schede destinazione devono essere «letteralmente delle mini guide», molto
più complete su cosa vedere, come, quando e quanto costa. Prova sull'India, poi tutti i Paesi.

## Campi nuovi (facoltativi, in `src/lib/types.ts`, tipo `Destinazione` e `LuogoGuida`)
- `luoghi`: 6-12 luoghi per destinazione grande, 3-6 per una piccola. Ognuno:
  - `nome`
  - `testo`: cos'è e perché merita, 2-4 frasi concrete (niente aggettivi vuoti)
  - `come`: come ci si arriva da dove si dorme e come si visita (ingresso, percorso interno, guida sì/no, audioguida)
  - `quando`: ora migliore, giorni di chiusura (es. il Taj Mahal è chiuso il venerdì), stagione
  - `tempo`: quanto serve davvero
  - `costo`: biglietto per stranieri con l'anno del dato («1.100 INR per stranieri, 2026»); se non verificato, ometti
  - `url`: solo il sito ufficiale (ASI, governo, museo), mai rivenditori
  - `consiglio`: uno, pratico, da chi ci è stato o da fonte seria
- `programmi`: 2-3 schede «1 giorno», «2 giorni», «3 giorni» (quelle che hanno senso), tappe in ordine sensato.
- `zone`: 2-4 zone dove dormire: `nome`, `perChi` (breve), `testo` (pro e contro, rumore, distanze).
- `sapori`: 4-6 piatti o specialità locali: `nome` e `testo` (cos'è, dove si mangia).
- `attenzioni`: 3-6 truffe e attenzioni reali e attuali (fonti: avvisi ufficiali, forum recenti).

Quando c'è `luoghi`, il vecchio `cosaVedere` non si vede più: tienilo comunque (serve ai riassunti).

## Regole
- Fonti verificate e recenti (2024-2026): siti ufficiali per biglietti e orari, avvisi di viaggio,
  guide serie. Niente numeri inventati: se un prezzo non si trova, il campo resta vuoto.
- La voce di Rick (prima persona) solo dove ci è stato davvero e solo con i suoi ricordi già scritti
  nel sito (`miaEsperienza`, viaggi, `consigliati.ts`). Non inventare ricordi.
- Italiano naturale, frasi brevi, niente tic da AI (niente «non è X ma Y», triadi, trattini lunghi).
- Traduci tutto in `src/content/i18n/en/destinazioni/<paese>.ts` ed `es` (stessa struttura), poi
  `node --check` e `npx tsc --noEmit`.
