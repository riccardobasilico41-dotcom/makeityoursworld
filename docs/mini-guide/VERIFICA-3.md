# Terzo giro: pulizia finale per pubblicare

Rick vuole le mini guide online in tutti i Paesi, ma sempre «solo cose sicure». In questo giro
non si cercano nuove fonti: si **tolgono o si rendono generici** tutti i dettagli che il giro
precedente non ha confermato, così la scheda resta vera e pubblicabile.

Leggi `docs/mini-guide/stato-<gruppo>.md` (elenco di cosa manca per Paese) e
`docs/mini-guide/verifica-<gruppo>.md`. File da toccare: `src/content/destinazioni/<paese>.ts` e le
copie `src/content/i18n/en|es/destinazioni/<paese>.ts`, solo i Paesi che ti sono assegnati.

## Cosa fare, Paese per Paese
1. Ogni voce indicata come «non confermato» nello stato: togli il dettaglio o riscrivilo in modo
   generico e vero. Esempi: «bus 28 ogni 30 minuti» → «bus urbani dal centro»; «6-7 ore» → togli;
   «la più antica caffetteria» → «caffetteria storica»; prezzo → «prezzi sul sito ufficiale».
   Se un luogo intero resta senza nulla di affidabile, toglilo.
2. Passa anche campi non elencati: in `luoghi` (`come`, `quando`, `tempo`, `costo`), `programmi`,
   `zone`, `sapori`, `attenzioni`. Ogni numero di linea, orario, durata, prezzo, misura, data o
   superlativo («il più grande», «il primo») che non è già confermato nel resoconto di verifica
   va tolto o reso generico. I tempi indicativi di visita («mezza giornata», «2-3 ore») possono
   restare solo come stime ragionevoli, senza precisione finta; quelli a piedi o di guida precisi
   vanno tolti.
3. `zone` e `sapori`: tieni solo fatti noti e generici (quartiere centrale, vivace, adatto a chi…;
   piatto tipico e cosa contiene). Niente nomi di locali, prezzi o indirizzi non verificati.
4. Nel dubbio, togli. Meglio una scheda più corta che un dato sbagliato.

## Regole
- Non toccare i ricordi di Rick (prima persona, `miaEsperienza`), né `consigliati.ts`.
- Stesse modifiche in it, en ed es. Non cambiare nulla fuori dalle mini guide.
- Nessuna ricerca web (WebSearch). WebFetch solo se serve a capire un dubbio, con parsimonia.
- Alla fine `node --check` sui file toccati e `npx tsc --noEmit` pulito. Niente git, niente server.

## Consegna
Scrivi `docs/mini-guide/stato3-<nome-del-tuo-incarico>.md` con una riga per Paese:
`<slug>: COMPLETO` se ogni dato rimasto è confermato o generico e vero; altrimenti
`<slug>: INCOMPLETO — <cosa resta>`. Aggiungi sotto un breve elenco di cosa hai tolto per Paese.
