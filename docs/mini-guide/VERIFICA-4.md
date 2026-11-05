# Quarto giro: recuperare i dati tolti, solo con fonte

Le mini guide sono online in tutti i Paesi. Nei giri 2 e 3 sono stati tolti o resi generici molti
dettagli utili (linee di bus e metro, tempi, prezzi, orari, misure, luoghi interi) perché mancava
una fonte. Rick vuole recuperarli **con informazioni attendibili**.

## Da dove partire
Per vedere cosa è stato tolto nel tuo Paese:

    git diff 1dfa0fa^ HEAD -- src/content/destinazioni/<paese>.ts

(righe con `-` = testo di prima). Guarda anche `docs/mini-guide/stato-<gruppo>.md`,
`stato3-*.md` e `verifica-<gruppo>.md`, dove sono elencati i dati tolti.

## Come lavorare
- Per ogni dato tolto che serve davvero al viaggiatore (come arrivare, orari, giorni di chiusura,
  prezzi dei biglietti, prenotazioni, durate di visita, luoghi interi tolti), cerca una fonte
  attendibile: sito ufficiale del luogo, dell'ente del turismo, del trasporto pubblico
  (es. sito dell'azienda di bus o metro), Wikipedia per date e misure, gov.uk / travel.state.gov
  per sicurezza.
- Usa soprattutto **WebFetch** sulle pagine dirette. Le ricerche WebSearch sono poche e condivise
  con altri agenti: al massimo una decina in tutto il tuo incarico.
- Se la fonte conferma, rimetti il dato (corretto se la fonte dice altro) in it, en ed es. Prezzi
  con l'anno («18 €, 2026»).
- Se la fonte non lo conferma o non si trova, lascia com'è adesso. Nessun dato senza fonte.
- Puoi anche migliorare un dato generico con uno preciso se lo trovi sul sito ufficiale.
- Non toccare i ricordi di Rick (prima persona, `miaEsperienza`), né `consigliati.ts`.
- Solo campi delle mini guide: `luoghi`, `programmi`, `zone`, `sapori`, `attenzioni`.
- Alla fine `npx tsc --noEmit` pulito. Niente git, niente server. Lavora solo sui tuoi Paesi
  (altri agenti lavorano in parallelo sugli altri file). Usa una tua sottocartella dello scratchpad.

## Consegna
Scrivi `docs/mini-guide/recupero-<nome-incarico>.md`: per Paese, cosa hai rimesso, con l'URL della
fonte accanto a ogni dato, e cosa non è stato possibile confermare.
