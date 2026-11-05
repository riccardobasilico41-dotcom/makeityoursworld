# Verifica viaggi nuovi Asia (Giappone, Thailandia, Indonesia)

Verifica del 5 novembre 2026, con le regole di `docs/mini-guide/VERIFICA-2.md` («solo cose sicure»): ogni
numero, orario, prezzo o regola senza fonte è stato tolto o reso generico. Le modifiche sono in it, en ed es
(markdown, viaggi-dati, schede destinazione). Le intestazioni «### Giorno N — …» non sono cambiate.
Controlli finali: `npx tsc --noEmit` senza errori; `python3 tools/controlla-md-i18n.py en|es` segnala solo
`09-florida-road-trip.md` (manca «Periodo del viaggio»), che non fa parte di questo lavoro.

| Viaggio | Stato |
|---|---|
| 91 classic-japan | INCOMPLETO |
| 92 okinawa-estate | INCOMPLETO |
| 93 hokkaido-sci-giappone | INCOMPLETO |
| 94 thailandia-nord | INCOMPLETO |
| 84 bali-nusa-komodo | INCOMPLETO |
| 85 bali-sulawesi-raja-ampat | INCOMPLETO |
| 86 indonesia-isola-per-isola | INCOMPLETO |

Ogni viaggio ha ancora qualche frase descrittiva senza una fonte puntuale, anche se non contiene numeri. Per
ognuno l'elenco è sotto «Perché INCOMPLETO».

---

## Giappone

### 91 · Classic Japan (md, dati, schede magome-tsumago, matsumoto-kamikochi, takayama, shirakawa-go, kanazawa, koya-san)

**Corretto o tolto:**
- **Tempi dei treni scritti «da conoscenza generale», tolti:**
  - Nagiso-Matsumoto «circa un'ora e mezza»: ora «il treno della linea Chuo».
  - Kanazawa-Kyoto «circa due ore»: ora «con un cambio a Tsuruga».
  - Kyoto-Nara «circa un'ora».
  - Shin-Osaka-Hiroshima «circa un'ora e mezza».
  - Miyajima-Tokyo «circa quattro ore»: ora «un viaggio lungo».
- **Bus Nohi:**
  - Tolti i prezzi 2.800/2.900 yen: la pagina ufficiale non li riporta.
  - Tolto «circa un'ora» per Takayama-Shirakawa-go. Ora: «poco più di due ore per l'intera tratta fino a Kanazawa», alcune corse su prenotazione, prezzi sul sito Nohi.
  - Tolto «Hokutetsu» dai dati.
- **Bus per Kamikochi:** la navetta di Kamikochi non richiede prenotazione. Su prenotazione è il diretto Matsumoto-Takayama. Corretti la scheda pratica, i consigli, le criticità e gli errori da evitare della scheda.
- **Tsumago:**
  - Tolto «senza fili elettrici in vista», non confermato. Ora: restaurato e tutelato dagli abitanti dal 1968.
  - Tolto «50 minuti a piedi» da Nagiso: diventa «circa un'ora».
  - Tolti «segnalato anche in inglese», «due cascate» e il consiglio sulle campanelle per gli orsi.
- **Shirakawa-go:**
  - Tolto il divieto di droni e «i cestini quasi non ci sono».
  - Tolti i 20 minuti e la navetta per il belvedere.
  - «Oltre cento case gasshō» diventa «oltre cento edifici gasshō», come sul sito ufficiale.
- **Kōya-san:**
  - Tolto «una cinquantina di shukubō», ora «molti offrono alloggio».
  - Tolte le «sere delle lanterne a inizio ottobre».
  - Il divieto di fotografare oltre il Gobyobashi, non confermato, diventa «regole precise, anche sulle foto: seguire i cartelli».
  - Okunoin: oltre 2 km e oltre 200.000 tombe, il cimitero più grande del Giappone.
- **Castello di Matsumoto:** tolti «periodo Sengoku», «uno dei cinque castelli Tesoro nazionale» e «20 minuti a piedi». Ora: mastio di fine Cinquecento con gli interni originali, Tesoro nazionale.
- **Kamikochi:**
  - Tolti i tempi di cammino (1,5-2 ore e 4 ore), ora «mezza giornata, una giornata con Myojin».
  - Tolta la frase sugli orsi.
