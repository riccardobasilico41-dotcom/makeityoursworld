# Verifica mini guide: gruppo india-oceano (India, Sri Lanka, Maldive, Filippine)

Data: 5 novembre 2026. Correzioni fatte in it, en ed es. Ricordi di Rick non toccati.

**Limite:** il budget di ricerche web del turno (200 WebSearch, condiviso tra tutti gli agenti) si è esaurito durante il lavoro. Sri Lanka e Filippine sono stati completati in parte solo aprendo pagine dirette. L'India è stata verificata solo con WebFetch sulle pagine ufficiali raggiungibili: molti siti indiani rifiutano la connessione (obms-tourist.rajasthan.gov.in, fmdss.forest.rajasthan.gov.in, tourism.rajasthan.gov.in, shrikashivishwanath.org, nehrutrophy.nic.in). Per l'India serve un secondo passaggio con la ricerca web.

`npx tsc --noEmit`: nessun errore nei file di questi Paesi. Restano 3 errori non legati ai contenuti (`PageProps` e `LayoutProps` in `src/app/[lang]/guide/[slug]/stampa/page.tsx` e `src/app/[lang]/layout.tsx`).

## India

**Verificato e lasciato com'è**
- Taj Mahal: 1.100 rupie per gli stranieri, più 200 per il mausoleo, gratis sotto i 15 anni. Aperto da mezz'ora prima dell'alba a mezz'ora prima del tramonto, chiuso il venerdì.
- Forte di Agra (650 rupie, 600 il venerdì), Fatehpur Sikri (610/600), Itimad-ud-Daulah e Sikandra (310/300), Mehtab Bagh (300): coincidono con la tabella ufficiale.
- City Palace di Jaipur: 9.30-18.30, il Royal Tour è chiuso il secondo giorno di Holi, la galleria tessile del Mubarak Mahal è chiusa dal 27/3/2026.
- Mehrangarh e Jaswant Thada: 9-17 tutti i giorni. Rao Jodha Desert Rock Park: 8-17.30 da ottobre a marzo, 7-18.30 da aprile a settembre.

