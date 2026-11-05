# Audit UX / IA — Make It Yours World

Data: 5 novembre 2026. Verificato sulla build locale (`next start -p 3200`, viewport 390 e 1280) e sul codice. Nessun file del progetto è stato modificato.

## Numeri reali (misurati)

- 83 viaggi (`src/content/viaggi/*.md`), 54 «Paesi» (`PAESI` in `src/lib/geo.ts`), 327 destinazioni.
- La home, con l'intro saltata, è alta 8.590 px a 390 e 11.183 px a 1280. `FeaturedJourney` da solo occupa 4.637 px a 1280.
- `/viaggi` è alta 39.781 px a 390 e 16.411 px a 1280: vengono mostrate tutte le 83 card, senza paginazione.
- I contatori sono tutti calcolati, nessuno è scritto a mano: «Esplora tutti i 83 viaggi» viene da `viaggi.length`, «327 destinazioni in 54 Paesi» da `MappaMondoSezione`, `lead(paesi.length)` da `destinazioni/page.tsx`. Il problema è nella definizione: tra i «54 Paesi» ci sono 5 regioni (transilvania, florida, new-york, california, borneo), e tanzania non ha nessun viaggio. Gli Stati sovrani sono circa 51. Il commento in `page.tsx` («non i 47 al completo») è vecchio.

## Copertura dei metadati per i filtri (83 viaggi)

