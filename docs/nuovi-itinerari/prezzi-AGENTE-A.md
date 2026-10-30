# Prezzi e dati pratici: correzioni agli overlay (agente A, 30/10/2026)

Articoli 66-69 aggiornati direttamente nei .md. Qui sotto le modifiche da applicare a mano ai file `src/content/viaggi-dati/*.ts` (non toccati). Formato: campo/giorno, testo vecchio → testo nuovo. Le voci non elencate restano valide.

## src/content/viaggi-dati/messico-dia-de-los-muertos.ts

- `criticita[1]`
  - vecchio: `'Janitzio (Michoacán) resta fuori dall\'itinerario principale: lo stato è al livello 4 negli avvisi USA e sconsigliato dalla Svizzera, e la sua notte coincide con quella di Etla'`
  - nuovo: `'Janitzio (Michoacán) resta fuori dall\'itinerario principale: la Farnesina raccomanda di evitare i viaggi non indispensabili nello stato, e la sua notte coincide con quella di Etla'`
- `criticita[2]`
  - vecchio: `'Hierve el Agua è stato chiuso a lungo per dispute tra comunità: va verificato la settimana prima'`
  - nuovo: `'Hierve el Agua ha avuto chiusure improvvise per dispute tra comunità: va verificato la settimana prima'`
- Nessun cambio a `costiNoti` e `budget` (210 MXN INAH, bus, tour confermati o non smentiti).

## src/content/viaggi-dati/messico-cdmx-baja-california.ts

- Giorno 7 (`Giorno 7 — Lo squalo balena e Playa Balandra`), `costiNoti`
  - vecchio: `'tour squalo balena 1.500-2.500 MXN più quota parco; Balandra circa 120 MXN a turno, su prenotazione'`
  - nuovo: `'tour squalo balena 1.500-2.500 MXN più braccialetto 215 MXN (stranieri, stagione 2025-2026); Balandra 120 MXN al giorno, turni 8-12 e 13-17 su prenotazione'`
- Giorno 14 (`Giorno 14 — Cabo San Lucas: El Arco e le megattere`), `costiNoti`
  - vecchio: `'whale watching 1.000-2.000 MXN a persona'`
  - nuovo: `'whale watching 80-130 USD a persona su barca condivisa (circa 1.400-2.200 MXN)'`
- `budget`, etichetta `'Uscite per gli animali'`, `valore`
  - vecchio: `'squalo balena 1.500-2.500 MXN; Espíritu Santo 2.500-3.500 MXN; panga balene grigie 1.500-2.000 MXN/ora a barca; balenottera azzurra da 3.000 MXN; megattere 1.000-2.000 MXN'`
  - nuovo: `'squalo balena 1.500-2.500 MXN più 215 MXN di braccialetto; Espíritu Santo 2.500-3.500 MXN; panga balene grigie 1.500-2.000 MXN/ora a barca; balenottera azzurra da 3.000 MXN; megattere 1.400-2.200 MXN (80-130 USD)'`
- `budget`, etichetta `'Ingressi'`, `valore`
  - vecchio: `'Teotihuacán e Museo di Antropologia circa 210 MXN ciascuno; Balandra circa 120 MXN'`
  - nuovo: `'Teotihuacán e Museo di Antropologia 210 MXN ciascuno per stranieri non residenti; Balandra 120 MXN'`

## src/content/viaggi-dati/brasile-itinerario.ts

- `criticita[3]`
  - vecchio: `'Vaccino della febbre gialla raccomandato per Iguazú, Chapada, Pantanal e Amazzonia'`
  - nuovo: `'Vaccino della febbre gialla raccomandato per Iguazú, Lençóis Maranhenses, Pantanal e Amazzonia'`
- `criticita[4]`
  - vecchio: `'Prezzi di parchi, barche e regole del parco dei Lençóis (in piano di concessione) cambiano spesso'`
  - nuovo: `'Prezzi di parchi e barche cambiano spesso; Viaggiare Sicuri sconsiglia qualsiasi visita alle favelas, anche guidata'`
- Giorno 2 (`Giorno 2 — Cristo Redentor e Santa Teresa`), `costiNoti`
  - vecchio: `'Cristo Redentor con van ufficiale circa 85-90 R$'`
  - nuovo: `'Cristo Redentor con van ufficiale circa 87 R$, prezzo unico tutto l\'anno'`
- Giorno 3 (`Giorno 3 — Pão de Açúcar, Copacabana e Ipanema`), `costiNoti`
  - vecchio: `'funivia del Pão de Açúcar circa 180-200 R$'`
  - nuovo: `'funivia del Pão de Açúcar circa 205 R$ (intero)'`
- Giorno 10 (`Giorno 10 — Iguazú, il lato brasiliano e il Parque das Aves`), `costiNoti`
  - vecchio: `'parco brasiliano circa 100-110 R$; Macuco Safari 450-550 R$'`
  - nuovo: `'parco brasiliano circa 130 R$ per stranieri (tetto 2026 134 R$), online con orario; Macuco Safari 450-550 R$'`
- Giorno 11 (`Giorno 11 — Iguazú, il lato argentino e la Garganta del Diablo`), `costiNoti`
  - vecchio: `'parco argentino circa 35-45 dollari in pesos per i non residenti'`
  - nuovo: `'parco argentino 60.000 pesos argentini per stranieri non residenti dal 1° giugno 2026 (circa 40 USD)'`