- **Takayama:**
  - Festival con le date (14-15 aprile, 9-10 ottobre).
  - Tolti i «30 minuti a piedi» per il Folk Village.
- **Kanazawa:** tolto «tra i musei più visitati del paese».

**Confermato:**
- JR Pass 50.000/80.000/100.000 yen online, 53.000/84.000/105.000 da agenzia.
- Biglietto Nozomi Tokyo-Kyoto: 4.960 yen.
- Magome-Tsumago:
  - 8 km, 2-3 ore, passo a 790 m;
  - servizio bagagli da fine marzo a fine novembre: consegna 8.30-11.30, ritiro dopo le 13, 1.000 yen a collo.
- Kamikochi:
  - navetta dal 17 aprile al 15 novembre 2026;
  - auto vietate tutto l'anno;
  - quota 1.400-1.600 m;
  - stagno di Taisho nato dall'eruzione del Yake del 1915.
- Shirakawa-go: UNESCO 1995; illuminazioni 2027 l'11, 17, 24 e 31 gennaio; alloggi a sorteggio.
- Kōya-san: circa 120 templi; Kūkai dall'819.
- Kanazawa risparmiata dai bombardamenti; Kenroku-en tra i tre grandi giardini.

**Fonti:**
- https://japanrailpass.net/en/purchase/price/
- https://japanrailpass.net/en/use/special-ticket/
- https://www.go-nagano.net/en/theme/id=16492
- https://www.japan-guide.com/e/e6078.html
- https://shirakawa-go.gr.jp/en/
- https://www.nouhibus.co.jp/english/highwaybus/
- https://www.nouhibus.co.jp/route_bus/kamikochi-line-en/
- Wikipedia en: Kamikōchi, Matsumoto_Castle, Tsumago-juku, Takayama_Festival, Kanazawa, Okunoin, Mount_Kōya.

**Perché INCOMPLETO:**
- Ancora generici: Hakone Freepass, stato della funicolare di Kōya-san, traghetto JR per Miyajima compreso nel pass.
- Senza fonte puntuale, perché non ho trovato una pagina che le confermi:
  - le corde yukitsuri del Kenroku-en;
  - la sfera di cedro dei birrifici di Takayama;
  - la casa Wada a Shirakawa-go.

### 92 · Okinawa d'estate (md, dati, schede okinawa-naha, isole-kerama, miyako, ishigaki-yaeyama)

**Corretto o tolto:**
- **Distanza e voli:** tolto «da Ishigaki a Tokyo quasi duemila chilometri» e tolti i tempi di volo Naha-Miyako (50 minuti) e Miyako-Ishigaki (30 minuti).
- **Castello di Shuri:** aggiunto che la fine della ricostruzione del Seiden è prevista per l'autunno 2026, con l'invito a controllare lo stato sul sito del parco. Aggiunto UNESCO 2000 nella scheda.
- **Yanbaru:** UNESCO «con Amami, Tokunoshima e Iriomote». Prima mancava Tokunoshima.
- **Ponte di Irabu:** 3.540 m confermato, come lo chiedeva l'autore.
- **Yonaha Maehama:** tolti «una delle spiagge più lunghe del Giappone», «diversi chilometri» e «di fronte a Kurima».
- **Kabira:** il divieto di balneazione non è confermato, tolto, insieme alla spiaggia di Sukuji. Ora: nella baia si coltivano le perle nere e passano le barche, e chi vuole fare il bagno chiede sul posto.
- **Iriomote e Taketomi:**
  - Tolti tutti i prezzi e i tempi dei traghetti: il sito della compagnia non era raggiungibile.
  - Pinaisara: «registrazione e tassa» diventa «permesso d'ingresso». Diversi operatori concordano, ma non c'è una fonte ufficiale; tolte le cifre (200 persone al giorno, 500 yen).
- **Megattere:** «da gennaio a marzo» diventa «in inverno e a inizio primavera», come su Wikipedia.
- **Tempi più generici:**
  - tifoni: «due o tre giorni di stop» diventa «anche qualche giorno»;
  - in auto Naha-Motobu: «un paio d'ore»;
  - tolti i 15 minuti a piedi per Ama beach;
  - Yoshino beach: tolto «con la marea alta».