| Dato | Dove | Copertura | Note |
|---|---|---|---|
| Durata numerica | `**Durata:**` con il primo numero (`giorniDelViaggio`) | 80/83 | Mancano dolomiti-roadtrip, svizzera-alpi-van e maldive-guida («modulare»). Fasce: ≤4 g 13 · 5-9 g 26 · 10-15 g 25 · 16+ g 16 |
| Mese / periodo | `**Periodo del viaggio:**`, testo libero | 78/83 contengono almeno un nome di mese | Testo libero: sarebbe da normalizzare in `mesi: number[]`. Senza mese: thailandia, florida, messico-beach-life, tromso, canarie («tutto l'anno»). L'anno è indicato in 6 viaggi su 83 |
| Continente | `Categoria[0]` | 83/83 | 7 valori (Africa, Medio Oriente, America Centrale, Nord America…), mentre il menu ne usa 5 (`AREE`) |
| Paese | `Categoria[1]`, usato dal filtro | 83/83, ma 7 valori sono incoerenti | Il campo affidabile è `TripMeta.paeseSlug`, coperto 83/83 (47 Paesi distinti) |
| Multi-Paese | solo il testo di `Categoria` | 0 strutturati | centro-america (3 Paesi), malesia-singapore (2), stopover-golfo (3), capitali-nordiche e capitali-baltiche (3), borneo |
| Tipologia (`STILI_NOTI`) | regex su categorie + tag | 63/83 con almeno uno stile | mare 17 · gastronomia 16 · isole 12 · montagna 10 · trekking 10 · archeologia 10 · vulcani 8 · deserto 7 · giungla 5 · sci 4 · vino 3 · aurora boreale 2. 20 viaggi non hanno nessuno stile |
| `TripMeta.stile` | `viaggi-dati/*.ts` | 83/83 | gastronomia 20, natura 19, mare 18, città 12, trekking 12… Ci sono doppioni: «road trip»/«roadtrip»/«on the road», «cibo»/«gastronomia» |
| Tag `#` | sezione `## Tag` | 83/83, 585 tag distinti | Quasi tutti compaiono una volta sola. Non servono come filtro (#italia 16, #asia 14, #cittadarte 13, #roadtrip 9) |
| Budget | `TripMeta.budgetTotale` | 9/83 | Troppo pochi per un filtro |

## P0, da fare subito

1. **L'header non ha un link a «Viaggi».** `src/components/Header.tsx` e `NavPrincipale.tsx` mostrano solo le 5 aree e «Meraviglie». L'archivio si raggiunge solo dalla CTA della home o dal footer. Inoltre il menu in riga appare solo da 1440 px (`min-[1440px]`), quindi a 1280 c'è solo l'hamburger.
   **Proposta:** aggiungere in `Header.tsx` due voci fisse prima delle aree, «Viaggi» → `/viaggi` e «Destinazioni» → `/destinazioni`, sia nella barra sia in cima a `#menu-mobile`. Va esteso `GruppoMenu`, oppure si aggiunge una prop `vociFisse`. Abbassare il breakpoint del menu desktop a `xl` (1280) o mostrare almeno queste due voci da `lg`.
2. **I filtri dell'archivio non stanno nell'URL.** `TripFilters.tsx` usa solo `useState`, quindi un filtro non si può condividere, va perso con il tasto indietro e nessun link esterno (pagina Paese, area, home) può aprire l'archivio già filtrato.
   **Proposta:** leggere e scrivere `?continente=&paese=&durata=&stile=a,b` con `useSearchParams` e `router.replace` (`scroll: false`). Vanno usati come valori gli slug (`paeseSlug`, lo slug dell'area). Poi linkare `/viaggi?paese=<slug>` da `CountryHero` e `/viaggi?area=<slug>` da `aree/[area]`.
3. **Il filtro Paese usa `categorie[1]`, che non è sempre un Paese.** Le voci attuali includono «USA» e «Stati Uniti» separati, «Balcani» (Montenegro), «Romania» (la pagina si chiama Transilvania) e «Borneo» separato da «Malesia». Belize, Panama, Qatar e Singapore non si trovano, perché compaiono solo come secondo Paese di un viaggio. Il Paese inoltre non dipende dal continente: Borneo + Europa dà 0 risultati.
   **Proposta:** passare a `riduciPerScheda` (`TripCard.tsx`) un campo `paesi: string[]` ricavato da `TripMeta.paeseSlug` più i Paesi delle tappe o delle destinazioni collegate. Per i 6 viaggi multi-Paese serve un campo `paesiSlug` in `TripMeta`. Filtrare con `paesi.includes(sel)`, prendere il nome da `getPaese`, limitare le opzioni al continente scelto e mostrare il conteggio accanto a ogni opzione.
4. **Su desktop l'hero resta senza testo per 17 secondi.** Con `introFino: 17` in `CinematicHero.tsx`, H1 e CTA restano a `opacity-0` finché dura il titolo del video, e questo dopo l'`IntroFiligrane` della prima visita. A 1280 la prima schermata non ha né CTA né modo di cercare.
   **Proposta:** tenere sempre visibili H1 e CTA (togliere `group-data-[intro=true]:opacity-0` dal blocco testo, al massimo attenuarlo) e aggiungere nell'hero un campo «Dove vuoi andare?» che apre `<Ricerca>` già precompilata (esporre un evento o un `open(query)`), oppure dei chip per area che portano a `/viaggi?area=…`.
5. **Lo stato vuoto non offre un'uscita.** In `TripFilters.tsx` c'è solo «Nessun viaggio corrisponde a questi filtri.»
   **Proposta:** aggiungere il pulsante «Azzera filtri» e suggerire di togliere l'ultimo filtro applicato, mostrando quanti risultati tornerebbero.

## P1

- **Home lunga e ripetitiva.** In `src/app/[lang]/page.tsx` l'ordine è hero → `VoltoDelProgetto` (1.597 px a 390) → mappa → `ViaggiTop` (13 viaggi) → `FeaturedJourney` → `VisualArchive` (altri 7, di cui 5 già presenti in `ViaggiTop`) → CTA → Meraviglie → altra CTA «Vedi tutti i viaggi». Proposta: subito dopo l'hero le porte d'ingresso (aree con conteggio, durata, stile), poi `ViaggiTop`, mappa, `FeaturedJourney` accorciato a una schermata, Meraviglie. Togliere `VisualArchive` o deduplicarlo rispetto a `TOP`, spostare `VoltoDelProgetto` più in basso e unire le due CTA finali in una.
- **Due tassonomie di continenti.** L'archivio raggruppa per 7 `CONTINENTI` (`utils.ts`), il menu e `/aree` per 5 `AREE`. Va scelta una sola fonte: gruppi e salti per continente dell'archivio dovrebbero usare `AREE`.
- **Paesi che in realtà sono regioni.** transilvania, florida, new-york, california e borneo hanno `Paese` a pieno titolo, mentre non c'è un nodo Romania o USA. Il menu Nord America elenca New York, Florida e California come se fossero Paesi. Proposta: aggiungere a `Paese` i campi `tipo: 'paese' | 'regione'` e `stato?: 'usa' | 'romania' | 'malesia'`. Il menu li raggruppa sotto «Stati Uniti» e il contatore conta solo i `tipo === 'paese'`. Lapponia e Tromsø restano destinazioni di Svezia e Norvegia, che va bene.
- **Breadcrumb senza livello geografico.** Il viaggio mostra Home › Viaggi › titolo, il Paese Home › Destinazioni › Paese. Manca l'area in `CountryHero.tsx` e mancano area e Paese in `viaggi/[slug]/page.tsx` (TripOpener). L'area usa Home › Destinazioni › Area con `'Home'` scritto a mano in `aree/[area]/page.tsx:127`, che in spagnolo dovrebbe essere «Inicio». `/esperienze` e `/guide` danno 404, e le esperienze mostrano Home › Destinazioni › Paese.
- **Archivio senza ordinamento e senza paginazione.** Proposta: ordinamento per Durata, Più recenti e A-Z, e un «Mostra altri» ogni 12 card per gruppo su mobile.
- **Ricerca.** Non indicizza mesi e stagioni: «luglio» dà 0 risultati. Proposta: aggiungere a `tag` in `cerca.json/route.ts` il periodo normalizzato e `TripMeta.stile`. Quando non trova niente, proporre le aree. Per i viaggi, `paese` contiene il continente e non il Paese: meglio usare `paeseSlug`. Con query corte la ricerca per sottostringa sporca i risultati: in inglese «sci» trova Cape Canaveral.
- **Mese come dato.** Aggiungere `mesi: number[]` in `TripMeta` (78 viaggi su 83 hanno già il testo da cui ricavarlo) e un filtro «Quando» nell'archivio.

## P2

- Normalizzare `TripMeta.stile` (togliere doppioni come roadtrip e cibo) e usarlo al posto della regex su tag e categorie, così si coprono anche i 20 viaggi senza stile.
- Nascondere dal filtro gli stili poco usati (aurora boreale 2, vino 3) oppure mostrare il conteggio accanto a ciascuno.
- Tanzania compare nel menu e nel contatore senza viaggi: segnarla come «guida, senza itinerario».
- Nelle card manca il Paese: oggi l'eyebrow mostra solo il continente («EUROPA»).
- Il cambio lingua mantiene la pagina e lo slug tradotto (`SelettoreLingua` con `localizza`), ma perde query e hash (`#giorno-3`). Una volta fatta la P0-2 va conservata anche la query.
- Budget: 9/83, nessun filtro per ora.