**Corretto**
- Taj Mahal: tolto «50 rupie di sconto online», che non compare sul sito ufficiale.
- Taj Mahal, visita notturna: tolti numeri e orari (cinque notti, 20-24, gruppi da 50), che la pagina ufficiale non conferma. Ora la scheda dice: alcune notti intorno alla luna piena, su prenotazione, regole sul sito ufficiale.
- Udaipur, City Palace: url sostituito (eternalmewar.in → citypalacemuseum.org/planyourvisit). Aggiunte le lingue dell'audioguida.
- Eravikulam: url sostituito, perché eravikulam.org non è ufficiale (→ eravikulamnationalpark.in, gestito dall'Anaimudi Forest Development Agency, con biglietteria online). Chiusura per le nascite dei tahr ora «di solito febbraio-marzo, a volte fino ai primi di aprile». Aggiunte 50 rupie per la macchina fotografica.

**Da ricontrollare con la ricerca web (dati lasciati come erano)**
- Tariffe ASI di Delhi, Sarnath, Mamallapuram e Hampi (circa 600/550 rupie): il sito ASI non mostra i prezzi.
- Prezzi 2026 dei monumenti di Jaipur (Amber 1.000 rupie): il portale del Rajasthan non risponde.
- Regole dei safari di Ranthambore, Kashi Vishwanath (Sugam Darshan), orari di Ranakpur per i non giainisti, data della Nehru Trophy.
- Chiusure di Mattancherry e della sinagoga Paradesi, telefoni vietati nei templi del Tamil Nadu «dal settembre 2026».

**Fonti:** https://www.tajmahal.gov.in/ , https://www.tajmahal.gov.in/ticketing.aspx , https://www.tajmahal.gov.in/visiting-hours.aspx , https://citypalace.org/visit , https://www.mehrangarh.org/visit/ , https://www.citypalacemuseum.org/planyourvisit , https://www.eravikulamnationalpark.in/

## Sri Lanka

Correzioni fatte in `src/content/destinazioni/sri-lanka.ts` e nelle copie en ed es. Ricordi di Rick e `miaEsperienza` non toccati.

Nota: a metà lavoro il limite di ricerche web del turno (condiviso tra gli agenti) si è esaurito. Ho continuato solo con WebFetch su pagine dirette, senza dati a memoria. Non verificati e quindi lasciati com'erano (dati del viaggio 2023): orari di Mihintale, Pidurangala e Dambulla, regole di prenotazione del treno per Ella.

### Corretto
- **Lipton's Seat** (Ella): non è «a due passi dal villaggio», è sopra Haputale (tenuta di Dambatenne), a circa un'ora di strada. Scheda riscritta e programma di 2 giorni aggiornato.
- **Yala**: «il parco con la più alta densità di leopardi al mondo» → «uno dei parchi con la più alta densità» (anche in cosaFare).
- **Tempio del Dente**: biglietto stranieri 3.000 LKR (2026, sito ufficiale; nel 2023 erano 2.000). Aggiunti orari 5:30-20 e cerimonie alle 5:30, 9:30 e 18:30. Valgono solo i biglietti delle macchinette. Aggiunto url ufficiale. Aggiornato anche `costi`.
- **Mihintale**: ingresso 1.000 LKR (2026) al posto di 500 + 50 LKR (2023, tenuto come riferimento).
- **Dambulla Wholesale Market**: «il più grande mercato all'ingrosso dello Sri Lanka» non confermato → «centro della distribuzione di frutta e verdura dell'isola».
- Refuso «Un spettacolo» → «Uno spettacolo» (it).

### Aggiunto
- **Sigiriya**: re Kashyapa (477-495), UNESCO 1982, parete a specchio con graffiti del IX-X secolo, zampe del leone. Biglietto circa 35 USD (marzo 2026, pagato in rupie, museo compreso). Biglietterie CCF aperte dalle 7 alle 17. Url e-ticketing CCF.
- **Anuradhapura e Polonnaruwa**: biglietto del sito circa 30 USD (marzo 2026), biglietteria dalle 7 alle 17, url CCF.
- **Tempio d'Oro di Dambulla**: 153 statue, circa 2.100 m² di pitture, UNESCO 1991, regole di abbigliamento. Biglietto circa 3.000 LKR (2026).
- **Pidurangala**: 1.000 LKR confermato per il 2026.
- **Minneriya**: scheda arricchita (lago artificiale, elefanti in stagione secca) e ingresso circa 25 USD più tasse (dato 2024).
- **Horton Plains/World's End**: quota oltre i 2.000 m, divieto di sacchetti di plastica, ingresso circa 25 USD più tasse (dato 2024).
- **Yala**: ingresso base circa 25 USD più tasse (dato 2024).
- **Nine Arches Bridge**: finito nel 1919, lungo 91 m e alto 24, a Demodara, tra le stazioni di Ella e Demodara.
- **Flying Ravana**: zip line doppia di 550 m da Mini Adam's Peak, url ufficiale.
- **Chiesa di Santa Maria (Negombo)**: finita nel 1922, soffitto con la vita di Cristo dipinto da N.S. Godamanne.

### Verificato e lasciato
Adam's Peak 2.243 m e stagione dicembre-maggio; Kitulgala e *Il ponte sul fiume Kwai*; Gal Vihara (Buddha sdraiato di circa 14 m, XII secolo); Sigiriya alta circa 180 m; World's End 870 m; ETA obbligatorio e gratuito per gli italiani dal 25 maggio 2026.

### Tolto
Niente: i dati non verificati sono quelli del viaggio 2023 e restano datati come tali.

### Fonti principali
- https://sridaladamaligawa.lk/faq/ (orari, cerimonie, biglietti del Tempio del Dente)
- http://eservices.ccf.gov.lk/eticketing/landing (biglietterie CCF dalle 7 alle 17, e-ticket)
- https://tuktukrental.com/sri-lanka-entrance-fees/ (prezzi controllati sul sito CCF a marzo 2026: Sigiriya, Anuradhapura, Polonnaruwa, Dambulla, Mihintale, Pidurangala)
- https://www.sundaytimes.lk/online/news-online/Foreign-tourists-unhappy-over-exorbitant-entrance-fees-at-Sigiriya/2-1144647 (Sigiriya 36 USD con l'IVA, gennaio 2024)
- https://srilankatravelpages.com/ru/entrance-ticket-prices-for-main-tourist-sites-in-sri-lanka (parchi nazionali 25 USD, 2024)
- https://www.theflightclub.it/2026/05/lo-sri-lanka-rende-gratis-il-visto-turistico-per-gli-italiani-resta-obbligatoria-leta-ma-non-si-paga-piu/ (ETA gratuito)
- https://www.flyingravana.com/ (zip line)
- Wikipedia (en): Sigiriya, Gal_Vihara, Dambulla_cave_temple, Dambulla, Nine_Arch_Bridge, Horton_Plains_National_Park, Lipton's_Seat, Yala_National_Park, Kitulgala, Adam's_Peak, St._Mary's_Church,_Negombo

## Maldive

File: `src/content/destinazioni/maldive.ts` e copie `i18n/en` e `i18n/es` (stesse modifiche nelle tre lingue). Ricordi di Rick (`miaEsperienza` e frasi in prima persona su Ukulhas, Dhigurah, Fuvahmulah) non toccati. Il file non ha campi `url`.

### Corretto
- **Mercato del pesce di Malé**: non «mattina presto»; le barche rientrano dal primo pomeriggio. Orari non fissi, il venerdì ritmi ridotti. Corretti anche `cosaVedere` e il programma di 1 giorno.
- **Hukuru Miskiy**: «Seicento» diventa 1658. Per entrare i non musulmani devono chiedere il permesso al personale o al Ministero degli Affari Islamici; tolto «visitabile con abiti coperti».
- **Traghetto aeroporto–Malé**: 10-15 minuti, 15 rufiyaa o 1 $ (2025).
- **Sigarette elettroniche**: tolta la data sbagliata del 12/11/2024. Ora: importazione vietata dal 15/11/2024, possesso e uso dal 15/12/2024. Aggiunto il divieto di tabacco per chi è nato dal 1/1/2007, in vigore dall'1/11/2025 e valido anche per i turisti.
- **Speedboat**: Maafushi 45-90 min, 20-40 $ (prima 30-90 min, 25-40 $); Rasdhoo 40-60 $ (prima 40-70); Dhigurah circa 2 ore, 60-100 $ (prima 1,5-2 ore, 50-70 $).
- **Squali martello di Rasdhoo**: «dicembre-maggio» diventa «dicembre-aprile, picco gennaio-marzo», avvistabili anche nel resto dell'anno.
- **Squalo balena di Ari Sud**: tolta la «finestra più citata dicembre-aprile». Tutto l'anno; secondo Visit Maldives gli avvistamenti sono più numerosi tra agosto e novembre, mentre da dicembre ad aprile il mare è più calmo. La distanza è di 3 m dal corpo e 4 m dalla coda.
- **Hanifaru, `costi`**: tolta la forbice «20-50 $». Ingresso circa 20 $ a persona al giorno, di solito compreso nell'escursione (60-80 $).
- **MTCC**: non verificato il pagamento «solo in contanti». Ora: biglietto solo al terminal il giorno stesso, 30-45 minuti prima, con rufiyaa o dollari di piccolo taglio; quasi mai il venerdì.
- **Volo per Fuvahmulah**: circa 1 ora e 20-25 minuti.

### Tolto
- La data del 12 novembre 2024 per le sigarette elettroniche.
- «Si pagano in contanti» per i traghetti MTCC.
- «Tonni pescati all'alba» al mercato del pesce.

### Aggiunto
- IMUGA: una per persona, bambini compresi, gratuita, solo sul portale ufficiale imuga.immigration.gov.mv perché esistono siti falsi.
- Green tax dal 1/1/2025: 6 $ a persona a notte nelle guesthouse fino a 50 camere, 12 $ nei resort (attenzioni di Malé Sud e Vaavu).
- Schede arricchite: Mercato del pesce, Hukuru Miskiy (costruttore, minareto Munnaaru, cimitero, lista propositiva UNESCO), Fulidhoo (squali nutrice al molo, MTCC 2-3 volte a settimana), Maafushi (MTCC via Gulhi da sabato a giovedì), Hammerhead Point (Madivaru Corner, 25-40 m), squalo balena SAMPA, Hanifaru (UNESCO dal 2011, turni di circa 45 minuti con i ranger, vietati flash e contatto), barriere e thila di Baa, laghi Bandaara Kilhi e Dhadimagi Kilhi e spiaggia di Thoondu.

### Da tenere d'occhio
- Hanifaru: le fonti non concordano su stagione e picco. Restano giugno-novembre e picco agosto-ottobre (PADI); altre fonti dicono maggio-novembre con picco luglio-ottobre. Anche il numero massimo di persone nella baia cambia da fonte a fonte, quindi non l'ho scritto.
- Non ho trovato una tabella ufficiale del 2025-2026 per la tassa di Hanifaru: i 20 $ vengono da guide recenti.
- La tassa di partenza per i turisti è salita a 50 $ in economy (di solito è già nel biglietto). Non l'ho aggiunta.

### Fonti principali
- https://visitmaldives.com/en/experience/fantastic-gentle-giants-and-where-to-find-them
- https://atolls.visitmaldives.com/islands/fuvahmulah/nature-culture/
- https://www.padi.com/dive-site/maldives/hanifaru-bay/
- https://www.cms.int/sites/default/files/publication/Elasmobranch%20Tourism_Factsheets_Hanifaru%20Bay.pdf
- https://kpmg.com/us/en/taxnewsflash/news/2024/11/tnf-maldives-amendments-gst-tourism-act-airport-fees-ratified.html (green tax)
- https://www.plus.mv/?p=112391 (green tax 2025)
- https://presidency.gov.mv/Press/Article/32159 e https://plus.mv/?p=112100 (sigarette elettroniche)
- https://www.timeout.com/asia/news/born-after-2007-its-illegal-for-you-to-smoke-or-vape-in-the-maldives-even-as-a-tourist-110525 (divieto di tabacco per generazione)
- https://imuga.immigration.gov.mv e https://velana.macl.aero/guide/arrival (IMUGA)
- https://edition.mv/news/41158 (portali IMUGA falsi)
- https://amaldives.com/blog/maldives-public-ferry-guide-2026 (MTCC e traghetto aeroporto)
- https://www.cestee.com/airport/male-mle/transport (traghetto aeroporto 15 MVR)
- https://resortlife.travel/dive-sites/hammerhead-point-rasdhoo (Hammerhead Point)
- https://www.flightconnections.com/flights-from-mle-to-fvm (volo per Fuvahmulah)
- https://www.lonelyplanet.com/points-of-interest/old-friday-mosque/1440615 (Hukuru Miskiy)

## Filippine

File: `src/content/destinazioni/filippine.ts` e copie `i18n/en` e `i18n/es` (39 correzioni identiche nelle tre lingue). Nessun `url` presente nelle schede, quindi niente da aprire. Ricordi di Rick non toccati (nessun `miaEsperienza`). `npx tsc --noEmit`: nessun errore nei file Filippine (gli errori segnalati sono in `francia.ts`, di un altro agente).

Nota: il budget di ricerche web si è esaurito a fine lavoro. Per questo due arricchimenti (Pescador, chiese di Loboc e Baclayon) sono rimasti senza dati precisi come tasse o date, e non ho aggiunto fatti non verificati.

### Corretto
- **El Nido, Tour A**: la Small Lagoon dal 2018 sta nel Tour D e non si può visitare lo stesso giorno della Big Lagoon. Rinominato in «Tour A: Big Lagoon, Secret Lagoon e Shimizu»; corretti anche `cosaVedere` e il programma di 3 giorni.
- **El Nido, Big Lagoon**: fasce orarie dalle 7 alle 16, massimo 60 persone e 30 kayak per fascia, prenotate dalle agenzie. Kayak 300-400 PHP per kayak doppio (non 150-200 a persona). Tour A 1.200-1.500 PHP; ETDF 400 PHP valida 10 giorni (confermata).
- **El Nido, arrivo**: dal 29 marzo 2026 i voli per Lio (ora Cebgo, ex AirSwift, dal 1° luglio 2026) partono da Clark e non da Manila; ci sono rotte anche da Cebu, Coron, Caticlan e Bohol. Van da Puerto Princesa 720-790 PHP.
- **El Nido, Nacpan**: tricycle 700-1.500 PHP a mezzo con attesa; spiaggia gratuita.
- **Coron**: Kayangan 300 PHP (non 300-400), oltre 150 gradini; Barracuda 200-250 PHP. Termoclino a circa 14 m, da circa 28 a circa 38 °C (prima «oltre 35 gradi»). Relitti affondati il 24 settembre 1944 dalle portaerei USA. Tapyas «oltre 700 gradini»; Maquinit 150-200 PHP (non 300). Gli ingressi si pagano solo in contanti. Voli anche da Clark.
- **Moalboal/Kawasan**: canyoning 2.000-3.000 PHP (prima 1.500-2.500); alcuni pacchetti escludono ingressi e transfer.
- **Taxi a NAIA**: riformulato. Non è vero che i taxi bianchi siano «senza tassametro»: sono taxi con tassametro che spesso non lo accendono. Consigliati Grab dalla zona di ritiro, i taxi gialli o i taxi a coupon del banco ufficiale.
- **Bohol, Chocolate Hills**: 1.776 colline (Proclamation 1037 del 1997), non un generico «oltre mille»; 214 gradini; Carmen a circa 55 km da Tagbilaran. Ingresso 100-150 PHP: l'aumento a 150 PHP previsto per ottobre 2025 è sospeso.
- **Bohol, traghetto**: la nota sul supplemento carburante 2026 è confermata. Aggiunte le cifre (classe turistica OceanJet tra 880 e 1.000 PHP) e le corse cancellate ad aprile 2026.
- **Siargao, arrivo**: da Manila non ci sono più voli diretti. Sayak (a Del Carmen) è servito da Cebu, Clark e Davao; van per General Luna circa 300 PHP.
- **Siargao, island hopping**: 1.000-2.000 PHP a persona nei tour condivisi, barca privata 3.000-4.000 PHP.
- **Siargao, ATM**: commissione circa 250 PHP a prelievo con carta estera (BDO), non «250-500».

### Tolto
- **Taraw Cliff**: tolta la salita alla cima con guida. Dopo gli incidenti la DENR non ha autorizzato guide né operatori. Al suo posto la Canopy Walk / El Nido Via Ferrata (400-450 PHP).
- **Tarsier Sanctuary di Corella**: tolta la cifra 100-200 PHP. Le fonti danno da 60 a 170 PHP e manca un listino ufficiale, quindi ora la scheda dice «80-150 PHP secondo le fonti, verificare sul posto».

### Aggiunto
- **eTravel** (nelle attenzioni di Cebu, la scheda con la nota sull'aeroporto di Manila): modulo gratuito su etravel.gov.ph da compilare entro le 72 ore prima dell'arrivo; i siti a pagamento non sono ufficiali.
- Schede arricchite: Pescador Island, White Beach (Basdaku), fiume Loboc e chiese, laguna di Sugba (solo in barca tra le mangrovie, piattaforma per i tuffi), Magpupungko (Pilar, costa est), Coconut Road, consiglio sui Tour B e D di El Nido.
- Anno 2026 sui prezzi indicativi dove mancava.

### Fonti principali
- https://suroy.ph/el-nido-travel-guide/ (ETDF, tour, Big Lagoon, voli Clark, Taraw/Canopy Walk; aggiornata al 1° novembre 2026)
- https://ch-aviation.com/news/163065-cebu-pacific-to-end-manila-turboprop-flights-in-late-1q26 e https://mb.com.ph/2026/06/15/cebu-pacific-finishes-buying-airswift-moves-flights-under-cebgo
- https://palawandailynews.com/provincial-news/denr-tells-el-nido-lgu-monitor-taraw-cliff-tourists-and-mountaineers
- https://theworldtravelguy.com/el-nido-tour-d-palawan-island-hopping-beaches-lagoons/ (Small Lagoon nel Tour D)
- https://lakbaypinas.com/?p=18409 e https://backpackingislife.com/?p=3877 (ingressi di Coron)
- https://pacificwrecks.com/location/philippines_coron_bay.html (relitti, 24/9/1944)
- https://dive.site/explore/site/barracuda-lake-5LBK (termoclino del Barracuda)
- https://suroy.ph/chocholate-hills-bohol/ e https://boholislandnews.com/2025/09/18/fee-hike-at-chocolate-hills-sparks-concern-gov-aumentado-appeals-for-status-quo/
- https://boholislandnews.com/2026/04/08/oceanjet-imposes-10-fuel-surcharge-tagbilaran-routes-affected/ e https://pamasahe.com/posts/oceanjet-announces-lower-fares-following-fuel-surcharge-reduction-effective-july-10
- https://suroy.ph/how-to-get-to-siargao/ (voli per Sayak, aggiornata al 28 ottobre 2026)
- https://www.bdo.com.ph/personal/digitalbanking/atm-banking (commissione di 250 PHP per carte estere)
- https://londonpe.dfa.gov.ph/advisories/1592-implementation-of-e-travel-system e https://gmanetwork.com/news/topstories/nation/890655/etravel-registration-what-where-and-how/story (eTravel)
- https://www.thetraveler.org/manila-naia-airport-taxi-guide-yellow-coupon-scams/ e https://visor.ph/traffic/taxi-scams-are-alive-and-well-at-naia-sadly/ (taxi a NAIA)

