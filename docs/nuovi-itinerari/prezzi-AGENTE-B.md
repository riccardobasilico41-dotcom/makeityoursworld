# Agente B — correzioni prezzi da applicare agli overlay (verifica del 30/10/2026)

Articoli .md già aggiornati: 70 Montenegro, 71 Egitto mare, 72 Egitto completo, 73 Turchia, 74 Filippine, 75 California.
Qui sotto solo le modifiche ai file `src/content/viaggi-dati/*.ts`, nel formato **campo: testo vecchio → testo nuovo** (stringhe come scritte nel sorgente, apici già escapati).

## montenegro-itinerario.ts
- Giorno 4, costiNoti: `'Parco nazionale e mausoleo pochi euro ciascuno'` → `'Parco nazionale 3 €, mausoleo di Njegoš circa 8 € a parte'`
- Giorno 6, costiNoti: invariato (`Parco nazionale circa 5 €` confermato dal listino nparkovi.me)
- Giorno 8, costiNoti: invariato (Durmitor 5 € confermato)
- budget, «Auto a noleggio»: `'30-60 € al giorno in estate; supplemento per l\'uscita dal paese 40-100 € a noleggio'` → `'30-60 € al giorno in estate; supplemento per l\'uscita dal paese 30-60 € a noleggio, fino a 100 € per l\'Albania'`
- budget, «Ingressi»: `'mura di Kotor circa 15 €; parchi nazionali circa 5 € ciascuno; mausoleo di Njegoš pochi euro'` → `'mura di Kotor circa 15 €; parchi nazionali 3-5 € ciascuno; mausoleo di Njegoš circa 8 €'`
- budget, «Tassa di soggiorno»: `'circa 1-1,5 € a persona a notte'` → `'circa 1 € a persona a notte, secondo il comune; gratis sotto i 12 anni'`
- criticita, voce noleggio: `'L\'uscita dal paese con l\'auto a noleggio richiede autorizzazione scritta e carta verde, con un supplemento'` → `'L\'uscita dal paese con l\'auto a noleggio richiede autorizzazione scritta, carta verde e libretto in originale, con un supplemento'`
- (facoltativo) criticita, nuova voce: `'La carta d\'identità elettronica vale solo per soggiorni fino a 30 giorni; nell\'estate 2026 nessun traghetto diretto dall\'Italia'`

## egitto-mare-luxor-cairo.ts
- Giorno 1, costiNoti: `'visto all\'arrivo 25 $'` → `'visto all\'arrivo 30 $'`
- Giorno 2, costiNoti: `'Giza circa 700 EGP, interno di Cheope circa 1.500 EGP, GEM circa 1.830 EGP'` → `'Giza 700 EGP, interno di Cheope circa 1.500 EGP, GEM 1.830 EGP (circa 35 $)'`
- Giorno 3, costiNoti: `'autista 30-50 $, Saqqara circa 450-600 EGP, Dahshur intorno ai 150-200 EGP'` → `'autista 30-50 $, Saqqara 600 EGP, Dahshur 200 EGP'`
- Giorno 4, costiNoti: `'Cittadella circa 550 EGP, volo 60-120 €, tempio di Luxor circa 500 EGP'` → `'Cittadella 550 EGP, volo 60-120 €, tempio di Luxor 500 EGP'`
- Giorno 5, costiNoti: `'Valle dei Re circa 750 EGP, Tutankhamon circa 700, Hatshepsut circa 440; autista 25-40 $'` → `'Valle dei Re 750 EGP, Tutankhamon circa 700, Hatshepsut 440, Medinet Habu 220; autista 25-40 $'`
- Giorno 6, costiNoti: `'mongolfiera 50-100 $, Karnak circa 600 EGP'` → `'mongolfiera 50-100 $, Karnak 600 EGP'`
- Giorno 7, costiNoti: `'auto privata 100-150 $, tempio di Edfu circa 450-550 EGP'` → `'auto privata 100-150 $, tempio di Edfu 550 EGP'`
- budget, «Visto turistico»: `'25 $ all\'arrivo o come e-visa ufficiale'` → `'30 $ all\'arrivo (dal 1° marzo 2026) o come e-visa ufficiale'`
- budget, «Biglietti dei siti»: `'150-220 € a persona, 40-50 € in più con Seti I e l\'interno di Cheope'` → `'120-160 € a persona, 55-60 € in più con Seti I e l\'interno di Cheope'`
- criticita, prima voce: `'Prezzi dei biglietti aumentati più volte dal 2024: tra GEM, Giza e Luxor si superano facilmente i 150 € a persona solo di ingressi'` → `'Prezzi dei biglietti aumentati più volte dal 2024: tra GEM, Giza e Luxor si arriva a 120-160 € a persona solo di ingressi, solo con carta'`
- budgetTotale: invariato

