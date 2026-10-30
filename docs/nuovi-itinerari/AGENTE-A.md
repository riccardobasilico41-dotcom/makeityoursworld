# Agente A: nuovi itinerari 66-69 (registrazione in geo.ts)

Il Montenegro (70) non è stato scritto da questo agente (assegnato a un altro agente su indicazione del coordinatore).
Nessun file esistente è stato modificato: paesi/messico.ts e destinazioni/messico.ts sono intatti.
`npx tsc --noEmit -p .` non dà errori nei file nuovi. Titoli `### Giorno N — …` e `titoloGiorno` controllati via script: coincidono tutti.
Nessuna esperienza (src/content/esperienze) creata: le destinazioni hanno `esperienzeSlugs: []`.

## Import da aggiungere in src/lib/geo.ts

```ts
// Messico (paese già registrato): nuove destinazioni e due overlay
import { destinazioniMessicoCentroBaja } from '@/content/destinazioni/messico-centro-baja'
import { messicoDiaDeLosMuertosMeta } from '@/content/viaggi-dati/messico-dia-de-los-muertos'
import { messicoCdmxBajaCaliforniaMeta } from '@/content/viaggi-dati/messico-cdmx-baja-california'

// Brasile (paese nuovo)
import { brasile } from '@/content/paesi/brasile'
import { destinazioniBrasile } from '@/content/destinazioni/brasile'
import { brasileItinerarioMeta } from '@/content/viaggi-dati/brasile-itinerario'

// Croazia (paese nuovo)
import { croazia } from '@/content/paesi/croazia'
import { destinazioniCroazia } from '@/content/destinazioni/croazia'
import { croaziaItinerarioMeta } from '@/content/viaggi-dati/croazia-itinerario'
```

## Registri

- `PAESI`: aggiungere `brasile`, `croazia`
- `DESTINAZIONI`: aggiungere `...destinazioniMessicoCentroBaja`, `...destinazioniBrasile`, `...destinazioniCroazia`
- `ESPERIENZE`: niente da aggiungere
- `TRIP_META`: aggiungere `messicoDiaDeLosMuertosMeta`, `messicoCdmxBajaCaliforniaMeta`, `brasileItinerarioMeta`, `croaziaItinerarioMeta`

## File creati

| # | Articolo | Overlay (tripSlug) | Paese | Destinazioni |
|---|---|---|---|---|
| 66 | src/content/viaggi/66-messico-dia-de-los-muertos.md | viaggi-dati/messico-dia-de-los-muertos.ts (`messico-dia-de-los-muertos`) | messico (esistente) | destinazioni/messico-centro-baja.ts |
| 67 | src/content/viaggi/67-messico-cdmx-baja-california.md | viaggi-dati/messico-cdmx-baja-california.ts (`messico-cdmx-baja-california`) | messico (esistente) | destinazioni/messico-centro-baja.ts |
| 68 | src/content/viaggi/68-brasile-itinerario.md | viaggi-dati/brasile-itinerario.ts (`brasile-itinerario`) | paesi/brasile.ts (`brasile`, continente 'Sud America') | destinazioni/brasile.ts |
| 69 | src/content/viaggi/69-croazia-itinerario.md | viaggi-dati/croazia-itinerario.ts (`croazia-itinerario`) | paesi/croazia.ts (`croazia`, continente 'Europa') | destinazioni/croazia.ts |

## Slug delle destinazioni

- Messico (`destinazioniMessicoCentroBaja`, ordine 10-20): `citta-del-messico`, `puebla-cholula`, `oaxaca`, `valles-centrales-oaxaca`, `puerto-escondido`, `patzcuaro-janitzio`, `la-paz-baja` (non `la-paz`, già usato in bolivia.ts), `bahia-magdalena`, `loreto`, `todos-santos`, `los-cabos`
- Brasile: `rio-de-janeiro`, `costa-verde`, `foz-do-iguacu`, `salvador-de-bahia`, `chapada-diamantina`, `lencois-maranhenses`, `pantanal`, `amazzonia-manaus`
- Croazia: `zagabria`, `plitvice`, `zara-krka-sebenico`, `spalato`, `hvar`, `curzola`, `dubrovnik`

Prima di registrare conviene ricontrollare che nessun altro agente abbia creato gli stessi slug (`dubrovnik` in particolare, se il file del Montenegro lo usa).

## Note per l'integrazione

- Per Dove dormire e Dove mangiare gli articoli usano i titoli di sezione `## Dove abbiamo dormito` / `## Dove abbiamo mangiato`, perché il parser (src/lib/viaggi.ts) li riconosce e la UI li mostra come «Dove dormire» / «Dove mangiare». Il contenuto è diviso per fasce di prezzo, non è scritto come esperienza vissuta.
- Sezioni aggiuntive generiche: «Varianti…», «Estensione A/B» (Brasile), «Truffe e fastidi comuni», «Budget indicativo 2026».
- Nessun overlay ha il campo `immagine`: le foto si recuperano dopo. `imageAlt` è compilato quasi ovunque.
- Facoltativo: la scheda di paesi/messico.ts riguarda lo Yucatán (sicurezza, fuso, clima). Si potrebbe aggiornare con Oaxaca, la Baja California Sur (UTC-7) e il Michoacán. Non l'ho modificata per non toccare un file esistente con contenuti vissuti.