**Confermato:**
- JMA, stagione delle piogge: media dal 10 maggio al 21 giugno; nel 2026 dal 4 maggio al 29 giugno.
- JMA, tifoni che si avvicinano: 1,5 a luglio, 2,3 ad agosto, 2,0 a settembre, 1,1 a ottobre.
- Traghetti per Zamami: Ferry Zamami 2.900 yen, Queen Zamami 3.950 yen, tassa 100 yen (tariffe del 25/11/2025); circa 2 ore e circa 1 ora.
- Churaumi: 2.180 yen; vasca Kuroshio con squali balena e mante.
- Gusuku UNESCO 2000, compreso Nakijin; Seiden bruciato nel 2019.
- Yanbaru: parco nazionale dal 2016, UNESCO dal 2021.
- Specie e isole: rallo di Okinawa solo a Yanbaru, gatto di Iriomote, Hateruma isola abitata più a sud.
- Voli diretti Tokyo/Osaka su Shimojishima.

**Fonti:**
- https://www.data.jma.go.jp/cpd/baiu/kako_baiu01.html
- https://www.data.jma.go.jp/yoho/typhoon/statistics/average/average.html
- https://www.vill.zamami.okinawa.jp/sempaku/ryokin_jikoku/
- https://churaumi.okinawa/en/guide/info/
- https://oki-park.jp/shurijo/en/
- Wikipedia en: Shuri_Castle, Gusuku_Sites_and_Related_Properties_of_the_Kingdom_of_Ryukyu, Irabu_Island, Yanbaru_National_Park, Okinawa_rail, Shimojishima_Airport, Iriomote, Hateruma, Zamami,_Okinawa, Okinawa_Churaumi_Aquarium, Kabira_Bay.
- Pinaisara, solo da operatori turistici: iriomote-tour.com, veltra.com.

**Perché INCOMPLETO:** non ho trovato una fonte puntuale per:
- le tartarughe di Ama beach;
- il nome 17END;
- la stagione e le reti per la medusa habu;
- il mercato di Makishi con il pesce cucinato al piano di sopra;
- il permesso di guida internazionale;
- la regola di Pinaisara su una pagina ufficiale.

### 93 · Hokkaido e lo sci (md, dati, schede sapporo, niseko, furano, hakuba)

**Corretto o tolto:**
- **Stagione di Niseko United:** non è «dal 28 novembre al 5 maggio» per tutte le stazioni. Apre il 28 novembre; Grand Hirafu e Annupuri restano aperte fino al 5 maggio, Niseko Village e Hanazono chiudono ad aprile.
- **Sci notturno:** «metà dicembre-metà marzo» diventa «12 dicembre-22 marzo» (2026-27).
- **Bus Bigruns:** la prenotazione non è «obbligatoria entro sette giorni». Costa 5.000 yen online, prenotando entro sette giorni prima, e 5.500 con le altre modalità.
- **Rapid Airport:** tolto «prosegue fino a Otaru». «Una quarantina di minuti» diventa «poco più di mezz'ora» (il più veloce impiega 33 minuti).
- **Hakuba:**
  - I tempi sono minimi («almeno»).
  - Da Kanazawa si va con lo Shinkansen e la linea JR Oito, da Osaka in treno: il bus vale solo per Tokyo.
  - Shiga Kogen diventa «considerata tra le più grandi».
- **Tolti:**
  - i tempi Niseko-Rusutsu, Sapporo-Furano e Sapporo-Teine/Kokusai;
  - «-10 °C in quota»;
  - «un anno prima» e «sei-otto mesi prima» per l'alloggio, ora «molti mesi di anticipo»;
  - «skipass online a novembre».

**Confermato:**
- Skipass Niseko United 2026-27: 13.500, 12.600 e 8.800 yen con le date dei periodi; 7 giorni 91.500 yen; stagionale 184.400 yen.
- Niseko Rules: casco e ARTVA obbligatori, pala e sonda vivamente consigliate; soccorso da almeno 100.000 yen.
- Rusutsu: 16.700 yen alla cassa, 13.200 online, 10.500 e 7.900 yen, con le date.
- Kiroro: Ski Bus e Powder Express con le date; taxi da Otaru da 12.000 yen, circa 40 minuti.
- Hakuba Valley: 10 stazioni; 1 giorno 11.100 yen, 7 giorni 74.500 yen validi 12 giorni.
- Yuki Matsuri 2027: dal 4 all'11 febbraio in tutte e tre le sedi.
- Shinkansen per Sapporo: fine dell'anno fiscale 2038.

