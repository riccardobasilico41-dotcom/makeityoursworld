# Agente C · India (3 itinerari) e Maldive

Tutti i file sono nuovi; nessun file esistente è stato modificato. `npx tsc --noEmit -p .` pulito.

## File creati
| # | Viaggio (slug) | Markdown | Overlay |
|---|---|---|---|
| 76 | india-rajasthan-10-giorni | src/content/viaggi/76-india-rajasthan-10-giorni.md | src/content/viaggi-dati/india-rajasthan-10-giorni.ts |
| 77 | india-rajasthan-varanasi | src/content/viaggi/77-india-rajasthan-varanasi.md | src/content/viaggi-dati/india-rajasthan-varanasi.ts |
| 78 | india-sud-taj-mahal | src/content/viaggi/78-india-sud-taj-mahal.md | src/content/viaggi-dati/india-sud-taj-mahal.ts |
| 79 | maldive-guida | src/content/viaggi/79-maldive-guida.md | src/content/viaggi-dati/maldive-guida.ts |

Paesi: `src/content/paesi/india.ts`, `src/content/paesi/maldive.ts`
Destinazioni: `src/content/destinazioni/india.ts` (15), `src/content/destinazioni/maldive.ts` (6)
Esperienze: nessun file creato (geo.ts non le richiede per Paese).

## Da aggiungere in src/lib/geo.ts

### Import
```ts
import { india } from '@/content/paesi/india'
import { destinazioniIndia } from '@/content/destinazioni/india'
import { maldive } from '@/content/paesi/maldive'
import { destinazioniMaldive } from '@/content/destinazioni/maldive'
import { indiaRajasthan10GiorniMeta } from '@/content/viaggi-dati/india-rajasthan-10-giorni'
import { indiaRajasthanVaranasiMeta } from '@/content/viaggi-dati/india-rajasthan-varanasi'
import { indiaSudTajMahalMeta } from '@/content/viaggi-dati/india-sud-taj-mahal'
import { maldiveGuidaMeta } from '@/content/viaggi-dati/maldive-guida'
```

### Registri
- `PAESI`: aggiungere `india, maldive`
- `DESTINAZIONI`: aggiungere `...destinazioniIndia, ...destinazioniMaldive`
- `ESPERIENZE`: nulla
- `TRIP_META`: aggiungere `indiaRajasthan10GiorniMeta, indiaRajasthanVaranasiMeta, indiaSudTajMahalMeta, maldiveGuidaMeta`

## Slug
- Paese `india` (continente `Asia`, tripPrincipaleSlug `india-rajasthan-10-giorni`). Destinazioni: `delhi`, `agra`, `jaipur`, `pushkar`, `jodhpur`, `jaisalmer`, `udaipur`, `varanasi`, `chennai`, `mamallapuram`, `madurai`, `munnar`, `backwaters-alleppey`, `fort-kochi`, `hampi`.
- Paese `maldive` (continente `Asia`, tripPrincipaleSlug `maldive-guida`). Destinazioni: `male-hulhumale`, `male-sud-vaavu`, `rasdhoo`, `ari-sud`, `baa-hanifaru`, `fuvahmulah`.
- Nessun Paese ha `heroImage` e nessun giorno ha `immagine`: le foto vanno recuperate dopo (copertine, hero e foto dei giorni non toccati).

## Note
- Tutti e quattro i viaggi sono guide non vissute: stato 🟡, nessuna prima persona, «Ricordi personali da aggiungere dal diario» nelle Note di redazione.
- Maldive: `giorni[]` segue l'itinerario d'esempio `### Giorno 1-10`; le parti modulari (stagioni, atolli, liveaboard) sono sezioni `##`.
- Puducherry, Thanjavur e Ranakpur sono tappe in `tappeMappa` senza `destinazioneSlug` (nessuna scheda destinazione).

---

# Agente C · Montenegro (aggiunta)

## File creati
| # | Viaggio (slug) | Markdown | Overlay |
|---|---|---|---|
| 70 | montenegro-itinerario | src/content/viaggi/70-montenegro-itinerario.md | src/content/viaggi-dati/montenegro-itinerario.ts |

Paese: `src/content/paesi/montenegro.ts` · Destinazioni: `src/content/destinazioni/montenegro.ts` (6) · Esperienze: nessuna.

## Da aggiungere in src/lib/geo.ts
```ts
import { montenegro } from '@/content/paesi/montenegro'
import { destinazioniMontenegro } from '@/content/destinazioni/montenegro'
import { montenegroItinerarioMeta } from '@/content/viaggi-dati/montenegro-itinerario'
```
- `PAESI`: aggiungere `montenegro`
- `DESTINAZIONI`: aggiungere `...destinazioniMontenegro`
- `TRIP_META`: aggiungere `montenegroItinerarioMeta`

## Slug
- Paese `montenegro` (continente `Europa`, tripPrincipaleSlug `montenegro-itinerario`).
- Destinazioni: `bocche-di-cattaro`, `lovcen-cetinje`, `budva-riviera`, `lago-di-scutari`, `ostrog`, `durmitor-tara`. Podgorica è una tappa in `tappeMappa` senza scheda.
- Nessuna immagine (heroImage e foto dei giorni da recuperare). Stato 🟡, nessuna prima persona.
