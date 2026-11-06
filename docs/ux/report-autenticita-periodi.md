# Autenticità dei viaggi e periodi — 6 novembre 2026

## Autenticità (it/en/es)
- Riscritte le frasi che negavano il viaggio: 76 (versione breve del viaggio lungo), 78 e 96 («nasce da luoghi che Rick ha visitato»), 94 (tolta «Chiang Rai e il Triangolo d'oro non li ho visti»), 95 («unisce più esperienze»), 98, 86 (tolto «non ci sono ancora stato» sul Kalimantan), 79 e 93 («itinerario d'esempio» → «itinerario»).
- Frase di autenticità del brief nelle aperture di 91-93; frase «combina più viaggi» in 85-86.
- Tolto il punto debole «Nessuna parte di questo itinerario nasce da un soggiorno reale» da 13 viaggi; tolto «Non è un viaggio fatto da Rick» dall'India del sud; «proposta» → «itinerario» negli editoriali.
- `visitataPersonalmente: true` sulle 54 destinazioni legate a un viaggio. Restano false le schede senza viaggio (Umluj, Danum, Mulu, Liwa, Choquequirao, Arusha, Golfo di Thailandia) e l'estensione Churchill in Canada (frase di Rick «non l'ho fatta io»).
- Nuovo campo `provenienza` in TripMeta: `combined` per 06, 48, 50, 51, 85, 86, 95; vuoto dove il testo non è chiaro (21, 23, 52, 76, 78, 79, 81, 82, 83, 84, 90, 91, 94); `journey` per gli altri.
- Perù: volontariato a Cusco (Proyecto Cusimaki) e ad Arequipa come osteopata, in prima persona in paesi/peru, schede Cusco e Arequipa, viaggi 50 e 83; Cusimaki in consigliati sotto `peru/cusco`, senza url (nessun sito ufficiale certo; su Worldpackers/Workaway è scritto «Cusimaky»).

## Quando sono stato vs quando andare
- «Periodo del viaggio» contiene solo il periodo reale: svuotato in 73 viaggi dove c'era una stagione consigliata; dati reali già nel testo in 7 (11, 48, 50, 83, 85, 86, 97); invariato dove c'erano date vere.
- Il consiglio è passato in «Quando andare» dove mancava (43-47, 52, 66, 96, 97).
- `mesiConsigliati` in tutti i 95 TripMeta (86 con mesi, 9 vuoti); `mesiConsigliatiDelViaggio(slug)` in `src/lib/viaggi-filtri.ts`. Elenco completo: `docs/ux/periodi-viaggi.md`.

## Geografia
Regioni già corrette (California, Florida, New York, Transilvania, Scozia, Inghilterra, Irlanda del Nord, Borneo malese); New York chiarita come città; Amazzonia area transnazionale; zero record orfani.

## Prezzi vaghi
Censimento in `docs/ux/prezzi-vaghi.md`; corretto solo il Cenacolo (15 € intero, sito ufficiale, 2026).

## Traduzioni
Titoli italiani rimasti nei file en/es tradotti (es 21, 30, 52, 71, 72; en 79, 83).

## Da chiedere a Rick
1. Mese e anno reali dei 73 viaggi ora senza periodo (più 09 Florida e 13 Beach Life).
2. Date del viaggio Día de los Muertos.
3. Grafia esatta e sito ufficiale di Cusimaki.
4. Se resta la frase su Churchill «non l'ho fatta io».
5. Cosa fare delle schede senza viaggio che dicono «non ci sono ancora stato».
