# Placeholder e testi di contatto/legali in file di altri agenti

Ricerca del 6 novembre 2026 su `src/`, `public/` e sul sito pubblicato (https://makeityoursworld.vercel.app, 11 pagine istituzionali + una pagina viaggio, con Playwright). Pattern: «da inserire», «to be added», «por añadir», «example.com», «your@», `mailto:"`, `href="#"`, `mailto:`.

## Placeholder veri

Nessuno nei file di altri agenti. Tutti quelli trovati erano nei miei file e sono stati tolti:

| Dove (live) | Cosa c'era | Ora |
|---|---|---|
| /it/lavoriamo-insieme, /work-with-me, /es/trabajemos-juntos | «[email da inserire]» ×4 per lingua | spiegazione dei servizi + «I contatti saranno disponibili a breve.» |
| /it/privacy (e en/es) | «[indirizzo da inserire]», «[email da inserire]» | riquadro «Dati del titolare ancora mancanti» letto dalla config |
| /it/trasparenza (e en/es) | «[email da inserire]» | rimando a Lavoriamo insieme + frase «contatti a breve» |

## Falsi positivi (nessuna azione)

Testo inglese normale, non segnaposto:

- `src/content/i18n/en/paesi/florida.ts:20` («have to be added to the posted price»)
- `src/content/i18n/en/paesi/norvegia.ts:12` («to be added: flights…»)
- `src/content/i18n/en/esperienze/indonesia.ts:141` («transport … to be added»)
- `src/content/i18n/en/viaggi/05-giappone-itinerario.md:107` («10% has to be added»)

## Da sistemare in file di altri agenti

1. **`src/components/OrganizzaViaggio.tsx`** (riquadri «Organizza questo viaggio» e `PrenotaQui`): l'avviso dice sempre «Alcuni link sono affiliati: se prenoti, il sito riceve una piccola commissione» anche se oggi **nessun programma è attivo** (`affiliazioniAttive === false` in `src/lib/affiliazioni.ts`, tutti gli ID vuoti). Proposta: mostrare l'avviso solo con `affiliazioniAttive` (come fa già `attrezzatura/[slug]/page.tsx` con `AFFILIAZIONI.amazon[lingua]`), oppure un testo neutro tipo «Link a siti esterni. Come funzionano: trasparenza». La pagina Trasparenza ora dice lo stato reale per ciascun partner.
2. **`src/components/SelettoreLingua.tsx`**: scrive il cookie `lingua` (1 anno) ma nessun file lo legge (proxy compreso). È dichiarato nella cookie policy; se lo si toglie o se ne cambia nome/durata, aggiornare `VOCI` in `src/app/[lang]/cookie/page.tsx`.
3. **`src/components/attrezzatura/ChecklistValigia.tsx`**: salva le spunte in localStorage `miy-valigia:<lista>`. Già aggiunto alla cookie policy; se cambia la chiave, aggiornare `VOCI`.
4. Regola per tutti: ogni nuovo cookie / localStorage / sessionStorage / script o iframe esterno va aggiunto a `VOCI` della cookie policy e, se esterno, all'informativa privacy.