**Fonti:**
- https://www.niseko.ne.jp/en/lift/
- https://www.niseko.ne.jp/en/niseko/niseko-rules/
- https://rusutsu.com/en/winter-lift-tickets/
- https://rusutsu.com/en/access-shuttle-bus-new-chitose-airport/
- https://www.kiroro.co.jp/access-winter/
- https://www.hakubavalley.com/en/ticket_en/
- https://www.hakubavalley.com/en/access_en/
- https://www.snowfes.com/
- https://nippon.com/en/news/yjj2025031000648
- Wikipedia en: New_Chitose_Airport, Shiga_Kogen.

**Perché INCOMPLETO:**
- Mancano i prezzi di Kiroro, Furano e dell'Hokkaido Resort Liner, le date di apertura di Kiroro e Furano, i costi di alloggio e noleggio. Il testo li tratta già come «da controllare».
- Restano senza fonte puntuale due descrizioni: «la neve più leggera a Furano» e «il soup curry nato a Sapporo».

---

## Thailandia

### 94 · Thailandia nord (md, dati, schede chiang-rai, triangolo-d-oro, pai-mae-hong-son)

**Corretto o tolto:**
- **Fumo stagionale:** tolto «verso la fine della stagione secca», ora «in certi periodi dell'anno», come su gov.uk.
- **Truffa del Grand Palace «chiuso»:** tolta, nessuna fonte. Al suo posto, biglietti e orari sul sito ufficiale.
- **Treno notturno:** «in alta stagione finiscono presto» diventa «nei periodi di festa possono finire settimane prima» (Seat61).
- **Doi Suthep:** l'ingresso a pagamento dal 1/10/2025 è confermato, l'importo no; tolti i 100 THB.
- **Doi Inthanon:** tolte le pagode «che si pagano a parte»; aggiunti 2.565 m.
- **Bus Chiang Mai-Chiang Rai:** circa 3 ore e mezza.
- **Tempio Bianco:** «aperto nel 1997». Confermati i 200 THB; tolti la data di inizio della tariffa, la galleria compresa nel biglietto e le esenzioni per bambini e anziani.
- **Baan Dam:** museo d'arte privato di Thawan Duchanee; tolti «corna, pelli e ossa».
- **Torre dell'orologio:** tolto «dorata».
- **Hall of Opium:** ora «una fondazione della famiglia reale».
- **Chiang Saen:** «più vecchia di Chiang Rai» era sbagliato. Ora: fondata nel 1329.
- **Sukhothai:** «capitale del regno di Sukhothai», UNESCO 1991.
- **Elefanti:** tolte le frasi generiche non confermate.
- **Wat Pho e Wat Arun:** tolti i prezzi dai dati.

**Confermato:**
- gov.uk:
  - visto di 30 giorni dal 15/9/2026;
  - TDAC dal 1/5/2025, da compilare nei 3 giorni prima dell'arrivo;
  - moto, casco e patente internazionale;
  - rischi con gli elefanti;
  - Myanmar e valichi con il Laos.
- Treno notturno da Krung Thep Aphiwat, 12-14 ore.
- Doi Suthep: 309 gradini.
- Wat Sri Suphan: sala delle ordinazioni vietata alle donne.
- Mercati del sabato e della domenica.
- Elefanti: ABTA 2019, lista di World Animal Protection 2025, scheda dell'Elephant Nature Park.

**Fonti:**
- gov.uk/foreign-travel-advice/thailand: entry-requirements, safety-and-security, health, regional-risks.
- https://www.seat61.com/Thailand.htm
- https://www.royalgrandpalace.th/en/home
- https://www.elephantnaturepark.org/
- https://www.saveelephant.org/
- https://www.worldanimalprotection.org/elephant-friendly-tourist-guide
- abta.com
- chiangmaicitylife.com, solo per la data d'ingresso del Doi Suthep.
- Wikipedia en: Wat_Rong_Khun, Wat_Rong_Suea_Ten, Baan_Dam_Museum, Chiang_Rai, Chiang_Mai, Wat_Phra_That_Doi_Suthep, Wat_Sri_Suphan, Doi_Inthanon_National_Park, Golden_Triangle_(Southeast_Asia), Sop_Ruak, Chiang_Saen, Sukhothai_Historical_Park.

