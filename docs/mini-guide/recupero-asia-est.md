# Recupero dati — gruppo asia-est (Cina, Giappone, Corea del Sud)

Quarto giro, 5 novembre 2026. File toccati: `src/content/destinazioni/{cina,giappone,corea-del-sud}.ts` e le copie
`src/content/i18n/en|es/destinazioni/`. Solo campi `luoghi` e `attenzioni`. Ricordi di Rick e `consigliati.ts` non toccati.
`npx tsc --noEmit`: nessun errore nei tre Paesi (gli errori rimasti sono in `estonia.ts`, file di un altro agente).

## Giappone (22 dati rimessi o corretti)

| Dato rimesso | Fonte |
|---|---|
| Senso-ji: il tempio più antico di Tokyo secondo la tradizione, origini nel 628 | https://www.senso-ji.jp/about/ , https://en.wikipedia.org/wiki/Sensō-ji |
| Meiji Jingu: inaugurato nel 1920 | https://www.meijijingu.or.jp/en/about/ |
| Meiji Jingu: bosco di circa 120.000 alberi donati da tutto il Giappone (prima c'era scritto 100.000, corretto) | https://en.wikipedia.org/wiki/Meiji_Shrine |
| Shinjuku Gyoen: 58 ettari; si arriva anche con la JR fino a Sendagaya | https://en.wikipedia.org/wiki/Shinjuku_Gyoen |
| Golden Gai: sei vicoli, oltre duecento bar e locali | https://en.wikipedia.org/wiki/Golden_Gai |
| Tsukiji: mercato all'ingrosso spostato a Toyosu nel 2018 | https://en.wikipedia.org/wiki/Tsukiji_fish_market |
| Kotoku-in: statua del 1252 circa, alta circa 13 m con il basamento (prima c'era scritto 11 m, corretto); padiglione spazzato via dallo tsunami del 1498 | https://en.wikipedia.org/wiki/Kōtoku-in |
| Engaku-ji: fondato nel 1282 | https://en.wikipedia.org/wiki/Engaku-ji |
| Kencho-ji: completato nel 1253, primo dei cinque grandi templi zen di Kamakura | https://en.wikipedia.org/wiki/Kenchō-ji |
| Shichirigahama: stazione omonima dell'Enoden | https://en.wikipedia.org/wiki/Shichirigahama_Station |
| Chureito: 398 gradini (testo e attenzioni), circa 10 minuti a piedi da Shimoyoshida (prima c'era scritto 15, corretto) | https://en.wikipedia.org/wiki/Arakurayama_Sengen_Park |
| Kinkaku-ji: originale di fine Trecento, incendio doloso nel 1950, ricostruzione del 1955 | https://en.wikipedia.org/wiki/Kinkaku-ji |
| Kiyomizu-dera: fondato nel 778, sala principale senza un chiodo | https://en.wikipedia.org/wiki/Kiyomizu-dera |
| Kiyomizu-dera: aperture serali 2026 fino alle 21.30 (27/3-5/4, 14-16/8, 21-30/11) | https://www.kiyomizudera.or.jp/en/ |
| Sentiero del Filosofo: circa mezz'ora di cammino (al posto dei «2 km», non confermati) | https://en.wikipedia.org/wiki/Philosopher%27s_Walk |
| Mercato Nishiki: circa 390 metri (prima c'era scritto 400) | https://www.kyoto-nishiki.or.jp/ |
| Himeji: UNESCO dal 1993; mastio di sei piani più seminterrato | https://en.wikipedia.org/wiki/Himeji_Castle |
| Kokoen: nove giardini | https://en.wikipedia.org/wiki/Kōko-en |
| Castello di Osaka: ricostruito in cemento nel 1931 | https://www.osakacastle.net/english/ |
| Tsutenkaku: la prima torre è del 1912, quella di oggi del 1956 | https://en.wikipedia.org/wiki/Tsūtenkaku |
| Todaiji: Buddha alto circa 15 m (14,98), completato nel 751; fino al 1998 il più grande edificio di legno del mondo | https://en.wikipedia.org/wiki/Tōdai-ji |
| Kasuga Taisha: oltre tremila lanterne, tutte accese il 3 febbraio e il 14-15 agosto | https://en.wikipedia.org/wiki/Kasuga-taisha |

**Non confermati (lasciati come sono):** apertura del Kiyomizu alle 6, biglietto-amuleto del Kinkaku-ji, uscita Electric Town e
via pedonale della domenica ad Akihabara (Wikipedia dice che la chiusura domenicale fu sospesa nel 2008), stazione Kudanshita per
Chidorigafuchi, linee 2 e 6 del tram di Hiroshima (la mappa di hiroden.co.jp è solo un'immagine), durata del traghetto per Miyajima,
osservatorio all'ottavo piano del castello di Osaka, giorni di chiusura di Tsukiji, Hoppy Street, prenotazione di Shibuya Sky,
Tombori River Cruise, nomi dei locali (MoMo Paradise, Gyozaro, Menbaka), tempi a piedi e di treno.

## Cina (8 dati rimessi o corretti)

| Dato rimesso | Fonte |
|---|---|
| Città Proibita: i biglietti escono 7 giorni prima, alle 20 ora di Pechino (in `quando` e in `attenzioni`) | https://english.beijing.gov.cn/latest/news/202306/t20230629_3150036.html |
| Città Proibita: all'ingresso serve l'originale del passaporto usato per prenotare | stessa fonte |
| Parco del Popolo di Chengdu: la casa da tè Heming, centenaria | https://en.wikipedia.org/wiki/People%27s_Park_(Chengdu) |
| Lijiang a circa 2.400 metri (attenzioni) | https://en.wikipedia.org/wiki/Lijiang |
| Baisha: circa 15 km a nord di Lijiang (prima c'era scritto 8-10 km, corretto) | https://en.wikipedia.org/wiki/Lijiang |
| Ponte del Drago di Giada (Yulong): ponte di pietra di circa 400 anni (al posto di «epoca Ming», non confermata) | https://en.wikipedia.org/wiki/Yulong_River |
| Star Ferry: molo 7 di Central | https://en.wikipedia.org/wiki/Star_Ferry |
| Tempio di Man Mo: del 1847, il più grande di Hong Kong dedicato a Man e Mo (al posto di «uno dei più antichi», non confermato) | https://en.wikipedia.org/wiki/Man_Mo_Temple |

**Non confermati (lasciati come sono):** prezzo della Shanghai Tower (il sito ufficiale non mostra tariffe), prenotazione
giornaliera di Zhangjiajie, viale Datang Everbright City (Wikipedia cita solo le fontane della piazza nord), casa da tè di Wenshu,
«mercato matrimoniale» del Parco del Popolo, case Tujia, cascata di 60 m e 2.000 anni di Furong, piazza Sifang, Shuhe, ascensore
di Wulong, tempo del treno Lijiang-Shangri-La, bus 15 per il Peak, durata dello Star Ferry, navette di Cotai, tempi di viaggio.

## Corea del Sud (4 dati rimessi)

| Dato rimesso | Fonte |
|---|---|
| Jagalchi: considerato il più grande mercato del pesce della Corea del Sud | https://en.wikipedia.org/wiki/Jagalchi_Market |
| Mercato di Nambu: Youth Mall al secondo piano, negozi con orari diversi | https://tour.jeonju.go.kr/index.jeonju?menuCd=DOM_000000104002005000 |
| Mercato di Nambu: c'è anche un mercato notturno (giorni non indicati, quindi non rimessi «venerdì e sabato») | https://tour.jeonju.go.kr/index.jeonju?menuCd=DOM_000000104002001000 |
| Nuovo: all'alba, dalle 4 alle 10 circa, mercato contadino Dokkaebi lungo il torrente | stessa fonte |

**Non confermati (lasciati come sono):** cambio della guardia davanti a Gwanghwamun (Wikipedia non indica il luogo), ristoranti al
piano di sopra di Jagalchi, ingresso libero di Haedong Yonggungsa (solo fonti terze; yongkungsa.or.kr non risponde), giorni del
mercato notturno di Nambu, chiusura del lunedì del Terzo Tunnel (la pagina di dmz.go.kr oggi dà 404; la conferma arriva solo da
una ricerca), barca per Buyongdae (hahoe.or.kr non risponde), dimostrazione delle haenyeo a Seongsan (solo fonti di tour operator),
1380 di Omokdae, gradini e tempi di Ulsanbawi, tariffa della gaetbae, tempi di bus e treni.