## egitto-completo.ts
- Giorno 1, costiNoti: `'visto 25 $'` → `'visto 30 $'`
- Giorno 2, costiNoti: `'Giza circa 700 EGP, Cheope interno circa 1.500 EGP, GEM circa 1.830 EGP'` → `'Giza 700 EGP, Cheope interno circa 1.500 EGP, GEM 1.830 EGP (circa 35 $)'`
- Giorno 3, costiNoti: `'autista 30-50 $, Saqqara circa 450-600 EGP, Dahshur intorno ai 150-200 EGP'` → `'autista 30-50 $, Saqqara 600 EGP, Dahshur 200 EGP, Menfi 200 EGP'`
- Giorno 4, costiNoti: `'Cittadella e Museo Egizio circa 550 EGP ciascuno'` → `'Cittadella e Museo Egizio 550 EGP ciascuno'`
- Giorno 11, costiNoti: `'Abu Simbel 750-850 EGP, minivan condiviso 20-35 $'` → `'Abu Simbel 822 EGP (1.272 EGP il 22 febbraio e il 22 ottobre), minivan condiviso 20-35 $'`
- Giorno 12, costiNoti: `'Philae circa 550 EGP più barca, crociera 3 notti 400-1.000 $'` → `'Philae 550 EGP più barca, crociera 3 notti 400-1.000 $'`
- Giorno 13, costiNoti: `'templi spesso inclusi nel pacchetto'` → `'Kom Ombo 450 EGP, Edfu 550 EGP, spesso inclusi nel pacchetto'`
- Giorno 14, costiNoti: `'Karnak circa 600 EGP, tempio di Luxor circa 500 EGP'` → `'Karnak 600 EGP, tempio di Luxor 500 EGP'`
- Giorno 15, costiNoti: `'Valle dei Re circa 750 EGP, Nefertari intorno ai 2.000 EGP'` → `'Valle dei Re 750 EGP, Seti I circa 2.000 EGP; tomba di Nefertari spesso chiusa nel 2026, da verificare sul posto'`
- Giorno 16, costiNoti: `'mongolfiera 50-100 $, Medinet Habu circa 300 EGP'` → `'mongolfiera 50-100 $, Medinet Habu 220 EGP'`
- Giorno 17, costiNoti: `'autista 80-120 $, Dendera circa 450 EGP'` → `'autista 80-120 $, Dendera 300 EGP, Abydos 260 EGP'`
- Giorno 10, tratta: `'Cairo → Assuan, volo di 1h25 (o treno notte)'` → `'Cairo → Assuan, volo di 1h25 (o treno notte Abela da Giza, 13-14 ore)'` (facoltativo)
- budget, «Visto»: `'25 $'` → `'30 $'`
- budget, «Biglietti dei siti»: `'280-400 € a persona, 70-90 € in più con Nefertari, Seti I e Cheope interno'` → `'180-240 € a persona, 55-60 € in più con Seti I e Cheope interno (Nefertari a parte, se aperta)'`
- criticita, prima voce: `'Biglietti dei siti cari e in continuo aumento: 280-400 € a persona solo di ingressi, di più con le tombe a pagamento'` → `'Biglietti dei siti cari e in continuo aumento: 180-240 € a persona solo di ingressi, di più con le tombe a pagamento'`
- budgetTotale: `'indicativamente 2.400-3.600 € a persona in due, voli internazionali esclusi'` → `'indicativamente 2.300-3.500 € a persona in due, voli internazionali esclusi'`
- puntiForti: `'Le tombe dipinte di Nefertari, Seti I e Deir el-Medina'` → `'Le tombe dipinte di Seti I e Deir el-Medina, e Nefertari se è aperta'` (la tomba risulta spesso chiusa nel 2026)