**Perché INCOMPLETO:** restano senza fonte:
- la stagione delle Andamane da novembre a febbraio;
- il ritiro in hotel dei centri per elefanti;
- le descrizioni generiche di Pai, del Pai Canyon, del Wat Pha Lat e del loop di Mae Hong Son.

---

## Indonesia

### 84 · Bali, Nusa Penida, Lembongan e Komodo

**Corretto o tolto:**
- **Barca veloce Sanur-Nusa:** «circa mezz'ora, di più con il mare mosso». Tolti i prezzi.
- **Volo Denpasar-Labuan Bajo:** «volo diretto breve».
- **Cambio euro-rupia:** tolto.
- **Sidemen:** tolti il tempo e il prezzo del driver.
- **Kalong:** «stormi di volpi volanti».
- **Padar:** tolto «dalle otto la fila».
- **Pink Beach:** tolta la spiegazione della sabbia rosa.
- **Taka Makassar:** «sosta classica dei giri in barca».
- **Kecak:** in voce di guida, «decine di uomini».

**Confermato:**
- Love Bali: 150.000 IDR.
- Parco di Komodo: 250.000 IDR dal 30/10/2024.
- Nyepi.
- Diamond Beach e Atuh sulla costa est di Penida.
- Barca pubblica Lembongan-Penida.
- Angel's Billabong solo con la bassa marea.

**Aggiornamento di Rick:** le tre notti su Nusa Penida, girata tutta con calma, sono state aggiunte come suo ricordo e consiglio a fine giorno 5, nel consiglio «Dormire su Nusa Penida» e nella nota finale. L'itinerario resta di due notti e lo spiega.

**Fonti:**
- https://lovebali.baliprov.go.id/
- gov.uk/foreign-travel-advice/indonesia/entry-requirements
- kupang.antaranews.com/berita/140801
- detik.com/bali (tariffe di Komodo)
- Wikivoyage: Komodo_National_Park, Nusa_Penida
- Wikipedia en: Nusa_Penida, Kecak, Nyepi

**Perché INCOMPLETO:** non verificati in modo indipendente:
- la tassa locale delle Nusa, già generica;
- la stagione secca di Komodo da aprile a dicembre;
- le «tre baie con tre sabbie» di Padar.

### 85 · Bali, Sulawesi e Raja Ampat

**Corretto o tolto:**
- **Volo Sorong-Denpasar:** stagionale; nel 2026 riattivato dal 25/10 fino a marzo 2027. Per luglio-ottobre si vola via Makassar o Giacarta. Tolti TransNusa e Lion Air.
- **Traghetto Sorong-Waisai:** circa 2 ore, biglietto al porto. Tolto il prezzo.
- **PIN di Raja Ampat:** si paga a Sorong o a Waisai, spesso è incluso nei pacchetti. L'importo è cambiato nel 2026 e va verificato.
- **Tangkoko:** vicino a Bitung, sotto il monte Tangkoko.
- **Bunaken:** tolti «centinaia di metri» e il costo del diving.
- **Kecak:** «decine».
- **Funerali toraja:** eventi pubblici; conviene una guida; tolto lo zucchero; stagione soprattutto luglio-agosto.

**Confermato:**
- Makassar-Toraja: 8-10 ore.
- Bancomat a Waisai.
- gov.uk: avvisi per la Papua.
- Raja Ampat in Papua Barat Daya.
- Listino Wale Adventure.

**Aggiornamenti di Rick:**
- «Io Tomohon e Tangkoko li ho fatti con loro» (Wale Adventure), aggiunto anche nella nota finale.
- Paparisa confermato.
- Arborek:
  - Tolto ogni suo ricordo di Arborek: la frase «a venti metri dalla riva» e il reef di Arborek tra le sue `treEsperienzePiuBelle`, che ora cominciano con «Il mare di Raja Ampat».
  - Al loro posto, come consiglio e non come esperienza, due homestay presi da stayrajaampat.com: Worisun e Adefiro.

**Fonti:**
- oceanearthtravels.com (orari del traghetto 2026)
- Wikivoyage: Raja_Ampat, Tana_Toraja
- Wikipedia en: Raja_Ampat_Islands, Tangkoko_Batuangus_Nature_Reserve
- bcasekuritas.co.id (rotta Garuda)
- gov.uk/foreign-travel-advice/indonesia/regional-risks
- https://wale-adventure.com/
- https://www.stayrajaampat.com/accommodation/worisun-homestay/
- https://www.stayrajaampat.com/accommodation/adefiro-homestay/

