# Agente B — itinerari 71-75: cosa registrare in src/lib/geo.ts

Tutti i file sono guide non vissute (Stato bozza 🟡, ricordi personali da aggiungere dal diario).
Nessuna immagine: i campi `immagine` sono omessi in overlay e destinazioni; `heroImage` omesso nei Paesi.
Nessun file in `src/content/esperienze/` (le destinazioni hanno `esperienzeSlugs: []`).
`npx tsc --noEmit -p .` passa.

## Import da aggiungere

```ts
// Egitto (71, 72)
import { egitto } from '@/content/paesi/egitto'
import { destinazioniEgitto } from '@/content/destinazioni/egitto'
import { egittoMareLuxorCairoMeta } from '@/content/viaggi-dati/egitto-mare-luxor-cairo'
import { egittoCompletoMeta } from '@/content/viaggi-dati/egitto-completo'
// Turchia (73)
import { turchia } from '@/content/paesi/turchia'
import { destinazioniTurchia } from '@/content/destinazioni/turchia'
import { turchiaItinerarioMeta } from '@/content/viaggi-dati/turchia-itinerario'
// Filippine (74)
import { filippine } from '@/content/paesi/filippine'
import { destinazioniFilippine } from '@/content/destinazioni/filippine'
import { filippineItinerarioMeta } from '@/content/viaggi-dati/filippine-itinerario'
// California (75) — stessa convenzione di florida.ts / new-york.ts
import { california } from '@/content/paesi/california'
import { destinazioniCalifornia } from '@/content/destinazioni/california'
import { californiaRoadTripMeta } from '@/content/viaggi-dati/california-road-trip'
```

## Registri

- `PAESI`: aggiungere `egitto, turchia, filippine, california`
- `DESTINAZIONI`: aggiungere `...destinazioniEgitto, ...destinazioniTurchia, ...destinazioniFilippine, ...destinazioniCalifornia`
- `ESPERIENZE`: niente da aggiungere
- `TRIP_META`: aggiungere `egittoMareLuxorCairoMeta, egittoCompletoMeta, turchiaItinerarioMeta, filippineItinerarioMeta, californiaRoadTripMeta`

## Slug

| File markdown | tripSlug | paeseSlug | continente | destinazioni |
|---|---|---|---|---|
| 71-egitto-mare-luxor-cairo.md | egitto-mare-luxor-cairo | egitto | Africa | cairo, piramidi, luxor, mar-rosso |
| 72-egitto-completo.md | egitto-completo | egitto | Africa | cairo, piramidi, siwa, assuan-abu-simbel, luxor, mar-rosso |
| 73-turchia-itinerario.md | turchia-itinerario | turchia | Medio Oriente | istanbul, cappadocia, pamukkale, efeso, costa-licia, antalya |
| 74-filippine-itinerario.md | filippine-itinerario | filippine | Asia | el-nido, coron, cebu-moalboal, bohol, siargao |
| 75-california-road-trip.md | california-road-trip | california | Nord America | san-francisco, yosemite, sequoia, death-valley, joshua-tree, los-angeles, big-sur |

`tripPrincipaleSlug`: egitto → egitto-completo; turchia → turchia-itinerario; filippine → filippine-itinerario; california → california-road-trip.
Nessuno slug di destinazione collide con quelli esistenti (verificato con grep).

## Da fare dopo (non mio)
- Copertine / hero video / foto dei giorni (viaggi-copertine*, viaggi-hero-video*, viaggi-giorno-foto-crediti).
- Eventuali file esperienze per i 4 Paesi.
