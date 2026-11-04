# Itinerari «combo» di due settimane

Richiesta di Rick: nei Paesi con tante destinazioni, itinerari di **due settimane** che combinano
le zone migliori, accanto al viaggio lungo che c'è già. Voce in prima persona di Rick solo per
ciò che ha vissuto davvero (scritto sotto); il resto è guida pratica, senza inventare ricordi.

## Formato (copia la struttura esistente)
- Markdown in `src/content/viaggi/<NN>-<slug>.md`: stesso schema di `48-indonesia-itinerario.md`
  e `50-peru-itinerario.md` (intestazione con **Stato bozza**, **Periodo del viaggio**, **Durata**,
  **Compagni di viaggio**, **Categoria**; poi `## Apertura personale`, `## Scheda pratica`,
  `## Itinerario giorno per giorno` con `### Giorno N — …`, `## Cosa vedere / cosa fare`,
  `## Consigli pratici / errori da non ripetere`, `## Chiusura personale`, `## Tag`).
  Niente sezioni «Materiale grezzo», «Nota su questa bozza», «Foto/media».
  In fondo, prima dei Tag, un paragrafo corsivo che dice cosa viene da Rick e cosa dalla ricerca
  (come in `80-canada-itinerario.md`).
- Dati in `src/content/viaggi-dati/<slug>.ts` (`export const <camelCase>Meta: TripMeta`), come
  `indonesia-itinerario.ts`: `titoloGiorno` identico ai `### Giorno N — …` del markdown,
  `destinazioneSlug` solo tra quelli esistenti in `src/content/destinazioni/<paese>.ts`,
  `statoPernottamento: 'consigliato'`, immagini dei giorni: riusa quelle già presenti nel viaggio
  lungo dello stesso Paese (stessi file in `public/images/viaggi/<viaggio-lungo>/`), oppure le foto
  nuove indicate sotto. Niente foto inventate: se manca, ometti `immagine`.
- Riusa tratte, tempi, costi e consigli già verificati nel viaggio lungo dello stesso Paese
  (`48-indonesia-itinerario.md`, `50-peru-itinerario.md`) e nelle schede destinazione.
- `node --check` su ogni .ts.
- **NON toccare** `src/lib/geo.ts`, `viaggi-editorial.ts`, `viaggi-copertine.ts`, `guide-pdf.json`:
  li registra chi coordina. Scrivi invece in `docs/itinerari-combo/<slug>-registrazione.md`:
  il nome dell'export, `seoTitle` (≤60, es. «Itinerario Indonesia 2 settimane: Giava, Bali e Gili»),
  `seoDescription` (70-155), `socialTitle`, `editorialHook` (2 frasi), `imageAlt` della copertina e
  quale foto usare come copertina.
- Puoi aggiungere lo slug del nuovo viaggio a `tripSlugs` delle destinazioni toccate nel file
  `src/content/destinazioni/<paese>.ts` del tuo Paese.

## I tre itinerari

### 81 · `giava-bali-gili` — Giava, Bali e Gili in 14 giorni (la classica)
Yogyakarta (Borobudur, Prambanan) → Bromo → Ijen → Bali (Ubud, risaie, Sidemen o nord) → Gili.
Rick ha fatto questa parte nel viaggio lungo (vedi 48-indonesia-itinerario, giorni 6-25).
Foto di Rick nuove (dai suoi droni) in `public/images/viaggi/giava-bali-gili/`:
`bromo-alba.jpg` (Bromo all'alba), `bali-handara.jpg` (porta di Handara, Bali nord),
`risaie-jatiluwih.jpg` (risaie a terrazze), `gili-tramonto.jpg` e `gili-dall-alto.jpg` (isolette
delle Gili). Copertina: `bromo-alba.jpg` o `gili-dall-alto.jpg`.

### 82 · `sumatra-mentawai` — Sumatra e Mentawai in 14 giorni
Fonte di tutti i dati: `docs/indonesia/ricerca-mentawai.md` (leggila tutta, usa solo ciò che ha
fonte). Rick ci è andato con **Mentawai Tribe** (https://www.mentawaitribe.com): soggiorno nella
giungla di Siberut con una famiglia mentawai. Parole sue da rendere: posti pazzeschi; c'è il **lato
etico** del turismo da affrontare onestamente (non è uno zoo umano: come comportarsi, regali,
foto, soldi, scegliere operatori con guide mentawai che portano ricavi alla comunità; il passato
di repressione delle tradizioni); **non è per tutti** (fango, insetti, niente elettricità, si dorme
su una stuoia). Poi le **spiagge bellissime** e il **surf** (Sipora, break per intermedi/esperti,
stagione, surf tax, fast boat da Padang). **Max Mariola**: Rick non ha confermato di averci
mangiato. Citalo solo come progetto in arrivo («a Sipora è in costruzione "The Sound of Love
Mentawai", il progetto dello chef Max Mariola con un ristorante sulla spiaggia: cantiere annunciato
da novembre 2026») senza dire che è buono. Combinazione: Padang + Bukittinggi (Maninjau, Harau) +
Siberut con Mentawai Tribe + Sipora mare e surf, come suggerisce la ricerca. Non ci sono foto di
Rick delle Mentawai: niente `immagine` nei giorni Mentawai. Per i giorni di Sumatra puoi riusare
le foto già presenti per Sumatra nel viaggio lungo, se esistono.
Aggiungi anche la **destinazione `mentawai`** in `src/content/destinazioni/indonesia.ts`
(stesso schema delle altre, `visitataPersonalmente: true`, `miaEsperienza` con le parole di Rick
sopra, senza immagine se non c'è una foto PD/tua: metti `immagine` solo se esiste), con
`tripSlugs: ['sumatra-mentawai']`.

### 83 · `peru-due-settimane` — Perù in 14 giorni (la classica)
Lima → Arequipa e Colca → Puno e Titicaca → Cusco → Valle Sacra → Machu Picchu → (rientro).
Tutto dal viaggio lungo `50-peru-itinerario.md` (che Rick ha fatto): stesse tratte, tempi, costi,
avvertenze sull'altitudine; aggiungi in fondo le varianti «se hai 3-4 giorni in più»: Amazzonia da
Puerto Maldonado oppure Huaraz e la Cordillera Blanca, con link alla sezione `/amazzonia`.
Riusa le immagini dei giorni del viaggio lungo.