**Perché INCOMPLETO:** non confermati:
- il volo diretto Denpasar-Manado, ora «quando la rotta è attiva»;
- l'importo del PIN;
- i venti di sud-est da maggio a settembre.

### 86 · Indonesia isola per isola

**Corretto o tolto:**
- **All Indonesia Arrival Card:** tolto «da ottobre 2025».
- **Cambio:** tolto.
- **Rinjani:**
  - Chiusura nei primi mesi dell'anno (nel 2026 dal 1/1 al 31/3).
  - Tolta la frase su incendi e prenotazioni sospese a settembre 2026.
  - Prenotazioni con l'app ufficiale E-Rinjani; erinjani.id ora rimanda a un'agenzia privata.
- **Raja Ampat:** allineato al viaggio 85.
- **Tanjung Puting:** tolte le «stazioni del cibo» e il fumo degli incendi; aggiunto Camp Leakey, del 1971; voli su Pangkalan Bun.
- **Snodi aerei:** «diretti o con scalo secondo la stagione».

**Scheda Lombok/Gili** (`destinazioni/indonesia.ts` e copie en/es):
- tolto «eRinjani, sistema ufficiale», ora c'è l'app ufficiale E-Rinjani con l'avviso sul sito che rimanda all'agenzia;
- tolto «massimo quattro escursionisti per guida».

**Aggiornamento di Rick:** tre notti su Penida nella sezione Nusa; ad Arborek solo il consiglio degli homestay, senza ricordi.

**Fonti:**
- gov.uk/foreign-travel-advice/indonesia: entry-requirements, safety-and-security
- Rinjani: megapolitan.antaranews.com/berita/507266, cnnindonesia.com, metrotvnews.com
- Wikipedia en e Wikivoyage: Tanjung_Puting_National_Park

**Perché INCOMPLETO:**
- Le sezioni Giava, Sumatra, Mentawai e Flores (Borobudur, Wae Rebo, malaria) vengono dalle schede del sito e non sono state riverificate; vale lo stesso per l'obbligo di guida al Rinjani.
- Non è verificato il volo diretto Giacarta-Labuan Bajo.

---

## Frasi in prima persona da confermare con Rick (lasciate nel testo)

**Indonesia:**
- 84 e 85: «A Ubud ho dormito a Villa Jacques».
- 84: «Io ho fatto il liveaboard con Kanha Loka, e la consiglio».
- 84: i contatti Pande Wirta, Feby Yastika e Hendra.
- 85: «Abbiamo dormito al Tanjung Mefiyai Homestay… Reno è super gentile».
- 85 e 86: il viaggio di agosto 2026, «dieci giorni senza pioggia», «il vento ci ha fatto saltare un'uscita».
- 85: «Tana Toraja è la cosa più diversa che ho visto… centinaia di persone».
- 85: Wale Adventure, «chiedete di Alvaro», «il loro sito l'ho fatto io».
- 86:
  - «Della mia Bali… la danza Kecak: settanta uomini». Wikipedia dice da 50 a 100 interpreti; è nella frase di Rick, quindi è rimasta.
  - «Il Rinjani è il trekking più duro che ho fatto».
  - «All'Ijen… ceste di zolfo da ottanta chili».
  - «A Bukit Lawang… dopo tre ore un orango».
  - «Ci sono andato con Mentawai Tribe».
  - «Flores… per me la più interessante».

**Già confermate da Rick:** Paparisa a Kri; Tomohon e Tangkoko con Wale Adventure; tre notti su Nusa Penida. Ad Arborek non ricorda, quindi ogni suo ricordo è stato tolto.

**Thailandia (94):**
- «A Chiang Mai ci sono stato in un viaggio a parte».
- «La mattinata con gli elefanti dell'Elephant Nature Park… uno dei miei ricordi più belli».
- «è quello dove sono stato».
- La chiusura «Di Chiang Mai mi è rimasto il ritmo…».

**Giappone (91, 92, 93):** nessuna frase in prima persona. Sono guide in voce neutra; per il 91 le tappe da confermare sono in `docs/giappone-da-confermare.md`.