- Giorno 19 (`Giorno 19 — Barreirinhas e il circuito della Lagoa Azul`), `costiNoti`
  - vecchio: `'jardineira 100-150 R$ a persona per circuito'`
  - nuovo: `'jardineira 100-150 R$ a persona per circuito; ingresso al parco gratuito'`
- `budget`, etichetta `'Budget giornaliero economico'`, `valore`
  - vecchio: `'350-500 R$ a persona (circa 55-80 €)'` → nuovo: `'350-500 R$ a persona (circa 60-85 €)'`
- `budget`, etichetta `'Budget giornaliero medio'`, `valore`
  - vecchio: `'700-1.100 R$ a persona (circa 110-175 €)'` → nuovo: `'700-1.100 R$ a persona (circa 120-190 €)'`
- `budget`, etichetta `'Budget giornaliero alto'`, `valore`
  - vecchio: `'oltre 1.800 R$ a persona (da 280 €)'` → nuovo: `'oltre 1.800 R$ a persona (da 300 €)'`
- `budget`, etichetta `'Ingressi principali'`, `valore`
  - vecchio: `'Cristo Redentor 85-90 R$; Pão de Açúcar 180-200 R$; Iguazú brasiliano 100-110 R$, argentino circa 35-45 dollari'`
  - nuovo: `'Cristo Redentor circa 87 R$; Pão de Açúcar circa 205 R$; Iguazú brasiliano circa 130 R$, argentino 60.000 ARS (circa 40 USD); Lençóis Maranhenses gratuito'`
- `budget`, etichetta `'Estensione Pantanal'`, `valore`
  - vecchio: `'barca per i giaguari intorno a 1.600 R$ per 4 persone; pacchetti completi 9.000-13.000 R$ a persona per 3-4 notti'`
  - nuovo: `'barca per i giaguari intorno a 1.400-1.600 R$ al giorno a barca (4-6 persone); pacchetti completi 9.000-13.000 R$ a persona per 3-4 notti'`

## src/content/viaggi-dati/croazia-itinerario.ts

- riga 19 (campo con `'chi parte dall\'Italia e vuole un viaggio vicino, con euro e carta d\'identità'`)
  - nuovo: `'chi parte dall\'Italia e vuole un viaggio vicino, con euro e carta d\'identità elettronica'`
  - motivo: dal 3 agosto 2026 la carta d'identità cartacea non vale per l'espatrio.
- `criticita[1]`
  - vecchio: `'Multe per costume, alcol per strada e comportamenti molesti nei centri storici di Spalato, Hvar e Dubrovnik'`
  - nuovo: `'Multe per costume, alcol per strada e comportamenti molesti nei centri storici: 150 € a Spalato, fino a 700 € a Hvar'`
- Giorno 2 (`Giorno 2 — Verso Plitvice: i laghi inferiori`), `costiNoti`
  - vecchio: `'biglietto circa 40 € in giugno-settembre, online con fascia oraria'`
  - nuovo: `'biglietto 40 € in giugno-settembre (25 € nel pomeriggio), 23 € in aprile, maggio e ottobre; online con fascia oraria'`
- Giorno 5 (`Giorno 5 — Le cascate del Krka e Sebenico`), `costiNoti`
  - vecchio: `'Krka circa 40 € in estate, bagno vietato'`
  - nuovo: `'Krka 40 € in giugno-settembre (30 € dopo le 15), 20 € in aprile, maggio e ottobre; bagno vietato'`
- Giorno 7 (`Giorno 7 — Spalato: il palazzo di Diocleziano e il Marjan`), `costiNoti`
  - vecchio: `'sotterranei del palazzo 10-15 €'` → nuovo: `'sotterranei del palazzo circa 10 €'`
- Giorno 8 (`Giorno 8 — In catamarano a Hvar`), `costiNoti`
  - vecchio: `'catamarano 15-25 € in estate'` → nuovo: `'catamarano 10-25 € in estate secondo la compagnia'`
- Giorno 12 (`Giorno 12 — Dubrovnik: Stradun, Lokrum e la funivia`), `costiNoti`
  - vecchio: `'Lokrum con barca 25-30 €'` → nuovo: `'Lokrum 30 € con barca e ingresso alla riserva'`
- `budget`, etichetta `'Parchi nazionali'`, `valore`
  - vecchio: `'Plitvice e Krka circa 40 € ciascuno in alta stagione'`
  - nuovo: `'Plitvice e Krka 40 € ciascuno da giugno a settembre (23 € e 20 € in primavera e ottobre)'`
- `budget`, etichetta `'Dubrovnik'`, `valore`
  - vecchio: `'mura circa 40 €; Lokrum con barca 25-30 €'` → nuovo: `'mura circa 40 € con Lovrijenac; Lokrum con barca 30 €'`
- `budget`, etichetta `'Catamarani'`, `valore`
  - vecchio: `'Spalato-Hvar 15-25 €, Hvar-Curzola 20-30 €, Curzola-Dubrovnik 25-35 €'`
  - nuovo: `'Spalato-Hvar 10-25 €, Hvar-Curzola 20-30 €, Curzola-Dubrovnik 25-35 €'`
- `budget`, etichetta `'Tassa di soggiorno'`, `valore`
  - vecchio: `'circa 1,50-3 € a persona a notte in alta stagione'`
  - nuovo: `'fino a 2,65 € a persona a notte in alta stagione (Dubrovnik), 1,86 € a Zagabria'`