## turchia-itinerario.ts
- criticita (riga 31): `'Mongolfiera costosa (180-350 €) e soggetta ad annullamenti per vento: serve un giorno di riserva'` → `'Mongolfiera costosa (150-350 €) e soggetta ad annullamenti per vento: serve un giorno di riserva'`
- Giorno 2, costiNoti: `'Santa Sofia 25 €, Cisterna indicativamente 25-35 €'` → `'Santa Sofia 25 €, Cisterna circa 1.950-2.250 lire di giorno (35-40 €), 3.000 lire la sera'`
- Giorno 3, costiNoti: `'Topkapı con harem intorno ai 50 €'` → `'Topkapı con harem 2.750 lire (circa 50 €), chiuso il martedì'`
- Giorno 4, costiNoti: `'traghetti con l\'Istanbulkart, torre di Galata intorno ai 30 €'` → `'traghetto lungo del Bosforo circa 320 lire A/R (10.35 da Eminönü), traghetti brevi con l\'Istanbulkart, torre di Galata 30 €'`
- Giorno 6, costiNoti: `'mongolfiera 180-350 €, museo all\'aperto intorno ai 20-25 €'` → `'mongolfiera 150-350 €, museo all\'aperto 20 €'`
- Giorno 7, costiNoti: `'Derinkuyu intorno ai 15-20 €, bus notturno 20-35 €'` → `'Derinkuyu 13 €, bus notturno 20-35 €'`
- Giorno 8, costiNoti: `'Pamukkale-Hierapolis intorno ai 30 €, piscina antica 10-15 €'` → `'Pamukkale-Hierapolis 30 €, piscina antica indicativamente 6-13 €'`
- Giorno 9, costiNoti: `'Afrodisia intorno ai 15-20 €'` → `'Afrodisia 12 €, basilica di San Giovanni 6 €'`
- Giorno 10, costiNoti: `'Efeso intorno ai 40 €, case a terrazza intorno ai 15 €'` → `'Efeso 40 €, case a terrazza 15 € a parte'`
- Giorno 13, costiNoti: `'Saklıkent e Patara intorno ai 5-15 € ciascuno'` → `'Saklıkent intorno ai 5-10 €, Patara 15 €'`
- Giorno 15: nessun costiNoti; facoltativo aggiungere `costiNoti: 'Myra 13 €, chiesa di San Nicola 17 €'`
- Giorno 16, costiNoti: `'museo archeologico intorno ai 15-20 €'` → `'museo archeologico chiuso per ricostruzione dal 2025 (riapertura annunciata entro fine 2026)'`
- budget (riga 71): `'230-320 € a persona'` → `'280-380 € a persona'`
- budget (riga 72): `'180-350 € a persona'` → `'150-350 € a persona'`
- budgetTotale: invariato

## filippine-itinerario.ts
- Giorno 3, costiNoti: `'Tour A 1.400-1.900 PHP più ingressi'` → `'Tour A 1.200-1.800 PHP, Big Lagoon circa 200 PHP e kayak 150-200 PHP a parte'`
- Giorno 4, costiNoti: `'Tour C 1.600-2.000 PHP, tricycle per Nacpan 1.000-1.500 PHP'` → `'Tour C 1.400-1.800 PHP, tricycle per Nacpan 1.000-1.500 PHP'`
- Giorno 5, costiNoti: `'traghetto 1.800-2.800 PHP'` → `'traghetto 1.800-3.500 PHP'`
- Giorno 6, costiNoti: `'tour 1.500-2.500 PHP più ingressi'` → `'tour 1.500-2.500 PHP più ingressi (Kayangan circa 300 PHP, Twin Lagoon circa 200 PHP, Barracuda 150-250 PHP)'`
- Giorno 11, tratta: `'Moalboal → Cebu → Tagbilaran (OceanJet, 2 ore) → Panglao'` → `'Moalboal → Cebu → Tagbilaran (OceanJet, 2 ore) → Panglao; in alternativa Oslob → Panglao in bangka'`
- Giorno 11, costiNoti: `'OceanJet 800-1.200 PHP'` → `'OceanJet 900-1.000 PHP in classe turistica (business 1.400-1.550 PHP); bangka Oslob-Panglao circa 1.000 PHP'`
- Giorno 14, tratta: `'Bohol o Cebu → Siargao, volo quasi sempre con scalo a Cebu'` → `'Bohol → Cebu → Siargao: nessun volo diretto da Panglao, circa 1 ora da Cebu'`
- criticita (facoltativo): `'Quattro voli interni low cost con orari che cambiano e bagaglio a parte'` → `'Quattro voli interni low cost con orari che cambiano e bagaglio a parte; per Siargao sempre scalo a Cebu'`

## california-road-trip.ts
- Giorno 1, costiNoti (riga 52): `'ESTA 40,27 $, BART 10-12 $'` → `'ESTA 40,62 $, BART 10-12 $'`
- Giorno 2, costiNoti (riga 53): `'Alcatraz 45-50 $, bicicletta 30-50 $'` → `'Alcatraz circa 48 $, bicicletta 30-50 $'`
- Giorno 3, costiNoti (riga 54): `'Muir Woods 15 $ più prenotazione, funicolare 8 $'` → `'Muir Woods 15 $ a persona più prenotazione, funicolare 9 $'`
- Giorno 13, costiNoti (riga 64): `'funivia 30-35 $, parcheggio hotel 35-60 $'` → `'funivia 35-40 $, parcheggio hotel 35-60 $'`
- Giorno 16, costiNoti (riga 67): `'Hearst Castle 30-35 $'` → `'Hearst Castle 35 $'`
- Giorno 18, costiNoti (riga 69): `'acquario intorno ai 60 $, 17-Mile Drive 12 $'` → `'acquario intorno ai 65 $, 17-Mile Drive 12,50 $'`
- budget, «ESTA» (riga 74): `'40,27 $ a persona'` → `'40,62 $ a persona'`
- Righe 31 (supplemento 100 $ e pass 250 $), 33, 55, 60, 63, 65, 68, 77: corrette così.
