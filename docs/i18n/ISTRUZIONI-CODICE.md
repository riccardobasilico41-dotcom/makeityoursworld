# Interfaccia in tre lingue: come adattare un file

Progetto Next.js 16 (App Router), sito Make It Yours World. Prima di scrivere codice leggi
`AGENTS.md`: questa versione di Next ha API diverse da quelle che conosci.

## Come funziona (già fatto, non toccare)
- Le pagine sono in `src/app/[lang]/…` (`lang` = `en` | `it` | `es`). L'inglese è la lingua principale.
- `src/proxy.ts` porta gli indirizzi pubblici (`/trips/japan-itinerary`, `/it/viaggi/…`) sulle rotte interne.
- **Nel codice ogni link interno si scrive in forma canonica**, cioè il percorso italiano di sempre senza prefisso:
  `/viaggi/giappone-itinerario`, `/destinazioni/giappone/kyoto`. La traduzione dell'indirizzo la fanno:
  - `import Link from '@/components/ui/Link'`: sostituto di `next/link`, traduce l'`href` da solo;
  - `localizza(percorso, lingua)` da `@/lib/i18n/percorsi`: per tutto ciò che non è un `<Link>` (`<a href>`,
    `router.push`, URL in JSON-LD, `fetch` di `/cerca.json` e `/mappa-mondo.json`).
- Lingua corrente:
  - **Server Component** (file senza `'use client'`): `const lingua = await linguaCorrente()` da `@/lib/i18n/server`
    (il componente diventa `async` se non lo è). Funziona anche dentro `generateMetadata` e `generateStaticParams`.
  - **Client Component**: `const lingua = useLingua()` da `@/lib/i18n/LinguaProvider`.
  - **Route Handler e `opengraph-image`** (lì `linguaCorrente` NON funziona): leggi `lang` dai `params`
    (`const { lang } = await params`), poi `isLingua(lang) ? lang : 'en'` da `@/lib/i18n/config`.
- Dati: tutte le funzioni di `@/lib/geo`, `@/lib/viaggi` (`getAllViaggi`, `getViaggioBySlug`) e `@/lib/meraviglie`
  vogliono la lingua come **ultimo argomento obbligatorio**. Per testi SEO, titoli editoriali, copertine e liste
  valigia usa `@/lib/i18n/contenuti` (`editoriale`, `seoPaese`, `seoMeraviglia`, `copertina`, `copertine`,
  `listeValigia`, `listaPerViaggio`, `getListaAttrezzatura`) al posto degli import diretti da `@/content/…`.
- `pageMetadata` (`@/lib/seo`) vuole `lingua`: canonical, hreflang e og:locale li calcola lui dal `path` canonico.
- Etichette che nei dati restano in italiano perché sono chiavi: continenti (`Europa`, `Nord America`…), `tipologia`,
  `stile`, tag, `categorie` dei viaggi (es. `categorie[1]` = nome del Paese). A schermo passano da
  `etichetta(valore, lingua)` / `etichette(lista, lingua)` di `@/lib/i18n/etichette`.
  `GIUDIZIO_LABEL` → `GIUDIZIO[lingua]`, intensità dei giorni → `INTENSITA[lingua]` (stesso file).
- Date e numeri: `toLocaleDateString('it-IT', …)` → `toLocaleDateString(LOCALE[lingua].html, …)` (`@/lib/i18n/config`).

## Cosa fare in ogni file del tuo gruppo
1. `import Link from 'next/link'` → `import Link from '@/components/ui/Link'` (stesso uso, nessun'altra modifica).
   I link interni scritti come `<a href="/…">` → `<Link>` oppure `href={localizza('/…', lingua)}`.
   Link esterni, ancore `#…`, file in `/images`, `/videos`, `/guide-pdf` restano come sono.
2. **Testi dell'interfaccia** (titoli, etichette, bottoni, aria-label, alt fissi, placeholder, messaggi, testi SEO
   scritti nel codice): un dizionario locale in cima al file, nelle tre lingue:
   ```ts
   const T = {
     it: { salva: 'Salva', salvato: 'Salvato' },
     en: { salva: 'Save', salvato: 'Saved' },
     es: { salva: 'Guardar', salvato: 'Guardado' },
   } satisfies Record<Lingua, Record<string, string>>
   // nel componente: const t = T[lingua]
   ```
   Testi con valori dentro: funzioni (`giorni: (n: number) => \`${n} days\``). L'italiano resta **identico** a oggi.
   Inglese americano naturale da blog di viaggio (Rick parla in prima persona), spagnolo di Spagna. Niente promesse
   o superlativi in più, niente fatti nuovi.
3. Passa la lingua a ogni funzione di dati e ai componenti figli solo se servono a loro (i figli server la leggono da soli).
4. JSON-LD e URL assoluti: `${siteConfig.url}${localizza(percorso, lingua)}`, `inLanguage: LOCALE[lingua].html`.
5. Nelle pagine con `generateStaticParams` di **destinazioni ed esperienze** (`app/[lang]/destinazioni/[paese]/[slug]`,
   `app/[lang]/esperienze/[paese]/[slug]`): se `lingua !== 'en'` ritorna `[]` (quelle pagine si generano alla prima visita),
   per non far durare la build di Vercel oltre il limite. Le altre pagine restano generate per ogni lingua.
6. Non cambiare grafica, classi, struttura o comportamento. Non rinominare esportazioni. Non toccare file fuori dal
   tuo gruppo: se un file del tuo gruppo ha bisogno di una modifica in un altro, scrivilo nel resoconto.
7. Controllo finale, **una volta sola alla fine** (ci mette qualche minuto e girano altri agenti):
   `npx tsc --noEmit 2>&1 | grep -F -f <(printf '%s\n' <i tuoi file>)` e correggi gli errori nei tuoi file.
   Gli errori negli altri file non sono tuoi. Niente `next build`, niente dev server, niente git.

## Resoconto
In poche righe: file adattati, eventuali dipendenze da altri file, dubbi.
