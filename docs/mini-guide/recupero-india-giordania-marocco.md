# Recupero dati (quarto giro): India, Sri Lanka, Filippine, Maldive, Giordania, Marocco

Data: 5 novembre 2026. Ogni dato rimesso è uguale in it, en ed es (`src/content/destinazioni/` e
`src/content/i18n/{en,es}/destinazioni/`). Solo campi delle mini guide. Ricordi di Rick,
`miaEsperienza` e `consigliati.ts` non toccati. Ricerche web: 7 WebSearch, il resto con WebFetch su
pagine dirette.

**Limite:** molti siti ufficiali non si aprono da qui. Rifiutano la connessione o danno 403/404/451:
ASI, Rajasthan Forest/RTDC, sito del tempio Meenakshi, Tamil Nadu Tourism, Kerala Kathakali Centre,
wadirum.jo e visitpetra.jo. Per questo tanti dati restano come sono.

`npx tsc --noEmit`: nessun errore nei file di questi Paesi. Gli unici errori sono in
`src/content/i18n/en/destinazioni/estonia.ts` (riga 77), un file di un altro agente.

## India (5 dati rimessi)

**Rimesso**
- Hampi, tempio di Vittala: biglietto di circa 600 rupie per gli stranieri, tariffa soggetta a modifiche (2026). Per la validità sul recinto delle regine resta «chiedere alla biglietteria». — https://karnatakatourism.org/destinations/hampi/
- Madurai, tempio Meenakshi: di solito aperto dalle 5 fino a metà giornata e dalle 16 alle 21.30 (2026). — https://www.incredibleindia.gov.in/en/tamil-nadu/madurai/meenakshi-amman-temple
- Alappuzha, Nehru Trophy: nel 2026 si è corsa il 22 agosto, sul lago Punnamada. — https://alappuzha.nic.in/en/72nd-nehru-trophy-boat-race-in-2026/
- Munnar, Kolukkumalai: si sale in jeep da Suryanelli, circa 17 km di pista sterrata. — https://en.wikipedia.org/wiki/Kolukkumalai
- Jodhpur, Mehrangarh: tra le gallerie del museo sono tornate le culle reali. — https://en.wikipedia.org/wiki/Mehrangarh

**Non confermato, lasciato com'è**
- Tariffe ASI per gli stranieri a Delhi, Sarnath e Mamallapuram, e il biglietto unico Shore Temple + Cinque Ratha: le cifre si trovano solo su blog. Il sito ASI e il pdf del 2026 su tourism.gov.in non si aprono (403).
- Orari: Qutub Minar dall'alba al tramonto, Shore Temple 6-18, Mattancherry chiuso il venerdì, Tea Museum chiuso il lunedì. Nessuna pagina ufficiale raggiungibile.
- Ranthambore: chiusura delle zone 1-5 dal 1/7 al 30/9 e safari di circa 3,5 ore. Le danno solo i blog.
- Prezzo del Kathakali, funivia del tempio di Savitri, navette di Eravikulam.
- Tempi di treno e auto: Jaipur-Jodhpur, Jodhpur-Jaisalmer, Bangalore-Hosapete, Kochi-Munnar.
- Sam a 40-50 km da Jaisalmer, Jaisalmer a circa 100 km dal Pakistan: Wikipedia non riporta queste distanze.
- Sinagoga Paradesi: Wikipedia dà 10-13 e 17-19, chiusa venerdì, sabato e domenica. Non l'ho messo perché manca una fonte ufficiale.
- Pushkar, «52 ghat»: confermato da https://en.wikipedia.org/wiki/Pushkar_Lake, ma il dato sta in `introduzione`, fuori dai campi delle mini guide.

## Sri Lanka (1 dato rimesso)

