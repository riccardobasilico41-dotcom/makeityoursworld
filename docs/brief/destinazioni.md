# Brief: bring destination pages to competitor level

Repo /Users/riccardobasilico/Desktop/CLAUDE/CliniMotion. Rick did every trip on the site. Today: November 2026. Do NOT commit/push/build/switch branch. Touch only the country files of your destinations: src/content/destinazioni/<paese>.ts (Italian master) and the copies src/content/i18n/{en,es}/destinazioni/<paese>.ts. Types `Destinazione` and `LuogoGuida` in src/lib/types.ts (fields: `orari`, `lat`, `lng` on places; `fascia` on zone; `gite`; `faq`). Look at an already-enriched destination as model (e.g. thailandia/bangkok, giappone/kyoto). Scratch files only in /private/tmp/claude-501/<your-group>/ (never shared names).

Competitors win with 12-20 places per city with practical data, 1/2/3-day plans, where-to-stay areas with price per night, day trips, a real FAQ.

## Target per destination (keep everything good; never delete Rick's `miaEsperienza` or first-person lines)
- `luoghi`: cities ≥ 12 places, smaller stops ≥ 8. Each: `testo` 2-4 sentences, `come`, `quando`, `tempo`, `costo` (local currency + «circa X €», 2026), `orari` (hours + closing day), `url` (official), `lat`/`lng` (looked up on Wikipedia/Wikidata/OpenStreetMap with a generic User-Agent, never an email; NOT from memory), `consiglio` only if useful.
- `programmi`: 1/2/3 days (or along the route); `zone`: 3-4 with `perChi`, `testo`, `fascia` (double room per night, rounded, from a concrete source); `gite`: 2-4 with `distanza`, `come`, `testo`; `comeArrivare` ≥ 40 words; `costi`: daily budget low/mid/high in euro; `faq`: 5-6 real questions with 1-3 sentence answers.
- Mirror ALL changes faithfully in EN and ES.

## Facts and voice
- Prices/hours from the official page (WebFetch) or from Rick's trips (src/content/viaggi/*.md). If unverifiable, omit the field — never guess.
- No invented memories; new text impersonal. Rick's memories of 10/11/2026: keep any already in the file.
- NO meta in visible text: no «(fonti non ufficiali)», «(fonti turistiche)», «verificato su…», no source lists.
- Natural Italian, no AI tics. Valid TypeScript: `npx tsc --noEmit -p .` at the end.

## Report (≤120 words)
Per destination: places before→after, fields added, what you couldn't verify.