**Rimesso**
- Hatton (zona dove dormire per Adam's Peak): la vetta è a circa 32 km. — https://en.wikipedia.org/wiki/Adam%27s_Peak

**Non confermato, lasciato com'è**
- Nuwara Eliya–Horton Plains in circa 1 ora e mezza; distanza Hatton–Nallathanniya; durata della salita ad Adam's Peak e numero dei gradini.
- Cascata di Ravana: sta a Ella, non a Nuwara Eliya, quindi era giusto toglierla da lì. È alta circa 25 m (https://en.wikipedia.org/wiki/Ravana_Falls), ma la frase utile è in `cosaVedere`, fuori perimetro.
- Mihintale, Lipton's Seat e treno per Ella avevano già dati precisi dal terzo giro.

## Filippine (7 dati rimessi)

**Rimesso**
- Nacpan: a un'estremità una lingua di sabbia la unisce alla spiaggia gemella di Calitang (Twin Beach). — https://suroy.ph/el-nido-travel-guide/
- Canopy Walk sul Taraw: imbrago, casco e guida sono compresi nel biglietto. — https://suroy.ph/el-nido-travel-guide/
- Kayangan: considerato tra i laghi più puliti delle Filippine. — https://en.wikipedia.org/wiki/Kayangan_Lake
- Twin Lagoon: con la bassa marea si passa nel varco della roccia, con l'alta marea sotto la parete. — https://lakbaypinas.com/?p=18409 (agosto 2025)
- Pescador Island: un muro di corallo che scende fino a circa 40 m. — https://en.wikipedia.org/wiki/Pescador_Island
- Kawasan: la gola è quella del fiume Matutinao. — https://en.wikipedia.org/wiki/Kawasan_Falls
- OceanJet Cebu–Tagbilaran: circa 2 ore con il mare calmo, nell'attenzione di Bohol. — https://bohol-philippines.com/transport/operators/oceanjet-ferry/ (dati al 23/6/2026)

**Non confermato, lasciato com'è**
- Gradini di Kayangan: le fonti non concordano (oltre 150 contro 300-360).
- Prezzi di Maquinit, Tapyas, tricycle e immersioni sui relitti di Coron; barca per Pescador; altezze dei salti al Kawasan.
- Barca privata a Siargao; Daku «la più grande, con il villaggio»; Magpupungko; belvedere di Coconut Road.
- Prezzi della barca e del santuario di Balicasag; Chocolate Hills a 1 ora e mezza da Panglao.
- Salita guidata alla cima del Taraw: resta tolta, perché la via non è autorizzata dalla DENR.

## Maldive (nessun dato da rimettere)

Il file non è cambiato in `git diff 1dfa0fa^ HEAD`: nel secondo e nel terzo giro non è stato tolto
niente. Le tre cose tolte nel primo giro (data del 12/11/2024 sulle sigarette elettroniche,
«solo contanti» sui traghetti MTCC, «tonni pescati all'alba») erano errate o già sostituite con dati
corretti.

## Giordania (7 dati rimessi)

**Rimesso**
- Petra by Night: dalle 20.30 alle 22.30 circa, partenza dal centro visitatori, 30 JOD a persona, gratis sotto i 10 anni (2026). Serve anche il biglietto di giorno o il Jordan Pass e non si prenota. I giorni non sono certi: la pagina ufficiale indica in un punto lunedì, mercoledì e giovedì e in un altro da domenica a giovedì, quindi il testo dice di controllarli al centro visitatori. — https://international.visitjordan.com/Wheretogo/Petra , https://visitpetra.imagine.com.jo/en/Thingstodo/75 (copia di visitpetra.jo, che da qui risponde 451), https://wowjordan.com/2025/10/15/petra-by-night-updated-2025 (aggiornato a maggio 2026)
- Siq: dal centro visitatori al Tesoro si cammina da mezz'ora a un'ora, secondo il passo. — https://international.visitjordan.com/Wheretogo/Petra
- Jerash, teatro sud: oltre 3.000 posti. — https://international.visitjordan.com/Wheretogo/Jerash
- Jerash, cardo: il selciato è quello originale, con i solchi dei carri. — https://international.visitjordan.com/Wheretogo/Jerash
- Jerash, ippodromo: circa 15.000 spettatori per le corse dei carri. Il superlativo «tra i meglio conservati» resta tolto. — https://international.visitjordan.com/Wheretogo/Jerash
- Aqaba: la Cedar Pride è stata affondata apposta per i subacquei il 16 novembre 1985. — https://international.visitjordan.com/Wheretogo/Aqaba
- Castello di Shobak: 1 JOD per gli stranieri, oppure incluso nel Jordan Pass (2026). — https://international.visitjordan.com/page/17/Entrance-Fees , https://en.wikipedia.org/wiki/Shobak_Castle

**Non confermato, lasciato com'è**
- Tariffe fisse delle jeep del centro visitatori di Wadi Rum: wadirum.jo non risponde. Ponte di roccia di Umm Fruth: non compare sulle pagine aperte.
- Monte Nebo «a circa 10 km da Madaba»; tempi di strada e a piedi (Cittadella, Madaba–Karak, Shobak–Wadi Musa, Little Petra, Sito del Battesimo, taxi ad Aqaba, Monastero in 40-45 minuti); sole sul Tesoro alle 9-10.
- «15-20 minuti al massimo» in acqua nel Mar Morto, alcol a Madaba e ad Aqaba, pranzo a Karak da 2-3 JOD, ristorante Haret Jdoudna, cisterne di Karak.

## Marocco (1 dato rimesso)

**Rimesso**
- Souk El Had di Agadir: chiuso il lunedì, di solito aperto dalle 9 alle 18 (2026), ma ogni banco ha i suoi orari. — https://www.rehlat.ma/en/explore/agadir/souk-el-had-d-agadir-agadir-morocco-fqt2owz1hi (guida marocchina, non un sito ufficiale; la chiusura del lunedì torna in quasi tutte le guide trovate)

**Non confermato, lasciato com'è**
- Tempi di strada: Marrakech–Telouet, Telouet–Aït Benhaddou, Ouarzazate, Todra, Agdz–Zagora, Zagora–Tamegroute 20 km, Agdz–Taliouine, Taghazout, Essaouira, Koutoubia a 5 minuti.
- Raccolta dello zafferano a ottobre-novembre: Wikipedia conferma solo il festival di novembre, che è già nel testo.
- Bab Doukkala come ingresso di Essaouira, stagione del surf a Taghazout, prezzo del tè al souk.
- Già nel testo e confermati: Medersa Ben Youssef (130 celle, fino a 800 studenti), murale «Tombouctou 52 jours» a Zagora, Erg Chebbi (150 m, circa 28 km), Diabat a 5 km da Essaouira.
